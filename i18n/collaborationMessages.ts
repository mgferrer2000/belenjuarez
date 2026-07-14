import type { Collaboration } from '../types';
import type { Locale } from './config';

export const COLLABORATION_UI: Record<Locale, {
    heading: string; inPublication: string; readMore: string; visit: string;
    back: string; notFound: string; illustrationAlt: (title: string) => string;
}> = {
    es: {
        heading: 'Poemas en antologías y revistas', inPublication: 'En:', readMore: 'Leer más', visit: 'Visitar',
        back: 'Volver a Antologías', notFound: 'Publicación no encontrada',
        illustrationAlt: (title) => `Ilustración para ${title}`,
    },
    fr: {
        heading: 'Poèmes en anthologies et revues', inPublication: 'Dans :', readMore: 'En savoir plus', visit: 'Visiter',
        back: 'Retour aux anthologies', notFound: 'Publication introuvable',
        illustrationAlt: (title) => `Illustration pour ${title}`,
    },
};

type LocalizedCollaboration = Omit<Collaboration, 'type'> & { type: string };

const FR_METADATA: Record<string, Partial<LocalizedCollaboration>> = {
    '1': { type: 'Anthologie', description: 'Participation à la rencontre annuelle des femmes poètes.' },
    '2': { type: 'Revue', description: 'Poèmes « Sobra el Destino » dans la revue Alhucema 2-3.' },
    '3': { type: 'Revue', description: 'Poèmes inédits « París uno » dans la revue Alhucema 5.' },
    '4': { type: 'Revue', description: 'Sélection de poèmes de « La Noche de Ayer » dans Ánfora Nova.' },
    '5': { type: 'Revue', description: 'Poème « Las hijas de Dionisios » dans Ánfora Nova / Universos del Vino.' },
    '6': { type: 'Anthologie', description: 'Poème « En Altamira » dans l’anthologie Con Voz Propia.' },
    '7': { type: 'Anthologie', description: 'Poème « Hombre Olivo » dans l’anthologie El Oro Líquido.' },
    '8': {
        type: 'Anthologie',
        description: 'Édition de Diego Castillo Barco et Pedro Luis Ibáñez Lérida. La Puebla de los Infantes, Séville.',
        externalNote: 'Anthologie virtuelle « De pronto, ¡oh belleza!, canta el verderol », 2025',
    },
    '14': {
        type: 'Anthologie',
        description: 'Poème publié dans l’anthologie virtuelle du projet Encuentro de Letras Celestes, édition 2026.',
        externalNote: 'Anthologie virtuelle « Y ser como la estrella inaccesible y alta, alumbrando en silencio », 2026',
    },
    '9': { type: 'Revue', description: 'Nº 0, 2005.' },
    '10': {
        type: 'Anthologie', description: 'Participation à l’anthologie Poetas por la Paz.',
        externalNote: 'Poème publié dans le Club de poésie de la revue Librújula, 2025',
    },
    '11': { type: 'Revue', description: 'Nº 94, février 2006. Einstein, un scientifique humaniste.' },
    '12': { type: 'Revue', description: 'Revue culturelle nº 53. Teruel.' },
    '13': {
        type: 'Revue', description: 'Publication du poème « Las cerezas de mi padre » dans Librújula.',
        externalNote: 'Poème publié dans le Club de poésie de Librújula, 2024',
    },
};

export const localizeCollaboration = (item: Collaboration, locale: Locale): LocalizedCollaboration =>
    locale === 'fr' ? { ...item, ...FR_METADATA[item.id] } : item;
