import { BOOK_REVIEWS } from '@legacy/constants';
import { localizeBookReview } from '@legacy/i18n/reviewMessages';
import type { Locale } from './site';

export const reviewsContent = {
  es: {
    eyebrow: 'Recepción crítica', title: 'Reseñas sobre libros',
    sectionTitle: 'Obra Literaria',
    seoTitle: 'Reseñas sobre los libros de Belén Juárez | Crítica literaria',
    description: 'Reseñas y artículos críticos sobre los libros de poesía de Belén Juárez publicados en IDEAL, Librújula, Turia, Extramuros y otros medios.',
    introduction: 'Una selección de lecturas críticas que recorre la recepción de sus libros desde 1999 hasta la publicación de Horizonte de Sucesos.',
    reviewOf: 'Reseña de', read: 'Seguir leyendo', source: 'Ver fuente original', back: 'Volver a reseñas',
    criticism: 'Crítica Literaria', share: 'Compartir', print: 'Imprimir',
    publishedIn: 'Publicado en', relatedImage: 'Imagen del artículo publicado',
  },
  fr: {
    eyebrow: 'Réception critique', title: 'Critiques de livres',
    sectionTitle: 'Œuvre littéraire',
    seoTitle: 'Critiques des livres de Belén Juárez | Critique littéraire',
    description: 'Critiques et articles sur les livres de poésie de Belén Juárez publiés dans IDEAL, Librújula, Turia, Extramuros et d’autres médias.',
    introduction: 'Une sélection de lectures critiques retraçant la réception de ses livres depuis 1999 jusqu’à la publication de Horizonte de Sucesos.',
    reviewOf: 'Critique de', read: 'Lire la suite', source: 'Voir la source originale', back: 'Retour aux critiques',
    criticism: 'Critique littéraire', share: 'Partager', print: 'Imprimer',
    publishedIn: 'Publié dans', relatedImage: 'Image de l’article publié',
  },
} as const;

export const getReviews = (lang: Locale) => BOOK_REVIEWS.map((review) => localizeBookReview(review, lang));
