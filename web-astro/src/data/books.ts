import type { Locale } from './site';

export type BookEntry = {
  id: string;
  title: string;
  year: string;
  publisher: string;
  publisherUrl: string;
  cover: string;
  featured?: boolean;
  description: string;
  extendedDescription?: string;
  backCoverVerses?: readonly string[];
  resources?: readonly { label: string; url: string }[];
};

const sharedBooks = {
  horizonte: {
    id: 'horizonte-de-sucesos',
    title: 'Horizonte de Sucesos',
    year: '2026',
    publisher: 'Huerga & Fierro',
    publisherUrl: 'https://huergayfierro.com/',
    cover: '/images/libros/Horizonte _de_Sucesos.JPG',
    featured: true,
    backCoverVerses: [
      'Memoria de tantos genes,',
      'como impar susurro de un temido presagio,',
      'con el hostil encuentro vigilante,',
      'son sus aullidos de rimas y albas tristezas,',
      'las únicas flechas contra el viento en aquel plenilunio,',
      'contra la eterna batida de cepos y asechanzas,',
      'grito en la noche de odas,',
      'como único testigo de aquellas espléndidas colinas.',
    ],
  },
  destierro: {
    id: 'destierro-en-cuatro-angulos',
    title: 'Destierro en cuatro ángulos',
    year: '1999',
    publisher: 'Editorial Devenir',
    publisherUrl: 'https://www.devenir.es/',
    cover: '/images/libros/destierro_en_cuatro_angulos.jpg',
    resources: [{ label: 'Libro completo', url: '/downloads/destierro_en_cuatro_angulos.pdf' }],
  },
  noche: {
    id: 'la-noche-de-ayer',
    title: 'La Noche de Ayer',
    year: '2001',
    publisher: 'Editorial Alhulia',
    publisherUrl: 'https://www.alhulia.es/es/',
    cover: '/images/libros/la_noche_de_ayer.jpg',
    resources: [
      { label: 'Prólogo', url: '/downloads/Prologo_de_Antonio_Enrique-La_noche_de _ayer.pdf' },
      { label: 'Selección de poemas', url: '/downloads/Seleccion_poemas-la_noche_de_ayer.pdf' },
    ],
  },
} as const;

