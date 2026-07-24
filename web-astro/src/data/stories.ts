import { SHORT_STORIES } from '@legacy/constants';
import { localizeStory } from '@legacy/i18n/storyMessages';
import type { Locale } from './site';

export const storiesContent = {
  es: {
    sectionTitle: 'Obra Literaria', eyebrow: 'Narrativa breve', title: 'Relatos',
    seoTitle: 'Relatos de Belén Juárez | Prosa poética y memoria',
    description: 'Relatos de Belén Juárez: narraciones de memoria, exilio e identidad escritas con una prosa poética e ilustradas por la autora.',
    introduction: 'Narrativas breves que exploran la memoria, el exilio y la identidad a través de prosa poética e ilustraciones sugerentes.',
    read: 'Leer relato', back: 'Volver a relatos', synopsis: 'Sinopsis', minutes: (value: number) => `${value} min de lectura`, pdfAvailable: 'PDF disponible', comingSoon: 'Próximamente',
    published: 'Publicación', download: 'Descargar edición PDF', downloadHint: 'Ideal para lectura offline e impresión', authorQuote: 'La memoria no es lo que recordamos, sino lo que nos recuerda.', end: 'Fin del relato', backToGallery: 'Volver a la galería de relatos', illustration: (section: string | number) => `Ilustración de la sección ${section}`,
  },
  fr: {
    sectionTitle: 'Œuvre littéraire', eyebrow: 'Narration brève', title: 'Récits',
    seoTitle: 'Récits de Belén Juárez | Prose poétique et mémoire',
    description: 'Récits de Belén Juárez : narrations autour de la mémoire, de l’exil et de l’identité, écrites dans une prose poétique et illustrées par l’autrice.',
    introduction: 'Des récits brefs qui explorent la mémoire, l’exil et l’identité à travers une prose poétique et des illustrations évocatrices.',
    read: 'Lire le récit', back: 'Retour aux récits', synopsis: 'Résumé', minutes: (value: number) => `${value} min de lecture`, pdfAvailable: 'PDF disponible', comingSoon: 'Prochainement',
    published: 'Publication', download: 'Télécharger l’édition PDF', downloadHint: 'Idéal pour la lecture hors ligne et l’impression', authorQuote: 'La mémoire n’est pas ce dont nous nous souvenons, mais ce qui se souvient de nous.', end: 'Fin du récit', backToGallery: 'Retour à la galerie des récits', illustration: (section: string | number) => `Illustration de la section ${section}`,
  },
} as const;

const storyAssetPaths: Record<string, string> = {
  '/images/relatos/Al_otro_lado_del_mundo/1tiburon.png': '/images/relatos/Al_otro_lado_del_mundo/1TIBURON.png',
  '/images/relatos/Al_otro_lado_del_mundo/5 tiburon.png': '/images/relatos/Al_otro_lado_del_mundo/5 TIBURON.png',
};

export const getStories = (lang: Locale) => SHORT_STORIES.map((story) => {
  const localizedStory = localizeStory(story, lang);

  return {
    ...localizedStory,
    sections: localizedStory.sections.map((section) => ({
      ...section,
      illustrationUrl: section.illustrationUrl
        ? storyAssetPaths[section.illustrationUrl] ?? section.illustrationUrl
        : undefined,
    })),
  };
});
