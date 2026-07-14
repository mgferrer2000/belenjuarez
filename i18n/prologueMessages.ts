import type { Locale } from './config';
import type { PrologueWork } from '../pages/ObraLiteraria/prologosData';

export const PROLOGUE_UI: Record<Locale, {
    archive: string;
    heading: string;
    introduction: string[];
    openReading: string;
    archiveFallback: string;
    continueReading: string;
    back: string;
    officialWebsite: string;
    coverAlt: (title: string) => string;
}> = {
    es: {
        archive: 'Archivo editorial',
        heading: 'Prólogos y capítulos de libro',
        introduction: [
            'Este apartado reúne prólogos, estudios introductorios y capítulos de libro escritos por Belén Juárez. La página principal presenta cada publicación como una pieza editorial independiente.',
            'Cada ficha conduce a una lectura de detalle pensada para consulta reposada, manteniendo la sobriedad y el ritmo visual del resto de la obra literaria.',
        ],
        openReading: 'Abrir lectura',
        archiveFallback: 'Archivo',
        continueReading: 'Seguir leyendo',
        back: 'Volver a prólogos',
        officialWebsite: 'Web oficial de Gustavo Vega',
        coverAlt: (title) => `Portada de ${title}`,
    },
    fr: {
        archive: 'Archives éditoriales',
        heading: 'Préfaces et chapitres d’ouvrage',
        introduction: [
            'Cette section réunit des préfaces, des études introductives et des chapitres d’ouvrage écrits par Belén Juárez. La page principale présente chaque publication comme une pièce éditoriale indépendante.',
            'Chaque notice mène à une page de lecture conçue pour une consultation attentive, dans la sobriété et le rythme visuel du reste de l’œuvre littéraire.',
        ],
        openReading: 'Ouvrir la lecture',
        archiveFallback: 'Archives',
        continueReading: 'Poursuivre la lecture',
        back: 'Retour aux préfaces',
        officialWebsite: 'Site officiel de Gustavo Vega',
        coverAlt: (title) => `Couverture de ${title}`,
    },
};

const FR_PROLOGUE_METADATA: Record<string, Partial<PrologueWork>> = {
    'quimica-del-amor': {
        title: 'La Chimie de l’Amour',
        typeLabel: 'Chapitre d’ouvrage',
        description: 'Chapitre consacré à l’amour dans la poésie d’al-Andalus, intégré à un volume de recherche sur le Maroc, le Sahara occidental et la tradition culturelle andalouse.',
    },
    'extramuros-31-poesia-arabe': {
        title: 'Poésie arabe : trésors et oasis linguistique de l’esprit humain',
        typeLabel: 'Préface / Numéro spécial',
        authorsLine: 'Coordination et sélection : Belén Juárez',
        description: 'Texte d’ouverture d’un numéro spécial d’Extramuros consacré à la poésie arabe contemporaine, selon une approche historique, culturelle et panoramique.',
    },
    'la-n-literaria-poesia-arabe': {
        title: 'Poésie arabe contemporaine',
        typeLabel: 'Préface',
        authorsLine: 'Préface de l’édition par Belén Juárez',
        description: 'Introduction à une sélection de poésie arabe contemporaine, centrée sur l’importance culturelle du genre et sur plusieurs auteurs arabes actuels.',
    },
    'gustavo-vega-poeticas-visuales': {
        title: 'Gustavo Vega : trente ans d’images et de verbes projetés sur l’infini',
        typeLabel: 'Préface / Étude introductive',
        description: 'Vaste étude introductive sur le parcours créatif et la poésie visuelle de Gustavo Vega, écrite pour accompagner le livre Poéticas Visuales.',
    },
};

export const localizePrologueWork = (work: PrologueWork, locale: Locale): PrologueWork =>
    locale === 'fr' ? { ...work, ...FR_PROLOGUE_METADATA[work.slug] } : work;