export const booksContent: Record<Locale, {
  sectionTitle: string;
  seoTitle: string;
  description: string;
  latest: string;
  publisherLinks: Record<string, string>;
  backCoverLabel: string;
  coverAlt: (title: string) => string;
  books: BookEntry[];
}> = {
  es: {
    sectionTitle: 'Obra Literaria',
    seoTitle: 'Libros de poesía de Belén Juárez | Obra publicada',
    description: 'Libros de poesía publicados por Belén Juárez: Horizonte de Sucesos, Destierro en cuatro ángulos y La Noche de Ayer.',
    latest: 'Última Publicación',
    publisherLinks: {
      'horizonte-de-sucesos': 'Web de Huerga y Fierro editores',
      'destierro-en-cuatro-angulos': 'Web de Editorial Devenir',
      'la-noche-de-ayer': 'Web de Editorial Alhulia',
    },
    backCoverLabel: 'Contraportada',
    coverAlt: (title) => `Portada de ${title}`,
    books: [
      {
        ...sharedBooks.horizonte,
        description: 'Tras un largo silencio lírico de casi veinte años, Belén ha retomado la poesía con su nuevo libro "Horizonte de Sucesos".',
        extendedDescription: 'Este libro es un profundo diálogo entre la poesía y el poeta. Se ha estructurado con poemas que siguen la secuencia de Fibonacci, poemas de 34-21-13-8-5-3-2-1-1 versos que se repiten en cada capítulo. Esta secuencia es la que ordena todas las proporciones del mundo real que conocemos, de ahí mi elección. Hablar de poesía no es hablar de versos, vivir la poesía transciende más allá del propio entendimiento, más allá de nuestros deseos o motivos. Poeta es aquel que se entrega incondicionalmente a la escritura sin saber, en numerosas ocasiones, por qué ha escrito un texto que se ha desviado de sus intenciones. Hablamos del inconsciente como posible razón, pero tal vez sea algo más que no percibimos.',
      },
      {
        ...sharedBooks.destierro,
        description: 'Primer libro publicado en 1999, en la Editorial Devenir. El libro está dividido en cuatro capítulos Tierra, Agua, Aire y Fuego donde se repiten los títulos de los poemas. De tal forma que se puede leer de forma lineal (por capítulos) o tomando los poemas de igual título de cada capítulo convirtiéndose en un único poema deslizándose por los cuatro elementos. En palabras de Antonio Enrique (Turia, nº 53) «El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran).» La temática gira en torno al tiempo donde se sostiene la vida, y todas las miserias que en ella acontecen: El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes.',
      },
      {
        ...sharedBooks.noche,
        description: 'La Noche de Ayer, segundo libro de Belén, presenta una estructura dividida en tres tiempos con diez poemas cada uno. La temática del texto alude a un Pasado (el de cualquier persona) entretejido en un Presente donde los versos llegan con tal fuerza que se podría confundir con un caos lingüístico. No es así. El equilibrio lingüístico es. Existen recuerdos que se mezclan en el plano del Presente como imágenes superpuestas de una misma realidad pasada. El concepto de Espacio/Tiempo que entendemos en el mundo en que vivimos, son variables no constantes en otras dimensiones universales. De ahí que este poemario sea, tal vez, tan críptico; procede del subconsciente y de la memoria del poeta. De esa memoria donde unos niños fueron obligados a caminar por sendas diferentes.',
      },
    ],
  },
  fr: {
    sectionTitle: 'Œuvre littéraire',
    seoTitle: 'Livres de poésie de Belén Juárez | Œuvre publiée',
    description: 'Livres de poésie publiés par Belén Juárez : Horizonte de Sucesos, Destierro en cuatro ángulos et La Noche de Ayer.',
    latest: 'Dernière publication',
    publisherLinks: {
      'horizonte-de-sucesos': 'Site des éditions Huerga y Fierro',
      'destierro-en-cuatro-angulos': 'Site des éditions Devenir',
      'la-noche-de-ayer': 'Site des éditions Alhulia',
    },
    backCoverLabel: 'Quatrième de couverture',
    coverAlt: (title) => `Couverture de ${title}`,
    books: [
      {
        ...sharedBooks.horizonte,
        description: 'Après un long silence lyrique de près de vingt ans, Belén renoue avec la poésie dans son nouveau livre « Horizonte de Sucesos ».',
        extendedDescription: 'Ce livre constitue un dialogue profond entre la poésie et la poète. Il est composé de poèmes qui suivent la suite de Fibonacci : 34-21-13-8-5-3-2-1-1 vers, selon une séquence répétée dans chaque chapitre. Cette suite ordonne toutes les proportions du monde réel que nous connaissons, d’où mon choix. Parler de poésie ne revient pas à parler de vers : vivre la poésie dépasse l’entendement lui-même, nos désirs et nos motifs. Le poète est celui qui se livre sans condition à l’écriture sans toujours savoir pourquoi le texte écrit s’est écarté de ses intentions. Nous évoquons l’inconscient comme raison possible, mais il s’agit peut-être de quelque chose d’autre que nous ne percevons pas.',
      },
      {
        ...sharedBooks.destierro,
        resources: [{ label: 'Livre complet', url: '/downloads/destierro_en_cuatro_angulos.pdf' }],
        description: 'Premier livre publié en 1999 aux éditions Devenir. L’ouvrage se divise en quatre chapitres, Terre, Eau, Air et Feu, dans lesquels les titres des poèmes se répètent. Il peut ainsi se lire de manière linéaire, chapitre après chapitre, ou en réunissant les poèmes de même titre de chaque chapitre, qui deviennent alors un seul poème traversant les quatre éléments. Selon Antonio Enrique (Turia, nº 53) : « Le livre tourne ainsi sur lui-même et se déplace en ellipse : il possède des axes de rotation, dans ses poèmes, et de translation, dans les parties qui les structurent. » Les thèmes gravitent autour du temps qui soutient la vie et de toutes les misères qui s’y produisent : le temps et la désintégration de tout ce qui vit, la vanité des passions, la condition d’exil de l’être humain, la tentation de la violence et l’incapacité radicale à jouir comptent parmi ses motifs récurrents.',
      },
      {
        ...sharedBooks.noche,
        resources: [
          { label: 'Préface', url: '/downloads/Prologo_de_Antonio_Enrique-La_noche_de _ayer.pdf' },
          { label: 'Sélection de poèmes', url: '/downloads/Seleccion_poemas-la_noche_de_ayer.pdf' },
        ],
        description: 'La Noche de Ayer, deuxième livre de Belén, présente une structure divisée en trois temps comprenant chacun dix poèmes. Le texte évoque un Passé, celui de chacun, tissé dans un Présent où les vers surgissent avec une telle force qu’ils pourraient être confondus avec un chaos linguistique. Il n’en est rien : l’équilibre du langage demeure. Des souvenirs se mêlent au présent comme des images superposées d’une même réalité passée. L’Espace et le Temps, tels que nous les comprenons dans notre monde, ne sont pas des variables constantes dans d’autres dimensions de l’univers. C’est pourquoi ce recueil peut paraître si cryptique : il procède du subconscient et de la mémoire de la poète, de cette mémoire où des enfants furent contraints d’emprunter des chemins différents.',
      },
    ],
  },
};
