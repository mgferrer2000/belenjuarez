import { PROLOGUE_WORKS, type PrologueWork } from '@legacy/pages/ObraLiteraria/prologosData';
import { localizePrologueWork } from '@legacy/i18n/prologueMessages';
import type { Locale } from './site';

export const prologueContent = {
  es: {
    sectionTitle: 'Obra Literaria', eyebrow: 'Archivo editorial', title: 'Prólogos y capítulos de libro',
    seoTitle: 'Prólogos y capítulos de libro | Belén Juárez',
    description: 'Prólogos, estudios introductorios y capítulos de libro escritos por Belén Juárez sobre poesía, cultura árabe, al-Andalus y poesía visual.',
    introduction: ['Este apartado reúne prólogos, estudios introductorios y capítulos de libro escritos por Belén Juárez. La página principal presenta cada publicación como una pieza editorial independiente.', 'Cada ficha conduce a una lectura de detalle pensada para consulta reposada, manteniendo la sobriedad y el ritmo visual del resto de la obra literaria.'],
    read: 'Seguir leyendo', openReading: 'Abrir lectura', archiveFallback: 'Archivo', back: 'Volver a prólogos', cover: (title: string) => `Portada de ${title}`, minutes: 'min de lectura', official: 'Web oficial de Gustavo Vega',
  },
  fr: {
    sectionTitle: 'Œuvre littéraire', eyebrow: 'Archives éditoriales', title: 'Préfaces et chapitres d’ouvrage',
    seoTitle: 'Préfaces et chapitres d’ouvrage | Belén Juárez',
    description: 'Préfaces, études introductives et chapitres d’ouvrage écrits par Belén Juárez sur la poésie, la culture arabe, al-Andalus et la poésie visuelle.',
    introduction: ['Cette section réunit des préfaces, des études introductives et des chapitres d’ouvrage écrits par Belén Juárez. La page principale présente chaque publication comme une pièce éditoriale indépendante.', 'Chaque notice mène à une page de lecture conçue pour une consultation attentive, dans la sobriété et le rythme visuel du reste de l’œuvre littéraire.'],
    read: 'Poursuivre la lecture', openReading: 'Ouvrir la lecture', archiveFallback: 'Archives', back: 'Retour aux préfaces', cover: (title: string) => `Couverture de ${title}`, minutes: 'min de lecture', official: 'Site officiel de Gustavo Vega',
  },
} as const;

export const getPrologueWorks = (lang: Locale): PrologueWork[] => PROLOGUE_WORKS.map((work) => localizePrologueWork(work, lang));

export const getPrologueWork = (slug: string, lang: Locale) => {
  const work = PROLOGUE_WORKS.find((item) => item.slug === slug);
  return work ? localizePrologueWork(work, lang) : undefined;
};

export const prologueReadingMinutes = (work: PrologueWork) => Math.max(1, Math.ceil(work.content.join(' ').trim().split(/\s+/).length / 210));

export const isPrologueHeading = (paragraph: string) => {
  const value = paragraph.trim();
  if (!value || value.length > 135) return false;
  return value === value.toLocaleUpperCase('es') || /^\d+(?:\.\d+)*[.\s]/.test(value) || /^[A-ZÁÉÍÓÚÑÜÇÀÈÙÂÊÎÔÛËÏÜŒ]\.[\s]/.test(value);
};
