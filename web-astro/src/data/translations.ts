import { TRANSLATION_WORKS, type TranslationWork } from '@legacy/pages/ObraLiteraria/traduccionData';
import { localizeTranslationWork } from '@legacy/i18n/translationMessages';
import type { Locale } from './site';

export const translationContent = {
  es: {
    sectionTitle: 'Obra Literaria', eyebrow: 'Traducción', title: 'Traducciones', seoTitle: 'Traducciones poéticas | Belén Juárez',
    description: 'Traducciones poéticas de Belén Juárez: Las noches azules del alma y poemas de Ángel Ganivet, presentados con original y traducción en paralelo.',
    introduction: ['Belén Juárez ha participado en la traducción de dos libros y dossiers poéticos. Este apartado reúne esas colaboraciones en una pequeña galería editorial desde la que acceder a cada lectura bilingüe.', 'Cada ficha abre una página de detalle donde los poemas se presentan cara a cara, con el texto original y su versión traducida en paralelo.'],
    open: 'Abrir traducción', openDetail: 'Ver detalle bilingüe', back: 'Volver a traducción', edition: 'Edición bilingüe', download: 'Descargar PDF', notes: 'Notas', analysis: 'Lectura crítica', cover: (title: string) => `Portada de ${title}`,
  },
  fr: {
    sectionTitle: 'Œuvre littéraire', eyebrow: 'Traduction', title: 'Traductions', seoTitle: 'Traductions poétiques | Belén Juárez',
    description: 'Traductions poétiques de Belén Juárez : Las noches azules del alma et poèmes d’Ángel Ganivet, présentés avec l’original et la traduction en regard.',
    introduction: ['Belén Juárez a participé à la traduction de deux livres et dossiers poétiques. Cette section rassemble ces collaborations dans une petite galerie éditoriale donnant accès à chaque lecture bilingue.', 'Chaque fiche ouvre une page détaillée où les poèmes sont présentés face à face, avec le texte original et sa traduction en regard.'],
    open: 'Ouvrir la traduction', openDetail: 'Voir la lecture bilingue', back: 'Retour aux traductions', edition: 'Édition bilingue', download: 'Télécharger le PDF', notes: 'Notes', analysis: 'Lecture critique', cover: (title: string) => `Couverture de ${title}`,
  },
} as const;

export const getTranslationWorks = (lang: Locale): TranslationWork[] => TRANSLATION_WORKS.map((work) => localizeTranslationWork(work, lang));
export const getTranslationWork = (slug: string, lang: Locale) => {
  const work = TRANSLATION_WORKS.find((item) => item.slug === slug);
  return work ? localizeTranslationWork(work, lang) : undefined;
};

export const translationLines = (text: string) => text.split('\n');
