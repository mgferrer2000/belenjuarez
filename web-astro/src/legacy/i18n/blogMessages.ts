import type { Locale } from './config';

export type BlogMessages = {
    title: string;
    introduction: string;
    allTags: string;
    filterLabel: string;
    clearFilters: string;
    noArticles: string;
    noTaggedArticles: string;
    readMore: string;
    loadingImage: string;
    pendingImage: string;
    imageError: string;
    imageAltPrefix: string;
    articleNotFound: string;
    backToBlog: string;
    backToIndex: string;
    unknownDate: string;
};

export const BLOG_MESSAGES: Record<Locale, BlogMessages> = {
    es: {
        title: 'Diario Abierto',
        introduction: 'Últimas participaciones en recitales y encuentros poéticos: poemas y textos inéditos.',
        allTags: 'Todas',
        filterLabel: 'Filtrar publicaciones por tema',
        clearFilters: 'Limpiar filtros',
        noArticles: 'Aún no se han publicado artículos. Vuelve pronto para leer nuevos textos.',
        noTaggedArticles: 'No hay artículos publicados con esa etiqueta.',
        readMore: 'Leer más',
        loadingImage: 'Cargando imagen',
        pendingImage: 'Imagen pendiente',
        imageError: 'No se ha podido cargar esta imagen.',
        imageAltPrefix: 'Imagen del post',
        articleNotFound: 'Artículo no encontrado',
        backToBlog: 'Volver al blog',
        backToIndex: 'Volver al índice',
        unknownDate: 'Fecha desconocida',
    },
    fr: {
        title: 'Journal ouvert',
        introduction: 'Dernières participations à des récitals et rencontres poétiques : poèmes et textes inédits.',
        allTags: 'Toutes',
        filterLabel: 'Filtrer les publications par thème',
        clearFilters: 'Effacer les filtres',
        noArticles: 'Aucun article n’a encore été publié. Revenez bientôt pour découvrir de nouveaux textes.',
        noTaggedArticles: 'Aucun article n’est publié avec cette étiquette.',
        readMore: 'Lire la suite',
        loadingImage: 'Chargement de l’image',
        pendingImage: 'Image en attente',
        imageError: 'Cette image n’a pas pu être chargée.',
        imageAltPrefix: 'Image de l’article',
        articleNotFound: 'Article introuvable',
        backToBlog: 'Retour au journal',
        backToIndex: 'Retour à l’index',
        unknownDate: 'Date inconnue',
    },
};

export const LITERARY_REVIEWS_MESSAGES: Record<Locale, BlogMessages> = {
    es: {
        title: 'Reseñas literarias',
        introduction: 'Lecturas críticas de libros y obras de otros autores.',
        allTags: 'Todas',
        filterLabel: 'Filtrar reseñas por tema',
        clearFilters: 'Limpiar filtros',
        noArticles: 'Aún no se han publicado reseñas literarias.',
        noTaggedArticles: 'No hay reseñas publicadas con esa etiqueta.',
        readMore: 'Leer reseña',
        loadingImage: 'Cargando imagen',
        pendingImage: 'Imagen pendiente',
        imageError: 'No se ha podido cargar esta imagen.',
        imageAltPrefix: 'Imagen de la reseña',
        articleNotFound: 'Reseña no encontrada',
        backToBlog: 'Volver a las reseñas',
        backToIndex: 'Volver a las reseñas',
        unknownDate: 'Fecha desconocida',
    },
    fr: {
        title: 'Critiques littéraires',
        introduction: 'Lectures critiques de livres et d’œuvres d’autres auteurs.',
        allTags: 'Toutes',
        filterLabel: 'Filtrer les critiques par thème',
        clearFilters: 'Effacer les filtres',
        noArticles: 'Aucune critique littéraire n’a encore été publiée.',
        noTaggedArticles: 'Aucune critique n’est publiée avec cette étiquette.',
        readMore: 'Lire la critique',
        loadingImage: 'Chargement de l’image',
        pendingImage: 'Image en attente',
        imageError: 'Cette image n’a pas pu être chargée.',
        imageAltPrefix: 'Image de la critique',
        articleNotFound: 'Critique introuvable',
        backToBlog: 'Retour aux critiques',
        backToIndex: 'Retour aux critiques',
        unknownDate: 'Date inconnue',
    },
};
