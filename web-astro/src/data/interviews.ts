import { INTERVIEWS } from '@legacy/constants';
import { localizeInterview } from '@legacy/i18n/interviewMessages';
import type { Interview } from '@legacy/types';
import type { Locale } from './site';

export const interviewContent = {
  es: {
    sectionTitle: 'Obra Literaria', eyebrow: 'Archivo de conversaciones', title: 'Entrevistas', seoTitle: 'Entrevistas a escritores | Belén Juárez',
    description: 'Entrevistas de Belén Juárez a Antonio Carvajal, Juan Carlos Suñén y Juan Carlos Rodríguez publicadas en la revista Ficciones.',
    introduction: 'Conversaciones y diálogos en profundidad.',
    read: 'Seguir leyendo', back: 'Volver', by: 'Por', cover: (title: string) => `Portada de ${title}`, image: (value: number) => `Ilustración de la entrevista ${value}`,
  },
  fr: {
    sectionTitle: 'Œuvre littéraire', eyebrow: 'Archives de conversations', title: 'Entretiens', seoTitle: 'Entretiens avec des écrivains | Belén Juárez',
    description: 'Entretiens de Belén Juárez avec Antonio Carvajal, Juan Carlos Suñén et Juan Carlos Rodríguez, publiés dans la revue Ficciones.',
    introduction: 'Conversations et dialogues approfondis.',
    read: 'Lire la suite', back: 'Retour aux entretiens', by: 'Par', cover: (title: string) => `Couverture de ${title}`, image: (value: number) => `Illustration de l’entretien ${value}`,
  },
} as const;

export const getInterviews = (lang: Locale): Interview[] => INTERVIEWS.map((interview) => localizeInterview(interview, lang));
export const getInterview = (slug: string, lang: Locale) => {
  const interview = INTERVIEWS.find((item) => item.slug === slug);
  return interview ? localizeInterview(interview, lang) : undefined;
};

export const interviewReadingMinutes = (interview: Interview) => Math.max(1, Math.ceil(`${interview.intro} ${interview.content}`.trim().split(/\s+/).length / 210));

export type InterviewBlock =
  | { type: 'space' | 'break' }
  | { type: 'title' | 'subtitle' | 'subtitle-italic' | 'quote' | 'poem' | 'question' | 'answer' | 'paragraph'; text: string }
  | { type: 'named-answer'; prefix: string; text: string }
  | { type: 'book'; title: string; details: string }
  | { type: 'image'; index: number; align: 'L' | 'R' | 'C' }
  | { type: 'double-image'; indexes: [number, number] };

export const parseInterview = (text: string): InterviewBlock[] => text.split('\n').map((rawLine) => {
  const line = rawLine.trim();
  if (!line) return { type: 'space' };
  if (line === '[BR]') return { type: 'break' };
  const doubleImage = line.match(/^\[DOUBLE-IMG:(\d+):(\d+)\]$/);
  if (doubleImage) return { type: 'double-image', indexes: [Number(doubleImage[1]), Number(doubleImage[2])] };
  const image = line.match(/^\[IMG:(\d+)(?::([LRC]))?\]$/);
  if (image) return { type: 'image', index: Number(image[1]), align: (image[2] as 'L' | 'R' | 'C') ?? 'C' };
  if (line.startsWith('[TITLE-CENTER-BOLD]')) return { type: 'title', text: line.slice(19).trim() };
  if (line.startsWith('[SUBTITLE-CENTER-ITALIC]')) return { type: 'subtitle-italic', text: line.slice(24).trim() };
  if (line.startsWith('[SUBTITLE-CENTER]')) return { type: 'subtitle', text: line.slice(17).trim() };
  if (line.startsWith('[QUOTE]')) return { type: 'quote', text: line.slice(7).trim() };
  if (line.startsWith('[POEM]')) return { type: 'poem', text: line.slice(6).trim() };
  if (line.startsWith('[BOOK]')) {
    const [title, ...details] = line.slice(6).split('|');
    return { type: 'book', title: title.trim(), details: details.join('|').trim() };
  }
  if (/^(F\.|F:|Ficciones\.)/.test(line)) return { type: 'question', text: line };
  if (line.startsWith('—')) return { type: 'answer', text: line.slice(1).trim() };
  const namedAnswer = line.match(/^(A\. C\.|A\. Carvajal):\s*(.*)$/);
  if (namedAnswer) return { type: 'named-answer', prefix: `${namedAnswer[1]}:`, text: namedAnswer[2] };
  return { type: 'paragraph', text: line };
});

export const interviewee = (slug: string) => ({
  'entrevista-antonio-carvajal': 'Antonio Carvajal',
  'entrevista-juan-carlos-sunen': 'Juan Carlos Suñén',
  'entrevista-juan-carlos-rodriguez': 'Juan Carlos Rodríguez',
}[slug] ?? 'Escritor entrevistado');
