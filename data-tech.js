'use strict';

/* =========================================================
   InfoLivres PWA — الكتب العلمية والتقنية والمهنية
   (أعمال، حاسوب، رياضيات، طب، فيزياء، علم نفس)
   المصدر: infolivres.org — كتب حرة التوزيع
   ========================================================= */

IL.BOOKS_TECH = [

  /* ================= إدارة وأعمال وتسويق ================= */
  {
    id: 'creation-d-entreprise', t: 'تأسيس المؤسسة', tf: "La Création d'Entreprise", a: 'روبرت بابان', af: 'Robert Papin',
    c: 'affaires-et-investissements', p: 824, r: 4.6, v: 480,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-creation-d-entreprise-robert-papin-4608.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-creation-d-entreprise-robert-papin-4608.pdf',
    pg: 'https://infolivres.org/pdfview/la-creation-d-entreprise-robert-papin-4608/',
    d: 'دليل شامل لإنشاء المشروع وإدارته وتطويره: الدراسة المالية وخطة العمل والاستراتيجية.'
  },
  {
    id: 'management-pour-les-nuls', t: 'الإدارة للمبتدئين', tf: 'Le Management Pour les Nuls', a: 'بوب نيلسون', af: 'Bob Nelson',
    c: 'affaires-et-investissements', p: 316, r: 4.4, v: 590,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/le-management-pour-les-nuls-bob-nelson-4609.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/le-management-pour-les-nuls-bob-nelson-4609.pdf',
    pg: 'https://infolivres.org/pdfview/le-management-pour-les-nuls-bob-nelson-4609/',
    d: 'مبادئ الإدارة بلغة مبسطة: التفويض والتحفيز والتواصل وإدارة الفريق وحل المشكلات.'
  },
  {
    id: 'marketing-strategique-operationnel', t: 'التسويق الاستراتيجي والتشغيلي', tf: 'Marketing Stratégique et Opérationnel', a: 'جان-جاك لامبان', af: 'Jean-Jacques Lambin',
    c: 'affaires-et-investissements', p: 598, r: 4.6, v: 410,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/marketing-strategique-et-operationnel-jean-jacques-lambin-4610.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/marketing-strategique-et-operationnel-jean-jacques-lambin-4610.pdf',
    pg: 'https://infolivres.org/pdfview/marketing-strategique-et-operationnel-jean-jacques-lambin-4610/',
    d: 'مرجع جامعي: تحليل الحاجات وتقسيم السوق والتموضع والمزيج التسويقي.'
  },
  {
    id: 'leadership-et-management', t: 'القيادة والإدارة', tf: 'Leadership et Management', a: 'هارفارد بزنس ريفيو', af: 'Harvard Business Review',
    c: 'affaires-et-investissements', p: 214, r: 4.5, v: 520,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/leadership-et-management-harvard-business-review-4611.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/leadership-et-management-harvard-business-review-4611.pdf',
    pg: 'https://infolivres.org/pdfview/leadership-et-management-harvard-business-review-4611/',
    d: 'مقالات مختارة من هارفارد: مينتزبرغ وكوتر وعدد من أبرز كتّاب القيادة.'
  },
  {
    id: 'comprendre-la-finance', t: 'فهم التمويل', tf: 'Comprendre la Finance', a: 'التوثيق الفرنسي', af: 'La Documentation Française',
    c: 'affaires-et-investissements', p: 116, r: 4.3, v: 260,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/comprendre-la-finance-la-documentation-francaise-4612.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/comprendre-la-finance-la-documentation-francaise-4612.pdf',
    pg: 'https://infolivres.org/pdfview/comprendre-la-finance-la-documentation-francaise-4612/',
    d: 'شرح مبسّط للأسواق وأسعار الفائدة والتمويل الموازي والتداول من مختصين.'
  },
  {
    id: 'management-d-equipe', t: 'إدارة الفريق', tf: "Management d'Équipe", a: 'جان-بيير برون', af: 'Jean-Pierre Brun',
    c: 'affaires-et-investissements', p: 185, r: 4.4, v: 300,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/management-d-equipe-jean-pierre-brun-4613.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/management-d-equipe-jean-pierre-brun-4613.pdf',
    pg: 'https://infolivres.org/pdfview/management-d-equipe-jean-pierre-brun-4613/',
    d: 'سبعة روافع لتحسين الرضا والإنتاجية: التقدير والدعم والاحترام وعبء العمل والمشاركة.'
  },
  {
    id: 'plan-marketing-manager', t: 'خطة التسويق للمدير', tf: "Le Plan Marketing à l'Usage du Manager", a: 'فيليب فيلموس', af: 'Philippe Villemus',
    c: 'affaires-et-investissements', p: 242, r: 4.4, v: 240,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/le-plan-marketing-a-l-usage-du-manager-philippe-villemus-4614.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/le-plan-marketing-a-l-usage-du-manager-philippe-villemus-4614.pdf',
    pg: 'https://infolivres.org/pdfview/le-plan-marketing-a-l-usage-du-manager-philippe-villemus-4614/',
    d: 'خطوة بخطوة لبناء خطة تسويق: التشخيص والأهداف والاستراتيجية والمزيج والميزانية.'
  },
  {
    id: 'gerez-mieux-votre-entreprise', t: 'أدِر مؤسستك: التسويق', tf: 'Gérez mieux votre entreprise : Marketing', a: 'منظمة العمل الدولية', af: 'Bureau International du Travail (OIT)',
    c: 'affaires-et-investissements', p: 114, r: 4.2, v: 180,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/gerez-mieux-votre-entreprise-marketing-bureau-international-du-travail-oit-4615.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/gerez-mieux-votre-entreprise-marketing-bureau-international-du-travail-oit-4615.pdf',
    pg: 'https://infolivres.org/pdfview/gerez-mieux-votre-entreprise-marketing-bureau-international-du-travail-oit-4615/',
    d: 'برنامج تدريبي للمشاريع الصغيرة: دراسة السوق والتموضع والاستراتيجية التجارية.'
  },

  /* ================= حاسوب وإعلام آلي ================= */
  {
    id: 'architecture-des-ordinateurs', t: 'بنية الحواسيب', tf: 'Architecture des Ordinateurs', a: 'ف. بيليغريني', af: 'F. Pellegrini',
    c: 'informatique', p: 198, r: 4.6, v: 640,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/architecture-des-ordinateurs-f-pellegrini-4764.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/architecture-des-ordinateurs-f-pellegrini-4764.pdf',
    pg: 'https://infolivres.org/pdfview/architecture-des-ordinateurs-f-pellegrini-4764/',
    d: 'كيف يعمل الحاسوب في الداخل: من الترانزستور إلى الدوائر المدمجة والتمثيل الثنائي.'
  },
  {
    id: 'cours-de-python', t: 'دورة بايثون', tf: 'Cours de Python', a: 'باتريك فوش وبيير بولان', af: 'Patrick Fuchs et Pierre Poulain',
    c: 'informatique', p: 402, r: 4.8, v: 980,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-python-patrick-fuchs-et-pierre-poulain-4765.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-python-patrick-fuchs-et-pierre-poulain-4765.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-python-patrick-fuchs-et-pierre-poulain-4765/',
    d: 'دورة متدرجة لتعلم بايثون من أول سطر إلى المكتبات العلمية، بتمارين عملية.'
  },
  {
    id: 'algorithmique-et-structures', t: 'الخوارزميات وهياكل البيانات', tf: 'Algorithmique et Structures de Données', a: 'باسكال موناس', af: 'Pascal Monasse',
    c: 'informatique', p: 52, r: 4.7, v: 520,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/algorithmique-et-structures-de-donnees-pascal-monasse-4766.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/algorithmique-et-structures-de-donnees-pascal-monasse-4766.pdf',
    pg: 'https://infolivres.org/pdfview/algorithmique-et-structures-de-donnees-pascal-monasse-4766/',
    d: 'هياكل البيانات والترتيب والرسوم والبرمجة الديناميكية في مذكرة مركّزة.'
  },
  {
    id: 'les-reseaux-de-zero', t: 'الشبكات من الصفر', tf: 'Les Réseaux de Zéro', a: 'فنس', af: 'Vince',
    c: 'informatique', p: 449, r: 4.7, v: 730,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/les-reseaux-de-zero-vince-4767.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/les-reseaux-de-zero-vince-4767.pdf',
    pg: 'https://infolivres.org/pdfview/les-reseaux-de-zero-vince-4767/',
    d: 'من الأساسيات إلى البروتوكولات المتقدمة: العتاد والطوبولوجيا ونموذج OSI وTCP/IP.'
  },
  {
    id: 'introduction-cybersecurite', t: 'مدخل إلى الأمن السيبراني', tf: 'Introduction à la Cybersécurité', a: 'cryptosec.org', af: 'cryptosec.org',
    c: 'informatique', p: 91, r: 4.5, v: 390,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-a-la-cybersecurite-cryptosec-org-4768.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-a-la-cybersecurite-cryptosec-org-4768.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-a-la-cybersecurite-cryptosec-org-4768/',
    d: 'الهجمات الواقعية والدفاع المحيطي والتشفير والشبكات الافتراضية وسياسات الأمان.'
  },
  {
    id: 'introduction-machine-learning', t: 'مدخل إلى تعلّم الآلة', tf: 'Introduction au Machine Learning', a: 'كلوي-أغات أزينكوت', af: 'Chloé-Agathe Azencott',
    c: 'informatique', p: 180, r: 4.7, v: 610,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-au-machine-learning-chloe-agathe-azencott-4769.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-au-machine-learning-chloe-agathe-azencott-4769.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-au-machine-learning-chloe-agathe-azencott-4769/',
    d: 'خوارزميات التعلم الآلي: التصنيف والانحدار والشبكات العصبية والتحقق المتقاطع.'
  },
  {
    id: 'bases-de-donnees', t: 'قواعد البيانات: النماذج واللغات', tf: 'Cours de Bases de Données', a: 'فيليب ريجو', af: 'Philippe Rigaux',
    c: 'informatique', p: 303, r: 4.6, v: 450,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-bases-de-donnees-modeles-et-langages-philippe-rigaux-4770.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-bases-de-donnees-modeles-et-langages-philippe-rigaux-4770.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-bases-de-donnees-modeles-et-langages-philippe-rigaux-4770/',
    d: 'النموذج العلائقي وSQL والتطبيع والمعاملات والتزامن في مقرر جامعي محدث.'
  },
  {
    id: 'linux-essentials', t: 'أساسيات لينكس', tf: 'Linux Essentials', a: 'معهد لينكس المهني', af: 'Linux Professional Institute',
    c: 'informatique', p: 459, r: 4.7, v: 690,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/linux-essentials-linux-professional-institute-4771.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/linux-essentials-linux-professional-institute-4771.pdf',
    pg: 'https://infolivres.org/pdfview/linux-essentials-linux-professional-institute-4771/',
    d: 'الكتاب الرسمي: سطر الأوامر ونظام الملفات والصلاحيات والشبكة والأمان.'
  },
  {
    id: 'cours-html-css', t: 'دورة HTML وCSS الكاملة', tf: 'Cours Complet HTML et CSS', a: 'بيير جيرو', af: 'Pierre Giraud',
    c: 'informatique', p: 151, r: 4.6, v: 560,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-complet-html-et-css-pierre-giraud-4772.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-complet-html-et-css-pierre-giraud-4772.pdf',
    pg: 'https://infolivres.org/pdfview/cours-complet-html-et-css-pierre-giraud-4772/',
    d: 'من الصفر إلى تصميم متوافق: الوسوم والنماذج وصندوق CSS والتصميم المتجاوب.'
  },
  {
    id: 'introduction-informatique', t: 'مدخل إلى علم الحاسوب', tf: "Introduction à l'Informatique", a: 'ج. سانتيني و ج.-ك. دوباك', af: 'G. Santini et J.-C. Dubacq',
    c: 'informatique', p: 227, r: 4.5, v: 420,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-a-l-informatique-cours-complet-g-santini-et-j-c-dubacq-4773.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-a-l-informatique-cours-complet-g-santini-et-j-c-dubacq-4773.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-a-l-informatique-cours-complet-g-santini-et-j-c-dubacq-4773/',
    d: 'أسس شاملة: لينكس والترميز الثنائي والعتاد وسكربتات Bash.'
  },

  /* ================= رياضيات ================= */
  {
    id: 'elements-d-algebre', t: 'مبادئ الجبر', tf: "Éléments d'Algèbre", a: 'ليونارد أويلر', af: 'Leonhard Euler',
    c: 'mathematiques', p: 514, r: 4.8, v: 720,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/elements-d-algebre-leonhard-euler-4616.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/elements-d-algebre-leonhard-euler-4616.pdf',
    pg: 'https://infolivres.org/pdfview/elements-d-algebre-leonhard-euler-4616/',
    d: 'عمل مؤسس في الجبر: المعادلات والتحليل غير المحدّد والكسور المستمرة.'
  },
  {
    id: 'elements-de-geometrie', t: 'مبادئ الهندسة', tf: 'Éléments de Géométrie', a: 'أدريان-ماري لوجاندر', af: 'Adrien-Marie Legendre',
    c: 'mathematiques', p: 519, r: 4.7, v: 430,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/elements-de-geometrie-adrien-marie-legendre-4617.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/elements-de-geometrie-adrien-marie-legendre-4617.pdf',
    pg: 'https://infolivres.org/pdfview/elements-de-geometrie-adrien-marie-legendre-4617/',
    d: 'أكثر كتب الهندسة تأثيراً في القرن التاسع عشر: الهندسة المستوية والفضائية ببراهين صارمة.'
  },
  {
    id: 'cours-analyse-cauchy', t: 'دورة التحليل — المدرسة المتعددة التقنيات الملكية', tf: "Cours d'Analyse de l'École Royale Polytechnique", a: 'أوغستان-لوي كوشي', af: 'Augustin-Louis Cauchy',
    c: 'mathematiques', p: 608, r: 4.7, v: 360,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-d-analyse-de-l-ecole-royale-polytechnique-augustin-louis-cauchy-4618.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-d-analyse-de-l-ecole-royale-polytechnique-augustin-louis-cauchy-4618.pdf',
    pg: 'https://infolivres.org/pdfview/cours-d-analyse-de-l-ecole-royale-polytechnique-augustin-louis-cauchy-4618/',
    d: 'أول درس صارم في التحليل الرياضي: المتتاليات المتقاربة والدوال الحقيقية والعقدية.'
  },
  {
    id: 'calcul-des-probabilites', t: 'حساب الاحتمالات', tf: 'Calcul des Probabilités', a: 'هنري بوانكاريه', af: 'Henri Poincaré',
    c: 'mathematiques', p: 348, r: 4.7, v: 400,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/calcul-des-probabilites-henri-poincare-4619.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/calcul-des-probabilites-henri-poincare-4619.pdf',
    pg: 'https://infolivres.org/pdfview/calcul-des-probabilites-henri-poincare-4619/',
    d: 'درس بوانكاريه: مبرهنة برنولي وقانون غاوس وطريقة المربعات الصغرى.'
  },
  {
    id: 'cours-analyse-jordan', t: 'دورة التحليل — المدرسة المتعددة التقنيات', tf: "Cours d'Analyse de l'École Polytechnique", a: 'كامي جوردان', af: 'Camille Jordan',
    c: 'mathematiques', p: 412, r: 4.6, v: 270,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-d-analyse-de-l-ecole-polytechnique-camille-jordan-4620.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-d-analyse-de-l-ecole-polytechnique-camille-jordan-4620.pdf',
    pg: 'https://infolivres.org/pdfview/cours-d-analyse-de-l-ecole-polytechnique-camille-jordan-4620/',
    d: 'دورة كاملة: الحساب التفاضلي والتكاملي ونظرية الدوال.'
  },
  {
    id: 'algebre-exo7', t: 'الجبر — دورة رياضيات السنة الأولى', tf: 'Algèbre — Cours de Mathématiques Première Année', a: 'إكسو7', af: 'Exo7',
    c: 'mathematiques', p: 246, r: 4.6, v: 480,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/algebre-cours-de-mathematiques-premiere-annee-exo7-4621.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/algebre-cours-de-mathematiques-premiere-annee-exo7-4621.pdf',
    pg: 'https://infolivres.org/pdfview/algebre-cours-de-mathematiques-premiere-annee-exo7-4621/',
    d: 'المجموعات والأعداد العقدية والمتعدّدات والجبر الخطي والمصفوفات، مع تمارين.'
  },
  {
    id: 'analyse-exo7', t: 'التحليل — دورة رياضيات السنة الأولى', tf: 'Analyse — Cours de Mathématiques Première Année', a: 'إكسو7', af: 'Exo7',
    c: 'mathematiques', p: 207, r: 4.6, v: 460,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/analyse-cours-de-mathematiques-premiere-annee-exo7-4622.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/analyse-cours-de-mathematiques-premiere-annee-exo7-4622.pdf',
    pg: 'https://infolivres.org/pdfview/analyse-cours-de-mathematiques-premiere-annee-exo7-4622/',
    d: 'الأعداد الحقيقية والمتتاليات والنهايات والاتصال والاشتقاق والتكامل، مع حلول.'
  },
  {
    id: 'geometrie-exo7', t: 'الهندسة', tf: 'Géométrie', a: 'إكسو7', af: 'Exo7',
    c: 'mathematiques', p: 154, r: 4.5, v: 350,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/geometrie-exo7-4623.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/geometrie-exo7-4623.pdf',
    pg: 'https://infolivres.org/pdfview/geometrie-exo7-4623/',
    d: 'المسطرة والفرجار والإنشاءات والانعكاس والمنحنيات والأسطح.'
  },
  {
    id: 'probabilites-et-statistique', t: 'مدخل إلى حساب الاحتمالات والإحصاء', tf: 'Introduction au Calcul des Probabilités et à la Statistique', a: 'جان-فرانسوا دلماس', af: 'Jean-François Delmas',
    c: 'mathematiques', p: 341, r: 4.6, v: 320,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-au-calcul-des-probabilites-et-a-la-statistique-jean-francois-delmas-4624.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-au-calcul-des-probabilites-et-a-la-statistique-jean-francois-delmas-4624.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-au-calcul-des-probabilites-et-a-la-statistique-jean-francois-delmas-4624/',
    d: 'الاحتمال المتقطع والمتغيرات العشوائية والتوزيعات والتقدير والاختبارات الإحصائية.'
  },
  {
    id: 'maths-premiere-annee-hindry', t: 'دورة رياضيات السنة الأولى', tf: 'Cours de Mathématiques Première Année', a: 'مارك إندري', af: 'Marc Hindry',
    c: 'mathematiques', p: 208, r: 4.5, v: 290,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-mathematiques-premiere-annee-marc-hindry-4625.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-mathematiques-premiere-annee-marc-hindry-4625.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-mathematiques-premiere-annee-marc-hindry-4625/',
    d: 'واحد وعشرون فصلاً تجمع الجبر والتحليل والهندسة والمعادلات التفاضلية.'
  },

  /* ================= طب وعلوم صحية ================= */
  {
    id: 'guide-clinique-therapeutique', t: 'الدليل السريري والعلاجي', tf: 'Guide Clinique et Thérapeutique', a: 'أطباء بلا حدود', af: 'Médecins Sans Frontières',
    c: 'medecine', p: 404, r: 4.8, v: 890,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/guide-clinique-et-therapeutique-medecins-sans-frontieres-4714.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/guide-clinique-et-therapeutique-medecins-sans-frontieres-4714.pdf',
    pg: 'https://infolivres.org/pdfview/guide-clinique-et-therapeutique-medecins-sans-frontieres-4714/',
    d: 'مرجع تشخيصي وعلاجي للأمراض التنفسية والهضمية والطفيلية والجرثومية والفيروسية.'
  },
  {
    id: 'medicaments-essentiels', t: 'الأدوية الأساسية: دليل عملي', tf: 'Médicaments Essentiels — Guide Pratique', a: 'أطباء بلا حدود', af: 'Médecins Sans Frontières',
    c: 'medecine', p: 678, r: 4.8, v: 760,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/medicaments-essentiels-guide-pratique-medecins-sans-frontieres-4715.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/medicaments-essentiels-guide-pratique-medecins-sans-frontieres-4715.pdf',
    pg: 'https://infolivres.org/pdfview/medicaments-essentiels-guide-pratique-medecins-sans-frontieres-4715/',
    d: 'دليل دوائي عملي للأطباء والصيادلة: الأدوية الفموية والحقنية واللقاحات والمطهّرات.'
  },
  {
    id: 'surgical-care-district-hospital', t: 'الرعاية الجراحية في مستشفيات المقاطعات', tf: 'Surgical Care at the District Hospital', a: 'منظمة الصحة العالمية', af: 'World Health Organization',
    c: 'medecine', p: 514, r: 4.7, v: 540,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/surgical-care-at-the-district-hospital-world-health-organization-4716.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/surgical-care-at-the-district-hospital-world-health-organization-4716.pdf',
    pg: 'https://infolivres.org/pdfview/surgical-care-at-the-district-hospital-world-health-organization-4716/',
    d: 'مرجع منظمة الصحة العالمية: التخدير والرضوض والطوارئ التوليدية والتقنيات الجراحية.'
  },
  {
    id: 'anatomie-physiologie-humaines', t: 'التشريح ووظائف الأعضاء البشري', tf: 'Anatomie et Physiologie Humaines', a: 'مارسيل بيرار', af: 'Marcel Pirard',
    c: 'medecine', p: 204, r: 4.7, v: 720,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/anatomie-et-physiologie-humaines-marcel-pirard-4717.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/anatomie-et-physiologie-humaines-marcel-pirard-4717.pdf',
    pg: 'https://infolivres.org/pdfview/anatomie-et-physiologie-humaines-marcel-pirard-4717/',
    d: 'العظام والعضلات والجهاز العصبي والدوران والهضم والتنفس، مع رسوم وتمارين.'
  },
  {
    id: 'basic-epidemiology', t: 'أسس علم الأوبئة', tf: 'Basic Epidemiology', a: 'ر. بونيتا وآخرون', af: 'R. Bonita, R. Beaglehole, T. Kjellström',
    c: 'medecine', p: 226, r: 4.5, v: 310,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/basic-epidemiology-r-bonita-r-beaglehole-t-kjellstrom-4718.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/basic-epidemiology-r-bonita-r-beaglehole-t-kjellstrom-4718.pdf',
    pg: 'https://infolivres.org/pdfview/basic-epidemiology-r-bonita-r-beaglehole-t-kjellstrom-4718/',
    d: 'قياس الصحة وأنواع الدراسات والسببية والوقاية والتحرّي المبكر.'
  },
  {
    id: 'textbook-patient-safety', t: 'أمان المريض وإدارة المخاطر السريرية', tf: 'Textbook of Patient Safety and Clinical Risk Management', a: 'ليام دونالدسون وآخرون', af: 'Liam Donaldson, Walter Ricciardi et al.',
    c: 'medecine', p: 493, r: 4.6, v: 260,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/textbook-of-patient-safety-and-clinical-risk-management-liam-donaldson-walter-ricciardi-susan-sheridan-riccardo-tartaglia-4719.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/textbook-of-patient-safety-and-clinical-risk-management-liam-donaldson-walter-ricciardi-susan-sheridan-riccardo-tartaglia-4719.pdf',
    pg: 'https://infolivres.org/pdfview/textbook-of-patient-safety-and-clinical-risk-management-liam-donaldson-walter-ricciardi-susan-sheridan-riccardo-tartaglia-4719/',
    d: 'كتاب مفتوح الوصول عن الأخطاء الطبية وأنظمة الرعاية المتمركزة حول المريض.'
  },
  {
    id: 'general-pathology-made-easy', t: 'الباتولوجيا العامة ببساطة', tf: 'General Pathology Made Easy', a: 'أبوبيدا بالا أبوشريب', af: 'Abuobieda Bala Abusharib',
    c: 'medecine', p: 202, r: 4.5, v: 230,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/general-pathology-made-easy-abuobieda-bala-abusharib-4720.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/general-pathology-made-easy-abuobieda-bala-abusharib-4720.pdf',
    pg: 'https://infolivres.org/pdfview/general-pathology-made-easy-abuobieda-bala-abusharib-4720/',
    d: 'الالتهاب والأورام واضطرابات المناعة والأمراض الجينية والأمراض الاستوائية.'
  },
  {
    id: 'microbiologie-medicale', t: 'الأحياء الدقيقة الطبية', tf: 'Microbiologie Médicale', a: 'د. ويسام عياد', af: 'Dr. AYAD Wissem',
    c: 'medecine', p: 115, r: 4.5, v: 280,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/microbiologie-medicale-dr-ayad-wissem-4721.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/microbiologie-medicale-dr-ayad-wissem-4721.pdf',
    pg: 'https://infolivres.org/pdfview/microbiologie-medicale-dr-ayad-wissem-4721/',
    d: 'الجراثيم الممرضة وطرق التشخيص الجرثومي ومبادئ علم الأوبئة.'
  },
  {
    id: 'cours-soins-infirmiers', t: 'دورة التمريض', tf: 'Cours de Soins Infirmiers', a: 'جامعة كيسانغاني', af: 'Université de Kisangani',
    c: 'medecine', p: 187, r: 4.5, v: 340,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-soins-infirmiers-universite-de-kisangani-4722.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-soins-infirmiers-universite-de-kisangani-4722.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-soins-infirmiers-universite-de-kisangani-4722/',
    d: 'التقنيات العامة والخاصة: التعقيم والعلامات الحيوية والحقن والتسريب والجراحة والأطفال.'
  },
  {
    id: 'epidemiology-baker', t: 'علم الأوبئة', tf: 'Epidemiology', a: 'شارلوت بيكر', af: 'Charlotte Baker',
    c: 'medecine', p: 166, r: 4.4, v: 190,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/epidemiology-charlotte-baker-4723.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/epidemiology-charlotte-baker-4723.pdf',
    pg: 'https://infolivres.org/pdfview/epidemiology-charlotte-baker-4723/',
    d: 'مفاهيم أساسية وأنواع الدراسات والتشخيص والتحرّي، بترخيص المشاع الإبداعي.'
  },

  /* ================= فيزياء ================= */
  {
    id: 'physique-generale', t: 'الفيزياء العامة', tf: 'Physique Générale', a: 'تران مينه تام', af: 'Tran Minh Tâm',
    c: 'physique', p: 409, r: 4.7, v: 640,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/physique-generale-tran-minh-tam-4971.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/physique-generale-tran-minh-tam-4971.pdf',
    pg: 'https://infolivres.org/pdfview/physique-generale-tran-minh-tam-4971/',
    d: 'مقرر جامعي شامل: الميكانيكا والموجات والبصريات والكهرومغناطيسية والفيزياء الحديثة.'
  },
  {
    id: 'mecanique-classique', t: 'دورة الميكانيكا الكلاسيكية', tf: 'Cours de Mécanique Classique', a: 'جيمي روسيل', af: 'Jimmy Roussel',
    c: 'physique', p: 178, r: 4.6, v: 510,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-mecanique-classique-jimmy-roussel-4972.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-mecanique-classique-jimmy-roussel-4972.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-mecanique-classique-jimmy-roussel-4972/',
    d: 'علم الحركة وقوانين نيوتن والطاقة وكمية الحركة والمذبذب والقوى المركزية.'
  },
  {
    id: 'thermodynamique-classique', t: 'دورة الديناميكا الحرارية الكلاسيكية', tf: 'Cours de Thermodynamique Classique', a: 'جيمي روسيل', af: 'Jimmy Roussel',
    c: 'physique', p: 116, r: 4.6, v: 430,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-de-thermodynamique-classique-jimmy-roussel-4973.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-de-thermodynamique-classique-jimmy-roussel-4973.pdf',
    pg: 'https://infolivres.org/pdfview/cours-de-thermodynamique-classique-jimmy-roussel-4973/',
    d: 'الأنظمة والتحولات والمبادئ الأول والثاني والإنتروبيا والآلات الحرارية.'
  },
  {
    id: 'introduction-electromagnetisme', t: 'مدخل إلى الكهرومغناطيسية', tf: "Introduction à l'Électromagnétisme", a: 'معهد فريزنل', af: 'Institut Fresnel',
    c: 'physique', p: 157, r: 4.6, v: 470,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-a-l-electromagnetisme-institut-fresnel-4974.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-a-l-electromagnetisme-institut-fresnel-4974.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-a-l-electromagnetisme-institut-fresnel-4974/',
    d: 'الكهرباء الساكنة والمغناطيسية ومعادلات ماكسويل مع تمارين وتحليل شعاعي.'
  },
  {
    id: 'mecanique-quantique', t: 'الميكانيكا الكمومية: درس وتمارين محلولة', tf: 'Mécanique Quantique — Cours et Exercices Corrigés', a: 'كريستوف تكسييه', af: 'Christophe Texier',
    c: 'physique', p: 360, r: 4.7, v: 580,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/mecanique-quantique-cours-et-exercices-corriges-christophe-texier-4975.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/mecanique-quantique-cours-et-exercices-corriges-christophe-texier-4975.pdf',
    pg: 'https://infolivres.org/pdfview/mecanique-quantique-cours-et-exercices-corriges-christophe-texier-4975/',
    d: 'صياغة ديراك ومعادلة شرودنغر والمذبذب التوافقي والسبين ونظرية الاضطراب.'
  },
  {
    id: 'optique-ondulatoire', t: 'دورة البصريات الموجية', tf: "Cours d'Optique Ondulatoire", a: 'جيمي روسيل', af: 'Jimmy Roussel',
    c: 'physique', p: 102, r: 4.5, v: 320,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-d-optique-ondulatoire-jimmy-roussel-4976.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-d-optique-ondulatoire-jimmy-roussel-4976.pdf',
    pg: 'https://infolivres.org/pdfview/cours-d-optique-ondulatoire-jimmy-roussel-4976/',
    d: 'التداخل وشبكة الحيود ومصفاة فابري-بيرو وانعراج فرونهوفر.'
  },
  {
    id: 'physique-nucleaire', t: 'مدخل إلى الفيزياء النووية', tf: 'Introduction à la Physique Nucléaire', a: 'دامير بوسكوليتش', af: 'Damir Buskulic',
    c: 'physique', p: 95, r: 4.5, v: 280,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-a-la-physique-nucleaire-damir-buskulic-4977.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-a-la-physique-nucleaire-damir-buskulic-4977.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-a-la-physique-nucleaire-damir-buskulic-4977/',
    d: 'بنية النواة والنشاط الإشعاعي والتفاعلات النووية والانشطار والاندماج.'
  },
  {
    id: 'relativite-generale-debutants', t: 'النسبية العامة للمبتدئين', tf: 'Relativité Générale pour Débutants', a: 'ميشيل لو بيلاك', af: 'Michel Le Bellac',
    c: 'physique', p: 68, r: 4.6, v: 390,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/relativite-generale-pour-debutants-michel-le-bellac-4978.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/relativite-generale-pour-debutants-michel-le-bellac-4978.pdf',
    pg: 'https://infolivres.org/pdfview/relativite-generale-pour-debutants-michel-le-bellac-4978/',
    d: 'مدخل دون شروط مسبقة: مبدأ التكافؤ وعلم الكون والثقوب السوداء.'
  },
  {
    id: 'electronique-numerique', t: 'دورة الإلكترونيات الرقمية', tf: "Cours d'Électronique Numérique", a: 'جوليان بوستيلو', af: 'Julien Bustillo',
    c: 'physique', p: 91, r: 4.5, v: 300,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-d-electronique-numerique-julien-bustillo-4979.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-d-electronique-numerique-julien-bustillo-4979.pdf',
    pg: 'https://infolivres.org/pdfview/cours-d-electronique-numerique-julien-bustillo-4979/',
    d: 'المنطق التفاضلي وجبر بوول وجداول كارنو والعدادات والآلات المنطقية.'
  },
  {
    id: 'cours-d-acoustique', t: 'دورة الصوتيات', tf: "Cours d'Acoustique", a: 'أ. زكريا لفضيلي', af: 'Pr. Zakaria Lafdaili',
    c: 'physique', p: 147, r: 4.4, v: 220,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/cours-d-acoustique-pr-zakaria-lafdaili-4980.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/cours-d-acoustique-pr-zakaria-lafdaili-4980.pdf',
    pg: 'https://infolivres.org/pdfview/cours-d-acoustique-pr-zakaria-lafdaili-4980/',
    d: 'معادلات الموجات الصوتية وصوتيات القاعات والعزل الصوتي وتطبيقات هندسية.'
  },

  /* ================= علم النفس ================= */
  {
    id: 'introduction-a-la-psychanalyse', t: 'مدخل إلى التحليل النفسي', tf: 'Introduction à la Psychanalyse', a: 'سيغموند فرويد', af: 'Sigmund Freud',
    c: 'psychologie', p: 327, r: 4.7, v: 810,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/introduction-a-la-psychanalyse-sigmund-freud-4704.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/introduction-a-la-psychanalyse-sigmund-freud-4704.pdf',
    pg: 'https://infolivres.org/pdfview/introduction-a-la-psychanalyse-sigmund-freud-4704/',
    d: 'ثمانية وعشرون درساً مؤسساً: زلات اللسان وتفسير الأحلام ونظرية العصاب.'
  },
  {
    id: 'psychologie-des-foules', t: 'سيكولوجيا الجماهير', tf: 'Psychologie des Foules', a: 'غوستاف لوبون', af: 'Gustave Le Bon',
    c: 'psychologie', p: 125, r: 4.6, v: 690,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/psychologie-des-foules-gustave-le-bon-4705.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/psychologie-des-foules-gustave-le-bon-4705.pdf',
    pg: 'https://infolivres.org/pdfview/psychologie-des-foules-gustave-le-bon-4705/',
    d: 'كيف تفكر الجماعة وكيف تُقاد؟ نص مؤسس في علم النفس الاجتماعي منذ 1895.'
  },
  {
    id: 'criminologie-actuelle', t: 'علم الإجرام المعاصر', tf: 'Criminologie Actuelle', a: 'موريس كوسون', af: 'Maurice Cusson',
    c: 'psychologie', p: 323, r: 4.5, v: 340,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/criminologie-actuelle-maurice-cusson-4706.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/criminologie-actuelle-maurice-cusson-4706.pdf',
    pg: 'https://infolivres.org/pdfview/criminologie-actuelle-maurice-cusson-4706/',
    d: 'نظريات الجريمة والوقاية والضبط الاجتماعي في تركيب أكاديمي حديث.'
  },
  {
    id: 'psychologie-sportive', t: 'مقالات في سيكولوجيا الرياضة', tf: 'Essais de Psychologie Sportive', a: 'بيير دي كوبيرتان', af: 'Pierre de Coubertin',
    c: 'psychologie', p: 183, r: 4.3, v: 210,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/essais-de-psychologie-sportive-pierre-de-coubertin-4707.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/essais-de-psychologie-sportive-pierre-de-coubertin-4707.pdf',
    pg: 'https://infolivres.org/pdfview/essais-de-psychologie-sportive-pierre-de-coubertin-4707/',
    d: 'أول كتاب في سيكولوجيا الرياضة (1913): العلاقة بين الجهد البدني والنفسي والأخلاقي.'
  },
  {
    id: 'la-depression', t: 'الاكتئاب: دليل الفهم والخروج', tf: 'La Dépression — En Savoir Plus pour en Sortir', a: 'المعهد الوطني للتثقيف الصحي (فرنسا)', af: 'INPES',
    c: 'psychologie', p: 92, r: 4.5, v: 380,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-depression-en-savoir-plus-pour-en-sortir-inpes-4708.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-depression-en-savoir-plus-pour-en-sortir-inpes-4708.pdf',
    pg: 'https://infolivres.org/pdfview/la-depression-en-savoir-plus-pour-en-sortir-inpes-4708/',
    d: 'دليل رسمي: الأعراض والعلاجات المتاحة وموارد المساعدة، بقلم أطباء نفسيين.'
  },
  {
    id: 'psychologie-developpement-enfant', t: 'سيكولوجيا نموّ الطفل', tf: "Psychologie et Développement de l'Enfant", a: 'سيميا – بلاد اللوار', af: 'CEMEA-Pays de la Loire',
    c: 'psychologie', p: 86, r: 4.5, v: 320,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/psychologie-et-developpement-de-l-enfant-cemea-pays-de-la-loire-4709.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/psychologie-et-developpement-de-l-enfant-cemea-pays-de-la-loire-4709.pdf',
    pg: 'https://infolivres.org/pdfview/psychologie-et-developpement-de-l-enfant-cemea-pays-de-la-loire-4709/',
    d: 'نظريات بياجيه ووالون وبولبي، ومراحل النمو الحركي والوجداني والمعرفي.'
  },
  {
    id: 'la-psychologie-sociale', t: 'علم النفس الاجتماعي', tf: 'La Psychologie Sociale', a: 'كارمن إغليسياس', af: 'Carmen Iglesias',
    c: 'psychologie', p: 119, r: 4.5, v: 290,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-psychologie-sociale-carmen-iglesias-4710.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-psychologie-sociale-carmen-iglesias-4710.pdf',
    pg: 'https://infolivres.org/pdfview/la-psychologie-sociale-carmen-iglesias-4710/',
    d: 'نظريات التأثير وديناميكية الجماعات والاتجاهات والتمثلات الاجتماعية.'
  },
  {
    id: 'la-psychocriminologie', t: 'علم الإجرام النفسي', tf: 'La Psychocriminologie', a: 'ديان كازوني ولويس برونيه', af: 'Dianne Casoni et Louis Brunet',
    c: 'psychologie', p: 156, r: 4.4, v: 240,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-psychocriminologie-dianne-casoni-et-louis-brunet-4711.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-psychocriminologie-dianne-casoni-et-louis-brunet-4711.pdf',
    pg: 'https://infolivres.org/pdfview/la-psychocriminologie-dianne-casoni-et-louis-brunet-4711/',
    d: 'مقاربة تحليلية نفسية للانحراف: العنف الزوجي والسرقة والجريمة.'
  },
  {
    id: 'la-foule-criminelle', t: 'الجماعة الإجرامية', tf: 'La Foule Criminelle', a: 'سكيبيو سيغيله', af: 'Scipio Sighele',
    c: 'psychologie', p: 268, r: 4.3, v: 170,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-foule-criminelle-scipio-sighele-4712.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-foule-criminelle-scipio-sighele-4712.pdf',
    pg: 'https://infolivres.org/pdfview/la-foule-criminelle-scipio-sighele-4712/',
    d: 'دراسة رائدة (1901) عن تحوّل الفرد داخل الجماعة والمسؤولية الجماعية.'
  },
  {
    id: 'psychanalyse-du-feu', t: 'التحليل النفسي للنار', tf: 'La Psychanalyse du Feu', a: 'غاستون باشلار', af: 'Gaston Bachelard',
    c: 'psychologie', p: 126, r: 4.5, v: 260,
    cv: 'https://cdn.infolivres.org/pdf-thumbnails/la-psychanalyse-du-feu-gaston-bachelard-4713.webp',
    pdf: 'https://pdf.infolivres.org/FR/PDF/la-psychanalyse-du-feu-gaston-bachelard-4713.pdf',
    pg: 'https://infolivres.org/pdfview/la-psychanalyse-du-feu-gaston-bachelard-4713/',
    d: 'تأمل فلسفي في علاقتنا بالنار وعقدة بروميثيوس وامبردوكل بين الوهم والعلم.'
  }
];
