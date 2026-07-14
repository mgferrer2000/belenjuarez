import type { Locale } from './config';

type HomeMessages = {
    imageAlt: string;
    disciplines: string;
    titleLineOne: string;
    titleLineTwo: string;
    firstQuote: string;
    secondQuote: string;
};

type BioMessages = {
    eyebrow: string;
    title: string;
    introduction: string;
    stats: {
        books: string;
        publishedBooks: string;
        collaborations: string;
        album: string;
    };
    trajectory: [string, string];
    publications: [string, string];
    quote: string;
    philosophyTitle: string;
    philosophy: [string, string];
    images: {
        portraitAlt: string;
        artisticCareerAlt: string;
        mountainAlt: string;
        detailAlt: string;
        studioAlt: string;
        artisticPortraitAlt: string;
        placeAlt: string;
        belenPortraitAlt: string;
        poeticDetailAlt: string;
        handsAlt: string;
        artisticDetailAlt: string;
    };
    captions: {
        almunecar2025: string;
        penones: string;
        arriateWithJose: string;
        motrilBookFair: string;
        arriate2024: string;
        lecrin: string;
        lastNight: string;
        almunecar2026: string;
    };
};

type ContactMessages = {
    title: string;
    introduction: string;
    socialHeading: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    emailSubject: (name: string) => string;
};

type BooksMessages = {
    latestPublication: string;
    buy: string;
    backCover: string;
    coverAlt: (title: string) => string;
    publishers: Record<string, string>;
    downloads: Record<string, string>;
    descriptions: Record<string, { description: string; extendedDescription?: string }>;
};

export const HOME_MESSAGES: Record<Locale, HomeMessages> = {
    es: {
        imageAlt: 'Textura de fondo con libros',
        disciplines: 'Poesía • Música • Arte Visual',
        titleLineOne: 'La arquitectura',
        titleLineTwo: 'del verso',
        firstQuote: 'Escribo para encontrar el nombre exacto de las cosas que no existen hasta que se nombran',
        secondQuote: 'Siempre habrá un verso libre y entregado que nazca de la garganta del poeta, para todo aquel que le sostenga la mirada',
    },
    fr: {
        imageAlt: 'Texture de fond composée de livres',
        disciplines: 'Poésie • Musique • Art visuel',
        titleLineOne: 'L’architecture',
        titleLineTwo: 'du vers',
        firstQuote: 'J’écris pour trouver le nom exact des choses qui n’existent pas avant d’être nommées',
        secondQuote: 'Il y aura toujours un vers libre et offert, né de la gorge du poète, pour quiconque soutiendra son regard',
    },
};

