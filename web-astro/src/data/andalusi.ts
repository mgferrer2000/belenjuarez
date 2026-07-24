import type { Locale } from './site';

export type AndalusiBook = {
  title: string;
  author: string;
  publisher: string;
  note?: string;
};

export type AndalusiIssue = {
  year: string;
  issues: string;
  books: AndalusiBook[];
};

export const andalusiIssues: AndalusiIssue[] = [
  {
    year: 'IV',
    issues: '14-15-16',
    books: [
      { title: 'Historia de la intolerancia en Europa', author: 'Italo Mereu', publisher: 'Paidós Ibérica' },
      { title: 'Los Príncipes nubios', author: 'Juan Bonilla', publisher: 'Seix Barral', note: 'Premio Biblioteca Breve 2003' },
      { title: 'Telón de Boca', author: 'Juan Goytisolo', publisher: 'El Aleph Editores' },
      { title: 'Las reinas de África', author: 'Cristina Morato', publisher: 'Plaza & Janés' },
      { title: 'El Mediterráneo', author: 'Fernando de Villena', publisher: 'Dauro' },
      { title: 'La Cruzada del sur. La reconquista de Covadonga a la toma de Granada', author: 'Juan Antonio Cebrián', publisher: 'La Esfera de los libros' },
      { title: 'De Nueva York a Granada. Cuentos y Leyendas', author: 'Washington Irving', publisher: 'Páginas de Espuma' },
      { title: 'Viaje a la luz del Cham', author: 'Rosa Regás', publisher: 'Siete Leguas' },
      { title: 'Al-Hamrá', author: 'José Manuel García Marín', publisher: 'Rosa Cruces' },
      { title: 'La luna sobre la Sabica', author: 'Carolina Molina', publisher: 'Entrelíneas' },
      { title: 'Mujeres árabes hablan de sus vidas', author: 'Bouthaina Shaaban', publisher: 'Fundación El Legado Andalusí' },
    ],
  },
  {
    year: 'V',
    issues: '17-19-20',
    books: [
      { title: 'Al-Andalus desde la periferia. La formación de una sociedad musulmana en tierras malagueñas (siglos VIII-X)', author: 'Virgilio Martínez Enamorado', publisher: 'Centro de Ediciones de la Diputación de Málaga', note: 'Monografías' },
      { title: 'Drugstore', author: 'Guillermo Busutil', publisher: 'Páginas de Espuma' },
      { title: 'Con la palabra y la imagen. 25 años de Constitución española', author: 'Alfonso Guerra y Salvador Clotas', publisher: 'Fundación Pablo Iglesias', note: 'Idea y proyecto' },
      { title: 'Paisaje y Naturaleza en Al-Andalus', author: 'VV. AA.', publisher: 'Fundación El Legado Andalusí' },
      { title: 'Boabdil. Tragedia del último rey de Granada', author: 'Magdalena Lasala', publisher: 'Temas de Hoy' },
      { title: 'Aynadamar. De Fuente Grande al Albayzín', author: 'Francisco González Arroyo y Salvador Ruíz Caballero', publisher: 'Caja General de Ahorros de Granada' },
      { title: 'Petra (La ciudad Rosa)', author: 'José Lupiáñez', publisher: 'Port Royal' },
      { title: 'Plazas y Jardines en Andalucía. Jornadas europeas de patrimonio 2004', author: 'Junta de Andalucía, Consejería de Cultura', publisher: 'Junta de Andalucía', note: '2004' },
      { title: 'Orígenes', author: 'Amin Maalouf', publisher: 'Alianza Editorial', note: '2004' },
      { title: 'Andalusíes. La memoria custodiada', author: 'Juan Castilla Brazales', publisher: 'Fundación El Legado Andalusí', note: '2004' },
      { title: 'Silver Shadow', author: 'Antonio Enrique', publisher: 'Dauro', note: 'Colección Ex-Libris, 2004' },
    ],
  },
  {
    year: 'VI',
    issues: '21',
    books: [
      { title: 'Descripción General del África y de las cosas peregrinas que allí hay', author: 'Juan León Africano', publisher: 'Fundación El Legado Andalusí' },
      { title: 'La Revolución islámica en Occidente', author: 'Ignacio Olagüe', publisher: 'Plurabelle' },
      { title: 'Azafrán', author: 'José Manuel García Marín', publisher: 'Roca' },
      { title: 'La larga noche de Ángela', author: 'Manuel Villar Raso', publisher: 'Alhulia' },
    ],
  },
];

export const andalusiContent: Record<Locale, {
  sectionTitle: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  introduction: [string, string];
  magazine: string;
  year: string;
  issue: string;
  issues: string;
  reviewedBooks: string;
  reviewedBy: string;
}> = {
  es: {
    sectionTitle: 'Obra Literaria',
    eyebrow: 'Archivo Crítico',
    title: 'Crítica libros legado andalusí',
    seoTitle: 'Crítica de libros del legado andalusí | Belén Juárez',
    description: 'Relación de 26 libros reseñados por Belén Juárez en la revista El Legado andalusí, Una nueva sociedad mediterránea.',
    introduction: [
      'Relación de libros reseñados por Belén Juárez en la revista El Legado andalusí, subtitulada Una nueva sociedad mediterránea.',
      'La selección recoge distintas entregas de la publicación y deja ver un horizonte de lectura amplio: historia, memoria, mundo mediterráneo, al-Andalus, narrativa, poesía y ensayo cultural.',
    ],
    magazine: 'Revista', year: 'Año', issue: 'Número', issues: 'Números', reviewedBooks: 'Libros reseñados', reviewedBy: 'Reseñado por Belén Juárez',
  },
  fr: {
    sectionTitle: 'Œuvre littéraire',
    eyebrow: 'Archives critiques',
    title: 'Critique des livres de l’héritage andalou',
    seoTitle: 'Critique des livres de l’héritage andalou | Belén Juárez',
    description: 'Liste de 26 livres recensés par Belén Juárez dans la revue El Legado andalusí, Una nueva sociedad mediterránea.',
    introduction: [
      'Liste des ouvrages recensés par Belén Juárez dans la revue El Legado andalusí, sous-titrée Una nueva sociedad mediterránea.',
      'La sélection rassemble plusieurs livraisons de la publication et dessine un vaste horizon de lecture : histoire, mémoire, monde méditerranéen, al-Andalus, récit, poésie et essai culturel.',
    ],
    magazine: 'Revue', year: 'Année', issue: 'Numéro', issues: 'Numéros', reviewedBooks: 'Livres recensés', reviewedBy: 'Recensé par Belén Juárez',
  },
};
