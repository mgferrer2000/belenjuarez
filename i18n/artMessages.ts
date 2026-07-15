import type { Locale } from './config';
import type { ArtArticle } from '../types';

type ArtUi = {
    paintingsIntro: string;
    filters: {
        all: string;
        paintings: string;
        sketches: string;
    };
    viewDetail: string;
    moreWorks: string;
    illustrationsIntro: string;
    illustrationsFor: (title: string) => string;
    backToBooks: string;
    viewIllustrations: string;
    review: {
        pretitle: string;
        title: string;
        author: string;
        paragraphs: string[];
    };
};

export const ART_UI: Record<Locale, ArtUi> = {
    es: {
        paintingsIntro: 'Dibujos, pinturas y bocetos. La línea como extensión del verso',
        filters: {
            all: 'Todo el Arte',
            paintings: 'Cuadros/Pinturas',
            sketches: 'Bocetos a lápiz',
        },
        viewDetail: 'Ver detalle',
        moreWorks: 'Ver más obras',
        illustrationsIntro: 'Acompañando la palabra. El trazo que da vida a la voz escrita',
        illustrationsFor: (title) => `Ilustraciones para ${title}`,
        backToBooks: 'Volver a los libros',
        viewIllustrations: 'Ver ilustraciones',
        review: {
            pretitle: 'Sobre el trazo de Belén Juárez',
            title: 'Pintando poesía',
            author: 'Juan Carlos Lazúen. Profesor de Arte y Pintor. 2001',
            paragraphs: [
                'Observando la obra de Belén Juárez, es fácilmente constatable la afirmación de que “la poesía puede ser pintada”.',
                'Con una formación estrictamente autodidacta, esta infatigable y valiosa creyente de todo tipo de manifestaciones culturales y sobre todo en todo lo referido a literatura y poesía, materializa sentimientos, sensaciones y sueños con asombrosa facilidad y acierto. Son obras absolutas, originadas a partir de la lectura sosegada y atenta de los poemas que componen este libro, valiosos complementos a la poesía de autores consagrados y espléndidas obras de arte en sí mismas que relatan con peculiar y personalísimo lenguaje un mundo interior rico en vivencias en el que prepondera la necesidad de comunicar de forma sosegada y elegante su paraíso interior.',
                'El rotundo grafismo, de influencias lejanas, casi orientales y un vaporoso y etéreo fondo de poliédricas sugerencias y sutil cromatismo dibujan rostros y personajes que una atenta mirada de quien los contempla, al tiempo que lee los poemas, acaba enriquecido.',
                'Artistas como Belén Juárez, son merecedores de toda admiración y respeto.',
            ],
        },
    },
    fr: {
        paintingsIntro: 'Dessins, peintures et esquisses. La ligne comme prolongement du vers',
        filters: {
            all: 'Tout l’art',
            paintings: 'Tableaux / peintures',
            sketches: 'Esquisses au crayon',
        },
        viewDetail: 'Voir le détail',
        moreWorks: 'Voir plus d’œuvres',
        illustrationsIntro: 'Accompagner la parole. Le trait qui donne vie à la voix écrite',
        illustrationsFor: (title) => `Illustrations pour ${title}`,
        backToBooks: 'Retour aux livres',
        viewIllustrations: 'Voir les illustrations',
        review: {
            pretitle: 'À propos du trait de Belén Juárez',
            title: 'Peindre la poésie',
            author: 'Juan Carlos Lazúen. Professeur d’art et peintre. 2001',
            paragraphs: [
                'En observant l’œuvre de Belén Juárez, on constate aisément que « la poésie peut être peinte ».',
                'Avec une formation strictement autodidacte, cette infatigable et précieuse croyante en toutes les manifestations culturelles, et surtout en tout ce qui concerne la littérature et la poésie, matérialise sentiments, sensations et rêves avec une facilité et une justesse surprenantes. Ce sont des œuvres absolues, nées d’une lecture paisible et attentive des poèmes qui composent ce livre : de précieux compléments à la poésie d’auteurs consacrés et de splendides œuvres d’art en elles-mêmes. Par un langage singulier et très personnel, elles racontent un monde intérieur riche en expériences, où domine le besoin de communiquer avec sérénité et élégance son paradis intime.',
                'Un graphisme vigoureux, aux influences lointaines, presque orientales, et un fond vaporeux et éthéré de suggestions polyédriques et de chromatisme subtil dessinent des visages et des personnages. Le regard attentif de celui qui les contemple tout en lisant les poèmes s’en trouve enrichi.',
                'Des artistes comme Belén Juárez méritent toute notre admiration et notre respect.',
            ],
        },
    },
};

