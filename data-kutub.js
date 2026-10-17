'use strict';

/* =========================================================
   بوابة الكتب (kutubgate.com) — 200 كتاب
   مصدر ثانٍ إلى جانب InfoLivres · هندسة وإخراج : حاج إسماعيل إبراهيم
   تُولّد آلياً من بيانات صفحات الكتب على kutubgate.com
   ========================================================= */

/* التخصصات الجديدة التي يضيفها بوابة الكتب */
IL.CATEGORIES_KG = [
  { id: 'adab-arabi', ar: 'أدب عربي', fr: 'Littérature arabe', icon: '🖋️', src: 'kutubgate', url: 'https://www.kutubgate.com/%D8%A3%D8%AF%D8%A8-%D8%B9%D8%B1%D8%A8%D9%8A/' },
  { id: 'sciences-sociales', ar: 'علوم اجتماعية', fr: 'Sciences sociales', icon: '👥', src: 'kutubgate', url: 'https://www.kutubgate.com/%D8%B9%D9%84%D9%88%D9%85-%D8%A5%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9/' },
  { id: 'economie', ar: 'اقتصاد', fr: 'Économie', icon: '📈', src: 'kutubgate', url: 'https://www.kutubgate.com/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF/' },
  { id: 'politique', ar: 'كتب سياسية', fr: 'Livres Politiques', icon: '🏛️', src: 'kutubgate', url: 'https://www.kutubgate.com/%D9%83%D8%AA%D8%A8-%D8%B3%D9%8A%D8%A7%D8%B3%D9%8A%D8%A9/' },
  { id: 'sciences', ar: 'علوم', fr: 'Sciences', icon: '🔬', src: 'kutubgate', url: 'https://www.kutubgate.com/%D9%83%D8%AA%D8%A8-%D8%B9%D9%84%D9%85%D9%8A%D8%A9/' },
  { id: 'poesie', ar: 'شعر عربي', fr: 'Poésie Arabe', icon: '🪶', src: 'kutubgate', url: 'https://www.kutubgate.com/%D8%B4%D8%B9%D8%B1-%D8%B9%D8%B1%D8%A8%D9%8A/' },
  { id: 'nouvelles', ar: 'قصص قصيرة', fr: 'Nouvelles', icon: '✒️', src: 'kutubgate', url: 'https://www.kutubgate.com/%D9%82%D8%B5%D8%B5-%D9%82%D8%B5%D9%8A%D8%B1%D8%A9/' },
  { id: 'science-fiction', ar: 'خيال علمي', fr: 'Science-fiction', icon: '🚀', src: 'kutubgate', url: 'https://www.kutubgate.com/%D9%83%D8%AA%D8%A8-%D8%AE%D9%8A%D8%A7%D9%84-%D8%B9%D9%84%D9%85%D9%8A/' }
];

