import type { ShortStory } from '../types';
import type { Locale } from './config';

export const STORY_UI: Record<Locale, {
    heading: string; introduction: string; comingSoon: string; pdfAvailable: string;
    readStory: string; notFound: string; back: string; readingMinutes: (minutes: number) => string;
    synopsis: string; downloadPdf: string; downloadHint: string; authorQuote: string;
    sectionIllustrationAlt: (section: string | number) => string; end: string; backToGallery: string;
}> = {
    es: {
        heading: 'Relatos',
        introduction: 'Narrativas breves que exploran la memoria, el exilio y la identidad a través de prosa poética e ilustraciones sugerentes.',
        comingSoon: 'Próximamente', pdfAvailable: 'Disponible PDF', readStory: 'Leer relato',
        notFound: 'Relato no encontrado', back: 'Volver a relatos',
        readingMinutes: (minutes) => `${minutes} min de lectura`, synopsis: 'Sinopsis',
        downloadPdf: 'Descargar Edición PDF', downloadHint: 'Ideal para lectura offline e impresión',
        authorQuote: 'La memoria no es lo que recordamos, sino lo que nos recuerda.',
        sectionIllustrationAlt: (section) => `Ilustración de la sección ${section}`,
        end: 'Fin del relato', backToGallery: 'Volver a la galería de relatos',
    },
    fr: {
        heading: 'Récits',
        introduction: 'Des récits brefs qui explorent la mémoire, l’exil et l’identité à travers une prose poétique et des illustrations évocatrices.',
        comingSoon: 'Prochainement', pdfAvailable: 'PDF disponible', readStory: 'Lire le récit',
        notFound: 'Récit introuvable', back: 'Retour aux récits',
        readingMinutes: (minutes) => `${minutes} min de lecture`, synopsis: 'Résumé',
        downloadPdf: 'Télécharger l’édition PDF', downloadHint: 'Idéal pour la lecture hors ligne et l’impression',
        authorQuote: 'La mémoire n’est pas ce dont nous nous souvenons, mais ce qui se souvient de nous.',
        sectionIllustrationAlt: (section) => `Illustration de la section ${section}`,
        end: 'Fin du récit', backToGallery: 'Retour à la galerie des récits',
    },
};

