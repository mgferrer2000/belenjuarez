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
