import { ALBUM_TRACKS } from '@legacy/constants';
import { MUSIC_HORIZON_MESSAGES, MUSIC_POETRY_MESSAGES, MUSIC_VIDEOS_MESSAGES } from '@legacy/i18n/musicMessages';
import type { Locale } from './site';

export const musicContent = {
  es: { eyebrow: 'La palabra sonora', title: 'Música', pageTitle: 'Música: La Sonoridad del Verso', seoTitle: 'Música y poesía de Belén Juárez | Horizonte de Sucesos', description: 'Música, poesía y creación audiovisual de Belén Juárez: el álbum Horizonte de Sucesos, recitales, piezas visuales y vídeos.', introduction: 'La palabra abandona el papel para convertirse en voz, ritmo, imagen y experiencia audiovisual.', explore: 'Explorar sección', play: 'Reproducir', sections: [
    { path: 'poesia', number: '01', title: 'Música y poesía', navTitle: 'Música y Poesía', text: 'Una pieza audiovisual donde palabra, música y arte visual comparten escenario.', image: '/images/cuadros/Musica 2005.jpg' },
    { path: 'horizonte', number: '02', title: 'Horizonte de Sucesos', navTitle: 'Horizonte de Sucesos', text: 'Un álbum de 21 canciones construido a partir de los poemas del libro homónimo.', image: '/images/Horizonte_de_Sucesos/1 PORTADA.JPG' },
    { path: 'videos', number: '03', title: 'Vídeos', navTitle: 'Vídeos', text: 'Piezas audiovisuales que prolongan los poemas mediante música e imagen.', image: 'https://img.youtube.com/vi/53OVZR2ryWQ/maxresdefault.jpg' },
  ] },
  fr: { eyebrow: 'La parole sonore', title: 'Musique', pageTitle: 'Musique : La sonorité du vers', seoTitle: 'Musique et poésie de Belén Juárez | Horizonte de Sucesos', description: 'Musique, poésie et création audiovisuelle de Belén Juárez : l’album Horizonte de Sucesos, récitals, pièces visuelles et vidéos.', introduction: 'La parole quitte le papier pour devenir voix, rythme, image et expérience audiovisuelle.', explore: 'Explorer la section', play: 'Lire', sections: [
    { path: 'poesia', number: '01', title: 'Musique et poésie', navTitle: 'Musique et poésie', text: 'Une pièce audiovisuelle où parole, musique et art visuel partagent la scène.', image: '/images/cuadros/Musica 2005.jpg' },
    { path: 'horizonte', number: '02', title: 'Horizonte de Sucesos', navTitle: 'Horizonte de Sucesos', text: 'Un album de 21 chansons construit à partir des poèmes du livre homonyme.', image: '/images/Horizonte_de_Sucesos/1 PORTADA.JPG' },
    { path: 'videos', number: '03', title: 'Vidéos', navTitle: 'Vidéos', text: 'Des pièces audiovisuelles qui prolongent les poèmes par la musique et l’image.', image: 'https://img.youtube.com/vi/53OVZR2ryWQ/maxresdefault.jpg' },
  ] },
} as const;
export const getMusicPoetry = (lang: Locale) => MUSIC_POETRY_MESSAGES[lang];
export const getMusicHorizon = (lang: Locale) => MUSIC_HORIZON_MESSAGES[lang];
export const getMusicVideos = (lang: Locale) => MUSIC_VIDEOS_MESSAGES[lang];
export const albumTracks = ALBUM_TRACKS;
