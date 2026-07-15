import type { Locale } from './config';
import type { LiteraryCriticism, ReviewItem } from '../types';

export const LITERARY_CRITICISM_UI: Record<Locale, {
    title: string;
    introduction: string;
    byline: (year: string) => string;
    pending: string;
    continueReading: string;
    back: string;
    noImage: string;
    illustrativeImage: (index: number) => string;
    unavailable: string;
}> = {
    es: {
        title: 'Crítica Literaria',
        introduction: 'Selección de colaboraciones en revistas literarias y publicaciones culturales.',
        byline: (year) => `Belén Juárez - ${year}`,
        pending: 'Texto pendiente.',
        continueReading: 'Seguir leyendo',
        back: 'Volver',
        noImage: 'Sin imagen',
        illustrativeImage: (index) => `Imagen ilustrativa ${index}`,
        unavailable: 'Contenido no disponible.',
    },
    fr: {
        title: 'Critique littéraire',
        introduction: 'Sélection de contributions dans des revues littéraires et des publications culturelles.',
        byline: (year) => `Belén Juárez - ${year}`,
        pending: 'Texte en attente.',
        continueReading: 'Lire la suite',
        back: 'Retour',
        noImage: 'Sans image',
        illustrativeImage: (index) => `Image illustrative ${index}`,
        unavailable: 'Contenu indisponible.',
    },
};

export const ANDALUSI_UI: Record<Locale, {
    archive: string;
    title: string;
    introduction: [string, string];
    magazine: string;
    reviewedBooks: string;
    years: Record<string, string>;
    issues: Record<string, string>;
}> = {
    es: {
        archive: 'Archivo Crítico',
        title: 'Crítica libros legado andalusí',
        introduction: [
            'Relación de libros reseñados por Belén Juárez en la revista El Legado andalusí, subtitulada Una nueva sociedad mediterránea.',
            'La selección recoge distintas entregas de la publicación y deja ver un horizonte de lectura amplio: historia, memoria, mundo mediterráneo, al-Andalus, narrativa, poesía y ensayo cultural.',
        ],
        magazine: 'Revista',
        reviewedBooks: 'Libros reseñados',
        years: { 'Ano IV': 'Año IV', 'Ano V': 'Año V', 'Ano VI': 'Año VI' },
        issues: { 'Numeros 14-15-16': 'Números 14-15-16', 'Numeros 17-19-20': 'Números 17-19-20', 'Numero 21': 'Número 21' },
    },
    fr: {
        archive: 'Archives critiques',
        title: 'Critiques de livres du Legado andalusí',
        introduction: [
            'Liste des ouvrages recensés par Belén Juárez dans la revue El Legado andalusí, sous-titrée Una nueva sociedad mediterránea.',
            'La sélection rassemble plusieurs livraisons de la publication et dessine un vaste horizon de lecture : histoire, mémoire, monde méditerranéen, al-Andalus, récit, poésie et essai culturel.',
        ],
        magazine: 'Revue',
        reviewedBooks: 'Livres recensés',
        years: { 'Ano IV': 'Année IV', 'Ano V': 'Année V', 'Ano VI': 'Année VI' },
        issues: { 'Numeros 14-15-16': 'Numéros 14-15-16', 'Numeros 17-19-20': 'Numéros 17-19-20', 'Numero 21': 'Numéro 21' },
    },
};

