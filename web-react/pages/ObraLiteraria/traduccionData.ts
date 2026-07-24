export type TranslationSection = {
    id: string;
    title: string;
    sourceLanguage: string;
    targetLanguage: string;
    sourceText: string;
    targetText: string;
};

export type TranslationWork = {
    slug: string;
    title: string;
    publication: string;
    year: string;
    authorsLine: string;
    roleLine: string;
    coverUrl: string;
    pdfUrl: string;
    description: string;
    note?: string;
    sections: TranslationSection[];
    supplementaryNotes?: string[];
    analysis?: string;
};

export const TRANSLATION_WORKS: TranslationWork[] = [
    {
        slug: 'las-noches-azules-del-alma',
        title: 'Las noches azules del alma',
        publication: 'Fundación Euroárabe. Granada',
        year: '2001',
        authorsLine: 'Rachid Moumni, Enrique Villagrasa y Belén Juárez',
        roleLine: 'Poemas de Enrique Villagrasa. Traducción de Belén Juárez.',
        coverUrl: '/images/traduccion/las-noches-azules-del-alma-portada.jpeg',
        pdfUrl: '/downloads/traduccion/las-noches-azules-del-alma.pdf',
        description: 'Libro bilingüe en el que Belén Juárez participa en la traducción al francés de poemas de Enrique Villagrasa. La página de detalle presenta una selección de textos enfrentados para leer original y versión traducida de manera paralela.',
        note: 'Se conserva el carácter bilingüe y el tono contemplativo del libro, mostrando los poemas en español y francés cara a cara.',
        sections: [
            {
                id: 'poema-i',
                title: 'Poema I',
                sourceLanguage: 'Español',
                targetLanguage: 'Francés',
                sourceText: `**El ancho azul de la tarde**
y su rostro fosfénico precipitan
los ecos plurales de la lejanía. Después
un nítido fuego de pétalos,
desvelan memoria.

Dejó la mar ingrávida
caer su última lágrima.

**Persigue el poeta en la página,**
de la palabra su cerúleo don.
Pero alzan su vuelo las sílabas
de los álamos en la lejanía.
Instante que contemplan
sus infantiles dedos.

**Tarde de lluvia en el lento mar,**
donde anida un susurro de crepúsculo.

Ahí florecen los silencios
y una lluvia acaricia distancias.

Pero en la lejanía y en la memoria
las manos desafían al tiempo,
buscan la cicatriz del aire.

**El día amanece vestido de gris,**
es una plomiza mañana de primeros de mes,
y gritas su nombre en tu habitación vacía:

La página es tu voz
y la palabra el silencio ido.

Cómo palpita el momento,
qué melancolía de gestos
en un huir de arrasadas lágrimas,
para ocultar el instante
y los tañidos del cristal.
Pero, de nuevo, las estrellas te arropan
en su belleza, ¡suicídate, es el momento!
La clepsidra derrama su gota última
en el alba repujada.`,
                targetText: `**Le large bleu du soir**
et son visage phosphène précipitent
les échos pluriels du lointain. Après
un feu clair de pétales,
dévoilent mémoire.

La mer légère laissa
tomber sa dernière larme.

**Poursuit le poète dans la page,**
le céruléen don de la parole.
Mais prennent leur vol dans le lointain
les syllabes des peupliers.
Instant que contemplent
ses doigts infantiles.

**Dans la lente mer, le soir en pluie,**
où fait son nid un murmure de crépuscule.

Là les silences fleurissent
et une pluie caresse les distances.

Mais dans le lointain et dans la mémoire
les mains défient le temps,
cherchent la cicatrice de l'air.

**Le jour se lève tout habillé en gris,**
c'est une matinée plombée du commencement du mois,
et tu cries son nom dans ta chambre vide:

La page est ta voix
et la parole le silence parti.

Comment palpite le moment,
quelle mélancolie de gestes
dans une fuite de larmes dévastées,
pour cacher l'instant
et les tintements du cristal.
Mais, de nouveau, les étoiles t'enveloppent
dans leur beauté, suicide toi! c'est le moment!
La clepsydre fait couler sa dernière goute
dans l'aube repoussée.`,
            },
            {
                id: 'poema-ii',
                title: 'Poema II',
                sourceLanguage: 'Español',
                targetLanguage: 'Francés',
                sourceText: `**Entrada anda el alba**
con su silencio clandestino,
que de voces sin rostro
anda coronado.
Noviembre llora siempre
lágrimas ocres.

Te aferras al jarro vacío
de claridad que huye.
En ti ha germinado
la voz en minúsculas.
Reconoces el guiño,
no las palabras.


**Cuando el poeta sedujo la vida**
y el lenguaje y los gestos
delimitaron la máscara
la pluma dictó su verdad:
la noche es un dédalo perdido.

Tú, que recorres sus calles
ves que no está solo el camino.
Su eco alumbra el día.

Tu sola compañía es la palabra.
La soledad del verso te sustenta.
Ya conoces el secreto y su néctar.`,
                targetText: `**L'aube court avancée**
avec son silence clandestin
que de voix sans figure
se trouve couronné.
Novembre pleure toujours
des larmes ocres.

Tu t'accroches au pot vide
de clarté qui s'en fuit.
En toi a germé
la voix en minuscules.
Tu reconnais le clin d'oeil,
pas les mots.


**Quand le poète séduisit la vie**
et le langage et les grimaces
délimitèrent la masque,
la plume dicta sa vérité:
la nuit est un dédale perdu.

Toi, qui parcours ses rues,
tu vois que le chemin n'est pas seul.
Son écho éclaire le jour.

Ta seule compagnie est la parole.
La solitude du vers te sustente.
Tu connais déjà le secret et son nectar.`,
            },
            {
                id: 'poema-iii',
                title: 'Poema III',
                sourceLanguage: 'Español',
                targetLanguage: 'Francés',
                sourceText: `**Como una estrella de primavera**
en vano buscas a Ariadna.
Un delator guiño, en el laberinto,
te da la certeza. En el dédalo alcohólico
no existe hilo que sirva de guía.

La profunda angustia abraza.
Aceleran pluma y verso los crepúsculos.
Tiembla la página.
Lo sensato será aceptar la sonrisa de la noche,
pero dan escalofríos las ruinas.

Desgrana penosamente largos poemas,
que se aferran a las más sagradas muertes.
(Baudelaire te entenderá).

Hace tiempo dejó de ser una realidad.
Hoy es espejismo de corazón débil.
Las crestas de las olas te esperan silenciosas.

La poesía, siempre adolescente, ofrenda
su desnudo a los sueños del demiurgo.

**El poema quiere**
alumbrar con el verso
lo que el silencio clama.

El tintero habla de su miedo:
la vida se le escapa pluma arriba.

La tristeza empaña los cristales:
sobre la mesa azul
la tarde camina a sus anchas,
revolotea entre libros y muebles.

Entrada anda la noche,
los poemas se tornan clandestinos.
Alguien llora sonetos estériles.

Al poeta el barro de la calle le espera.`,
                targetText: `**Comme une étoile de printemps,**
tu cherches Ariadna en vain.
Un clin d'oeil délateur, dans le labyrinthe,
te donne certitude. Dans le dédale alcoolique
il n'existe pas le fil que serve comme guide.

La profonde angoisse embrasse.
Les crépuscules accélèrent plumes et vers.
Tremble la page.
Le sensé sera accepter le sourire de la nuit,
mais les ruines rendent des frissons.

Elle égrène douloureuse des longs poèmes,
qui s'accrochent aux morts plus sacrées
(Baudelaire va te comprendre).

Il y a fait longtemps qu'elle n'est plus une réalité.
Aujourd'hui c'est un mirage de coeur débile.
Les crêtes des vagues t'attendent silencieuses.

La poésie, toujours adolescente, offre
sa nudité aux rêves du démiurge.

**Le poème veut**
éclairer avec le vers
ce que le silence clame.

L'encrier parle de sa peur:
la vie se lui en va plume en amont.

La tristesse embue les vitres:
sur la table bleue
la soirée marche à son aise,
voltige entre les livres et les meubles.

La nuit court avancée,
les poèmes deviennent clandestins.
Quelqu'un pleure des sonnets stériles.

Au poète, la boue de la rue l'attend.`,
            },
            {
                id: 'poema-iv',
                title: 'Poema IV',
                sourceLanguage: 'Español',
                targetLanguage: 'Francés',
                sourceText: `**Embriagadora como el vino su sonrisa**
y dichosa entre todas la mirada.
Mujer es el gesto en la profundidad primaveral.
¡Qué hermosa eres lágrima de mar!
La belleza es destino.

Muda queda la rosa ante ella
cuando inunda la estancia desnuda.
(Puro reflejo prohibido).

Sus labios cual versos apetecidos
trasnochan el sentir.
Y su fragancia toda
acaricia el Mediterráneo.
El corazón desea en silencio,
queda la distancia.

El río siente nostalgia de su lecho
y la campana de su tañido:
así incrementa el alma su fervor.

**Buscas la llama del espíritu,**
pero el tiempo corre.
Estrecho es el paso del reloj.

La palabra perdura,
trasciende al mármol y al ciprés.

El verso por encima de la sombra,
cual lechuza de piedra.
Olvido y silencio. Lo no escrito.
Imágenes selladas te envuelven.

Tu razón es soledad,
es presencia. Es voz.`,
                targetText: `**Enivrant comme le vin, son sourire**
et heureux entre toutes, le regard.
Femme est le geste,
dans la profondeur printanière.
Que tu es belle, larme de mer!
La beauté devient destin.
Muette resta la rose devant-elle
quand elle inonde l'estance toute nue.
(Pur reflet interdit).

Ses lèvres, tel vers désirables
découchent le sentir.
Et toute sa fragance
carèse la Méditerranée.
Le coeur désire en silence,
reste la distance.

La rivière sent nostalgie de sa couche
et la cloche de son tintement:
ainsi, grandit l'âme sa ferveur.

**Tu cherches la flamme de l'esprit,**
mais le temps s'en va.
Étroit est le pas de l'horloge.

La parole demeure,
trascende le marbre et le cyprès.

Le vers au dessus de l'ombre,
comme chouette en pierre.
Oubli et silence. Le jamais ecrit.
Images scellées t'enveloppent.

Ta raison est solitude,
est présence. Est voix.`,
            },
        ],
    },
    {
        slug: 'angel-ganivet',
        title: 'Poemas de Ángel Ganivet',
        publication: 'Ficciones, Revista de Letras / Universidad de Granada',
        year: '1997',
        authorsLine: 'Poemas recogidos en el libro SOBRE GANIVET, de Antonio Gallego Morell.',
        roleLine: 'Traducción y análisis de Belén Juárez.',
        coverUrl: '/images/traduccion/angel-ganivet-portada.jpeg',
        pdfUrl: '/downloads/traduccion/angel-ganivet.pdf',
        description: 'Selección de poemas de Ángel Ganivet traducidos por Belén Juárez, acompañados por un análisis crítico posterior. La lectura se presenta en columnas paralelas para confrontar original y traducción.',
        sections: [
            {
                id: 'pensamientos-melancolicos-y-salvajes',
                title: 'Pensées mélancoliques et sauvages',
                sourceLanguage: 'Francés',
                targetLanguage: 'Español',
                sourceText: `I
Oh mon Dieu! que je sens ma bouche amère
il me semble qu'on m'a donné un poison
caché dans quelque souffle de passion
très subtil et que j'ai aspiré dans l'air! (1)

II
Je suis blessé, mais où? je ne sais point;
partout où touche sa main de fine tournure
je resens la douleur de ma blessure;
il y a des mains qui blessent, en caressant. (2)

III
Je m'accuse devant toi très humblement
d'un mal que je t'ai fait; j'étais dormi;
et je t'ai vue comme Eve au Paradis
et je t'ai mordue toute et t'ai fait du sang! (3)

IV
Ce n'est pas toujours bien de trop nous éprouver
quelques minutes au feu, un seul instant dans l'eau
font de la barre de fer l'épée de Toledo;
je n'ai jamais compris la joie de tourmenter. (4)

V
J'ai connu une femme étrange, de bonté si cruelle
qu'elle aimait délivrer de leur cage les oiseaux,
mais que avec quelques coups de ciseaux
avant de les lâcher elle leur coupait les ailes. (5)`,
                targetText: `I
¡Dios mío! siento mi boca amarga
parece que me dieron un veneno
escondido en algún hálito de pasión
muy sutil y que he aspirado del aire.

II
Estoy malherido, pero ¿dónde? no sé el lugar;
por donde quiera que mi mano toca de fina semblanza
presiento el dolor de mi herida;
hay manos que hieren, acariciando.

III
Me acuso frente a ti humildemente
del mal que te he hecho; estaba dormido;
¡y te vi como Eva en el Paraíso
y te mordí entera y te hice sangre!

IV
No está bien probarnos demasiado
algunos minutos al fuego, un solo instante en el agua
hacen de la barra de hierro la espada de Toledo;
nunca pude comprender el júbilo de atormentar.

V
Conocí mujer extraña, de bondad tan cruel
que gustaba liberar de sus jaulas a los pájaros,
pero que con lances de tijera
antes de dejarlos volar les cortaba las alas.`,
            },
        ],
        supplementaryNotes: [
            '(1): Pub. en Boletín Centro Artístico, cit. y Ed. Rosal cit.; (2): Pub. en Boletín cit. (4 abril, 1896)',
            '(3): Pub. en Boletín cit. (1896); (4): Pub. en Boletín cit (30 abril, 1896); (5): Pub. en Boletín cit. y Ed. Rosal cit. (30 abril, 1896).',
            '(A): Traducción del significado completo del poema',
        ],
        analysis: `Podemos pensar en Ángel Ganivet como el poeta de la pluma herida, salta a la vista su fuerza de sentimientos que por una razón u otra llegó a consumirlo en el más profundo de su dolor. Sinceridad total en sus textos, uno de los más tristes de este joven cónsul en Helsingfors y excéntrico escritor de la Generación del 98; es, sin embargo, su amor al sufrimiento lo que le hace evidente, ¿quién puede saber la verdad de su mente? más podría pensarse en la búsqueda de un culpable para sus escritos, posiblemente una, dos o más mujeres; es fácil culpar sin previsión y pienso tras un estudio de sus poemas que existe un misterio innato entre sus dedos, un elocuente problema dentro de su existencia y que dio cauce a través de (entre otros) al “mal de amores”. No es fácil la conjunción y el equilibrio entre Finlandia y la Ciudad de la Alhambra y más para quienes la sensibilidad les inunda el espíritu; poeta genial, no cabe duda, pero que quizás no supo resolver con soltura la época que le tocó en suerte.

*Un día supe de una rosa que creció en el desierto, se hizo de sal y nadie recordó su aroma del pasado; sólo se admiró su belleza en el presente, su dureza frágil de cristal, su imagen pulcra; pero ¿quién pudo hacer eterno su color, su olor, su viveza del pasado?* Hablamos de su interés por los temas de una España sin fronteras y que no pudo resolver en vida, vida corta porque así lo quiso él y quien sabe si alguien más, pero que en resumen nos muestran toda su intensidad y preocupación por que todo fuera de otra forma menos arcaica para él y su España.

Pienso en Ángel Ganivet como el poeta de los soportales, aquel que incluso desde su tumba ubicó su casa cerrada bajo arcos en sombra una ciudad donde todo lo bello carece de nombre material. Pienso en Ángel Ganivet como el poeta de la Generación de Granada, en 1898.`,
    },
];

export const getTranslationWorkBySlug = (slug: string) =>
    TRANSLATION_WORKS.find((work) => work.slug === slug);

