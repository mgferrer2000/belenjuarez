import { LITERARY_CRITICISMS } from '@legacy/constants';
import { localizeLiteraryCriticism } from '@legacy/i18n/literaryMessages';
import type { Locale } from './site';

export const criticismContent = {
  es: {
    eyebrow: 'Lecturas de otros autores', title: 'Crítica literaria',
    seoTitle: 'Crítica literaria de Belén Juárez | Reseñas y artículos',
    description: 'Crítica literaria de Belén Juárez publicada en las revistas Ficciones, Alhucema y Extramuros: poesía, narrativa y pensamiento literario.',
    introduction: 'Reseñas de poesía y narrativa publicadas en revistas literarias, recuperadas aquí como archivo de lectura y diálogo con otros autores.',
    explore: 'Consultar número', reviews: 'reseñas', back: 'Volver a crítica literaria', noImage: 'Sin imagen', imageAlt: (value: number) => `Imagen ilustrativa ${value}`,
  },
  fr: {
    eyebrow: 'Lectures d’autres auteurs', title: 'Critique littéraire',
    seoTitle: 'Critique littéraire de Belén Juárez | Comptes rendus et articles',
    description: 'Critique littéraire de Belén Juárez publiée dans les revues Ficciones, Alhucema et Extramuros : poésie, narration et pensée littéraire.',
    introduction: 'Des comptes rendus de poésie et de narration publiés dans des revues littéraires, réunis ici comme archives de lecture et de dialogue avec d’autres auteurs.',
    explore: 'Consulter le numéro', reviews: 'critiques', back: 'Retour à la critique littéraire', noImage: 'Sans image', imageAlt: (value: number) => `Image illustrative ${value}`,
  },
} as const;

export const getCriticisms = (lang: Locale) => LITERARY_CRITICISMS.map((item) => localizeLiteraryCriticism(item, lang));
