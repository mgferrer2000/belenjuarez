import { VISUAL_POETRY, type VisualPoetry } from '@legacy/constants';
import { localizeVisualPoetry, VISUAL_POETRY_UI } from '@legacy/i18n/visualPoetryMessages';
import type { Locale } from './site';

export const visualPoetryContent = {
  es: {
    ...VISUAL_POETRY_UI.es,
    eyebrow: 'Palabra e imagen',
    seoTitle: 'Poesía visual de Belén Juárez | Obra y colecciones',
    description: 'Colecciones de poesía visual de Belén Juárez, donde palabra, pintura, composición e imagen construyen un mismo lenguaje poético.',
    collectionLabel: 'Colección',
    explore: 'Ver colección',
    close: 'Cerrar imagen',
    originalPoem: 'Texto poético',
  },
  fr: {
    ...VISUAL_POETRY_UI.fr,
    eyebrow: 'Mot et image',
    seoTitle: 'Poésie visuelle de Belén Juárez | Œuvres et collections',
    description: 'Collections de poésie visuelle de Belén Juárez, où parole, peinture, composition et image construisent un même langage poétique.',
    collectionLabel: 'Collection',
    explore: 'Voir la collection',
    close: 'Fermer l’image',
    originalPoem: 'Texte poétique',
  },
} as const;

export const getVisualPoetry = (lang: Locale): VisualPoetry[] =>
  VISUAL_POETRY.map((collection) => localizeVisualPoetry(collection, lang));
