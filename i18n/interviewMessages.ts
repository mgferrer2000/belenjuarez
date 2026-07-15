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

const FR_INTERVIEW_CONTENT: Record<string, Record<number, string>> = {
    'entrevista-antonio-carvajal': {
        1: 'Ficciones. À vos débuts, nous trouvons un livre, Tigres en el Jardín, publié en 1968 et dédié à Vicente Aleixandre. Quelle influence ses textes ont-ils exercée sur vous ?',
        2: 'A. Carvajal : De Vicente Aleixandre comme poète, peu ; comme personne, énormément, car heureusement l’amitié est entrée en jeu. J’ai connu V. Aleixandre en 1965 et cette rencontre fut pour moi un événement absolument fondamental. Mais lorsque je l’ai rencontré, ma voix poétique était déjà presque formée, pas encore tout à fait affirmée, mais presque. Dans Tigres en el jardín, son influence est minime. Je l’avais lu, mais pas avec la même intensité que d’autres poètes, et l’empreinte de l’œuvre d’Aleixandre est bien plus perceptible dans certains de mes livres ultérieurs.',
        3: 'F. : Et quels écrivains ont depuis lors influencé votre œuvre ?',
        5: 'A. C. : Dans Tigres en el Jardín, l’empreinte de Rubén Darío est très claire, et je ne sais pas pourquoi les critiques ne l’ont pas signalée. Ils se sont beaucoup souciés de citer Góngora et le Baroque, sans comprendre que le baroquisme éventuel de Tigres en el jardín possède une coloration moderniste très nette, ainsi qu’une présence considérable du Français Paul Valéry. Quant à l’arrière-plan idéologique, on y observe déjà ma préférence pour les philosophes épicuriens, née de la lecture des quelques fragments conservés d’Épicure et des traces qu’il a laissées chez d’autres philosophes, par exemple Lucrèce, dont j’ai fait une véritable pâture de lectures et que j’ai utilisé comme source de poésie. Mais ces choses appartiennent au monde intérieur des livres.',
        7: 'F. : Dans le livre Ciudades de Provincia, vous dites avoir traversé un moment d’écriture dangereux, par crainte d’être enfermé dans des formes déterminées...',
        8: 'A. C. : Ce n’était pas de la peur. C’est que, dès que la critique appose une « étiquette », elle vous confine dans les limites extrêmement étroites de cette définition. Un livre de poésie s’ouvre sur de nombreux fronts. Même si l’on cherche à lui donner une ligne cohérente, tant dans l’expression que dans les thèmes, un même livre peut en réalité engendrer de multiples prolongements et de multiples directions. Ainsi, dans Tigres en el Jardín, la présence de la douleur est très faible.',
        10: 'F. : Le thème des archanges est évoqué...',
        11: 'F. : Oui, certes, mais le thème de la douleur est très peu présent et il est même traité avec un certain dédain, parce qu’heureusement le poète se sent alors heureux. La situation change cependant beaucoup avec Serenata y Navaja, son deuxième livre, car la vie, que nous le voulions ou non, exerce son influence. Les processus vitaux agissent toujours sur les évolutions poétiques, et ma vie connut une série de bouleversements durant les années qui séparèrent Tigres en el Jardín de Serenata y Navaja. Je ne parle pas de leur publication, mais de la relation entre les livres : une série d’événements familiaux et d’une autre nature modifia la situation provisoire et relativement heureuse dans laquelle je vivais lorsque j’écrivis Tigres en el Jardín, et qui se défit lorsque j’écrivis Serenata y Navaja. La crainte d’être catalogué, je l’ai ressentie dans les critiques de Tigres en el Jardín : elles ne retenaient que les éléments formels. La critique n’a cessé de le répéter, et je suis toujours frappé que l’on ne parle que de ces éléments formels.',
        12: 'F. : Rechercher de nouvelles formes ?',
        13: 'A. C. : Non. Mon travail ne consiste pas tant à rechercher de nouvelles formes qu’à détruire et recomposer celles du passé. Je n’ai pas vraiment inventé ou « réutilisé » de combinaisons strophiques ; en revanche, j’ai détruit les formes anciennes pour tenter de leur donner un air nouveau, ce que je crois parvenir à faire dans Serenata y Navaja. On ne peut pas me classer parmi les novísimos, parce que la préoccupation politique et sociale demeure en moi ; on ne peut pas m’y inclure parce que mon sens de l’éthique est différent ; et on ne peut pas m’y inclure parce que j’ai toujours répété une phrase, de Ravelli je crois : « Science sans conscience est la ruine de l’âme ». Je l’ai toujours gardée à l’esprit comme une devise et, de mon premier livre au dernier, elle m’a conditionné et obligé à pratiquer un certain type de littérature. Oui, je crois à l’engagement de l’écrivain, et ce serait là le fait essentiel qui me sépare des novísimos.',
        14: 'F. : Dans votre livre Servidumbre de Paso, vous parlez de Pedro Soto de Rojas...',
        15: 'A. C. : Lorsque je parle de Pedro Soto de Rojas, je fais référence au poète, auteur de Desengaño de amor en rimas et de El paraíso cerrado para muchos, un jardín abierto para pocos. Je parle d’un poète auquel d’autres auteurs, comme Lorca ou Gerardo Diego, et même Neruda, accordèrent une très grande attention. S’il existe dans la poésie classique une référence que l’on puisse citer comme exemple de ce qui est grenadin, ce serait précisément lui : le premier à élaborer cette topique et à construire cette phrase comme titre de son livre, Paraíso cerrado para muchos, jardines abiertos para pocos, formule qui, à partir de Lorca, allait devenir un cliché pour désigner Grenade.',
        16: 'F. : Au début, j’avais même pensé à un lien avec Pedro Soto, théologien et philosophe espagnol des environs de 1500, qui parla de la doctrine du sacrement de l’Eucharistie...',
        17: 'A. C. : (Rires.) Cela ne serait pas non plus très surprenant, car Serenata y Navaja contient un poème intitulé Sobre el ardor de la lucha postrera, traduction d’un épigraphe de saint Thomas d’Aquin tiré d’une partie de sa Somme théologique. J’ai moi aussi lu un peu de théologie, surtout de théologie morale. L’un des livres que j’ai le plus consultés, précisément pour ne pas commettre d’erreurs amoureuses dans ma poésie, fut la Teología Moral du père Cullera.',
        19: 'F. : Dans Ciudades de Provincia, vous parcourez des villes comme Úbeda et Baeza et utilisez les symboles de la Nature pour décrire la beauté. Une phrase s’affirme : « L’Architecture comme bel art collectif... ». Au-delà du changement de formes, est-ce là le dessein de ce livre : décrire la beauté architecturale des villes de Jaén ?',
        20: 'A. C. : Plus précisément dans le poème Piedra viva (Amanecer en Úbeda), le premier consacré à un sujet de Jaén, qui se trouve dans Serenata y Navaja. Lorsque j’ai conçu ce livre, j’ai cherché à composer une série de poèmes sur les grands archétypes artistiques : pour la Musique, j’ai choisi Mozart ; pour la Sculpture, Bernardo Olmedo ; pour la Peinture, un tableau de Francisco Pedraja, Vista de Badajoz al atardecer ; et pour l’Architecture, je me suis appuyé sur Úbeda, concrètement sur l’espace urbain dominé par la chapelle d’El Salvador, cette façade avec son merveilleux arrière-plan lorquien d’oliveraies. C’est essentiellement tout l’espace de la place qui entre dans la vision du poème. Si l’on regarde attentivement Piedra Viva (Amanecer en Úbeda), on y trouve même un éloge du travail manuel collectif : il faut de nombreux tailleurs de pierre, maçons et carriers. Cela rompait précisément avec l’esthétique dominante de l’époque, où de tels sujets ne pouvaient être abordés parce qu’ils étaient jugés véritablement ordinaires. Lorsque les gens sont éblouis par l’éclat de Venise, par exemple, ils ne pensent pas à ceux qui l’ont bâtie. Ils voient le résultat, mais pas le processus ni le travail collectif qui a rendu possible cette merveille esthétique. Venise est un lieu merveilleux, mais Úbeda l’est aussi.',
        21: 'F. : Ce livre entretient-il un lien avec des amis qui vous sont chers ?',
        22: 'A. C. : Oui, ma poésie est généralement très motivée. Une partie de ce qu’elle raconte ne relève pas d’une anecdote ni d’une expérience que j’aurais vécue, mais fondamentalement de quelque chose que j’ai contemplé. Je prends habituellement beaucoup de distance avec les sujets que je traite, notamment parce qu’une émotion intense me permet seulement de la ressentir : sans distance, je ne peux pas écrire le poème. Je le dis dans De un Capricho a Celeste, plus précisément dans Confidencias de un hijo de este tiempo a Rafael León : j’ai besoin d’être calme et conscient pour accomplir la tâche d’écrire le poème, et même d’être proche du bonheur ; pas entièrement heureux, car lorsque je suis heureux, je n’écris pas.',
        23: 'F. : Seriez-vous alors comme un spectateur ?',
        24: 'A. C. : Non. La vie des autres n’est pas seulement une source d’inspiration pour le romancier. Le poète peut trouver des archétypes dans ce que les autres vivent, font et endurent. Il m’est assurément beaucoup plus facile de comprendre poétiquement ce qui arrive aux autres que de décrire les misères quotidiennes qui traversent mon for intérieur. J’ai la chance de pouvoir me prévaloir d’amis d’une immense qualité humaine, et cette qualité constitue peut-être la source principale de ma poésie.',
        25: 'F. : Antonio Carvajal est-il, d’une certaine manière, un paradis clos ?',
        26: 'A. C. : Non. Les relations d’amitié et d’amour impliquent normalement au moins deux personnes, et tous mes amis sont partagés ; ils ne sont ni exclusifs, ni uniques, ni enfermés. C’est un monde très ouvert. Il n’y a pas de clôture : l’intimité est une chose, le monde fermé en est une autre. Lorsque je rencontre quelqu’un qui commence à m’intéresser, je lui fais toujours passer un test pour savoir si je peux devenir son ami : je lui demande ce qu’il préfère, une Tour ou un Pont.',
        27: 'F. : Vous nous laissez dans le doute et la réflexion...',
        28: 'A. C. : Tous les sujets me touchent et ont affleuré dans ma poésie. Siesta en el Mirador, mon quatrième livre, reprend le titre d’un poème de mon premier ouvrage, Tigres en el Jardín. On y trouve une interprétation du mythe de Narcisse différente de la lecture conventionnelle. J’ai souvent dit que le narcissisme n’est pas quelque chose de nouveau : c’est une maladie très clairement décrite par les psychologues. Il existe un élément étrange : à la naissance de Narcisse, sa mère l’emmène chez le devin Tirésias. Lorsqu’elle lui demande : « Sera-t-il heureux ? », le devin répond : « Oui, s’il ne se connaît pas ». Fixer ainsi un destin, alors que l’oracle de Delphes affirme exactement le contraire — « Connais-toi toi-même » —, doit nous faire soupçonner quelque chose d’étrange dans le mythe. Narcisse meurt effectivement lorsqu’il se connaît, car le Narcisse du mythe ne tombe pas amoureux de lui-même : il s’éprend d’une créature d’une très grande beauté qu’il aperçoit, et c’est au moment où il découvre que cette créature est lui-même qu’il meurt. Cette interprétation est donc très singulière, et c’est précisément là que je place le poème Siesta en el Mirador — nous savons que le mirador est un balcon fermé. Narcisse n’aimait pas sa voix, mais son écho ; il ne s’aimait pas lui-même, mais l’image dont il ignorait qu’elle était la sienne.',
        29: 'F. : Vous êtes un observateur très sensible de tout ce qui vous entoure ; vous seriez comme un balcon ouvert, par lequel vous voyez entrer tous ceux qui sont autour de vous. Cette émotion se ressent précisément à la lecture de Noviembre, dédié à votre père, ainsi que dans le quinzième poème de l’Antología de Treinta años de Poesía Española, où vous semblez parler de votre fils : « ...Alguna vez mis labios, hijo mío,/ han buscado tu rostro... ».',
        30: 'A. C. : Ce n’est pas une expérience personnelle, car je suis heureusement célibataire et ne suis pas père célibataire. Il s’agit de la perte du père et du refus du fils, mais cette expérience, je le répète, n’a pas été vécue par moi. Je me suis appuyé sur la réaction d’un de mes amis face au refus de son fils. C’est un procédé sur lequel j’insiste. Dans Raso, Milena y Perla, par exemple, le poème dédié à Guillermo González fait intervenir tantôt Antonio Callejas, tantôt moi-même ; le poème se compose progressivement de tout ce que j’assimile de cette conversation.',
        31: 'F. : J’ai pu observer que Raso, Milena y Perla propose une description poétique d’amis et de personnes. Que pouvez-vous nous en dire ?',
        32: 'A. C. : Ce livre est entièrement motivé de l’extérieur. Il se construit en même temps que les derniers poèmes de Testimonio de Invierno, ceux de Miradas sobre el agua et ceux du dernier livre que j’ai achevé et remis à l’éditeur. C’est un ouvrage issu d’un processus de plusieurs années et de réponses à des peintres, sculpteurs et musiciens qui me demandent une collaboration pour des catalogues ou des œuvres. Je n’ai évidemment pas réuni tout ce que j’ai écrit pour les différents artistes : le livre cherche à rester cohérent. Dans certains cas précis, par exemple Fábula pagana et Fábula bíblica, mon écriture manuscrite prend appui sur des dessins de M. Teresa Martín Vivaldi, dédiés aux deux personnes auxquelles les tableaux furent ensuite offerts. Contrairement aux recueils de poésie qui constituent le reste de mon œuvre, Raso, Milena y Perla est entièrement motivé par l’amitié.',
        33: 'F. : Le message du livre pourrait-il donc être l’amitié elle-même ?',
        34: 'A. C. : Fondamentalement. Je crois qu’il contient une réflexion sur notre manière d’être au Monde et une réflexion sur l’Art, envisagé dans ses dimensions les plus générales comme les plus concrètes. J’y affirme que le tableau et le poème dureront plus longtemps que ceux qui les peignent ou les écrivent, et il y a une joie à savoir que l’œuvre survit à notre propre existence. Le livre contient bien d’autres choses, par exemple une interrogation sur le Bonheur. Dans le poème dédié à Asunción Jódar, qui constitue selon moi l’une des clés de toute ma poésie, on lit : « ¿Por qué los dioses fueron incapaces/ de hacer felices a sus hijos, todos;/ los padres deben ser crueles y mudos? ». J’insiste sur le mutisme du père, que l’on entendra ensuite à travers la paraphrase des sept paroles du Christ en croix et toute cette série d’éléments. Nous parlons du silence de Dieu.',
        35: 'F. : Et des Poemas de Granada...',
        36: 'A. C. : La paraphrase fut d’abord inscrite dans Poemas de Granada, mais sa place réelle, la place naturelle de cet ensemble de poèmes, se trouve dans Miradas sobre el agua.',
        37: 'F. : La Nostalgie cherche-t-elle Antonio au coin des rues ?',
        38: 'A. C. : Pas moi.',
        39: 'F. : Comment vous définiriez-vous ?',
        40: 'A. C. : Des mots comme « Névralgie » ou « Nostalgie » me font penser à des maladies que l’on soigne habituellement avec une aspirine ou quelque chose de ce genre. J’ai bien des accès de mélancolie, mais pas de nostalgie. Cela tient à ma manière de vivre. Je ne sais même pas si j’ai jamais employé ce mot dans un vers, je ne m’en souviens pas ; en revanche, j’ai utilisé le mot Mélancolie.',
        41: 'F. : Avez-vous une source cachée de mauvaise vie ?',
        42: 'A. C. : (Rires.) Naturellement !',
        43: 'F. : Comme tout bon artiste...',
        44: 'A. C. : Pas comme tout bon artiste, mais comme tout être humain qui veut vivre ! Nous serions bien avancés s’il fallait exposer notre intimité comme une vitrine de marchandises que l’on achète et que l’on vend !',
        45: 'F. : Êtes-vous satisfait de votre poésie ?',
        46: 'A. C. : Pas encore ; de certains poèmes, oui.',
        47: 'F. : Mais un écrivain n’atteint jamais la pleine satisfaction.',
        48: 'A. C. : Cela dépend de ceux auxquels je me compare. Si je me compare à la majorité des vivants, je suis presque pris d’accès de vanité et je finis presque par croire que je suis bon. Si je me compare à quelques vivants et à beaucoup de morts, l’humilité s’impose évidemment et il faut reconnaître que, selon ce que j’aime et ce que j’admets, il reste encore beaucoup de chemin avant d’atteindre cet échelon.',
        49: 'F. : Parlons-nous des anthologies ?',
        50: 'A. C. : Je dis toujours la même chose à propos des anthologies : il faut interroger les anthologistes et les lecteurs. Comment pourrais-je répondre à la place d’un anthologiste, de ses critères ou de ses goûts ? L’anthologie qui m’intéresse est celle dont je sais qu’elle a eu de véritables lecteurs et qui me permet de savoir quels poèmes ont atteint un groupe déterminé. Je veux connaître la réaction de mes lecteurs et, au moins, les anthologistes me garantissent qu’ils m’ont lu ; parfois, nos préférences coïncident. Dès l’instant où ils me choisissent, ils portent déjà un jugement sur moi. Les étiquettes qu’ils ajoutent relèvent ensuite de leur responsabilité. Je me contente de les remercier.',
        51: 'F. : Dormez-vous bien, ou les rêves vous réveillent-ils souvent ?',
        52: 'A. C. : Les rêves ne m’ont jamais réveillé ; les rêves... ne sont que des rêves.',
        53: 'F. : Les mêmes choses qu’il y a vingt ans continuent-elles de vous inspirer ?',
        54: 'A. C. : Bien davantage ! Heureusement, avec l’âge, le monde s’élargit beaucoup. Il se réduit aussi, car on se désintéresse de choses qui paraissaient fondamentales à dix-sept ans et dont on découvre ensuite qu’elles n’étaient que les fantaisies d’hier. Je partage tout à fait une déclaration de Carlos Fuentes, qui disait avoir été à vingt ans un parfait imbécile. Pour ma part, je situe mon degré d’imbécillité parfaite entre quinze et vingt-deux ans. À mesure que la vie vous corrige et vous remet à votre place, vous comprenez que les caprices d’enfant ne sont ni féconds ni capables de conduire quelque part. Je me souviens de cette peur de ne pas savoir que faire de ma vie, de cette sensation de vertige que donne le temps : ce fut pour moi la meilleure période physique et la pire période spirituelle. Rien n’est plus idiot qu’un adolescent ; j’ai été un adolescent très complet et donc parfaitement idiot.',
        55: 'F. : Il est très facile de regarder la vie à partir de l’expérience de l’avoir vécue...',
        56: 'A. C. : C’est que l’on nous appelle la beauté des fantômes. De même qu’un enfant de neuf ans choisit des marques de chemises, à dix-sept ans nous choisissons des marques de vie sans comprendre que la Vie doit se construire en commun avec les autres, avec le plus de générosité possible et le moins d’égoïsme possible. Il faut prendre conscience qu’il existe des formes de vie beaucoup plus authentiques, capables de se passer de tout ce qui nous accable, depuis ces divinités absolument hostiles jusqu’à ce commerce pressant qui fait de nous ses propres victimes : la Consommation.',
        57: 'F. : Une manière de vivre qui ne conduise pas à ces choses.',
        58: 'A. C. : Par exemple, s’accepter tel que l’on est. Il ne me viendrait pas à l’esprit d’envier l’homme qui passe dans la rue au volant d’une Jaguar — une voiture qui me plaît beaucoup, par ailleurs. Il serait bien plus beau de se promener sur le dos d’un véritable jaguar apprivoisé et de parcourir la Terre sur ce magnifique animal. Certains moments de bonheur suprême ont consisté à partager un vin dépourvu de toute marque.',
        59: 'F. : Cela se traduit-il dans la poésie que vous écrivez ?',
        60: 'A. C. : Je l’espère, même si l’on conserve ensuite ses insatisfactions spirituelles. Comme j’aimerais être heureux et ne pas écrire de poèmes ! Si j’étais absolument heureux, je n’écrirais pas ; je me consacrerais au bonheur, ce qu’il y a de plus égoïste et de plus beau.',
        61: 'F. : Je ne comprends pas ; le Bonheur peut résider dans l’écriture...',
        62: 'A. C. : J’en doute. Machado disait : Se canta lo que se pierde...',
        63: 'F. : Ou aussi ce que l’on gagne...',
        64: 'A. C. : Difficilement. Ce qui se passe, c’est que l’on voudrait saisir cet instant et que l’on écrit sur ce moment de bonheur pour qu’il perdure, revienne s’installer dans l’âme et ne disparaisse pas entièrement. Le poème a un sens comme jouissance esthétique et comme consolation. La fonction d’entremetteuse de la poésie m’a toujours enthousiasmé. Un poète véritablement entremetteur est l’un des instruments les plus nécessaires au développement de la vie humaine. Rien n’est plus merveilleux que de surprendre des adolescents s’échangeant des vers de Bécquer ou de Salinas, ou qu’un ami vienne un jour vous remercier parce qu’il a emprunté deux de vos vers pour faire une conquête. Cela me remplit de satisfaction, car je comprends avoir ainsi facilité la vie d’autrui. De même, lorsque je ne sais pas définir ce que je porte en moi, j’aime rencontrer le vers d’un autre, de Miguel Hernández par exemple, et pouvoir préciser mon état d’âme. Je peux définir mon adolescence par ces vers de Lorca : « ...Hoy tengo en el corazón un vago temblor de estrellas, y tengo las cosas son tan blancas como mi pena... ». Dans un moment de véritable malheur, je peux aussi me souvenir de ce vers de Miguel Hernández, « Cuánto penar para morirse uno », et continuer d’avancer... J’aime les poètes qui m’accompagnent. Une phrase de saint Augustin dit : « ...Belleza tan antigua y sin embargo nueva » — le mot « afín » me vient à l’esprit, puisque nous créons les dieux à notre image et à notre ressemblance. Cette phrase de saint Augustin nous invite à regarder autour de nous et à voir toute la beauté qui nous échappe, car la Beauté est toujours ancienne et toujours nouvelle, toujours passée et toujours présente.',
        65: 'F. : Le moindre détail peut renfermer davantage de beauté que tout un monde...',
        66: 'A. C. : Ce ne sont pas des grandeurs mesurables.',
        67: 'F. : Pensez-vous que l’on puisse distinguer un poète authentique de celui qui ne l’est pas ?',
        68: 'A. C. : Il existe un signe qui trompe rarement : le poète authentique, même dans ce qui paraît le plus vide ou le plus esthétisant, possède toujours un battement affectif qui se transmet, et cela se détecte facilement. Lorsqu’un esprit humain entre en contact avec le produit d’un autre esprit humain, ce phénomène se manifeste : une sorte de petit bouleversement nous avertit que la poésie véritable se trouve là. Si la poésie est authentique, le poème est bon. Il existe aussi des poètes très artificieux et éblouissants qui ne transmettent pas cette émotion ; le poème traverse alors notre esprit sans le briser ni le marquer, comme s’il n’avait jamais existé. Cela se ressent : les vrais poètes se reconnaissent toujours.',
        69: 'F. : Et le Prix national, Antonio, pour quand ?',
        70: 'A. C. : C’est le problème des jurys. Pour les prix, je dis la même chose que pour les anthologies : ce n’est ni la personne retenue ni le lauréat qu’il faut interroger, mais les anthologistes et les jurys, qui doivent répondre de leurs actes.',
        71: 'F. : Mais Antonio Carvajal n’en a pas besoin...',
        72: 'A. C. : (Rires.) À vrai dire, cinq millions de pesetas ne me feraient pas de mal !...',
        73: 'F. : Je ne faisais pas précisément référence à la question économique... Antonio Carvajal n’a plus besoin de ce prix.',
        74: 'A. C. : Les marques de reconnaissance d’autrui sont toujours bienvenues. On a beau prétendre se suffire à soi-même, si la récompense arrive, qu’elle soit bénie ! Ce que je ne peux pas faire, c’est m’abaisser à la mendier. S’ils ne me la donnent pas, ils auront leurs raisons ; qu’ils ne viennent pas me les demander ! (Rires.) Je ne souffre pas de ne pas la recevoir, et je ne vais pas non plus me réjouir excessivement si on me l’accorde.',
        75: 'F. : C’est précisément ce que je voulais dire...',
        76: 'A. C. : Je ne me souviens même pas de celui qui a reçu le prix il y a cinq, six ou sept ans. Les prix sont absolument éphémères. En revanche, si vous m’interrogez sur le Premio de las Letras Españolas, je m’en souviens, parce que le ministère de la Culture réalise de merveilleuses publications. Lorsqu’on les feuillette ensuite, on comprend qu’il s’agit d’un prix véritablement consistant, non seulement par sa dotation financière, mais aussi par la publication d’une série d’œuvres qui justifie une récompense de cette catégorie.',
        78: 'Antonio Carvajal, au nom de tous les lecteurs, nous souhaitons vous remercier ici de votre collaboration et de ces moments partagés de réflexion et de dialogue. Comme l’a dit Rubén Darío :',
    },
};

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
