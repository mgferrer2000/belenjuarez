import { COLLABORATIONS } from '@legacy/constants';
import { localizeCollaboration } from '@legacy/i18n/collaborationMessages';
import type { Locale } from './site';

export const anthologiesContent = {
  es: {
    sectionTitle: 'Obra Literaria', title: 'Poemas en antologías y revistas',
    seoTitle: 'Poemas de Belén Juárez en antologías y revistas',
    description: 'Poemas, poéticas y textos de Belén Juárez publicados en antologías y revistas literarias desde 1999 hasta 2026.',
    inPublication: 'En:', read: 'Leer más', source: 'Visitar', back: 'Volver a Antologías',
    illustrationAlt: (title: string) => `Ilustración para ${title}`,
  },
  fr: {
    sectionTitle: 'Œuvre Littéraire', title: 'Poèmes en anthologies et revues',
    seoTitle: 'Poèmes de Belén Juárez dans des anthologies et revues',
    description: 'Poèmes, poétiques et textes de Belén Juárez publiés dans des anthologies et revues littéraires de 1999 à 2026.',
    inPublication: 'Dans :', read: 'En savoir plus', source: 'Visiter', back: 'Retour aux anthologies',
    illustrationAlt: (title: string) => `Illustration pour ${title}`,
  },
} as const;

export const getAnthologies = (lang: Locale) => COLLABORATIONS
  .map((item) => localizeCollaboration(item, lang))
  .sort((a, b) => Number.parseInt(a.date, 10) - Number.parseInt(b.date, 10));
