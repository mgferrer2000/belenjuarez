import type { Locale } from './config';

type MusicPoetryMessages = {
    title: string;
    introduction: string;
    videoTitle: string;
    liveExhibition: string;
    exhibitionText: string;
    pieceTitle: string;
    paragraphs: string[];
};

export const MUSIC_POETRY_MESSAGES: Record<Locale, MusicPoetryMessages> = {
    es: {
        title: 'Música y Poesía',
        introduction: 'Donde la palabra se convierte en sonido y la imagen en verso. Una pieza audiovisual que fusiona poesía, música y arte visual.',
        videoTitle: 'Música y Poesía - Belén Juárez',
        liveExhibition: 'Exhibición en Directo',
        exhibitionText: 'VIII Encuentro de mujeres poetas. En memoria de Ernestina de Champourcin. “Diversidad de voces y formas”. Museo Artium de Vitoria, 2005. Organizado por Ángela Serna.',
        pieceTitle: 'El Vals de lo Invisible',
        paragraphs: [
            'La música y la palabra no son artes distintas; son hilos de un mismo tapiz universal donde el sentir cobra forma. Allí, donde el silencio se rinde, emergen las notas de Rachmaninov: pulsos de una realidad ultrajada que él supo diseñar con la maestría de quien acaricia el infinito.',
            'Yo me sumo a ese eco. Acompaño la elocuente mudez del maestro ruso con la huella de mis trazos y la arquitectura de mis versos. Como un diálogo de sombras y luces, un baile donde las blancas, negras y corcheas se atreven a ser cuerpos: bailarinas etéreas que danzan en el filo del tiempo, suspendidas entre los acordes del Concierto Número 2.',
            'En este espacio, el piano respira, se mueve sobre la vida, habitando los sueños que aún no nos atrevemos a soñar. Los versos que acompañan al maestro proceden del libro "El universo de las luces" aún sin publicar, versos que duermen en el lecho del silencio desde hace ya tanto tiempo.',
        ],
    },
    fr: {
        title: 'Musique et Poésie',
        introduction: 'Là où la parole devient son et l’image vers. Une pièce audiovisuelle qui unit poésie, musique et art visuel.',
        videoTitle: 'Musique et Poésie - Belén Juárez',
        liveExhibition: 'Présentation en direct',
        exhibitionText: 'VIIIe Rencontre de femmes poètes. En mémoire d’Ernestina de Champourcin. « Diversidad de voces y formas ». Musée Artium de Vitoria, 2005. Organisée par Ángela Serna.',
        pieceTitle: 'El Vals de lo Invisible',
        paragraphs: [
            'La musique et la parole ne sont pas des arts distincts ; elles sont les fils d’une même tapisserie universelle dans laquelle le ressenti prend forme. Là où le silence se rend, les notes de Rachmaninov émergent : les pulsations d’une réalité meurtrie qu’il a su façonner avec la maîtrise de qui caresse l’infini.',
            'Je me joins à cet écho. J’accompagne le silence éloquent du maître russe de la trace de mes traits et de l’architecture de mes vers. Comme un dialogue d’ombres et de lumières, une danse où les blanches, les noires et les croches osent devenir des corps : des danseuses éthérées qui dansent sur le fil du temps, suspendues entre les accords du Concerto nº 2.',
            'Dans cet espace, le piano respire et se meut sur la vie, habitant les rêves que nous n’osons pas encore rêver. Les vers qui accompagnent le maître proviennent du livre inédit « El universo de las luces », des vers qui dorment depuis si longtemps dans le lit du silence.',
        ],
    },
};
