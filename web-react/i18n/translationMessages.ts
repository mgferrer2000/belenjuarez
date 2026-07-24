import type { Locale } from './config';
import type { TranslationWork } from '../pages/ObraLiteraria/traduccionData';

export const TRANSLATION_UI: Record<Locale, {
    archive: string;
    heading: string;
    introduction: string[];
    openDetail: string;
    openTranslation: string;
    back: string;
    bilingualEdition: string;
    downloadPdf: string;
    notes: string;
    criticalReading: string;
    coverAlt: (title: string) => string;
}> = {
    es: {
        archive: 'Traducción',
        heading: 'Traducciones',
        introduction: [
            'Belén Juárez ha participado en la traducción de dos libros y dossiers poéticos. Este apartado reúne esas colaboraciones en una pequeña galería editorial desde la que acceder a cada lectura bilingüe.',
            'Cada ficha abre una página de detalle donde los poemas se presentan cara a cara, con el texto original y su versión traducida en paralelo.',
        ],
        openDetail: 'Ver detalle bilingüe',
        openTranslation: 'Abrir traducción',
        back: 'Volver a traducción',
        bilingualEdition: 'Edición bilingüe',
        downloadPdf: 'Descargar PDF',
        notes: 'Notas',
        criticalReading: 'Lectura crítica',
        coverAlt: (title) => `Portada de ${title}`,
    },
    fr: {
        archive: 'Traduction',
        heading: 'Traductions',
        introduction: [
            'Belén Juárez a participé à la traduction de deux livres et dossiers poétiques. Cette section rassemble ces collaborations dans une petite galerie éditoriale donnant accès à chaque lecture bilingue.',
            'Chaque fiche ouvre une page détaillée où les poèmes sont présentés face à face, avec le texte original et sa traduction en regard.',
        ],
        openDetail: 'Voir la lecture bilingue',
        openTranslation: 'Ouvrir la traduction',
        back: 'Retour aux traductions',
        bilingualEdition: 'Édition bilingue',
        downloadPdf: 'Télécharger le PDF',
        notes: 'Notes',
        criticalReading: 'Lecture critique',
        coverAlt: (title) => `Couverture de ${title}`,
    },
};

const FR_TRANSLATION_WORKS: Record<string, Partial<TranslationWork>> = {
    'las-noches-azules-del-alma': {
        roleLine: 'Poèmes d’Enrique Villagrasa. Traduction de Belén Juárez.',
        description: 'Livre bilingue dans lequel Belén Juárez participe à la traduction française de poèmes d’Enrique Villagrasa. La page détaillée présente une sélection de textes en regard afin de lire parallèlement l’original et sa traduction.',
        note: 'Le caractère bilingue et le ton contemplatif du livre sont préservés, les poèmes en espagnol et en français étant présentés face à face.',
    },
    'angel-ganivet': {
        authorsLine: 'Poèmes recueillis dans le livre SOBRE GANIVET, d’Antonio Gallego Morell.',
        roleLine: 'Traduction et analyse de Belén Juárez.',
        description: 'Sélection de poèmes d’Ángel Ganivet traduits par Belén Juárez et accompagnés d’une analyse critique. La lecture est présentée en colonnes parallèles afin de confronter l’original et sa traduction.',
        supplementaryNotes: [
            '(1) : Publié dans Boletín Centro Artístico, cité, et éd. Rosal citée ; (2) : publié dans Boletín cité (4 avril 1896).',
            '(3) : Publié dans Boletín cité (1896) ; (4) : publié dans Boletín cité (30 avril 1896) ; (5) : publié dans Boletín cité et éd. Rosal citée (30 avril 1896).',
            '(A) : Traduction du sens complet du poème.',
        ],
        analysis: `Nous pouvons voir en Ángel Ganivet le poète à la plume blessée : la force de ses sentiments, qui pour une raison ou une autre finit par le consumer au plus profond de sa douleur, saute aux yeux. Ses textes témoignent d’une sincérité totale, parmi les plus tristes de ce jeune consul à Helsingfors et écrivain excentrique de la Génération de 98. C’est pourtant son attachement à la souffrance qui le rend manifeste. Qui pourrait connaître la vérité de son esprit ? On pourrait plutôt penser qu’il cherche un coupable à ses écrits, peut-être une, deux ou plusieurs femmes. Il est facile d’accuser sans discernement, et l’étude de ses poèmes me conduit à penser qu’un mystère inné habitait ses doigts, un problème éloquent au cœur de son existence, auquel il donna libre cours, entre autres voies, par le « mal d’amour ». La rencontre et l’équilibre entre la Finlande et la ville de l’Alhambra ne sont pas aisés, plus encore pour ceux dont la sensibilité submerge l’esprit. Poète de génie, sans aucun doute, mais qui ne sut peut-être pas résoudre avec aisance l’époque qui lui échut.

*Un jour, j’appris l’existence d’une rose qui poussa dans le désert ; elle devint sel et personne ne se souvint de son parfum passé. On n’admira que sa beauté présente, sa dureté fragile de cristal, son image immaculée ; mais qui put rendre éternels sa couleur, son odeur, sa vivacité d’autrefois ?* Nous parlons de son intérêt pour les questions d’une Espagne sans frontières, qu’il ne put résoudre de son vivant. Une vie brève, parce qu’il le voulut ainsi — et qui sait si quelqu’un d’autre également —, mais qui nous montre en somme toute son intensité et son souci de voir les choses prendre une forme moins archaïque pour lui et pour son Espagne.

Je vois Ángel Ganivet comme le poète des arcades, celui qui, jusque depuis sa tombe, installa sa demeure close sous des arches ombreuses, dans une ville où toute beauté est dépourvue de nom matériel. Je vois Ángel Ganivet comme le poète de la Génération de Grenade, en 1898.`,
    },
};

const localizeLanguage = (language: string, locale: Locale): string => {
    if (locale !== 'fr') return language;
    if (language === 'Español') return 'Espagnol';
    if (language === 'Francés') return 'Français';
    return language;
};

export const localizeTranslationWork = (work: TranslationWork, locale: Locale): TranslationWork => {
    if (locale !== 'fr') return work;

    return {
        ...work,
        ...FR_TRANSLATION_WORKS[work.slug],
        sections: work.sections.map((section) => ({
            ...section,
            sourceLanguage: localizeLanguage(section.sourceLanguage, locale),
            targetLanguage: localizeLanguage(section.targetLanguage, locale),
        })),
    };
};
