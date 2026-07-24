import type { Locale } from './site';

type CvSection = { title: string; items: string[] };
type Activity = { year: string; title: string; detail: string };
type Link = { text: string; url: string };

const esLinks: Link[] = [
  { text: 'Publicación del álbum musical “Horizonte de Sucesos” (United Master, 2025)', url: 'https://unitedmasters.com/a/belen-juarez' },
  { text: 'Vídeo “Lobo”, adaptación visual y musical vinculada a Horizonte de Sucesos', url: 'https://www.youtube.com/watch?v=_8J9RL0lp_8' },
  { text: 'Amazon Music · álbum “Horizonte de Sucesos”', url: 'https://music.amazon.es/tracks/B0FT95JC5W' },
  { text: 'Spotify · álbum “Horizonte de Sucesos”', url: 'https://open.spotify.com/intl-es/album/3xQDEU1oeQoWyI6IKsRiWO' },
  { text: 'Apple Music · álbum “Horizonte de Sucesos”', url: 'https://music.apple.com/es/album/horizonte-de-sucesos/1843135219' },
  { text: 'YouTube · álbum “Horizonte de Sucesos”', url: 'https://www.youtube.com/watch?v=gsMr2C_jFGk' },
  { text: 'Circle of European Artists (París, 2025)', url: 'https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/' },
];

const frLinks: Link[] = [
  { text: 'Publication de l’album musical « Horizonte de Sucesos » (United Master, 2025)', url: 'https://unitedmasters.com/a/belen-juarez' },
  { text: 'Vidéo « Lobo », adaptation visuelle et musicale liée à Horizonte de Sucesos', url: 'https://www.youtube.com/watch?v=_8J9RL0lp_8' },
  { text: 'Amazon Music · album « Horizonte de Sucesos »', url: 'https://music.amazon.es/tracks/B0FT95JC5W' },
  { text: 'Spotify · album « Horizonte de Sucesos »', url: 'https://open.spotify.com/intl-es/album/3xQDEU1oeQoWyI6IKsRiWO' },
  { text: 'Apple Music · album « Horizonte de Sucesos »', url: 'https://music.apple.com/es/album/horizonte-de-sucesos/1843135219' },
  { text: 'YouTube · album « Horizonte de Sucesos »', url: 'https://www.youtube.com/watch?v=gsMr2C_jFGk' },
  { text: 'Circle of European Artists (Paris, 2025)', url: 'https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/' },
];

