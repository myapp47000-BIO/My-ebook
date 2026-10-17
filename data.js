'use strict';

/* =========================================================
   InfoLivres — تطبيق تحميل الكتب المجانية
   هندسة وإخراج : حاج إسماعيل إبراهيم
   بيانات التخصصات (33 تخصصاً) + الكتب الكلاسيكية
   ========================================================= */

var IL = {
  site: 'https://infolivres.org/',
  catalog: 'https://infolivres.org/livres-gratuits-pdf/',
  author: 'حاج إسماعيل إبراهيم',
  version: '1.2.0'
};

/* كل تخصصات الموقع الرسمي (للتصفح والمطابقة) */
IL.CATEGORIES = [
  { id: 'courts', ar: 'كتب قصيرة', fr: 'Livres Courts', icon: '⚡' },
  { id: 'affaires-et-investissements', ar: 'أعمال واستثمار', fr: "Livres d'Affaires", icon: '💼' },
  { id: 'amour', ar: 'حب ورومانسية', fr: "Livres d'Amour", icon: '💞' },
  { id: 'animaux', ar: 'حيوانات', fr: "Livres d'Animaux", icon: '🐾' },
  { id: 'art-et-photographie', ar: 'فن وتصوير', fr: "Livres d'Art", icon: '🎨' },
  { id: 'histoire', ar: 'تاريخ', fr: "Livres d'Histoire", icon: '🏰' },
  { id: 'horreur', ar: 'رعب', fr: "Livres d'Horreur", icon: '👻' },
  { id: 'informatique', ar: 'حاسوب وإعلام آلي', fr: "Livres d'Informatique", icon: '💻' },
  { id: 'ingenierie', ar: 'هندسة', fr: "Livres d'Ingénierie", icon: '⚙️' },
  { id: 'esoterisme', ar: 'روحانيات وغموض', fr: "Livres d'Ésotérisme", icon: '🔮' },
  { id: 'biologie', ar: 'أحياء', fr: 'Livres de Biologie', icon: '🧬' },
  { id: 'chimie', ar: 'كيمياء', fr: 'Livres de Chimie', icon: '🧪' },
  { id: 'croissance-personnelle', ar: 'تطوير ذات', fr: 'Livres de Croissance Personnelle', icon: '🌱' },
  { id: 'cuisine-et-boissons', ar: 'طبخ ومشروبات', fr: 'Livres de Cuisine', icon: '🍳' },
  { id: 'droit', ar: 'قانون', fr: 'Livres de Droit', icon: '⚖️' },
  { id: 'langues', ar: 'لغات', fr: 'Livres de Langues', icon: '🌍' },
  { id: 'mathematiques', ar: 'رياضيات', fr: 'Livres de Mathématiques', icon: '➗' },
  { id: 'mystere-et-suspense', ar: 'غموض وإثارة', fr: 'Livres de Mystère et Suspense', icon: '🔍' },
  { id: 'mythologie', ar: 'أساطير', fr: 'Livres de Mythologie', icon: '🏛️' },
  { id: 'medecine', ar: 'طب', fr: 'Livres de Médecine', icon: '🩺' },
  { id: 'metiers', ar: 'مهن وحِرف', fr: 'Livres de Métiers', icon: '🛠️' },
  { id: 'philosophie', ar: 'فلسفة', fr: 'Livres de Philosophie', icon: '🏺' },
  { id: 'physique', ar: 'فيزياء', fr: 'Livres de Physique', icon: '⚛️' },
  { id: 'psychologie', ar: 'علم نفس', fr: 'Livres de Psychologie', icon: '🧠' },
  { id: 'religion', ar: 'دين', fr: 'Livres de Religion', icon: '🕌' },
  { id: 'sport', ar: 'رياضة', fr: 'Livres de Sport', icon: '⚽' },
  { id: 'therapies-alternatives', ar: 'علاجات بديلة', fr: 'Livres de Thérapies Alternatives', icon: '🧘' },
  { id: 'romans', ar: 'روايات', fr: 'Romans', icon: '📖' },
  { id: 'themes-divers', ar: 'مواضيع متنوعة', fr: 'Livres de Thèmes Divers', icon: '🗂️' },
  { id: 'livres-en-anglais', ar: 'كتب بالإنجليزية', fr: 'Livres en Anglais', icon: '🇬🇧' },
  { id: 'livres-en-espagnol', ar: 'كتب بالإسبانية', fr: 'Livres en Espagnol', icon: '🇪🇸' },
  { id: 'livres-en-portugais', ar: 'كتب بالبرتغالية', fr: 'Livres en Portugais', icon: '🇵🇹' },
  { id: 'pour-enfants', ar: 'كتب للأطفال', fr: 'Livres pour Enfants', icon: '🧸' }
];