IL.BOOKS_KUTUB = [
  {
    id: 'kg-32798', t: 'لحن الخوف والصمت', a: 'سما سامي',
    c: 'romans', p: 577, r: 4.8, v: 178, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-لحن-الخوف-والصمت-PDF-سما-سامي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32798',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d8%ad%d9%86-%d8%a7%d9%84%d8%ae%d9%88%d9%81-%d9%88%d8%a7%d9%84%d8%b5%d9%85%d8%aa-pdf-%d8%b3%d9%85%d8%a7-%d8%b3%d8%a7%d9%85%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'تدور رواية لحن الخوف والصمت لسما سامي في عالم فانتازي معقد يسمى أسكونزول، حيث تختلط مصائر السحرة...'
  },
  {
    id: 'kg-32795', t: 'عزازيل', a: 'يوسف زيدان',
    c: 'romans', p: 381, r: 4.5, v: 175, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-عزازيل-PDF-يوسف-زيدان-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32795',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d8%b2%d8%a7%d8%b2%d9%8a%d9%84-pdf-%d9%8a%d9%88%d8%b3%d9%81-%d8%b2%d9%8a%d8%af%d8%a7%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86%d9%8a/', d: 'يرصد كتاب عزازيل ليوسف زيدان مجموعة من اللفائف السريانية القديمة التي اكتشفت في خرائب شمال غرب حلب بسوريا...'
  },
  {
    id: 'kg-32792', t: 'سيروش', a: 'حنان لاشين',
    c: 'romans', p: 342, r: 4.2, v: 172, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-سيروش-PDF-حنان-لاشين-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32792',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d8%b1%d9%88%d8%b4-pdf-%d8%ad%d9%86%d8%a7%d9%86-%d9%84%d8%a7%d8%b4%d9%8a%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86%d9%8a/', d: 'تدور أحداث رواية سيروش للكاتبة حنان لاشين حول بطل يعاني من ألم شديد في عظامه ورأسه، حيث يبدأ النص بوصف حالته...'
  },
  {
    id: 'kg-32735', t: 'لعنة أديمون', a: 'إيمان الناضفي',
    c: 'romans', p: 687, r: 4.5, v: 115, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-لعنة-أديمون-PDF-إيمان-الناضفي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32735',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d8%b9%d9%86%d8%a9-%d8%a3%d8%af%d9%8a%d9%85%d9%88%d9%86-pdf-%d8%a5%d9%8a%d9%85%d8%a7%d9%86-%d8%a7%d9%84%d9%86%d8%a7%d8%b6%d9%81%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'تدور أحداث رواية لعنة أديمون للكاتبة إيمان الناضفي في عالم تحكمه لعنة قديمة تحكيها الأسطورة التي...'
  },
  {
    id: 'kg-32738', t: 'شمس منتصف الليل', a: 'محمد طارق الدوسري',
    c: 'romans', p: 510, r: 4.8, v: 118, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-شمس-منتصف-الليل-PDF-محمد-طارق-الدوسري-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32738',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%85%d8%b3-%d9%85%d9%86%d8%aa%d8%b5%d9%81-%d8%a7%d9%84%d9%84%d9%8a%d9%84-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%b7%d8%a7%d8%b1%d9%82-%d8%a7%d9%84%d8%af%d9%88%d8%b3%d8%b1/', d: 'تدور رواية شمس منتصف الليل لمحمد طارق الدوسري في مدينة فانكوفر التي تعرف بطقسها البارد...'
  },
  {
    id: 'kg-32774', t: 'الجريمة والعقاب', a: 'فيودور دوستويفسكي',
    c: 'romans', p: 456, r: 4.4, v: 154, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-الجريمة-والعقاب-PDF-فيودور-دوستويفسكي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32774',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-%d9%88%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%a8-pdf-%d9%81%d9%8a%d9%88%d8%af%d9%88%d8%b1-%d8%af%d9%88%d8%b3%d8%aa%d9%88%d9%8a%d9%81/', d: 'تتناول رواية الجريمة والعقاب لفيودور دوستويفسكي قصة شاب يرتكب جريمة وتبدأ من خلالها رحلة...'
  },
  {
    id: 'kg-32768', t: 'الجريمة والعقاب 2', a: 'فيودور دوستويفسكي',
    c: 'romans', p: 432, r: 4.8, v: 148, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-الجريمة-والعقاب-2-PDF-فيودور-دوستويفسكي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32768',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-%d9%88%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%a8-2-pdf-%d9%81%d9%8a%d9%88%d8%af%d9%88%d8%b1-%d8%af%d9%88%d8%b3%d8%aa%d9%88%d9%8a%d9%81/', d: 'يركز الجزء الثاني من كتاب الجريمة والعقاب لفيودور دوستويفسكي على الصراع الداخلي الذي يعيشه...'
  },
  {
    id: 'kg-32771', t: 'الجريمة والعقاب 1', a: 'فيودور دوستويفسكي',
    c: 'romans', p: 456, r: 4.1, v: 151, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-الجريمة-والعقاب-1-PDF-فيودور-دوستويفسكي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32771',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-%d9%88%d8%a7%d9%84%d8%b9%d9%82%d8%a7%d8%a8-1-pdf-%d9%81%d9%8a%d9%88%d8%af%d9%88%d8%b1-%d8%af%d9%88%d8%b3%d8%aa%d9%88%d9%8a%d9%81/', d: 'تركز رواية الجريمة والعقاب 1 لفيودور دوستويفسكي على شخصية روديون راسكولنيكوف الطالب الفقير...'
  },
  {
    id: 'kg-32786', t: 'القمر الأحمر 3 آخر قطرة دم', a: 'غادة أحمد',
    c: 'romans', p: 259, r: 4.6, v: 166, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-القمر-الأحمر-3-آخر-قطرة-دم-PDF-غادة-أحمد-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32786',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%85%d8%b1-%d8%a7%d9%84%d8%a3%d8%ad%d9%85%d8%b1-3-%d8%a2%d8%ae%d8%b1-%d9%82%d8%b7%d8%b1%d8%a9-%d8%af%d9%85-pdf-%d8%ba%d8%a7%d8%af%d8%a9-%d8%a3%d8%ad/', d: 'تدور أحداث كتاب القمر الأحمر 3 آخر قطرة دم للكاتبة غادة أحمد حول صراع دام بين البشر...'
  },
  {
    id: 'kg-32789', t: 'القمر الأحمر 2 ملحمة العرش والعشق', a: 'غادة أحمد',
    c: 'romans', p: 381, r: 4.9, v: 169, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-القمر-الأحمر-2-ملحمة-العرش-والعشق-PDF-غادة-أحمد-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32789',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%85%d8%b1-%d8%a7%d9%84%d8%a3%d8%ad%d9%85%d8%b1-2-%d9%85%d9%84%d8%ad%d9%85%d8%a9-%d8%a7%d9%84%d8%b9%d8%b1%d8%b4-%d9%88%d8%a7%d9%84%d8%b9%d8%b4%d9%82-pdf/', d: 'تدور رواية القمر الأحمر 2 ملحمة العرش والعشق للمؤلفة غادة أحمد حول الصراعات بين...'
  },
  {
    id: 'kg-32853', t: 'قضية السنوات السبع', a: 'ميرنا المهدي',
    c: 'romans', p: 345, r: 4.3, v: 233, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-قضية-السنوات-السبع-PDF-ميرنا-المهدي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32853',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%82%d8%b6%d9%8a%d8%a9-%d8%a7%d9%84%d8%b3%d9%86%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d8%b3%d8%a8%d8%b9-pdf-%d9%85%d9%8a%d8%b1%d9%86%d8%a7-%d8%a7%d9%84%d9%85%d9%87%d8%af%d9%8a/', d: 'تدور رواية قضية السنوات السبع لميرنا المهدي حول ضابط الشرطة نوح الألفي الذي يواجه لغزا دمويا...'
  },
  {
    id: 'kg-32744', t: 'شمس منتصف الليل', a: 'ستيفاني ماير',
    c: 'romans', p: 349, r: 4.4, v: 124, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-شمس-منتصف-الليل-PDF-ستيفاني-ماير-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32744',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%85%d8%b3-%d9%85%d9%86%d8%aa%d8%b5%d9%81-%d8%a7%d9%84%d9%84%d9%8a%d9%84-pdf-%d8%b3%d8%aa%d9%8a%d9%81%d8%a7%d9%86%d9%8a-%d9%85%d8%a7%d9%8a%d8%b1-%d8%aa%d8%ad%d9%85/', d: 'تقدم رواية شمس منتصف الليل للكاتبة ستيفاني ماير الجزء الخامس من سلسلة Twilight حيث تروى القصة من...'
  },
  {
    id: 'kg-32741', t: 'شمس منتصف الليل', a: 'نبيل فاروق',
    c: 'romans', p: 101, r: 4.1, v: 121, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-شمس-منتصف-الليل-PDF-نبيل-فاروق-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32741',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%85%d8%b3-%d9%85%d9%86%d8%aa%d8%b5%d9%81-%d8%a7%d9%84%d9%84%d9%8a%d9%84-pdf-%d9%86%d8%a8%d9%8a%d9%84-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'تدور رواية شمس منتصف الليل للكاتب نبيل فاروق حول اختفاء شخصية لا يمكن أن تختفي بسهولة، حيث تبدأ...'
  },
  {
    id: 'kg-32463', t: 'ذو ذكريات', a: 'أجاثا كريستي',
    c: 'romans', p: 226, r: 4.3, v: 323, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-ذو-ذكريات-PDF-أجاثا-كريستي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32463',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b0%d9%88-%d8%b0%d9%83%d8%b1%d9%8a%d8%a7%d8%aa-pdf-%d8%a3%d8%ac%d8%a7%d8%ab%d8%a7-%d9%83%d8%b1%d9%8a%d8%b3%d8%aa%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7/', d: 'رواية ذو ذكريات من تأليف أجاثا كريستي تسرد قصة بوليسية تدور حول شخصية رئيسية تعاني من فقدان الذاكرة،...'
  },
  {
    id: 'kg-32456', t: 'ن أو م (من هو العميل) لغز تومي وتوبنس', a: 'أجاثا كريستي',
    c: 'romans', p: 244, r: 4.6, v: 316, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-ن-أو-م-من-هو-العميل-لغز-تومي-وتوبنس-PDF-أجاثا-كريستي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32456',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%86-%d8%a3%d9%88-%d9%85-%d9%85%d9%86-%d9%87%d9%88-%d8%a7%d9%84%d8%b9%d9%85%d9%8a%d9%84-%d9%84%d8%ba%d8%b2-%d8%aa%d9%88%d9%85%d9%8a-%d9%88%d8%aa%d9%88%d8%a8%d9%86%d8%b3-pd/', d: 'رواية ن أو م (من هو العميل) لغز تومي وتوبنس للكاتبة أجاثا كريستي تدور...'
  },
  {
    id: 'kg-32750', t: 'الخيميائي', a: 'هوارد فيليبس لافكرافت',
    c: 'romans', p: 15, r: 4.0, v: 130, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-الخيميائي-PDF-هوارد-فيليبس-لافكرافت-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32750',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ae%d9%8a%d9%85%d9%8a%d8%a7%d8%a6%d9%8a-pdf-%d9%87%d9%88%d8%a7%d8%b1%d8%af-%d9%81%d9%8a%d9%84%d9%8a%d8%a8%d8%b3-%d9%84%d8%a7%d9%81%d9%83%d8%b1%d8%a7%d9%81/', d: 'رواية الخيميائي هي أول قصة نشرها هوارد فيليبس لافكرافت عام 1916، وقد كتبها في عام 1908 حين كان...'
  },
  {
    id: 'kg-32439', t: 'مغامرات الدكتور ثورندايك', a: 'آر أوستن فريمان',
    c: 'romans', p: 200, r: 4.9, v: 299, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-مغامرات-الدكتور-ثورندايك-PDF-آر-أوستن-فريمان-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32439',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%ba%d8%a7%d9%85%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d8%af%d9%83%d8%aa%d9%88%d8%b1-%d8%ab%d9%88%d8%b1%d9%86%d8%af%d8%a7%d9%8a%d9%83-pdf-%d8%a2%d8%b1-%d8%a3%d9%88%d8%b3/', d: 'كتاب مغامرات الدكتور ثورندايك من تأليف آر أوستن فريمان يضم مجموعة من القصص البوليسية...'
  },
  {
    id: 'kg-32780', t: 'أوبال', a: 'حنان لاشين',
    c: 'romans', p: 352, r: 4.0, v: 160, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-أوبال-PDF-حنان-لاشين-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32780',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d9%88%d8%a8%d8%a7%d9%84-pdf-%d8%ad%d9%86%d8%a7%d9%86-%d9%84%d8%a7%d8%b4%d9%8a%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86%d9%8a/', d: 'يروي كتاب أوبال للمؤلفة حنان لاشين مشهدا طبيعيا لزمرة من الخيول التي تتحرك بتناغم بديع على إيقاع واحد، حيث...'
  },
  {
    id: 'kg-32765', t: 'كوني صحابية', a: 'حنان لاشين',
    c: 'adab-arabi', p: 221, r: 4.5, v: 145, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-كوني-صحابية-PDF-حنان-لاشين-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32765',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%83%d9%88%d9%86%d9%8a-%d8%b5%d8%ad%d8%a7%d8%a8%d9%8a%d8%a9-pdf-%d8%ad%d9%86%d8%a7%d9%86-%d9%84%d8%a7%d8%b4%d9%8a%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7/', d: 'يركز كتاب كوني صحابية للمؤلفة حنان لاشين على تقديم مجموعة مقالات موجهة للفتيات تحت سن العشرين، حيث يعرض...'
  },
  {
    id: 'kg-32569', t: 'حديث المساء', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 284, r: 4.9, v: 429, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-حديث-المساء-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32569',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d8%af%d9%8a%d8%ab-%d8%a7%d9%84%d9%85%d8%b3%d8%a7%d8%a1-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac/', d: 'يضم كتاب حديث المساء لأدهم شرقاوي مجموعة من أربع وأربعين قصة قصيرة تجمع بين الحكمة والآيات القرآنية...'
  },
  {
    id: 'kg-32554', t: 'أضغاث أقلام', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 98, r: 4.4, v: 414, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-أضغاث-أقلام-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32554',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b6%d8%ba%d8%a7%d8%ab-%d8%a3%d9%82%d9%84%d8%a7%d9%85-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac/', d: 'يتناول كتاب أضغاث أقلام لأدهم شرقاوي موضوعات متعددة مثل الحب والإيمان وقيمة الوقت وتقبل الفقد، حيث...'
  },
  {
    id: 'kg-32542', t: 'خربشات خارجة عن القانون', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 157, r: 4.2, v: 402, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-خربشات-خارجة-عن-القانون-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32542',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ae%d8%b1%d8%a8%d8%b4%d8%a7%d8%aa-%d8%ae%d8%a7%d8%b1%d8%ac%d8%a9-%d8%b9%d9%86-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82/', d: 'يحتوي كتاب خربشات خارجة عن القانون لأدهم شرقاوي على مجموعة من الخربشات التي تتنوع بين...'
  },
  {
    id: 'kg-32783', t: 'أوراق الورد', a: 'مصطفي صادق الرافعي',
    c: 'adab-arabi', p: 230, r: 4.3, v: 163, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-أوراق-الورد-PDF-مصطفي-صادق-الرافعي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32783',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d9%88%d8%b1%d8%a7%d9%82-%d8%a7%d9%84%d9%88%d8%b1%d8%af-pdf-%d9%85%d8%b5%d8%b7%d9%81%d9%8a-%d8%b5%d8%a7%d8%af%d9%82-%d8%a7%d9%84%d8%b1%d8%a7%d9%81%d8%b9%d9%8a-%d8%aa/', d: 'يتناول كتاب أوراق الورد لمصطفى صادق الرافعي مجموعة من الخواطر التي تعبر عن فلسفة الحب والجمال،...'
  },
  {
    id: 'kg-32536', t: 'السلام عليك يا صاحبي', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 340, r: 4.6, v: 396, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-السلام-عليك-يا-صاحبي-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32536',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d9%84%d8%a7%d9%85-%d8%b9%d9%84%d9%8a%d9%83-%d9%8a%d8%a7-%d8%b5%d8%a7%d8%ad%d8%a8%d9%8a-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a/', d: 'يقدم كتاب السلام عليك يا صاحبي لأدهم شرقاوي مجموعة من التأملات القصيرة والقواعد الحياتية التي...'
  },
  {
    id: 'kg-32566', t: 'الأم في أدب غسان كنفاني', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 136, r: 4.6, v: 426, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الأم-في-أدب-غسان-كنفاني-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32566',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d9%85-%d9%81%d9%8a-%d8%a3%d8%af%d8%a8-%d8%ba%d8%b3%d8%a7%d9%86-%d9%83%d9%86%d9%81%d8%a7%d9%86%d9%8a-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7/', d: 'يركز كتاب الأم في أدب غسان كنفاني للمؤلف أدهم شرقاوي على دور الأم في أعمال غسان كنفاني...'
  },
  {
    id: 'kg-32527', t: 'عن وطن من لحم ودم', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 142, r: 4.7, v: 387, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-عن-وطن-من-لحم-ودم-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32527',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%86-%d9%88%d8%b7%d9%86-%d9%85%d9%86-%d9%84%d8%ad%d9%85-%d9%88%d8%af%d9%85-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85/', d: 'يركز كتاب عن وطن من لحم ودم لأدهم شرقاوي على تجربة الانتماء الوطني من خلال نصوص قصيرة تجمع بين...'
  },
  {
    id: 'kg-32557', t: 'كش ملك', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 86, r: 4.7, v: 417, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-كش-ملك-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32557',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%83%d8%b4-%d9%85%d9%84%d9%83-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86%d9%8a/', d: 'يطرح كتاب كش ملك لأدهم شرقاوي مجموعة من القضايا الإنسانية والاجتماعية والفكرية، حيث يناقش موضوعات مثل الحب...'
  },
  {
    id: 'kg-32460', t: 'مغامرة المقبرة الفرعوني', a: 'أجاثا كريستي',
    c: 'romans', p: 58, r: 4.0, v: 320, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-مغامرة-المقبرة-الفرعوني-PDF-أجاثا-كريستي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32460',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%ba%d8%a7%d9%85%d8%b1%d8%a9-%d8%a7%d9%84%d9%85%d9%82%d8%a8%d8%b1%d8%a9-%d8%a7%d9%84%d9%81%d8%b1%d8%b9%d9%88%d9%86%d9%8a-pdf-%d8%a3%d8%ac%d8%a7%d8%ab%d8%a7-%d9%83/', d: 'رواية مغامرة المقبرة الفرعوني من تأليف أجاثا كريستي تعد من أشهر الأعمال في أدب الجريمة...'
  },
  {
    id: 'kg-32832', t: 'تاريخ ابن خلدون 2', a: 'ابن خلدون',
    c: 'histoire', p: 656, r: 4.2, v: 212, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-2-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32832',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-2-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يركز كتاب تاريخ ابن خلدون 2 على مفهوم التاريخ كعلم يبحث في أسباب الوقائع والمبادئ التي تقف خلف...'
  },
  {
    id: 'kg-32826', t: 'تاريخ ابن خلدون 4', a: 'ابن خلدون',
    c: 'histoire', p: 730, r: 4.6, v: 206, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-4-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32826',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-4-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يتناول كتاب تاريخ ابن خلدون 4 الذي ألفه ابن خلدون ثلاثة أقسام رئيسية هي المقدمة وكتاب التاريخ...'
  },
  {
    id: 'kg-32820', t: 'تاريخ ابن خلدون 6', a: 'ابن خلدون',
    c: 'histoire', p: 632, r: 4.0, v: 200, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-6-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32820',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-6-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم كتاب تاريخ ابن خلدون 6 دراسة منهجية دقيقة لكتابات المؤرخ ابن خلدون ضمن سلسلة من ثمانية مجلدات...'
  },
  {
    id: 'kg-32835', t: 'تاريخ ابن خلدون 1', a: 'ابن خلدون',
    c: 'histoire', p: 851, r: 4.5, v: 215, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-1-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32835',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-1-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يتناول كتاب تاريخ ابن خلدون 1 للمؤلف ابن خلدون ثلاثة أقسام رئيسية هي المقدمة، والتاريخ، وترجمة...'
  },
  {
    id: 'kg-32814', t: 'تاريخ ابن خلدون 8', a: 'ابن خلدون',
    c: 'histoire', p: 766, r: 4.4, v: 194, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-8-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32814',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-8-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يستعرض كتاب تاريخ ابن خلدون 8 تأليف ابن خلدون مجموعة من الأحداث والتطورات التاريخية التي وقعت في...'
  },
  {
    id: 'kg-32539', t: 'عن شيئ اسمه الحب', a: 'أدهم شرقاوي',
    c: 'adab-arabi', p: 112, r: 4.9, v: 399, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-عن-شيئ-اسمه-الحب-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32539',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%86-%d8%b4%d9%8a%d8%a6-%d8%a7%d8%b3%d9%85%d9%87-%d8%a7%d9%84%d8%ad%d8%a8-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85/', d: 'يركز كتاب عن شيئ اسمه الحب للمؤلف أدهم شرقاوي على مجموعة من الخواطر التي تعبر عن مشاعر الحب...'
  },
  {
    id: 'kg-32829', t: 'تاريخ ابن خلدون 3', a: 'ابن خلدون',
    c: 'histoire', p: 690, r: 4.9, v: 209, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-3-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32829',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-3-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يتناول كتاب تاريخ ابن خلدون 3 للعلامة ابن خلدون ثلاثة أقسام رئيسية تشمل المقدمة وكتاب التاريخ...'
  },
  {
    id: 'kg-32361', t: 'وادي النطرون', a: 'عمر طوسون',
    c: 'histoire', p: 158, r: 4.1, v: 221, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-وادي-النطرون-PDF-عمر-طوسون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32361',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%88%d8%a7%d8%af%d9%8a-%d8%a7%d9%84%d9%86%d8%b7%d8%b1%d9%88%d9%86-pdf-%d8%b9%d9%85%d8%b1-%d8%b7%d9%88%d8%b3%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7/', d: 'يُعتبر عمر طوسون من أبرز أعلام النهضة المصرية الحديثة، حيث كان رغم انتمائه للعائلة المالكة مهتمًا...'
  },
  {
    id: 'kg-32817', t: 'تاريخ ابن خلدون 7', a: 'ابن خلدون',
    c: 'histoire', p: 762, r: 4.7, v: 197, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-7-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32817',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-7-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يركز كتاب تاريخ ابن خلدون 7 للمؤلف ابن خلدون على ثلاث أقسام رئيسية هي المقدمة وكتاب التاريخ وترجمة...'
  },
  {
    id: 'kg-32811', t: 'تاريخ فلاسفة الاسلام في المشرق والمغرب', a: 'ابن خلدون',
    c: 'histoire', p: 450, r: 4.1, v: 191, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-فلاسفة-الاسلام-في-المشرق-والمغرب-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32811',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d9%81%d9%84%d8%a7%d8%b3%d9%81%d8%a9-%d8%a7%d9%84%d8%a7%d8%b3%d9%84%d8%a7%d9%85-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d8%b4%d8%b1%d9%82-%d9%88%d8%a7/', d: 'يرصد كتاب تاريخ فلاسفة الاسلام في المشرق والمغرب لمؤلفه ابن خلدون سيرة عدد من...'
  },
  {
    id: 'kg-32125', t: 'الفن وسرديات المستقبل', a: 'أم الزين بنشيخة المسكيني',
    c: 'philosophie', p: 172, r: 4.5, v: 465, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-الفن-وسرديات-المستقبل-PDF-أم-الزين-بنشيخة-المسكيني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32125',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%81%d9%86-%d9%88%d8%b3%d8%b1%d8%af%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-pdf-%d8%a3%d9%85-%d8%a7/', d: 'يقدم كتاب الفن وسرديات المستقبل لأم الزين بنشيخة المسكيني رؤية فلسفية تعالج أهمية ت...'
  },
  {
    id: 'kg-32141', t: 'الظاهراتية', a: 'تشاد إنجلاند',
    c: 'philosophie', p: 170, r: 4.1, v: 481, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-الظاهراتية-PDF-تشاد-إنجلاند.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32141',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b8%d8%a7%d9%87%d8%b1%d8%a7%d8%aa%d9%8a%d8%a9-pdf-%d8%aa%d8%b4%d8%a7%d8%af-%d8%a5%d9%86%d8%ac%d9%84%d8%a7%d9%86%d8%af/', d: 'يقدم كتاب الظاهراتية للمؤلف تشاد إنجلاند مقدمة مبسطة لحركة الظاهراتية الفلسفية التي تركز على معايشة الخبرة...'
  },
  {
    id: 'kg-32389', t: 'لماذا نحن هنا', a: 'إسماعيل عرفة',
    c: 'philosophie', p: 259, r: 4.9, v: 249, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-لماذا-نحن-هنا-PDF-إسماعيل-عرفة-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32389',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d9%86%d8%ad%d9%86-%d9%87%d9%86%d8%a7-pdf-%d8%a5%d8%b3%d9%85%d8%a7%d8%b9%d9%8a%d9%84-%d8%b9%d8%b1%d9%81%d8%a9-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'كتاب لماذا نحن هنا للمؤلف إسماعيل عرفة يتناول التساؤلات الوجودية التي يواجهها الشاب المعاصر في...'
  },
  {
    id: 'kg-32119', t: 'الهجرة إلى الإنسانية', a: 'فتحي المسكيني',
    c: 'philosophie', p: 346, r: 4.9, v: 459, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-الهجرة-إلى-الإنسانية-PDF-فتحي-المسكيني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32119',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%87%d8%ac%d8%b1%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%a5%d9%86%d8%b3%d8%a7%d9%86%d9%8a%d8%a9-pdf-%d9%81%d8%aa%d8%ad%d9%8a/', d: 'يستعرض كتاب «الهجرة إلى الإنسانية» للمؤلف فتحي المسكيني تساؤلات حول ما تضيفه الشعوب كي تنتمي إل...'
  },
  {
    id: 'kg-31905', t: 'الأخلاق', a: 'أرسطوطاليس',
    c: 'philosophie', p: 277, r: 4.5, v: 245, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/تحميل-كتاب-الأخلاق-PDF-أرسطوطاليس.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31905',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d8%ae%d9%84%d8%a7%d9%82-pdf-%d8%a3%d8%b1%d8%b3%d8%b7%d9%88%d8%b7%d8%a7%d9%84%d9%8a%d8%b3/', d: 'كتاب الأخلاق لأرسطوطاليس يعرض موضوع البحث في الأخلاق بشكل واضح، حيث يتناول السلوك الإنساني من زاويتين، الأولى ر...'
  },
  {
    id: 'kg-31902', t: 'مجموعة أعمال المنطق', a: 'أرسطوطاليس',
    c: 'philosophie', p: 618, r: 4.2, v: 242, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/تحميل-كتاب-مجموعة-أعمال-المنطق-PDF-أرسطوطاليس.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31902',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%ac%d9%85%d9%88%d8%b9%d8%a9-%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d8%a7%d9%84%d9%85%d9%86%d8%b7%d9%82-pdf-%d8%a3%d8%b1%d8%b3%d8%b7%d9%88/', d: 'مجموعة أعمال المنطق لأرسطوطاليس تعرض كيفية بناء المعرفة عبر الفرضيات والاستنتاجات، كما توضح الفروق...'
  },
  {
    id: 'kg-32759', t: 'علم النفس الأسود', a: 'محمد عبدالعال',
    c: 'psychologie', p: 200, r: 4.9, v: 139, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-علم-النفس-الأسود-PDF-محمد-عبدالعال-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32759',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d9%81%d8%b3-%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%af-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%b9%d8%a8%d8%af%d8%a7%d9%84%d8%b9%d8%a7%d9%84-%d8%aa/', d: 'يقدم كتاب علم النفس الأسود لمحمد عبدالعال دليلا لفهم تطوير المهارات الاجتماعية والقدرة النفسية...'
  },
  {
    id: 'kg-32756', t: 'علم نفس الحياة', a: 'سيغموند فرويد',
    c: 'psychologie', p: 412, r: 4.6, v: 136, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-علم-نفس-الحياة-PDF-سيغموند-فرويد-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32756',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%84%d9%85-%d9%86%d9%81%d8%b3-%d8%a7%d9%84%d8%ad%d9%8a%d8%a7%d8%a9-pdf-%d8%b3%d9%8a%d8%ba%d9%85%d9%88%d9%86%d8%af-%d9%81%d8%b1%d9%88%d9%8a%d8%af-%d8%aa%d8%ad%d9%85/', d: 'يتناول كتاب علم نفس الحياة لسيغموند فرويد موضوع النسيان من خلال دراسة حالة فقدان اسم سونرولي، حيث...'
  },
  {
    id: 'kg-32753', t: 'علم النفس التحليلي', a: 'كارل يونج',
    c: 'psychologie', p: 204, r: 4.3, v: 133, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-علم-النفس-التحليلي-PDF-كارل-يونج-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32753',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d9%81%d8%b3-%d8%a7%d9%84%d8%aa%d8%ad%d9%84%d9%8a%d9%84%d9%8a-pdf-%d9%83%d8%a7%d8%b1%d9%84-%d9%8a%d9%88%d9%86%d8%ac-%d8%aa%d8%ad%d9%85/', d: 'يركز كتاب علم النفس التحليلي لكارل يونج على تأسيس هذا الفرع من علم النفس من خلال مجموعة من...'
  },
  {
    id: 'kg-32392', t: 'الهشاشة النفسية', a: 'إسماعيل عرفة',
    c: 'psychologie', p: 200, r: 4.2, v: 252, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الهشاشة-النفسية-PDF-إسماعيل-عرفة-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32392',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%87%d8%b4%d8%a7%d8%b4%d8%a9-%d8%a7%d9%84%d9%86%d9%81%d8%b3%d9%8a%d8%a9-pdf-%d8%a5%d8%b3%d9%85%d8%a7%d8%b9%d9%8a%d9%84-%d8%b9%d8%b1%d9%81%d8%a9-%d8%aa%d8%ad/', d: 'كتاب الهشاشة النفسية للمؤلف إسماعيل عرفة يشرح كيف تظهر الهشاشة النفسية في سلوكياتنا اليومية، حيث...'
  },
  {
    id: 'kg-32383', t: 'متلازمة تيك توك', a: 'إسماعيل عرفة',
    c: 'psychologie', p: 191, r: 4.3, v: 243, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-متلازمة-تيك-توك-PDF-إسماعيل-عرفة-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32383',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%aa%d9%84%d8%a7%d8%b2%d9%85%d8%a9-%d8%aa%d9%8a%d9%83-%d8%aa%d9%88%d9%83-pdf-%d8%a5%d8%b3%d9%85%d8%a7%d8%b9%d9%8a%d9%84-%d8%b9%d8%b1%d9%81%d8%a9-%d8%aa%d8%ad%d9%85/', d: 'كتاب متلازمة تيك توك من تأليف إسماعيل عرفة يعرض التحولات التي أحدثها تطبيق تيك توك في أساليب...'
  },
  {
    id: 'kg-32147', t: 'الرؤى السلوكية', a: 'مايكل هالزوورث',
    c: 'psychologie', p: 164, r: 4.7, v: 487, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-الرؤى-السلوكية-PDF-مايكل-هالزوورث.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32147',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b1%d8%a4%d9%89-%d8%a7%d9%84%d8%b3%d9%84%d9%88%d9%83%d9%8a%d8%a9-pdf-%d9%85%d8%a7%d9%8a%d9%83%d9%84-%d9%87%d8%a7%d9%84%d8%b2/', d: 'يُبيّن كتاب الرؤى السلوكية لمايكل هالزوورث كيف يؤثر الجانب التلقائي من سلوكنا بشدة بالعوامل الخارجة...'
  },
  {
    id: 'kg-32051', t: 'العقل الواعي', a: 'زولتان توري',
    c: 'psychologie', p: 136, r: 4.1, v: 391, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/07/تحميل-كتاب-العقل-الواعي-PDF-زولتان-توري.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32051',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b9%d9%82%d9%84-%d8%a7%d9%84%d9%88%d8%a7%d8%b9%d9%8a-pdf-%d8%b2%d9%88%d9%84%d8%aa%d8%a7%d9%86-%d8%aa%d9%88%d8%b1%d9%8a/', d: 'يستعرض كتاب العقل الواعي للمؤلف زولتان توري تطور العقل البشري، حيث يؤكد المؤلف أن الوعي ليس خاصية حديثة...'
  },
  {
    id: 'kg-32128', t: 'السعادة', a: 'تيم لوماس',
    c: 'psychologie', p: 210, r: 4.8, v: 468, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-السعادة-PDF-تيم-لوماس.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32128',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-pdf-%d8%aa%d9%8a%d9%85-%d9%84%d9%88%d9%85%d8%a7%d8%b3/', d: 'يتناول كتاب السعادة للمؤلف تيم لوماس مفهوم السعادة باعتبارها حالة ذهنية معقدة ومراوغة، حيث يوضح أن معناها غير وا...'
  },
  {
    id: 'kg-31289', t: 'الخرس الأسري .. المشكلة والحل', a: 'سعد جبر',
    c: 'psychologie', p: 68, r: 4.9, v: 109, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الخرس-الأسري-.-المشكلة-والحل-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31289',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ae%d8%b1%d8%b3-%d8%a7%d9%84%d8%a3%d8%b3%d8%b1%d9%8a-%d8%a7%d9%84%d9%85%d8%b4%d9%83%d9%84%d8%a9-%d9%88%d8%a7%d9%84%d8%ad%d9%84/', d: 'كتاب &quot;الخرس الأسري .. المشكلة والحل&quot; للكاتب سعد جبر يعالج ظاهرة الصمت العاطفي الذي يؤثر على...'
  },
  {
    id: 'kg-30741', t: 'مبادئ علم النفس 101', a: 'بول كلينمان',
    c: 'psychologie', p: 321, r: 4.1, v: 41, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-مبادئ-علم-النفس-101-PDF-بول-كلينمان.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30741',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%a8%d8%a7%d8%af%d8%a6-%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d9%86%d9%81%d8%b3-101-pdf-%d8%a8%d9%88%d9%84-%d9%83%d9%84%d9%8a%d9%86%d9%85/', d: 'الكتاب الذي بين يديك يتجاوز الطرق التقليدية في عرض علم النفس، حيث يبتعد عن التفاصيل المملة والإحصا...'
  },
  {
    id: 'kg-32850', t: 'مقدمة ابن خلدون', a: 'ابن خلدون',
    c: 'sciences-sociales', p: 555, r: 4.0, v: 230, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-مقدمة-ابن-خلدون-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32850',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم كتاب مقدمة ابن خلدون للمؤلف ابن خلدون تأسيسا لعلم الاجتماع من خلال تحليل شامل لظواهر التاريخ...'
  },
  {
    id: 'kg-32847', t: 'مقدمة ابن خلدون 1', a: 'ابن خلدون',
    c: 'sciences-sociales', p: 567, r: 4.7, v: 227, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-مقدمة-ابن-خلدون-1-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32847',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-1-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم ابن خلدون في كتابه مقدمة ابن خلدون 1 تصورا تأسيسيا لعلم الاجتماع حيث يعد المؤلف مؤسس هذا...'
  },
  {
    id: 'kg-32841', t: 'مقدمة ابن خلدون 3', a: 'ابن خلدون',
    c: 'sciences-sociales', p: 446, r: 4.1, v: 221, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-مقدمة-ابن-خلدون-3-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32841',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-3-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يناقش كتاب مقدمة ابن خلدون 3 للمؤلف ابن خلدون ثلاثة أقسام رئيسية هي المقدمة والتاريخ وترجمة...'
  },
  {
    id: 'kg-32844', t: 'مقدمة ابن خلدون 2', a: 'ابن خلدون',
    c: 'sciences-sociales', p: 543, r: 4.4, v: 224, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-مقدمة-ابن-خلدون-2-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32844',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-2-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم كتاب مقدمة ابن خلدون 2 للمؤلف ابن خلدون رؤية متقدمة في العلوم الاجتماعية، حيث يعرض فلسفة...'
  },
  {
    id: 'kg-28435', t: 'معركة التقاليد', a: 'محمد قطب',
    c: 'sciences-sociales', p: 168, r: 4.5, v: 135, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-معركة-التقاليد-PDF-محمد-قطب.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28435',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%b9%d8%b1%d9%83%d8%a9-%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d9%84%d9%8a%d8%af-pdf-%d9%85%d8%ad%d9%85%d8%af-%d9%82%d8%b7%d8%a8/', d: 'تتناول كتاب معركة التقاليد لمحمد قطب مسألة مهمة تتعلق بالتقاليد وتأثيرها على المجتمع في العصور المختلفة وي...'
  },
  {
    id: 'kg-28372', t: 'حول التأصيل الإسلامى للعلوم الاجتماعية', a: 'محمد قطب',
    c: 'sciences-sociales', p: 176, r: 4.2, v: 72, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-حول-التأصيل-الإسلامى-للعلوم-الاجتماعية-PDF-محمد-قطب.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28372',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d9%88%d9%84-%d8%a7%d9%84%d8%aa%d8%a3%d8%b5%d9%8a%d9%84-%d8%a7%d9%84%d8%a5%d8%b3%d9%84%d8%a7%d9%85%d9%89-%d9%84%d9%84%d8%b9%d9%84%d9%88/', d: 'يتناول كتاب التأصيل الإسلامي للعلوم الاجتماعية للمؤلف محمد قطب مفهوم علم الاجتماع...'
  },
  {
    id: 'kg-27349', t: 'محو الأمية التربوية', a: 'محمد أحمد إسماعيل',
    c: 'sciences-sociales', p: 667, r: 4.9, v: 489, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-محو-الأمية-التربوية-PDF-محمد-أحمد-إسماعيل.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=27349',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%ad%d9%88-%d8%a7%d9%84%d8%a3%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%88%d9%8a%d8%a9-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%a3/', d: 'يتناول كتاب محو الأمية التربوية للكاتب محمد أحمد إسماعيل أهمية التربية المبكرة للأطفال وكيف...'
  },
  {
    id: 'kg-27331', t: 'وداعا أم السعد', a: 'محمد أحمد إسماعيل',
    c: 'sciences-sociales', p: 21, r: 4.1, v: 471, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-وداعا-أم-السعد-PDF-محمد-أحمد-إسماعيل.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=27331',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%88%d8%af%d8%a7%d8%b9%d8%a7-%d8%a3%d9%85-%d8%a7%d9%84%d8%b3%d8%b9%d8%af-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%a3%d8%ad%d9%85%d8%af-%d8%a5%d8%b3/', d: 'يمثل كتاب وداعًا أم السعد للمؤلف محمد أحمد إسماعيل إضافة قيمة للمهتمين بفروع العلوم الإنسانية وقض...'
  },
  {
    id: 'kg-27289', t: 'ضرورة محو الأمية التربوية', a: 'محمد أحمد إسماعيل',
    c: 'sciences-sociales', p: 304, r: 4.9, v: 429, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-ضرورة-محو-الأمية-التربوية-PDF-محمد-أحمد-إسماعيل.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=27289',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b6%d8%b1%d9%88%d8%b1%d8%a9-%d9%85%d8%ad%d9%88-%d8%a7%d9%84%d8%a3%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8%d9%88%d9%8a%d8%a9-pdf/', d: 'كتاب ضرورة محو الأمية التربوية للمؤلف محمد أحمد إسماعيل يعد من الكتب المهمة في مجال ال...'
  },
  {
    id: 'kg-32530', t: 'على خطى الرسول', a: 'أدهم شرقاوي',
    c: 'croissance-personnelle', p: 354, r: 4.0, v: 390, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-على-خطى-الرسول-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32530',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%84%d9%89-%d8%ae%d8%b7%d9%89-%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%84-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم كتاب على خطى الرسول لأدهم شرقاوي رؤية متجددة للسيرة النبوية حيث يربط بين الأحداث التاريخية...'
  },
  {
    id: 'kg-32406', t: 'غير أفكارك وأحدث تغييرا دائما', a: 'نيكول فينيولا',
    c: 'croissance-personnelle', p: 336, r: 4.6, v: 266, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-غير-أفكارك-وأحدث-تغييرا-دائما-PDF-نيكول-فينيولا-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32406',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ba%d9%8a%d8%b1-%d8%a3%d9%81%d9%83%d8%a7%d8%b1%d9%83-%d9%88%d8%a3%d8%ad%d8%af%d8%ab-%d8%aa%d8%ba%d9%8a%d9%8a%d8%b1%d8%a7-%d8%af%d8%a7%d8%a6%d9%85%d8%a7-pdf-%d9%86%d9%8a/', d: 'كتاب غير أفكارك وأحدث تغييرا دائما للمؤلفة نيكول فينيولا يقدم دليلاً شاملاً لفهم...'
  },
  {
    id: 'kg-32379', t: 'كلنا مرضى نفسيين', a: 'إسماعيل عرفة',
    c: 'croissance-personnelle', p: 312, r: 4.9, v: 239, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-كلنا-مرضى-نفسيين-PDF-إسماعيل-عرفة-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32379',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%83%d9%84%d9%86%d8%a7-%d9%85%d8%b1%d8%b6%d9%89-%d9%86%d9%81%d8%b3%d9%8a%d9%8a%d9%86-pdf-%d8%a5%d8%b3%d9%85%d8%a7%d8%b9%d9%8a%d9%84-%d8%b9%d8%b1%d9%81%d8%a9-%d8%aa%d8%ad/', d: 'يتناول كتاب كلنا مرضى نفسيين للمؤلف إسماعيل عرفة تحول علم النفس من تخصص طبي يختص بعلاج المرضى...'
  },
  {
    id: 'kg-32048', t: 'القلق والرهاب', a: 'إدموند جيه بورن',
    c: 'croissance-personnelle', p: 555, r: 4.8, v: 388, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/07/تحميل-كتاب-القلق-والرهاب-PDF-إدموند-جيه-بورن.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32048',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%84%d9%82-%d9%88%d8%a7%d9%84%d8%b1%d9%87%d8%a7%d8%a8-pdf-%d8%a5%d8%af%d9%85%d9%88%d9%86%d8%af-%d8%ac%d9%8a%d9%87-%d8%a8/', d: 'يتناول كتاب القلق والرهاب للمؤلف إدموند جيه بورن أسباب اضطرابات القلق والرهاب بشكل دقيق ومفصل، كما ي...'
  },
  {
    id: 'kg-31917', t: 'شذرات الفكر العميق', a: 'رفيقة التعلي',
    c: 'croissance-personnelle', p: 110, r: 4.7, v: 257, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/تحميل-كتاب-شذرات-الفكر-العميق-PDF-رفيقة-التعلي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31917',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d8%b0%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%81%d9%83%d8%b1-%d8%a7%d9%84%d8%b9%d9%85%d9%8a%d9%82-pdf-%d8%b1%d9%81%d9%8a%d9%82%d8%a9-%d8%a7/', d: 'كتاب شذرات الفكر العميق من تأليف رفيقة التعلي يقدم مجموعة من التأملات التي تركز على المشاعر الشخصي...'
  },
  {
    id: 'kg-32150', t: 'التفكير النقدي', a: 'جوناثان هابر',
    c: 'philosophie', p: 146, r: 4.0, v: 490, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-التفكير-النقدي-PDF-جوناثان-هابر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32150',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d9%86%d9%82%d8%af%d9%8a-pdf-%d8%ac%d9%88%d9%86%d8%a7%d8%ab%d8%a7%d9%86-%d9%87%d8%a7/', d: 'يقدّم كتاب التفكير النقدي للمؤلف جوناثان هابر عرضًا شاملاً لأصول مفهوم التفكير النقدي في مجالات الفلسف...'
  },
  {
    id: 'kg-32144', t: 'العدمية', a: 'نولِن جيرتز',
    c: 'philosophie', p: 130, r: 4.4, v: 484, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-العدمية-PDF-نولِن-جيرتز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32144',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b9%d8%af%d9%85%d9%8a%d8%a9-pdf-%d9%86%d9%88%d9%84%d9%90%d9%86-%d8%ac%d9%8a%d8%b1%d8%aa%d8%b2/', d: 'يستعرض كتاب العدمية لنولِن جيرتز مفهوم العدمية الذي غالباً ما يُفهم بشكل خاطئ باعتبارها مجرد انعدام الإيمان أو...'
  },
  {
    id: 'kg-31593', t: 'كن الشخص الذي يجعلك سعيدا', a: 'إيناس سمير',
    c: 'croissance-personnelle', p: 204, r: 4.3, v: 413, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-كن-الشخص-الذي-يجعلك-سعيدا-PDF-إيناس-سمير.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31593',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%83%d9%86-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5-%d8%a7%d9%84%d8%b0%d9%8a-%d9%8a%d8%ac%d8%b9%d9%84%d9%83-%d8%b3%d8%b9%d9%8a%d8%af%d8%a7-pdf-%d8%a5/', d: 'يقدم كتاب &quot;كن الشخص الذي يجعلك سعيدا&quot; لإيناس سمير رؤية مركزة في أهمية الاهتمام بالنفس كسبيل...'
  },
  {
    id: 'kg-32008', t: 'تأسيس التأويلية القرآنية', a: 'الصّحبي الماجري',
    c: 'philosophie', p: 264, r: 4.8, v: 348, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/06/تحميل-كتاب-تأسيس-التأويلية-القرآنية-PDF-الصّحبي-الماجري.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32008',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a3%d8%b3%d9%8a%d8%b3-%d8%a7%d9%84%d8%aa%d8%a3%d9%88%d9%8a%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d9%82%d8%b1%d8%a2%d9%86%d9%8a%d8%a9-pdf/', d: 'كتاب تأسيس التأويلية القرآنية من تأليف الصّحبي الماجري يقدم دراسة تهدف إلى بناء هرمنيوطيق...'
  },
  {
    id: 'kg-31960', t: 'ناموس المعالي ومعيار تهافت الغزالي', a: 'علاء سامي',
    c: 'philosophie', p: 55, r: 4.0, v: 300, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/06/تحميل-كتاب-ناموس-المعالي-ومعيار-تهافت-الغزالي-PDF-علاء-سامي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31960',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%86%d8%a7%d9%85%d9%88%d8%b3-%d8%a7%d9%84%d9%85%d8%b9%d8%a7%d9%84%d9%8a-%d9%88%d9%85%d8%b9%d9%8a%d8%a7%d8%b1-%d8%aa%d9%87%d8%a7%d9%81%d8%aa/', d: 'كتاب &quot;ناموس المعالي ومعيار تهافت الغزالي&quot; للمؤلف علاء سامي يناقش الفلسفة باعتبارها اس...'
  },
  {
    id: 'kg-32777', t: 'أغنى رجل في بابل', a: 'جورج كلاسون',
    c: 'sciences-sociales', p: 160, r: 4.7, v: 157, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-أغنى-رجل-في-بابل-PDF-جورج-كلاسون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32777',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%ba%d9%86%d9%89-%d8%b1%d8%ac%d9%84-%d9%81%d9%8a-%d8%a8%d8%a7%d8%a8%d9%84-pdf-%d8%ac%d9%88%d8%b1%d8%ac-%d9%83%d9%84%d8%a7%d8%b3%d9%88%d9%86-%d8%aa%d8%ad%d9%85/', d: 'يحكي كتاب أغنى رجل في بابل للمؤلف جورج كلاسون قصص مجموعة من سكان مدينة بابل القديمة الذين يشاركون...'
  },
  {
    id: 'kg-32045', t: '٢٣ حقيقة يخفونها عنك بخصوص الرأسمالية', a: 'ها جوون تشانج',
    c: 'economie', p: 274, r: 4.5, v: 385, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/07/تحميل-كتاب-٢٣-حقيقة-يخفونها-عنك-بخصوص-الرأسمالية-PDF-ها-جوون-تشانج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32045',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%a2%d9%a3-%d8%ad%d9%82%d9%8a%d9%82%d8%a9-%d9%8a%d8%ae%d9%81%d9%88%d9%86%d9%87%d8%a7-%d8%b9%d9%86%d9%83-%d8%a8%d8%ae%d8%b5%d9%88%d8%b5-%d8%a7/', d: 'كتاب ٢٣ حقيقة يخفونها عنك بخصوص الرأسمالية PDF - ها جوون تشانج - يقدم كتاب ٢٣ حقيقة يخفونها عنك بخصوص الرأسمالية للمؤلف ها جوون تشانج مراجعة نقدية...'
  },
  {
    id: 'kg-31847', t: 'شفرة السعادة والنجاح', a: 'حمدان محمود علي',
    c: 'croissance-personnelle', p: 57, r: 4.7, v: 187, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/تحميل-كتاب-شفرة-السعادة-والنجاح-PDF-حمدان-محمود-علي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31847',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%81%d8%b1%d8%a9-%d8%a7%d9%84%d8%b3%d8%b9%d8%a7%d8%af%d8%a9-%d9%88%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad-pdf-%d8%ad%d9%85%d8%af%d8%a7/', d: 'كتاب شفرة السعادة والنجاح للمؤلف حمدان محمود علي يعد دليلاً إرشادياً في التنمية البشرية وتطوي...'
  },
  {
    id: 'kg-31316', t: 'أزمة ثقة بين الممولين والمشاريع', a: 'سعد جبر',
    c: 'economie', p: 48, r: 4.6, v: 136, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-أزمة-ثقة-بين-الممولين-والمشاريع-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31316',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b2%d9%85%d8%a9-%d8%ab%d9%82%d8%a9-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%85%d9%85%d9%88%d9%84%d9%8a%d9%86-%d9%88%d8%a7%d9%84%d9%85%d8%b4/', d: 'يستعرض كتاب &quot;أزمة ثقة بين الممولين والمشاريع&quot; للدكتور سعد جبر إشكالية فقدان الثقة التي يعا...'
  },
  {
    id: 'kg-31313', t: 'التمكين والشراكة', a: 'سعد جبر',
    c: 'economie', p: 85, r: 4.3, v: 133, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-التمكين-والشراكة-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31313',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%aa%d9%85%d9%83%d9%8a%d9%86-%d9%88%d8%a7%d9%84%d8%b4%d8%b1%d8%a7%d9%83%d8%a9-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'في كتابه &quot;التمكين والشراكة&quot;، يقدم سعد جبر دليلاً شاملاً يهدف إلى ربط مؤسسات المجتمع المحلي في أفريقيا بمو...'
  },
  {
    id: 'kg-31310', t: '30 يوما حاسمة', a: 'سعد جبر',
    c: 'economie', p: 32, r: 4.0, v: 130, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-30-يوما-حاسمة-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31310',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-30-%d9%8a%d9%88%d9%85%d8%a7-%d8%ad%d8%a7%d8%b3%d9%85%d8%a9-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'في كتاب &quot;30 يومًا حاسمة&quot;، يقدم الدكتور سعد جبر رؤى عملية تهدف إلى دعم رواد الأعمال في المرحلة الحرجة التي تل...'
  },
  {
    id: 'kg-31277', t: 'الذكاء التسويقي', a: 'سعد جبر',
    c: 'economie', p: 78, r: 4.7, v: 97, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الذكاء-التسويقي-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31277',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82%d9%8a-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'في عالم يسوده التحول الرقمي، يأتي كتاب &quot;الذكاء التسويقي&quot; للمؤلف سعد جبر ليقدم رؤية متعمقة حول كيفية تحويل...'
  },
  {
    id: 'kg-31590', t: 'الوحش الذي يسكنك يمكن أن يكون لطيفا', a: 'إيناس سمير',
    c: 'croissance-personnelle', p: 265, r: 4.0, v: 410, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-الوحش-الذي-يسكنك-يمكن-أن-يكون-لطيفا-PDF-إيناس-سمير.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31590',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%88%d8%ad%d8%b4-%d8%a7%d9%84%d8%b0%d9%8a-%d9%8a%d8%b3%d9%83%d9%86%d9%83-%d9%8a%d9%85%d9%83%d9%86-%d8%a3%d9%86-%d9%8a%d9%83%d9%88/', d: 'يعرض كتاب الوحش الذي يسكنك يمكن أن يكون لطيفا رؤية مختلفة لمفهوم الخوف الذي يلازم...'
  },
  {
    id: 'kg-31584', t: 'دليل النجاة الفردية', a: 'احمد ابو الوفا',
    c: 'croissance-personnelle', p: 327, r: 4.4, v: 404, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-دليل-النجاة-الفردية-PDF-احمد-ابو-الوفا.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31584',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%af%d9%84%d9%8a%d9%84-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%a9-%d8%a7%d9%84%d9%81%d8%b1%d8%af%d9%8a%d8%a9-pdf-%d8%a7%d8%ad%d9%85%d8%af-%d8%a7/', d: 'كتاب دليل النجاة الفردية للدكتور أحمد أبو الوفا الصادر عام 2023 عن دار عصير الكتب، يقدم رؤية نف...'
  },
  {
    id: 'kg-31256', t: 'إعداد التقارير الإدارية باحترافية', a: 'سعد جبر',
    c: 'economie', p: 189, r: 4.6, v: 76, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-إعداد-التقارير-الإدارية-باحترافية-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31256',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a5%d8%b9%d8%af%d8%a7%d8%af-%d8%a7%d9%84%d8%aa%d9%82%d8%a7%d8%b1%d9%8a%d8%b1-%d8%a7%d9%84%d8%a5%d8%af%d8%a7%d8%b1%d9%8a%d8%a9-%d8%a8%d8%a7/', d: '&#039;إعداد التقارير الإدارية باحترافية&#039; هو عمل يتناول موضوعاً حيوياً في عالم الإدارة حيث يسل...'
  },
  {
    id: 'kg-31587', t: 'وتظن أنك نجوت', a: 'إيناس سمير',
    c: 'croissance-personnelle', p: 306, r: 4.7, v: 407, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-وتظن-أنك-نجوت-PDF-إيناس-سمير.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31587',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%88%d8%aa%d8%b8%d9%86-%d8%a3%d9%86%d9%83-%d9%86%d8%ac%d9%88%d8%aa-pdf-%d8%a5%d9%8a%d9%86%d8%a7%d8%b3-%d8%b3%d9%85%d9%8a%d8%b1/', d: 'في كتاب &quot;وتظن أنك نجوت&quot; تقدم إيناس سمير تأملا في رحلة الحياة التي تشبه سفينة تسير في بحر هائج، تتقلب بها...'
  },
  {
    id: 'kg-32299', t: 'الجغرافيا الاقتصادية وجغرافية الإنتاج الحيوي', a: 'محمد رياض',
    c: 'economie', p: 236, r: 4.9, v: 159, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الجغرافيا-الاقتصادية-وجغرافية-الإنتاج-الحيوي-PDF-محمد-رياض.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32299',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d8%ba%d8%b1%d8%a7%d9%81%d9%8a%d8%a7-%d8%a7%d9%84%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%d9%8a%d8%a9-%d9%88%d8%ac%d8%ba%d8%b1%d8%a7%d9%81%d9%8a%d8%a9-%d8%a7/', d: 'كتاب الجغرافيا الاقتصادية وجغرافية الإنتاج الحيوي PDF - محمد رياض - يتناول كتاب الجغرافيا الاقتصادية وجغرافية الإنتاج الحيوي للدكتور محمد رياض مفهوم...'
  },
  {
    id: 'kg-30735', t: 'مبادئ المحاسبة 101', a: 'ميشيل كاجان',
    c: 'economie', p: 302, r: 4.5, v: 35, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-مبادئ-المحاسبة-101-PDF-ميشيل-كاجان.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30735',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%a8%d8%a7%d8%af%d8%a6-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d8%b3%d8%a8%d8%a9-101-pdf-%d9%85%d9%8a%d8%b4%d9%8a%d9%84-%d9%83%d8%a7%d8%ac/', d: 'يقدم هذا الكتاب رؤية شاملة حول أهمية المحاسبة في حياتنا اليومية، حيث يكشف عن دورها المحوري في العدي...'
  },
  {
    id: 'kg-32269', t: 'حرب العصابات في عالم المؤسسات', a: 'باتريك لينشوني',
    c: 'affaires-et-investissements', p: 156, r: 4.9, v: 129, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-حرب-العصابات-في-عالم-المؤسسات-PDF-باتريك-لينشوني-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32269',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d8%b1%d8%a8-%d8%a7%d9%84%d8%b9%d8%b5%d8%a7%d8%a8%d8%a7%d8%aa-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d9%85%d8%a4%d8%b3%d8%b3%d8%a7%d8%aa-pdf-%d8%a8%d8%a7/', d: 'يُعالج كتاب حرب العصابات في عالم المؤسسات للمؤلف باتريك لينشوني مشكلة الانقسامات...'
  },
  {
    id: 'kg-32263', t: 'الأسباب الثلاثة للتعاسة في العمل', a: 'باتريك لينشوني',
    c: 'affaires-et-investissements', p: 186, r: 4.3, v: 123, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الأسباب-الثلاثة-للتعاسة-في-العمل-PDF-باتريك-لينشوني-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32263',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d8%b3%d8%a8%d8%a7%d8%a8-%d8%a7%d9%84%d8%ab%d9%84%d8%a7%d8%ab%d8%a9-%d9%84%d9%84%d8%aa%d8%b9%d8%a7%d8%b3%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b9%d9%85/', d: 'يستعرض كتاب الأسباب الثلاثة للتعاسة في العمل للمؤلف باتريك لينشوني معاناة...'
  },
  {
    id: 'kg-32260', t: 'المؤسسون في عالم الأعمال', a: 'جيسيكا ليفينجستون',
    c: 'affaires-et-investissements', p: 674, r: 4.0, v: 120, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-المؤسسون-في-عالم-الأعمال-PDF-جيسيكا-ليفينجستون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32260',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d8%a4%d8%b3%d8%b3%d9%88%d9%86-%d9%81%d9%8a-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-pdf-%d8%ac%d9%8a%d8%b3%d9%8a%d9%83%d8%a7/', d: 'كتاب المؤسسون في عالم الأعمال من تأليف جيسيكا ليفينجستون يقدم مجموعة من اللقاءات مع...'
  },
  {
    id: 'kg-32257', t: 'الجماهير بين المشاركة والإبداع', a: 'جيف هاو',
    c: 'affaires-et-investissements', p: 266, r: 4.7, v: 117, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الجماهير-بين-المشاركة-والإبداع-PDF-جيف-هاو-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32257',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d9%85%d8%a7%d9%87%d9%8a%d8%b1-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b1%d9%83%d8%a9-%d9%88%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9-pdf/', d: 'يقدِّم كتاب الجماهير بين المشاركة والإبداع للمؤلف جيف هاو دراسة متعمقة عن كيفية استثمار...'
  },
  {
    id: 'kg-32254', t: 'الابتكار', a: 'مارك دودجسون',
    c: 'affaires-et-investissements', p: 142, r: 4.4, v: 114, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الابتكار-PDF-مارك-دودجسون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32254',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a7%d8%a8%d8%aa%d9%83%d8%a7%d8%b1-pdf-%d9%85%d8%a7%d8%b1%d9%83-%d8%af%d9%88%d8%af%d8%ac%d8%b3%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7/', d: 'كتاب &quot;الابتكار&quot; لمارك دودجسون يوضح معنى الابتكار وتأثيره العميق في حياتنا وعملنا، حيث يستعرض الطرق التي...'
  },
  {
    id: 'kg-32251', t: 'مَنْ قَتَل الإبداعَ؟', a: 'أندرو جرانت',
    c: 'affaires-et-investissements', p: 312, r: 4.1, v: 111, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-مَنْ-قَتَل-الإبداعَ؟-PDF-أندرو-جرانت-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32251',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%8e%d9%86%d9%92-%d9%82%d9%8e%d8%aa%d9%8e%d9%84-%d8%a7%d9%84%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8e%d8%9f-pdf-%d8%a3%d9%86%d8%af%d8%b1%d9%88-%d8%ac%d8%b1%d8%a7%d9%86/', d: 'كتاب «مَنْ قَتَل الإبداعَ؟» للمؤلف أندرو جرانت يبحث في الأسباب التي تقف وراء تراجع التفكير...'
  },
  {
    id: 'kg-32248', t: 'لماذا تعتمد على الحظ؟', a: 'هارولد دبليو لويس',
    c: 'affaires-et-investissements', p: 236, r: 4.8, v: 108, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-لماذا-تعتمد-على-الحظ؟-PDF-هارولد-دبليو-لويس-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32248',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d8%aa%d8%b9%d8%aa%d9%85%d8%af-%d8%b9%d9%84%d9%89-%d8%a7%d9%84%d8%ad%d8%b8%d8%9f-pdf-%d9%87%d8%a7%d8%b1%d9%88%d9%84%d8%af-%d8%af%d8%a8%d9%84/', d: 'يتناول كتاب لماذا تعتمد على الحظ؟ لهارولد دبليو لويس موضوع اتخاذ القرارات في الحياة...'
  },
  {
    id: 'kg-32245', t: 'الموظف غير المرئي', a: 'أدريان جوستيك',
    c: 'affaires-et-investissements', p: 148, r: 4.5, v: 105, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الموظف-غير-المرئي-PDF-أدريان-جوستيك-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32245',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d9%88%d8%b8%d9%81-%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d9%85%d8%b1%d8%a6%d9%8a-pdf-%d8%a3%d8%af%d8%b1%d9%8a%d8%a7%d9%86-%d8%ac%d9%88%d8%b3%d8%aa%d9%8a%d9%83/', d: 'يتناول كتاب الموظف غير المرئي للمؤلف أدريان جوستيك أزمة الموظف الذي يشعر بالتجاهل والتهديد...'
  },
  {
    id: 'kg-32242', t: 'فك الشفرة', a: 'فيل باردن',
    c: 'affaires-et-investissements', p: 288, r: 4.2, v: 102, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-فك-الشفرة-PDF-فيل-باردن-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32242',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%81%d9%83-%d8%a7%d9%84%d8%b4%d9%81%d8%b1%d8%a9-pdf-%d9%81%d9%8a%d9%84-%d8%a8%d8%a7%d8%b1%d8%af%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86%d9%8a/', d: 'يقدم كتاب &quot;فك الشفرة&quot; للكاتب فيل باردن رؤى متقدمة في علم اتخاذ القرار وتأثيره على سلوك المستهلكين...'
  },
  {
    id: 'kg-32471', t: 'حول العرب والعروبة', a: 'نجيب محفوظ',
    c: 'politique', p: 204, r: 4.1, v: 331, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-حول-العرب-والعروبة-PDF-نجيب-محفوظ-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32471',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d9%88%d9%84-%d8%a7%d9%84%d8%b9%d8%b1%d8%a8-%d9%88%d8%a7%d9%84%d8%b9%d8%b1%d9%88%d8%a8%d8%a9-pdf-%d9%86%d8%ac%d9%8a%d8%a8-%d9%85%d8%ad%d9%81%d9%88%d8%b8-%d8%aa%d8%ad/', d: 'يتناول كتاب حول العرب والعروبة لنجيب محفوظ موضوع العرب والعروبة من منظور أدبي راقٍ، حيث يعالج...'
  },
  {
    id: 'kg-32468', t: 'حول الدين والديمقراطية', a: 'نجيب محفوظ',
    c: 'politique', p: 240, r: 4.8, v: 328, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-حول-الدين-والديمقراطية-PDF-نجيب-محفوظ-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32468',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d9%88%d9%84-%d8%a7%d9%84%d8%af%d9%8a%d9%86-%d9%88%d8%a7%d9%84%d8%af%d9%8a%d9%85%d9%82%d8%b1%d8%a7%d8%b7%d9%8a%d8%a9-pdf-%d9%86%d8%ac%d9%8a%d8%a8-%d9%85%d8%ad%d9%81/', d: 'يقدم نجيب محفوظ في كتابه حول الدين والديمقراطية خلاصة آرائه التي عبر عنها في أعماله الأدبية،...'
  },
  {
    id: 'kg-32042', t: 'السامريون الأشرار', a: 'ها جوون تشانج',
    c: 'politique', p: 458, r: 4.2, v: 382, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/07/تحميل-كتاب-السامريون-الأشرار-PDF-ها-جوون-تشانج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32042',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d8%a7%d9%85%d8%b1%d9%8a%d9%88%d9%86-%d8%a7%d9%84%d8%a3%d8%b4%d8%b1%d8%a7%d8%b1-pdf-%d9%87%d8%a7-%d8%ac%d9%88%d9%88%d9%86/', d: 'يقدم كتاب السامريون الأشرار للمؤلف ها جوون تشانج تحليلاً نقدياً للسياسات الاقتصادية التي تتبعها ال...'
  },
  {
    id: 'kg-31755', t: 'ركائز في فلسفة السياسة', a: 'يمنى طريف الخولي',
    c: 'politique', p: 88, r: 4.5, v: 95, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-ركائز-في-فلسفة-السياسة-PDF-يمنى-طريف-الخولي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31755',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b1%d9%83%d8%a7%d8%a6%d8%b2-%d9%81%d9%8a-%d9%81%d9%84%d8%b3%d9%81%d8%a9-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-pdf-%d9%8a%d9%85%d9%86/', d: 'يُقدّم كتاب &quot;ركائز في فلسفة السياسة&quot; قراءة متعمقة في التحوّلات الفكرية التي شهدتها الفلسفة...'
  },
  {
    id: 'kg-31301', t: 'سفر التكوين السياسي', a: 'سعد جبر',
    c: 'politique', p: 132, r: 4.1, v: 121, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-سفر-التكوين-السياسي-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31301',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%81%d8%b1-%d8%a7%d9%84%d8%aa%d9%83%d9%88%d9%8a%d9%86-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d9%8a-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8/', d: 'يجسد رؤية أكاديمية معمقة في مجال السياسة والمجتمع المدني، حيث يعدّ ثمرة جهود متواص...'
  },
  {
    id: 'kg-32747', t: 'شمس منتصف الليل 5 سلسلة', a: 'ستيفاني ماير',
    c: 'romans', p: 349, r: 4.7, v: 127, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-شمس-منتصف-الليل-5-سلسلة-PDF-ستيفاني-ماير-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32747',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%85%d8%b3-%d9%85%d9%86%d8%aa%d8%b5%d9%81-%d8%a7%d9%84%d9%84%d9%8a%d9%84-5-%d8%b3%d9%84%d8%b3%d9%84%d8%a9-pdf-%d8%b3%d8%aa%d9%8a%d9%81%d8%a7%d9%86%d9%8a-%d9%85%d8%a7/', d: 'تدور رواية شمس منتصف الليل 5 سلسلة حول الصراعات الداخلية التي يعاني منها إدوارد وهو شخصية...'
  },
  {
    id: 'kg-30425', t: 'الاشتراكية', a: 'فريدريك إنجلز',
    c: 'politique', p: 165, r: 4.5, v: 205, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الاشتراكية-PDF-فريدريك-إنجلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30425',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a7%d8%b4%d8%aa%d8%b1%d8%a7%d9%83%d9%8a%d8%a9-pdf-%d9%81%d8%b1%d9%8a%d8%af%d8%b1%d9%8a%d9%83-%d8%a5%d9%86%d8%ac%d9%84%d8%b2/', d: 'تتناول هذه السلسلة من الكراسات مفهوم الماركسية بشكل يهدف إلى تقديم فهم شامل للأفكار التي طرحها كارل ماركس...'
  },
  {
    id: 'kg-32823', t: 'تاريخ ابن خلدون 5', a: 'ابن خلدون',
    c: 'histoire', p: 668, r: 4.3, v: 203, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-تاريخ-ابن-خلدون-5-PDF-ابن-خلدون-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32823',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-5-pdf-%d8%a7%d8%a8%d9%86-%d8%ae%d9%84%d8%af%d9%88%d9%86-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يركز كتاب تاريخ ابن خلدون 5 للمؤلف ابن خلدون على ثلاثة أقسام رئيسية هي المقدمة، وكتاب التاريخ،...'
  },
  {
    id: 'kg-32153', t: 'المرونة العصبية', a: 'محب كوستاندي',
    c: 'sciences', p: 124, r: 4.3, v: 493, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-المرونة-العصبية-PDF-محب-كوستاندي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32153',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d8%b1%d9%88%d9%86%d8%a9-%d8%a7%d9%84%d8%b9%d8%b5%d8%a8%d9%8a%d8%a9-pdf-%d9%85%d8%ad%d8%a8-%d9%83%d9%88%d8%b3%d8%aa%d8%a7/', d: 'كتاب &quot;المرونة العصبية&quot; لمحب كوستاندي يعرض تطور فهمنا للدماغ من كونه تركيبًا ثابتًا قبل خمسين عامًا إل...'
  },
  {
    id: 'kg-32266', t: 'الاجتماعات القاتلة', a: 'باتريك لينشوني',
    c: 'affaires-et-investissements', p: 258, r: 4.6, v: 126, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الاجتماعات-القاتلة-PDF-باتريك-لينشوني-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32266',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a7%d8%ac%d8%aa%d9%85%d8%a7%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d9%82%d8%a7%d8%aa%d9%84%d8%a9-pdf-%d8%a8%d8%a7%d8%aa%d8%b1%d9%8a%d9%83-%d9%84%d9%8a%d9%86%d8%b4/', d: 'يقدم كتاب الاجتماعات القاتلة للمؤلف باتريك لينشوني قصة رمزية تسلط الضوء على كيفية القضاء على...'
  },
  {
    id: 'kg-28310', t: 'الحيوان مقدمة التحقيق', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 52, r: 4.0, v: 490, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-مقدمة-التحقيق-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28310',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a7%d9%84%d8%aa%d8%ad%d9%82%d9%8a%d9%82-pdf-%d8%b9%d9%85%d8%b1/', d: 'يُعتبر كتاب الحيوان للكاتب عمرو بن بحر الجاحظ من أبرز المؤلفات في الأدب العربي، حيث يُعد...'
  },
  {
    id: 'kg-28307', t: 'الحيوان 1', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 428, r: 4.7, v: 487, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-1-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28307',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-1-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان هو أحد المؤلفات الأخيرة لعمرو بن بحر الجاحظ ويعتبر أول عمل شامل في اللغة العربية يتناول...'
  },
  {
    id: 'kg-32296', t: 'الإقليم', a: 'ديفيد ديلاني',
    c: 'politique', p: 214, r: 4.6, v: 156, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الإقليم-PDF-ديفيد-ديلاني-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32296',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a5%d9%82%d9%84%d9%8a%d9%85-pdf-%d8%af%d9%8a%d9%81%d9%8a%d8%af-%d8%af%d9%8a%d9%84%d8%a7%d9%86%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7%d9%86/', d: 'يقدم كتاب الإقليم للمؤلف ديفيد ديلاني مقدمة موجزة توضح التعقيدات المرتبطة بمصطلح «الإقليم»، حيث يعرض...'
  },
  {
    id: 'kg-28298', t: 'الحيوان 4', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 503, r: 4.8, v: 478, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-4-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28298',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-4-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان لعمرو بن بحر الجاحظ هو من المؤلفات الأخيرة للجاحظ ويعتبر أول كتاب شامل في اللغة العربية...'
  },
  {
    id: 'kg-30434', t: 'أصل العائلة والملكية الخاصة والدولة', a: 'فريدريك إنجلز',
    c: 'politique', p: 203, r: 4.4, v: 214, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-أصل-العائلة-والملكية-الخاصة-والدولة-PDF-فريدريك-إنجلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30434',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b5%d9%84-%d8%a7%d9%84%d8%b9%d8%a7%d8%a6%d9%84%d8%a9-%d9%88%d8%a7%d9%84%d9%85%d9%84%d9%83%d9%8a%d8%a9-%d8%a7%d9%84%d8%ae%d8%a7%d8%b5/', d: 'في كتابه &#039;أصل العائلة والملكية الخاصة والدولة&#039; الذي ألَّفه عام 1884، يتناول فريد...'
  },
  {
    id: 'kg-31325', t: 'دليلك المختصر إلى استثمار عقاري ناجح', a: 'سعد جبر',
    c: 'economie', p: 67, r: 4.5, v: 145, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-دليلك-المختصر-إلى-استثمار-عقاري-ناجح-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31325',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d9%85%d8%ae%d8%aa%d8%b5%d8%b1-%d8%a5%d9%84%d9%89-%d8%a7%d8%b3%d8%aa%d8%ab%d9%85%d8%a7%d8%b1-%d8%b9/', d: 'يتناول كتاب &quot;دليلك المختصر إلى استثمار عقاري ناجح&quot; للمؤلف سعد جبر موضوع الاستثمار الع...'
  },
  {
    id: 'kg-28292', t: 'الحيوان 6', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 516, r: 4.2, v: 472, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-6-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28292',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-6-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان للكاتب عمرو بن بحر الجاحظ يعد من أبرز مؤلفاته الأخيرة ويعتبر أول كتاب جامع في اللغة العر...'
  },
  {
    id: 'kg-28286', t: 'الحيوان 8', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 334, r: 4.6, v: 466, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-8-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28286',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-8-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان هو أحد مؤلفات عمرو بن بحر الجاحظ ويعتبر من أهم الكتب التي وضعت في اللغة العربية في مجال...'
  },
  {
    id: 'kg-32808', t: 'نيل الخيرات في القراءات وإعراب الآيات مع مفردات', a: 'ابن خلدون',
    c: 'religion', p: 612, r: 4.8, v: 188, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/10/كتاب-نيل-الخيرات-في-القراءات-وإعراب-الآيات-مع-مفردات-PDF-ابن-خلدون.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32808',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%86%d9%8a%d9%84-%d8%a7%d9%84%d8%ae%d9%8a%d8%b1%d8%a7%d8%aa-%d9%81%d9%8a-%d8%a7%d9%84%d9%82%d8%b1%d8%a7%d8%a1%d8%a7%d8%aa-%d9%88%d8%a5%d8%b9%d8%b1%d8%a7%d8%a8-%d8%a7%d9%84/', d: 'كتاب نيل الخيرات في القراءات وإعراب الآيات مع مفردات PDF - ابن خلدون - يركز كتاب نيل الخيرات في القراءات وإعراب الآيات مع مفردات للمؤلف ابن خلدون على...'
  },
  {
    id: 'kg-31358', t: 'أحاديث الحب النبوي', a: 'سعد جبر',
    c: 'religion', p: 77, r: 4.8, v: 178, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-أحاديث-الحب-النبوي-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31358',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%ad%d8%a7%d8%af%d9%8a%d8%ab-%d8%a7%d9%84%d8%ad%d8%a8-%d8%a7%d9%84%d9%86%d8%a8%d9%88%d9%8a-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'يتناول كتاب &quot;أحاديث الحب النبوي&quot; للدكتور سعد جبر مفهوم الحب والمحبة في الإسلام، حيث يستعرض الأحاديث الن...'
  },
  {
    id: 'kg-31355', t: '25 صفحة ستغير حياتك', a: 'سعد جبر',
    c: 'religion', p: 43, r: 4.5, v: 175, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-25-صفحة-ستغير-حياتك-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31355',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-25-%d8%b5%d9%81%d8%ad%d8%a9-%d8%b3%d8%aa%d8%ba%d9%8a%d8%b1-%d8%ad%d9%8a%d8%a7%d8%aa%d9%83-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'يقدم كتاب &quot;25 صفحة ستغير حياتك&quot; للكاتب سعد جبر خريطة عملية تهدف إلى تحقيق توازن شامل في حياة القارئ من...'
  },
  {
    id: 'kg-31259', t: 'أسرار النجاح في المشاريع الصغيرة', a: 'سعد جبر',
    c: 'economie', p: 129, r: 4.9, v: 79, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-أسرار-النجاح-في-المشاريع-الصغيرة-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31259',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d8%a7%d9%84%d9%86%d8%ac%d8%a7%d8%ad-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d8%b4%d8%a7%d8%b1%d9%8a%d8%b9-%d8%a7%d9%84/', d: 'يقدم كتاب &quot;أسرار النجاح في المشاريع الصغيرة&quot; للمؤلف سعد جبر رؤية شاملة حول كيفية تحقيق ال...'
  },
  {
    id: 'kg-28301', t: 'الحيوان 3', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 548, r: 4.1, v: 481, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-3-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28301',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-3-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان هو أحد المؤلفات الأخيرة للكاتب العربي عمرو بن بحر الجاحظ، ويُعتبر من أول الكتب التي تناو...'
  },
  {
    id: 'kg-28304', t: 'الحيوان 2', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 383, r: 4.4, v: 484, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-2-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28304',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-2-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان للكاتب عمرو بن بحر الجاحظ يعد من المؤلفات الأخيرة للجاحظ ويعتبر أول كتاب جامع في اللغة...'
  },
  {
    id: 'kg-31331', t: 'خمسون رسالة للإمام', a: 'سعد جبر',
    c: 'religion', p: 38, r: 4.1, v: 151, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-خمسون-رسالة-للإمام-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31331',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ae%d9%85%d8%b3%d9%88%d9%86-%d8%b1%d8%b3%d8%a7%d9%84%d8%a9-%d9%84%d9%84%d8%a5%d9%85%d8%a7%d9%85-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'يستعرض كتاب &quot;خمسون رسالة للإمام&quot; للدكتور سعد جبر مفهوم الإمامة من زوايا متعددة، حيث يقدم رؤية شاملة تعك...'
  },
  {
    id: 'kg-28295', t: 'الحيوان 5', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 639, r: 4.5, v: 475, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-5-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28295',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-5-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان لعمرو بن بحر الجاحظ هو واحد من أبرز مؤلفاته التي جاءت في أواخر حياته ويعتبر أول كتاب شام...'
  },
  {
    id: 'kg-32314', t: 'الأصول العامة في الجغرافيا السياسية والجيوبوليتيكا', a: 'محمد رياض',
    c: 'politique', p: 326, r: 4.4, v: 174, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-الأصول-العامة-في-الجغرافيا-السياسية-والجيوبوليتيكا-PDF-محمد-رياض.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32314',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d8%b5%d9%88%d9%84-%d8%a7%d9%84%d8%b9%d8%a7%d9%85%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%ac%d8%ba%d8%b1%d8%a7%d9%81%d9%8a%d8%a7-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7/', d: 'كتاب الأصول العامة في الجغرافيا السياسية والجيوبوليتيكا PDF - محمد رياض - يقدم كتاب الأصول العامة في الجغرافيا السياسية والجيوبوليتيكا للدكتور محمد رياض...'
  },
  {
    id: 'kg-31304', t: '30 خاطرة للتراويح', a: 'سعد جبر',
    c: 'religion', p: 34, r: 4.4, v: 124, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-30-خاطرة-للتراويح-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31304',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-30-%d8%ae%d8%a7%d8%b7%d8%b1%d8%a9-%d9%84%d9%84%d8%aa%d8%b1%d8%a7%d9%88%d9%8a%d8%ad-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: '&#039;30 خاطرة للتراويح&#039; هو كتاب يبرز الأبعاد الروحية والمعنوية لشهر رمضان المبارك، حيث يقدم مجموعة من الدروس...'
  },
  {
    id: 'kg-32533', t: 'أنت أيضا صحابية', a: 'أدهم شرقاوي',
    c: 'religion', p: 229, r: 4.3, v: 393, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-أنت-أيضا-صحابية-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32533',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d9%86%d8%aa-%d8%a3%d9%8a%d8%b6%d8%a7-%d8%b5%d8%ad%d8%a7%d8%a8%d9%8a%d8%a9-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a/', d: 'يقدم كتاب أنت أيضا صحابية لأدهم شرقاوي مجموعة من القصص التي تسلط الضوء على حياة صحابيات بارزات، مع...'
  },
  {
    id: 'kg-32515', t: 'وبالحق أنزلناه', a: 'أدهم شرقاوي',
    c: 'religion', p: 414, r: 4.5, v: 375, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-وبالحق-أنزلناه-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32515',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%88%d8%a8%d8%a7%d9%84%d8%ad%d9%82-%d8%a3%d9%86%d8%b2%d9%84%d9%86%d8%a7%d9%87-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a/', d: 'يركز كتاب وبالحق أنزلناه للمؤلف أدهم شرقاوي على تفسير معاني القرآن الكريم بأسلوب يجمع بين البساطة...'
  },
  {
    id: 'kg-28289', t: 'الحيوان 7', a: 'عمرو بن بحر الجاحظ',
    c: 'sciences', p: 516, r: 4.9, v: 469, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الحيوان-7-PDF-عمرو-بن-بحر-الجاحظ.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28289',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86-7-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a8%d8%ad%d8%b1-%d8%a7%d9%84%d8%ac%d8%a7%d8%ad%d8%b8/', d: 'كتاب الحيوان هو أحد مؤلفات عمرو بن بحر الجاحظ ويعتبر من آخر أعماله وهو أول كتاب شامل في اللغة العربية...'
  },
  {
    id: 'kg-32512', t: 'رسائل من النبي', a: 'أدهم شرقاوي',
    c: 'religion', p: 314, r: 4.2, v: 372, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-رسائل-من-النبي-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32512',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b1%d8%b3%d8%a7%d8%a6%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d9%86%d8%a8%d9%8a-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يتناول كتاب رسائل من النبي لأدهم شرقاوي مجموعة من الرسائل التي تتجاوز ثلاثمئة صفحة، حيث يقدم المؤلف...'
  },
  {
    id: 'kg-32509', t: 'رسائل من القرآن', a: 'أدهم شرقاوي',
    c: 'religion', p: 271, r: 4.9, v: 369, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-رسائل-من-القرآن-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32509',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b1%d8%b3%d8%a7%d8%a6%d9%84-%d9%85%d9%86-%d8%a7%d9%84%d9%82%d8%b1%d8%a2%d9%86-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a/', d: 'يركز كتاب رسائل من القرآن لأدهم شرقاوي على تقديم رسائل مستوحاة من آيات القرآن الكريم، حيث يعرض...'
  },
  {
    id: 'kg-30787', t: 'المستطرف في كل فن مستظرف', a: 'شهاب الدين محمد الأبشيهي',
    c: 'religion', p: 768, r: 4.7, v: 87, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-المستطرف-في-كل-فن-مستظرف-PDF-شهاب-الدين-محمد-الأبشيهي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30787',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d8%b7%d8%b1%d9%81-%d9%81%d9%8a-%d9%83%d9%84-%d9%81%d9%86-%d9%85%d8%b3%d8%aa%d8%b8%d8%b1%d9%81-pdf-%d8%b4%d9%87/', d: 'كتاب &quot;المستطرف في كل فن مستظرف&quot; للمؤلف شهاب الدين محمد الأبشيهي هو عمل أدبي متمي...'
  },
  {
    id: 'kg-30747', t: 'يوسفيات', a: 'علي بن جابر الفيفي',
    c: 'religion', p: 148, r: 4.7, v: 47, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-يوسفيات-PDF-علي-بن-جابر-الفيفي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30747',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%8a%d9%88%d8%b3%d9%81%d9%8a%d8%a7%d8%aa-pdf-%d8%b9%d9%84%d9%8a-%d8%a8%d9%86-%d8%ac%d8%a7%d8%a8%d8%b1-%d8%a7%d9%84%d9%81%d9%8a%d9%81%d9%8a/', d: 'يتناول المؤلف في مقدمته شغفه بسورة يوسف، تلك السورة التي كانت تحاكي ذكرياته في ليالي الطفولة، حيث كان ي...'
  },
  {
    id: 'kg-28444', t: 'حكايات فرحان مع القرآن', a: 'عبد الله محمد عبد المعطي',
    c: 'religion', p: 330, r: 4.4, v: 144, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-حكايات-فرحان-مع-القرآن-PDF-عبد-الله-محمد-عبد-المعطي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28444',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d9%83%d8%a7%d9%8a%d8%a7%d8%aa-%d9%81%d8%b1%d8%ad%d8%a7%d9%86-%d9%85%d8%b9-%d8%a7%d9%84%d9%82%d8%b1%d8%a2%d9%86-pdf-%d8%b9%d8%a8%d8%af/', d: 'عندمَا تجلسُ معَ أبنائكَ وتَحْكِي لهم حِكَايَاتِ فَرْحَان مع القرآن (جزء قد سمع)،...'
  },
  {
    id: 'kg-28441', t: 'مفاهيم يجب ان تصحح', a: 'محمد قطب',
    c: 'religion', p: 388, r: 4.1, v: 141, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-مفاهيم-يجب-ان-تصحح-PDF-محمد-قطب.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28441',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%81%d8%a7%d9%87%d9%8a%d9%85-%d9%8a%d8%ac%d8%a8-%d8%a7%d9%86-%d8%aa%d8%b5%d8%ad%d8%ad-pdf-%d9%85%d8%ad%d9%85%d8%af-%d9%82%d8%b7%d8%a8/', d: 'يدعو الشيخ أسامة بن لادن في آخر تسجيل له قبل استشهاده إلى أهمية السعي لحفظ الأمة وثوراتها من الضلال...'
  },
  {
    id: 'kg-28426', t: 'قبسات من الرسول', a: 'محمد قطب',
    c: 'religion', p: 201, r: 4.6, v: 126, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-قبسات-من-الرسول-PDF-محمد-قطب.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28426',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%82%d8%a8%d8%b3%d8%a7%d8%aa-%d9%85%d9%86-%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%84-pdf-%d9%85%d8%ad%d9%85%d8%af-%d9%82%d8%b7%d8%a8/', d: 'هو كتاب للكاتب محمد قطب يقدم فيه مجموعة من الأحاديث النبوية الشريفة مع تفسير علمي يسعى من...'
  },
  {
    id: 'kg-32075', t: 'الغربة', a: 'عبدالله عبدالمنعم',
    c: 'poesie', p: 112, r: 4.5, v: 415, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/07/تحميل-كتاب-الغربة-PDF-عبدالله-عبدالمنعم.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32075',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ba%d8%b1%d8%a8%d8%a9-pdf-%d8%b9%d8%a8%d8%af%d8%a7%d9%84%d9%84%d9%87-%d8%b9%d8%a8%d8%af%d8%a7%d9%84%d9%85%d9%86%d8%b9%d9%85/', d: 'كتاب الغربة للمؤلف عبدالله عبدالمنعم يعرض تجربة الشباب في مواجهة تحديات الحياة اليومية وسط الزحام، حيث يع...'
  },
  {
    id: 'kg-31796', t: 'رسائل كتبت لها', a: 'محمد زكي الشيمي',
    c: 'poesie', p: 124, r: 4.6, v: 136, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-رسائل-كتبت-لها-PDF-محمد-زكي-الشيمي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31796',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b1%d8%b3%d8%a7%d8%a6%d9%84-%d9%83%d8%aa%d8%a8%d8%aa-%d9%84%d9%87%d8%a7-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%b2%d9%83%d9%8a-%d8%a7%d9%84%d8%b4/', d: 'سمه شعرا، سمه نثرا، سمه عبثا،ما يهمني هو أن أُضيفَ بضعَ جُملٍ يقطر العشق من حروفها إلى أبجدية الحب...'
  },
  {
    id: 'kg-26546', t: 'لو اننا لم نفترق', a: 'فاروق جويدة',
    c: 'poesie', p: 80, r: 4.6, v: 166, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-لو-اننا-لم-نفترق-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26546',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d9%88-%d8%a7%d9%86%d9%86%d8%a7-%d9%84%d9%85-%d9%86%d9%81%d8%aa%d8%b1%d9%82-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af/', d: 'تدور أحداث رواية لو أننا لم نفترق للكاتب فاروق جويدة حول موضوع الفراق وتأثيره على الحياة والمشاعر...'
  },
  {
    id: 'kg-26543', t: 'في عينيك عنواني', a: 'فاروق جويدة',
    c: 'poesie', p: 254, r: 4.3, v: 163, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-في-عينيك-عنواني-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26543',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%81%d9%8a-%d8%b9%d9%8a%d9%86%d9%8a%d9%83-%d8%b9%d9%86%d9%88%d8%a7%d9%86%d9%8a-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af/', d: '&quot;في عينيك عنواني&quot; هو عمل شعري للفنان الكبير فاروق جويدة يتناول قضايا الهوية والوجود في زمن الجنون والف...'
  },
  {
    id: 'kg-26537', t: 'شيء سيبقى بيننا', a: 'فاروق جويدة',
    c: 'poesie', p: 132, r: 4.7, v: 157, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-شيء-سيبقى-بيننا-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26537',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b4%d9%8a%d8%a1-%d8%b3%d9%8a%d8%a8%d9%82%d9%89-%d8%a8%d9%8a%d9%86%d9%86%d8%a7-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af/', d: 'في رواية شيء سيبقى بيننا للكاتب فاروق جويدة، يتناول الكاتب موضوع الفراق والشوق بأسلوب شعري مؤثر. تستعر...'
  },
  {
    id: 'kg-26534', t: 'آخر ليالي الحلم', a: 'فاروق جويدة',
    c: 'poesie', p: 132, r: 4.4, v: 154, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-آخر-ليالي-الحلم-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26534',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a2%d8%ae%d8%b1-%d9%84%d9%8a%d8%a7%d9%84%d9%8a-%d8%a7%d9%84%d8%ad%d9%84%d9%85-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af/', d: 'هو عمل أدبي مميز للكاتب فاروق جويدة يتناول فيه موضوعات العاطفة والحياة والتغيرات التي...'
  },
  {
    id: 'kg-26531', t: 'ألف وجه للقمر', a: 'فاروق جويدة',
    c: 'poesie', p: 137, r: 4.1, v: 151, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-ألف-وجه-للقمر-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26531',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d9%84%d9%81-%d9%88%d8%ac%d9%87-%d9%84%d9%84%d9%82%d9%85%d8%b1-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af%d8%a9/', d: 'هو ديوان شعري للشاعر المصري فاروق جويدة يتميز بجمال اللغة وعمق المعاني حيث يعبر عن مشاعر ا...'
  },
  {
    id: 'kg-26528', t: 'دائمًا أنت بقلبي', a: 'فاروق جويدة',
    c: 'poesie', p: 146, r: 4.8, v: 148, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-دائمًا-أنت-بقلبي-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26528',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%af%d8%a7%d8%a6%d9%85%d9%8b%d8%a7-%d8%a3%d9%86%d8%aa-%d8%a8%d9%82%d9%84%d8%a8%d9%8a-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a/', d: 'ديوان دائمًا أنت بقلبي للشاعر فاروق جويدة هو عمل أدبي يمزج بين المشاعر العميقة والتعبير الفني الفريد...'
  },
  {
    id: 'kg-26525', t: 'زمان القهر علمني', a: 'فاروق جويدة',
    c: 'poesie', p: 129, r: 4.5, v: 145, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-زمان-القهر-علمني-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26525',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b2%d9%85%d8%a7%d9%86-%d8%a7%d9%84%d9%82%d9%87%d8%b1-%d8%b9%d9%84%d9%85%d9%86%d9%8a-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a/', d: 'في رواية زمان القهر للكاتب فاروق جويدة، يتناول الكاتب موضوع الطبقات الاجتماعية ويستعرض كيف خلق الله ا...'
  },
  {
    id: 'kg-26522', t: 'لأني أحبك', a: 'فاروق جويدة',
    c: 'poesie', p: 144, r: 4.2, v: 142, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-لأني-أحبك-PDF-فاروق-جويدة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26522',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d8%a3%d9%86%d9%8a-%d8%a3%d8%ad%d8%a8%d9%83-pdf-%d9%81%d8%a7%d8%b1%d9%88%d9%82-%d8%ac%d9%88%d9%8a%d8%af%d8%a9/', d: 'في ديوان &quot;لأني أحبك&quot; للشاعر فاروق جويدة، يتجلى الشعر كحالة من الحنين العميق الذي يسيطر على مشاعر الكاتب. يتن...'
  },
  {
    id: 'kg-32632', t: 'ضريح عمرو بن الجن', a: 'حسن الجندي',
    c: 'nouvelles', p: 197, r: 4.2, v: 492, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-ضريح-عمرو-بن-الجن-PDF-حسن-الجندي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32632',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%b6%d8%b1%d9%8a%d8%ad-%d8%b9%d9%85%d8%b1%d9%88-%d8%a8%d9%86-%d8%a7%d9%84%d8%ac%d9%86-pdf-%d8%ad%d8%b3%d9%86-%d8%a7%d9%84%d8%ac%d9%86%d8%af%d9%8a-%d8%aa%d8%ad%d9%85/', d: 'يروي حسن الجندي في كتابه ضريح عمرو بن الجن قصة تلقيه طردا يحتوي على مراسلات قديمة وصلت إلى عائلته...'
  },
  {
    id: 'kg-32623', t: 'لقاء مع كاتب رعب', a: 'حسن الجندي',
    c: 'nouvelles', p: 121, r: 4.3, v: 483, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-لقاء-مع-كاتب-رعب-PDF-حسن-الجندي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32623',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d9%82%d8%a7%d8%a1-%d9%85%d8%b9-%d9%83%d8%a7%d8%aa%d8%a8-%d8%b1%d8%b9%d8%a8-pdf-%d8%ad%d8%b3%d9%86-%d8%a7%d9%84%d8%ac%d9%86%d8%af%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a/', d: 'يتناول كتاب لقاء مع كاتب رعب للمؤلف حسن الجندي موضوع تحضير الجن واستخدامه بطرق متعددة حيث يوضح أن...'
  },
  {
    id: 'kg-31319', t: 'السبعة الكبار', a: 'سعد جبر',
    c: 'religion', p: 23, r: 4.9, v: 139, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-السبعة-الكبار-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31319',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d8%a8%d8%b9%d8%a9-%d8%a7%d9%84%d9%83%d8%a8%d8%a7%d8%b1-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8%d8%b1/', d: 'يستعرض كتاب &quot;السبعة الكبار&quot; للدكتور سعد جبر سيرة سبعة من أبرز صحابة النبي محمد ﷺ الذين كان لهم دور بارز في ن...'
  },
  {
    id: 'kg-31271', t: 'لطائف وفرائد قرآنية', a: 'سعد جبر',
    c: 'religion', p: 214, r: 4.1, v: 91, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-لطائف-وفرائد-قرآنية-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31271',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d8%b7%d8%a7%d8%a6%d9%81-%d9%88%d9%81%d8%b1%d8%a7%d8%a6%d8%af-%d9%82%d8%b1%d8%a2%d9%86%d9%8a%d8%a9-pdf-%d8%b3%d8%b9%d8%af-%d8%ac%d8%a8/', d: 'يقدم كتاب &quot;لطائف وفرائد قرآنية&quot; للدكتور سعد جبر قراءة مميزة في عالم القرآن الكريم، حيث يسعى المؤلف إلى...'
  },
  {
    id: 'kg-32495', t: 'بيت سيء السمعة', a: 'نجيب محفوظ',
    c: 'nouvelles', p: 210, r: 4.5, v: 355, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-بيت-سيء-السمعة-PDF-نجيب-محفوظ-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32495',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a8%d9%8a%d8%aa-%d8%b3%d9%8a%d8%a1-%d8%a7%d9%84%d8%b3%d9%85%d8%b9%d8%a9-pdf-%d9%86%d8%ac%d9%8a%d8%a8-%d9%85%d8%ad%d9%81%d9%88%d8%b8-%d8%aa%d8%ad%d9%85%d9%8a%d9%84/', d: 'يقدم نجيب محفوظ في كتابه &quot;بيت سيء السمعة&quot; مجموعة من القصص القصيرة التي تعكس واقع حياة الناس من خلال...'
  },
  {
    id: 'kg-31490', t: 'دهاليز (فضفضة غريبة)', a: 'محمد الناصر',
    c: 'nouvelles', p: 94, r: 4.0, v: 310, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-دهاليز-فضفضة-غريبة-PDF-محمد-الناصر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31490',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%af%d9%87%d8%a7%d9%84%d9%8a%d8%b2-%d9%81%d8%b6%d9%81%d8%b6%d8%a9-%d8%ba%d8%b1%d9%8a%d8%a8%d8%a9-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%a7%d9%84/', d: 'في كتابه &#039;دهاليز&#039;، يقدم محمد الناصر مجموعة من القصص التي تثير تساؤلات عميقة حول الواقع وتقترب من...'
  },
  {
    id: 'kg-31481', t: 'قشعريرة', a: 'محمد الناصر',
    c: 'nouvelles', p: 83, r: 4.1, v: 301, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-قشعريرة-PDF-محمد-الناصر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31481',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%82%d8%b4%d8%b9%d8%b1%d9%8a%d8%b1%d8%a9-pdf-%d9%85%d8%ad%d9%85%d8%af-%d8%a7%d9%84%d9%86%d8%a7%d8%b5%d8%b1/', d: 'يأخذنا كتاب &quot;قشعريرة&quot; للمؤلف محمد الناصر في جولة فريدة عبر عوالم غامضة تتوارى خلف أبواب البيوت، حيث يتجمع عدد...'
  },
  {
    id: 'kg-32506', t: 'والذين معه', a: 'أدهم شرقاوي',
    c: 'religion', p: 350, r: 4.6, v: 366, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-والذين-معه-PDF-أدهم-شرقاوي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32506',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d9%88%d8%a7%d9%84%d8%b0%d9%8a%d9%86-%d9%85%d8%b9%d9%87-pdf-%d8%a3%d8%af%d9%87%d9%85-%d8%b4%d8%b1%d9%82%d8%a7%d9%88%d9%8a-%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%85%d8%ac%d8%a7/', d: 'يركز كتاب والذين معه لأدهم شرقاوي على تسليط الضوء على مواقف وقصص مختارة من حياة مجموعة من الصحابة من...'
  },
  {
    id: 'kg-30941', t: 'عالم الشياطين', a: 'شيرين هنائي',
    c: 'nouvelles', p: 230, r: 4.1, v: 241, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-عالم-الشياطين-PDF-شيرين-هنائي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30941',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d8%a7%d9%84%d9%85-%d8%a7%d9%84%d8%b4%d9%8a%d8%a7%d8%b7%d9%8a%d9%86-pdf-%d8%b4%d9%8a%d8%b1%d9%8a%d9%86-%d9%87%d9%86%d8%a7%d8%a6%d9%8a/', d: 'يقدم كتاب &quot;عالم الشياطين&quot; للكاتبة شيرين هنائي استكشافًا فريدًا لعالم الشياطين، حيث يعد هذا الكتاب الأول...'
  },
  {
    id: 'kg-31352', t: 'مشكلات وحلول من حياة الرسول صلى الله عليه وسلم', a: 'سعد جبر',
    c: 'religion', p: 58, r: 4.2, v: 172, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-مشكلات-وحلول-من-حياة-الرسول-صلى-الله-عليه-وسلم-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31352',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%b4%d9%83%d9%84%d8%a7%d8%aa-%d9%88%d8%ad%d9%84%d9%88%d9%84-%d9%85%d9%86-%d8%ad%d9%8a%d8%a7%d8%a9-%d8%a7%d9%84%d8%b1%d8%b3%d9%88%d9%84/', d: 'كتاب مشكلات وحلول من حياة الرسول صلى الله عليه وسلم PDF - سعد جبر - في كتاب &quot;مشكلات وحلول من حياة الرسول صلى الله عليه وسلم&quot;، يقدم الدكتور سعد جبر...'
  },
  {
    id: 'kg-31949', t: 'دراجة عيد', a: 'شعيب احمد',
    c: 'pour-enfants', p: 2, r: 4.9, v: 289, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/كتاب-دراجة-عيد-PDF-–-شعيب-احمد.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31949',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%af%d8%b1%d8%a7%d8%ac%d8%a9-%d8%b9%d9%8a%d8%af-pdf-%d8%b4%d8%b9%d9%8a%d8%a8-%d8%a7%d8%ad%d9%85%d8%af/', d: 'كتاب دراجة عيد من تأليف شعيب احمد يروي قصة الطفل عيد الذي يحب المشي على قدميه إلى المدرسة كما يحب الحيوانات وي...'
  },
  {
    id: 'kg-31343', t: 'مختصر كتاب الأدب النبوي', a: 'سعد جبر',
    c: 'religion', p: 133, r: 4.3, v: 163, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-مختصر-كتاب-الأدب-النبوي-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31343',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d8%ae%d8%aa%d8%b5%d8%b1-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d8%af%d8%a8-%d8%a7%d9%84%d9%86%d8%a8%d9%88%d9%8a-pdf-%d8%b3%d8%b9/', d: 'يقدم كتاب مختصر كتاب الأدب النبوي للكاتب سعد جبر خلاصة شاملة ومركزة لكتاب الدكتور فيصل البعداني...'
  },
  {
    id: 'kg-27513', t: 'البرتقالة في الزجاجة', a: 'مصطفى عطية جمعة',
    c: 'pour-enfants', p: 89, r: 4.3, v: 173, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-البرتقالة-في-الزجاجة-PDF-مصطفى-عطية-جمعة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=27513',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a8%d8%b1%d8%aa%d9%82%d8%a7%d9%84%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d8%b2%d8%ac%d8%a7%d8%ac%d8%a9-pdf-%d9%85%d8%b5%d8%b7%d9%81/', d: 'تدور أحداث رواية البرتقالة في الزجاجة للكاتب مصطفى عطية جمعة حول شخصية الشيخ أيوب الذي يجلس ب...'
  },
  {
    id: 'kg-27435', t: 'صندوق الألعاب', a: 'مصطفى عطية جمعة',
    c: 'pour-enfants', p: 49, r: 4.5, v: 95, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-صندوق-الألعاب-PDF-مصطفى-عطية-جمعة.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=27435',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b5%d9%86%d8%af%d9%88%d9%82-%d8%a7%d9%84%d8%a3%d9%84%d8%b9%d8%a7%d8%a8-pdf-%d9%85%d8%b5%d8%b7%d9%81%d9%89-%d8%b9%d8%b7%d9%8a%d8%a9-%d8%ac/', d: 'تدور أحداث رواية صندوق الألعاب للكاتب مصطفى عطية جمعة حول الطفلة خلود التي اعتادت على وضع ألعابها...'
  },
  {
    id: 'kg-26736', t: 'جحا والسلطان', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 19, r: 4.6, v: 356, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-جحا-والسلطان-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26736',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ac%d8%ad%d8%a7-%d9%88%d8%a7%d9%84%d8%b3%d9%84%d8%b7%d8%a7%d9%86-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87%d8%ac%d8%aa/', d: 'تدور أحداث كتاب جحا والسلطان حول شخصية جحا الشهيرة التي تمثل الحكمة والفكاهة في التراث العربي، حيث يتناول...'
  },
  {
    id: 'kg-32605', t: 'اعذريني ومخاوف أخرى', a: 'حسن الجندي',
    c: 'nouvelles', p: 234, r: 4.5, v: 465, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-اعذريني-ومخاوف-أخرى-PDF-حسن-الجندي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32605',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d8%b9%d8%b0%d8%b1%d9%8a%d9%86%d9%8a-%d9%88%d9%85%d8%ae%d8%a7%d9%88%d9%81-%d8%a3%d8%ae%d8%b1%d9%89-pdf-%d8%ad%d8%b3%d9%86-%d8%a7%d9%84%d8%ac%d9%86%d8%af%d9%8a-%d8%aa/', d: 'يضم كتاب اعذريني ومخاوف أخرى للكاتب حسن الجندي مجموعة من سبعة عشر قصة قصيرة تنتمي إلى أدب الرعب...'
  },
  {
    id: 'kg-26669', t: 'أصحاب الجنة', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 13, r: 4.9, v: 289, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-أصحاب-الجنة-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26669',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b5%d8%ad%d8%a7%d8%a8-%d8%a7%d9%84%d8%ac%d9%86%d8%a9-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87%d8%ac%d8%aa/', d: 'في كتاب &quot;أصحاب الجنة&quot; للكاتب الكبير أحمد بهجت، يقدم لنا مجموعة من القصص القرآنية الموجهة للأطفال بأسلوب مبسط...'
  },
  {
    id: 'kg-26665', t: 'السامري والعجل', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 13, r: 4.5, v: 285, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-السامري-والعجل-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26665',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d8%a7%d9%85%d8%b1%d9%8a-%d9%88%d8%a7%d9%84%d8%b9%d8%ac%d9%84-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87%d8%ac%d8%aa/', d: 'في عمله الأدبي الجديد يقدم الكاتب الكبير أحمد بهجت مجموعة من القصص القرآنية الموجهة للأطفال، حيث يسعى من...'
  },
  {
    id: 'kg-26662', t: 'الملك طالوت والنهر', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 13, r: 4.2, v: 282, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-الملك-طالوت-والنهر-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26662',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d9%84%d9%83-%d8%b7%d8%a7%d9%84%d9%88%d8%aa-%d9%88%d8%a7%d9%84%d9%86%d9%87%d8%b1-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87/', d: 'هو عمل مميز للكاتب أحمد بهجت الذي يتمتع بأسلوب فريد يجمع بين العمق والبساطة في آن...'
  },
  {
    id: 'kg-26659', t: 'سيل العرم', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 13, r: 4.9, v: 279, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-سيل-العرم-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26659',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d9%84-%d8%a7%d9%84%d8%b9%d8%b1%d9%85-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87%d8%ac%d8%aa/', d: 'يقدم الكاتب الكبير أحمد بهجت مجموعة مميزة من القصص القرآنية الموجهة للأطفال تحت عنوان سيل العرم، حيث يعود من خ...'
  },
  {
    id: 'kg-31562', t: 'لعنة كوم الدكه', a: 'ابرام فضل',
    c: 'science-fiction', p: 120, r: 4.2, v: 382, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/04/تحميل-كتاب-لعنة-كوم-الدكه-PDF-ابرام-فضل.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31562',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%84%d8%b9%d9%86%d8%a9-%d9%83%d9%88%d9%85-%d8%a7%d9%84%d8%af%d9%83%d9%87-pdf-%d8%a7%d8%a8%d8%b1%d8%a7%d9%85-%d9%81%d8%b6%d9%84/', d: 'ما الذي يحدث حين تتصادم أقدامنا بالتراب الخطأ؟ حين لا نعرف أن خطواتنا قد تجرنا ليس فقط إلى أعماق الأرض...'
  },
  {
    id: 'kg-10290', t: 'الطاعون القرمزي', a: 'جاك لندن',
    c: 'science-fiction', p: 82, r: 4.0, v: 230, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/01/تحميل-كتاب-الطاعون-القرمزي-PDF-جاك-لندن.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=10290',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b7%d8%a7%d8%b9%d9%88%d9%86-%d8%a7%d9%84%d9%82%d8%b1%d9%85%d8%b2%d9%8a-pdf-%d8%ac%d8%a7%d9%83-%d9%84%d9%86%d8%af%d9%86/', d: 'بعد أن وصلت الحضارة إلى ذروتها، اجتاحت العالم موجة من الطاعون القرمزي الذي حول البشر إلى ضحايا بوجوه مشبع...'
  },
  {
    id: 'kg-1209', t: 'طعام الآلهة وكيف جاء إلى الأرض', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 234, r: 4.9, v: 269, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-طعام-الآلهة-وكيف-جاء-إلى-الأرض-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1209',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b7%d8%b9%d8%a7%d9%85-%d8%a7%d9%84%d8%a2%d9%84%d9%87%d8%a9-%d9%88%d9%83%d9%8a%d9%81-%d8%ac%d8%a7%d8%a1-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%a3/', d: 'تتناول هذه القصة المشوقة موضوعًا مثيرًا يتعلق بعبث العلم بالطبيعة وما يمكن أن ينجم...'
  },
  {
    id: 'kg-28770', t: 'أسماك البر المتوحش', a: 'واسيني الأعرج',
    c: 'nouvelles', p: 128, r: 4.0, v: 470, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-أسماك-البر-المتوحش-PDF-واسيني-الأعرج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=28770',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b3%d9%85%d8%a7%d9%83-%d8%a7%d9%84%d8%a8%d8%b1-%d8%a7%d9%84%d9%85%d8%aa%d9%88%d8%ad%d8%b4-pdf-%d9%88%d8%a7%d8%b3%d9%8a%d9%86%d9%8a/', d: 'في مجموعته القصصية &quot;أسماك البر المتوحش&quot;، يقدم الروائي واسيني الأعرج عملاً أدبياً يسلط الضوء على...'
  },
  {
    id: 'kg-1202', t: 'سيد المولدات الكهربائية', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 18, r: 4.2, v: 262, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-سيد-المولدات-الكهربائية-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1202',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d8%af-%d8%a7%d9%84%d9%85%d9%88%d9%84%d8%af%d8%a7%d8%aa-%d8%a7%d9%84%d9%83%d9%87%d8%b1%d8%a8%d8%a7%d8%a6%d9%8a%d8%a9-pdf-%d9%87/', d: 'في قلب لندن، يعيش قروي هارب من عبودية المستعمرات، يرتدي ثياباً بيضاء مهلهلة، ويجد نفسه في...'
  },
  {
    id: 'kg-1205', t: 'قصة الأيام القادمة', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 88, r: 4.5, v: 265, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-قصة-الأيام-القادمة-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1205',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%82%d8%b5%d8%a9-%d8%a7%d9%84%d8%a3%d9%8a%d8%a7%d9%85-%d8%a7%d9%84%d9%82%d8%a7%d8%af%d9%85%d8%a9-pdf-%d9%87%d8%b1%d8%a8%d8%b1%d8%aa-%d8%ac/', d: 'تدور أحداث القصة حول قصة حب تجمع بين فتاة في الثامنة عشرة من عمرها وشاب يكبرها قليلاً، حيث يسعى...'
  },
  {
    id: 'kg-31808', t: 'الطفل رائد', a: 'شعيب احمد',
    c: 'pour-enfants', p: 2, r: 4.8, v: 148, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/05/تحميل-كتاب-الطفل-رائد-PDF-شعيب-احمد.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31808',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b7%d9%81%d9%84-%d8%b1%d8%a7%d8%a6%d8%af-pdf-%d8%b4%d8%b9%d9%8a%d8%a8-%d8%a7%d8%ad%d9%85%d8%af/', d: 'يروي كتاب الطفل رائد للمؤلف شعيب احمد قصة طفل يبلغ من العمر أحد عشر عاماً يدرس في الصف السادس ويحب الرسم والم...'
  },
  {
    id: 'kg-1193', t: 'القلنسوة الأرجوانية', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 20, r: 4.3, v: 253, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-القلنسوة-الأرجوانية-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1193',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%84%d9%86%d8%b3%d9%88%d8%a9-%d8%a7%d9%84%d8%a3%d8%b1%d8%ac%d9%88%d8%a7%d9%86%d9%8a%d8%a9-pdf-%d9%87%d8%b1%d8%a8%d8%b1/', d: 'يحيأ في عالمه الخاص المتمثل في بيته ومتجره، لكن هناك ما يجبره على الخروج من هذا العالم المحدود...'
  },
  {
    id: 'kg-26675', t: 'أصحاب الأخدود', a: 'أحمد بهجت',
    c: 'pour-enfants', p: 13, r: 4.5, v: 295, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/02/تحميل-كتاب-أصحاب-الأخدود-PDF-أحمد-بهجت.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=26675',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a3%d8%b5%d8%ad%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d8%ae%d8%af%d9%88%d8%af-pdf-%d8%a3%d8%ad%d9%85%d8%af-%d8%a8%d9%87%d8%ac%d8%aa/', d: 'في هذا الكتاب يقدم الكاتب الكبير أحمد بهجت مجموعة من القصص القرآنية المبسطة والموجهة للأطفال، حيث يسعى إلى...'
  },
  {
    id: 'kg-1184', t: 'بلد العميان', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 32, r: 4.4, v: 244, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-بلد-العميان-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1184',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a8%d9%84%d8%af-%d8%a7%d9%84%d8%b9%d9%85%d9%8a%d8%a7%d9%86-pdf-%d9%87%d8%b1%d8%a8%d8%b1%d8%aa-%d8%ac%d9%88%d8%b1%d8%ac-%d9%88%d9%8a%d9%84/', d: 'في وادٍ معزول بين الجبال، يجتاح مرض غريب سكانه، حيث يفقد الناس أبصارهم تدريجياً، ويتوارث هذا المرض عبر...'
  },
  {
    id: 'kg-32617', t: 'حكايات فرغلي المستكاوي', a: 'حسن الجندي',
    c: 'nouvelles', p: 128, r: 4.7, v: 477, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/كتاب-حكايات-فرغلي-المستكاوي-PDF-حسن-الجندي-تحميل-مجاني.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32617',
    pg: 'https://www.kutubgate.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%ad%d9%83%d8%a7%d9%8a%d8%a7%d8%aa-%d9%81%d8%b1%d8%ba%d9%84%d9%8a-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d9%83%d8%a7%d9%88%d9%8a-pdf-%d8%ad%d8%b3%d9%86-%d8%a7%d9%84%d8%ac%d9%86/', d: 'يروي كتاب حكايات فرغلي المستكاوي للمؤلف حسن الجندي تجربة شخصية مع صديق يدعى عبعزيز، حيث يصف...'
  },
  {
    id: 'kg-30266', t: 'سيادة المال والعدالة الجبائية', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 26, r: 4.6, v: 46, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-سيادة-المال-والعدالة-الجبائية-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30266',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d9%85%d8%a7%d9%84-%d9%88%d8%a7%d9%84%d8%b9%d8%af%d8%a7%d9%84%d8%a9-%d8%a7%d9%84%d8%ac%d8%a8%d8%a7/', d: 'يقدم كتاب &quot;سيادة المال والعدالة الجبائية&quot; للدكتور محمد كمال الرخاوي تحليلًا نقديًا...'
  },
  {
    id: 'kg-30263', t: 'سيادة القانون ونسيج المجتمع', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 28, r: 4.3, v: 43, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-سيادة-القانون-ونسيج-المجتمع-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30263',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d8%a7%d8%af%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%88%d9%86%d8%b3%d9%8a%d8%ac-%d8%a7%d9%84%d9%85%d8%ac%d8%aa%d9%85/', d: 'كتاب &quot;سيادة القانون ونسيج المجتمع&quot; للدكتور محمد كمال الرخاوي يعد دراسة سوسيولوجية...'
  },
  {
    id: 'kg-30260', t: 'فلسفة الضريبة والعدالة الجبائية', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 27, r: 4.0, v: 40, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-فلسفة-الضريبة-والعدالة-الجبائية-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30260',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%81%d9%84%d8%b3%d9%81%d8%a9-%d8%a7%d9%84%d8%b6%d8%b1%d9%8a%d8%a8%d8%a9-%d9%88%d8%a7%d9%84%d8%b9%d8%af%d8%a7%d9%84%d8%a9-%d8%a7%d9%84%d8%ac/', d: 'يقدم كتاب &quot;فلسفة الضريبة والعدالة الجبائية&quot; للدكتور محمد كمال الرخاوي دراسة تحلي...'
  },
  {
    id: 'kg-30635', t: 'طقوس', a: 'عمرو المنوفي',
    c: 'nouvelles', p: 30, r: 4.5, v: 415, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-طقوس-PDF-عمرو-المنوفي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30635',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b7%d9%82%d9%88%d8%b3-pdf-%d8%b9%d9%85%d8%b1%d9%88-%d8%a7%d9%84%d9%85%d9%86%d9%88%d9%81%d9%8a/', d: 'في رواية &quot;طقوس&quot; للكاتب عمرو المنوفي، يتم استعراض أحداث جريمة قتل تتسم بالغرابة والشناعة، حيث تكون ضحيتها سيدة...'
  },
  {
    id: 'kg-1199', t: 'فيلمَر', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 26, r: 4.9, v: 259, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-فيلمَر-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1199',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%81%d9%8a%d9%84%d9%85%d9%8e%d8%b1-pdf-%d9%87%d8%b1%d8%a8%d8%b1%d8%aa-%d8%ac%d9%88%d8%b1%d8%ac-%d9%88%d9%8a%d9%84%d8%b2/', d: 'لطالما كان الطيران حلمًا يراود البشرية منذ زمن بعيد، ورغم محاولات العديد من العلماء والمخترعين لفهم هذا الح...'
  },
  {
    id: 'kg-30254', t: 'فلسفة العقد في ظل الرقمنة', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 25, r: 4.4, v: 34, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-فلسفة-العقد-في-ظل-الرقمنة-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30254',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%81%d9%84%d8%b3%d9%81%d8%a9-%d8%a7%d9%84%d8%b9%d9%82%d8%af-%d9%81%d9%8a-%d8%b8%d9%84-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%86%d8%a9-pdf-%d9%85/', d: 'يتناول كتاب &quot;فلسفة العقد في ظل الرقمنة&quot; للدكتور محمد كمال الرخاوي موضوعًا حيويًا يجمع...'
  },
  {
    id: 'kg-30251', t: 'جذور المسؤولية المدنية وفلسفة التعويض', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 30, r: 4.1, v: 31, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-جذور-المسؤولية-المدنية-وفلسفة-التعويض-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30251',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ac%d8%b0%d9%88%d8%b1-%d8%a7%d9%84%d9%85%d8%b3%d8%a4%d9%88%d9%84%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%af%d9%86%d9%8a%d8%a9-%d9%88%d9%81%d9%84/', d: 'كتاب جذور المسؤولية المدنية وفلسفة التعويض PDF - محمد كمال الرخاوي - تتناول دراسة &quot;جذور المسؤولية المدنية وفلسفة التعويض&quot; للمؤلف دكتور محمد كمال...'
  },
  {
    id: 'kg-30248', t: 'سيكولوجية الجريمة وجنون المال', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 31, r: 4.8, v: 28, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-سيكولوجية-الجريمة-وجنون-المال-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30248',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b3%d9%8a%d9%83%d9%88%d9%84%d9%88%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-%d9%88%d8%ac%d9%86%d9%88%d9%86-%d8%a7%d9%84/', d: 'يقدم دكتور محمد كمال الرخاوي في كتابه &quot;سيكولوجية الجريمة وجنون المال&quot; دراسة...'
  },
  {
    id: 'kg-30245', t: 'جريمة السرقة في الفقه والقضاء', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 31, r: 4.5, v: 25, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-جريمة-السرقة-في-الفقه-والقضاء-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30245',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-%d8%a7%d9%84%d8%b3%d8%b1%d9%82%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d9%81%d9%82%d9%87-%d9%88%d8%a7%d9%84%d9%82%d8%b6/', d: 'يتناول كتاب &quot;جريمة السرقة في الفقه والقضاء&quot; للدكتور محمد كمال الرخاوي موضوعًا حساس...'
  },
  {
    id: 'kg-30242', t: 'السياسة التشريعية التجارية وحماية الاستثمار', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 22, r: 4.2, v: 22, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-السياسة-التشريعية-التجارية-وحماية-الاستثمار-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30242',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%aa%d8%b4%d8%b1%d9%8a%d8%b9%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a/', d: 'كتاب السياسة التشريعية التجارية وحماية الاستثمار PDF - محمد كمال الرخاوي - يتناول كتاب &quot;السياسة التشريعية التجارية وحماية الاستثمار&quot; للدكتور محمد...'
  },
  {
    id: 'kg-32138', t: 'علم البيانات', a: 'جون دي كيليهر',
    c: 'informatique', p: 198, r: 4.8, v: 478, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-علم-البيانات-PDF-جون-دي-كيليهر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32138',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%b9%d9%84%d9%85-%d8%a7%d9%84%d8%a8%d9%8a%d8%a7%d9%86%d8%a7%d8%aa-pdf-%d8%ac%d9%88%d9%86-%d8%af%d9%8a-%d9%83%d9%8a%d9%84%d9%8a%d9%87%d8%b1/', d: 'كتاب علم البيانات للمؤلف جون دي كيليهر يشرح مجموعة المبادئ والخوارزميات والعمليات التي تهدف إلى استخراج...'
  },
  {
    id: 'kg-32135', t: 'التفكير الحوسبي', a: 'بيتر جيه دنينج',
    c: 'informatique', p: 174, r: 4.5, v: 475, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/09/تحميل-كتاب-التفكير-الحوسبي-PDF-بيتر-جيه-دنينج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=32135',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%aa%d9%81%d9%83%d9%8a%d8%b1-%d8%a7%d9%84%d8%ad%d9%88%d8%b3%d8%a8%d9%8a-pdf-%d8%a8%d9%8a%d8%aa%d8%b1-%d8%ac%d9%8a%d9%87-%d8%af/', d: 'يقدم كتاب التفكير الحوسبي للمؤلف بيتر جيه دنينج نظرةً شاملة على مفهوم التفكير الحوسبي الذي سبق اختر...'
  },
  {
    id: 'kg-30524', t: 'الكود المنظِّم للفضاء الإلكتروني: الإصدار ٢٫٠', a: 'لورنس لسيج',
    c: 'informatique', p: 594, r: 4.4, v: 304, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الكود-المنظِّم-للفضاء-الإلكتروني-الإصدار-٢٫٠-PDF-لورنس-لسيج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30524',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%83%d9%88%d8%af-%d8%a7%d9%84%d9%85%d9%86%d8%b8%d9%90%d9%91%d9%85-%d9%84%d9%84%d9%81%d8%b6%d8%a7%d8%a1-%d8%a7%d9%84%d8%a5%d9%84/', d: 'كتاب الكود المنظِّم للفضاء الإلكتروني: الإصدار ٢٫٠ PDF - لورنس لسيج - يتناول هذا الكتاب فكرة غريبة تتعلق بالفضاء الإلكتروني، حيث يتحدى المفهوم...'
  },
  {
    id: 'kg-30521', t: 'الطوفان الرقمي: كيف يؤثر على حياتنا وحريتنا وسعادتنا', a: '[{\'@type\': \'Person\', \'name\': \'هال أبلسون\'}, {\'@type\': \'Person\', \'name\': \'هاري لويس\'}, {\'@type\': \'Person\', \'name\': \'كين ليدين\'}]',
    c: 'informatique', p: 428, r: 4.1, v: 301, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الطوفان-الرقمي-كيف-يؤثر-على-حياتنا-وحريتنا-وسعادتنا-PDF-هال-أبلسون-وهاري-لويس-وكين-ليدين.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30521',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b7%d9%88%d9%81%d8%a7%d9%86-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a-%d9%83%d9%8a%d9%81-%d9%8a%d8%a4%d8%ab%d8%b1-%d8%b9%d9%84%d9%89/', d: 'كتاب الطوفان الرقمي: كيف يؤثر على حياتنا وحريتنا وسعادتنا PDF - هال أبلسون وهاري لويس وكين ليدين - يتناول الكتاب موضوع التغيرات العميقة التي يشهدها...'
  },
  {
    id: 'kg-30514', t: 'الكون الرقمي: الثورة العالمية في الاتصالات', a: 'بيتر بي سيل',
    c: 'informatique', p: 358, r: 4.4, v: 294, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الكون-الرقمي-الثورة-العالمية-في-الاتصالات-PDF-بيتر-بي-سيل.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30514',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%83%d9%88%d9%86-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a-%d8%a7%d9%84%d8%ab%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85/', d: 'كتاب الكون الرقمي: الثورة العالمية في الاتصالات PDF - بيتر بي سيل - يتناول هذا الكتاب تطور تكنولوجيات الاتصالات والمعلومات الرقمية منذ ابتكار...'
  },
  {
    id: 'kg-30518', t: 'نحو ثقافة إبداعية جديدة: ازدهار التجارة والفنون في الاقتصاد الهجين', a: 'لورنس لسيج',
    c: 'informatique', p: 326, r: 4.8, v: 298, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-نحو-ثقافة-إبداعية-جديدة-ازدهار-التجارة-والفنون-في-الاقتصاد-الهجين-PDF-لورنس-لسيج.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30518',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%86%d8%ad%d9%88-%d8%ab%d9%82%d8%a7%d9%81%d8%a9-%d8%a5%d8%a8%d8%af%d8%a7%d8%b9%d9%8a%d8%a9-%d8%ac%d8%af%d9%8a%d8%af%d8%a9-%d8%a7%d8%b2%d8%af/', d: 'كتاب نحو ثقافة إبداعية جديدة: ازدهار التجارة والفنون في الاقتصاد الهجين PDF - لورنس لسيج - في هذا الكتاب، يقدم لورنس لسيج رؤية معاصرة للحروب...'
  },
  {
    id: 'kg-30508', t: 'الطباعة الثلاثية الأبعاد: ميلاد ثورة صناعية جديدة', a: '[{\'@type\': \'Person\', \'name\': \'هود ليبسن\'}, {\'@type\': \'Person\', \'name\': \'ميلبا كيرمان\'}]',
    c: 'informatique', p: 346, r: 4.8, v: 288, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الطباعة-الثلاثية-الأبعاد-ميلاد-ثورة-صناعية-جديدة-PDF-هود-ليبسن-وميلبا-كيرمان.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30508',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b7%d8%a8%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%ab%d9%84%d8%a7%d8%ab%d9%8a%d8%a9-%d8%a7%d9%84%d8%a3%d8%a8%d8%b9%d8%a7%d8%af-%d9%85/', d: 'كتاب الطباعة الثلاثية الأبعاد: ميلاد ثورة صناعية جديدة PDF - هود ليبسن وميلبا كيرمان - تتناول هذه الكتابة موضوع الطباعة الثلاثية الأبعاد، حيث تقدم...'
  },
  {
    id: 'kg-30511', t: 'المكانية الرقمية: أهمية الموقع في عالم متشابك', a: '[{\'@type\': \'Person\', \'name\': \'إريك جوردون\'}, {\'@type\': \'Person\', \'name\': \'أدريانا دي سوزا إي سيلفا\'}]',
    c: 'informatique', p: 248, r: 4.1, v: 291, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-المكانية-الرقمية-أهمية-الموقع-في-عالم-متشابك-PDF-إريك-جوردون-وأدريانا-دي-سوزا-إي-سيلفا.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30511',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%85%d9%83%d8%a7%d9%86%d9%8a%d8%a9-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9-%d8%a3%d9%87%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d9%85/', d: 'كتاب المكانية الرقمية: أهمية الموقع في عالم متشابك PDF - إريك جوردون وأدريانا دي سوزا إي سيلفا - تتناول صفحات هذا الكتاب مفهوم &quot;المكانية الرقمية&quot;...'
  },
  {
    id: 'kg-30505', t: 'مقدمة إلى وسائل الإعلام الجديدة والثقافات الإلكترونية', a: 'برامود كيه نايار',
    c: 'informatique', p: 338, r: 4.5, v: 285, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-مقدمة-إلى-وسائل-الإعلام-الجديدة-والثقافات-الإلكترونية-PDF-برامود-كيه-نايار.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30505',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%85%d9%82%d8%af%d9%85%d8%a9-%d8%a5%d9%84%d9%89-%d9%88%d8%b3%d8%a7%d8%a6%d9%84-%d8%a7%d9%84%d8%a5%d8%b9%d9%84%d8%a7%d9%85-%d8%a7%d9%84%d8%ac/', d: 'كتاب مقدمة إلى وسائل الإعلام الجديدة والثقافات الإلكترونية PDF - برامود كيه نايار - يستعرض هذا الكتاب التفاعل المعقد بين العوالم الافتراضية التي...'
  },
  {
    id: 'kg-30501', t: 'تفاعل متسلسل: كيف ستغير تقنية سلاسل الكتل دول العالم النامي؟', a: '[{\'@type\': \'Person\', \'name\': \'بول دومجان\'}, {\'@type\': \'Person\', \'name\': \'جافين سيركين\'}, {\'@type\': \'Person\', \'name\': \'براندون توماس\'}, {\'@type\': \'Person\', \'name\': \'جون توشاك\'}]',
    c: 'informatique', p: 144, r: 4.1, v: 281, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-تفاعل-متسلسل-كيف-ستغير-تقنية-سلاسل-الكتل-دول-العالم-النامي؟-PDF-بول-دومجان-وجافين-سيركين-وبراندون-توماس-وجون-توشاك.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30501',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%aa%d9%81%d8%a7%d8%b9%d9%84-%d9%85%d8%aa%d8%b3%d9%84%d8%b3%d9%84-%d9%83%d9%8a%d9%81-%d8%b3%d8%aa%d8%ba%d9%8a%d8%b1-%d8%aa%d9%82%d9%86%d9%8a/', d: 'كتاب تفاعل متسلسل: كيف ستغير تقنية سلاسل الكتل دول العالم النامي؟ PDF - بول دومجان وجافين سيركين وبراندون توماس وجون توشاك - يأخذنا هذا الكتاب في...'
  },
  {
    id: 'kg-30269', t: 'الأنظمة الاقتصادية بين النظرية والتطبيق', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 33, r: 4.9, v: 49, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-الأنظمة-الاقتصادية-بين-النظرية-والتطبيق-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30269',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a3%d9%86%d8%b8%d9%85%d8%a9-%d8%a7%d9%84%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%d9%8a%d8%a9-%d8%a8%d9%8a%d9%86-%d8%a7%d9%84%d9%86/', d: 'كتاب الأنظمة الاقتصادية بين النظرية والتطبيق PDF - محمد كمال الرخاوي - يتناول كتاب &quot;الأنظمة الاقتصادية بين النظرية والتطبيق&quot; للدكتور محمد كمال...'
  },
  {
    id: 'kg-30326', t: 'كتابي عن مبارك وعصره ومصره', a: 'إبراهيم عيسي',
    c: 'politique', p: 516, r: 4.6, v: 106, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-كتابي-عن-مبارك-وعصره-ومصره-PDF-إبراهيم-عيسي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30326',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%83%d8%aa%d8%a7%d8%a8%d9%8a-%d8%b9%d9%86-%d9%85%d8%a8%d8%a7%d8%b1%d9%83-%d9%88%d8%b9%d8%b5%d8%b1%d9%87-%d9%88%d9%85%d8%b5%d8%b1%d9%87-pdf/', d: 'في كتاب &quot;مبارك وعصره ومصره&quot;، يقدم الكاتب والصحفي إبراهيم عيسى رؤية شاملة وعميقة لعصر الرئي...'
  },
  {
    id: 'kg-31340', t: 'هل يحل القرآن الكريم مشكلتي؟', a: 'سعد جبر',
    c: 'religion', p: 119, r: 4.0, v: 160, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-هل-يحل-القرآن-الكريم-مشكلتي؟-PDF-سعد-جبر.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=31340',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d9%87%d9%84-%d9%8a%d8%ad%d9%84-%d8%a7%d9%84%d9%82%d8%b1%d8%a2%d9%86-%d8%a7%d9%84%d9%83%d8%b1%d9%8a%d9%85-%d9%85%d8%b4%d9%83%d9%84%d8%aa%d9%8a/', d: 'كتاب &quot;هل يحل القرآن الكريم مشكلتي؟&quot; للمؤلف د. سعد جبر هو عمل أدبي يتناول خمسين مشكلة حياتية ت...'
  },
  {
    id: 'kg-1187', t: 'الحُلة الجميلة', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 12, r: 4.7, v: 247, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-الحُلة-الجميلة-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1187',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%ad%d9%8f%d9%84%d8%a9-%d8%a7%d9%84%d8%ac%d9%85%d9%8a%d9%84%d8%a9-pdf-%d9%87%d8%b1%d8%a8%d8%b1%d8%aa-%d8%ac%d9%88%d8%b1%d8%ac/', d: 'شاب يافع صنع له والدته حلة جميلة تعجز الكلمات عن وصف جمالها لتكون كما قالت له حلة زفافه كانت الحلة...'
  },
  {
    id: 'kg-30257', t: 'العدالة التصالحية في النظام الجنائي', a: 'محمد كمال الرخاوي',
    c: 'droit', p: 26, r: 4.7, v: 37, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2026/03/تحميل-كتاب-العدالة-التصالحية-في-النظام-الجنائي-PDF-محمد-كمال-الرخاوي.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=30257',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%b9%d8%af%d8%a7%d9%84%d8%a9-%d8%a7%d9%84%d8%aa%d8%b5%d8%a7%d9%84%d8%ad%d9%8a%d8%a9-%d9%81%d9%8a-%d8%a7%d9%84%d9%86%d8%b8%d8%a7/', d: 'كتاب العدالة التصالحية في النظام الجنائي PDF - محمد كمال الرخاوي - يتناول كتاب &quot;العدالة التصالحية في النظام الجنائي: رؤية مستقبلية لتطبيق آليات...'
  },
  {
    id: 'kg-1196', t: 'القمع', a: 'هربرت جورج ويلز',
    c: 'science-fiction', p: 20, r: 4.6, v: 256, src: 'kutubgate',
    cv: 'https://www.kutubgate.com/wp-content/uploads/2025/12/تحميل-كتاب-القمع-PDF-هربرت-جورج-ويلز.webp',
    pdf: 'https://www.kutubgate.com/?wpdmdl=1196',
    pg: 'https://www.kutubgate.com/%d8%aa%d8%ad%d9%85%d9%8a%d9%84-%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d9%82%d9%85%d8%b9-pdf-%d9%87%d8%b1%d8%a8%d8%b1%d8%aa-%d8%ac%d9%88%d8%b1%d8%ac-%d9%88%d9%8a%d9%84%d8%b2/', d: 'تدور أحداث القصة حول راوت الفنان الذي يسعى لاستكشاف التأثيرات الفنية للضوء والظل في بيئة صناعية مميزة. يخطط...'
  }
];
