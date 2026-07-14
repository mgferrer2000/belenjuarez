import type { Locale } from './config';
import type { PrologueWork } from '../pages/ObraLiteraria/prologosData';

export const PROLOGUE_UI: Record<Locale, {
    archive: string;
    heading: string;
    introduction: string[];
    openReading: string;
    archiveFallback: string;
    continueReading: string;
    back: string;
    officialWebsite: string;
    coverAlt: (title: string) => string;
}> = {
    es: {
        archive: 'Archivo editorial',
        heading: 'Prólogos y capítulos de libro',
        introduction: [
            'Este apartado reúne prólogos, estudios introductorios y capítulos de libro escritos por Belén Juárez. La página principal presenta cada publicación como una pieza editorial independiente.',
            'Cada ficha conduce a una lectura de detalle pensada para consulta reposada, manteniendo la sobriedad y el ritmo visual del resto de la obra literaria.',
        ],
        openReading: 'Abrir lectura',
        archiveFallback: 'Archivo',
        continueReading: 'Seguir leyendo',
        back: 'Volver a prólogos',
        officialWebsite: 'Web oficial de Gustavo Vega',
        coverAlt: (title) => `Portada de ${title}`,
    },
    fr: {
        archive: 'Archives éditoriales',
        heading: 'Préfaces et chapitres d’ouvrage',
        introduction: [
            'Cette section réunit des préfaces, des études introductives et des chapitres d’ouvrage écrits par Belén Juárez. La page principale présente chaque publication comme une pièce éditoriale indépendante.',
            'Chaque notice mène à une page de lecture conçue pour une consultation attentive, dans la sobriété et le rythme visuel du reste de l’œuvre littéraire.',
        ],
        openReading: 'Ouvrir la lecture',
        archiveFallback: 'Archives',
        continueReading: 'Poursuivre la lecture',
        back: 'Retour aux préfaces',
        officialWebsite: 'Site officiel de Gustavo Vega',
        coverAlt: (title) => `Couverture de ${title}`,
    },
};

