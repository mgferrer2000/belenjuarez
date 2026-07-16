import type { Locale } from './config';

type MusicPoetryMessages = {
    title: string;
    introduction: string;
    videoTitle: string;
    liveExhibition: string;
    exhibitionText: string;
    pieceTitle: string;
    paragraphs: string[];
};

type MusicHorizonMessages = {
    title: string;
    introduction: string;
    selectionPrompt: string;
    authorNote: string;
    authorParagraphs: string[];
    reviewTitle: string;
    reviewMeta: string;
    reviewParagraphs: string[];
    reviewLink: string;
};

type MusicVideoItem = {
    id: string;
    title: string;
    youtubeId: string;
    description: string;
};

type MusicVideosMessages = {
    title: string;
    introduction: string;
    items: MusicVideoItem[];
};

export const MUSIC_POETRY_MESSAGES: Record<Locale, MusicPoetryMessages> = {
    es: {
        title: 'Música y Poesía',
        introduction: 'Donde la palabra se convierte en sonido y la imagen en verso. Una pieza audiovisual que fusiona poesía, música y arte visual.',
        videoTitle: 'Música y Poesía - Belén Juárez',
        liveExhibition: 'Exhibición en Directo',
        exhibitionText: 'VIII Encuentro de mujeres poetas. En memoria de Ernestina de Champourcin. “Diversidad de voces y formas”. Museo Artium de Vitoria, 2005. Organizado por Ángela Serna.',
        pieceTitle: 'El Vals de lo Invisible',
        paragraphs: [
            'La música y la palabra no son artes distintas; son hilos de un mismo tapiz universal donde el sentir cobra forma. Allí, donde el silencio se rinde, emergen las notas de Rachmaninov: pulsos de una realidad ultrajada que él supo diseñar con la maestría de quien acaricia el infinito.',
            'Yo me sumo a ese eco. Acompaño la elocuente mudez del maestro ruso con la huella de mis trazos y la arquitectura de mis versos. Como un diálogo de sombras y luces, un baile donde las blancas, negras y corcheas se atreven a ser cuerpos: bailarinas etéreas que danzan en el filo del tiempo, suspendidas entre los acordes del Concierto Número 2.',
            'En este espacio, el piano respira, se mueve sobre la vida, habitando los sueños que aún no nos atrevemos a soñar. Los versos que acompañan al maestro proceden del libro "El universo de las luces" aún sin publicar, versos que duermen en el lecho del silencio desde hace ya tanto tiempo.',
        ],
    },
    fr: {
        title: 'Musique et Poésie',
        introduction: 'Là où la parole devient son et l’image vers. Une pièce audiovisuelle qui unit poésie, musique et art visuel.',
        videoTitle: 'Musique et Poésie - Belén Juárez',
        liveExhibition: 'Présentation en direct',
        exhibitionText: 'VIIIe Rencontre de femmes poètes. En mémoire d’Ernestina de Champourcin. « Diversidad de voces y formas ». Musée Artium de Vitoria, 2005. Organisée par Ángela Serna.',
        pieceTitle: 'El Vals de lo Invisible',
        paragraphs: [
            'La musique et la parole ne sont pas des arts distincts ; elles sont les fils d’une même tapisserie universelle dans laquelle le ressenti prend forme. Là où le silence se rend, les notes de Rachmaninov émergent : les pulsations d’une réalité meurtrie qu’il a su façonner avec la maîtrise de qui caresse l’infini.',
            'Je me joins à cet écho. J’accompagne le silence éloquent du maître russe de la trace de mes traits et de l’architecture de mes vers. Comme un dialogue d’ombres et de lumières, une danse où les blanches, les noires et les croches osent devenir des corps : des danseuses éthérées qui dansent sur le fil du temps, suspendues entre les accords du Concerto nº 2.',
            'Dans cet espace, le piano respire et se meut sur la vie, habitant les rêves que nous n’osons pas encore rêver. Les vers qui accompagnent le maître proviennent du livre inédit « El universo de las luces », des vers qui dorment depuis si longtemps dans le lit du silence.',
        ],
    },
};