export const ART_CRITIQUE_UI: Record<Locale, {
    label: string;
    by: string;
    report: string;
    enlarge: string;
    illustrationAlt: (index: number) => string;
    enlargementAlt: string;
    quote: string;
}> = {
    es: {
        label: 'Crítica de Arte Histórica',
        by: 'Por',
        report: 'El Reportaje',
        enlarge: 'Haz clic para ampliar',
        illustrationAlt: (index) => `Ilustración ${index}`,
        enlargementAlt: 'Ampliación de crítica',
        quote: 'El negro es el protagonista indiscutible de estas misteriosas obras, en las que, más que organicidad, lo que se palpa es el frío metálico y deshumanizado de los submundos imposibles a los que puede abocar la mente humana',
    },
    fr: {
        label: 'Critique d’art historique',
        by: 'Par',
        report: 'Le reportage',
        enlarge: 'Cliquez pour agrandir',
        illustrationAlt: (index) => `Illustration ${index}`,
        enlargementAlt: 'Agrandissement de la critique',
        quote: 'Le noir est le protagoniste incontestable de ces œuvres mystérieuses où, plus que l’organicité, on perçoit le froid métallique et déshumanisé de sous-mondes impossibles auxquels peut conduire l’esprit humain.',
    },
};

const FR_ART_CRITIQUE: Partial<ArtArticle> = {
    date: 'Juin 1991',
    extraInfo: 'Numéro 54, publié par l’Université de Grenade',
    content: `Belén Juárez a exposé ses « Rostros » à la Faculté des sciences jusqu’au 10 mai. Autour de cette thématique obsessionnelle, la jeune artiste a développé une intéressante série de travaux qui pose clairement les bases de ce qui pourra, à l’avenir, devenir un déploiement plus vaste des idées ésotériques donnant forme et vigueur à ces souvenirs, prémonitions et sensations qui imprègnent entièrement son élan créateur.

La grande inquiétude de Belén, qui cherche à exprimer le vaste flot de sentiment artistique qui l’anime, ces « fantômes » du passé et de l’avenir qu’elle tente d’exorciser par son geste, ces formes enchevêtrées, clair reflet de l’amalgame viscéral d’ambiguïtés qui constitue en somme l’existence, s’est manifestée dans cette récente exposition. L’ensemble de l’œuvre présentée, réuni en trois séries très définies, comprenait aussi une sculpture suggestive, germe évident de productions futures plus ambitieuses.

Dans ces trois séries — pastel, encre et huile, toutes réalisées sur papier — apparaît la détermination claire de la jeune autrice à progresser dans le domaine de l’art, tant par ses ressources matérielles que par ses concepts de fond et de forme. Le geste et le graphisme constituent logiquement une base extraordinaire, au début de tout parcours artistique, pour l’établissement des fondements de connaissance indispensables dans ce domaine difficile. Parfois avec timidité, Belén Juárez s’est engagée sur le chemin que sa propre intuition créatrice lui indiquait.

Le noir est le protagoniste incontestable de ces œuvres mystérieuses où, plus que l’organicité, on perçoit le froid métallique et déshumanisé de sous-mondes impossibles auxquels peut conduire l’esprit humain. Le noir, contrepoint parfaitement adapté des tons pastel, des empâtements d’huile francs et vifs, définit à lui seul cette dichotomie particulière entre le surréel et l’abstrait, le kandinskien et le postmoderne, qui caractérise fondamentalement l’œuvre exposée par Belén. Le noir, expression du tragique, sert d’équilibre et de repère parmi les masses chromatiques disloquées que la jeune peintre parvient à relier grâce à lui. Car la couleur et les formes qu’elle peut suggérer ou définir, par ses gradations, son interprétation, sa profondeur et ses contrastes, constituent clairement le défi le plus ardu que Belén Juárez doit maintenant relever. Dans ces premières conceptions, on apprécie la netteté et l’équilibre de son sens chromatique ; ils s’accroîtront et s’enrichiront nécessairement par la pratique, à mesure que son évident effort de recherche développera de nouvelles possibilités techniques plus exigeantes, donnant toujours plus d’élan à son incontestable imagination artistique, peuplée de visages, de couleur, de traits et de sentiment.`,
    images: [
        { url: '/images/Critica-artistica/revista_campus_grande.jpg' },
        { url: '/images/Critica-artistica/rostro_de_perro.jpg', caption: 'Cráneo de perro, 1990. Marbre / huile.' },
        { url: '/images/Critica-artistica/rostros2.jpg', caption: 'Quelques tableaux de la série « Rostro de los siete colores », 1987. Cire / encre sur papier.' },
    ],
};

export const localizeArtCritique = (article: ArtArticle, locale: Locale): ArtArticle =>
    locale === 'fr' ? { ...article, ...FR_ART_CRITIQUE } : article;
