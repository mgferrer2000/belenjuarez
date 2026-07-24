import type { Locale } from './site';

export const literaryLanding = {
  es: {
    eyebrow: 'La palabra escrita', title: 'Obra literaria',
    seoTitle: 'Obra literaria de Belén Juárez | Poesía, relatos y crítica',
    description: 'Obra literaria de Belén Juárez: libros de poesía, poemas en antologías, relatos, crítica literaria, reseñas, prólogos, traducciones y entrevistas.',
    introduction: 'Libros, poemas, relatos y lecturas críticas forman un archivo literario donde la escritura dialoga con otras voces, otras lenguas y otras disciplinas.',
    explore: 'Explorar sección',
    sections: [
      { path: 'libros', number: '01', title: 'Libros', text: 'Los tres poemarios publicados por Belén Juárez y sus proyectos editoriales.', image: '/images/libros/Horizonte _de_Sucesos.JPG' },
      { path: 'resenas-libros', number: '02', title: 'Reseñas sobre libros', text: 'Lecturas críticas y recepción de la obra poética de Belén Juárez.', image: '/images/resenas/ideal-horizonte.png' },
      { path: 'antologias', number: '03', title: 'Poemas en antologías y revistas', text: 'Poemas publicados en volúmenes colectivos, revistas y proyectos literarios.', image: '/images/antologias/acta_mujeres_poetas.jpg' },
      { path: 'plaquettes', number: '04', title: 'Plaquettes', text: 'Ediciones breves donde palabra e imagen comparten un mismo espacio.', image: '/images/Plaquettes/Plaquette_portada.jpeg' },
      { path: 'relatos', number: '05', title: 'Relatos', text: 'Narrativa breve y textos en prosa de raíz poética.' },
      { path: 'critica', number: '06', title: 'Crítica literaria', text: 'Artículos, lecturas y reseñas de obras de otros autores.' },
      { path: 'critica-andalusi', number: '07', title: 'Crítica libros legado andalusí', text: 'Libros reseñados para la revista El Legado Andalusí.' },
      { path: 'prologos', number: '08', title: 'Prólogos y capítulos de libro', text: 'Textos introductorios, estudios y colaboraciones en obras colectivas.', image: '/images/prologos/extramuros-31-portada.jpeg' },
      { path: 'traduccion', number: '09', title: 'Traducción', text: 'Poemas en español y francés presentados cara a cara.', image: '/images/traduccion/las-noches-azules-del-alma-portada.jpeg' },
      { path: 'entrevistas', number: '10', title: 'Entrevistas a escritores', text: 'Conversaciones con poetas y escritores sobre creación, lenguaje y memoria.' },
    ],
  },
  fr: {
    eyebrow: 'La parole écrite', title: 'Œuvre littéraire',
    seoTitle: 'Œuvre littéraire de Belén Juárez | Poésie, récits et critique',
    description: 'Œuvre littéraire de Belén Juárez : recueils de poésie, poèmes en anthologies, récits, critique littéraire, comptes rendus, préfaces, traductions et entretiens.',
    introduction: 'Livres, poèmes, récits et lectures critiques composent des archives littéraires où l’écriture dialogue avec d’autres voix, d’autres langues et d’autres disciplines.',
    explore: 'Explorer la section',
    sections: [
      { path: 'libros', number: '01', title: 'Livres', text: 'Les trois recueils de poésie publiés par Belén Juárez et ses projets éditoriaux.', image: '/images/libros/Horizonte _de_Sucesos.JPG' },
      { path: 'resenas-libros', number: '02', title: 'Critiques de livres', text: 'Lectures critiques et réception de l’œuvre poétique de Belén Juárez.', image: '/images/resenas/ideal-horizonte.png' },
      { path: 'antologias', number: '03', title: 'Poèmes en anthologies et revues', text: 'Poèmes publiés dans des ouvrages collectifs, des revues et des projets littéraires.', image: '/images/antologias/acta_mujeres_poetas.jpg' },
      { path: 'plaquettes', number: '04', title: 'Plaquettes', text: 'Éditions brèves où le mot et l’image partagent un même espace.', image: '/images/Plaquettes/Plaquette_portada.jpeg' },
      { path: 'relatos', number: '05', title: 'Récits', text: 'Narration brève et textes en prose d’origine poétique.' },
      { path: 'critica', number: '06', title: 'Critique littéraire', text: 'Articles, lectures et comptes rendus d’œuvres d’autres auteurs.' },
      { path: 'critica-andalusi', number: '07', title: 'Critique des livres de l’héritage andalou', text: 'Livres recensés pour la revue El Legado Andalusí.' },
      { path: 'prologos', number: '08', title: 'Préfaces et chapitres d’ouvrages', text: 'Textes liminaires, études et collaborations à des œuvres collectives.', image: '/images/prologos/extramuros-31-portada.jpeg' },
      { path: 'traduccion', number: '09', title: 'Traduction', text: 'Poèmes en espagnol et en français présentés en regard.', image: '/images/traduccion/las-noches-azules-del-alma-portada.jpeg' },
      { path: 'entrevistas', number: '10', title: 'Entretiens avec des écrivains', text: 'Conversations avec des poètes et écrivains autour de la création, du langage et de la mémoire.' },
    ],
  },
} as const satisfies Record<Locale, object>;
