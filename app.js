/* =========================================================
   InfoLivres — مكتبة الكتب المجانية (PWA) · متعدد اللغات
   هندسة وإخراج : حاج إسماعيل إبراهيم
   ========================================================= */
(function () {
  'use strict';

  /* ---------- بيانات ---------- */
  var BOOKS = (IL.BOOKS_CLASSICS || []).concat(IL.BOOKS_TECH || [], IL.BOOKS_KUTUB || []);
  var CATS = (IL.CATEGORIES || []).concat(IL.CATEGORIES_KG || []);
  var CATMAP = {};
  CATS.forEach(function (c) { CATMAP[c.id] = c; });
  BOOKS.forEach(function (b) {
    if (!b.src) b.src = 'infolivres';
    if (!CATMAP[b.c]) CATMAP[b.c] = { id: b.c, ar: b.c, fr: b.c, icon: '📚' };
  });

  var CAT_COUNTS = {};
  var SRC_COUNTS = {};
  BOOKS.forEach(function (b) {
    CAT_COUNTS[b.c] = (CAT_COUNTS[b.c] || 0) + 1;
    SRC_COUNTS[b.src] = (SRC_COUNTS[b.src] || 0) + 1;
  });
  function catCountsFor(src) {
    if (src === 'all') return CAT_COUNTS;
    var m = {};
    BOOKS.forEach(function (b) { if (b.src === src) m[b.c] = (m[b.c] || 0) + 1; });
    return m;
  }

  /* ---------- تخزين محلي ---------- */
  var LS = { favs: 'il_favs', ratings: 'il_ratings', downloads: 'il_downloads' };
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  var favs = load(LS.favs, []);
  var ratings = load(LS.ratings, {});
  var downloads = load(LS.downloads, {});

  function isFav(id) { return favs.indexOf(id) !== -1; }
  function toggleFav(id) {
    var i = favs.indexOf(id);
    if (i === -1) { favs.push(id); toast(t('toast.favAdd')); }
    else { favs.splice(i, 1); toast(t('toast.favDel')); }
    save(LS.favs, favs);
    render();
  }
  function rate(id, stars) {
    if (ratings[id] === stars) { delete ratings[id]; }
    else { ratings[id] = stars; toast(t('toast.rated', { n: stars })); }
    save(LS.ratings, ratings);
    render();
    if (modal.dataset.id === id) openDetail(id);
  }
  function noteDownload(id) {
    downloads[id] = (downloads[id] || 0) + 1;
    save(LS.downloads, downloads);
    var b = byId(id);
    toast(t('toast.download', { title: b ? IL.titleOf(b) : '' }));
    renderStats();
  }
  function byId(id) { for (var i = 0; i < BOOKS.length; i++) { if (BOOKS[i].id === id) return BOOKS[i]; } return null; }

  /* ---------- أدوات ---------- */
  function t(k, p) { return IL.t(k, p); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function isArabic(s) { return /[\u0600-\u06FF]/.test(String(s || '')); }
  function dirAttr(s) { return isArabic(s) ? ' dir="rtl"' : ' dir="ltr"'; }
  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
      .replace(/[’'`´]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function num(n) { return Number(n || 0).toLocaleString('en-US'); }
  function hostOf(u) { try { return new URL(u).host.replace(/^www\./, ''); } catch (e) { return ''; } }
  function avgRating(b) {
    var user = ratings[b.id] || 0;
    var votes = b.v || 0;
    if (user) { return { avg: (b.r * votes + user) / (votes + 1), votes: votes + 1, user: user }; }
    return { avg: b.r, votes: votes, user: 0 };
  }
  function coverFallbackSVG(title) {
    var letter = (title || '?').trim().charAt(0);
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="280" height="420">' +
      '<rect width="280" height="420" fill="#0f3d2e"/>' +
      '<rect x="16" y="16" width="248" height="388" fill="none" stroke="#c9a227" stroke-width="3"/>' +
      '<text x="140" y="230" font-size="120" fill="#e0bb4d" text-anchor="middle" font-family="serif">' + esc(letter) + '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  function starsHTML(b, big) {
    var st = avgRating(b);
    var filled = Math.round(st.avg);
    var row = '';
    for (var i = 1; i <= 5; i++) {
      row += '<button type="button" data-rate="' + i + '" class="' + (i <= filled ? 'on' : '') + '" ' +
        'aria-label="' + esc(t('stars.rate', { n: i })) + '" title="' + i + '/5">★</button>';
    }
    return '<div class="stars" data-stars="' + b.id + '"' + (big ? ' style="gap:.6rem"' : '') + '>' +
      '<span class="stars__row" role="group" aria-label="' + esc(t('stars.group')) + '">' + row + '</span>' +
      '<span class="stars__val">' + esc(t('stars.meta', { avg: st.avg.toFixed(1), votes: num(st.votes) })) +
      (st.user ? ' · ' + esc(t('stars.you', { n: st.user })) : '') + '</span></div>';
  }
  function metaChips(b) {
    var out = [];
    if (b.p) out.push(esc(t('meta.pages', { n: num(b.p) })));
    if (b.y) out.push(esc(t('meta.year', { y: b.y })));
    if (state.source === 'all') out.push(esc(t('meta.source', { name: IL.sourceName(b.src) })));
    if (downloads[b.id]) out.push(esc(t('meta.downloads', { n: num(downloads[b.id]) })));
    return out.length ? '<div class="card__meta">' + out.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>' : '';
  }

  /* ---------- الحالة ---------- */
  var state = { q: '', cat: 'all', sort: 'rating', onlyFav: false, source: 'all' };

  /* ---------- عناصر ---------- */
  var grid = document.getElementById('grid');
  var chips = document.getElementById('chips');
  var sourceFilter = document.getElementById('sourceFilter');
  var catsGrid = document.getElementById('catsGrid');
  var statsEl = document.getElementById('stats');
  var resultsText = document.getElementById('resultsText');
  var empty = document.getElementById('empty');
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var sortSelect = document.getElementById('sortSelect');
  var btnOnlyFav = document.getElementById('btnOnlyFav');
  var btnFav = document.getElementById('btnFav');
  var favCount = document.getElementById('favCount');
  var btnReset = document.getElementById('btnReset');
  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modalContent');
  var toastEl = document.getElementById('toast');
  var printArea = document.getElementById('printArea');
  var langSwitch = document.getElementById('langSwitch');

  /* ---------- فلترة وترتيب ---------- */
  function filtered() {
    var q = norm(state.q);
    var out = BOOKS.filter(function (b) {
      if (state.source !== 'all' && b.src !== state.source) return false;
      if (state.cat !== 'all' && b.c !== state.cat) return false;
      if (state.onlyFav && !isFav(b.id)) return false;
      if (!q) return true;
      var c = CATMAP[b.c];
      var hay = norm([b.t, b.tf, b.a, b.af, b.d, c ? c.ar : '', c ? c.fr : '', c ? (IL.CAT_EN[b.c] || '') : ''].join(' '));
      return hay.indexOf(q) !== -1;
    });
    var dir = IL.lang === 'ar' ? 1 : -1;
    out.sort(function (a, b) {
      switch (state.sort) {
        case 'title': return dir * String(IL.titleOf(a)).localeCompare(String(IL.titleOf(b)), IL.lang);
        case 'year': return (b.y || 0) - (a.y || 0);
        case 'pages': return (b.p || 0) - (a.p || 0);
        case 'downloads': return (downloads[b.id] || 0) - (downloads[a.id] || 0);
        default: return avgRating(b).avg - avgRating(a).avg;
      }
    });
    return out;
  }

  /* ---------- عرض ---------- */
  function renderLangSwitch() {
    langSwitch.innerHTML = IL.LANGS.map(function (l) {
      var on = l.id === IL.lang;
      return '<button type="button" class="langswitch__btn' + (on ? ' is-active' : '') + '" data-lang="' + l.id + '" ' +
        'lang="' + l.id + '" title="' + esc(l.label) + '" aria-pressed="' + on + '">' + esc(l.short) + '</button>';
    }).join('');
  }

  function renderSourceBar() {
    if (!sourceFilter) return;
    sourceFilter.innerHTML = IL.SOURCES.map(function (s) {
      var n = s.id === 'all' ? BOOKS.length : (SRC_COUNTS[s.id] || 0);
      if (s.id !== 'all' && n === 0) return '';
      var on = state.source === s.id;
      return '<button type="button" class="source-btn' + (on ? ' is-active' : '') + '" data-source="' + s.id + '" ' +
        'aria-pressed="' + on + '">' + esc(IL.sourceName(s.id)) + ' <b>' + n + '</b></button>';
    }).join('');
  }

  function renderChips() {
    var counts = catCountsFor(state.source);
    var total = 0;
    Object.keys(counts).forEach(function (k) { total += counts[k]; });
    var items = [{ id: 'all', name: t('cat.all'), icon: '📚', n: total }];
    Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })
      .forEach(function (id) { items.push({ id: id, name: IL.catName(CATMAP[id]), icon: CATMAP[id].icon, n: counts[id] }); });

    chips.innerHTML = items.map(function (it) {
      var on = state.cat === it.id;
      return '<button type="button" class="chip" role="tab" data-cat="' + it.id + '" aria-selected="' + on + '">' +
        it.icon + ' ' + esc(it.name) + ' <b>' + it.n + '</b></button>';
    }).join('');
  }

  function renderCatsGrid() {
    catsGrid.innerHTML = CATS.filter(function (c) { return c.src !== 'kutubgate'; }).map(function (c) {
      var n = CAT_COUNTS[c.id] || 0;
      var second = IL.lang === 'ar' ? c.fr : (IL.lang === 'fr' ? c.ar : c.fr);
      return '<a class="cat-link' + (n ? '' : ' cat-link--off') + '" href="https://infolivres.org/livres-gratuits-pdf/' + c.id + '/" target="_blank" rel="noopener">' +
        '<span class="cat-link__icon">' + c.icon + '</span>' +
        '<span class="cat-link__txt"><span>' + esc(IL.catName(c)) + '</span>' +
        '<span class="cat-link__fr"' + dirAttr(second) + '>' + esc(second) + '</span></span>' +
        '<span class="cat-link__count">' + (n ? esc(t('cats.count', { n: n })) : '↗') + '</span>' +
        '</a>';
    }).join('');
  }

  function renderStats() {
    var catCount = Object.keys(CAT_COUNTS).length;
    statsEl.innerHTML = [
      '<li>' + t('stats.1', { n: num(BOOKS.length) }) + '</li>',
      '<li>' + t('stats.2', { n: num(catCount) }) + '</li>',
      '<li>' + t('stats.3') + '</li>',
      '<li>' + t('stats.4') + '</li>'
    ].join('');
  }

  function cardHTML(b) {
    var catName = IL.catName(CATMAP[b.c]);
    var title = IL.titleOf(b);
    var sub = IL.subOf(b);
    var author = IL.authorOf(b);
    var on = isFav(b.id);
    return '<article class="card" data-id="' + b.id + '">' +
      '<div class="card__cover">' +
        '<img loading="lazy" decoding="async" src="' + esc(b.cv) + '" alt="' + esc(t('card.coverAlt', { title: title })) + '" data-cover-text="' + esc(title) + '">' +
        '<span class="card__badge">' + CATMAP[b.c].icon + ' ' + esc(catName) + '</span>' +
        '<button type="button" class="card__fav' + (on ? ' is-on' : '') + '" data-fav="' + b.id + '" ' +
          'aria-pressed="' + on + '" title="' + esc(t('card.favTitle')) + '" aria-label="' + esc(t('card.favAria', { title: title })) + '">' + (on ? '♥' : '♡') + '</button>' +
      '</div>' +
      '<div class="card__body">' +
        '<h3 class="card__title"><a href="#" data-detail="' + b.id + '">' + esc(title) + '</a></h3>' +
        (sub ? '<p class="card__title-fr"' + dirAttr(sub) + '>' + esc(sub) + '</p>' : '') +
        '<p class="card__author"' + dirAttr(author) + '>' + esc(author) + '</p>' +
        starsHTML(b) +
        metaChips(b) +
        (IL.lang === 'ar' && b.d ? '<p class="card__desc" dir="rtl">' + esc(b.d) + '</p>' : '') +
        '<div class="card__actions">' +
          '<a class="btn gold" href="' + esc(b.pdf) + '" target="_blank" rel="noopener" data-download="' + b.id + '">' + esc(t('card.pdf')) + '</a>' +
          '<button type="button" class="btn ghost" data-detail="' + b.id + '">' + esc(t('card.details')) + '</button>' +
          '<button type="button" class="btn icon-only" data-print="' + b.id + '" title="' + esc(t('card.printTitle')) + '" aria-label="' + esc(t('card.printAria')) + '">🖨</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function render() {
    var list = filtered();

    if (state.onlyFav && favs.length === 0) {
      grid.innerHTML = '';
      empty.hidden = false;
      empty.querySelector('h2').textContent = t('empty.fav.title');
      empty.querySelector('p').textContent = t('empty.fav.text');
    } else if (!list.length) {
      grid.innerHTML = '';
      empty.hidden = false;
      empty.querySelector('h2').textContent = t('empty.none.title');
      empty.querySelector('p').textContent = t('empty.none.text');
    } else {
      empty.hidden = true;
      grid.innerHTML = list.map(cardHTML).join('');
    }

    var where = state.cat === 'all' ? t('cat.all') : IL.catName(CATMAP[state.cat]);
    var parts = [t('results.books', { n: num(list.length) })];
    if (where) parts.push(where);
    if (state.source !== 'all') parts.push(IL.sourceName(state.source));
    if (state.q) parts.push(t('results.search', { q: state.q }));
    if (state.onlyFav) parts.push(t('results.fav'));
    resultsText.textContent = parts.join(' — ');

    btnReset.hidden = !(state.q || state.cat !== 'all' || state.onlyFav || state.source !== 'all');
    favCount.textContent = favs.length ? t('btn.fav') + ' (' + favs.length + ')' : t('btn.fav');
    btnFav.classList.toggle('is-active', state.onlyFav);
    searchClear.hidden = !state.q;

    renderSourceBar();
    renderChips();
  }

  /* ---------- نافذة التفاصيل ---------- */
  function openDetail(id) {
    var b = byId(id);
    if (!b) return;
    var title = IL.titleOf(b);
    var sub = IL.subOf(b);
    var author = IL.authorOf(b);
    var authorSub = IL.authorSubOf(b);
    modal.dataset.id = id;

    var meta = [];
    if (b.p) meta.push(esc(t('unit.pages', { n: num(b.p) })));
    if (b.y) meta.push(esc(t('meta.year', { y: b.y })));
    var catDef = CATMAP[b.c];
    var catLabel = '📂 ' + esc(IL.catName(catDef));
    meta.push(catDef && catDef.url ? '<a href="' + esc(catDef.url) + '" target="_blank" rel="noopener">' + catLabel + '</a>' : catLabel);
    meta.push(esc(t('modal.free')));
    if (downloads[b.id]) meta.push(esc(t('modal.downloaded', { n: num(downloads[b.id]) })));

    modalContent.innerHTML =
      '<div class="modal__cover"><img src="' + esc(b.cv) + '" alt="' + esc(t('card.coverAlt', { title: title })) + '" data-cover-text="' + esc(title) + '"></div>' +
      '<div class="modal__info">' +
        '<h2 class="modal__title" id="modalTitle">' + esc(title) + '</h2>' +
        (sub ? '<p class="modal__title-fr"' + dirAttr(sub) + '>' + esc(sub) + '</p>' : '') +
        '<p class="modal__author"' + dirAttr(author) + '>' + esc(author) +
          (authorSub ? ' <span' + dirAttr(authorSub) + '>· ' + esc(authorSub) + '</span>' : '') + '</p>' +
        '<div class="modal__rate">' + starsHTML(b, true) + '</div>' +
        '<ul class="modal__meta">' + meta.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ul>' +
        (IL.lang !== 'ar' && b.d ? '<p class="modal__desc-note">' + esc(t('modal.descNote')) + '</p>' : '') +
        (b.d ? '<p class="modal__desc" dir="rtl" lang="ar">' + esc(b.d) + '</p>' : '') +
        '<div class="modal__actions">' +
          '<a class="btn gold" href="' + esc(b.pdf) + '" target="_blank" rel="noopener" data-download="' + b.id + '">' + esc(t('modal.download')) + '</a>' +
          '<button type="button" class="btn primary" data-print="' + b.id + '">' + esc(t('modal.print')) + '</button>' +
        '</div>' +
        (b.pg ? '<p class="modal__source">' + esc(t('modal.sourceLink', { name: IL.sourceName(b.src) })) + '<a href="' + esc(b.pg) + '" target="_blank" rel="noopener">' + esc(hostOf(b.pg) || IL.sourceName(b.src)) + '</a></p>' : '') +
      '</div>';

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    modal.dataset.id = '';
    document.body.style.overflow = '';
  }

  /* ---------- الطباعة ---------- */
  function printBookBlock(b) {
    var title = IL.titleOf(b);
    var sub = IL.subOf(b);
    var author = IL.authorOf(b);
    var st = avgRating(b);
    var meta = [];
    if (b.p) meta.push(t('unit.pages', { n: num(b.p) }));
    if (b.y) meta.push(String(b.y));
    meta.push(IL.catName(CATMAP[b.c]));
    meta.push(t('print.rating', { avg: st.avg.toFixed(1) }));
    return '<div class="print-book">' +
      '<h3' + dirAttr(title) + '>' + esc(title) + '</h3>' +
      (sub ? '<p class="fr"' + dirAttr(sub) + '>' + esc(sub) + '</p>' : '') +
      '<p class="row" dir="' + IL.dirOf(IL.lang) + '"><strong' + dirAttr(author) + '>' + esc(author) + '</strong> — ' + esc(meta.join(' · ')) + '</p>' +
      (b.d && IL.lang === 'ar' ? '<p class="desc" dir="rtl">' + esc(b.d) + '</p>' : '') +
      '<p class="src">' + esc(t('print.source', { name: IL.sourceName(b.src) })) + '</p>' +
      '<p class="url">' + esc(b.pdf) + '</p>' +
    '</div>';
  }

  function printHead(desc, single) {
    var date = new Date().toLocaleDateString(t('print.dateLocale'), { year: 'numeric', month: 'long', day: 'numeric' });
    return '<div class="print-head">' +
      '<h1 dir="' + IL.dirOf(IL.lang) + '">' + (single ? t('print.card') : t('print.list')) + ' ' + t('print.suffix') + '</h1>' +
      '<p dir="' + IL.dirOf(IL.lang) + '">' + esc(t('print.meta', { desc: desc, date: date })) + '</p>' +
      '</div>';
  }

  function preparePrint(html) {
    printArea.setAttribute('lang', IL.lang);
    printArea.setAttribute('dir', IL.dirOf(IL.lang));
    printArea.innerHTML = html;
  }

  function printBook(id) {
    var b = byId(id);
    if (!b) return;
    preparePrint(printHead(t('print.one'), true) + '<div class="print-list">' + printBookBlock(b) + '</div>' +
      '<div class="print-foot">' + t('print.foot') + '</div>');
    window.print();
    toast(t('toast.print'));
  }
  function printList() {
    var list = filtered();
    if (!list.length) { toast(t('toast.nothing')); return; }
    var where = state.cat === 'all' ? t('cat.all') : IL.catName(CATMAP[state.cat]);
    var desc = t('results.books', { n: num(list.length) }) + ' · ' + where + (state.q ? ' · ' + t('results.search', { q: state.q }) : '');
    preparePrint(printHead(desc, false) + '<div class="print-list">' + list.map(printBookBlock).join('') + '</div>' +
      '<div class="print-foot">' + t('print.foot') + '</div>');
    window.print();
    toast(t('toast.printList'));
  }

  /* ---------- تنبيه ---------- */
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 2600);
  }

  /* ---------- أحداث ---------- */
  var searchTimer = null;
  searchInput.addEventListener('input', function () {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { state.q = searchInput.value; render(); }, 130);
  });
  document.getElementById('searchForm').addEventListener('submit', function (e) { e.preventDefault(); });

  searchClear.addEventListener('click', function () {
    searchInput.value = ''; state.q = ''; searchInput.focus(); render();
  });

  sortSelect.addEventListener('change', function () { state.sort = sortSelect.value; render(); });

  btnOnlyFav.addEventListener('click', function () {
    state.onlyFav = !state.onlyFav;
    btnOnlyFav.setAttribute('aria-pressed', String(state.onlyFav));
    render();
  });
  btnFav.addEventListener('click', function () {
    state.onlyFav = true;
    btnOnlyFav.setAttribute('aria-pressed', 'true');
    render();
    document.getElementById('main').scrollIntoView({ block: 'start' });
  });

  function setSource(id) {
    state.source = id;
    var counts = catCountsFor(id);
    if (state.cat !== 'all' && !counts[state.cat]) state.cat = 'all';
    render();
  }

  function resetAll() {
    state.q = ''; state.cat = 'all'; state.onlyFav = false; state.source = 'all';
    searchInput.value = '';
    btnOnlyFav.setAttribute('aria-pressed', 'false');
    render();
  }
  btnReset.addEventListener('click', resetAll);
  document.getElementById('btnEmptyReset').addEventListener('click', resetAll);
  document.getElementById('btnPrintList').addEventListener('click', printList);

  document.addEventListener('click', function (e) {
    var el = e.target;
    if (!el.closest) return;

    var langBtn = el.closest('[data-lang]');
    if (langBtn) {
      var lang = langBtn.getAttribute('data-lang');
      if (lang !== IL.lang) { IL.setLang(lang); toast(IL.LANGS.filter(function (l) { return l.id === lang; })[0].label); }
      return;
    }

    var chip = el.closest('[data-cat]');
    if (chip) { state.cat = chip.getAttribute('data-cat'); render(); return; }

    var srcBtn = el.closest('[data-source]');
    if (srcBtn) { setSource(srcBtn.getAttribute('data-source')); return; }

    var favBtn = el.closest('[data-fav]');
    if (favBtn) { e.preventDefault(); toggleFav(favBtn.getAttribute('data-fav')); return; }

    var rateBtn = el.closest('[data-rate]');
    if (rateBtn) {
      var holder = rateBtn.closest('[data-stars]');
      if (holder) rate(holder.getAttribute('data-stars'), parseInt(rateBtn.getAttribute('data-rate'), 10));
      return;
    }

    var detailBtn = el.closest('[data-detail]');
    if (detailBtn) { e.preventDefault(); openDetail(detailBtn.getAttribute('data-detail')); return; }

    var printBtn = el.closest('[data-print]');
    if (printBtn) { e.preventDefault(); printBook(printBtn.getAttribute('data-print')); return; }

    var dlBtn = el.closest('[data-download]');
    if (dlBtn) { noteDownload(dlBtn.getAttribute('data-download')); return; }

    if (el.closest('[data-close]')) { closeModal(); return; }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault(); searchInput.focus(); searchInput.select();
    }
  });

  document.addEventListener('error', function (e) {
    var el = e.target;
    if (el && el.tagName === 'IMG' && !el.dataset.fallback) {
      el.dataset.fallback = '1';
      el.src = coverFallbackSVG(el.getAttribute('data-cover-text') || '');
    }
  }, true);

  /* ---------- تغيير اللغة ---------- */
  IL.onLangChange(function () {
    var openId = modal.dataset.id;
    renderLangSwitch();
    renderCatsGrid();
    renderStats();
    render();
    if (openId) openDetail(openId);
  });

  /* ---------- تثبيت التطبيق ---------- */
  var installBtn = document.getElementById('btnInstall');
  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener('click', function () {
    if (!deferredPrompt) { toast(t('toast.installManual')); return; }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function (r) {
      if (r && r.outcome === 'accepted') toast(t('toast.installed'));
      deferredPrompt = null;
      installBtn.hidden = true;
    });
  });
  window.addEventListener('appinstalled', function () { installBtn.hidden = true; toast(t('toast.installed')); });

  /* ---------- الاتصال ---------- */
  var offlineBadge = document.getElementById('offlineBadge');
  function netState() { offlineBadge.hidden = navigator.onLine; }
  window.addEventListener('online', function () { netState(); toast(t('toast.online')); });
  window.addEventListener('offline', function () { netState(); toast(t('toast.offline')); });

  /* ---------- Service Worker ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  /* ---------- الإقلاع ---------- */
  renderLangSwitch();
  renderCatsGrid();
  renderStats();
  netState();
  render();
})();