const FR_EXTRAMUROS_CONTENT = [
    'EXTRAMUROS, Revue littéraire',
    'Nº 31, VIIIe année, 2003',
    'Numéro spécial consacré à la poésie arabe contemporaine',
    'Poésie arabe : trésors et oasis linguistique de l’esprit humain',
    'Podrán matar mis labios, destruir mis escritos y piedras,',
    'pero unca mis versos,',
    'los que llevó el viento sobre el camello del tiempo1',
    '1 : Vers du poète préislamique Muhalhel (443-531 apr. J.-C.)',
    'père de la poésie arabe et créateur de la qasida',
    'Coordination et sélection : Belén Juárez',
    'Traduction de la poésie : Laroussi Haidar',
    'Traduction de la prose : Baba Haj ; Hussein al-Duweiri',
    'S’il fallait justifier l’existence de la Poésie, la culture arabe serait sans aucun doute l’une des sources auxquelles il conviendrait de remonter. Depuis les temps les plus anciens, l’identité de l’Homme a trouvé sa justification dans l’affirmation d’une mémoire historique qui a permis d’enrichir et de célébrer la présence des êtres humains dans le Monde. Millénaire, vaste par ses contenus comme par les continents qu’elle embrasse, la culture arabe a trouvé dans la poésie orale et écrite une importante source de perception et d’expression. Si l’on se concentre sur la naissance et l’origine de ce genre littéraire dans le monde arabe, il faut souligner que de nombreux historiens considèrent que l’exaltation de l’âme et du corps est arrivée par la Poésie ; une poésie qu’il fallait défendre et protéger d’une possible destruction… Ainsi naquit la tradition orale transmise des parents aux enfants : on récitait et apprenait avec enthousiasme les vers des ancêtres, abritant et conservant leur contenu dans la mémoire. C’était donc une oasis d’une valeur incalculable qu’il fallait préserver pour les générations suivantes dans le coffre le plus sûr : la mémoire et l’histoire.',
    'Al-Hariri, célèbre prédicateur de la mosquée de Samarcande au XIIIe siècle, disait à propos des poètes : « Ô poètes ! Ils souffrent pour leurs vers le tourment de la jalousie, comme ils pourraient l’éprouver pour de jeunes vierges… ». Le poète arabe est donc un être sensible et passionné par le langage, qui vit et transmet par sa gorge la nostalgie, la passion, la vigueur et la beauté de son âme. Sa voix est ardente et fait jaillir du langage une formidable invocation à l’enthousiasme ; ses chants portaient le parfum de la richesse de l’oasis et la grandeur du désert. Telle fut sans doute l’origine de la poésie arabe : une prose rimée et chantée qui reçut bientôt l’accueil d’un peuple remarquable par sa gratitude envers les sages de son temps.',
    'Dans son évolution, comme nous le raconte l’historien et écrivain Suleimán El Bustani, l’identité poétique arabe naît véritablement trois ou quatre siècles avant l’islam, dans les voix de Muhalhel, Xanfara, Muzacab el Abdi et Barrac Ben Ruban. Ceux-ci s’appuyèrent sur une tradition poétique déjà existante pour composer leurs vers. Plus tard, cet art atteignit un magnifique apogée dans les compositions de Labid Ibnu Rabia, Zuhair ibnu Abi Sulma, Ezebiani, Al-Asha et bien d’autres.',
    'Des tournois littéraires étaient organisés dans les souks, les plus connus étant ceux d’Ukaz, Dilmayaz et Maxda, lieux de rencontre consacrés aux émotions, au commerce et aux accords. Mais, avant d’être commerçant, l’Arabe est poète : on récitait des poèmes, on les jugeait et on les commentait, et le poète le plus célébré obtenait le respect et le privilège de la reconnaissance de tout le peuple. Les poètes pouvaient même dépasser les guerriers de leur époque dans leur condition de héros. Les vers récités passaient de bouche en bouche dans les campements, armes acérées et mordantes du peuple. Le poème servait d’instrument de guerre et trouvait sa riposte chez les poètes des peuples adverses. « …La blessure produite par une lance peut cicatriser ; celle que cause la langue est sans remède… ». Le poète était ainsi considéré comme le propagateur des honneurs de son peuple, le gardien de sa noblesse, la voix et l’écho de ses grands exploits, et le défenseur de sa propre histoire. Capable de soulever le peuple et de le convaincre d’agir, il jouait un rôle politique important dans la société : le Pouvoir trouvait donc refuge dans la Poésie.',
    'Mais, dans tout ce qui précède, il est une question qu’il ne faut pas oublier : le rôle joué par la Femme dans l’univers du poète. Du côté des hommes, il faut souligner qu’aucun poète ne commençait ses qasidas sans consacrer ses premiers vers d’éloge et d’amour à sa bien-aimée. Chaque poète avait sa muse, et malheur à celui qui n’en avait pas ! La femme a toujours été un pilier de la composition poétique car, pour l’Arabe, l’amour est le temple de tout son temps passé, présent et futur. Les hommes n’étaient toutefois pas les seuls à goûter au plaisir de la poésie. Les femmes vivaient elles aussi dans cet univers poétique ; elles ressentaient et éprouvaient le besoin d’exprimer les souffles d’émotion qui les envahissaient derrière leurs tentures… Il y eut et il y aura toujours des poétesses, immenses proclamatrices d’expériences et de légendes : Zarca, l’Hébraïque Sara, Laila Bent Laquiz, Zahara Bent Rabia pour la première période ; Hilal Bent Munkid, Galila Bent Murra, épouse de Culaib, Safiya Bent el Harr, Hirmi, sœur de Tarfa, Nagxa Bent Damdam el Murri, Um Bistan, Sumaiya, grand-mère d’Antara, et les sept filles d’Abd-El Mutaleb pour la deuxième période, dite « de Basûs » (495-535) ; Umaia Bent el Amsi, Amra Bent el Hansá, Hind Bent Utatad, Safiya Bent Musafir, Catila Bent el Harrit, Safia Bent Abd-el-Mutaleb et Um Kalzum, qui vécurent pendant les guerres de 580 à 589. Beaucoup, beaucoup d’autres furent également d’importantes poétesses à des époques postérieures, acquirent la renommée et firent la fierté de l’Histoire du peuple arabe.',
    'Après ce bref parcours aux origines de la poésie arabe, nous voici devant les poètes d’aujourd’hui, héritiers d’une culture dont les fondations se proclament désormais témoignage de Sagesse. Femmes et hommes, poètes, élèvent leurs voix et se présentent comme les fidèles héritiers de leurs ancêtres, les poètes d’autrefois, afin de démontrer une fois encore que la poésie permet d’exprimer tous les parfums et tous les soupirs de l’âme.',
    'Considérons donc quelques-uns des plus illustres poètes arabes contemporains : Qassim Haddad, Ali Ahmad Sarqawi et Fawzia Al-Sindi de Bahreïn ; Salah Niazi, Saady Youssef et Sargon Boulus d’Irak ; Gassan Zaqtan de Palestine ; Yassin Adnan, Abdellatif Lâabi et Taha Adnan du Maroc ; Khalid Najjar de Tunisie ; Fuad Rifka et Etel Adnan du Liban ; Helmy Salem d’Égypte ; Muhammad Al-Harti d’Oman ; Dhabia Khamis et Maisson Saker des Émirats arabes unis ; Salem Barakat et Mamdouh Adwan de Syrie ; et Soulayma Rabaal d’Algérie. Je demande toutefois pardon aux nombreux poètes que je ne cite pas, faute de place dans la publication Extramuros. ■',
    'Précision : pour lire les poèmes de ces auteurs, veuillez contacter Belén Juárez.',
];