const FR_LITERARY_CRITICISMS: Record<string, Partial<LiteraryCriticism>> = {
    'ficciones-3': {
        excerpt: `EL HOMBRE DE LUXEMBURGO (Tusquets, 1997), d'Arnaldo Calveyra. PARÉNTESIS DE TIEMPO, SILENCIO Y CURVATURAS (Devenir, 1998), de Juan Pastor. RECÓNDITO TRASLUZ (Junta de Extremadura, 1997), de Serafín Portillo. RECUERDO EN LA NOCHE (Devenir, 1997), de Carmen Serna. PERTENECÍ (Colección Sureste Narrativa, 1997), d'Andrés Neuman.`,
    },
    'ficciones-4': {
        excerpt: `CUANTAS LLAVES (Icaria, 1998), de Concha García. EL LIBRO DE LOS SALMOS (Devenir, 1998), de Jesús Urceloy. TODOS LOS NOMBRES (Alfaguara, 1998), de José Saramago. SIN PUERTAS (Pre-textos, 1996) et EL SILLÓN MALVA (Planeta, 1995), de Ramón Mayrata.`,
    },
    alhucema: {
        excerpt: `RAFAEL RODRÍGUEZ ALMODÓVAR Y EL VERSO DE LOS AÑOS. Compte rendu du livre : MEMORIA DE UN TIEMPO CUMPLIDO. Collection littéraire CAROAL. 2001

Des vers qui retracent le parcours d'un temps qui s'est évanoui entre les mains de ce poète, laissant derrière lui une trace d'acceptation, de tristesse et d'une étonnante clairvoyance. L'auteur condense son temps dans ce recueil avec élégance et maîtrise. Le livre est préfacé par Mari Luz Escribano, elle aussi disparue, avec qui l'auteur entretint une relation littéraire étroite et harmonieuse dans la revue Extramuros, qui fut une référence des Lettres espagnoles de ces années-là. Il demeure, sans le moindre doute, l'essence de ces années baignées par l'éclat de poètes remarquables et d'une poésie plurielle. Nous trouvons ici des vers limpides et profonds d'un poète aujourd'hui disparu. Dès les premières pages se laisse percevoir la paisible tristesse d'un temps accompli.`,
    },
    extramuros: {
        excerpt: `LO MIRÉ A LOS OJOS

Compte rendu du livre : DE(S)APARICIONES
PEDRO J. DE LA PEÑA

Ediciones Libertarias, Poesía. 1994

Je voudrais préciser le début du compte rendu de ce livre : « Lors d'une chaude aube dans le désert effrayant de l'aéroport de Valence, entre rires et émotions, je conversais avec un vieil ami, tandis que moi, peu naïve et plus antarctique que jamais, je flairais parmi les anonymes, entamant mon voyage et mon aventure vers les terres orientales de dattes et de soupirs. » J'ai connu Pedro J. Peña il y a plus de vingt ans, à l'aéroport de Valence, en route vers l'Institut Cervantes de Beyrouth. Avec Ricardo Bellveser et Antonio Porpetta, nous avions été invités à porter nos vers sur les rivages les plus orientaux de la Méditerranée. Aujourd'hui, aucun des trois n'est encore parmi nous ; leur départ continue de me bouleverser et leurs vers de m'émouvoir. Le livre de Pedro J. de la Peña, écrit en 1994 et ici recensé, débordait de passion, d'ironie et de silences majestueux écrits en vers. « Le poète doit faire ressentir », a-t-il dit un jour. Il nous reste aujourd'hui son âme, son sourire et ce haut-de-forme foisonnant de vers.`,
    },
};