/* ================= الروايات ================= */
IL.BOOKS_CLASSICS = [
  {
    id: 'orgueil-et-prejuges', t: 'كبرياء وهُوى', tf: 'Orgueil et Préjugés', a: 'جين أوستن', af: 'Jane Austen',
    c: 'romans', y: 1813, p: 0, r: 4.8, v: 2410,
    cv: 'https://cdn.infolibros.org/cover/aldus-orgueil-et-prejuges-jane-austen.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/orgueil-et-prejuges-jane-austen.pdf',
    pg: 'https://infolivres.org/livre/orgueil-et-prejuges-jane-austen/',
    d: 'رواية أوستن الخالدة عن الحب والطبقة الاجتماعية، ومرآة أنيقة لإنجلترا في مطلع القرن التاسع عشر.'
  },
  {
    id: 'notre-dame-de-paris', t: 'أحدب نوتردام', tf: 'Notre-Dame de Paris', a: 'فيكتور هوغو', af: 'Victor Hugo',
    c: 'romans', y: 1831, p: 0, r: 4.7, v: 1830,
    cv: 'https://cdn.infolivres.org/cover/notre-dame-de-paris-victor-hugo.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Victor%20Hugo/notre-dame-de-paris-victor-hugo.pdf',
    pg: 'https://infolivres.org/livre/notre-dame-de-paris-victor-hugo/',
    d: 'مأساة غرينغوار وكازيمودو وإزميرالدا تحت أجراس كاتدرائية نوتردام في باريس القرن الخامس عشر.'
  },
  {
    id: 'madame-bovary', t: 'مدام بوفاري', tf: 'Madame Bovary', a: 'غوستاف فلوبير', af: 'Gustave Flaubert',
    c: 'romans', y: 1857, p: 0, r: 4.5, v: 1210,
    cv: 'https://cdn.infolivres.org/cover/madame-bovary-gustave-flaubert.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Gustave%20Flaubert/madame-bovary-gustave-flaubert.pdf',
    pg: 'https://infolivres.org/livre/madame-bovary-gustave-flaubert/',
    d: 'تحليل صارم لوهم الحب والخيانة عند امرأة ريفية، من أعمدة الرواية الحديثة.'
  },
  {
    id: 'les-trois-mousquetaires', t: 'الفرسان الثلاثة', tf: 'Les Trois Mousquetaires', a: 'ألكسندر ديوما', af: 'Alexandre Dumas',
    c: 'romans', y: 1844, p: 0, r: 4.8, v: 2050,
    cv: 'https://cdn.infolivres.org/cover/les-trois-mousquetaires-alexandre-dumas.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Alexandre%20Dumas/les-trois-mousquetaires-alexandre-dumas.pdf',
    pg: 'https://infolivres.org/livre/les-trois-mousquetaires-alexandre-dumas/',
    d: 'مغامرات أثوس وبورتوس وأراميس ود’أرتانيان وأيمانهم: «الواحد للجميع والجميع للواحد».'
  },
  {
    id: 'le-fantome-de-l-opera', t: 'شبح الأوبرا', tf: "Le Fantôme de l'Opéra", a: 'غاستون لورو', af: 'Gaston Leroux',
    c: 'horreur', y: 1910, p: 0, r: 4.6, v: 1340,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-le-fantome-de-l-opera-gaston-leroux.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/le-fantome-de-l-opera-gaston-leroux.pdf',
    pg: 'https://infolivres.org/livre/le-fantome-de-lopera-gaston-leroux/',
    d: 'شبح يسكن أروقة دار الأوبرا ويسرق قلب المغنية الشابة كريستين... رعب وغموض في قصة حب مخيفة.'
  },
  {
    id: 'cyrano-de-bergerac', t: 'سيرانو دو برجراك', tf: 'Cyrano de Bergerac', a: 'إدمون روستان', af: 'Edmond Rostand',
    c: 'romans', y: 1897, p: 0, r: 4.7, v: 760,
    cv: 'https://cdn.infolivres.org/cover/cyrano-de-bergerac-edmond-rostand.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Edmond%20Rostand/cyrano-de-bergerac-edmond-rostand.pdf',
    pg: 'https://infolivres.org/livre/cyrano-de-bergerac-edmond-rostand/',
    d: 'فارس وشاعر عظيم الأنف، وقصة حب خالدة تخلط الجرأة بالكلمة الأخّاذة والجمال الخفي.'
  },
  {
    id: 'les-liaisons-dangereuses', t: 'العلاقات الخطرة', tf: 'Les Liaisons Dangereuses', a: 'بيير شودرلو دو لاكلو', af: 'Pierre Choderlos de Laclos',
    c: 'romans', y: 1782, p: 0, r: 4.4, v: 620,
    cv: 'https://cdn.infolivres.org/cover/les-liaisons-dangereuses-pierre-choderlos-de-laclos.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Pierre%20Choderlos%20de%20Laclos/amities-dangereuses-pierre-choderlos-de-laclos.pdf',
    pg: 'https://infolivres.org/livre/les-liaisons-dangereuses-pierre-choderlos-de-laclos/',
    d: 'رواية رسائلية تكشف كيف يستعمل نبلاء القرن الثامن عشر الحب سلاحاً في صراعهم.'
  },
  {
    id: 'vingt-mille-lieues', t: 'عشرون ألف فرسخ تحت البحار', tf: 'Vingt Mille Lieues Sous les Mers', a: 'جول فيرن', af: 'Jules Verne',
    c: 'romans', y: 1870, p: 0, r: 4.8, v: 1980,
    cv: 'https://cdn.infolivres.org/cover/vingt-mille-lieues-sous-les-mers-jules-verne.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Jules%20Verne/1876-vingt-mille-lieues-sous-les-mers-julio-verne.pdf',
    pg: 'https://infolivres.org/livre/vingt-mille-lieues-sous-les-mers-jules-verne/',
    d: 'رحلة الكابتن نيمو و«نوتيلوس» في أعماق المحيطات: عجائب وأخطار لم يخترها أحد قبله.'
  },
  {
    id: 'le-tour-du-monde', t: 'حول العالم في ثمانين يوماً', tf: 'Le Tour du Monde en Quatre-vingts Jours', a: 'جول فيرن', af: 'Jules Verne',
    c: 'romans', y: 1872, p: 0, r: 4.7, v: 1560,
    cv: 'https://cdn.infolivres.org/cover/le-tour-du-monde-en-quatre-vingts-jours-jules-verne.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Jules%20Verne/1878-le-tour-du-monde-en-quatre-vingts-jours-julio-verne.pdf',
    pg: 'https://infolivres.org/livre/le-tour-du-monde-en-quatre-vingts-jours-jules-verne/',
    d: 'رهان يدفع فيلياس فوغ إلى الالتفاف حول الأرض في ثمانين يوماً فقط.'
  },
  {
    id: 'voyage-au-centre-de-la-terre', t: 'رحلة إلى مركز الأرض', tf: 'Voyage au Centre de la Terre', a: 'جول فيرن', af: 'Jules Verne',
    c: 'romans', y: 1864, p: 0, r: 4.6, v: 1120,
    cv: 'https://cdn.infolivres.org/cover/voyage-au-centre-de-la-terre-jules-verne.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Jules%20Verne/881-voyage-au-centre-de-la-terre-jules-verne.pdf',
    pg: 'https://infolivres.org/livre/voyage-au-centre-de-la-terre-jules-verne/',
    d: 'عالم جيولوجيا ومرشده يهبطان في فوهة بركان بحثاً عن عالم سحيق مدهش.'
  },
  {
    id: 'frankenstein', t: 'فرانكنشتاين', tf: 'Frankenstein', a: 'ماري شيلي', af: 'Mary Shelley',
    c: 'horreur', y: 1818, p: 0, r: 4.6, v: 1440,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-frankenstein-mary-shelley.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/frankenstein-mary-shelley.pdf',
    pg: 'https://infolivres.org/livre/frankenstein-mary-shelley/',
    d: 'عالم شاب يبعث الحياة في كائن من الأشلاء ثم ينكره؛ أول أسطورة خالدة في الرعب العلمي.'
  },
  {
    id: 'dracula', t: 'دراكولا', tf: 'Dracula', a: 'برام ستوكر', af: 'Bram Stoker',
    c: 'horreur', y: 1897, p: 0, r: 4.7, v: 1760,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-dracula-bram-stoker.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/dracula-bram-stoker.pdf',
    pg: 'https://infolivres.org/livre/dracula-bram-stoker/',
    d: 'رسائل ومذكّرات تلاحق كونتاً من ترانسلفانيا حتى لندن: النص المؤسِّس لمصّاصي الدماء.'
  },
  {
    id: 'jane-eyre', t: 'جين إير', tf: 'Jane Eyre', a: 'شارلوت برونتي', af: 'Charlotte Brontë',
    c: 'romans', y: 1847, p: 0, r: 4.6, v: 990,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-jane-eyre-charlotte-bronte.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/jane-eyre-charlotte-bronte.pdf',
    pg: 'https://infolivres.org/livre/jane-eyre-charlotte-bronte/',
    d: 'يتيمة تعلمتها قسوة الحياة تؤكد حريتها بالحب، وتكتشف سراً مفزعاً في قصر ثورنفيلد.'
  },
  {
    id: 'le-portrait-de-dorian-gray', t: 'صورة دوريان غراي', tf: 'Le Portrait de Dorian Gray', a: 'أوسكار وايلد', af: 'Oscar Wilde',
    c: 'horreur', y: 1890, p: 0, r: 4.7, v: 1290,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-le-portrait-de-dorian-gray-oscar-wilde.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/le-portrait-de-dorian-gray-oscar-wilde.pdf',
    pg: 'https://infolivres.org/livre/le-portrait-de-dorian-gray-oscar-wilde/',
    d: 'شاب متكفل يبيع روحه مقابل بقاء وجهه، فتشيخ الجريمة على لوحته بدلاً منه.'
  },
  {
    id: 'crime-et-chatiment', t: 'الجريمة والعقاب', tf: 'Crime et Châtiment', a: 'فيودور دوستويفسكي', af: 'Fiodor Dostoïevski',
    c: 'romans', y: 1866, p: 0, r: 4.9, v: 2860,
    cv: 'https://cdn.infolivres.org/cover/crime-et-chatiment-fiodor-dostoyevski.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/crime-et-chatiment-fiodor-dostoievski-10725.pdf',
    pg: 'https://infolivres.org/livre/crime-et-chatiment-fiodor-dostoyevski/',
    d: 'طالب فقير يرتكب جريمة فيتصارع مع ضميره: أعمق دراسة نفسية للذنب والخلاص في الأدب.'
  },
  {
    id: 'la-metamorphose', t: 'التحوُّل', tf: 'La Métamorphose', a: 'فرانز كافكا', af: 'Franz Kafka',
    c: 'romans', y: 1915, p: 0, r: 4.6, v: 1180,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-la-metamorphose-franz-kafka.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/la-metamorphose-franz-kafka.pdf',
    pg: 'https://infolivres.org/livre/la-metamorphose-franz-kafka/',
    d: 'موظف يستيقظ في جسد حشرة عملاقة، فتنقلب حياة عائلته رأساً على عقب.'
  },
  {
    id: 'le-meilleur-des-mondes', t: 'عالم جديد شجاع', tf: 'Le Meilleur des Mondes', a: 'ألدوس هكسلي', af: 'Aldous Huxley',
    c: 'romans', y: 1932, p: 0, r: 4.7, v: 1520,
    cv: 'https://cdn.infolivres.org/cover/le-meilleur-des-mondes-aldous-huxley.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Aldous%20Huxley/un-monde-nouveau-aldous-huxley.pdf',
    pg: 'https://infolivres.org/livre/le-meilleur-des-mondes-aldous-huxley/',
    d: 'مستقبل يُلد فيه البشر ويُدرَّبون على السعادة، حيث عُفِّرت الحرية مقابل الأمان واللّذة.'
  },
  {
    id: 'romeo-et-juliette', t: 'روميو وجولييت', tf: 'Roméo et Juliette', a: 'ويليام شكسبير', af: 'William Shakespeare',
    c: 'romans', y: 1597, p: 0, r: 4.7, v: 1670,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-romeo-et-juliette-william-shakespeare.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/romeo-et-juliette-william-shakespeare.pdf',
    pg: 'https://infolivres.org/livre/romeo-et-juliette-william-shakespeare/',
    d: 'مأساة العاشقين من عائلتين متخاصمتين في فيرونا؛ أشهر قصة حب في الأدب العالمي.'
  },
  {
    id: 'moby-dick', t: 'موبي ديك', tf: 'Moby Dick', a: 'هيرمان ملفيل', af: 'Herman Melville',
    c: 'romans', y: 1851, p: 0, r: 4.5, v: 870,
    cv: 'https://cdn.infolivres.org/cover/moby-dick-herman-melville.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/moby-dick-herman-melville.pdf',
    pg: 'https://infolivres.org/livre/moby-dick-herman-melville/',
    d: 'قبطان يطارد حوتاً أبيض يختزل كل الشرور، في رحلة تتحول إلى رعب وقدر.'
  },
  {
    id: 'cent-ans-de-solitude', t: 'مئة عام من العزلة', tf: 'Cent Ans de Solitude', a: 'غابرييل غارسيا ماركيز', af: 'Gabriel Garcia Marquez',
    c: 'romans', y: 1967, p: 0, r: 4.8, v: 2140,
    cv: 'https://cdn.infolivres.org/cover/cent-ans-de-solitude-gabriel-garcia-marquez.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Gabriel%20Garcia%20Marquez/cent-ans-de-solitude-gabriel-garcia-marquez.pdf',
    pg: 'https://infolivres.org/livre/cent-ans-de-solitude-gabriel-garcia-marquez/',
    d: 'تاريخ عائلة بوينديا على مدى سبعة أجيال في ماكوندو؛ قمة الواقعية السحرية.'
  },
  {
    id: 'les-hauts-de-hurlevent', t: 'مرتفعات ويذرينغ', tf: 'Les Hauts de Hurlevent', a: 'إميلي برونتي', af: 'Emily Brontë',
    c: 'romans', y: 1847, p: 0, r: 4.6, v: 940,
    cv: 'https://cdn.infolivres.org/cover/les-hauts-de-hurle-vent-emily-bronte.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Emily%20Bront%C3%AB/les-hauts-de-hurle-vent-emily-bronte.pdf',
    pg: 'https://infolivres.org/livre/les-hauts-de-hurle-vent-emily-bronte/',
    d: 'حب عنيد وانتقامي يعبر الأجيال في مرتفعات يوركشاير القاسية.'
  },
  {
    id: 'anna-karenine', t: 'آنا كارنينا', tf: 'Anna Karénine', a: 'ليون تولستوي', af: 'Léon Tolstoï',
    c: 'romans', y: 1877, p: 0, r: 4.8, v: 1730,
    cv: 'https://cdn.infolivres.org/cover/anna-karenine-leon-tolstoi.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/L%C3%A9on%20Tolsto%C3%AF/anna-karenine-leon-tolstoi.pdf',
    pg: 'https://infolivres.org/livre/anna-karenine-leon-tolstoi/',
    d: '«كل الأسَر السعيدة متشابهة...» حب يخنقه المجتمع الروسي وقضية امرأة تدفع الثمن.'
  },
  {
    id: 'la-divine-comedie', t: 'الكوميديا الإلهية', tf: 'La Divine Comédie', a: 'دانتي أليغييري', af: 'Dante Alighieri',
    c: 'mythologie', y: 1320, p: 0, r: 4.7, v: 810,
    cv: 'https://cdn.infolivres.org/cover/la-divine-comedie-dante-alighieri.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/la-divine-comedie-dante-alighieri.pdf',
    pg: 'https://infolivres.org/livre/la-divine-comedie-dante-alighieri/',
    d: 'رحلة دانتي في الجحيم والمعتلّي والفردوس بمرافقة فيرجيل وبياتريتشي.'
  },
  {
    id: 'gatsby-le-magnifique', t: 'غاتسبي العظيم', tf: 'Gatsby le Magnifique', a: 'ف. سكوت فيتزجيرالد', af: 'F. Scott Fitzgerald',
    c: 'romans', y: 1925, p: 0, r: 4.6, v: 1360,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-gatsby-le-magnifique-f-scott-fitzgerald.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/gatsby-le-magnifique-f-scott-fitzgerald.pdf',
    pg: 'https://infolivres.org/livre/gatsby-le-magnifique-f-scott-fitzgerald/',
    d: 'غاتسبي الغامض يقيم الحفلات باحثاً عن حب ضائع وسط بريق العشرينيات الزائف.'
  },
  {
    id: 'l-odyssee', t: 'الأوديسة', tf: "L'Odyssée", a: 'هوميروس', af: 'Homère',
    c: 'mythologie', y: -700, p: 0, r: 4.8, v: 1240,
    cv: 'https://cdn.infolivres.org/cover/l-odyssee-homere.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/lodyssee-homere.pdf',
    pg: 'https://infolivres.org/livre/l-odyssee-homere/',
    d: 'عودة أوديسيوس إلى إيثاكا عبر عشر سنوات من العواصف والسحر والوحوش.'
  },
  {
    id: 'l-iliade', t: 'الإلياذة', tf: "L'Iliade", a: 'هوميروس', af: 'Homère',
    c: 'mythologie', y: -750, p: 0, r: 4.7, v: 930,
    cv: 'https://cdn.infolivres.org/cover/l-iliade-homere.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/liliade-homere.pdf',
    pg: 'https://infolivres.org/livre/l-iliade-homere/',
    d: 'غضب أخيل وحصار طروادة في الملحمة المؤسِّسة للأدب الغربي كله.'
  },

  /* ================= الفلسفة والفكر ================= */
  {
    id: 'la-republique', t: 'الجمهورية', tf: 'La République', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -380, p: 0, r: 4.8, v: 1480,
    cv: 'https://cdn.infolivres.org/cover/la-republique-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/La-R-publique-Platon.pdf',
    pg: 'https://infolivres.org/livre/la-republique-platon/',
    d: 'محاورات سقراط عن العدالة والمدينة الفاضلة، وفيها أسطورة الكهف الشهيرة.'
  },
  {
    id: 'ethique-a-nicomaque', t: 'أخلاق نيقوماخوس', tf: 'Éthique à Nicomaque', a: 'أرسطو', af: 'Aristote',
    c: 'philosophie', y: -340, p: 0, r: 4.7, v: 1120,
    cv: 'https://cdn.infolivres.org/cover/ethique-a-nicomaque-aristote.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/ethique-a-nicomaque-aristote-11011.pdf',
    pg: 'https://infolivres.org/livre/ethique-a-nicomaque-aristote/',
    d: 'عن الفضيلة والسعادة كغاية، وعن «الوسط» الذي يصنع الإنسان الفاضل.'
  },
  {
    id: 'critique-de-la-raison-pure', t: 'نقد العقل المحض', tf: 'Critique de la Raison Pure', a: 'إيمانويل كانط', af: 'Emmanuel Kant',
    c: 'philosophie', y: 1781, p: 0, r: 4.7, v: 960,
    cv: 'https://cdn.infolivres.org/cover/critique-de-la-raison-pure-emmanuel-kant.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Emmanuel%20Kant/Critique-de-la-Raison-Pure-Emmanuel-Kant.pdf',
    pg: 'https://infolivres.org/livre/critique-de-la-raison-pure-emmanuel-kant/',
    d: 'كيف نعرف؟ كانط يرسم حدود العقل ويؤسس للمعرفة العلمية.'
  },
  {
    id: 'discours-de-la-methode', t: 'الخطاب في المنهج', tf: 'Discours de la méthode', a: 'رينيه ديكارت', af: 'René Descartes',
    c: 'philosophie', y: 1637, p: 0, r: 4.7, v: 1210,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-discours-de-la-methode-rene-descartes.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/discours-de-la-methode-rene-descartes.pdf',
    pg: 'https://infolivres.org/livre/discours-de-la-methode-rene-descartes/',
    d: 'الشك المنهجي و«أنا أفكر إذن أنا موجود»؛ نص يؤسس للفلسفة الحديثة.'
  },
  {
    id: 'apologie-de-socrate', t: 'دفاع سقراط', tf: 'Apologie de Socrate', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -390, p: 0, r: 4.6, v: 840,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-apologie-de-socrate-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/apologie-de-socrate-platon.pdf',
    pg: 'https://infolivres.org/livre/apologie-de-socrate-platon/',
    d: 'خطبة سقراط أمام محكمة أثينا: لا يتخلى عن الحق، ولا يحفل بالحكم.'
  },
  {
    id: 'le-banquet', t: 'المأدبة', tf: 'Le Banquet', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -385, p: 0, r: 4.6, v: 690,
    cv: 'https://cdn.infolivres.org/cover/le-banquet-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/Le-Banquet-Platon.pdf',
    pg: 'https://infolivres.org/livre/le-banquet-platon/',
    d: 'ضيوف يمتدحون الحب، فيرفعه أفلاطون من الجسد إلى اشتياق الجمال المطلق.'
  },
  {
    id: 'la-politique', t: 'السياسة', tf: 'La Politique', a: 'أرسطو', af: 'Aristote',
    c: 'philosophie', y: -350, p: 0, r: 4.6, v: 720,
    cv: 'https://cdn.infolivres.org/cover/la-politique-aristote.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-politique-aristote-11014.pdf',
    pg: 'https://infolivres.org/livre/la-politique-aristote/',
    d: 'أول درس منهجي في الدولة والمواطن وأنواع الحكم وميل النظام إلى الاعتدال.'
  },
  {
    id: 'poetique', t: 'فن الشعر', tf: 'Poétique', a: 'أرسطو', af: 'Aristote',
    c: 'philosophie', y: -335, p: 0, r: 4.5, v: 510,
    cv: 'https://cdn.infolivres.org/cover/poetique-aristote.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/poetique-aristote-11017.pdf',
    pg: 'https://infolivres.org/livre/poetique-aristote/',
    d: 'نظرية التراجيديا والتمثيل والإلتذاذ الفني؛ أصل النقد الأدبي في الغرب.'
  },
  {
    id: 'rhetorique', t: 'البلاغة', tf: 'Rhétorique', a: 'أرسطو', af: 'Aristote',
    c: 'philosophie', y: -330, p: 0, r: 4.5, v: 470,
    cv: 'https://cdn.infolivres.org/cover/rhetorique-aristote.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/rhetorique-aristote-11016.pdf',
    pg: 'https://infolivres.org/livre/rhetorique-aristote/',
    d: 'فن الإقناع: شخص المتكلم والمستمع والخطبة، ودلائل الرأي والانفعال.'
  },
  {
    id: 'meditations-descartes', t: 'تأملات في الفلسفة الأولى', tf: 'Méditations', a: 'رينيه ديكارت', af: 'René Descartes',
    c: 'philosophie', y: 1641, p: 0, r: 4.6, v: 640,
    cv: 'https://cdn.infolivres.org/cover/meditations-rene-descartes.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/meditations-descartes.pdf',
    pg: 'https://infolivres.org/livre/meditations-rene-descartes/',
    d: 'ست تأملات تبدأ بالشك في كل شيء وتنتهي بإثبات النفس والوجود الإلهي.'
  },
  {
    id: 'phedon', t: 'فيدون', tf: 'Phédon', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -375, p: 0, r: 4.6, v: 520,
    cv: 'https://cdn.infolivres.org/cover/phedon-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/Ph-don-Platon.pdf',
    pg: 'https://infolivres.org/livre/phedon-platon/',
    d: 'آخر حوارات سقراط قبل موته: في خلود النفس وحياة الفيلسوف وطمأنينة الحقيقة.'
  },
  {
    id: 'gorgias', t: 'غورغياس', tf: 'Gorgias', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -380, p: 0, r: 4.5, v: 430,
    cv: 'https://cdn.infolivres.org/cover/gorgias-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/Gorgias-Platon.pdf',
    pg: 'https://infolivres.org/livre/gorgias-platon/',
    d: 'جدل بين الخطابة والفلسفة: أيهما يهدي إلى الحق، وما مصير الظالم؟'
  },
  {
    id: 'metaphysique', t: 'ما بعد الطبيعة', tf: 'Métaphysique', a: 'أرسطو', af: 'Aristote',
    c: 'philosophie', y: -350, p: 0, r: 4.6, v: 610,
    cv: 'https://cdn.infolivres.org/cover/metaphysique-aristote.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/metaphysique-aristote-10997.pdf',
    pg: 'https://infolivres.org/livre/metaphysique-aristote/',
    d: 'البحث في الموجود بما هو موجود، وأصل الوجود وأسبابه الأربعة.'
  },
  {
    id: 'fondements-metaphysique-des-moeurs', t: 'تأسيس فلسفة الأخلاق', tf: 'Fondements de la Métaphysique des Mœurs', a: 'إيمانويل كانط', af: 'Emmanuel Kant',
    c: 'philosophie', y: 1785, p: 0, r: 4.6, v: 590,
    cv: 'https://cdn.infolivres.org/cover/fondements-de-la-metaphysique-des-moeurs-emmanuel-kant.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Emmanuel%20Kant/Fondements-de-la-M-taphysique-des-M-urs-Emmanuel-Kant.pdf',
    pg: 'https://infolivres.org/livre/fondements-de-la-metaphysique-des-moeurs-emmanuel-kant/',
    d: 'القاعدة الذهبية الصورية: عامل الإنسان دائماً كغاية لا كوسيلة.'
  },
  {
    id: 'critique-de-la-raison-pratique', t: 'نقد العقل العملي', tf: 'Critique de la Raison Pratique', a: 'إيمانويل كانط', af: 'Emmanuel Kant',
    c: 'philosophie', y: 1788, p: 0, r: 4.5, v: 420,
    cv: 'https://cdn.infolivres.org/cover/critique-de-la-raison-pratique-emmanuel-kant.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Emmanuel%20Kant/Critique-de-la-raison-pratique-Emmanuel-Kant.pdf',
    pg: 'https://infolivres.org/livre/critique-de-la-raison-pratique-emmanuel-kant/',
    d: 'الواجب الأخلاقي والإرادة الحرة وكيف يستمد الإنسان فاعليته في مجال العمل.'
  },
  {
    id: 'les-passions-de-l-ame', t: 'انفعالات النفس', tf: "Les Passions de l'Âme", a: 'رينيه ديكارت', af: 'René Descartes',
    c: 'philosophie', y: 1649, p: 0, r: 4.4, v: 310,
    cv: 'https://cdn.infolivres.org/cover/les-passions-de-l-ame-rene-descartes.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/Migration/les-passions-de-lame-descartes.pdf',
    pg: 'https://infolivres.org/livre/les-passions-de-l-ame-rene-descartes/',
    d: 'تصنيف ديكارت لانفعالات النفس وأثرها في الجسد وطرق السيطرة عليها.'
  },
  {
    id: 'protagoras', t: 'بروتاغوراس', tf: 'Protágoras', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -420, p: 0, r: 4.4, v: 290,
    cv: 'https://cdn.infolivres.org/cover/protagoras-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/Prot-goras-Platon.pdf',
    pg: 'https://infolivres.org/livre/protagoras-platon/',
    d: 'هل تُعلَّم الفضيلة؟ حوار حول التربية وحدود الكلام وأوهام الاعتقاد.'
  },
  {
    id: 'quest-ce-que-les-lumieres', t: 'ما هو التنوير؟', tf: "Qu'est-ce que les Lumières ?", a: 'إيمانويل كانط', af: 'Emmanuel Kant',
    c: 'philosophie', y: 1784, p: 0, r: 4.5, v: 450,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-qu-est-ce-que-les-lumieres-emmanuel-kant.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/qu-est-ce-que-les-lumieres-emmanuel-kant.pdf',
    pg: 'https://infolivres.org/livre/quest-ce-que-les-lumieres-emmanuel-kant/',
    d: '«تجرّأ على أن تعرف!» نصوص كانط في الخروج من القصور العقلي والاعتماد على العقل.'
  },
  {
    id: 'vers-la-paix-perpetuelle', t: 'نحو السلام الدائم', tf: 'Vers la Paix Perpétuelle', a: 'إيمانويل كانط', af: 'Emmanuel Kant',
    c: 'philosophie', y: 1795, p: 0, r: 4.4, v: 280,
    cv: 'https://cdn.infolivres.org/cover/vers-la-paix-perpetuelle-emmanuel-kant.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Emmanuel%20Kant/Vers-la-paix-perp-tuelle-Emmanuel-Kant.pdf',
    pg: 'https://infolivres.org/livre/vers-la-paix-perpetuelle-emmanuel-kant/',
    d: 'مشروع اتحاد الجمهوريات الحرة لتأسيس السلام، وأصل الفكرة القانونية الدولية.'
  },
  {
    id: 'les-lois', t: 'القوانين', tf: 'Les Lois', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -350, p: 0, r: 4.4, v: 240,
    cv: 'https://cdn.infolivres.org/cover/les-lois-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Platon/Les-Lois-Platon.pdf',
    pg: 'https://infolivres.org/livre/les-lois-platon/',
    d: 'آخر أعمال أفلاطون: دستور وقوانين لمدينة عادلة تُدار بالتربية والحدود.'
  },
  {
    id: 'tao-te-king', t: 'تاو تي تشينغ', tf: 'Tao Te King', a: 'لاو تسو', af: 'Lao Tseu',
    c: 'philosophie', y: -500, p: 0, r: 4.7, v: 1320,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-tao-te-king-lao-tseu.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/tao-te-king-lao-tseu.pdf',
    pg: 'https://infolivres.org/livre/tao-te-king-lao-tseu/',
    d: 'أحد أشهر كتب الحكمة الصينية: ثمانون مقطعاً عن الطريق والرقّة والقوة الخفية.'
  },
  {
    id: 'criton', t: 'كريتون', tf: 'Criton', a: 'أفلاطون', af: 'Platon',
    c: 'philosophie', y: -399, p: 0, r: 4.5, v: 380,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-criton-platon.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/criton-platon.pdf',
    pg: 'https://infolivres.org/livre/criton-platon/',
    d: 'سقراط في زنزانته يرفض الهرب ويصرّ على احترام القانون حتى إذا كان ظالماً.'
  },
  {
    id: 'manuel-d-epictete', t: 'مُختصر إبكتيتوس', tf: "Manuel d'Épictète", a: 'إبكتيتوس', af: 'Épictète',
    c: 'philosophie', y: 125, p: 0, r: 4.7, v: 870,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-manuel-d-epictete-epictete.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/manuel-d-epictete-epictete.pdf',
    pg: 'https://infolivres.org/livre/manuel-d-epictete-epictete/',
    d: 'قواعد عملية في ثلاثة وخمسين فصلاً: ميّز ما تملك ممّا لا تملك، واكسب طمأنينتك.'
  },
  {
    id: 'de-la-brievete-de-la-vie', t: 'في قِصَر الحياة', tf: 'De la Brièveté de la Vie', a: 'سينيكا', af: 'Sénèque',
    c: 'philosophie', y: 55, p: 0, r: 4.6, v: 540,
    cv: 'https://cdn.infolibros.org/cover/aldus-fr-de-la-brievete-de-la-vie-seneque.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/de-la-brievete-de-la-vie-seneque.pdf',
    pg: 'https://infolivres.org/livre/de-la-brievete-de-la-vie-seneque/',
    d: 'الحياة ليست قصيرة بل نُضيّعها؛ مقال سينيكا في استثمار الزمن وحدود الفراغ.'
  },
  {
    id: 'siddhartha', t: 'سيدهارتا', tf: 'Siddhartha', a: 'هرمان هسه', af: 'Hermann Hesse',
    c: 'croissance-personnelle', y: 1922, p: 0, r: 4.6, v: 780,
    cv: 'https://cdn.infolivres.org/cover/siddhartha-hermann-hesse.webp',
    pdf: 'https://pdf.infolivres.org/FR/Autores/Hermann%20Hesse/Siddhartha-Hermann-Hesse.pdf',
    pg: 'https://infolivres.org/livre/siddhartha-hermann-hesse/',
    d: 'رحلة شاب هندي باحث عن الحكمة: من الرهبنة والتعلم إلى الحب والاستماع للنهر.'
  },
  {
    id: 'reflechissez-et-devenez-riche', t: 'فكّر تصبح ثرياً', tf: 'Réfléchissez et Devenez Riche', a: 'نابليون هيل', af: 'Napoleon Hill',
    c: 'croissance-personnelle', y: 1937, p: 0, r: 4.5, v: 1420,
    cv: 'https://cdn.infolibros.org/cover/aldus-reflechissez-et-devenez-riche-napoleon-hill.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/reflechissez-et-devenez-riche-napoleon-hill.pdf',
    pg: 'https://infolivres.org/livre/reflechissez-et-devenez-riche-napoleon-hill/',
    d: 'ثلاث عشرة خطوة لبناء الثروة، خلاصة عشرين سنة من دراسة أقوى رجال عصره.'
  },

  /* ================= الاقتصاد والأعمال (كلاسيكيات) ================= */
  {
    id: 'la-richesse-des-nations', t: 'ثروة الأمم', tf: 'Recherches sur la Nature et les Causes de la Richesse des Nations', a: 'آدم سميث', af: 'Adam Smith',
    c: 'affaires-et-investissements', y: 1776, p: 0, r: 4.7, v: 1050,
    cv: 'https://cdn.infolivres.org/cover/recherches-sur-la-nature-et-les-causes-de-la-richesse-des-nations-adam-smith.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/recherches-sur-la-nature-et-les-causes-de-la-richesse-des-nations-adam-smith-11315.pdf',
    pg: 'https://infolivres.org/livre/recherches-sur-la-nature-et-les-causes-de-la-richesse-des-nations-adam-smith/',
    d: 'أساس الاقتصاد الحديث: تقسيم العمل والسوق واليد الخفية.'
  },
  {
    id: 'theorie-des-sentiments-moraux', t: 'نظرية المشاعر الأخلاقية', tf: 'Théorie des Sentiments Moraux', a: 'آدم سميث', af: 'Adam Smith',
    c: 'affaires-et-investissements', y: 1759, p: 0, r: 4.5, v: 480,
    cv: 'https://cdn.infolivres.org/cover/theorie-des-sentiments-moraux-adam-smith.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/theorie-des-sentiments-moraux-adam-smith-11316.pdf',
    pg: 'https://infolivres.org/livre/theorie-des-sentiments-moraux-adam-smith/',
    d: 'قبل «ثروة الأمم»: أسس سميث لأخلاق التعاطف والحكم الأخلاقي.'
  },
  {
    id: 'l-art-de-la-guerre', t: 'فن الحرب', tf: "L'Art de la Guerre", a: 'سون تزو', af: 'Sun Tzu',
    c: 'affaires-et-investissements', y: -500, p: 145, r: 4.8, v: 2160,
    cv: 'https://cdn.infolibros.org/pdf-thumbnails/aldus-l-art-de-la-guerre-sun-tzu.webp',
    pdf: 'https://pdf.infolivres.org/FR/aldus/l-art-de-la-guerre-sun-tzu.pdf',
    pg: 'https://infolivres.org/livre/l-art-de-la-guerre-sun-tzu/',
    d: 'أقدم مرجع في الاستراتيجية: ثلاثة عشر فصلاً في التخطيط والنصر بغير قتال، تُطبَّق اليوم في الأعمال.'
  }
];