export const BIO_MESSAGES: Record<Locale, BioMessages> = {
    es: {
        eyebrow: 'Biografía',
        title: 'Sobre Belén Juárez',
        introduction: 'Belén Juárez nace en París y reside actualmente en Granada. Doctora en Farmacia, es profesora Titular de Microbiología de la Universidad de Granada. Poeta desde temprana edad.',
        stats: {
            books: 'Libros',
            publishedBooks: 'Libros Publicados',
            collaborations: 'Colaboraciones',
            album: 'Álbum Musical',
        },
        trajectory: [
            'Ha realizado dos exposiciones de pintura: "Rostros" (UGR, 1991) y una Exposición colectiva Internacional de Pintura (Torres Vedras, Portugal, 1998). Ha colaborado en diversas exposiciones de Poesía Visual: "Poesía para ver" (Madrid, 1999; Barcelona 2000; Pineda del Mar, 2000; Palencia 2001, Valladolid, 2002).',
            'Ilustradora y traductora al francés de poemas del libro "Las Noches Azules del Alma" (Fundación de Estudios Euroárabes, 2001). Llevó sus versos al Instituto Cervantes de Beirut (Poetas del Mediterráneo, Encuentro de poetas libaneses y españoles, 2002). Ha participado en diversas antologías de Poesía, y ha publicado artículos en revistas literarias nacionales e internacionales.',
        ],
        publications: [
            'Participó en el Encuentro de Mujeres Poetas (Victoria-Gasteiz, 2005) con la presentación audiovisual "Música y Poesía". Además, es autora del relato "Á l’autre bout du monde" publicado en "El Tam Tam de las nubes." Recientemente (en 2025) ha participado en el proyecto antológico "Encuentro de Letras Celestes" (Puebla de los Infantes, Sevilla).',
            'A pesar de tener una extensa obra inédita, únicamente ha publicado tres libros de poesía: "Destierro en cuatro ángulos" (Ed. Devenir, 1999), "La Noche de Ayer" (Alhulia, 2002) y, recientemente, "Horizonte de Sucesos" (Huerga & Fierro, colección Rayo Azul, 2026). Además, ha publicado un álbum de música "Horizonte de Sucesos" (United Master, 2025), donde las letras de las canciones proceden de poemas del libro homónimo. Con este gesto Belén pretende abrir una nueva puerta a la Poesía a través de la música. Tanto las voces como las composiciones musicales fueron diseñadas con herramientas de inteligencia artificial. Las voces no son de nadie, pertenecen a la Poesía.',
        ],
        quote: 'La Poesía no hay que entenderla, hay que vivirla. No conozco ningún poeta "auténtico" que no tenga corazón',
        philosophyTitle: '¿Qué pienso?',
        philosophy: [
            'Escribo desde muy temprana edad. Nunca he mostrado aquellos primeros poemas. Pertenecen al silencio. Defiendo los derechos de humanos, animales y vegetales. Creo que la vida se sostiene sobre la coherencia de nuestras acciones y que no somos dueños ni de la vida ni del planeta donde habitamos. Soy una romántica antigua, apasionada del lenguaje como arma de defensa contra la ignorancia.',
            'Me debo a la Poesía, los versos que escribo no me pertenecen. Cuando un poema salta del papel al lector adquiere libertad, identidad, y en algunas ocasiones inmortalidad. A veces, la Poesía traspasa el entendimiento, se infiltra en otros planos de la realidad donde las emociones y el lenguaje tejen ese espacio amable donde descansa la cordura y la razón. La Poesía no hay que entenderla, hay que vivirla. No conozco ningún poeta "auténtico" que no tenga corazón.',
        ],
        images: {
            portraitAlt: 'Retrato de Belén Juárez',
            artisticCareerAlt: 'Trayectoria artística',
            mountainAlt: 'Peñones de Sierra Nevada',
            detailAlt: 'Belén Juárez en Arriate',
            studioAlt: 'Belén Juárez en Almuñécar',
            artisticPortraitAlt: 'Retrato artístico de Belén Juárez',
            placeAlt: 'Belén Juárez en Arriate',
            belenPortraitAlt: 'Retrato de Belén Juárez',
            poeticDetailAlt: 'Belén Juárez en el Valle de Lecrín',
            handsAlt: 'Detalle de las manos',
            artisticDetailAlt: 'Detalle artístico',
        },
        captions: {
            almunecar2025: 'Almuñécar, Granada. 2025',
            penones: 'Peñones de San Francisco de Sierra Nevada, Granada. Al fondo el Veleta. 2023.',
            arriateWithJose: 'Con José Domínguez en Arriate, Málaga. 2024',
            motrilBookFair: 'Feria del Libro de Motril, Granada. 2001',
            arriate2024: 'Arriate, Málaga. 2024',
            lecrin: 'Valle de Lecrín, Granada. 2025',
            lastNight: 'La noche de Ayer. 2001',
            almunecar2026: 'Almuñécar, Granada. 2026',
        },
    },
    fr: {
        eyebrow: 'Biographie',
        title: 'À propos de Belén Juárez',
        introduction: 'Belén Juárez est née à Paris et vit aujourd’hui à Grenade. Docteure en pharmacie, elle est professeure titulaire de microbiologie à l’Université de Grenade. Elle écrit de la poésie depuis son plus jeune âge.',
        stats: {
            books: 'Livres',
            publishedBooks: 'Livres publiés',
            collaborations: 'Collaborations',
            album: 'Album musical',
        },
        trajectory: [
            'Elle a présenté deux expositions de peinture : « Rostros » (UGR, 1991) et une exposition collective internationale de peinture (Torres Vedras, Portugal, 1998). Elle a également participé à plusieurs expositions de poésie visuelle : « Poesía para ver » (Madrid, 1999 ; Barcelone, 2000 ; Pineda del Mar, 2000 ; Palencia, 2001 ; Valladolid, 2002).',
            'Illustratrice et traductrice en français de poèmes du livre « Las Noches Azules del Alma » (Fundación de Estudios Euroárabes, 2001), elle a porté ses vers à l’Institut Cervantes de Beyrouth lors de « Poetas del Mediterráneo », rencontre de poètes libanais et espagnols, en 2002. Elle a participé à diverses anthologies poétiques et publié des articles dans des revues littéraires nationales et internationales.',
        ],
        publications: [
            'Elle a participé à la Rencontre des femmes poètes (Vitoria-Gasteiz, 2005) avec la présentation audiovisuelle « Música y Poesía ». Elle est également l’autrice du récit « Á l’autre bout du monde », publié dans « El Tam Tam de las nubes ». Plus récemment, en 2025, elle a pris part au projet anthologique « Encuentro de Letras Celestes » (La Puebla de los Infantes, Séville).',
            'Malgré une œuvre inédite considérable, elle n’a publié que trois recueils de poésie : « Destierro en cuatro ángulos » (Éd. Devenir, 1999), « La Noche de Ayer » (Alhulia, 2002) et, récemment, « Horizonte de Sucesos » (Huerga & Fierro, collection Rayo Azul, 2026). Elle a également publié l’album musical « Horizonte de Sucesos » (United Master, 2025), dont les paroles sont tirées de poèmes du livre homonyme. Par ce geste, Belén entend ouvrir à la poésie une nouvelle voie à travers la musique. Les voix comme les compositions musicales ont été conçues à l’aide d’outils d’intelligence artificielle. Ces voix ne sont celles de personne : elles appartiennent à la Poésie.',
        ],
        quote: 'La Poésie ne doit pas être comprise, elle doit être vécue. Je ne connais aucun poète « authentique » qui soit dépourvu de cœur',
        philosophyTitle: 'Ce que je pense',
        philosophy: [
            'J’écris depuis mon plus jeune âge. Je n’ai jamais montré ces premiers poèmes. Ils appartiennent au silence. Je défends les droits des êtres humains, des animaux et des végétaux. Je crois que la vie repose sur la cohérence de nos actes et que nous ne sommes propriétaires ni de la vie ni de la planète que nous habitons. Je suis une romantique d’un autre temps, passionnée par le langage comme arme de défense contre l’ignorance.',
            'Je me dois à la Poésie ; les vers que j’écris ne m’appartiennent pas. Lorsqu’un poème quitte le papier pour rejoindre le lecteur, il acquiert liberté, identité et, parfois, immortalité. Il arrive que la Poésie dépasse l’entendement et s’infiltre dans d’autres plans de la réalité, là où les émotions et le langage tissent cet espace bienveillant dans lequel reposent la raison et la santé de l’esprit. La Poésie ne doit pas être comprise, elle doit être vécue. Je ne connais aucun poète « authentique » qui soit dépourvu de cœur.',
        ],
        images: {
            portraitAlt: 'Portrait de Belén Juárez',
            artisticCareerAlt: 'Parcours artistique',
            mountainAlt: 'Sommets de la Sierra Nevada',
            detailAlt: 'Belén Juárez à Arriate',
            studioAlt: 'Belén Juárez à Almuñécar',
            artisticPortraitAlt: 'Portrait artistique de Belén Juárez',
            placeAlt: 'Belén Juárez à Arriate',
            belenPortraitAlt: 'Portrait de Belén Juárez',
            poeticDetailAlt: 'Belén Juárez dans la vallée de Lecrín',
            handsAlt: 'Détail des mains',
            artisticDetailAlt: 'Détail artistique',
        },
        captions: {
            almunecar2025: 'Almuñécar, Grenade. 2025',
            penones: 'Peñones de San Francisco, Sierra Nevada, Grenade. Le Veleta à l’arrière-plan. 2023.',
            arriateWithJose: 'Avec José Domínguez à Arriate, Málaga. 2024',
            motrilBookFair: 'Salon du livre de Motril, Grenade. 2001',
            arriate2024: 'Arriate, Málaga. 2024',
            lecrin: 'Vallée de Lecrín, Grenade. 2025',
            lastNight: 'La noche de Ayer. 2001',
            almunecar2026: 'Almuñécar, Grenade. 2026',
        },
    },
};

