import type { VisualPoetry } from '../constants';
import type { Locale } from './config';

type VisualPoetryUi = {
    title: string;
    subtitle: string;
    paragraphs: string[];
    closing: string;
    back: string;
    notFound: string;
    artwork: (index: number) => string;
};

export const VISUAL_POETRY_UI: Record<Locale, VisualPoetryUi> = {
    es: {
        title: 'Poesía Visual',
        subtitle: 'La Poesía visual no es grafismo',
        paragraphs: [
            'No es posible definir a la Poesía Visual sin una carga de magia y asombro, sin conducir la razón humana hacia el mundo de las emociones. Pensemos en la Poesía Visual como un instrumento más capaz de atrapar al verso, igual que utilizamos un piano, un violín o una guitarra para crear Música. Lo importante será la Música, el medio será el instrumento que utilicemos. Igual sucede con la Poesía.',
            'La Poesía es la meta donde anida la pureza emocional. La imagen, el sonido o la palabra son los instrumentos. En torno a esta idea, personalmente siempre aposté por el arte de la pintura como instrumento de expresión, utilicé el pincel para expresar todo ese conjunto de ideas, pensamientos y vértices que llegaban a mi entendimiento. Los pinceles me han acompañado siempre en la creación de la imagen de la Poesía.',
            'La Poesía Visual no es grafismo. Captura la metamorfosis del verso como un pincel clásico que al rozar el lienzo se transforma en cuerdas de luz, en poemas vibrantes, en sinfonía de tintas, en palabra sobre el trazo.',
            'Desde el pincel me brotan sombras, acrílicos, tintas, neones, geometrías, negaciones, letras grandes y pequeñas, rostros, notas musicales flotantes, movimiento, emoción.',
        ],
        closing: 'La Poesía visual no es grafismo, es un manantial de donde nace la palabra venida desde la retina, como río de lava volcada sobre el papel.',
        back: 'Volver a Poesía Visual',
        notFound: 'Colección no encontrada',
        artwork: (index) => `Obra ${index}`,
    },
    fr: {
        title: 'Poésie visuelle',
        subtitle: 'La Poésie visuelle n’est pas du graphisme',
        paragraphs: [
            'Il n’est pas possible de définir la Poésie visuelle sans une part de magie et d’émerveillement, sans conduire la raison humaine vers le monde des émotions. Pensons la Poésie visuelle comme un instrument capable de saisir le vers, de la même façon que nous utilisons un piano, un violon ou une guitare pour créer la Musique. L’essentiel est la Musique ; le moyen est l’instrument que nous employons. Il en va de même pour la Poésie.',
            'La Poésie est le but où niche la pureté émotionnelle. L’image, le son ou la parole en sont les instruments. Autour de cette idée, j’ai toujours choisi personnellement l’art de la peinture comme moyen d’expression ; j’ai utilisé le pinceau pour exprimer cet ensemble d’idées, de pensées et de sommets qui parvenaient à mon entendement. Les pinceaux m’ont toujours accompagnée dans la création de l’image de la Poésie.',
            'La Poésie visuelle n’est pas du graphisme. Elle saisit la métamorphose du vers comme un pinceau classique qui, au contact de la toile, se transforme en cordes de lumière, en poèmes vibrants, en symphonie d’encres, en parole posée sur le trait.',
            'Du pinceau jaillissent pour moi ombres, acryliques, encres, néons, géométries, négations, grandes et petites lettres, visages, notes musicales flottantes, mouvement et émotion.',
        ],
        closing: 'La Poésie visuelle n’est pas du graphisme ; elle est une source d’où naît la parole venue de la rétine, tel un fleuve de lave répandu sur le papier.',
        back: 'Retour à la Poésie visuelle',
        notFound: 'Collection introuvable',
        artwork: (index) => `Œuvre ${index}`,
    },
};

const FR_VISUAL_POETRY: Record<string, Partial<VisualPoetry>> = {
    'aldea-poetica': { description: 'Poésie visuelle et graphismes' },
    'anfora-nova-49': { description: 'Publications de Poésie visuelle' },
    'texturas-12': { description: 'Águilas sobre nuestras cabezas' },
    'poesia-andaluza': { description: 'Anthologie et catalogues' },
    'obras-ineditas': { description: 'Collection de poésie visuelle inédite' },
};

export const localizeVisualPoetry = (collection: VisualPoetry, locale: Locale): VisualPoetry =>
    locale === 'fr' ? { ...collection, ...FR_VISUAL_POETRY[collection.id] } : collection;
