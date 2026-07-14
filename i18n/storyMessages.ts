import type { ShortStory, StorySection } from '../types';
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

const FR_STORY_SECTIONS: Record<string, Record<number, Partial<StorySection>>> = {
    'al-otro-lado-del-mundo': {
        0: {
            content: `IL ÉTAIT QUATRE HEURES du matin lorsqu’elle quitta son pays. Le grand requin blanc DS 21, garé devant la maison, attendait paisiblement ce qui serait son dernier grand voyage. Il savait qu’il se dirigeait vers une mort aussi certaine que réelle : sa condition d’automobile à essence et l’imminente révolution pétrolière de ces derniers mois le condamnaient sans appel. Son dos blanc et courbé reflétait l’éclat des réverbères, et ses grands yeux de cristal et de plomb dégageaient une chaleur qui condensait sur leurs rétines les gouttes glacées de la pluie nocturne. Les rêves et les expériences partagés l’avaient maintenu fidèle à la famille, peut-être comme un membre de plus, fait de métal, sans âme ni témoignage de vie ; pourtant, il pressentait — d’une certaine manière — que ce serait son dernier voyage. Elle le comprit ainsi quarante ans plus tard. En ce temps-là, le grand requin se transformait dans ses rêves en un être animé, compagnon de mille aventures ; tous deux étaient des marcheurs de boue dans les vieilles rues de *Paris*, tels les explorateurs d’une ville infinie qui offrait le charme de l’anonymat. Ils étaient tous deux, la fillette et le soldat cartilagineux cuirassé d’un acier invincible et de cuirs élégants. La petite Lilie découvrait le monde à travers ses vitres, tandis qu’il filait comme la lumière sur ses larges roues de nickel, qu’elle imaginait comme quatre chevaux rapides capables de s’engager dans les innombrables rues du vieux *Paris*. Ils parcouraient le *Quartier latin*, la *place de la Concorde*, le *pont des Arts*, l’*Arc de Triomphe* et les *Champs-Élysées* ; elle faisait bouillonner ses rêveries, lui parlait, les cheveux dénoués, emmitouflée dans ses manteaux de maille tressée, les yeux si noirs et si curieux, s’éveillant au monde.`,
        },
        1: {
            content: `Elle entendit rugir son moteur, telle la respiration d’un géant, tandis que des bras l’enveloppaient dans une couverture pour la protéger du froid de la nuit. La fièvre la faisait abondamment transpirer ; depuis plusieurs jours, une terrible grippe lui fermait les poings et les yeux, comme si son inconscient tentait désespérément de retarder le départ, de s’agripper à l’air, à ses aventures et à la maison qu’elle laissait derrière elle, au 23 de la *rue Championnet*. Cette fillette de sept ans ne pouvait imaginer qu’au fil des années à venir elle pleurerait mille fois tout ce qu’elle abandonnait. Elle leva une dernière fois les yeux vers la fenêtre de son amie juive, qu’elle ne reverrait jamais, puis se blottit sur les genoux de son protecteur, qui l’emporterait très loin, vers un avenir incertain. Cette aube hivernale fut comme la première phrase écrite de sa mémoire. Elle prit conscience d’habiter un monde étrangement aimable qui l’invitait à rompre brutalement avec son passé français, un monde déguisé en hasard civilisé.

     Le fidèle squale blanc éteignit ses lumières intérieures et s’engagea dans le corridor des deux mille kilomètres, comme dans l’ultime mission qu’il accomplirait pour sa fillette. Il la conduirait de l’autre côté de la frontière, lui ferait traverser la mer de la civilisation et la ramènerait à ses origines, accomplissant fidèlement son dernier exploit vital. Elle regarda en arrière et vit s’estomper les trottoirs de sa rue, les murs de pierre grise, le grand réverbère à la lumière tamisée, si souvent devenu le mât de son château derrière la fenêtre de sa chambre. Elle vit disparaître dans l’horizon noir l’épicerie, le salon de coiffure, l’école et les hautes grilles immobiles de tous ses amis. À bord de son grand requin albinos, elle allait traverser le monde. Elle n’éprouva pas de peur, mais un profond désespoir devant la souffrance des heures qui avançaient vers l’adieu au terme du voyage. Lui mourrait pour toujours, et elle naîtrait de nouveau dans un lieu inconnu.`,
        },
        2: {
            content: `Bien des années auparavant, son père s’était acheté une montre à Séville. Il lui avait fallu économiser plusieurs mois sur sa maigre solde de soldat pour l’obtenir ; plus tard, elle lui fit comprendre que les heures étaient un piège mortel, que le temps était l’habit dans lequel se dessine le destin des personnes et que, pour tous, les heures avançaient inexorablement. Chaque fois qu’il contemplait sa merveilleuse montre, il avait l’impression d’étrenner une seconde de sa vie, un temps qui lui échappait sans qu’il puisse le retenir. Il se sentait mal à l’aise, prisonnier de ce mélange de misère et de temps. Sa jeunesse s’usait, et sa vie avec elle. Que pouvait-il faire ? Les perspectives de progrès social étaient alors rares ; seule une petite partie de la population de ce pays pouvait s’offrir le luxe d’un repas chaud quotidien. C’était l’après-guerre, et la faim de tant de personnes était aussi habituelle que le lever du jour. Il avait donc d’abord accepté de poursuivre la tradition militaire familiale. Trouver un moyen de subsister, quel qu’il fût, était une priorité. Pourtant, cette montre qu’il avait si souvent arborée avec fierté au poignet le week-end, en compagnie de ses camarades de l’école militaire, celle qui lui avait donné de l’importance auprès des jeunes filles et que, quelques mois plus tard, on lui volerait dans son casier, fut peut-être ce qui fit basculer sa vie à cent quatre-vingts degrés. Il pensait que le temps nous est volé par le Temps lui-même, sans que personne puisse le dénoncer ni l’arrêter. Cette montre allait marquer le destin des vingt années suivantes et éveilla en lui le courage de prendre la décision la plus importante de sa vie : abandonner sa solde d’officier à peine acquise, ses camarades, sa famille et son foyer andalou.

     — Père, je veux partir.
     — Tu veux partir ? Où cela ?
     — En France. Deux amis et moi avons décidé de nous en aller. Ici, on gagne une misère, et l’on nous a dit qu’en France les choses étaient différentes. Je veux vérifier cette vérité que l’on raconte au sujet de la République.
     — Mon fils, tu n’iras nulle part ! Ici, tu as ton emploi, ta famille. N’as-tu donc pas obtenu ce que tu désirais ? Démonter des avions de combat, n’était-ce pas ce que tu voulais ? Tu as réussi à en vivre, et maintenant tu dis que tu t’en vas ? Que tu abandonnes tout ? Tu n’iras nulle part ! C’est moi qui le dis, je suis ton père, et que l’on n’en parle plus !
     — Père, je pars. Ici, j’étouffe au milieu de tant de misère. On ne permet pas aux gens de penser, de connaître. Je veux savoir ce qu’il y a au-delà de cette pure vérité si fausse. Et je jure que je reviendrai ; un jour, même lointain, je reviendrai, et vous pourrez être fier de votre fils. Je jure que je le ferai.`,
        },
        3: {
            content: `Cette conversation fut pour lui un supplice. Jamais il n’avait désobéi à son père ; jamais auparavant il n’avait osé prendre une décision aussi capitale sans le consentement de cet homme de taille moyenne, aux traits durs, marqués par le froid de tant d’aurores. Pour son père, tout tournait autour de la famille. Existait-il donc autre chose pour laquelle lutter ? Ses sept enfants et une épouse docile constituaient tout son univers. Il ne pouvait accepter que le benjamin de la maison rompe avec les traditions. Que deviendrait-il ?

     L’amertume se leva avec lui ce matin-là. Le vent secouait les feuilles de tabac suspendues dans le séchoir, près de la maison. Il perçut dans ces feuilles de tabac noir un doux parfum d’incertitude qui agitait le silence des premières lueurs du jour et annonçait le départ de son plus jeune fils. Dans ses pensées bouillonnait l’idée poignante, blessante, que son fils avait peut-être raison ; mais il ne pouvait l’admettre, et sa colère était imminente. À quelques mètres de sa fenêtre, il entendit rugir un moteur impossible à démarrer : un homme sans identité s’acharnait désespérément sur la camionnette avec laquelle il se rendait chaque jour au marché vendre ses légumes. Ce moteur à la gorge rouillée semblait lui exposer toutes les raisons pour lesquelles son fils voulait partir. Ici, il n’y a rien, sinon des supplications adressées au hasard pour parvenir, jour après jour, à faire démarrer le moteur de la survie. L’autorité du chef de famille était la seule arme dont il disposait pour se défendre contre ce monde aux arêtes tranchantes, aussi gris que les mille rayures de son costume du dimanche. Survivre et maintenir la famille unie était sa loi, la raison pour laquelle il était né ; pourtant, son fils partait à présent. Découvrir le monde, disait-il… Quel monde existe hors de cette jungle de moteurs inutilisables ? Son visage grave exprimait son rejet de l’aventure projetée par son fils ; au plus profond de lui-même, pourtant, il songeait qu’avec quarante ans de moins il aurait peut-être fait la même chose.`,
        },
        4: {
            content: `Deux amis, une valise, la discipline apprise à l’école militaire et un dictionnaire. Voilà tout le bagage qu’il déroba à son pays. Derrière lui restaient les soirées autour de l’âtre, les conversations et les rires avec ses frères aînés, la bonté des quignons de pain et l’odeur du lait de chèvre que sa mère faisait bouillir le matin. Derrière lui restaient les jeunes filles qui souriaient et soupiraient devant le bleu de ses yeux, le bruit de l’eau des fontaines de *Grenade* et la musique des moteurs de tant d’avions dont il avait vu les entrailles. En arrière et en avant. Ses pensées se balançaient comme un lourd pendule sous le vertige de la conscience ; pourtant, jamais il n’eut peur, jamais il ne songea à renoncer. Sa vie commençait maintenant, et il lutterait pour obtenir tout ce à quoi il aspirait. Il lutterait pour la seule femme qu’il aimait véritablement depuis l’enfance, celle qu’il abandonnait aux caprices du destin, la seule femme pour laquelle il faisait tout cela. Pour elle, il reviendrait un jour au volant d’une voiture étincelante afin de l’emmener dans ce monde qu’il cherchait à découvrir pour elle.

     Il ne voulut perdre aucun détail des villes que traversait le train. Il se sentait chaud comme le sang dans les veines d’un nouveau pays, rapide et insignifiant dans ce corps étranger où il pénétrait. Parfois, le sommeil avait raison de lui et il dormait quelques heures, assis sur la banquette de seconde classe qui lui brisait les os ; pourtant, il ne ressentait aucune fatigue. Lorsqu’il rouvrait les yeux, ses amis dormaient et, silencieux, il capturait dans ses rétines les gens, les maisons si différentes, les enseignes lumineuses. Il inaugura son dictionnaire dès la frontière franchie : il avait besoin de savoir encore et encore, de manger et de boire ce pays… Aussi ne cessait-il d’observer les annonces et de les traduire, l’une après l’autre. Tout avait de l’importance.

     — S’il vous plaît, les billets… ! À quoi il répondit : — Les voilà, monsieur.

     Ce furent ses premiers mots en français ! Pour le contrôleur, ce n’était qu’un geste de routine, et il ne remarqua sans doute même pas l’attente dans les yeux du jeune homme qui le regardait avec tant d’enthousiasme et de curiosité. Il conserva longtemps dans sa mémoire ces billets et ce visage fermé et, bien qu’il ne parlât jamais de ses premières impressions, il se souviendrait toujours de ces mots comme de la première phrase écrite du deuxième chapitre de sa vie.`,
        },
        5: {
            content: `Paris le dévora cette nuit-là. Un morceau de fromage gras, du pain et de la charcuterie ornaient humblement la table de cette famille galicienne comme de délicieux mets du nouveau pays. Pedro, réfugié de la guerre civile et ami d’un certain Luis qui vivait à Grenade, avait déjà été prévenu que trois jeunes gens d’un peu plus de vingt ans arriveraient ce soir-là à Paris. Les deux autres avaient des connaissances sur place, mais celui qui venait de l’Académie de l’air partait à l’aventure. Luis l’avait instamment prié de l’accueillir à son arrivée : c’était un bon garçon, presque de la famille. Quelques années auparavant, Luis avait rencontré Pedro, cousin issu de germain de sa femme, en Galice et, par un de ces hasards de la vie, ils avaient noué une profonde amitié qui durerait encore de nombreuses années. C’est pourquoi Pedro accueillit ce soir-là chez lui le jeune homme de Grenade. Puisqu’il venait de la part de Luis, il était digne de confiance.

     — Comment va mon bon ami Luis ?
     — Il est toujours là-bas. Je lui ai proposé de tenter l’aventure avec nous, mais cela n’a pas été possible. Vous savez, les affaires de famille, et avec deux petits au monde…
     — Bien sûr, et ma cousine Paquita que personne ne parvient à faire bouger, n’est-ce pas ?
     — Ma foi, qu’est-ce que j’en sais… que voulez-vous que je vous dise ? Dans leur intimité, je ne pose même pas de questions…
     — Écoute, mon garçon, si le travail ne te fait pas peur, tu t’en sortiras bien ici. Les Français ont leurs manières bien à eux, mais si tu adoptes leurs coutumes et t’accommodes de leurs usages, tu n’auras pas de problèmes et, sur bien des sujets, tu finiras par penser comme eux. La « Légalité » et la « Fraternité » sont des idées gravées dans le cœur de tout bon Français.

     Pedro vivait à Paris depuis une décennie ; il avait échappé presque par hasard aux balles des nationalistes. Comme tant d’Espagnols, la guerre l’avait surpris dans la taverne de son village galicien, où les quatre amis se retrouvaient chaque soir pour épancher leur malaise et parler du mécontentement social et des tensions politiques qui progressaient à marche forcée. On pressentait les derniers soubresauts du Bienio Negro, qui étoufferaient à jamais la République et ensanglanteraient les innombrables rues d’Espagne.

     Miguel écoutait avec une profonde peine et un grand trouble les raisons pour lesquelles cet homme avait quitté la Galice. Dans son cas, les choses étaient différentes : il ne fuyait le cri d’aucun coup de feu. Pourtant, la mort métallique décrite par son nouvel ami lui fit saigner les entrailles ; il ressentit la tristesse de cette famille et celle de tant d’autres familles anonymes dispersées à travers l’Europe. Il découvrait l’Espagne depuis ses coulisses.`,
        },
        6: {
            content: `Cette nuit-là, il s’effondra d’épuisement sur le lit. Il rêverait qu’il parlait déjà parfaitement français, que sa décision avait été juste et que ce pays lui révélerait peut-être la vérité d’une Espagne que personne ne lui avait montrée auparavant. Telles étaient ses pensées tandis qu’il s’endormait dans le parfum de savon de Marseille des doux draps blancs.`,
        },
        7: {
            content: `Sept années, deux patrons, puis une affaire personnelle florissante. Michel, puisque tel était désormais son nom, vivait au nord de Paris dans sa propre maison, parlait correctement français, portait des pardessus et des chapeaux à bord court, connaissait chaque recoin et chaque cercle du vieux Paris nocturne, et pensait comme les Français, ainsi que son ami Pedro le lui avait prédit. Les incertitudes des premières années et l’innocence du jeune homme aventureux et turbulent appartenaient au passé. Il se sentait victorieux. Tous les efforts et toutes les difficultés qu’il avait dû surmonter des années auparavant lui avaient appris à aimer le temps. Chaque minute de ces sept années avait compté dix fois plus ; le vertige des sensations, les émotions et tout ce qu’il découvrait jour après jour lui faisaient goûter pleinement sa condition d’émigré francisé. Pourtant, quelque chose bouillonnait dans son esprit. À contretemps, parmi ses pensées, se dessinait la silhouette de cette belle jeune fille aux yeux couleur de miel et aux cheveux dorés qu’il avait laissée des années auparavant sur les terres de Grenade. Qu’était-elle devenue ? Elle s’était sûrement mariée, pensait-il, mais quelque chose lui disait qu’il devait tenter de la revoir. Il retournerait bientôt à Grenade, comme il le faisait chaque année pendant les vacances, et cette fois il chercherait à le savoir. Elle avait maintenant vingt et un ans ; il ne l’avait pas vue depuis près de dix ans et se souvenait d’elle comme d’une enfant aux longues tresses, vêtue de robes brodées de petites fleurs.

     — Mère, vous souvenez-vous de María, la fille de Don Ramón et de Doña Concha ?
     — Bien sûr, mon fils…
     — Où est-elle à présent ? J’aimerais la saluer, évoquer le bon vieux temps et prendre des nouvelles de son frère Ramón, qui était un bon ami, vous savez…
     — Bien sûr, bien sûr… son frère, un brave garçon ; il est maintenant prêtre à Guadix. Quel excellent jeune homme, oui…

     Sa mère sourit légèrement, avec discrétion, tout en conservant l’attitude sobre et convenable d’une respectable dame. Elle connaissait pourtant bien son fils et percevait l’intérêt qu’il portait à cette jeune fille. D’une manière subtile, il lui demandait conseil pour se rapprocher de celle dont il était éperdument amoureux. Elle savait que Miguel, devenu un bel homme, aimait cette femme, la femme de ses rêves, et elle ne voyait pas d’un mauvais œil la possibilité de leur union.

     Il la chercha dans son village. Il monta dans les *Alpujarras* rendre visite à une sœur de son père, surtout, comme si de rien n’était, pour saluer la famille…

     Vêtu de son costume couleur cannelle et au volant d’une Citroën ID 19 rouge, il se gara sur la place du village. Il ne voulut pas demander après elle dès son arrivée : il n’était pas convenable de l’aborder sans autre forme de procès, pensait-il ; cela devait paraître « naturel », comme une rencontre fortuite… Nerveux, il pressentait qu’elle savait déjà qu’il était arrivé. Dans quelle maison vivait-elle désormais ? Il fut plus nerveux encore en apprenant qu’elle habitait toujours chez ses parents ; cette circonstance lui offrait l’occasion parfaite d’accomplir son dessein : il irait également saluer son ancien instituteur, le père de María.

     — María, tu te souviens de Miguel ? Apporte donc à ce jeune homme quelques beignets et un verre d’eau-de-vie. Ah ! Quel temps c’était ! Miguel, quand les mathématiques ne voulaient pas entrer dans ta tête et que je te les y faisais entrer à coups de règle, n’est-ce pas, mon garçon ?
     — Bien sûr, bien sûr, Don Ramón, et je vous en suis très reconnaissant ! C’est grâce à vos efforts et à votre persévérance que j’ai appris les « mathématiques »…`,
        },
        8: {
            content: `Le pauvre Miguel transpirait en se souvenant de la règle que cet homme avait si souvent abattue sur ses mains. La liqueur d’anis lui brûlait la gorge tandis que son cœur bondissait, battant désespérément chaque fois que María lui offrait son merveilleux sourire. Elle était devenue une belle femme aux longs cheveux dorés et à la peau de nacre. Son corps élancé, proche de la perfection, lui aveuglait les yeux et l’esprit. Un léger tremblement de sa main trahit son amour. Elle continuait de sourire, assise autour de la table auprès de Doña María, femme au visage tout aussi beau qu’un instituteur fraîchement arrivé de Cordoue avait, des années auparavant, réussi à ravir au cœur des Alpujarras.

     Don Ramón prolongea la visite.

     — Reste dîner, Miguel, et raconte-nous ta vie à Paris. Que fais-tu là-bas ?

     Miguel transpirait davantage encore : la main qui l’avait si souvent puni lorsqu’il était enfant l’invitait maintenant à rester dîner. Il accepta et remercia son hôte. Ce jour serait l’un des plus importants de sa vie. Soudain, tous les coups de règle reçus sur ses paumes se changèrent en coraux rouges, un trésor qui ne le quitterait plus jamais. María était sa passion, et cet homme lui souriait maintenant pour la première fois.`,
        },
    },
};

export const localizeStory = (story: ShortStory, locale: Locale): ShortStory => {
    if (locale !== 'fr') return story;

    const localized = { ...story, ...FR_STORY_METADATA[story.id] };
    const sectionOverrides = FR_STORY_SECTIONS[story.id];

    return sectionOverrides
        ? {
            ...localized,
            sections: localized.sections.map((section, index) => ({
                ...section,
                ...sectionOverrides[index],
            })),
        }
        : localized;
};
