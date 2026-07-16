import type { Locale } from './config';

export type CommonMessages = {
    metaTitle: string;
    loadingPage: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
    footerCredit: string;
    sectionTitles: {
        literary: string;
        art: string;
        music: string;
    };
    nav: {
        home: string;
        about: string;
        biography: string;
        literaryCv: string;
        scientificCv: string;
        literaryWork: string;
        books: string;
        bookReviews: string;
        anthologies: string;
        plaquettes: string;
        stories: string;
        literaryCriticism: string;
        andalusiCriticism: string;
        prologues: string;
        translation: string;
        interviews: string;
        visualPoetry: string;
        art: string;
        paintings: string;
        bookIllustration: string;
        artCriticism: string;
        music: string;
        musicPoetry: string;
        horizonte: string;
        videos: string;
        openDiary: string;
        literaryReviews: string;
        contact: string;
    };
};

export const COMMON_MESSAGES: Record<Locale, CommonMessages> = {
    es: {
        metaTitle: 'Belén Juárez | Poeta y artista',
        loadingPage: 'Abriendo página…',
        languageLabel: 'Idioma',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        footerCredit: 'Diseño web y programación por',
        sectionTitles: {
            literary: 'Obra Literaria',
            art: 'Arte: La Geometría del Verso',
            music: 'Música: La Sonoridad del Verso',
        },
        nav: {
            home: 'Inicio',
            about: 'Sobre Belén',
            biography: 'Biografía',
            literaryCv: 'Currículum literario y artístico',
            scientificCv: 'Currículum científico',
            literaryWork: 'Obra Literaria',
            books: 'Libros',
            bookReviews: 'Reseñas sobre libros',
            anthologies: 'Poemas en antologías y revistas',
            plaquettes: 'Plaquettes',
            stories: 'Relatos',
            literaryCriticism: 'Crítica literaria',
            andalusiCriticism: 'Crítica libros legado andalusí',
            prologues: 'Prólogos y capítulos de libro',
            translation: 'Traducción',
            interviews: 'Entrevistas a escritores',
            visualPoetry: 'Poesía Visual',
            art: 'Arte',
            paintings: 'Cuadros',
            bookIllustration: 'Ilustración de Libros',
            artCriticism: 'Crítica Artística',
            music: 'Música',
            musicPoetry: 'Música y Poesía',
            horizonte: 'Horizonte de Sucesos',
            videos: 'Vídeos',
            openDiary: 'Diario Abierto',
            literaryReviews: 'Reseñas literarias',
            contact: 'Contacto',
        },
    },
    fr: {
        metaTitle: 'Belén Juárez | Poète et artiste',
        loadingPage: 'Ouverture de la page…',
        languageLabel: 'Langue',
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
        footerCredit: 'Conception et développement web par',
        sectionTitles: {
            literary: 'Œuvre littéraire',
            art: 'Art : La géométrie du vers',
            music: 'Musique : La sonorité du vers',
        },
        nav: {
            home: 'Accueil',
            about: 'À propos de Belén',
            biography: 'Biographie',
            literaryCv: 'Curriculum littéraire et artistique',
            scientificCv: 'Curriculum scientifique',
            literaryWork: 'Œuvre littéraire',
            books: 'Livres',
            bookReviews: 'Critiques de livres',
            anthologies: 'Poèmes en anthologies et revues',
            plaquettes: 'Plaquettes',
            stories: 'Récits',
            literaryCriticism: 'Critique littéraire',
            andalusiCriticism: 'Critique des livres de l’héritage andalou',
            prologues: 'Préfaces et chapitres d’ouvrages',
            translation: 'Traduction',
            interviews: 'Entretiens avec des écrivains',
            visualPoetry: 'Poésie visuelle',
            art: 'Art',
            paintings: 'Peintures',
            bookIllustration: 'Illustration de livres',
            artCriticism: 'Critique artistique',
            music: 'Musique',
            musicPoetry: 'Musique et poésie',
            horizonte: 'Horizonte de Sucesos',
            videos: 'Vidéos',
            openDiary: 'Journal ouvert',
            literaryReviews: 'Critiques littéraires',
            contact: 'Contact',
        },
    },
};
