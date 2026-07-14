import type { Interview } from '../types';
import type { Locale } from './config';

export const INTERVIEW_UI: Record<Locale, {
    heading: string;
    introduction: string;
    by: string;
    continueReading: string;
    back: string;
    coverAlt: (title: string) => string;
    illustrationAlt: (index: number) => string;
}> = {
    es: {
        heading: 'Entrevistas',
        introduction: 'Conversaciones y diálogos en profundidad.',
        by: 'Por',
        continueReading: 'Seguir leyendo',
        back: 'Volver',
        coverAlt: (title) => `Portada de ${title}`,
        illustrationAlt: (index) => `Ilustración de la entrevista ${index}`,
    },
    fr: {
        heading: 'Entretiens',
        introduction: 'Conversations et dialogues approfondis.',
        by: 'Par',
        continueReading: 'Lire la suite',
        back: 'Retour aux entretiens',
        coverAlt: (title) => `Couverture de ${title}`,
        illustrationAlt: (index) => `Illustration de l’entretien ${index}`,
    },
};

const FR_INTERVIEW_METADATA: Record<string, Partial<Interview>> = {
    'entrevista-antonio-carvajal': {
        title: 'ENTRETIEN AVEC ANTONIO CARVAJAL',
        publication: 'Ficciones, Revista de Letras. 2e époque. nº 1. Printemps 1997. p. 4-11',
        date: '13 mars 1997',
        intro: 'Nous sommes à la Faculté de traduction de l’Université de Grenade, où Antonio Carvajal exerce son activité professionnelle comme professeur de théorie de la littérature. Aujourd’hui, 13 mars 1997, il nous reçoit aimablement et aménage son emploi du temps chargé pour nous consacrer quelques instants.',
    },
    'entrevista-juan-carlos-sunen': {
        title: 'ENTRETIEN AVEC JUAN CARLOS SUÑÉN',
        publication: 'Ficciones, Revista de Letras. 2e époque. nº 2. Été/Automne 1997. p. 58-63',
        date: 'Été/Automne 1997',
        intro: 'Onze heures du matin. Nous sommes au Círculo de Bellas Artes de Madrid, où Juan Carlos Suñén, auteur de nombreux livres et lauréat de tout autant de prix nationaux, me reçoit.',
    },
    'entrevista-juan-carlos-rodriguez': {
        title: 'ENTRETIEN AVEC JUAN CARLOS RODRIGUEZ, UN PHILOSOPHE CONTEMPORAIN',
        publication: 'Ficciones, Revista de Letras. 2e époque. nº 4. Automne/Hiver 1998. p. 37-44',
        date: 'Automne/Hiver 1998',
        intro: `Juan Carlos Rodríguez fut professeur titulaire de littérature à la Faculté de philosophie et lettres de l’Université de Grenade. Il se consacra exclusivement à l’enseignement ainsi qu’à la recherche théorique et critique. Il publia les ouvrages suivants : Teoría e Historia de la Producción Ideológica (Madrid, Akal, 1975. 2e éd. 1990) ; Melodrama y Populismo en la cultura latinoamericana (inclus dans Granada Tango, 1981) ; La Norma Literaria (Grenade, Diputación Provincial, 1984. 2e éd. 1994) ; Moratín o el arte nuevo de hacer teatro (Grenade, La General, 1991) ; Introducción al estudio de la Literatura Hispanoamericana (Akal, 1987, en collaboration avec Álvaro Salvador. 2e éd. 1994) ; La Poesía, la Música y el Silencio (de Mallarmé a Wittgenstein) (Renacimiento, Séville, 1994) ; Lorca y el Sentido (Un Inconsciente para una Historia) (Madrid, Akal, 1994) ; La Literatura del Pobre (Grenade, Comares, 1994).

Son livre Teoría e Historia de la Producción Ideológica fut traduit par l’Université de New York, où il donna au printemps 1998 un cours intitulé « La renovación del pensamiento marxista: Louis Althusser y Juan Carlos Rodríguez ». Au printemps 1999, il y donna un autre cours intitulé « Neomarxismo y Postmodernismo: Juan Carlos Rodríguez y Anthony Cascardi ».

Parmi les autres ouvrages qu’il avait publiés au moment de l’entretien figuraient Brecht y el poder de la Literatura (Comares, collection De guante blanco) et El escritor que compró su propio libro (Comares, collection De guante blanco).`,
    },
};

const FR_INTERVIEW_CONTENT: Record<string, Record<number, string>> = {};

export const localizeInterview = (interview: Interview, locale: Locale): Interview => {
    if (locale !== 'fr') return interview;

    const translatedLines = FR_INTERVIEW_CONTENT[interview.slug];
    const content = translatedLines
        ? interview.content.split('\n').map((line, index) => translatedLines[index] ?? line).join('\n')
        : interview.content;

    return {
        ...interview,
        ...FR_INTERVIEW_METADATA[interview.slug],
        content,
    };
};