const esSections: CvSection[] = [
  { title: 'Exposiciones y obra visual', items: [
    'Exposición de Pintura Individual: “Rostros”, Universidad de Granada, 1991.',
    'Exposición de Pintura Internacional: Galería “Tabú”, Torres Vedras, Portugal, 1998.',
    'Exposición Colectiva de Poesía Visual: “Poesía para ver”, Madrid, 1999; Barcelona, 2000; Pineda del Mar, 2000; Palencia, 2001; Valladolid, 2002.',
  ] },
  { title: 'Libros y antologías', items: [
    'Libros de poesía: “Destierro en Cuatro Ángulos”, Ed. Devenir, Madrid, 1999; “La Noche de Ayer”, Ed. Alhulia, colección “Palabras Mayores”, 2001.',
    'Participación en Antologías de Poesía: “Aldea Poética II”, de Antonio Pastor. Ed. Opera Prima, Madrid, 2000.',
    '“Versos para fin del Milenio”, de Miguel Ávila Cabeza, Motril (Granada), 2001.',
    '“Plumas femeninas en la Literatura de Granada (siglos VIII-XX). Diccionario-Antología”, de Amelina Correa. Universidad de Granada, 2002.',
    '“Poetas por el Medio Ambiente”, Ayuntamiento de Motril, 2003.',
    '“Poetas por la paz”, Colegio de Gestores Administrativos de Granada, 2002.',
    'Participación en la antología de María Rosal “Con Voz propia”, Ed. Renacimiento, 2007.',
  ] },
  { title: 'Revistas y edición', items: [
    'Colaboración en revistas de literatura nacionales e internacionales: Salina (Univ. de Tarragona), Alhucema (Granada), Letra Clara (Univ. de Granada), Ficciones (Granada), Phayum (Benicarló), Turia (Teruel), Ánfora Nova (Córdoba), Texturas (Vitoria), Al Haraka Al Shiriya (Kaissar Afif, Méjico), Cuadernos del Matemático (Getafe, Madrid), La Ñ literaria (Palencia), Extramuros, entre otras.',
    'Revistas electrónicas: elfantasmadelaglorieta.com (2005), decirdelagua.com (Miami, 2008), etc.',
    'Redactora jefe de la Revista Literaria “Ficciones”, 1997-1999.',
    'Redactora de la Revista Literaria “Alhucema” (Granada), 2002-2007.',
  ] },
  { title: 'Gestión cultural y traducción', items: [
    'Codirectora del programa de radio “La Vuelta de Llave”, junto a Mariola Cantarero y Ana Isabel López-Siles, 1997. Programa dedicado a entrevistas de poetas granadinos y lecturas poéticas.',
    'Coordinadora del programa cultural “Puerta Abierta del Diálogo Internacional”, 2001-2002, Fundación Euroárabe (Granada, España), con participación de poetas de diferentes países árabes.',
    'Traducción de poesía castellano-francés: “Las noches azules del alma”, textos del poeta Enrique Villagrasa. Fundación Euroárabe, 2001.',
    'Ilustraciones del libro “Las noches azules del alma”, Fundación Euroárabe (Granada), 2001.',
  ] },
  { title: 'Referencias bibliográficas', items: [
    'C.J. “Otras voces. Destierro en cuatro ángulos”. El Cultural (Madrid), 26 de diciembre de 1999.',
    'Enrique Villagrasa. “Poesía. Versos del Sur”. Qué Leer. Barcelona, febrero de 1999.',
    'Antonio Enrique. “Un Mandala de Libro” (acerca de “Destierro en cuatro ángulos”). Turia n.º 55, junio de 2000, pp. 354-355. Diputación de Teruel.',
    'Enrique Villagrasa. “Poesía”. Qué Leer. Barcelona, abril de 2002.',
    'Víctor Córcoba. “Andalucía en los libros”. Diario Costa de Granada, 2002.',
    'Yassin Adnan. “La poeta española Belén Juárez”. Revista Al-Sada (Marrakech), octubre de 2002.',
    'Enrique Villagrasa. Extramuros, 2002.',
    'Francisco Gil Craviotto. “La Poesía de Belén Juárez”. Diario Ideal, enero de 2003.',
    'Su poesía ha sido traducida al árabe en la web jehat.com (Bahréin).',
  ] },
  { title: 'Participaciones y presencia pública', items: [
    'Conferencia: divulgación pública de poetas árabes y lecturas de textos dentro del programa “Poesía en Residencia”. Sevilla, 2002.',
    'Debate público “Poetas del Mediterráneo”. Encuentro de poetas libaneses y españoles. Instituto Cervantes. Beirut, 2002.',
    'Participación en el VII y VIII Encuentro de Mujeres Escritoras. Lectura y presentación de escritoras. Granada, 2002; Vitoria, 2005.',
    'Recitales de poesía: “Poetas por la Paz”. Universidad de Granada, 2003.',
    'Recital de poesía y música: lectura de poesía andalusí (siglos XI y XII), junto al Ensemble de Música Antigua “Clamores Antiqui”. Fundación Euroárabe, Granada, febrero de 2003.',
    'Recital de poesía árabe traducida al castellano: El Imperdible, Sevilla, 2003.',
    'Presentación del libro y debate “Canon Heterodoxo” de Antonio Enrique, junto a Gregorio Morales. Fundación Euroárabe, Granada, 2003.',
    'Participación en el Congreso de Escritores Onubenses. Villa del Rocío, 2003.',
    '“Poesía árabe contemporánea”. Cuadernos “La Ñ literaria”, edición y selección. Coordinación de Julián Alonso. Ayuntamiento de Dueñas (Palencia), 2003.',
    'Coordinadora del dossier especial dedicado a los poetas árabes en el número 31 de la revista Extramuros. Conferencia y lectura poética individual en Bahréin. Día Mundial de la Poesía, 2004.',
    'Participación en el congreso “Letras en la ciudad soñada”, dirigido por Gregorio Morales: exposición audiovisual “Música y Poesía” en Los Mundos Imaginarios (Granada, 2006).',
    'Participación en el ciclo de Literatura de Terror: exposición y lectura de poemas de terror, dirigido por Gregorio Morales (Albolote, Granada, 2005).',
    'Miembro del Jurado del Premio Cervantes de Poesía de Armilla (Granada), 2004-2008.',
  ] },
];

