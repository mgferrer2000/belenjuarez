import type { Locale } from './config';

export const LITERARY_CRITICISM_UI: Record<Locale, {
    title: string;
    introduction: string;
    byline: (year: string) => string;
    pending: string;
    continueReading: string;
    back: string;
    noImage: string;
    illustrativeImage: (index: number) => string;
    unavailable: string;
}> = {
    es: {
        title: 'Crítica Literaria',
        introduction: 'Selección de colaboraciones en revistas literarias y publicaciones culturales.',
        byline: (year) => `Belén Juárez - ${year}`,
        pending: 'Texto pendiente.',
        continueReading: 'Seguir leyendo',
        back: 'Volver',
        noImage: 'Sin imagen',
        illustrativeImage: (index) => `Imagen ilustrativa ${index}`,
        unavailable: 'Contenido no disponible.',
    },
    fr: {
        title: 'Critique littéraire',
        introduction: 'Sélection de contributions dans des revues littéraires et des publications culturelles.',
        byline: (year) => `Belén Juárez - ${year}`,
        pending: 'Texte en attente.',
        continueReading: 'Lire la suite',
        back: 'Retour',
        noImage: 'Sans image',
        illustrativeImage: (index) => `Image illustrative ${index}`,
        unavailable: 'Contenu indisponible.',
    },
};

export const ANDALUSI_UI: Record<Locale, {
    archive: string;
    title: string;
    introduction: [string, string];
    magazine: string;
    reviewedBooks: string;
    years: Record<string, string>;
    issues: Record<string, string>;
}> = {
    es: {
        archive: 'Archivo Crítico',
        title: 'Crítica libros legado andalusí',
        introduction: [
            'Relación de libros reseñados por Belén Juárez en la revista El Legado andalusí, subtitulada Una nueva sociedad mediterránea.',
            'La selección recoge distintas entregas de la publicación y deja ver un horizonte de lectura amplio: historia, memoria, mundo mediterráneo, al-Andalus, narrativa, poesía y ensayo cultural.',
        ],
        magazine: 'Revista',
        reviewedBooks: 'Libros reseñados',
        years: { 'Ano IV': 'Año IV', 'Ano V': 'Año V', 'Ano VI': 'Año VI' },
        issues: { 'Numeros 14-15-16': 'Números 14-15-16', 'Numeros 17-19-20': 'Números 17-19-20', 'Numero 21': 'Número 21' },
    },
    fr: {
        archive: 'Archives critiques',
        title: 'Critiques de livres du Legado andalusí',
        introduction: [
            'Liste des ouvrages recensés par Belén Juárez dans la revue El Legado andalusí, sous-titrée Una nueva sociedad mediterránea.',
            'La sélection rassemble plusieurs livraisons de la publication et dessine un vaste horizon de lecture : histoire, mémoire, monde méditerranéen, al-Andalus, récit, poésie et essai culturel.',
        ],
        magazine: 'Revue',
        reviewedBooks: 'Livres recensés',
        years: { 'Ano IV': 'Année IV', 'Ano V': 'Année V', 'Ano VI': 'Année VI' },
        issues: { 'Numeros 14-15-16': 'Numéros 14-15-16', 'Numeros 17-19-20': 'Numéros 17-19-20', 'Numero 21': 'Numéro 21' },
    },
};