const FR_LITERARY_REVIEW_TEXTS: Record<string, string> = {
    'hombre-luxemburgo': `Poèmes d'Arnaldo Calveyra, tirés des souvenirs qui remontent à sa mémoire, depuis un lieu du passé où se joue un présent apparemment immobile. Né en 1929 en Argentine, l'auteur s'installe à Paris par les paradoxes de la vie ; depuis lors, il a publié des poèmes, du théâtre, des romans et des récits. Les instants d'une promenade singulière dans un jardin quelconque font naître en lui une évidente impression de similitude. Il ne s'agit pas d'un livre voué à la nostalgie ou à la délicatesse d'une réalité douce : l'ouvrage présente une double perspective, presque les expériences d'un même présent en deux lieux et deux temps différents. Une source, qui revient tout au long des vers, devient le centre ou le point de mire de cette double perspective : une scène décrite, un jardin immobile, des personnages sans voix dont la présence se devine :

Manantial fabricado, instante
en círculo, asciende su forma, asciende y recae en eso
el agua, borrador, derrama, manera tan suya de
mencionar los jardines del sur incansablemente bellos.

Envión aquietado del chorro,
averigua por la rama que habrá de inclinarse en la alta
noche —su instante narrativo—, palabras sin sílabas de
la hora, gramo de sentido que empezará a faltarle el aire.

Las personas que conversaban
se ponen de pie, se dicen "au revoir"...

Le livre se distingue par sa maîtrise du langage et laisse clairement apparaître la permanence d'une enfance et d'une adolescence argentines transportées dans les paysages froids de la ville de la Seine. C'est sans aucun doute une œuvre intéressante, faite de vers longs et descriptifs.`,
    'parentesis-tiempo': `Dans ce livre, Juan Pastor rassemble des poèmes écrits entre 1975 et 1983. Dans son premier ensemble, les poèmes, de structure et de contenu simples, sont en vers libres : ils laissent moins percevoir l'agressivité qu'un ton doux, mélodique, non romantique, qui révèle néanmoins la sensibilité de l'auteur.
De la même époque, un an plus tard, viennent des textes de même orientation, peut-être influencés par le temps auquel ils appartiennent et qui empruntent, entre autres, les voies du sentiment.
Dans sa dernière partie, il présente une prose poétique d'une grande maturité, une histoire solidement construite autour des questions absolues de l'esprit.
Tout au long du livre, malgré l'écart des années auxquelles appartiennent les vers, frappe le ton obsédant de l'auteur dans la répétition de termes comme « dedos ». Cela n'est pas contestable ; l'auteur souhaite peut-être consigner de manière claire et manifeste toutes les sensations tangibles qui l'envahissent.
L'auteur invite le lecteur à se balancer parmi tous les lieux habités par un temps, dignes d'être nommés et toujours rappelés depuis un silence écrit qui provoque le devenir logique de l'existence.`,
    'recondito-trasluz': `Ce livre repose dans l'abîme des lumières et du temps. L'auteur connaît parfaitement les formes de l'écriture, mais pratique un classicisme reporté à nos jours, où son expérience personnelle n'a pas de place, tandis que peuvent y entrer toutes les expériences des hommes et des femmes. C'est donc un livre où rien et tout ont accès : où la sobre nostalgie de tout ce qui est indescriptible, la lumière, le temps, la solitude ou le silence, est captive des vers par le travail de l'écriture.
Le livre se définit et s'encadre dans deux approches qui se mêlent au point de rencontre du sentiment humain : classique dans sa forme et son contexte, actuel par les touches qui font apparaître le temps de l'homme moderne, « Paisajes desde terrazas » face à « Paisaje desde el mar ». Le point de rencontre est le vide qui demeure lorsque l'être se tient sans défense devant les sentiments les plus ancestraux qui peuplent le destin de l'Homme.
Soigneusement écrit, c'est une poésie qui se berce entre lumières et pénombres ; cette œuvre précise est une histoire sans titres, parmi des vers qui laissent deviner un titre unique : Recóndito trasluz.`,
    'recuerdo-noche': `La poésie de Carmen Serna est facile à comprendre et touche en même temps l'âme dans sa douleur, par la passion et la douceur qu'elle porte. La Poésie elle-même atteint des chemins insoupçonnés ; il arrive que l'on cherche l'ambiguïté des mots et le doute du lecteur. Pourtant, il n'y a pas de secrets dans l'écriture de cette autrice, qui fait converger vérités et armures dans tout un monde de sentiments.
Elle sépare son œuvre en différents titres autour de « Recuerdos de una noche », peut-être l'unique nuit qui habite la poésie de Carmen Serna.`,
    'perteneci': `Ce premier livre d'Andrés Neuman apparaît avec une portée symbolique lorsqu'il tente d'effleurer une réalité au sein du monde surréel. Écrire des récits auxquels on appartient tout en les dominant, puis cesser de leur appartenir comme on s'enfuit vers d'autres destins : telle est sans doute l'idée que laisse entrevoir l'auteur. Il se plonge en effet dans ses propres histoires et y trouve du plaisir, jusqu'au moment précis où une forme acquiert sa consistance. Des histoires bidimensionnelles, comme les récits d'Héctor Álvarez et de Mallea lui-même, qui dérivent vers l'inconscience.
Tous les récits ont un dénominateur commun : la conséquence de la conclusion à laquelle parviennent leurs protagonistes dans chaque histoire. Ils décident eux-mêmes de l'ironie de leur destin et se laissent à la fois balancer par le devenir de leurs vies. Les motifs des histoires passent au second plan ; ils ne sont pas l'essentiel, mais la conséquence qui achèvera chaque récit.
L'auteur est né en Amérique du Sud, peut-être sous l'influence de procédés qui dissimulent les données et les situations, comme chez Juan Carlos Onetti, et même de touches plus fantaisistes, dans une proximité avec Jorge Onetti. Son style mêle les avant-gardes originelles et les plus avancées de ces dernières années.
L'un des récits, pas le premier, qui ne donne pas son titre mais sa forme au livre, semble situer l'histoire des hommes autour d'une vie nocturne débouchant sur la vie quotidienne. Ce livre n'est-il pas réellement une progression à travers les nuits pour atteindre les clartés d'autres œuvres possibles ?
PERTENECÍ, premier titre évocateur, ouvre avec certitude la voie à des livres à venir, plus ambitieux, dans la logique de cette volonté de dépassement.`,
    'cuantas-llaves': `S'asseoir pour découvrir un rituel hermétique, silencieux, cohérent avec l'existence même, qui met à nu tous les extrêmes du désordre de ce que l'on est et de ce que l'on vit. CUÁNTAS LLAVES, combien de clefs ouvriraient l'espace cubique d'un livre qui déplore, dès le début, tout le monde qu'un personnage protagoniste de son présent est incapable de voir. Pourtant, l'autrice est réelle dans son regard, maîtresse de toutes les clefs qui, depuis le quotidien, nous laissent accéder aux sensations imperceptibles et pourtant si évidentes de tout homme ou de toute femme. Depuis cette réalité, tout ce qui tient dans une poche ou entre les yeux devient éloquent. Mais atteindre cette position initiale, depuis une solitude incertaine, depuis une situation de courage, peut parfois nous échapper ; c'est alors la poète qui guide nos mains fermées et les remplit de clefs, de choses tangibles, d'habitudes. Ce livre contient le balancement et la maîtrise des mots, mots que l'on ne peut parfois découvrir, dans la surprise, qu'à travers l'encre de l'écrivaine : souvenirs d'un futur mal calculé, négation d'un présent immobile au profit de la tentative de prolonger ce présent, ou incertitude d'un passé qui ne l'est pas du point de vue du langage. On vit dans ce livre ; on en commence la lecture avec un goût en bouche que l'on n'a pas demandé, puis, à mesure qu'il avance, le futur s'empare de notre temps parmi les instants du quotidien.
En effet, un futur fragmenté et mal calculé par le lecteur, qui se sent contraint par sa propre expérience de posséder chacune des lignes ici écrites.
Le silence se déploie depuis une musique intérieure et nous oblige à réfléchir par la poésie, par les mots, par l'harmonie de lettres parfaitement équilibrées :

_En la vida de cualquiera_
_no hay nada más perverso_
_que un amor imposible. Sirve oler_
_cualquier ángulo de la sábana_
_para tener certezas de segundo orden._

Depuis ce drap, à propos du quotidien, on regarde le plafond ou la fenêtre, et cela ne sera pas l'essentiel, car les éléments de la vie ne sont que des instruments au service du temps de la femme intérieure qui vit de l'autre côté de Concha. Cet itinéraire singulier commence par une situation qui pourrait être celle de n'importe qui :

_Hubo suerte al dejar el coche_
_situándolo junto al hotel. Mi rostro_
_había cambiado en esas horas._
_Te distraje en el aparcamiento_
_y vi a dios un rato, desconecté_
_la radio y me puse la ropa_
_de los días helados. Te amaba_
_mientras perdía las llaves . ..._

Elle révèle également un présent, ou un passé, déjà évoqué comme prolongé :

_... Bendije mi pasado_
_por haberme ocultado tanto_
_quebranto del alma, sospeché_
_que tu silencio provenía de un amor_
_lejano, y me acerqué a tu lado. ..._

Et elle nous conduit finalement, à la fin du poème, vers ce futur, ou ce présent, qui s'impose à nous depuis les jours :

_...Yo y mi cuerpo. Este cuerpo_
_que debe sentarse reclinado_
_para que los delirios sean reales._
...
_Me crecen facultades extrañas_
_como si fuesen antiguas, las reconozco_
_en mi manera de estar_
_de concederle a la noche días aparte._

Antonio Ortega écrit dans LA PRUEBA DEL NUEVE (anthologie) : « Lorsque le lecteur entre dans l'un des livres de Concha, il perçoit presque aussitôt deux choses : la souveraineté du sujet lyrique (mon personnage littéraire est une femme et le langage qu'il transmet est le langage d'une autre femme) et la singularité de sa construction personnelle de la parole qui le soutient. »
Comme dirait Oscar Wilde : _La vida moral del hombre forma parte del tema del artista, pero la moralidad del arte consiste en el perfecto uso de un medio imperfecto_. C'est à lui que je m'en remets, et pour le moment à lui seul, lorsqu'il nous dit depuis les pages jaunies d'un livre presque oublié que —_Los que encuentran bellas intenciones en las cosas bellas son los cultos. A ellos les queda la esperanza_—
Il reste à Concha l'espérance, mais pas seulement le beau : elle fait de l'usage du langage une morale, dont découle la perfection de son emploi. De ce livre, combien de clefs serons-nous capables de découvrir ? Jusqu'où ira notre capacité à parvenir ?

_... Debo regresar a las sábanas_
_pagaremos mañana. Ven._
_....Iremos._`,
    'libro-salmos': `_…Concibo la poesía como el mayor acto de libertad…_
[R] J. Urceloy

Premier livre publié de ce jeune auteur, il mérite, dès ses débuts, toute notre attention. Divisé en trois livres eux-mêmes organisés par années, il rassemble des poèmes de 1985 à 1998. Il retient l'attention de la critique par l'originalité de son ton : un psaume d'expériences qui échappent aux mains et parviennent à l'oreille en tentant d'affronter l'inexistence du quotidien. Il ouvre ses textes d'une manière surprenante, avec une force inquiétante extraordinaire :

_Yo, ego, pecador_
_de una nueva forma de blasfemia..._

Tout au long de ses textes, il tente et parvient à toucher l'évident et ce que l'on ne remarque pas habituellement : trois psaumes mineurs portés par les lignes d'un boléro, qui achèvent son premier espace pour se poursuivre, dans un second temps, sur le ton du vécu.

_...Lo peor es tu amor por esa chica que hoy comparte mi cama,_
_y la frialdad con que escribe tu nombre_
_en su libreta azul de los festivos._

Il décrit enfin une ligne de rythme entièrement concave, faite de chutes et de montées qui vont jusqu'à provoquer le vertige des idées. Elle s'entrelace à de brefs souvenirs, peut-être à la crainte d'aller de l'avant, mais avec toute la lucidité d'un poète remarquable à découvrir.

_...alzo esta capa y brindo por vosotros,_
_y doy gracias al cielo la virtud_
_de haberos conocido y la desgracia_
_de no ser peor poeta o mercader._

Ainsi, c'est la force poétique qui ressort le plus de ses lignes. Peut-être appartient-il à notre prochaine génération de rythmes nouveaux, qui entre déjà dans le nouveau millénaire. Comme il le dit lui-même : peu m'importe comment un poème a été écrit, s'il me parle. S'il parle. S'il communique. S'il est honnête, en somme. Mais je n'admets pas l'ignorance, l'absence de rigueur, la décadence, comme disait Twain, dans l'art de mentir. Et cela se remarque. Toujours. La poésie est.`,
    'todos-nombres': `L'écrivain écrit un livre, mais ce livre n'est pas achevé tant que le lecteur ne l'a pas parfaitement compris.
Pilar del Río.

L'auteur nous surprend à nouveau, après plus de dix livres publiés dans une brillante trajectoire commencée publiquement avec EL AÑO DE LA MUERTE DE RICARDO REIS. Et il nous surprend car il ne s'agit pas d'un simple roman de divertissement routinier, exercice facile de nos jours et parfois d'une vulgaire audace chez bien des auteurs que je ne souhaite même pas nommer.
L'ouvrage entend mettre en évidence l'importance du langage, le caractère essentiel de la parole comme origine de la ressource la plus élémentaire de l'être humain. Je ne m'intéresse pas seulement à son usage juste : sa tendance à dénoncer la violation sociale, fait presque parallèle à la condition humaine elle-même, se manifeste d'une manière singulière dans ce livre. Un monsieur, Don José, qui raconte sa quête anxieuse d'une femme inconnue, n'est que l'énigme et le véhicule narratif de l'exploitation pyramidale de la structure sociale dans laquelle nous sommes plongés. Et c'est là l'essentiel de ce livre : l'engagement de l'auteur envers les classes sociales les plus exploitées, qui ne sont pas les moins cultivées. Un simple employé, d'une conduite irréprochable et efficace dans son travail quotidien, n'est rien de plus qu'une valeur ajoutée pour la société qui produit et consomme. N'y a-t-il donc rien d'autre ? Même la clémence qui épargne au chef de la Conservaduría un châtiment est une insulte. L'auteur nous parle de tout cela, et, bien sûr, pas nécessairement avec des mots écrits.`,
    'ramon-mayrata': `Poésie :
Ses premiers poèmes paraissent dans l'anthologie ESPEJO DEL AMOR Y DE LA MUERTE (1971), aux côtés d'auteurs tels que Javier Lostalé, Eduardo Calvo, Luis Alberto de Cuenca et Luis Antonio de Villena. Sélection et prologue d'Antonio Prieto. Préface de Vicente Aleixandre.
Il publie ensuite ESTÉTICA DE LA SERPIENTE, 1972 ; UNA DUDA DE ALICIA, 1990 ; SIN PUERTAS, 1996.

Essai :
POR ARTE DE MAGIA, 1982. EL OJO DE LA ARBITRARIEDAD, 1986. LA SANGRE DEL TURCO, 1990.

Théâtre :
LA VÍA LÁCTEA, créé en 1993.

Récit :
Récits : SI ME ESCUCHAS ESTA NOCHE, 1991. Roman : EL IMPERIO DESIERTO, 1992. EL SILLÓN MALVA, 1994. ALI BEY, EL ABASSI, 1995.

Si, en quelque moment magique, nous ouvrions les portes de la réalité du langage, du monde imaginaire des sensations, ou de la dénonciation portée par un auteur engagé auprès d'autres cultures, nous rencontrerions peut-être Ramón Mayrata. Il ne faut pas oublier qu'un auteur qui montre une nette maîtrise de genres aussi divers que la poésie, le récit, l'essai ou le théâtre ne la doit pas uniquement à la précision et au juste équilibre de la technique. Il doit y avoir autre chose ; et cet « autre chose » sert un monde intérieur empli d'expériences, de sensations et d'une sensibilité extraordinaire.
Avec son dernier livre de poésie, SIN PUERTAS, il n'est peut-être pas nécessaire d'insister sur les trois parties qui le délimitent ; il faut peut-être plutôt s'attacher au rythme palpitant et enchaîné de ses vers. Car l'auteur ne nous parle pas seulement d'un lieu ou d'un espace déterminé, dans sa première partie, en quête des personnages qui, dans sa troisième partie, habitent ce lieu. Ses vers possèdent un fond plein d'éloquence et d'images, peut-être irréelles, qui révèlent l'insistance de l'auteur sur sa propre vibration intérieure.
De ses récits, on ne saurait oublier son engagement envers les cultures africaines, si proches de lui par l'expérience même qui l'a conduit en voyage de l'autre côté du Détroit. On ne saurait oublier qu'à son ton littéraire fluide s'unit l'homme du désert.
Dans EL SILLÓN MALVA, l'auteur raconte l'expérience d'un scénariste poursuivi par la parodie de sa propre vie, des êtres d'un seul instant à l'abri d'un homme « presque sans visage ». Le livre ne cesse de regarder vers le Sud, où il trouve aussi, dans la fuite du protagoniste, son instant africain.
D'autres livres tout aussi suggestifs sont ALI BEY, EL ABASSI et EL IMPERIO DESIERTO, où l'on retrouve l'insistance de l'auteur sur la question sahraouie.
Et dans toute cette diversité, il faut toujours insister sur l'évidence : il ne sert à rien de savoir écrire avec différentes plumes si l'on ne parvient pas à retenir pleinement l'attention du lecteur. Le difficile est de trouver une poésie vibrante chez un romancier, une prose dévorante chez un poète, la pensée ironique chez un dramaturge, Unamuno et ses oiseaux de papier ne lui échappant pas, ou encore l'originalité des scènes chez un auteur de récits. Or cet auteur y parvient, et largement, par son intuition et son style.`,
    'memoria-tiempo-cumplido': `Compte rendu du livre : MEMORIA DE UN TIEMPO CUMPLIDO

Belén Juárez. Janvier 2002

Je connais Rafael Rodríguez Almodóvar, homme de silences immenses et de légers sourires. Un poète de ceux qui trouvent, dans les rues de sa Grenade, à chacun de leurs passages, le vers infini du temps lui-même. Je connais Rafael : il fait partie de ces personnes avec lesquelles je n'ai jamais eu de longues conversations, mais sans en avoir besoin, j'ai pu voir et comprendre dans ses yeux, deviner qu'il est une personne brillante par le sens si juste qu'il a de la Vie. Il est de ceux qui ne demandent pas à la Vie la hâte de l'Évolution : pas à pas, le temps au temps, s'il vous plaît, l'Amabilité. La Modernité ne consiste pas à se hâter de découvrir les inventions du Langage, car celui-ci arrive à nos esprits par son propre cheminement, sans qu'il soit nécessaire de le forcer avec des symboles artificiels.
Rafael est ce que nous appelons, dans le monde des écrivains, un poète élégant : les jeunes ne le gênent pas, mais il n'oublie pas non plus ses poètes aînés.
Il nous surprend ici avec un nouveau livre, « Memoria de un tiempo cumplido », de la collection littéraire CAROAL, préfacé par l'écrivaine M. Luz Escribano et illustré par Dolores Montijano. Un livre qui révèle une fois de plus sa maturité littéraire avec une étonnante clairvoyance. Nous pouvons parcourir ce recueil et ressentir le vers limpide et profond d'un poète accompli ; dès sa première page, dans le poème « En sombras », nous percevons une tristesse des années qu'il ne fuit pas et où se dévoile la présence d'un temps qu'il considère déjà accompli.

_—Si esto ocurriera, que rechazo_
_por ética del hombre,_
_cuando el deseo me puede,_
_me conmueve y me inclina_
_a perderme en la nada,_
_me afirmo en la miseria_
_de saberme agotado_
_y mi tiempo cumplido...—_

Des vers d'une force immense, qui construisent le corps de ce livre étouffé dans sa propre fièvre des années. Un livre qui se balance seul, vient du passé, regarde devant lui avec incertitude, puis tourne à nouveau le regard vers le passé. Va-et-vient de lumières, le temps ouvert entre ses propres mains : voici quelques-uns des plus beaux vers de ce texte.

_—...Las dos manos que tengo no_
_tiemblan todavía:_
_en una se sostiene el peso de mis años._
_El tiempo breve que me queda_
_mi derecha soporta_
_sin que claudique nunca,_
_y soy sólo el que soy,_
_un hombre que camina_
_con ética profunda...—_

M. Luz Escribano voit juste en relevant une tendance machadienne dans ce livre : la solitude comme accumulation de morts, ses promenades de novembre et ses forts. Cet auteur accompli, sincère et mûr nous montre son visage le plus douloureux, inquiet et juste, où se laisse découvrir le dialogue du poète avec les années déjà vécues.
Ainsi, Rafael est le poète de l'Amitié et, comme je l'ai déjà dit, l'un de nos poètes les plus élégants de Grenade. Dans ce livre, nous pourrons le découvrir dans chacun de ses vers, dans chacune des sensations éternelles de son temps.

Bibliographie : Jerez de la Frontera, 1921. Il étudie la philosophie et les lettres à Séville et à Madrid, puis travaille dans le secteur bancaire. Directeur de la Banco Exterior de España à Ceuta, Saragosse, Grenade et Cadix.

Collaborateur de revues et de journaux : « Cauce » (années 1940), « Ayer », « La voz del Sur » (Jerez), « Diario de África » (Tétouan, Maroc), « El Faro de Ceuta ».
Cofondateur de la revue « Extramuros » avec José Espada, en 1995.
Fondateur des revues « Primavera » et « Solera jerezana » (1944-1949).
Livres publiés : « En ningún tiempo », 1990 ; « Ámbar de mi vino », 1992 ; « De nieblas y silencios », 1998.`,
    'desapariciones-pedro-pena': `Je l'ai regardé dans les yeux. Lors d'une chaude aube dans le désert effrayant de l'aéroport de Valence, entre rires et émotions, je conversais avec un vieil ami, tandis que moi, peu naïve et plus antarctique que jamais, je flairais parmi les anonymes, entamant mon voyage et mon aventure vers les terres orientales de dattes et de soupirs.

De(S)apparu du monde et Apparut au milieu du vers le plus incroyable, j'ai rencontré le poète en 1994, coiffé d'un haut-de-forme noir semblable à un immense toit qui protégeait les bleus faisant frémir la façade de son visage. J'ai rencontré Pedro J. de la Peña dans l'« Onomatopeya » audacieuse et symphonique, dans l'« Abolición » du vers le plus captivant, dans l'« Hibernación » de son propre après-midi de peurs autistiques, dans la « Fosforescencia » du corps douloureux du poète sous l'herbe.
« Sostengo la hipótesis de que nunca he nacido », m'a-t-il dit dès l'ouverture de ses pages, comme pour commencer une conversation avec sa propre existence. Pourtant, il tenait entre ses doigts une canne dorée, solide et présidentielle, comme s'il m'avertissait d'un terrible voyage. Il a commencé sa vie et sa scène première en me rappelant la mort, les paradis de l'enfer devant le déshonneur, l'absence de mémoire du Langage, les travaux hostiles, « et pour quand ? », ses propres chaussures à moteur et les éclats de rire, les compagnons de plume déprimants qui vendent leur marchandise à moindre prix qu'une femme sans coquille ; et, à la manière d'un sable reconnaissable entre tous, il a construit entre mes doigts son propre labyrinthe, en me chuchotant, pour que nous ne nous laissions pas tromper, qu'une tombe de vers n'est pas plus profonde que celle que nous oublions en naissant.
[[IMG:R:0]]
Pourtant, sa meilleure scène restait à venir. En avançant dans les silences de ses pages, j'ai trouvé que la plus grande des vérités résidait dans la négation de la Lumière. « Luz que ciega y maltrata » : là où se tiennent les étoiles, comme les profondeurs du poète qui se découvre dans les solitudes de son inexistence. Je te regarde, cher poète, et j'aurais donné l'argent de mes poignets pour être complice du vol de ta chatte. Peut-être une proie éternelle pour tes faucons pirates. Plus loin, au bout de la scène, continuaient de courir les trains de cent pas, à la mesure d'un même rêve, car le rêve est le mot du poète que je regarde dans les yeux en ce moment. Jugé, et tu chantes au traître, à qui d'autre ? Dans ta pluie en Haïti, où tu as trouvé, parmi les colliers de corail et la faim frappée de beauté, le souvenir de ton enfance.
Glace. Glace devant une vie qui passe à une vie meilleure dans un corps glacé immortel. Dans ta troisième scène, jusqu'au froid protège les pages d'un vers de verre et d'air, en conversation éternelle avec tes Aînés. Tandis que tu poursuis dans ta coupole d'étrangers, les doigts de tes hivers, dans le frottement perpétuel d'un sein, surgissent aux coins de ta propre vie. Peut-être ne parviendrai-je même pas à me souvenir du nom de cet hôtel en Orient, mais tu continues de me nommer les bontés de l'hiver du Prince de la Nuit, comme un revers ou une gifle sur le cou de tous les lecteurs, presque dix ans plus tard. Et El Padre et sa Casa me châtient davantage, en complet désaccord avec les beaux oiseaux qui courent aux coins de mon âme et de ton sang, lorsque j'ai su que ce labyrinthe sacré blessé, à l'odeur de menthe verte et de sueur de colombes, s'approchait également de moi, me parlant des printemps fermés de châtaigniers, de framboises et de cerises de montagne. Je me perds, dans ce froid de pages templières, semblable à une jument qui emporte dans sa bouche un peu de prairie, le mystère et la vie. Je perds la Nuit et la cède au vainqueur des lumières, au gladiateur romain qui nous a battus en rêve dans le temple de Jupiter. Glace, toujours glace, l'avertissement des années endormies.
Quatrième scène : tu de(s)apparais des années quatre-vingt-dix en conservant ton haut-de-forme et ses secrets, cette canne dorée que tu as gagnée à la Vie malgré ses terribles fuites. Je garde l'image du costume noir illuminé de rouge dans ton cou de vers ; pourtant tu insistes et tu m'imposes la sentence de la quête inutile, attentant au vent et aux mots. « No intentes aplacarla (la Vida, se entiende), y menos con imágenes inútiles... », me dis-tu. Personne ne nous suit toujours, malgré toutes nos certitudes. Nous fabriquons l'espérance dans nos délires, insistes-tu, dans les corps en lutte contre le temps, mais elle s'ajoute et se poursuit vers la mort, comme un fleuve de panneaux tombant sur le jeu, à la manière d'un domino. Des vers et encore des vers sortent de ta bouche, crachant la lente transformation, dialogue soumis de l'un contre l'autre, de la pomme contre Cézanne. Et malgré tes efforts, crois-moi, je saurai toujours qui tu es, malgré tes vers et tes yeux bleus fermés, masqués d'oubli. Tu désirais davantage avoir les mains pleines d'excuses devant ton assassin que la mort que t'offrait le bourreau de vers ; tu embrassais davantage le désir d'apparaître parmi ses arbres feuillus que de mourir sans âme, comme une pierre sans honneur ni trace. Il ne mourrait jamais : nous étions un dogue sans maître que la mort ignore. Et sur tous ces vers de contemplation, la peur continuait d'exister sur tes papiers : peur de mourir sans nuit, désir d'un silence qui ne parvient pas à arriver en roulant sur les pages, le silence qui est né avec moi, le même jour et la même nuit, et qui décide aujourd'hui de se perpétuer sur la page la plus ouverte du temps et de s'attacher au galop de tes vers de poète. Il fut famille et demeure frère, dans l'immortelle vérité de tes entrailles, mon frère, toi qui n'existes pas. Tu me fermes donc, avec rouille et difficulté, cette porte des années, calmement, laissant à jamais tout sous ton haut-de-forme et tes yeux infinis, comme un morceau de ciel dérobé aux années et perpétué dans ton regard.

Ainsi mes yeux t'ont regardé, mon seigneur de(S)apparu du monde, derrière la porte fermée de tes années qui a empêché toutes tes morts de sortir de la Casa del Padre. Le nom de la rose tatouée sur le bois de cet hôtel ne revient toujours pas à ma mémoire, mais de cette mort je conserve encore le souvenir parmi mes vers. Des mois plus tard, j'ai compris la fortune de ce voyage, la chance fortuite d'envahir la Casa de Júpiter, tous les heureux éclats de rire dans les chaussures. Je l'ai compris en tenant entre mes mains le livre perdu d'un dieu « de(S)apparu » à jamais des cercles de poètes « à la mode ».

[[IMG:1]]`,
};

export const localizeLiteraryCriticism = (
    criticism: LiteraryCriticism,
    locale: Locale,
): LiteraryCriticism => (
    locale === 'fr'
        ? {
            ...criticism,
            ...FR_LITERARY_CRITICISMS[criticism.slug],
            reviews: criticism.reviews?.map((review): ReviewItem => ({
                ...review,
                text: FR_LITERARY_REVIEW_TEXTS[review.id] ?? review.text,
            })),
        }
        : criticism
);