const frSections: CvSection[] = [
  { title: 'Expositions et œuvre visuelle', items: [
    'Exposition individuelle de peinture : « Rostros », Université de Grenade, 1991.',
    'Exposition internationale de peinture : galerie « Tabú », Torres Vedras, Portugal, 1998.',
    'Exposition collective de poésie visuelle : « Poesía para ver », Madrid, 1999 ; Barcelone, 2000 ; Pineda del Mar, 2000 ; Palencia, 2001 ; Valladolid, 2002.',
  ] },
  { title: 'Livres et anthologies', items: [
    'Livres de poésie : « Destierro en Cuatro Ángulos », éd. Devenir, Madrid, 1999 ; « La Noche de Ayer », éd. Alhulia, collection « Palabras Mayores », 2001.',
    'Participation aux anthologies de poésie : « Aldea Poética II », d’Antonio Pastor, éd. Opera Prima, Madrid, 2000.',
    '« Versos para fin del Milenio », de Miguel Ávila Cabeza, Motril (Grenade), 2001.',
    '« Plumas femeninas en la Literatura de Granada (siglos VIII-XX). Diccionario-Antología », d’Amelina Correa, Université de Grenade, 2002.',
    '« Poetas por el Medio Ambiente », mairie de Motril, 2003.',
    '« Poetas por la paz », Colegio de Gestores Administrativos de Granada, 2002.',
    'Participation à l’anthologie de María Rosal « Con Voz propia », éd. Renacimiento, 2007.',
  ] },
  { title: 'Revues et édition', items: [
    'Collaborations dans des revues littéraires nationales et internationales : Salina (Université de Tarragone), Alhucema (Grenade), Letra Clara (Université de Grenade), Ficciones (Grenade), Phayum (Benicarló), Turia (Teruel), Ánfora Nova (Cordoue), Texturas (Vitoria), Al Haraka Al Shiriya (Kaissar Afif, Mexique), Cuadernos del Matemático (Getafe, Madrid), La Ñ literaria (Palencia), Extramuros, entre autres.',
    'Revues électroniques : elfantasmadelaglorieta.com (2005), decirdelagua.com (Miami, 2008), etc.',
    'Rédactrice en chef de la revue littéraire « Ficciones », 1997-1999.',
    'Rédactrice de la revue littéraire « Alhucema » (Grenade), 2002-2007.',
  ] },
  { title: 'Médiation culturelle et traduction', items: [
    'Codirectrice de l’émission radiophonique « La Vuelta de Llave », avec Mariola Cantarero et Ana Isabel López-Siles, 1997. Émission consacrée aux entretiens avec des poètes grenadins et aux lectures poétiques.',
    'Coordinatrice du programme culturel « Puerta Abierta del Diálogo Internacional », 2001-2002, Fondation Euroarabe (Grenade, Espagne), avec la participation de poètes de différents pays arabes.',
    'Traduction de poésie de l’espagnol au français : « Las noches azules del alma », textes du poète Enrique Villagrasa, Fondation Euroarabe, 2001.',
    'Illustrations du livre « Las noches azules del alma », Fondation Euroarabe (Grenade), 2001.',
  ] },
  { title: 'Références bibliographiques', items: [
    'C.J. « Otras voces. Destierro en cuatro ángulos ». El Cultural (Madrid), 26 décembre 1999.',
    'Enrique Villagrasa. « Poesía. Versos del Sur ». Qué Leer, Barcelone, février 1999.',
    'Antonio Enrique. « Un Mandala de Libro » (à propos de « Destierro en cuatro ángulos »). Turia, no 55, juin 2000, p. 354-355. Diputación de Teruel.',
    'Enrique Villagrasa. « Poesía ». Qué Leer, Barcelone, avril 2002.',
    'Víctor Córcoba. « Andalucía en los libros ». Diario Costa de Granada, 2002.',
    'Yassin Adnan. « La poeta española Belén Juárez ». Revista Al-Sada (Marrakech), octobre 2002.',
    'Enrique Villagrasa. Extramuros, 2002.',
    'Francisco Gil Craviotto. « La Poesía de Belén Juárez ». Diario Ideal, janvier 2003.',
    'Sa poésie a été traduite en arabe sur le site jehat.com (Bahreïn).',
  ] },
  { title: 'Participations et présence publique', items: [
    'Conférence : diffusion publique de poètes arabes et lectures de textes dans le cadre du programme « Poesía en Residencia ». Séville, 2002.',
    'Débat public « Poetas del Mediterráneo ». Rencontre de poètes libanais et espagnols. Institut Cervantes, Beyrouth, 2002.',
    'Participation aux VIIe et VIIIe Rencontres de femmes écrivaines : lecture et présentation d’écrivaines. Grenade, 2002 ; Vitoria, 2005.',
    'Récitals de poésie : « Poetas por la Paz ». Université de Grenade, 2003.',
    'Récital de poésie et musique : lecture de poésie andalouse des XIe et XIIe siècles, avec l’Ensemble de musique ancienne « Clamores Antiqui ». Fondation Euroarabe, Grenade, février 2003.',
    'Récital de poésie arabe traduite en espagnol : El Imperdible, Séville, 2003.',
    'Présentation et débat autour du livre « Canon Heterodoxo » d’Antonio Enrique, avec Gregorio Morales. Fondation Euroarabe, Grenade, 2003.',
    'Participation au Congrès des écrivains de Huelva. Villa del Rocío, 2003.',
    '« Poesía árabe contemporánea ». Cuadernos « La Ñ literaria », édition et sélection ; coordination de Julián Alonso. Mairie de Dueñas (Palencia), 2003.',
    'Coordinatrice du dossier spécial consacré aux poètes arabes dans le numéro 31 de la revue Extramuros. Conférence et lecture poétique individuelle à Bahreïn. Journée mondiale de la poésie, 2004.',
    'Participation au congrès « Letras en la ciudad soñada », dirigé par Gregorio Morales : exposition audiovisuelle « Música y Poesía » à Los Mundos Imaginarios (Grenade, 2006).',
    'Participation au cycle de littérature d’horreur : exposition et lecture de poèmes d’horreur, dirigé par Gregorio Morales (Albolote, Grenade, 2005).',
    'Membre du jury du Prix Cervantes de poésie d’Armilla (Grenade), 2004-2008.',
  ] },
];

