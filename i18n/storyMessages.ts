import type { ShortStory } from '../types';
import type { Locale } from './config';

export const STORY_UI: Record<Locale, {
    heading: string; introduction: string; comingSoon: string; pdfAvailable: string;
    readStory: string; notFound: string; back: string; readingMinutes: (minutes: number) => string;
    synopsis: string; downloadPdf: string; downloadHint: string; authorQuote: string;
    sectionIllustrationAlt: (section: string | number) => string; end: string; backToGallery: string;
}> = {
    es: {
        heading: 'Relatos',
        introduction: 'Narrativas breves que exploran la memoria, el exilio y la identidad a través de prosa poética e ilustraciones sugerentes.',
        comingSoon: 'Próximamente', pdfAvailable: 'Disponible PDF', readStory: 'Leer relato',
        notFound: 'Relato no encontrado', back: 'Volver a relatos',
        readingMinutes: (minutes) => `${minutes} min de lectura`, synopsis: 'Sinopsis',
        downloadPdf: 'Descargar Edición PDF', downloadHint: 'Ideal para lectura offline e impresión',
        authorQuote: 'La memoria no es lo que recordamos, sino lo que nos recuerda.',
        sectionIllustrationAlt: (section) => `Ilustración de la sección ${section}`,
        end: 'Fin del relato', backToGallery: 'Volver a la galería de relatos',
    },
    fr: {
        heading: 'Récits',
        introduction: 'Des récits brefs qui explorent la mémoire, l’exil et l’identité à travers une prose poétique et des illustrations évocatrices.',
        comingSoon: 'Prochainement', pdfAvailable: 'PDF disponible', readStory: 'Lire le récit',
        notFound: 'Récit introuvable', back: 'Retour aux récits',
        readingMinutes: (minutes) => `${minutes} min de lecture`, synopsis: 'Résumé',
        downloadPdf: 'Télécharger l’édition PDF', downloadHint: 'Idéal pour la lecture hors ligne et l’impression',
        authorQuote: 'La mémoire n’est pas ce dont nous nous souvenons, mais ce qui se souvient de nous.',
        sectionIllustrationAlt: (section) => `Illustration de la section ${section}`,
        end: 'Fin du récit', backToGallery: 'Retour à la galerie des récits',
    },
};

const FR_STORY_METADATA: Record<string, Partial<ShortStory>> = {
    'al-otro-lado-del-mundo': {
        subtitle: 'Récits d’immigration',
        publicationInfo: 'El Tam-Tam de las nubes, p. 107-123.',
        synopsis: 'Un déplacement émotionnel et géographique du Paris des années soixante jusqu’aux racines andalouses. La mémoire d’une fillette de sept ans et la mythique Citroën DS 21 « Requin » s’entrelacent dans une épopée de l’exil et des retrouvailles.',
    },
    'helena-de-esparta': {
        subtitle: 'ET AU CENTRE, LA P E R S O N N E / Dialogue de la photographie',
        synopsis: 'Une relecture du mythe classique selon une perspective intime et personnelle, où Hélène affronte son destin le jour de son mariage.',
    },
    'sandrine': {
        subtitle: 'Récits de Paris',
        synopsis: 'Un récit bref sur la bohème parisienne des années soixante, la musique d’une trompette et les rencontres inattendues sur les rives de la Seine.',
    },
};

export const localizeStory = (story: ShortStory, locale: Locale): ShortStory =>
    locale === 'fr' ? { ...story, ...FR_STORY_METADATA[story.id] } : story;