export const CONTACT_MESSAGES: Record<Locale, ContactMessages> = {
    es: {
        title: 'Contacto',
        introduction: 'Para lecturas, colaboraciones o prensa.',
        socialHeading: 'Encuéntrame en',
        nameLabel: 'Nombre',
        emailLabel: 'Email',
        messageLabel: 'Mensaje',
        send: 'Enviar',
        sending: 'Enviando',
        success: '¡Mensaje enviado correctamente! Te responderé lo antes posible.',
        error: 'Error al enviar. Inténtalo de nuevo o escríbeme directamente a mi email.',
        emailSubject: (name) => `Nuevo mensaje de ${name} — Web Belén Juárez`,
    },
    fr: {
        title: 'Contact',
        introduction: 'Pour les lectures, collaborations ou demandes de presse.',
        socialHeading: 'Retrouvez-moi sur',
        nameLabel: 'Nom',
        emailLabel: 'E-mail',
        messageLabel: 'Message',
        send: 'Envoyer',
        sending: 'Envoi en cours',
        success: 'Votre message a bien été envoyé. Je vous répondrai dans les meilleurs délais.',
        error: 'Une erreur est survenue. Réessayez ou écrivez-moi directement par e-mail.',
        emailSubject: (name) => `Nouveau message de ${name} — Site de Belén Juárez`,
    },
};