const FR_STORY_METADATA: Record<string, Partial<ShortStory>> = {
    'al-otro-lado-del-mundo': {
        subtitle: 'Récits d’immigration',
        publicationInfo: 'El Tam-Tam de las nubes, p. 107-123.',
        synopsis: 'Un déplacement émotionnel et géographique du Paris des années soixante jusqu’aux racines andalouses. La mémoire d’une fillette de sept ans et la mythique Citroën DS 21 « Requin » s’entrelacent dans une épopée de l’exil et des retrouvailles.',
    },
    'helena-de-esparta': {
        subtitle: 'ET AU CENTRE, LA P E R S O N N E / Dialogue de la photographie',
        synopsis: 'Une relecture du mythe classique selon une perspective intime et personnelle, où Hélène affronte son destin le jour de son mariage.',
        sections: [
            {
                content: `Les heures de Ménélas oscillent, tel un temps aux coordonnées élastiques, prisonnier des jours agités des trois couronnes justement gagnées par le *prince de Troie*. Ses heures et ses minutes oscillent comme des pendules universels dans la trame malheureuse d’un temps incapable de se définir comme *Présent*, *Passé* ou *Futur*. Voici le moment des noces du roi de Sparte, où le *Présent* — impitoyable — improvise l’innocence féminine, puisqu’*Elle* est la créature la plus belle et la plus inconsciente du royaume spartiate. À ses côtés, *Himéros* imprègne subtilement sa robe de désir et de passion, la parant d’une beauté immaculée. Sa main droite est couronnée d’un bouquet de passions ardentes, nées de la *pomme d’or* lancée depuis l’Olympe, qui roula sur le sol jusqu’à venir gratuitement aux pieds de Pâris. Elle sera donc la *Dame du tournant de l’Histoire*. On l’appelait *Hélène de Troie* ; pourtant, le jour de son mariage, elle ne soupçonna jamais la sentence de son destin incertain.

     Et elle dit à son époux : —*Le temps m’a vaincue avec des poings d’argent. Sans que mes années aient vieilli, j’ai compris que le temps ne défait pas nos corps et ne fait pas décliner nos passions vers la mort ; sa présence nous châtie bien davantage lorsqu’elle nous révèle la vérité de notre erreur. Et notre guerre, celle qui fut chair de la chair, s’étend maintenant vers l’abîme que tu invoques, étrange luciole de mon passé aux yeux intenses de larmes vaincues. Tu es « l’homme du vent » que j’ai aimé depuis mes entrailles, que j’aime depuis mes paumes végétales ; tu es la maison ouverte où je fus femelle d’anxiété, heureuse dans l’innocence des jours trop courts, tel un bois odorant après le feu crépitant. Tu es ma légende, celle que jamais personne ne put comprendre. La mesure de la loi a raison de moi, le rugissement de ton bonheur a raison de moi, la porte grinçante que tu m’ouvres toujours à l’aube sous le secret de ton pain aux noix a raison de moi. Les eaux de ma liberté ont raison de moi. La porte, comme la mer de mes espaces, dissoute dans ce temps d’étranges désirs…*

     Ainsi arriva-t-il, un jour quelconque, qu’*Hélène* épousa *Ménélas*, quittant la maison blanche de ses ancêtres selon les désirs de l’Olympe, qui improvise tout et peut tout sur les mortels.

     *« Les heures de Ménélas oscillent comme un temps aux coordonnées élastiques ; les heures blanches de tous les mortels oscillent vers l’incertitude d’un temps pour l’amour appelé Dieu… ».*`,
            },
            { illustrationUrl: '/images/relatos/Helena_de_Esparta/Imagen5.jpg', content: '' },
        ],
    },
    'sandrine': {
        subtitle: 'Récits de Paris',
        synopsis: 'Un récit bref sur la bohème parisienne des années soixante, la musique d’une trompette et les rencontres inattendues sur les rives de la Seine.',
        sections: [
            {
                content: `La violence de cette nuit-là me pénétra jusqu’aux os ; l’ironie de l’impossible, portée par le parfum de la fumée des cigarettes douces, s’infiltra dans mon présent et me laissa bouleversé.

     Je regardais, je regardais, et je ne voyais que la cadence qui émanait de ce trou : de petites tables rondes parsemées de chapeaux, des regards à la Chanel qui allaient et venaient au galop sur des notes de musique dansantes ; des gabardines silencieuses suspendues à des portemanteaux à trois pieds exhalaient la buée de leurs propriétaires assoupis, tandis que ceux-ci, cramponnés à des coupes de champagne français, s’aventuraient au-delà de la scène.`,
            },
            {
                illustrationUrl: '/images/relatos/Sandrine/trompetista2.jpg', illustrationSize: 'sm',
                content: 'Et j’étais là, jouant de la trompette, tentant d’éclaircir l’esprit de jeunes filles de plus de quarante ans qui, jouant aux adultes, riaient de l’histoire absurde de leurs accompagnateurs : des religieuses au goût de cannelle, voilà, d’innocentes religieuses chaussées de talons aiguilles, dont la seule aspiration était de parvenir à inhaler avec élégance la fumée de leurs cigarettes.',
            },
            {
                content: `Et j’étais là, fidèle serviteur de cette faune incohérente et bohème, romantique et artiste comme l’était la vie nocturne du Paris des années soixante.

     Cette nuit-là, comme chaque soir après ma prestation, je pris un dernier verre au comptoir, rangeai ma trompette dans l’arrière-salle puis, après avoir pris mon chapeau et mon pardessus, rentrai à pied par les rues mélodiques que renferme la ville de la Seine.

     Je ne sus pas rentrer chez moi. Des images d’une autre enfance et le vieux son d’un accordéon désaccordé m’indiquèrent le chemin du souvenir : oui, des souvenirs déraisonnables qui transformèrent des instants aussi ordinaires que simples de ma vie. Mon chapeau s’envola, presque avec mépris pour mon crâne chauve, et vint se poser sur le dos humide d’une barque peinte en vert et grenat qui frottait doucement contre l’un des murs durs et glacés de la Seine. Je me traînai sur les pavés mouillés pour tenter d’atteindre mon ridicule chapeau lorsque ce dos humide palpita ; je sentis alors tout mon corps se couvrir de poils hérissés. Cette barque ne bougeait pas joyeusement au rythme des vagues tièdes de la Seine, mais avec un corps de femme, avec sérénité et patience. Ma cigarette roula, m’obligeant à la suivre du regard jusqu’à ce qu’elle s’arrête juste sur l’inscription presque illisible de la proue. Je fus saisi une seconde fois lorsque je pus lire le nom de Sandrine et me rappelai les mois heureux passés auprès d’elle au numéro 23 de la rue Lapin Pierot. Je réussis à récupérer mon chapeau, entièrement trempé et décoloré, puis courus aussi vite que je le pus, tandis que, depuis sa tombe, elle me répétait que tout cela n’était qu’une absurde coïncidence.

     Je ne rentrai pas chez moi cette nuit-là. Livré aux bras de la pluie, je tombai au pied d’un réverbère à la lumière faible et sombrai aussitôt dans un sommeil apaisant.`,
            },
            {
                title: 'II',
                content: 'Le lendemain, après avoir oublié ce qui s’était passé, je retournai dans l’atmosphère décadente de mon lieu de travail. Serrant ma trompette contre moi, je me mêlai aux regards de ces grandes filles torturées par les années et les talons hauts, sans remarquer qu’une femme, chaleureuse et belle, était assise face à moi, une cigarette blonde écrasée et mouillée entre les doigts.',
            },
        ],
    },
};

export const localizeStory = (story: ShortStory, locale: Locale): ShortStory =>
    locale === 'fr' ? { ...story, ...FR_STORY_METADATA[story.id] } : story;