export const MUSIC_HORIZON_MESSAGES: Record<Locale, MusicHorizonMessages> = {
    es: {
        title: 'Horizonte de Sucesos',
        introduction: 'El nuevo álbum de Belén Juárez (2025). Una travesía sonora de 21 piezas que exploran los límites entre la realidad y el subconsciente.',
        selectionPrompt: 'Pulsa en un tema para seleccionarlo en el reproductor.',
        authorNote: 'Nota de la Autora',
        authorParagraphs: [
            'Este álbum representa la culminación de un proceso de investigación sonora donde el verso se proyecta desde la palabra para convertirse en acordes de un atlas de emociones. Las letras proceden de poemas del libro Horizonte de Sucesos (Huerga & Fierro, 2026).',
            'El libro se compone de diez capítulos que siguen la secuencia de Fibonacci y con temas que giran alrededor de una única idea: el Amor en nuestro planeta, y más allá. Versos que se convierten en secuencias, música trenzada con la Poesía. Las voces de este álbum no son de nadie, no se identifican con ninguna persona, pertenecen a la Poesía como ecos de versos que cabalgan en la mente del poeta.',
            'Las canciones se caracterizan por tener un número total de compases de 2105 (1 hora, 10 minutos), canciones que van desde 68 a 130 compases. El arco de este álbum se compone de géneros musicales variados, blues, baladas, a capella, con variedad de ritmos y tempos, y diferentes matices dentro de cada género.',
            'En este álbum, el verso abandona el libro para elevarse a la condición de horizonte infinito donde cada estrofa respira al son de la música y la voz.',
        ],
        reviewTitle: 'Reseña del Álbum',
        reviewMeta: 'Pedro Luis Ibáñez Lérida · 10 de octubre, 2025',
        reviewParagraphs: [
            '"A veces, solo a veces, el roce de lo evanescente toma cuerpo y nos abraza hasta desasirnos de la penuria de lo banal. Ese decir musitado que dibuja en la conciencia la plenitud de lo verdadero; el germen de la levedad que poderoso nos desata de libérrima humanidad. Más aún cuando es motivo de venturoso regreso, de desandar los pasos después de más de veinte años de silencio lírico."',
            '"Y es que la poesía, la verdadera poesía, hace cantar el silencio. Así la concelebra felicísima Belen Juárez, con un universo propio que entorna las puertas y nos convoca a disfrutar del edén que sostiene su palabra celeste. Viene a alcanzararnos para hacernos afortunados con su decir chiquito de pluma de jilguero que aletea en el alma. ¡Ah, que generoso su corazón sembrador de belleza…!"',
            '"«Horizonte de sucesos», palabra poética que se canta, irrumpe con la verticalidad de los «gitanos del mar», que en estado de apnea se adentran en la profundidad insondable del océano. Así el ser de la poeta granadina, con la sencilla esbeltez del nadador de Paestum, reafirmando el latido, su latido con eco telúrico y célico, a la par."',
            '"Os invito a dejaros leer por la claridad y transparencia de esta vivencia musical, que en próximas fechas tendrá su extensión editorial y visual. Belen Juárez nos propone e invita a acercarnos a la poesía con la mano extendida para recorrer en su compañía el laberinto de las emociones con la tea de la palabra encendida en el pentagrama."',
        ],
        reviewLink: 'Leer reseña completa en Facebook',
    },
    fr: {
        title: 'Horizonte de Sucesos',
        introduction: 'Le nouvel album de Belén Juárez (2025). Une traversée sonore de 21 pièces qui explore les limites entre la réalité et le subconscient.',
        selectionPrompt: 'Sélectionnez un titre dans le lecteur.',
        authorNote: 'Note de l’auteure',
        authorParagraphs: [
            'Cet album représente l’aboutissement d’un processus de recherche sonore où le vers se déploie depuis la parole pour devenir les accords d’un atlas d’émotions. Les paroles sont issues de poèmes du livre Horizonte de Sucesos (Huerga & Fierro, 2026).',
            'Le livre se compose de dix chapitres qui suivent la suite de Fibonacci, autour d’une seule idée : l’Amour sur notre planète, et au-delà. Des vers qui deviennent des séquences, une musique tressée avec la Poésie. Les voix de cet album n’appartiennent à personne, elles ne s’identifient à aucune personne ; elles appartiennent à la Poésie, comme des échos de vers qui chevauchent l’esprit du poète.',
            'Les chansons totalisent 2 105 mesures (1 heure et 10 minutes), chacune comptant de 68 à 130 mesures. L’arc de cet album réunit des genres variés, blues, ballades et a cappella, avec une diversité de rythmes, de tempos et de nuances propres à chaque genre.',
            'Dans cet album, le vers quitte le livre pour s’élever à la condition d’un horizon infini, où chaque strophe respire au rythme de la musique et de la voix.',
        ],
        reviewTitle: 'Critique de l’album',
        reviewMeta: 'Pedro Luis Ibáñez Lérida · 10 octobre 2025',
        reviewParagraphs: [
            '« Parfois, seulement parfois, le frôlement de l’évanescent prend corps et nous enlace jusqu’à nous libérer de la misère du banal. Cette parole murmurée qui dessine dans la conscience la plénitude du vrai ; le germe de la légèreté qui, puissant, nous délivre d’une humanité souverainement libre. Plus encore lorsqu’il est le motif d’un heureux retour, d’un chemin repris après plus de vingt ans de silence lyrique. »',
            '« Car la poésie, la vraie poésie, fait chanter le silence. C’est ainsi que Belén Juárez la célèbre, avec un univers propre qui entrouvre les portes et nous invite à jouir de l’Éden que soutient sa parole céleste. Elle vient nous atteindre pour nous rendre heureux par sa petite parole, plume de chardonneret qui bat des ailes dans l’âme. Ah, quel généreux cœur semeur de beauté… ! »',
            '« Horizonte de sucesos, parole poétique qui se chante, surgit avec la verticalité des “gitans de la mer” qui, en apnée, pénètrent la profondeur insondable de l’océan. Ainsi est l’être de la poète grenadine, avec la simple élégance du nageur de Paestum, réaffirmant le battement, son battement à l’écho tellurique et céleste tout à la fois. »',
            '« Je vous invite à vous laisser lire par la clarté et la transparence de cette expérience musicale, qui aura prochainement son prolongement éditorial et visuel. Belén Juárez nous propose et nous invite à approcher la poésie, la main tendue, pour parcourir avec elle le labyrinthe des émotions, la torche de la parole allumée sur la portée. »',
        ],
        reviewLink: 'Lire la critique complète sur Facebook',
    },
};