export const BOOKS_MESSAGES: Record<Locale, BooksMessages> = {
    es: {
        latestPublication: 'Última Publicación',
        buy: 'Comprar',
        backCover: 'Contraportada',
        coverAlt: (title) => `Portada de ${title}`,
        publishers: {
            '1': 'Web de Editorial Devenir',
            '2': 'Web de Editorial Alhulia',
            '3': 'Web de Huerga y Fierro editores',
        },
        downloads: {
            'Descargar Libro': 'Descargar Libro',
            'Prólogo': 'Prólogo',
            'Selección de poemas': 'Selección de poemas',
        },
        descriptions: {
            '1': { description: 'Primer libro publicado en 1999, en la Editorial Devenir. El libro está dividido en cuatro capítulos Tierra, Agua, Aire y Fuego donde se repiten los títulos de los poemas. De tal forma que se puede leer de forma lineal (por capítulos) o tomando los poemas de igual título de cada capítulo convirtiéndose en un único poema deslizándose por los cuatro elementos. En palabras de Antonio Enrique (Turia, nº 53) «El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran).» La temática gira en torno al tiempo donde se sostiene la vida, y todas las miserias que en ella acontecen: El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes.' },
            '2': { description: 'La Noche de Ayer, segundo libro de Belén, presenta una estructura dividida en tres tiempos con diez poemas cada uno. La temática del texto alude a un Pasado (el de cualquier persona) entretejido en un Presente donde los versos llegan con tal fuerza que se podría confundir con un caos lingüístico. No es así. El equilibrio lingüístico es. Existen recuerdos que se mezclan en el plano del Presente como imágenes superpuestas de una misma realidad pasada. El concepto de Espacio/Tiempo que entendemos en el mundo en que vivimos, son variables no constantes en otras dimensiones universales. De ahí que este poemario sea, tal vez, tan críptico; procede del subconsciente y de la memoria del poeta. De esa memoria donde unos niños fueron obligados a caminar por sendas diferentes.' },
            '3': {
                description: 'Tras un largo silencio lírico de casi veinte años, Belén ha retomado la poesía con su nuevo libro "Horizonte de Sucesos".',
                extendedDescription: 'Este libro es un profundo diálogo entre la poesía y el poeta. Se ha estructurado con poemas que siguen la secuencia de Fibonacci, poemas de 34-21-13-8-5-3-2-1-1 versos que se repiten en cada capítulo. Esta secuencia es la que ordena todas las proporciones del mundo real que conocemos, de ahí mi elección. Hablar de poesía no es hablar de versos, vivir la poesía transciende más allá del propio entendimiento, más allá de nuestros deseos o motivos. Poeta es aquel que se entrega incondicionalmente a la escritura sin saber, en numerosas ocasiones, por qué ha escrito un texto que se ha desviado de sus intenciones. Hablamos del inconsciente como posible razón, pero tal vez sea algo más que no percibimos.',
            },
        },
    },
    fr: {
        latestPublication: 'Dernière publication',
        buy: 'Acheter',
        backCover: 'Quatrième de couverture',
        coverAlt: (title) => `Couverture de ${title}`,
        publishers: {
            '1': 'Site des éditions Devenir',
            '2': 'Site des éditions Alhulia',
            '3': 'Site des éditions Huerga y Fierro',
        },
        downloads: {
            'Descargar Libro': 'Télécharger le livre',
            'Prólogo': 'Préface',
            'Selección de poemas': 'Sélection de poèmes',
        },
        descriptions: {
            '1': { description: 'Premier livre publié en 1999 aux éditions Devenir. L’ouvrage se divise en quatre chapitres, Terre, Eau, Air et Feu, dans lesquels les titres des poèmes se répètent. Il peut ainsi se lire de manière linéaire, chapitre après chapitre, ou en réunissant les poèmes de même titre de chaque chapitre, qui deviennent alors un seul poème traversant les quatre éléments. Selon Antonio Enrique (Turia, nº 53) : « Le livre tourne ainsi sur lui-même et se déplace en ellipse : il possède des axes de rotation, dans ses poèmes, et de translation, dans les parties qui les structurent. » Les thèmes gravitent autour du temps qui soutient la vie et de toutes les misères qui s’y produisent : le temps et la désintégration de tout ce qui vit, la vanité des passions, la condition d’exil de l’être humain, la tentation de la violence et l’incapacité radicale à jouir comptent parmi ses motifs récurrents.' },
            '2': { description: 'La Noche de Ayer, deuxième livre de Belén, présente une structure divisée en trois temps comprenant chacun dix poèmes. Le texte évoque un Passé, celui de chacun, tissé dans un Présent où les vers surgissent avec une telle force qu’ils pourraient être confondus avec un chaos linguistique. Il n’en est rien : l’équilibre du langage demeure. Des souvenirs se mêlent au présent comme des images superposées d’une même réalité passée. L’Espace et le Temps, tels que nous les comprenons dans notre monde, ne sont pas des variables constantes dans d’autres dimensions de l’univers. C’est pourquoi ce recueil peut paraître si cryptique : il procède du subconscient et de la mémoire de la poète, de cette mémoire où des enfants furent contraints d’emprunter des chemins différents.' },
            '3': {
                description: 'Après un long silence lyrique de près de vingt ans, Belén renoue avec la poésie dans son nouveau livre « Horizonte de Sucesos ».',
                extendedDescription: 'Ce livre constitue un dialogue profond entre la poésie et la poète. Il est composé de poèmes qui suivent la suite de Fibonacci : 34-21-13-8-5-3-2-1-1 vers, selon une séquence répétée dans chaque chapitre. Cette suite ordonne toutes les proportions du monde réel que nous connaissons, d’où mon choix. Parler de poésie ne revient pas à parler de vers : vivre la poésie dépasse l’entendement lui-même, nos désirs et nos motifs. Le poète est celui qui se livre sans condition à l’écriture sans toujours savoir pourquoi le texte écrit s’est écarté de ses intentions. Nous évoquons l’inconscient comme raison possible, mais il s’agit peut-être de quelque chose d’autre que nous ne percevons pas.',
            },
        },
    },
};

