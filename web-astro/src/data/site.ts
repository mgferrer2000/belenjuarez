export const SITE_URL = 'https://belenjuarez.com';
export const SITE_NAME = 'Belén Juárez';
export const DEFAULT_SOCIAL_IMAGE = '/images/sobrebelen/IMG_0314.JPEG';

export const LOCALES = ['es', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const localeDetails = {
  es: {
    code: 'es',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    name: 'Español',
    shortName: 'ES',
  },
  fr: {
    code: 'fr',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    name: 'Français',
    shortName: 'FR',
  },
} as const;

export const navigation = {
  es: [
    { label: 'Inicio', path: '' },
    { label: 'Sobre Belén', path: 'sobre-belen', children: [
      { label: 'Biografía', path: 'sobre-belen' },
      { label: 'Currículum literario y artístico', path: 'sobre-belen/curriculum-literario-artistico' },
      { label: 'Currículum científico', path: 'sobre-belen/curriculum-cientifico' },
    ] },
    { label: 'Obra literaria', path: 'obra-literaria', children: [
      { label: 'Libros', path: 'obra-literaria/libros' },
      { label: 'Reseñas sobre libros', path: 'obra-literaria/resenas-libros' },
      { label: 'Poemas en antologías y revistas', path: 'obra-literaria/antologias' },
      { label: 'Plaquettes', path: 'obra-literaria/plaquettes' },
      { label: 'Relatos', path: 'obra-literaria/relatos' },
      { label: 'Crítica literaria', path: 'obra-literaria/critica' },
      { label: 'Crítica libros legado andalusí', path: 'obra-literaria/critica-andalusi' },
      { label: 'Prólogos y capítulos de libro', path: 'obra-literaria/prologos' },
      { label: 'Traducción', path: 'obra-literaria/traduccion' },
      { label: 'Entrevistas a escritores', path: 'obra-literaria/entrevistas' },
    ] },
    { label: 'Poesía visual', path: 'poesia-visual' },
    { label: 'Arte', path: 'arte', children: [
      { label: 'Cuadros', path: 'arte/cuadros' }, { label: 'Ilustración de libros', path: 'arte/ilustracion' }, { label: 'Crítica artística', path: 'arte/critica' },
    ] },
    { label: 'Música', path: 'musica', children: [
      { label: 'Música y poesía', path: 'musica/poesia' }, { label: 'Horizonte de Sucesos', path: 'musica/horizonte' }, { label: 'Vídeos', path: 'musica/videos' },
    ] },
    { label: 'Diario abierto', path: 'blog', children: [
      { label: 'Diario abierto', path: 'blog' }, { label: 'Reseñas literarias', path: 'resenas-literarias' },
    ] },
    { label: 'Contacto', path: 'contacto' },
  ],
  fr: [
    { label: 'Accueil', path: '' },
    { label: 'À propos de Belén', path: 'sobre-belen', children: [
      { label: 'Biographie', path: 'sobre-belen' },
      { label: 'Curriculum littéraire et artistique', path: 'sobre-belen/curriculum-literario-artistico' },
      { label: 'Curriculum scientifique', path: 'sobre-belen/curriculum-cientifico' },
    ] },
    { label: 'Œuvre littéraire', path: 'obra-literaria', children: [
      { label: 'Livres', path: 'obra-literaria/libros' },
      { label: 'Critiques de livres', path: 'obra-literaria/resenas-libros' },
      { label: 'Poèmes en anthologies et revues', path: 'obra-literaria/antologias' },
      { label: 'Plaquettes', path: 'obra-literaria/plaquettes' },
      { label: 'Récits', path: 'obra-literaria/relatos' },
      { label: 'Critique littéraire', path: 'obra-literaria/critica' },
      { label: 'Critique des livres de l’héritage andalou', path: 'obra-literaria/critica-andalusi' },
      { label: 'Préfaces et chapitres d’ouvrages', path: 'obra-literaria/prologos' },
      { label: 'Traduction', path: 'obra-literaria/traduccion' },
      { label: 'Entretiens avec des écrivains', path: 'obra-literaria/entrevistas' },
    ] },
    { label: 'Poésie visuelle', path: 'poesia-visual' },
    { label: 'Art', path: 'arte', children: [
      { label: 'Peintures', path: 'arte/cuadros' }, { label: 'Illustration de livres', path: 'arte/ilustracion' }, { label: 'Critique artistique', path: 'arte/critica' },
    ] },
    { label: 'Musique', path: 'musica', children: [
      { label: 'Musique et poésie', path: 'musica/poesia' }, { label: 'Horizonte de Sucesos', path: 'musica/horizonte' }, { label: 'Vidéos', path: 'musica/videos' },
    ] },
    { label: 'Journal ouvert', path: 'blog', children: [
      { label: 'Journal ouvert', path: 'blog' }, { label: 'Critiques littéraires', path: 'resenas-literarias' },
    ] },
    { label: 'Contact', path: 'contacto' },
  ],
} as const;

export const homeContent = {
  es: {
    title: 'La arquitectura del verso',
    titleLineOne: 'La arquitectura',
    titleLineTwo: 'del verso',
    imageAlt: 'Textura de fondo con libros',
    seoTitle: 'Belén Juárez | Poesía, literatura, arte y música',
    description:
      'Web oficial de Belén Juárez: poesía contemporánea, libros, crítica literaria, poesía visual, arte, música y trayectoria científica.',
    disciplines: 'Poesía • Música • Arte Visual',
    firstQuote:
      'Escribo para encontrar el nombre exacto de las cosas que no existen hasta que se nombran',
    secondQuote:
      'Siempre habrá un verso libre y entregado que nazca de la garganta del poeta, para todo aquel que le sostenga la mirada',
    explore: 'Explorar la obra',
    identityTitle: 'Una identidad entre poesía, arte y ciencia',
    identityText:
      'La obra de Belén Juárez reúne creación poética, pensamiento literario, imagen, música y una trayectoria científica vinculada a la microbiología.',
  },
  fr: {
    title: 'L’architecture du vers',
    titleLineOne: 'L’architecture',
    titleLineTwo: 'du vers',
    imageAlt: 'Texture de fond composée de livres',
    seoTitle: 'Belén Juárez | Poésie, littérature, art et musique',
    description:
      'Site officiel de Belén Juárez : poésie contemporaine, livres, critique littéraire, poésie visuelle, art, musique et parcours scientifique.',
    disciplines: 'Poésie • Musique • Art visuel',
    firstQuote:
      'J’écris pour trouver le nom exact des choses qui n’existent pas avant d’être nommées',
    secondQuote:
      'Il y aura toujours un vers libre et offert, né de la gorge du poète, pour quiconque soutiendra son regard',
    explore: 'Découvrir l’œuvre',
    identityTitle: 'Une identité entre poésie, art et science',
    identityText:
      'L’œuvre de Belén Juárez réunit création poétique, pensée littéraire, image, musique et un parcours scientifique lié à la microbiologie.',
  },
} as const;

export const aboutContent = {
  es: {
    eyebrow: 'Biografía',
    title: 'Sobre Belén Juárez',
    seoTitle: 'Biografía de Belén Juárez | Poeta, artista y científica',
    description:
      'Biografía de Belén Juárez, poeta nacida en París, artista visual y profesora titular de Microbiología de la Universidad de Granada.',
    introduction:
      'Belén Juárez nace en París y reside actualmente en Granada. Doctora en Farmacia, es profesora Titular de Microbiología de la Universidad de Granada. Poeta desde temprana edad.',
    paragraphs: [
      'Su trayectoria conecta poesía, literatura, pintura, ilustración, traducción y divulgación cultural. Ha participado en exposiciones, antologías, revistas y encuentros poéticos nacionales e internacionales.',
      'Es autora de Destierro en cuatro ángulos, La Noche de Ayer y Horizonte de Sucesos. Este último proyecto extiende la palabra poética hacia la música y la creación audiovisual.',
    ],
  },
  fr: {
    eyebrow: 'Biographie',
    title: 'À propos de Belén Juárez',
    seoTitle: 'Biographie de Belén Juárez | Poète, artiste et scientifique',
    description:
      'Biographie de Belén Juárez, poète née à Paris, artiste visuelle et professeure titulaire de microbiologie à l’Université de Grenade.',
    introduction:
      'Belén Juárez est née à Paris et vit aujourd’hui à Grenade. Docteure en pharmacie, elle est professeure titulaire de microbiologie à l’Université de Grenade. Elle écrit de la poésie depuis son plus jeune âge.',
    paragraphs: [
      'Son parcours relie poésie, littérature, peinture, illustration, traduction et diffusion culturelle. Elle a participé à des expositions, anthologies, revues et rencontres poétiques nationales et internationales.',
      'Elle est l’autrice de Destierro en cuatro ángulos, La Noche de Ayer et Horizonte de Sucesos. Ce dernier projet prolonge la parole poétique vers la musique et la création audiovisuelle.',
    ],
  },
} as const;

export const sectionContent = {
  'obra-literaria': {
    es: {
      title: 'Obra literaria',
      description: 'Libros, poemas, relatos, crítica literaria, prólogos, traducciones y entrevistas de Belén Juárez.',
      introduction: 'Un recorrido por los libros, publicaciones y trabajos literarios de Belén Juárez.',
    },
    fr: {
      title: 'Œuvre littéraire',
      description: 'Livres, poèmes, récits, critique littéraire, préfaces, traductions et entretiens de Belén Juárez.',
      introduction: 'Un parcours à travers les livres, publications et travaux littéraires de Belén Juárez.',
    },
  },
  'poesia-visual': {
    es: {
      title: 'Poesía visual',
      description: 'Poesía visual de Belén Juárez: obras donde la palabra, la composición y la imagen construyen un mismo lenguaje.',
      introduction: 'Palabra e imagen se encuentran en una obra visual de raíz poética.',
    },
    fr: {
      title: 'Poésie visuelle',
      description: 'Poésie visuelle de Belén Juárez : des œuvres où le mot, la composition et l’image construisent un même langage.',
      introduction: 'Le mot et l’image se rencontrent dans une œuvre visuelle d’origine poétique.',
    },
  },
  arte: {
    es: {
      title: 'Arte',
      description: 'Pintura, dibujo, ilustración y crítica artística en la obra de Belén Juárez.',
      introduction: 'Rostros, trazos e ilustraciones nacidos del diálogo con la poesía.',
    },
    fr: {
      title: 'Art',
      description: 'Peinture, dessin, illustration et critique artistique dans l’œuvre de Belén Juárez.',
      introduction: 'Visages, traits et illustrations nés du dialogue avec la poésie.',
    },
  },
  musica: {
    es: {
      title: 'Música',
      description: 'Música, poesía y creación audiovisual en el proyecto Horizonte de Sucesos de Belén Juárez.',
      introduction: 'El verso abandona el papel para respirar al son de la música y la voz.',
    },
    fr: {
      title: 'Musique',
      description: 'Musique, poésie et création audiovisuelle dans le projet Horizonte de Sucesos de Belén Juárez.',
      introduction: 'Le vers quitte le papier pour respirer au rythme de la musique et de la voix.',
    },
  },
  blog: {
    es: {
      title: 'Diario abierto',
      description: 'Recitales, encuentros poéticos, poemas y textos inéditos publicados por Belén Juárez.',
      introduction: 'Últimas participaciones, encuentros y textos publicados desde Notion.',
    },
    fr: {
      title: 'Journal ouvert',
      description: 'Récitals, rencontres poétiques, poèmes et textes inédits publiés par Belén Juárez.',
      introduction: 'Dernières participations, rencontres et publications issues de Notion.',
    },
  },
  'resenas-literarias': {
    es: {
      title: 'Reseñas literarias',
      description: 'Lecturas críticas de libros y obras de otros autores escritas por Belén Juárez.',
      introduction: 'Crítica y lectura de libros de otros autores.',
    },
    fr: {
      title: 'Critiques littéraires',
      description: 'Lectures critiques de livres et d’œuvres d’autres auteurs écrites par Belén Juárez.',
      introduction: 'Critique et lecture de livres d’autres auteurs.',
    },
  },
  contacto: {
    es: {
      title: 'Contacto',
      description: 'Contacto profesional y cultural con Belén Juárez.',
      introduction: 'Para propuestas editoriales, culturales, artísticas o académicas.',
    },
    fr: {
      title: 'Contact',
      description: 'Contact professionnel et culturel avec Belén Juárez.',
      introduction: 'Pour des propositions éditoriales, culturelles, artistiques ou universitaires.',
    },
  },
} as const;

export type SectionSlug = keyof typeof sectionContent;
