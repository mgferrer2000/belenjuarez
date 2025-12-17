import { Book, Collaboration, ArtPiece, Track, SocialLink } from './types';
import destierroCover from './documentación/2.1 LIBROS/DESTIERRO EN CUATRO ANGULOS/Portada-cuatroangulospeque.png';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Destierro en cuatro ángulos',
    year: '1999',
    description: 'Primer libro publicado en 1999, en la Editorial Devenir. El libro está dividido en cuatro capítulos Tierra, Agua, Aire y Fuego donde se repiten los títulos de los poemas. De tal forma que se puede leer de forma lineal (por capítulos) o tomando los poemas de igual título de cada capítulo convirtiéndose en un único poema deslizándose por los cuatro elementos. En palabras de Antonio Enrique (Turia, nº 53) «El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran).» La temática gira en torno al tiempo donde se sostiene la vida, y todas las miserias que en ella acontecen: El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes.',
    coverUrl: destierroCover,
    purchaseUrl: '#'
  },
  {
    id: '2',
    title: 'La Geometría del Silencio',
    year: '2021',
    description: 'Versos que dibujan las formas que deja la ausencia. Un poemario intimista y desgarrador.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80',
    purchaseUrl: '#'
  },
  {
    id: '3',
    title: 'Raíces de Vidrio',
    year: '2019',
    description: 'Opera prima. La fragilidad de la memoria y la dureza del olvido.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80',
    purchaseUrl: '#'
  }
];

export const COLLABORATIONS: Collaboration[] = [
  { id: '1', publication: 'Revista Literaria "El Viento"', title: 'Tres poemas de invierno', type: 'Revista', date: 'Dic 2023' },
  { id: '2', publication: 'Antología "Nuevas Voces"', title: 'Selección poética', type: 'Antología', date: 'Oct 2023' },
  { id: '3', publication: 'Diario Cultural', title: 'Reseña: La poesía en la era digital', type: 'Crítica', date: 'Ago 2023' },
  { id: '4', publication: 'Revista "Papel y Tinta"', title: 'Entrevista y muestra', type: 'Revista', date: 'May 2023' },
];

export const ALBUM_TRACKS: Track[] = [
  { id: '1', title: 'Singularidad (Intro)', duration: '2:14', poemSource: 'Prólogo' },
  { id: '2', title: 'Gravedad Cero', duration: '3:45', poemSource: 'Poema IV' },
  { id: '3', title: 'Ecos de Luz', duration: '4:12', poemSource: 'Poema XI' },
  { id: '4', title: 'Materia Oscura', duration: '3:30', poemSource: 'Poema XV' },
  { id: '5', title: 'El Último Fotón', duration: '5:01', poemSource: 'Epílogo' },
];

export const ART_PIECES: ArtPiece[] = [
  { id: '1', title: 'Estudio de manos', medium: 'Carboncillo', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80', aspectRatio: 'portrait' },
  { id: '2', title: 'Paisaje onírico', medium: 'Acuarela', imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=600&q=80', aspectRatio: 'landscape' },
  { id: '3', title: 'Autorretrato fragmentado', medium: 'Óleo', imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=500&q=80', aspectRatio: 'square' },
  { id: '4', title: 'Boceto urbano', medium: 'Tinta', imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=400&q=80', aspectRatio: 'portrait' },
  { id: '5', title: 'Abstracción I', medium: 'Acrílico', imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80', aspectRatio: 'landscape' },
  { id: '6', title: 'La espera', medium: 'Grafito', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80', aspectRatio: 'square' },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', iconName: 'Instagram' },
  { platform: 'Twitter', url: '#', iconName: 'Twitter' },
  { platform: 'Email', url: 'mailto:belen@example.com', iconName: 'Mail' },
];