export const PLAQUETTE_MESSAGES: Record<Locale, {
    updating: string; collection: string; coverAlt: (title: string) => string;
    illustrationAlt: string; illustrationCredit: string; end: string;
    event: string; date: string; location: string; publication: string; credits: string;
}> = {
    es: {
        updating: 'Sección en actualización', collection: 'Colección Plaquettes',
        coverAlt: (title) => `Portada de ${title}`, illustrationAlt: 'Ilustración principal de la obra',
        illustrationCredit: 'Ilustración Belén Juárez', end: 'Fin de la Plaquette',
        event: 'Día mundial de la Poesía', date: '21 de marzo de 2025',
        location: 'Recital en Librería sostiene Pereira, Granada',
        publication: 'Revista Alhucema, Colección libros', credits: 'Textos y poemas',
    },
    fr: {
        updating: 'Section en cours de mise à jour', collection: 'Collection Plaquettes',
        coverAlt: (title) => `Couverture de ${title}`, illustrationAlt: 'Illustration principale de l’œuvre',
        illustrationCredit: 'Illustration de Belén Juárez', end: 'Fin de la plaquette',
        event: 'Journée mondiale de la poésie', date: '21 mars 2025',
        location: 'Récital à la librairie Sostiene Pereira, Grenade',
        publication: 'Revue Alhucema, collection Livres', credits: 'Textes et poèmes',
    },
};
