import type { Collaboration } from '../types';
import type { Locale } from './config';

export const COLLABORATION_UI: Record<Locale, {
    heading: string; inPublication: string; readMore: string; visit: string;
    back: string; notFound: string; illustrationAlt: (title: string) => string;
}> = {
    es: {
        heading: 'Poemas en antologías y revistas', inPublication: 'En:', readMore: 'Leer más', visit: 'Visitar',
        back: 'Volver a Antologías', notFound: 'Publicación no encontrada',
        illustrationAlt: (title) => `Ilustración para ${title}`,
    },
    fr: {
        heading: 'Poèmes en anthologies et revues', inPublication: 'Dans :', readMore: 'En savoir plus', visit: 'Visiter',
        back: 'Retour aux anthologies', notFound: 'Publication introuvable',
        illustrationAlt: (title) => `Illustration pour ${title}`,
    },
};

type LocalizedCollaboration = Omit<Collaboration, 'type'> & { type: string };

const FR_METADATA: Record<string, Partial<LocalizedCollaboration>> = {
    '1': {
        type: 'Anthologie',
        description: 'Participation à la rencontre annuelle des femmes poètes.',
        fullText: `Diversité des voix et des formes
Actes de la VIIIe Rencontre des femmes poètes
En mémoire d’Ernestina de Champourcin

**POÉTIQUE**
« Elle me permet de parler aujourd’hui… »

BELÉN JUÁREZ
p. 120, VIIe Rencontre des femmes poètes

… Parler de la Poésie alors qu’elle s’exprime elle-même dans les vers qu’elle nous murmure… Certes, ce n’est pas facile, mais s’il fallait dire quelque chose, ce serait que je suis à son service depuis de nombreuses années et que je n’écris que ce qu’elle me dicte. En ce sens, parler d’une poétique personnelle reviendrait à se regarder dans un miroir au moment même de la création, ou plutôt de « l’écoute ». Je défends l’idée que les poètes ne sont que les spectateurs attentifs d’une scène qui, parfois, se joue dans le théâtre de nos vies. Toute personne est porteuse de poésie, mais seuls quelques-uns peuvent l’interpréter. Nous avons souvent dit que nous ne sommes capables d’écrire de la poésie qu’à certains moments ; de nombreux auteurs en ont parlé, et c’est vrai, car Elle ne nous parle pas toujours. C’est à Elle de décider de se présenter à nous et de nous dire ce que nous devons écrire ; le poète n’apporte que sa plume, son style personnel, sa manière de la comprendre, de la voir et de la conduire jusqu’à notre dimension. La Poésie est Absolue, elle est Une, rien de plus… Quelque chose ou quelqu’un qui habite une dimension différente de la nôtre et apparaît parmi nous à travers la sensibilité de ceux qui vivent ici, car Elle appartient à cet Univers si multiple et pourtant si inconnu de nous… Nous sommes incapables de comprendre que la Réalité ne se limite pas à celle que nous vivons dans l’espace-temps que nous connaissons. C’est là que je me situe : je ne cherche pas à comprendre l’incompréhensible ; je suis consciente de mon incapacité à saisir le sens de ce qui est dépourvu de logique et de temps.

Je ne me sens capable de me libérer de mon espace et de mon temps que dans les rêves. C’est pourquoi certains auteurs m’ont appelée « la poète qui saisit l’autre réalité depuis le subconscient ». Le subconscient ? Peut-être… Là, je peux vivre une autre réalité sans me préoccuper de mes heures ni de mes mouvements ; là, je peux la pressentir. La Poésie nous rend humains. Elle nous rappelle que nous possédons la faculté d’intuition et que nous pouvons ainsi respirer ses arômes universels. J’ai certes peu publié, mais j’écris beaucoup depuis l’âge de neuf ans ; aujourd’hui, quarante guitares baignent déjà mon temps… J’ai parlé pour la première fois de la Tridimensionnalité de la Poésie en 1999, lorsque je me suis lancée dans la publication d’un premier livre. Puis est venu « La Noche de Ayer », qu’Antonio Enrique décrivit dans sa préface comme cryptique, impossible à pénétrer de l’extérieur. C’est vrai : ma manière de poétiser consiste à me laisser porter, à descendre ou à monter depuis la mémoire, depuis cette autre dimension libre et totale qui nous envahit lorsque nous ne contrôlons plus notre conscience. C’est seulement là que je suis poète, et être poète ne me rend propriétaire de rien. Personne ne possède la Poésie ; c’est pourquoi je ne parle jamais de « ma poésie », car elle n’est pas à moi. Tout au plus suis-je « sa poète », une guerrière de plus sur cette planète si précise et si petite. Ce livre l’a démontré : des tresses d’un temps où hier dépassait le présent. Et je continue d’écrire sa nébuleuse, ces sensations qui se replient parfois en moi comme deux univers parallèles cherchant à y entrer. J’ai écrit du théâtre encore inédit, j’ai écrit la mémoire des hommes et, récemment, « El Universo de las Luces ». Je n’ai jamais été pressée de publier ; cela arrivera simplement lorsque le moment sera venu. Dans « El Universo de las Luces », la seule chose qui m’importe est que ses vers aient eu la bonté de me choisir pour exprimer l’émotion si profonde vécue par un être depuis l’autre sillage de la réalité et par une femme qui habite n’importe quel lieu de ce temps… Je remercie donc la Poésie de vouloir que je sois poète, de me laisser écrire ce qu’elle me dicte : les vers de sa distance, de son amour et de sa maison.

**POÈME**

Du livre inédit _El Universo de las luces_
VIII, p. 153

Y fueron las vibraciones de un grito contra el tiempo,
y contra el tiempo que se expandía usando peldaños, y
que sufría a golpe de puños.

Fueron en busca de los vientos de Orión,
una y otra noche sobre la escapada
de la eterna dimensión de lo imposible.
Ganaron la placidez de ignorar el mundo
escrito sobre las malditas horas de templanza y sueño.

-Entrégate al agua,
a la cálida e intocable esencia del amor
que protege el recuerdo de una cuerda
que ahorca desde otro universo
tu cuello y mi música...

-Bellas fueron tus sonrisas desde el agua que todo lo puede,
como un dios de fuerzas satisfechas e insuperables,
bellos tus perfiles y las sombras inventadas
para ese otro universo que existe, que existe,
que nos existe...

Se quejaba el soldado
de las miles de sensaciones que prendían su alma,
de las ocultos y brutales cantos del Universo impuesto.

[[IMG:B:0]] [[IMG:B:1]]
`,
    },
    '2': { type: 'Revue', description: 'Poèmes « Sobra el Destino » dans la revue Alhucema 2-3.' },
    '3': { type: 'Revue', description: 'Poèmes inédits « París uno » dans la revue Alhucema 5.' },
    '4': { type: 'Revue', description: 'Sélection de poèmes de « La Noche de Ayer » dans Ánfora Nova.' },
    '5': { type: 'Revue', description: 'Poème « Las hijas de Dionisios » dans Ánfora Nova / Universos del Vino.' },
    '6': { type: 'Anthologie', description: 'Poème « En Altamira » dans l’anthologie Con Voz Propia.' },
    '7': { type: 'Anthologie', description: 'Poème « Hombre Olivo » dans l’anthologie El Oro Líquido.' },
    '8': {
        type: 'Anthologie',
        description: 'Édition de Diego Castillo Barco et Pedro Luis Ibáñez Lérida. La Puebla de los Infantes, Séville.',
        externalNote: 'Anthologie virtuelle « De pronto, ¡oh belleza!, canta el verderol », 2025',
    },
    '14': {
        type: 'Anthologie',
        description: 'Poème publié dans l’anthologie virtuelle du projet Encuentro de Letras Celestes, édition 2026.',
        externalNote: 'Anthologie virtuelle « Y ser como la estrella inaccesible y alta, alumbrando en silencio », 2026',
    },
    '9': { type: 'Revue', description: 'Nº 0, 2005.' },
    '10': {
        type: 'Anthologie', description: 'Participation à l’anthologie Poetas por la Paz.',
        externalNote: 'Poème publié dans le Club de poésie de la revue Librújula, 2025',
    },
    '11': { type: 'Revue', description: 'Nº 94, février 2006. Einstein, un scientifique humaniste.' },
    '12': { type: 'Revue', description: 'Revue culturelle nº 53. Teruel.' },
    '13': {
        type: 'Revue', description: 'Publication du poème « Las cerezas de mi padre » dans Librújula.',
        externalNote: 'Poème publié dans le Club de poésie de Librújula, 2024',
    },
};

export const localizeCollaboration = (item: Collaboration, locale: Locale): LocalizedCollaboration =>
    locale === 'fr' ? { ...item, ...FR_METADATA[item.id] } : item;
