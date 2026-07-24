import { ART_CRITIQUES, ART_PIECES, ILLUSTRATED_BOOKS } from '@legacy/constants';
import { ART_CRITIQUE_UI, ART_UI, localizeArtCritique, localizeArtPiece, localizeIllustratedBook } from '@legacy/i18n/artMessages';
import type { Locale } from './site';

export const artContent = {
  es: {
    eyebrow: 'El trazo y la materia', title: 'Arte', pageTitle: 'Arte: La Geometría del Verso', seoTitle: 'Arte de Belén Juárez | Pintura, dibujo e ilustración',
    description: 'Pinturas, dibujos, bocetos, ilustraciones de libros y crítica artística sobre la obra visual de Belén Juárez.',
    introduction: 'Un archivo visual donde la línea, la tinta y el color prolongan el lenguaje de la poesía.', explore: 'Explorar sección',
    sections: [
      { path: 'cuadros', number: '01', title: 'Cuadros y bocetos', navTitle: 'Cuadros', text: 'Pinturas, tintas, acuarelas y dibujos realizados entre 1987 y 2006.', image: ART_PIECES[29].imageUrl },
      { path: 'ilustracion', number: '02', title: 'Ilustración de libros', navTitle: 'Ilustración de Libros', text: 'Series gráficas creadas para acompañar la palabra escrita.', image: ILLUSTRATED_BOOKS[0].coverUrl },
      { path: 'critica', number: '03', title: 'Crítica artística', navTitle: 'Crítica Artística', text: 'Lecturas críticas y documentos sobre la trayectoria plástica de Belén Juárez.', image: ART_CRITIQUES[0].coverUrl },
    ],
    works: 'Obras', technique: 'Técnica', close: 'Cerrar', enlarge: 'Ampliar', previous: 'Anterior', next: 'Siguiente',
  },
  fr: {
    eyebrow: 'Le trait et la matière', title: 'Art', pageTitle: 'Art : La géométrie du vers', seoTitle: 'Art de Belén Juárez | Peinture, dessin et illustration',
    description: 'Peintures, dessins, esquisses, illustrations de livres et critique artistique autour de l’œuvre visuelle de Belén Juárez.',
    introduction: 'Des archives visuelles où la ligne, l’encre et la couleur prolongent le langage de la poésie.', explore: 'Explorer la section',
    sections: [
      { path: 'cuadros', number: '01', title: 'Tableaux et esquisses', navTitle: 'Peintures', text: 'Peintures, encres, aquarelles et dessins réalisés entre 1987 et 2006.', image: ART_PIECES[29].imageUrl },
      { path: 'ilustracion', number: '02', title: 'Illustration de livres', navTitle: 'Illustration de livres', text: 'Séries graphiques créées pour accompagner la parole écrite.', image: ILLUSTRATED_BOOKS[0].coverUrl },
      { path: 'critica', number: '03', title: 'Critique artistique', navTitle: 'Critique artistique', text: 'Lectures critiques et documents sur le parcours plastique de Belén Juárez.', image: ART_CRITIQUES[0].coverUrl },
    ],
    works: 'Œuvres', technique: 'Technique', close: 'Fermer', enlarge: 'Agrandir', previous: 'Précédente', next: 'Suivante',
  },
} as const;

const astroFrenchMedia: Record<string, string> = {
  'TINTA CHINA PINCEL CHINO': 'ENCRE DE CHINE, PINCEAU CHINOIS',
};

export const getArtPieces = (lang: Locale) => ART_PIECES.map((piece) => {
  const localized = localizeArtPiece(piece, lang);
  return lang === 'fr' && astroFrenchMedia[piece.medium]
    ? { ...localized, medium: astroFrenchMedia[piece.medium] }
    : localized;
});
export const getIllustratedBooks = (lang: Locale) => ILLUSTRATED_BOOKS.map((book) => localizeIllustratedBook(book, lang));
export const getArtCritique = (lang: Locale) => localizeArtCritique(ART_CRITIQUES[0], lang);
export const getArtUi = (lang: Locale) => ART_UI[lang];
export const getArtCritiqueUi = (lang: Locale) => ART_CRITIQUE_UI[lang];

export const mobileArtPath = (imageUrl: string) =>
  encodeURI(imageUrl.replace(/\.[^/.]+$/, '').replace('/images/cuadros/', '/images/mobile/cuadros/') + '.webp');