const activities = {
  es: [
    { year: '2024-2025', title: 'Club de Poesía de Librujula', detail: 'Publicación de los poemas “Las cerezas de mi padre” (2024) y “Y mi denuncia” (2025) en el Club de Poesía de la revista Librujula, bajo la coordinación de Enrique Villagrasa.' },
    { year: '2025-2026', title: 'Encuentro de Letras Celestes', detail: 'Participación en las dos últimas antologías de poesía incluidas en el proyecto “Encuentro de Letras Celestes”, Sevilla, 2025 y 2026, de Pedro Luis Ibáñez Lérida y Diego Castillo Barco.' },
    { year: '2025', title: 'Publicación del álbum “Horizonte de Sucesos”', detail: 'Publicación del álbum musical titulado “Horizonte de Sucesos” (United Master, 2025). Las letras de las canciones proceden de poemas del libro homónimo.' },
    { year: '2025', title: 'Circle of European Artists', detail: 'Su trayectoria literaria y artística ha sido incluida en el Circle of European Artists (París, 2025).' },
    { year: '2026', title: 'Recital “Día de los enamorados”', detail: 'Participación en el recital poético colectivo celebrado en el Centro Artístico de Granada el 14 de febrero de 2026, coordinado por Pilar Bueno.' },
    { year: '2026', title: 'Cartografía del Amor', detail: 'Participación en el primer recital de microrrelatos celebrado en el Centro Cultural de Montequinto (Dos Hermanas, Sevilla), coordinado por Maritxé Abad y organizado por la Delegación en Sevilla de la Academia Norteamericana de Literatura Moderna Internacional.' },
    { year: '2026', title: 'Horizonte de Sucesos', detail: 'Nuevo libro de poesía publicado en la colección Rayo Azul de la editorial Huerga & Fierro. Presentación en la Biblioteca de Andalucía el 21 de mayo, con la participación del pianista y compositor Eduardo Salas Arques, los editores Antonio Huerga y Charo Fierro, y los escritores Antonio Fernández Juárez y Maritxé Abad i Bueno.' },
  ],
  fr: [
    { year: '2024-2025', title: 'Club de Poesía de Librujula', detail: 'Publication des poèmes « Las cerezas de mi padre » (2024) et « Y mi denuncia » (2025) dans le Club de Poesía de la revue Librujula, sous la coordination d’Enrique Villagrasa.' },
    { year: '2025-2026', title: 'Encuentro de Letras Celestes', detail: 'Participation aux deux dernières anthologies de poésie du projet « Encuentro de Letras Celestes », Séville, 2025 et 2026, de Pedro Luis Ibáñez Lérida et Diego Castillo Barco.' },
    { year: '2025', title: 'Publication de l’album « Horizonte de Sucesos »', detail: 'Publication de l’album musical « Horizonte de Sucesos » (United Master, 2025). Les paroles des chansons sont issues de poèmes du livre homonyme.' },
    { year: '2025', title: 'Circle of European Artists', detail: 'Son parcours littéraire et artistique a été inclus dans le Circle of European Artists (Paris, 2025).' },
    { year: '2026', title: 'Récital « Día de los enamorados »', detail: 'Participation au récital poétique collectif organisé au Centro Artístico de Granada le 14 février 2026, sous la coordination de Pilar Bueno.' },
    { year: '2026', title: 'Cartografía del Amor', detail: 'Participation au premier récital de micro-récits organisé au Centro Cultural de Montequinto (Dos Hermanas, Séville), sous la coordination de Maritxé Abad et organisé par la délégation de Séville de l’Academia Norteamericana de Literatura Moderna Internacional.' },
    { year: '2026', title: 'Horizonte de Sucesos', detail: 'Nouveau livre de poésie publié dans la collection Rayo Azul des éditions Huerga & Fierro. Présentation à la Biblioteca de Andalucía le 21 mai, avec le pianiste et compositeur Eduardo Salas Arques, les éditeurs Antonio Huerga et Charo Fierro, ainsi que les écrivains Antonio Fernández Juárez et Maritxé Abad i Bueno.' },
  ],
} satisfies Record<Locale, Activity[]>;