export const MUSIC_VIDEOS_MESSAGES: Record<Locale, MusicVideosMessages> = {
    es: {
        title: 'Vídeos',
        introduction: 'Piezas audiovisuales donde la música, la palabra y la imagen se encuentran.',
        items: [
            { id: 'ebano-mar', title: 'Ébano Mar', youtubeId: '53OVZR2ryWQ', description: 'La letra de Ébano Mar está compuesta por una combinación de los poemas cuarto, sexto y séptimo del capítulo “Ébano mar” del libro “Horizonte de sucesos”. En “Ébano mar”, la Poesía recorre las profundidades de la emoción humana para mostrar el sutil equilibrio de la existencia. El mar se revela aquí como el agua que nos sostiene sobre el planeta, es el elemento necesario para la vida, pero también actúa como reflejo de ese espacio inexplorado y misterioso de nuestra propia psique sobre el tejido del tiempo.' },
            { id: 'puro-azafran', title: 'Puro azafrán', youtubeId: 'zjIDFsu1L68', description: 'La letra de Puro Azafrán está compuesta a partir del segundo poema del capítulo “Bubo bubo” del libro “Horizonte de sucesos”. En “Puro Azafrán”, la Poesía evoca a ese animal de ojos magnéticos que puebla nuestros bosques en el más puro silencio. El texto lo nombra como “Duque”, en un fiel guiño al “Gran Duque” de Félix Rodríguez de la Fuente. La majestuosidad de esta criatura flota en paralelo a la melancolía de un amor evocado: el deseo de haber compartido la vida con esa persona que solo pudo existir en nuestros sueños y que justifica, en el fondo, su hermosa y solitaria existencia en el bosque.' },
            { id: 'requiem', title: 'Réquiem', youtubeId: 'Af6bEyyaJ8c', description: 'En este caso, la letra de Réquiem está compuesta a partir del tercer poema del capítulo “Bubo bubo” del libro “Horizonte de sucesos”. En “Réquiem”, la poesía se sumerge en las profundidades más recónditas de nuestro silencio, abrazando el deseo de descansar algún día al lado del ser querido tras la partida. Los versos de este tema arropan la soledad de un bosque nocturno concebido como destino final, donde el búho real, —protagonista metafórico de esta historia— habita la foresta en perfecta armonía con la tranquilidad de su entorno. Sosiego, paz y lealtad definen su naturaleza como criatura finita al igual que nosotros. Este video nos revela que, incluso en la muerte, seguimos amando eternamente con el pulso de nuestros últimos deseos.' },
            { id: 'toque-de-campanas', title: 'Toque de Campanas', youtubeId: 'RS0DY9od_tc', description: 'La letra de Toque de Campanas es una adaptación del segundo poema del capítulo “Isla Libertad” del libro “Horizonte de sucesos”. En “Toque de Campanas”, la Poesía nos sumerge en un canto a la Vida; un grito de libertad tejido con emociones tan intensas como frágiles, capaces de romperse en mil pedazos en un instante. Al final del video, se intuye el eco de un destino alternativo: la posibilidad de que esas almas podrían haber sido felices hasta el fin de sus días de no haber subido a aquel avión que las lanzó, al unísono, hacia la libertad y hacia la muerte. Así, la canción y el video se entrelazan para hablarnos de dos planos posibles de la existencia.' },
            { id: 'isla-libertad', title: 'Isla Libertad', youtubeId: 'B6-sAEaPy5w', description: 'Los versos de este video proceden del capítulo “Isla Libertad” del libro “Horizonte de sucesos”. En este video los versos se estructuran de forma diferente al capítulo de donde procede. En el libro la secuencia de Fibonacci es la que define cada uno de los capítulos; sin embargo, esta composición audiovisual “Isla Libertad/Despertar” se concibe como un nuevo poema al mezclar las estrofas de los diferentes poemas del capítulo, generando —de este modo— un mensaje diferente. Al igual que sucede en “Destierro en Cuatro Ángulos” (Devenir, 1999), esta composición define una nueva lectura con una geometría poética diferente. La secuencia de estrofas ordena los versos en un único poema que fluye desde el inicio hasta el final del video, siendo estrofa/poema: 1:1; 2:1; 3:1; 4:3; 5:3; 6:1; 7:4; 8:5; 9;6. Respecto a la música, el pianista y compositor Eduardo Salas Arques comenta que “Despertar” trata de ilustrar el instante en que la vida nos invita a iniciar algo nuevo. Algo que cambia profundamente en nuestro interior sintiendo la necesidad de dejar atrás el pasado para iniciar una nueva etapa. Se trata —pues— de “despertar” de un largo letargo para descubrir una nueva forma de vivir. En definitiva, esta composición audiovisual funde Poesía y Música en una única obra con un nuevo y original mensaje global.' },
            { id: 'nora', title: 'Nora', youtubeId: 'K5-Rqt-3LU4', description: 'La letra de Nora está compuesta a partir del primer poema del capítulo “Ciudad prostitución” del libro “Horizonte de sucesos”. En “Nora”, la poesía rinde homenaje a una mujer solitaria que transita las calles de cualquier ciudad y termina rindiéndose al amor de un hombre que vive otra vida. Una bellísima criatura con derecho a enamorarse y a recorrer las profundidades de sus propias emociones; porque vivir del cuerpo no es prostitución, nos prostituye la propia vida cuando nos pone precio. En esta pieza audiovisual, la Poesía misma se transforma en la piel de Nora.' },
            { id: 'redes-de-acero', title: 'Redes de Acero', youtubeId: 'LMuB9vNl-2w', description: 'La letra de Redes de Acero procede del primer poema del capítulo “Orcinus orca” del libro “Horizonte de sucesos”. En “Redes de acero”, la Poesía se alinea con el amor de dos jóvenes que viven su homosexualidad desde el silencio, en el borde exterior de una sociedad deshumanizada. Al mismo tiempo, el relato de esta historia toma como metáfora viviente a un noble ser de los océanos, históricamente maltratado por la literatura: la orca. Estas magníficas criaturas poseen sus propias leyes de convivencia, a menudo incomprendidas por los humanos. Así, el video denuncia con fuerza ese instinto arrollador de querer destruir todo lo que escapa de la norma, convirtiendo la homosexualidad y la naturaleza de las orcas en dos reflejos de una misma y conmovedora historia.' },
            { id: 'ellos-del-aire', title: 'Ellos del aire', youtubeId: 'FeO8HCMi6jI', description: 'La letra de Ellos del aire es una adaptación del primer poema del capítulo “Ellos del Aire” del libro “Horizonte de sucesos”. En “Ellos del aire”, la Poesía rinde homenaje a esos seres magníficos que son los árboles; guardianes de la supervivencia, nacidos para enraizar la vida en la Tierra. Desde el silencio de sus brazos abiertos al mundo, no solo nos regalan el aire que respiramos, sino que sostienen la red vital de todos los ecosistemas. En este escenario, los versos y la pieza audiovisual se alinean con dos almas que se buscan en el bosque para sobrevivir al amparo de la magia de los libros; páginas que, al igual que las raíces bajo el suelo, actúan como conectores universales del conocimiento, la vida y la naturaleza.' },
            { id: 'lobo', title: 'Lobo', youtubeId: '_8J9RL0lp_8', description: '' },
            { id: 'loba', title: 'Loba', youtubeId: 'ZmaaPb8oPNI', description: 'En este caso se parte del segundo poema del capítulo “Canis lupus” del libro “Horizonte de sucesos”. En “Loba”, la Poesía se entrelaza con el instinto maternal de una loba que protege a sus crías tal y como se observa en la última secuencia frente al cazador. En los versos iniciales tanto de la canción como del poema, la propia Poesía dialoga con el poeta para revelarse como la guardiana de su linaje y de su morada; los cuatro lobeznos se convierten en la metáfora viva de los versos nacidos del poeta.' },
            { id: 'horizonte-de-sucesos', title: 'Horizonte de Sucesos', youtubeId: 'fy61eblw7Nw', description: 'La canción Horizonte de sucesos incluye el tercer poema del capítulo “Horizonte de sucesos”. En la canción, la Poesía establece un monólogo frente al poeta, expresando que “alumbrará estrellas” y que el canto de su voz será un rondel que llegue hasta él. Este escenario musical se sitúa frente al horizonte de sucesos del agujero negro Sagitario A de la Vía Láctea; esta es la frontera donde el espacio y el tiempo transcurren de forma diferente respecto a nuestro lejano planeta. Un tejido espaciotemporal que se curva y deforma de acuerdo con la Teoría Gravitacional de Albert Einstein. La Poesía se personifica como silueta de esa mujer que mira al infinito. El plano visual del video combina imágenes de los telescopios Hubble y James Webb —recreadas en movimiento a través de inteligencia artificial—.' },
        ],
    },
    fr: {
        title: 'Vidéos',
        introduction: 'Des pièces audiovisuelles où se rencontrent musique, parole et image.',
        items: [
            { id: 'ebano-mar', title: 'Ébano Mar', youtubeId: '53OVZR2ryWQ', description: 'Les paroles d’Ébano Mar associent les quatrième, sixième et septième poèmes du chapitre « Ébano mar » du livre « Horizonte de sucesos ». Dans « Ébano mar », la Poésie parcourt les profondeurs de l’émotion humaine afin de révéler le subtil équilibre de l’existence. La mer apparaît ici comme l’eau qui nous soutient sur la planète : l’élément nécessaire à la vie, mais aussi le reflet de cet espace inexploré et mystérieux de notre propre psyché, sur le tissu du temps.' },
            { id: 'puro-azafran', title: 'Puro azafrán', youtubeId: 'zjIDFsu1L68', description: 'Les paroles de Puro Azafrán sont composées à partir du deuxième poème du chapitre « Bubo bubo » du livre « Horizonte de sucesos ». Dans « Puro Azafrán », la Poésie évoque cet animal aux yeux magnétiques qui peuple nos forêts dans le plus pur silence. Le texte le nomme « Duc », fidèle clin d’œil au « Grand-Duc » de Félix Rodríguez de la Fuente. La majesté de cette créature rejoint la mélancolie d’un amour évoqué : le désir d’avoir partagé la vie avec cette personne qui ne pouvait exister que dans nos rêves et qui justifie, au fond, sa belle et solitaire existence dans la forêt.' },
            { id: 'requiem', title: 'Réquiem', youtubeId: 'Af6bEyyaJ8c', description: 'Ici, les paroles de Réquiem sont composées à partir du troisième poème du chapitre « Bubo bubo » du livre « Horizonte de sucesos ». Dans « Réquiem », la poésie plonge dans les profondeurs les plus secrètes de notre silence, embrassant le désir de reposer un jour auprès de l’être aimé après son départ. Les vers de ce morceau enveloppent la solitude d’une forêt nocturne conçue comme destination finale, où le grand-duc, protagoniste métaphorique de cette histoire, habite la forêt en parfaite harmonie avec la tranquillité de son environnement. Sérénité, paix et loyauté définissent sa nature de créature finie, comme nous. Cette vidéo révèle que, même dans la mort, nous continuons d’aimer éternellement au rythme de nos derniers désirs.' },
            { id: 'toque-de-campanas', title: 'Toque de Campanas', youtubeId: 'RS0DY9od_tc', description: 'Les paroles de Toque de Campanas sont une adaptation du deuxième poème du chapitre « Isla Libertad » du livre « Horizonte de sucesos ». Dans « Toque de Campanas », la Poésie nous plonge dans un chant à la Vie, un cri de liberté tissé d’émotions aussi intenses que fragiles, capables de se briser en mille morceaux en un instant. À la fin de la vidéo se devine l’écho d’un destin alternatif : la possibilité que ces âmes auraient pu être heureuses jusqu’à la fin de leurs jours si elles n’étaient pas montées dans cet avion qui les a lancées, d’un même mouvement, vers la liberté et vers la mort. Ainsi, la chanson et la vidéo s’entrelacent pour nous parler de deux plans possibles de l’existence.' },
            { id: 'isla-libertad', title: 'Isla Libertad', youtubeId: 'B6-sAEaPy5w', description: 'Les vers de cette vidéo proviennent du chapitre « Isla Libertad » du livre « Horizonte de sucesos ». Ils y sont organisés différemment du chapitre dont ils sont issus. Dans le livre, la suite de Fibonacci définit chacun des chapitres ; toutefois, cette composition audiovisuelle, « Isla Libertad/Despertar », est conçue comme un nouveau poème en mêlant les strophes des différents poèmes du chapitre et en produisant ainsi un message différent. Comme dans « Destierro en Cuatro Ángulos » (Devenir, 1999), cette composition propose une nouvelle lecture, avec une géométrie poétique différente. La suite des strophes ordonne les vers en un unique poème qui s’écoule du début à la fin de la vidéo, selon le rapport strophe/poème : 1:1 ; 2:1 ; 3:1 ; 4:3 ; 5:3 ; 6:1 ; 7:4 ; 8:5 ; 9:6. À propos de la musique, le pianiste et compositeur Eduardo Salas Arques explique que « Despertar » cherche à illustrer l’instant où la vie nous invite à commencer quelque chose de nouveau, un changement profond qui fait naître le besoin de laisser le passé derrière soi pour ouvrir une nouvelle étape. Il s’agit donc de « s’éveiller » d’une longue léthargie afin de découvrir une autre manière de vivre. En définitive, cette composition audiovisuelle fond Poésie et Musique en une œuvre unique au message global nouveau et original.' },
            { id: 'nora', title: 'Nora', youtubeId: 'K5-Rqt-3LU4', description: 'Les paroles de Nora sont composées à partir du premier poème du chapitre « Ciudad prostitución » du livre « Horizonte de sucesos ». Dans « Nora », la poésie rend hommage à une femme solitaire qui traverse les rues de n’importe quelle ville et finit par céder à l’amour d’un homme menant une autre vie. Une magnifique créature qui a le droit de tomber amoureuse et de parcourir les profondeurs de ses propres émotions ; car vivre de son corps n’est pas la prostitution, c’est la vie elle-même qui nous prostitue lorsqu’elle nous donne un prix. Dans cette pièce audiovisuelle, la Poésie elle-même se transforme en la peau de Nora.' },
            { id: 'redes-de-acero', title: 'Redes de Acero', youtubeId: 'LMuB9vNl-2w', description: 'Les paroles de Redes de Acero proviennent du premier poème du chapitre « Orcinus orca » du livre « Horizonte de sucesos ». Dans « Redes de acero », la Poésie s’unit à l’amour de deux jeunes qui vivent leur homosexualité dans le silence, aux marges d’une société déshumanisée. Dans le même temps, cette histoire prend pour métaphore vivante un noble être des océans, historiquement maltraité par la littérature : l’orque. Ces magnifiques créatures ont leurs propres règles de vie commune, souvent incomprises des humains. La vidéo dénonce ainsi avec force cet instinct impétueux qui veut détruire tout ce qui échappe à la norme, faisant de l’homosexualité et de la nature des orques les deux reflets d’une même histoire émouvante.' },
            { id: 'ellos-del-aire', title: 'Ellos del aire', youtubeId: 'FeO8HCMi6jI', description: 'Les paroles d’Ellos del aire sont une adaptation du premier poème du chapitre « Ellos del Aire » du livre « Horizonte de sucesos ». Dans « Ellos del aire », la Poésie rend hommage aux arbres, ces êtres magnifiques, gardiens de la survie, nés pour enraciner la vie sur Terre. Par le silence de leurs bras ouverts au monde, ils ne nous offrent pas seulement l’air que nous respirons : ils soutiennent aussi le réseau vital de tous les écosystèmes. Dans ce paysage, les vers et la pièce audiovisuelle rejoignent deux âmes qui se cherchent dans la forêt pour survivre sous la protection de la magie des livres ; des pages qui, telles les racines sous le sol, deviennent des liens universels de la connaissance, de la vie et de la nature.' },
            { id: 'lobo', title: 'Lobo', youtubeId: '_8J9RL0lp_8', description: '' },
            { id: 'loba', title: 'Loba', youtubeId: 'ZmaaPb8oPNI', description: 'Cette pièce part du deuxième poème du chapitre « Canis lupus » du livre « Horizonte de sucesos ». Dans « Loba », la Poésie s’entrelace avec l’instinct maternel d’une louve qui protège ses petits, comme on le voit dans la dernière séquence face au chasseur. Dans les premiers vers de la chanson comme du poème, la Poésie elle-même dialogue avec le poète pour se révéler gardienne de sa lignée et de sa demeure ; les quatre louveteaux deviennent la métaphore vivante des vers nés du poète.' },
            { id: 'horizonte-de-sucesos', title: 'Horizonte de Sucesos', youtubeId: 'fy61eblw7Nw', description: 'La chanson Horizonte de sucesos reprend le troisième poème du chapitre « Horizonte de sucesos ». Dans la chanson, la Poésie établit un monologue face au poète, affirmant qu’elle « illuminera les étoiles » et que le chant de sa voix sera un rondeau qui viendra jusqu’à lui. Ce paysage musical se situe devant l’horizon des événements du trou noir Sagittarius A de la Voie lactée : cette frontière où l’espace et le temps s’écoulent différemment de notre lointaine planète. Un tissu espace-temps qui se courbe et se déforme selon la théorie gravitationnelle d’Albert Einstein. La Poésie se personnifie dans la silhouette de cette femme qui regarde l’infini. Le plan visuel de la vidéo combine des images des télescopes Hubble et James Webb, recréées en mouvement grâce à l’intelligence artificielle.' },
        ],
    },
};