const FR_PROLOGUE_METADATA: Record<string, Partial<PrologueWork>> = {
    'quimica-del-amor': {
        title: 'La Chimie de l’Amour',
        typeLabel: 'Chapitre d’ouvrage',
        description: 'Chapitre consacré à l’amour dans la poésie d’al-Andalus, intégré à un volume de recherche sur le Maroc, le Sahara occidental et la tradition culturelle andalouse.',
    },
    'extramuros-31-poesia-arabe': {
        title: 'Poésie arabe : trésors et oasis linguistique de l’esprit humain',
        typeLabel: 'Préface / Numéro spécial',
        authorsLine: 'Coordination et sélection : Belén Juárez',
        description: 'Texte d’ouverture d’un numéro spécial d’Extramuros consacré à la poésie arabe contemporaine, selon une approche historique, culturelle et panoramique.',
        content: FR_EXTRAMUROS_CONTENT,
    },
    'la-n-literaria-poesia-arabe': {
        title: 'Poésie arabe contemporaine',
        typeLabel: 'Préface',
        authorsLine: 'Préface de l’édition par Belén Juárez',
        description: 'Introduction à une sélection de poésie arabe contemporaine, centrée sur l’importance culturelle du genre et sur plusieurs auteurs arabes actuels.',
        content: [
            'LA Ñ LITERARIA',
            'POÉSIE ARABE CONTEMPORAINE',
            'Préface de l’édition par Belén Juárez',
            'Édition de Julián Alonso. Numéro 9, 1999',
            'Commission de la culture de la municipalité et Bibliothèque municipale de Dueñas, Palencia.',
            'L’une des traditions lyriques les plus splendides parmi toutes les langues du monde est, sans aucun doute, la poésie arabe. Lorsque l’on parle de poésie dans le monde arabe, il faut d’abord souligner l’exaltation par excellence de ce genre littéraire comme principale manifestation créative de ce peuple millénaire. Dans la culture arabe, depuis l’époque des qasidas, la poésie occupe une place privilégiée et le « Poète » est le créateur le plus respecté de toute sa culture. Ainsi, lorsqu’un écrivain reçoit le titre honorifique de « Poète » de son pays, il obtient en quelque sorte une reconnaissance définitive. Être poète, dans le monde arabe, n’est donc ni un divertissement, ni un mérite ou une garantie d’évasion de l’esprit. Cette condition dépasse même le lignage d’un roi, la fonction d’un dirigeant ou toute renommée et toute richesse auxquelles on puisse parvenir.',
            'QASSIM HADDAD (Bahreïn) est l’un des poètes de référence les plus importants du monde arabe. Son parcours lyrique le place parmi les grands poètes internationaux contemporains ; il a récemment reçu le Grand Prix décerné par le prince du Koweït. Sa poésie décrit les cours de l’esprit, et sa longue expérience comme sa sagesse ont ému le monde entier lors de ses dernières conférences en Argentine en 2002. FUAD RIFKA (Liban) est un poète d’une remarquable stature intellectuelle, actuellement professeur à l’Université américaine de Beyrouth. Il chemine à travers l’expérience de sa propre vie et propose un langage d’une valeur inestimable par son exploration des mondes souterrains de l’être humain. Parmi les Émirats arabes unis, il est indispensable de citer la princesse MAISSON SAKER : sa poésie est considérée comme un défi constant lancé au langage, et sa recherche linguistique par la poésie lui a valu respect et admiration sur le plan international. De Syrie, citons MARRAM AL-MASRI, considérée comme l’une des poétesses les plus intéressantes de la scène internationale et lauréate de grands prix littéraires. Sa poésie se distingue par la passion et l’amour ; elle possède une force vitale capable de réduire les foules au silence. Parmi les poètes irakiens contemporains reconnus, l’un des grands créateurs est sans aucun doute SARGON BOULUS. Il réside en Allemagne, mais ne cesse de parcourir de nombreuses villes d’Europe et d’Amérique. Cet auteur centre ses textes sur les images et nous submerge de sa création puisée dans la nature et dans le sens le plus profond de la vie. YASSIN ADNAN (Maroc), lauréat du prix de l’Association des écrivains du Maroc, est actuellement journaliste à Marrakech pour diverses revues internationales. Sa poésie explore la nouvelle poésie arabe moderne et manifeste un profond sens de la réflexion et de l’observation. KHALID NAJJAR (Tunisie) incarne la force poétique par excellence, l’amour et la passion pour les rêves de tous les mondes. Ce poète ne se repose jamais : il voyage et donne sans cesse de nombreuses conférences dans différents pays. Il ne cesse jamais de sourire et possède l’un des sourires les plus splendides que je connaisse. Sa passion pour la vie est poésie pure ; il donne corps à sa force par le vers, nous offre son temps et nous fait boire à ses propres inquiétudes linguistiques. GAMAL EL QASSAS (Égypte) est journaliste et éditeur au Caire. Il a reçu le Prix international Cavafy en Grèce et est actuellement membre de l’Union des écrivains égyptiens. C’est le poète philosophe : ses textes saisissent les instants de la vie par des mots subtils et colorés ; il visualise les scènes avec une telle précision qu’il nous place devant le spectacle du monde à partir des situations les plus quotidiennes. ALI AL-AMERI (Jordanie) est le poète qui recrée le temps depuis la poésie. Il ramène le lecteur aux années de son propre passé, aime instinctivement la saveur de sa terre et de sa lignée, et consacre sa vie à la création du temps lui-même. FARAG AL-ARABI (Libye) nous offre le mystère et la magie d’une terre silencieuse et cultivée. Son espace est la mer ; sa grandeur, le désir d’exprimer le monde doré du vers entre les lignes de l’amitié. Il ferme les poings et les yeux pour se recueillir dans sa méditation, avant de les rouvrir et d’offrir ses trésors au monde. Enfin, HELMI AL-RISHAH (Palestine) dirige le service des publications de la Maison de la poésie de Palestine et appartient à l’Union des écrivains palestiniens ainsi qu’à la revue Al-Shuara. C’est incontestablement un poète engagé, actif, plein de vie et de créativité. Considéré comme un « expérimentateur » du vers libre, il est un grand philosophe dont les pieds et les mains reposent sans crainte dans les bras de la Poésie. Il aime farouchement la folie de l’amour, car l’amour est toujours le vers « libre » qui réconcilie ses rêves.',
            'Très nombreux sont les poètes arabes qui méritent aujourd’hui l’attention et la réflexion du poète espagnol. Ce sont des poètes prestigieux du monde arabe contemporain, reconnus dans leurs pays d’origine et dignes du respect des nations. Je dois dire qu’un grand nombre reste dans l’encrier ; je demande pardon pour l’absence de ceux que je ne cite pas et qui sont, eux aussi, mes chers amis et frères en poésie.',
        ],
    },
    'gustavo-vega-poeticas-visuales': {
        title: 'Gustavo Vega : trente ans d’images et de verbes projetés sur l’infini',
        typeLabel: 'Préface / Étude introductive',
        description: 'Vaste étude introductive sur le parcours créatif et la poésie visuelle de Gustavo Vega, écrite pour accompagner le livre Poéticas Visuales.',
    },
};

export const localizePrologueWork = (work: PrologueWork, locale: Locale): PrologueWork =>
    locale === 'fr' ? { ...work, ...FR_PROLOGUE_METADATA[work.slug] } : work;
