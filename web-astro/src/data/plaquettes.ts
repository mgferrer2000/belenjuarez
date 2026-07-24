import { PLAQUETTES } from '@legacy/constants';
export const plaquettesContent = {
  es: {
    eyebrow: 'Edición breve', title: 'Plaquettes', sectionTitle: 'Obra Literaria', collection: 'Colección Plaquettes',
    seoTitle: 'Plaquettes de Belén Juárez | La reflexión de Boabdil',
    description: 'La reflexión de Boabdil, plaquette poética de Belén Juárez presentada en Granada con motivo del Día Mundial de la Poesía de 2025.',
    introduction: 'Ediciones breves en las que el poema, la imagen y el contexto de lectura forman una única pieza editorial.',
    date: '21 de marzo de 2025', event: 'Día mundial de la Poesía', location: 'Recital en Librería sostiene Pereira, Granada',
    publication: 'Revista Alhucema, Colección libros', credits: 'Textos y poemas', illustrationCredit: 'Ilustración Belén Juárez', end: 'Fin de la Plaquette',
    coverAlt: (title: string) => `Portada de ${title}`, illustrationAlt: 'Ilustración principal de la obra',
  },
  fr: {
    eyebrow: 'Édition brève', title: 'Plaquettes', sectionTitle: 'Œuvre littéraire', collection: 'Collection Plaquettes',
    seoTitle: 'Plaquettes de Belén Juárez | La reflexión de Boabdil',
    description: 'La reflexión de Boabdil, plaquette poétique de Belén Juárez présentée à Grenade à l’occasion de la Journée mondiale de la poésie 2025.',
    introduction: 'Des éditions brèves dans lesquelles le poème, l’image et le contexte de lecture forment une seule pièce éditoriale.',
    date: '21 mars 2025', event: 'Journée mondiale de la poésie', location: 'Récital à la librairie Sostiene Pereira, Grenade',
    publication: 'Revue Alhucema, collection Livres', credits: 'Textes et poèmes', illustrationCredit: 'Illustration de Belén Juárez', end: 'Fin de la plaquette',
    coverAlt: (title: string) => `Couverture de ${title}`, illustrationAlt: 'Illustration principale de l’œuvre',
  },
} as const;

export const plaquettes = PLAQUETTES;