export const literaryCv = {
  es: {
    eyebrow: 'Sobre Belén', title: 'Currículum literario y artístico', seoTitle: 'Currículum literario y artístico de Belén Juárez', description: 'Trayectoria literaria y artística de Belén Juárez: libros, antologías, exposiciones, traducciones, revistas, recitales y gestión cultural.', introduction: 'Relación sintética de exposiciones, libros, colaboraciones editoriales, traducciones, referencias críticas y actividades públicas vinculadas a la trayectoria literaria y artística de Belén Juárez.', recentTitle: 'Actividades recientes 2024-2026', sections: esSections, activities: activities.es, linksTitle: 'Enlaces y plataformas', links: esLinks,
  },
  fr: {
    eyebrow: 'À propos de Belén', title: 'Curriculum littéraire et artistique', seoTitle: 'Curriculum littéraire et artistique de Belén Juárez', description: 'Parcours littéraire et artistique de Belén Juárez : livres, anthologies, expositions, traductions, revues, récitals et médiation culturelle.', introduction: 'Présentation synthétique des expositions, livres, collaborations éditoriales, traductions, références critiques et activités publiques liées au parcours littéraire et artistique de Belén Juárez.', recentTitle: 'Activités récentes 2024-2026', sections: frSections, activities: activities.fr, linksTitle: 'Liens et plateformes', links: frLinks,
  },
} as const;
