/* =========================================================
   InfoLivres — نظام تعدد اللغات (عربي / فرنسي / إنجليزي)
   هندسة وإخراج : حاج إسماعيل إبراهيم
   ========================================================= */
(function () {
  'use strict';

  if (typeof IL === 'undefined') { window.IL = {}; }

  /* ---------- أسماء التصنيفات بالإنجليزية ---------- */
  IL.CAT_EN = {
    'courts': 'Short Reads',
    'affaires-et-investissements': 'Business & Investing',
    'amour': 'Love & Romance',
    'animaux': 'Animals',
    'art-et-photographie': 'Art & Photography',
    'histoire': 'History',
    'horreur': 'Horror',
    'informatique': 'Computers & IT',
    'ingenierie': 'Engineering',
    'esoterisme': 'Esotericism',
    'biologie': 'Biology',
    'chimie': 'Chemistry',
    'croissance-personnelle': 'Personal Growth',
    'cuisine-et-boissons': 'Cooking & Drinks',
    'droit': 'Law',
    'langues': 'Languages',
    'mathematiques': 'Mathematics',
    'mystere-et-suspense': 'Mystery & Suspense',
    'mythologie': 'Mythology',
    'medecine': 'Medicine',
    'metiers': 'Trades & Crafts',
    'philosophie': 'Philosophy',
    'physique': 'Physics',
    'psychologie': 'Psychology',
    'religion': 'Religion',
    'sport': 'Sports',
    'therapies-alternatives': 'Alternative Therapies',
    'romans': 'Novels',
    'themes-divers': 'Miscellaneous',
    'livres-en-anglais': 'Books in English',
    'livres-en-espagnol': 'Books in Spanish',
    'livres-en-portugais': 'Books in Portuguese',
    'pour-enfants': "Children's Books",
    'adab-arabi': 'Arabic Literature',
    'sciences-sociales': 'Social Sciences',
    'economie': 'Economics',
    'politique': 'Politics',
    'sciences': 'Sciences',
    'poesie': 'Poetry',
    'nouvelles': 'Short Stories',
    'science-fiction': 'Science Fiction'
  };

  /* ---------- مصادر الكتب ---------- */
  IL.SOURCES = [
    { id: 'all', ar: 'كل المصادر', fr: 'Toutes les sources', en: 'All sources' },
    { id: 'infolivres', ar: 'InfoLivres', fr: 'InfoLivres', en: 'InfoLivres' },
    { id: 'kutubgate', ar: 'بوابة الكتب', fr: 'Kutubgate', en: 'Kutubgate' }
  ];
  IL.sourceName = function (id) {
    var key = id || 'all';
    for (var i = 0; i < IL.SOURCES.length; i++) {
      if (IL.SOURCES[i].id === key) return IL.SOURCES[i][IL.lang] || IL.SOURCES[i].ar;
    }
    return key;
  };
  IL.sourceOf = function (b) { return (b && b.src) || 'infolivres'; };

  /* ---------- قواميس الترجمة ---------- */
  var T = {

    /* ============ العربية ============ */
    ar: {
      'app.title': 'InfoLivres — مكتبة الكتب المجانية PDF',
      'app.desc': 'تطبيق لتحميل الكتب المجانية من InfoLivres.org وبوابة الكتب Kutubgate.com، مصنّفة حسب التخصصات: فلسفة، روايات، طب، هندسة، حاسوب، رياضيات، فيزياء، علم نفس وأكثر — تحميل مباشر بصيغة PDF بدون تسجيل.',
      'brand.tagline': 'مكتبة الكتب المجانية',
      'skip': 'تخطَّ إلى المحتوى',
      'lang.aria': 'تغيير اللغة',
      'offline.badge': 'وضع عدم الاتصال — الكتب المخزّنة متاحة',
      'btn.install': 'تثبيت',
      'btn.fav': 'المفضلة',
      'btn.print': 'طباعة',
      'hero.kicker': 'كتب حرّة · تحميل مباشر · بلا تسجيل',
      'hero.title': 'مكتبة الكتب المجانية',
      'hero.lead': 'كتب PDF مجانية من <a href="https://infolivres.org/" target="_blank" rel="noopener">InfoLivres.org</a> و<a href="https://www.kutubgate.com/" target="_blank" rel="noopener">بوابة الكتب</a>، مصنّفة حسب التخصصات: الفلسفة والروايات والطب والهندسة والحاسوب والرياضيات والفيزياء وعلم النفس…',
      'search.ph': 'ابحث بعنوان الكتاب أو اسم المؤلف…',
      'search.aria': 'بحث',
      'search.clear': 'مسح البحث',
      'sort.label': 'الترتيب',
      'sort.rating': 'الأعلى تقييماً',
      'sort.title': 'الاسم (أبجدي)',
      'sort.year': 'الأحدث',
      'sort.pages': 'الأكثر صفحات',
      'sort.downloads': 'الأكثر تحميلاً عندك',
      'onlyFav': '♡ المفضلة فقط',
      'source.aria': 'تصفية حسب المصدر',
      'reset': 'إعادة التعيين',
      'reset.all': 'عرض كل الكتب',
      'cat.all': 'كل التخصصات',
      'results.books': function (p) { return p.n + ' كتاباً'; },
      'results.search': function (p) { return 'بحث: «' + p.q + '»'; },
      'results.fav': 'المفضلة',
      'empty.none.title': 'لا توجد نتائج مطابقة',
      'empty.none.text': 'جرّب كلمة بحث أخرى أو اختر تخصصاً مختلفاً.',
      'empty.fav.title': 'لا توجد كتب في المفضلة بعد',
      'empty.fav.text': 'اضغط على رمز القلب ♥ في أي كتاب لإضافته هنا.',
      'cats.title': 'تصفّح كل التخصصات على الموقع',
      'cats.lead': '33 تخصصاً وأكثر من 3500 كتاب مجاني على <a href="https://infolivres.org/livres-gratuits-pdf/" target="_blank" rel="noopener">InfoLivres.org</a> — افتح التخصص الذي يهمّك لاستكشاف كامل مجموعته.',
      'cats.count': function (p) { return p.n + ' كتاباً'; },
      'stats.1': function (p) { return '<b>' + p.n + '</b> كتاباً جاهزاً للتحميل'; },
      'stats.2': function (p) { return '<b>' + p.n + '</b> تخصصاً مصنّفاً'; },
      'stats.3': 'PDF مباشر · <b>بلا تسجيل</b>',
      'stats.4': 'يعمل <b>دون اتصال</b> بعد أول زيارة',
      'footer.brand': 'InfoLivres — مكتبة الكتب المجانية',
      'footer.text': 'كتب من الملكية العامة أو بترخيص حرّ، والمصدر الكامل هو موقع <a href="https://infolivres.org/" target="_blank" rel="noopener">infolivres.org</a>. جميع الحقوق لأصحابها.',
      'footer.credit': 'هندسة وإخراج',
      'footer.version': function (p) { return 'تطبيق ويب تقدّمي (PWA) يعمل دون اتصال · الإصدار ' + p.v; },
      'modal.close': 'إغلاق',
      'stars.rate': function (p) { return 'تقييم ' + p.n + ' من 5'; },
      'stars.group': 'تقييم الكتاب',
      'stars.meta': function (p) { return p.avg + ' ★ · ' + p.votes + ' تقييماً'; },
      'stars.you': function (p) { return 'تقييمك ' + p.n; },
      'meta.pages': function (p) { return '📄 ' + p.n + ' صفحة'; },
      'meta.year': function (p) { return '📅 ' + (p.y < 0 ? Math.abs(p.y) + ' ق.م' : p.y); },
      'meta.downloads': function (p) { return '⬇ ' + p.n; },
      'meta.source': function (p) { return '🌐 ' + p.name; },
      'unit.pages': function (p) { return p.n + ' صفحة'; },
      'card.coverAlt': function (p) { return 'غلاف ' + p.title; },
      'card.favAria': function (p) { return 'إضافة ' + p.title + ' إلى المفضلة'; },
      'card.favTitle': 'المفضلة',
      'card.pdf': '⬇ تحميل PDF',
      'card.details': 'تفاصيل',
      'card.printTitle': 'طباعة هذه البطاقة',
      'card.printAria': 'طباعة البطاقة',
      'modal.category': '📂 ',
      'modal.free': '🆓 مجاني · PDF',
      'modal.downloaded': function (p) { return '⬇ حمّلته ' + p.n + ' مرة'; },
      'modal.download': '⬇ تحميل الكتاب (PDF)',
      'modal.print': '🖨 طباعة البطاقة',
      'modal.source': 'صفحة الكتاب على الموقع: ',
      'modal.sourceLink': function (p) { return 'صفحة الكتاب على ' + p.name + ': '; },
      'modal.descNote': 'الملخّص متوفّر بالعربية فقط.',
      'toast.favAdd': 'أُضيف إلى المفضلة ♥',
      'toast.favDel': 'أُزيل من المفضلة',
      'toast.rated': function (p) { return 'شكراً لتقييمك: ' + p.n + ' من 5 ★'; },
      'toast.download': function (p) { return 'يبدأ تحميل: ' + p.title + ' ⬇'; },
      'toast.print': 'جارٍ تحضير الطباعة… 🖨',
      'toast.printList': 'جارٍ تحضير طباعة القائمة… 🖨',
      'toast.nothing': 'لا توجد كتب لطباعتها',
      'toast.installManual': 'استخدم قائمة المتصفح ← «إضافة إلى الشاشة الرئيسية»',
      'toast.installed': 'تم تثبيت التطبيق 🎉',
      'toast.online': 'عاد الاتصال ✔',
      'toast.offline': 'أنت دون اتصال — الكتب المخزّنة متاحة',
      'print.card': 'بطاقة كتاب',
      'print.list': 'قائمة الكتب',
      'print.suffix': '— مكتبة InfoLivres',
      'print.meta': function (p) { return p.desc + ' · تاريخ الطباعة: ' + p.date + ' · المصدر: infolivres.org'; },
      'print.one': 'كتاب واحد',
      'print.rating': function (p) { return 'تقييم ' + p.avg + '/5'; },
      'print.source': function (p) { return 'المصدر: ' + p.name; },
      'print.foot': 'هندسة وإخراج التطبيق: <strong>حاج إسماعيل إبراهيم</strong> — الكتب من موقعَي <strong>InfoLivres.org</strong> و<strong>بوابة الكتب Kutubgate.com</strong>. جميع الحقوق لأصحابها.',
      'print.dateLocale': 'ar-EG-u-nu-latn',
      'print.bookPage': 'صفحة الكتاب'
    },

    /* ============ Français ============ */
    fr: {
      'app.title': 'InfoLivres — Bibliothèque de livres gratuits PDF',
      'app.desc': "Téléchargez des livres PDF gratuits depuis InfoLivres.org et Kutubgate.com, classés par thème : philosophie, romans, médecine, ingénierie, informatique, mathématiques, physique, psychologie et plus — téléchargement direct, sans inscription.",
      'brand.tagline': 'Bibliothèque de livres gratuits',
      'skip': 'Aller au contenu',
      'lang.aria': 'Changer de langue',
      'offline.badge': "Mode hors ligne — les livres en cache restent disponibles",
      'btn.install': 'Installer',
      'btn.fav': 'Favoris',
      'btn.print': 'Imprimer',
      'hero.kicker': 'Livres libres · téléchargement direct · sans inscription',
      'hero.title': 'Bibliothèque de livres gratuits',
      'hero.lead': 'Des livres PDF gratuits depuis <a href="https://infolivres.org/" target="_blank" rel="noopener">InfoLivres.org</a> et <a href="https://www.kutubgate.com/" target="_blank" rel="noopener">Kutubgate</a>, classés par thème : philosophie, romans, médecine, ingénierie, informatique, mathématiques, physique, psychologie…',
      'search.ph': 'Rechercher un titre ou un auteur…',
      'search.aria': 'Recherche',
      'search.clear': 'Effacer la recherche',
      'sort.label': 'Trier',
      'sort.rating': 'Mieux notés',
      'sort.title': 'Titre (A→Z)',
      'sort.year': 'Plus récents',
      'sort.pages': 'Plus de pages',
      'sort.downloads': 'Vos plus téléchargés',
      'onlyFav': '♡ Favoris seulement',
      'source.aria': 'Filtrer par source',
      'reset': 'Réinitialiser',
      'reset.all': 'Afficher tous les livres',
      'cat.all': 'Toutes les catégories',
      'results.books': function (p) { return p.n === 1 ? '1 livre' : p.n + ' livres'; },
      'results.search': function (p) { return 'recherche : « ' + p.q + ' »'; },
      'results.fav': 'Favoris',
      'empty.none.title': 'Aucun résultat',
      'empty.none.text': 'Essayez un autre mot-clé ou choisissez une autre catégorie.',
      'empty.fav.title': 'Aucun livre en favori pour le moment',
      'empty.fav.text': 'Cliquez sur le cœur ♥ d’un livre pour l’ajouter ici.',
      'cats.title': 'Parcourir toutes les catégories du site',
      'cats.lead': '33 catégories et plus de 3500 livres gratuits sur <a href="https://infolivres.org/livres-gratuits-pdf/" target="_blank" rel="noopener">InfoLivres.org</a> — ouvrez la catégorie qui vous intéresse pour en explorer la collection.',
      'cats.count': function (p) { return p.n === 1 ? '1 livre' : p.n + ' livres'; },
      'stats.1': function (p) { return '<b>' + p.n + '</b> livres à télécharger'; },
      'stats.2': function (p) { return '<b>' + p.n + '</b> catégories classées'; },
      'stats.3': 'PDF direct · <b>sans inscription</b>',
      'stats.4': 'Fonctionne <b>hors ligne</b> après la première visite',
      'footer.brand': 'InfoLivres — Bibliothèque de livres gratuits',
      'footer.text': 'Livres du domaine public ou sous licence libre ; la source complète est le site <a href="https://infolivres.org/" target="_blank" rel="noopener">infolivres.org</a>. Tous droits réservés à leurs auteurs.',
      'footer.credit': 'Conception & réalisation',
      'footer.version': function (p) { return 'Application web progressive (PWA) hors ligne · version ' + p.v; },
      'modal.close': 'Fermer',
      'stars.rate': function (p) { return 'Noter ' + p.n + ' sur 5'; },
      'stars.group': 'Note du livre',
      'stars.meta': function (p) { return p.avg + ' ★ · ' + p.votes + ' avis'; },
      'stars.you': function (p) { return 'votre note ' + p.n; },
      'meta.pages': function (p) { return '📄 ' + p.n + ' pages'; },
      'meta.year': function (p) { return '📅 ' + (p.y < 0 ? Math.abs(p.y) + ' av. J.-C.' : p.y); },
      'meta.downloads': function (p) { return '⬇ ' + p.n; },
      'meta.source': function (p) { return '🌐 ' + p.name; },
      'unit.pages': function (p) { return p.n + ' pages'; },
      'card.coverAlt': function (p) { return 'Couverture de ' + p.title; },
      'card.favAria': function (p) { return 'Ajouter ' + p.title + ' aux favoris'; },
      'card.favTitle': 'Favoris',
      'card.pdf': '⬇ Télécharger PDF',
      'card.details': 'Détails',
      'card.printTitle': 'Imprimer cette fiche',
      'card.printAria': 'Imprimer la fiche',
      'modal.category': '📂 ',
      'modal.free': '🆓 Gratuit · PDF',
      'modal.downloaded': function (p) { return '⬇ téléchargé ' + p.n + ' fois'; },
      'modal.download': '⬇ Télécharger le livre (PDF)',
      'modal.print': '🖨 Imprimer la fiche',
      'modal.source': 'Page du livre sur le site : ',
      'modal.sourceLink': function (p) { return 'Page du livre sur ' + p.name + ' : '; },
      'modal.descNote': 'Résumé disponible en arabe uniquement.',
      'toast.favAdd': 'Ajouté aux favoris ♥',
      'toast.favDel': 'Retiré des favoris',
      'toast.rated': function (p) { return 'Merci pour votre note : ' + p.n + ' sur 5 ★'; },
      'toast.download': function (p) { return 'Téléchargement : ' + p.title + ' ⬇'; },
      'toast.print': 'Préparation de l’impression… 🖨',
      'toast.printList': 'Préparation de l’impression de la liste… 🖨',
      'toast.nothing': 'Aucun livre à imprimer',
      'toast.installManual': 'Utilisez le menu du navigateur → « Ajouter à l’écran d’accueil »',
      'toast.installed': 'Application installée 🎉',
      'toast.online': 'Connexion rétablie ✔',
      'toast.offline': 'Hors ligne — les livres en cache restent disponibles',
      'print.card': 'Fiche de livre',
      'print.list': 'Liste de livres',
      'print.suffix': '— bibliothèque InfoLivres',
      'print.meta': function (p) { return p.desc + ' · imprimé le ' + p.date + ' · source : infolivres.org'; },
      'print.one': '1 livre',
      'print.rating': function (p) { return 'note ' + p.avg + '/5'; },
      'print.source': function (p) { return 'source : ' + p.name; },
      'print.foot': 'Conception & réalisation : <strong>Hadji Ismail Ibrahim</strong> — livres des sites <strong>InfoLivres.org</strong> et <strong>Kutubgate.com</strong>. Tous droits réservés à leurs auteurs.',
      'print.dateLocale': 'fr-FR',
      'print.bookPage': 'Page du livre'
    },

    /* ============ English ============ */
    en: {
      'app.title': 'InfoLivres — Free Books Library PDF',
      'app.desc': 'Download free PDF books from InfoLivres.org and Kutubgate.com, organized by subject: philosophy, novels, medicine, engineering, computers, mathematics, physics, psychology and more — direct download, no sign-up.',
      'brand.tagline': 'Free books library',
      'skip': 'Skip to content',
      'lang.aria': 'Change language',
      'offline.badge': 'Offline mode — cached books are still available',
      'btn.install': 'Install',
      'btn.fav': 'Favorites',
      'btn.print': 'Print',
      'hero.kicker': 'Free books · direct download · no sign-up',
      'hero.title': 'Free books library',
      'hero.lead': 'Free PDF books from <a href="https://infolivres.org/" target="_blank" rel="noopener">InfoLivres.org</a> and <a href="https://www.kutubgate.com/" target="_blank" rel="noopener">Kutubgate</a>, organized by subject: philosophy, novels, medicine, engineering, computers, mathematics, physics, psychology and more…',
      'search.ph': 'Search by book title or author…',
      'search.aria': 'Search',
      'search.clear': 'Clear search',
      'sort.label': 'Sort',
      'sort.rating': 'Top rated',
      'sort.title': 'Title (A→Z)',
      'sort.year': 'Newest',
      'sort.pages': 'Most pages',
      'sort.downloads': 'Most downloaded by you',
      'onlyFav': '♡ Favorites only',
      'source.aria': 'Filter by source',
      'reset': 'Reset',
      'reset.all': 'Show all books',
      'cat.all': 'All categories',
      'results.books': function (p) { return p.n === 1 ? '1 book' : p.n + ' books'; },
      'results.search': function (p) { return 'search: “' + p.q + '”'; },
      'results.fav': 'Favorites',
      'empty.none.title': 'No matching results',
      'empty.none.text': 'Try another keyword or pick a different category.',
      'empty.fav.title': 'No favorite books yet',
      'empty.fav.text': 'Click the heart ♥ on any book to add it here.',
      'cats.title': 'Browse all categories on the site',
      'cats.lead': '33 categories and more than 3500 free books on <a href="https://infolivres.org/livres-gratuits-pdf/" target="_blank" rel="noopener">InfoLivres.org</a> — open the category you like to explore its full collection.',
      'cats.count': function (p) { return p.n === 1 ? '1 book' : p.n + ' books'; },
      'stats.1': function (p) { return '<b>' + p.n + '</b> books ready to download'; },
      'stats.2': function (p) { return '<b>' + p.n + '</b> categorized subjects'; },
      'stats.3': 'Direct PDF · <b>no sign-up</b>',
      'stats.4': 'Works <b>offline</b> after the first visit',
      'footer.brand': 'InfoLivres — Free books library',
      'footer.text': 'Books from the public domain or under free licences; the full source is <a href="https://infolivres.org/" target="_blank" rel="noopener">infolivres.org</a>. All rights belong to their authors.',
      'footer.credit': 'Design & development',
      'footer.version': function (p) { return 'Progressive web app (PWA), works offline · version ' + p.v; },
      'modal.close': 'Close',
      'stars.rate': function (p) { return 'Rate ' + p.n + ' out of 5'; },
      'stars.group': 'Book rating',
      'stars.meta': function (p) { return p.avg + ' ★ · ' + p.votes + ' ratings'; },
      'stars.you': function (p) { return 'your rating ' + p.n; },
      'meta.pages': function (p) { return '📄 ' + p.n + ' pages'; },
      'meta.year': function (p) { return '📅 ' + (p.y < 0 ? Math.abs(p.y) + ' BC' : p.y); },
      'meta.downloads': function (p) { return '⬇ ' + p.n; },
      'meta.source': function (p) { return '🌐 ' + p.name; },
      'unit.pages': function (p) { return p.n + ' pages'; },
      'card.coverAlt': function (p) { return 'Cover of ' + p.title; },
      'card.favAria': function (p) { return 'Add ' + p.title + ' to favorites'; },
      'card.favTitle': 'Favorites',
      'card.pdf': '⬇ Download PDF',
      'card.details': 'Details',
      'card.printTitle': 'Print this card',
      'card.printAria': 'Print card',
      'modal.category': '📂 ',
      'modal.free': '🆓 Free · PDF',
      'modal.downloaded': function (p) { return '⬇ downloaded ' + p.n + ' times'; },
      'modal.download': '⬇ Download book (PDF)',
      'modal.print': '🖨 Print card',
      'modal.source': 'Book page on the site: ',
      'modal.sourceLink': function (p) { return 'Book page on ' + p.name + ': '; },
      'modal.descNote': 'Summary available in Arabic only.',
      'toast.favAdd': 'Added to favorites ♥',
      'toast.favDel': 'Removed from favorites',
      'toast.rated': function (p) { return 'Thanks for rating: ' + p.n + ' out of 5 ★'; },
      'toast.download': function (p) { return 'Downloading: ' + p.title + ' ⬇'; },
      'toast.print': 'Preparing print… 🖨',
      'toast.printList': 'Preparing list print… 🖨',
      'toast.nothing': 'No books to print',
      'toast.installManual': 'Use your browser menu → “Add to Home Screen”',
      'toast.installed': 'App installed 🎉',
      'toast.online': 'Back online ✔',
      'toast.offline': 'Offline — cached books are still available',
      'print.card': 'Book card',
      'print.list': 'Book list',
      'print.suffix': '— InfoLivres library',
      'print.meta': function (p) { return p.desc + ' · printed on ' + p.date + ' · source: infolivres.org'; },
      'print.one': '1 book',
      'print.rating': function (p) { return 'rating ' + p.avg + '/5'; },
      'print.source': function (p) { return 'source: ' + p.name; },
      'print.foot': 'Design & development: <strong>Hadji Ismail Ibrahim</strong> — books from <strong>InfoLivres.org</strong> and <strong>Kutubgate.com</strong>. All rights belong to their authors.',
      'print.dateLocale': 'en-GB',
      'print.bookPage': 'Book page'
    }
  };

  IL.I18N = T;

  IL.LANGS = [
    { id: 'ar', label: 'العربية', short: 'ع', dir: 'rtl' },
    { id: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
    { id: 'en', label: 'English', short: 'EN', dir: 'ltr' }
  ];

  IL.dirOf = function (lang) { return lang === 'ar' ? 'rtl' : 'ltr'; };
  IL.isRTL = function () { return IL.lang === 'ar'; };

  function detect() {
    try {
      var saved = localStorage.getItem('il_lang');
      if (saved && T[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
    if (nav.indexOf('ar') === 0) return 'ar';
    if (nav.indexOf('fr') === 0) return 'fr';
    if (nav.indexOf('en') === 0) return 'en';
    return 'ar';
  }

  IL.lang = detect();

  IL.t = function (key, params) {
    var pack = T[IL.lang] || T.ar;
    var val = pack[key];
    if (val === undefined) val = T.ar[key];
    if (val === undefined) return key;
    var p = params || {};
    if (p.v === undefined) p.v = IL.version || '1.0.0';
    return typeof val === 'function' ? val(p) : val;
  };

  IL.catName = function (cat) {
    if (!cat) return '';
    if (IL.lang === 'ar') return cat.ar || cat.fr || cat.id;
    if (IL.lang === 'fr') return cat.fr || cat.ar || cat.id;
    return IL.CAT_EN[cat.id] || cat.fr || cat.ar || cat.id;
  };

  IL.titleOf = function (b) { return IL.lang === 'ar' ? (b.t || b.tf) : (b.tf || b.t); };
  IL.subOf = function (b) {
    var main = IL.titleOf(b);
    var alt = IL.lang === 'ar' ? b.tf : b.t;
    return alt && alt !== main ? alt : '';
  };
  IL.authorOf = function (b) { return IL.lang === 'ar' ? (b.a || b.af) : (b.af || b.a); };
  IL.authorSubOf = function (b) {
    var main = IL.authorOf(b);
    var alt = IL.lang === 'ar' ? b.af : b.a;
    return alt && alt !== main ? alt : '';
  };

  /* ---------- ترجمة الواجهة الثابتة ---------- */
  var listeners = [];

  IL.applyTranslations = function (root) {
    root = root || document;
    var i, el, key;

    var textNodes = root.querySelectorAll('[data-i18n]');
    for (i = 0; i < textNodes.length; i++) {
      el = textNodes[i]; key = el.getAttribute('data-i18n');
      el.textContent = IL.t(key);
    }
    var htmlNodes = root.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < htmlNodes.length; i++) {
      el = htmlNodes[i]; key = el.getAttribute('data-i18n-html');
      el.innerHTML = IL.t(key);
    }
    var phNodes = root.querySelectorAll('[data-i18n-ph]');
    for (i = 0; i < phNodes.length; i++) {
      el = phNodes[i]; key = el.getAttribute('data-i18n-ph');
      el.setAttribute('placeholder', IL.t(key));
    }
    var titleNodes = root.querySelectorAll('[data-i18n-title]');
    for (i = 0; i < titleNodes.length; i++) {
      el = titleNodes[i]; key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', IL.t(key));
    }
    var ariaNodes = root.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < ariaNodes.length; i++) {
      el = ariaNodes[i]; key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', IL.t(key));
    }

    var langBtns = root.querySelectorAll('[data-lang]');
    for (i = 0; i < langBtns.length; i++) {
      el = langBtns[i];
      var on = el.getAttribute('data-lang') === IL.lang;
      el.classList.toggle('is-active', on);
      el.setAttribute('aria-pressed', String(on));
    }

    document.title = IL.t('app.title');
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', IL.t('app.desc'));
    var apple = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (apple) apple.setAttribute('content', 'InfoLivres');
  };

  IL.setLang = function (lang, opts) {
    if (!T[lang]) return;
    IL.lang = lang;
    try { localStorage.setItem('il_lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', IL.dirOf(lang));
    IL.applyTranslations(document);
    var o = opts || {};
    if (!o.silent) {
      for (var i = 0; i < listeners.length; i++) {
        try { listeners[i](lang); } catch (e) {}
      }
    }
  };

  IL.onLangChange = function (fn) { if (typeof fn === 'function') listeners.push(fn); };

  /* ---------- الإقلاع: تطبيق اللغة الابتدائية ---------- */
  function boot() {
    document.documentElement.setAttribute('lang', IL.lang);
    document.documentElement.setAttribute('dir', IL.dirOf(IL.lang));
    IL.applyTranslations(document);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
