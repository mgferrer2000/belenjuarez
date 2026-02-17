import { Book, Collaboration, ArtPiece, Track, SocialLink, IllustratedBook, ArtArticle, BookReview, Plaquette, ShortStory, LiteraryCriticism } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Destierro en cuatro ángulos',
    year: '1999',
    description: `Primer libro publicado en 1999, en la Editorial Devenir. El libro está dividido en cuatro capítulos Tierra, Agua, Aire y Fuego donde se repiten los títulos de los poemas. De tal forma que se puede leer de forma lineal (por capítulos) o tomando los poemas de igual título de cada capítulo convirtiéndose en un único poema deslizándose por los cuatro elementos. En palabras de Antonio Enrique (Turia, nº 53) «El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran).» La temática gira en torno al tiempo donde se sostiene la vida, y todas las miserias que en ella acontecen: El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes.`,
    coverUrl: '/images/libros/destierro_en_cuatro_angulos.jpg',
    purchaseUrl: '#',
    downloads: [
      { label: 'Descargar Libro', url: '/downloads/destierro_en_cuatro_angulos.pdf' }
    ]
  },
  {
    id: '2',
    title: 'La Noche de Ayer',
    year: '2001',
    description: `La Noche de Ayer, segundo libro de Belén, presenta una estructura dividida en tres tiempos con diez poemas cada uno. La temática del texto alude a un Pasado (el de cualquier persona) entretejido en un Presente donde los versos llegan con tal fuerza que se podría confundir con un caos lingüístico. No es así. El equilibrio lingüístico es. Existen recuerdos que se mezclan en el plano del Presente como imágenes superpuestas de una misma realidad pasada. El concepto de Espacio/Tiempo que entendemos en el mundo en que vivimos, son variables no constantes en otras dimensiones universales. De ahí que este poemario sea, tal vez, tan críptico; procede del subconsciente y de la memoria del poeta. De esa memoria donde unos niños fueron obligados a caminar por sendas diferentes.`,
    coverUrl: '/images/libros/la_noche_de_ayer.jpg',
    purchaseUrl: '#',
    downloads: [
      { label: 'Prólogo', url: '/downloads/Prologo_de_Antonio_Enrique-La_noche_de _ayer.pdf' },
      { label: 'Selección de poemas', url: '/downloads/Seleccion_poemas-la_noche_de_ayer.pdf' }
    ]
  },
  {
    id: '3',
    title: 'Horizonte de Sucesos',
    year: '2026  (pendiente de publicar por Huerga & Fierro)',
    description: `Tras una larga pausa para centrarse en su carrera profesional, Belén ha retomado la poesía con su nuevo libro "Horizonte de Sucesos".`,
    coverUrl: '/images/libros/horizonte_de_sucesos.png',
    purchaseUrl: '#'
  }
];



export const COLLABORATIONS: Collaboration[] = [
  {
    id: '1',
    publication: 'ACTA ENCUENTRO MUJERES POETAS',
    title: 'POÉTICA',
    type: 'Antología',
    date: '2005',
    description: 'Participación en el encuentro anual de mujeres poetas.',
    coverUrl: '/images/antologias/acta_mujeres_poetas.jpg',
    fullText: `Diversidad de voces y formas
Actas del VIII Encuentro de mujeres poetas
En memoria de Ernestina de Champourcin

**POÉTICA**
"Ella me permite hablar hoy..."

BELÉN JUÁREZ
pág 120 VII Encuentro Mujeres Poetas

...Hablar de Poesía, cuando ella misma se expresa en los versos que nos susurra... Cierto es que no es fácil, pero si algo tuviera que decir es que me encuentro a su servicio desde hace muchos años y que sólo escribo lo que me dicta. Y en este sentido hablar de una poética personal sería como mirarse en un espejo mientras nos encontramos en el acto de la creación, o menor dicho de la “escucha”. Soy partidaria de la idea de que los poetas únicamente somos atentos espectadores de una escena que -a veces- se representa en el teatro de nuestras vidas. Todas las personas somos portadoras de poesía, pero únicamente unos pocos pueden interpretarla. Muchas veces hemos dicho que sólo en ciertos momentos somos capaces de escribir poesía, muchos son los autores que han hablado de esto, y es cierto, pues no siempre Ella nos habla. En Ella está la decisión de presentarse ante nosotros y decirnos qué debemos escribir; el poeta únicamente pone su pluma, su estilo personal, su forma de entenderla, su manera de verla y traerla a nuestra dimensión. La Poesía es Absoluta, es Una, sin más... Algo o alguien que habita otra dimensión diferente a la nuestra y que aparece entre nosotros a través de la sensibilidad de los que habitamos aquí, pues Ella forma parte de ese Universo tan dispar y a la vez tan desconocido para nosotros... Somos incapaces de comprender que la Realidad no es únicamente la que vivimos en el espacio/tiempo que conocemos. En ello estoy, no trato de comprender lo que es incomprensible, soy consciente de mi incapacidad de capturar el sentido de algo que está desprovisto de lógica y tiempo.

Solamente me veo capaz de soltarme de mi espacio y de mi tiempo en los sueños, y por eso algunos autores me han nombrado como -la poeta que atrapa la otra realidad desde el subconsciente-. ¿El subconsciente? Tal vez..., allí sí puedo vivir otra realidad sin preocuparme de mis horas o de mis movimientos, allí sí puedo intuirla. La Poesía nos hace humanos. Ella nos recuerda que tenemos la capacidad de la intuición, así pues, podemos olfatear sus aromas universales. Ciertamente he publicado poco, pero he escrito mucho desde la edad de 9 años, hoy me bañan ya cuarenta guitarras en mi tiempo... La primera vez hablé de la Tridimensionalidad de la Poesía allá en 1999 cuando me lancé a publicar un primer libro, y después vino La Noche de Ayer, un libro que Antonio Enrique describió en el prólogo como críptico, imposible de penetrar desde fuera. Cierto es, la forma mía de poetizar es dejarme fluir, descender o ascender desde la memoria, desde esa otra dimensión libre y total que nos invade cuando no poseemos el control de la conciencia. Sólo allí soy poeta, y ser poeta no me hace poseedora de nada. A Ella, a la Poesía no la posee nadie, por eso jamás hablo de -mi poesía-, pues mía no es, en todo caso yo soy -su poeta- otra guerrera más de este planeta tan puntual como pequeño. Aquel libro así lo demostró, trenzas de un tiempo donde el ayer sobrepasaba el presente. Y sigo escribiendo su nebulosa, sensaciones que a veces se me pliegan como dos universos paralelos intentando entrar en mí. He escrito teatro aún sin publicar, he escrito la memoria de los hombres, y recientemente he escrito "El Universo de las Luces". Jamás tuve prisa por publicar, sencillamente sucederá cuando tenga que suceder. En el Universo de la Luces, lo único interesante para mí es que sus versos han tenido la bondad de elegirme para expresar tan honda emoción vivida por un ser desde la otra estela de la realidad y una mujer que habita en cualquier lugar de este tiempo.... Agradezco, pues a la Poesía el querer que sea poeta, el dejarme escribir lo que ella me dicta, los versos de su distancia, de su amor y de su casa.

**POEMA**

Del libro inédito _El Universo de las luces_
VIII, pág 153

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
    images: [
      '/images/antologias/orion_3.png',
      '/images/antologias/personajes_3.png'
    ]
  },
  {
    id: '2',
    publication: 'Revista Alhucema 2-3',
    title: 'Sobra el Destino (Aire y Fuego)',
    type: 'Revista',
    date: '1999',
    description: 'Poemas "Sobra el Destino" en la Revista Alhucema 2-3.',
    coverUrl: '/images/antologias/alhucema_2_3.jpg',
    fullText: `Del libro _Destierro en cuatro ángulos_, pág 21

**SOBRA EL DESTINO**
***En Aire***

Hoy son los celos,
mañana el desatino inconsciente de una verdad que arranca
la mentira al otro lado de una puerta.

Hoy serán los celos a un destino
que abrasa en los años que no vengan
porque aires serán los mimos
de la razón acostumbrada.

Deseo por soñar alientos en la muerte
Que es parte de un vacío,
calmar Passacaglias y Fugas del Barroco,
y dormir, dormir siempre
en el recuerdo del destino imperturbable.



**SOBRA EL DESTINO**
***En Fuego***

No, a inclinarse a la sobriedad de los hechos, en
coronas de la noche que
advierte semblanzas en diferentes bondades.

Un Emperador que roza el borde de luces,
un destino apacible, frío en su ventura
por el cuerpo impuesto de ardientes
por las sombras de un manto apresado.

Y el olvido en el presente
que trae a la danza
el porvenir de los presentes,
los motivos de pensar en apariencia y
un azar, que se mezcla en alegrías.

Dentro un destino, apresa,
consume, 
devora.`
  },
  {
    id: '3',
    publication: 'Revista Alhucema 5',
    title: 'Poemas Inéditos',
    type: 'Revista',
    date: '2000',
    description: 'Poemas inéditos "París uno" en la Revista Alhucema 5.',
    coverUrl: '/images/antologias/alhucema_5.jpg',
    fullText: `Alhucema, nº5, pág 38

**De su libro inédito:** ***Tierra de mujer***

Venir y provocar el rostro que 
promete por las selvas de un dios, 
llegar a la constancia de seguir amando, 
amor, amor y amar, 
y quererse en la sombra de un cuerpo hermoso 
que estrecha en su cintura el verbo del agua.
 
Y siguiendo en la casa blanca del mismo elemento, 
me inquieta la hora antigua en este cuenco 
que a veces sin vida viene a la duda 
de ser vana mujer, muda en su palabra.

[[IMG:R:0]]
Pienso, pienso en las alquimias de esta alcoba, 
invento amargo de la advertencia sin retorno, 
pienso, pienso y averiguo.
 
Llegar sin amar a veces sacude el alma, 
a veces el cansancio, a veces un triunfo débil 
y nunca dormir el hambre.
 
Y quiero de mi retorno al cuerpo, 
versar mi nombre, 
subir del amor a la curva, 
imitar unos ojos, 
sudar en la cama de la obediencia, 
olvidando su rostro caído tras la noche.
`,
    images: [
      '/images/antologias/Alhucema5_ilustracion.jpg'
    ]
  },
  {
    id: '4',
    publication: 'Revista Ánfora Nova',
    title: 'Poemas: La Noche de Ayer',
    type: 'Revista',
    date: '1999',
    description: 'Selección de poemas de "La Noche de Ayer" en Ánfora Nova.',
    coverUrl: '/images/antologias/anfora_nova.jpg',
    imagePosition: 'top',
    fullText: `Del libro La Noche de Ayer
Ánfora Nova, nº39-40. 1999

1.

Los momentos de satisfacción de antaño 
no provocan placer. Rastrear la causa de un instante afable                                                         
merece cuentas en la memoria de los tiempos.

Pienso en toda oportunidad de exigir 
la prontitud de un nacimiento. 
Sublevar este manantial de fuegos
a veces silencia la fuerza, sin embargo 
el pincel que ramea la vida a contraluz y 
enreda circunstancias de vuelos
no piensa en definir los arcos plurales y reales.

	> Y por qué a consecuencia de tu amor 
	> sigue este occidente de palabras…

[[IMG:R:0]]
  Difícil la constancia de un tiempo 
de engaños. Fallecen los juguetes seniles, 
las benditas horas de patios y besos, 
y los jueves de descanso sobre las paredes…
 
	> Piensa, Amor, que la garganta aún procura 
	> los versos de ayer, y esta luz 
	> me iguala a tu recuerdo...
 
A causa del fracaso de un eclipse, 
esta noche joven se adentra en la tierra, 
e insulta a los Idus de Marzo.
 
Vivir de noches improntas 
sacude todo lo bello de un pensamiento izquierdo
y adecúa de argumentos y arcillas
la sabia ofrenda de los dioses laicos. 
 
Tres verbos ceden al vacío su figura,
 y de ninguno se conoce su infinito. 
Y dónde la razón de hacer oblicua 
esta promesa y seguir sin justicia 
a establecer la noche...

	> Incierto el tacto de esta cama 
	> que sujeta un cuerpo sin flores...


2.

Se cambia a menudo la lentitud de olvidar el mar 
por una guerra sin curso, y esta sentencia abundante 
aclama a los inciertos y averigua los azares.

Decir la verdad no es propio de ancianos y 
sin embargo, proclaman augurios, no se oculta. 
Define la larga edad toda la experiencia ganada y aún por ganar, 
y se anticipa a la noche una y otra vez, 
a pesar de haberle negado la cordura.

[[IMG:R:1]]
De todos los ocasos este Mayor sabía y sospechaba, 
desde entonces, imagina ausencias prohibidas, 
anuncia su fortuna desde el tejado, 
y concluye su enseñanza en un silencio.
 
En el tiempo citado, 
el primero de los verbos define su buena intención 
de conmover a los sensatos.

> Amar durante las estrellas es propio de sabios.`,
    images: [
      '/images/antologias/anfora_1.jpg',
      '/images/antologias/anfora_2.jpg'
    ]
  },
  {
    id: '5',
    publication: 'Revista Ánfora Nova 97-98',
    title: 'Las hijas de Dionisios',
    type: 'Revista',
    date: '2014',
    description: 'Poema "Las hijas de Dionisios" en Ánfora Nova / Universos del Vino.',
    coverUrl: '/images/antologias/anfora_97_98.jpg',
    fullText: `Ánfora Nova
Universos del Vino
Antología Internacional
Nº 97-98. 2014.
Pág 102

[[IMG:R:0]]
En el eterno grial de silueta plateada y púrpura, 
las hijas de Dionisos se reparten tus semillas. 
Son las escondidas épocas, 
dueñas del viento que meció el vientre de tus madres, 
vides de perpetuos años, esposas diminutas del sol.
 
Ellas, 
las hijas de Dionisos, ríen y juegan alejadas de la cordura, 
cercadas por las redes del amor, 
se visten de siglos y trasparencias.
 
Ellas, 
las cómplices del tiempo, tus amantes, los eternos años, 
te beben sin cesar...
 
Ellas son las hijas del líquido febril que empapa de locura la razón, 
las que consagran la huella del tiempo 
sobre las sienes del hombre indiferente, 
y pronuncian desde la altiva copa argentada 
que Eva escondía su sexo tras una hoja de vid.
 
  >¿Quién saboreó, pues, la manzana? 
  >¿Acaso nos mintieron?
 
Tu cuerpo se dibuja desde Enotria hasta el infinito, 
como cuenta de sanguíneo río sobre los años del Hombre. 
Mas, se conozco como gozo escarlata,
que reposa bajo la tierra de tus antepasados, 
como imagen del amante que esconde su furor, 
como hedor que alimenta el sueño y la demencia, 
como sonido que desprenden las hijas de Dionisos al nombrarte.
 
Se dilata en tu seno, 
flotando en tus lagos, con sus alas mojadas, 
la historia de dioses y mortales que te bebieron. 
Esculpieron tus viñas con los brazos del sol, 
mintieron y mataron a los elocuentes que 
insistían en maldecir tu nombre. 
Construyeron la Gran Vasija de la suave locura 
donde habitó el Amor y la Poesía, 
con las gotas de tu sudor, 
mientras Ellas, las hijas de Dionisos, 
a las que llaman las eternas horas del Hombre 
siguien sonriendo, bebiéndote, y 
repartiéndose tus semillas.`,
    images: [
      '/images/antologias/anfora_97_98_ilustracion.jpg'
    ]
  },
  {
    id: '6',
    publication: 'Con Voz Propia (María Rosal) - Estudio y Antología Comentada de la poesía escrita por Mujeres (1970-2005). Ed. Renacimiento. Iluminaciones',
    title: 'En Altamira',
    type: 'Antología',
    date: '2006',
    description: 'Poema "En Altamira" en la antología Con Voz Propia.',
    coverUrl: '/images/antologias/con_voz_propia.jpg',
    fullText: `

**EN ALTAMIRA**
_Destierro en cuatro ángulos_. 1999 pág 159

[[IMG:R:0]]
El primero de sus quehaceres, 
 
buscar similitud a un cuerpo ya caliente, 
que pisa tierra, que bebe, que respira.
 
Contener el fuego, averiguar el Sol, 
cambiar los ídolos por piedras, 
y hacerse piedra que resista la destrucción.
 
No viene la mujer a sus espaldas 
oculta razones a la vuelta de los siglos, 
y fuego será su consentimiento, 
 
>> su cueva deseada
>> su quema caliente,
>> su amor por hacer.
 
Fue en Altamira, pero nunca existió el fuego.`,
    images: [
      '/images/antologias/ALTAMIRA.jpg'
    ]
  },
  {
    id: '7',
    publication: 'El Oro Liquido. El aceite de oliva en la cultura. Ed. de José Antonio Santano',
    title: 'Hombre Olivo',
    type: 'Antología',
    date: '2008',
    description: 'Poema "Hombre Olivo" en la antología El Oro Líquido.',
    coverUrl: '/images/antologias/el_oro_liquido_cover.jpg',
    imagePosition: 'center 20%',
    fullText: `



Mar que asienta las raíces del árbol vital,
conflicto de años que se beben bajo la hierba,
alta estirpe del más silencioso de mis árboles.
>>> Tú …
Tú,
cansado vegetal de la vida oleosa,
gota de sigilo, anfibio de charca verde
me vences, a pesar de tus olivas amargas,
arenas de un sol chispeante asesino,
caliente amor de las noches braceadoras,
me rindo al brote de tus siglos,
me rindo, cual jugada vencida de laureles.

[[IMG:R:0]]
Tú,
un cuerpo desgastado de incertidumbre,
tres patas de un piano natural,
dedos de amor, verde oliva
que alzan al monte la música del viento,
que atrapan la decadencia salvaje de los años.
 
Y más olivos de versos,
y más voces guardando tu mundo,
más inercia de sueños en la noche,
oculto sexo del hombre invertebrado.
 
Mientes, cual sol atrapado entre tus ramas,
a pesar de la molienda de tus oros,
conocen tus hermanos que cumplieron condena
la paz de tu nombre, la guerra mojada,
la abundancia de tus infiernos,
el origen de tu casa

De ti me unto,
pez de la ofrenda pagana,
pacto de la vida caimán
árbol de la fúlgida ensenada,
bahía de los bienes enraizados
sobre la tierra hembra pedregosa.

Tú,
hombre olivo de mis aplausos ...`,
    images: [
      '/images/antologias/hombre_olivo_ilustracion.jpg'
    ],
    purchaseUrl: '#'
  },
  {
    id: '8',
    publication: 'Proyecto Encuentro de Letras Celestes',
    title: 'HOMBRE OLIVO',
    type: 'Antología',
    date: '2025',
    description: 'Edición de Diego Castillo Barco y Pedro Luis Ibáñez Lérida. La Puebla de los Infantes. Sevilla.',
    coverUrl: '/images/antologias/encuentro_letras_celestes_cover.jpg',
    imagePosition: 'center 90%',
    fullText: `HOMBRE OLIVO
Proyecto Encuentro de Letras Celestes
Edición de Diego Castillo Barco y Pedro Luis Ibáñez Lérida
La Puebla de los Infantes. Sevilla. 2025

[[IMG:R:0]]
Cansado vegetal de la vida oleosa,
gota de sigilo, anfibio de charca verde,
me vences, con olivas tan amargas,
como arenas de un sol chispeante, indiferente,
como ardiente amor de mil noches de galernas.
 
Me rindo al brote de tus siglos,
me rindo cual jugada vencida de laureles,
como cuerpo desgastado de incertidumbre,
con dedos de amor verdemar,
que alzan al monte la música del viento,
que atrapan el ocaso salvaje de los años.
 
Y más olivos de versos, más voces guardando tu mundo,
más inercia de sueños en la noche,
oculto sexo del hombre invertebrado.
 
Mientes, cual duende atrapado entre tus ramas,
a pesar de la molienda de tus oros,
conocen tus hermanos que cumplieron la vida,
la paz de tu nombre _paloma_, la guerra mojada,
la abundancia de tus avernos, el origen de tu casa antigua.
 
De ti me unto como hembra pedregosa,
pues eres pez de la ofrenda pagana,
pacto del verso caimán,
bahía de la fúlgida ensenada,
árbol de los años enraizados en mis sienes.`,
    images: [
      '/images/antologias/hombreolivo2.jpg'
    ],
    purchaseUrl: '#'
  },
  {
    id: '9',
    publication: 'EntreRíos. Revista de Arte y Letras',
    title: 'Septiembre entre azules',
    type: 'Revista',
    date: '2005',
    description: 'Nº 0. 2005',
    coverUrl: '/images/antologias/entrerrios.jpeg',
    imagePosition: 'top',
    fullText: `SOBRE este _Azul_, 
la verticalidad de una febril respiración 
festejando un acantilado, 
antifaz del eco, violentamente universal.

Al pie..., el mar entre tus dedos 
asombrados de tanta libertad por estrenar, 
siendo el decálogo de tu imagen 
el silencio que irrumpe entre tus ruidos, 
allá... en lo más alto de tu cuerpo.

[[IMG:R:0]]Procedes de un mundo cual susurro de las aves 
cayendo sobre la estirpe de las aguas, 
un trono de avanzadas espumas y sirenas 
averiguo entre tus sienes.

Y fuimos, allí donde la llave de tu castillo es 
el propio cielo cerrado a los ojos ajenos. 
Fuimos... donde el poder de tu voz 
se hizo luz entre la hierba y mi sombra.

Fuimos, al alcance de los corales que te lloran 
las décadas que no viviste, 
al encuentro de los aires que funden los azules 
de tu mar y mi cielo.

Fuimos, allí donde los días no son necesarios, 
donde existe la _Verdad_ sobre una piedra, 
escrita tu bondad 
al abrigo de un cálido sol de septiembre.`,
    images: [
      '/images/antologias/ilustracion_entrerrios.png'
    ]
  },
  {
    id: '10',
    publication: 'POETAS POR LA PAZ. Ilustre Colegio de Gestores Administrativos de Granada, Jaén y Almería',
    title: 'PALESTINA y MI DENUNCIA',
    type: 'Antología',
    date: '2002',
    description: 'Participación en la antología Poetas por la Paz.',
    coverUrl: '/images/antologias/PORTADA_poetas-paz.jpg',
    imagePosition: 'top',
    fullText: `>> **PALESTINA**

Un mundo de declives
nos obliga a invertir las manos.

Manos donde todo reproche de vientos
se condensa en razones y en causas estrechas
de nuestra memoria.

Sé de los motivos que 
obligan al cambio de rostro 
de un mismo elemento.
Elemento
de la idea profunda, donde la _Paz_ 
recrea los azules de todo un tiempo de conciencia 
y _Guerra_, en su definición, 
existe en la cara oculta de la Luna.

[[IMG:R:0]]Y por denuncia, no nos queda más pasaje que 
ser viajeros de lucha con armas de deseo, 
porque ver morir a los infantes no es más grave 
que destruir la propia identidad de pueblos, 
porque mi casa se disculpa como hálito de conciencia 
mientras la otra casa pierde sus registros de propiedad.
Yo sé de los poetas que aman la tranquilidad, y 
concluyen sus días en the más terrible de las cegueras,
yo sé de las presencias equivocadas tras una copa de buen vino,
y que van, 
ocupando sus conversaciones, 
con la lástima de los pueblos, 
siendo la más terrible de las guerras 
el comento de la muerte ajena.

Ocupo a todos los palestinos en mi pensamiento, 
y los abrazo en mi realidad y en la de vosotros, 
conservo los ojos del poeta palestino 
como tatuaje en los míos para siempre 
porque aquel silencio que duró instantes 
me dieron la causa de sus lágrimas…

Me ambienta su aire de preguntas, 
me dice con suma paciencia,

_— Tú, poeta español y dónde tu palabra…—_

Me habló de su pueblo, 
de la existencia de personas, and 
de la no existencia de su tiempo, 
me preguntó por qué ellos 
sólo pueden ver la cara oculta de la Luna 
por qué se nace tridimensional en el mundo 
por qué y dónde las razones del Gran Sol…

_—Tú poeta español… y dónde tu palabra en esta noche…—_



>> **... Y MI DENUNCIA...**

> A todos los señores poderosos del mundo...

Desde qué asombroso estado 
el misterio del tenebroso movimiento 
alcanza la conciencia 
dejando el alma al amparo del _Ser de la Noche_...

_Noche_ se define como espacio 
de nuestra propia sangre negra, 
como habitáculo que invita 
a los ojos del que no está, 
y se nos manifiesta...

_Noche_, 
donde se alcanzan 
movimientos de placer, 
a través de la más cruel de las sinfonías.
[[IMG:R:1]]
_Noche_, 
lugar donde el rojo destello, 
convertido en caballo, 
vibra y nos besa el misterio más cierto, 
más acertado, más real, más incesante, 
más inequívoco a la cercanía de su zarpa...

Tener la presencia de su entorno en nuestro cuello, 
sus alas de atrevido y fétido aire, 
solapando su amor 
en la cubierta de nuestra piel...

Vino, 
hasta el lugar de las luces, 
murió siendo serpiente del Edén, 
resucitó entre los tiempos 
de todos los cadáveres benevolentes, 
respiró el aroma de todas las guerras, 
desapareció para los incrédulos, 
se hizo inteligente en el Mundo, 
creó su propia estirpe, con rabo, cuernos y garras...

_Todo esto yo lo sé_... 
Hoy se encuentra frente a mí, 
deseando coronarme con su semen, 
sin embargo..., no advierte en su torpeza, 
que... 
_AZRAEL..., soy Yo._`,
    images: [
      '/images/antologias/ilustracion_poetas-paz.png',
      '/images/antologias/ilustracion2_poetasporlapaz.png'
    ]
  },
  {
    id: '11',
    publication: 'REPÚBLICA DE LAS LETRAS',
    title: 'Ciencia y Literatura',
    type: 'Revista',
    date: '2006',
    description: 'Nº 94 Febrero 2006. Einstein un científico humanista.',
    coverUrl: '/images/antologias/Repblica_letras_PORTADA.png',
    imagePosition: 'bottom',
    fullText: `>> **I.**

[[IMG:R:0]]Fue niña transformada en tortura de edades,
cuando disonaron sus vientos de agosto,
por las llagas de su torso.
Alcanza el silbido de la muerte
una sigla de vahídos sobre la inocencia,
y de nuevo el día sobre la vida,
una obertura defiende los cantos
de un rapto al amor sobre los años…

Fue que los perfiles de aquella voz
rescató la sonrisa perdida del estío,
tejiendo sobre la hierba seca
la gracia de volver a nacer
desde las ruinas del amor embalsamado.
Su nombre deleitó los sonidos,
como una dádiva de recompensas fugaces,
celebró en sus ojos un certero silencio de bondades,
transformó la sentencia de muerte
en hoguera de indulgencias,
transformó el miedo en aguamiel de otoño,
soportó la calma de las manos de su niña,
se hizo amor en sus estrellas,
tan pronto su sonrisa descubrió
la magia de ser fiel a la aventura.

_Su nombre está grabado en una piedra_
_su nombre sellado en el tiempo ya existido…_



>> **II.**

_Querida mía,_
uso mi gobierno allá desde mi mundo
para traerte la madrugada y la quietud
a los alcázares de tu alboroto.
traigo el orden de mi conciencia
desdele perfil de las luces
que me alcanzaron hacia ti;
traigo a tus murallas mis barcos celestes,
el capricho de los cometas,
el recuerdo de mis sombras,
los años y mis brújulas,
[[IMG:R:1]]
los rojos de mis luces,
la orbe de otro tiempo,
el principio de los astros
el sacro delito de volver a enfrentarme 
a mi destierro.

Querida mía,
porque viajaste conmigo 
sobre el tornado de la creación,
y comprendiste mi apariencia de ser hombre
en tu sonrisa.



>> **III.**

Y descendieron a la tierra de las hadas,
celebraron entre aires recelosos,
entre alegres vegetales
el desorden de ocultar las amarguras.
celebraron y brindaron por la vida,
y combatieron en el duelo de su suerte,
aceptaron el reto de tildar y escribir su universo,
sobre un día de áureos adornos,
ornamentos de alegres ruiseñores y abejas,
que ganaron su alimento bajo la hiedra.

Y descendieron al ardor de las aguas,
poza de plateadas olas,
camino de renacimientos,
donde se quedaron las trenzas de su pelo,
su vestido y su calzado,
donde fue bautizada,
donde él no tocó el agua,
y sin embargo pronunció la callada oblación
desde su luz.

_La niña lo supo siempre,_
_Supo que fue bautizada_
_por el soldado de las estrellas._`,
    images: [
      '/images/antologias/Republica_letrasI1.png',
      '/images/antologias/Republica_letrasI2.jpg'
    ]
  },
  {
    id: '12',
    publication: 'Turia. Revista Cultural. Número 53',
    title: 'Discuto con el mar',
    type: 'Revista',
    date: '2000',
    description: 'Revista cultural número 53. Teruel.',
    coverUrl: '/images/antologias/Turia_PORTADA.jpg',
    imagePosition: 'top',
    fullText: `>> «El mar al fausto beso,
>> En olas mil se riza…»

>>> Estébanez Calderón

[[IMG:R:0]]DISCUTO con el mar su beso más profundo.
Y me niega a veces su templado aire,
sabor a sal, desmesurada tempestad, 
            precisa luz de gravedades.

Mirarse en unos brazos azules
Ocupa el rincón más pequeño de las sensaciones,
por próximo que encuentre la palabra oculta,
no se averigua la venia de ser amado.

_- Entrego a mis labios licencia de amar_
_En pleno derecho ,_
_pero nunca edificar quisiera_
_sobre cielos perdidos,_
_la esencia de un cuerpo infinito._

Viejo es el lugar del tiempo,
desde la experiencia.`,
    images: [
      '/images/antologias/Turia_Imagen1.png'
    ]
  }
];


export const LITERARY_CRITICISMS: LiteraryCriticism[] = [
  {
    id: '4',
    publication: 'Revista Ficciones',
    title: 'Número 3',
    year: '1998',
    coverUrl: '/images/Critica_literaria/Ficciones3/ficciones_3.jpeg',
    slug: 'ficciones-3',
    excerpt: 'En el número 3 de FICCIONES, se reseña: EL HOMBRE DE LUXEMBURGO (Tusquets, 1997) de Arnaldo Calveyra. PARÉNTESIS DE TIEMPO, SILENCIO Y CURVATURAS (Devenir, 1998) de Juan Pastor. RECÓNDITO TRASLUZ (Junta de Extremadura, 1997) de Serafín Portillo. RECUERDO EN LA NOCHE (Devenir, 1997) de Carmen Serna. PERTENECÍ (Colección Sureste Narrativa, 1997) de Andrés Neuman.',
    reviews: [
      {
        id: 'hombre-luxemburgo',
        title: 'EL HOMBRE DEL LUXEMBURGO',
        author: 'ARNALDO CALVEYRA',
        publicationInfo: 'Tusquets, 1997',
        imageUrl: '/images/Critica_literaria/Ficciones3/Portada_luxemburgo.jpg',
        text: `Poemas de Arnaldo Calveyra, entresacados de los recuerdos que sobrevienen a su memoria, de un lugar del pasado, en escena, un presente aparentemente inmóvil. Autor nacido en 1929 en tierras de Argentina y que por paradojas de la vida se traslada a vivir a París, desde entonces, sus trabajos publicados: poemas, teatro, novela y cuentos. Es evidente la sensación de similitud que provoca en él los momentos de un singular paseo por un jardín cualquiera. No estamos hablando de un libro adentrado en la añoranza o la delicadeza de una realidad blanda, este trabajo muestra de una doble perspectiva, casi vivencias de un mismo presente en dos lugares diferentes y en dos tiempos diferentes, una fuente, que aparece repetitivamente a lo largo de los versos como centro o punto de mira hacia esa doble perspectiva, una descripción de escena, jardín inmóvil, personajes sin voz, de los que se advierte su presencia:

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

Libro destacado por el dominio del lenguaje y donde se denota claramente la constante de una infancia y adolescencia argentinas transportada a los fríos paisajes de la ciudad del Sena, se trata sin duda de un trabajo interesante de versos largos y descriptivos.`
      },
      {
        id: 'parentesis-tiempo',
        title: 'PARÉNTESIS DE TIEMPO, SILENCIO Y CURVATURAS',
        author: 'JUAN PASTOR',
        publicationInfo: 'Devenir, 1998',
        imageUrl: '/images/Critica_literaria/Ficciones3/parentesis.png',
        text: `En este libro Juan Pastor hace una recopilación de poemas desde el año 1975 hasta 1983. De su primer trabajo, poemas de estructura y contenido sencillo de verso libre donde más que agresividad se advierte un tono suave, melódico, no romántico pero que denota la sensibilidad del autor.
De la misma época, un año posterior, trabajos de igual tendencia, posiblemente influenciado por la época en cuestión donde se adentra entre otras, por vías del sentimiento.
En su última parte, presenta una prosa poética de gran madurez, historia bien trabajada acerca de las cuestiones absolutas de la mente.
Llama la atención a lo largo de todo el libro (aun siendo versos de años diferentes), el tono obsesivo del autor en la repetición de términos como dedos, no cuestionable, pero donde tal vez el autor quiera dejar constancia de forma clara y evidente todas las sensaciones palpables que lo inundan.
El autor incita al lector a balancearse por todos los lugares habitados en un tiempo, dignos de ser mencionados y recordados siempre desde un silencio escrito que provoca el devenir lógico de la existencia.`
      },
      {
        id: 'recondito-trasluz',
        title: 'RECÓNDITO TRASLUZ',
        author: 'SERAFÍN PORTILLO',
        publicationInfo: 'Edita la Junta de Extremadura. 1997. Consejería de Cultura y Patrimonio. Colección Poesía-24',
        imageUrl: '/images/Critica_literaria/Ficciones3/recondito.png',
        text: `Libro que descansa en el abismo de luces y tiempo, es el autor buen conocedor de las formas de escritura, pero de un clasicismo pospuesto a nuestros días, donde la experiencia personal del autor no tiene cabida, pero sí posiblemente todas las experiencias de hombres y mujeres. Se trata por tanto de un libro donde nada y todo tiene entrada, es decir, donde la sobria nostalgia de todo lo indescriptible, luz, tiempo, soledad, o silencio son presos de los versos a través del trabajo.
El libro se define y enmarca en dos enfoques que vienen a mezclarse en el punto de encuentro del sentimiento humano: Clásico en su forma y contexto, actual al advertirse toques en el tiempo del hombre moderno: "Paisajes desde terrazas" frente a "Paisaje desde el mar", ¿el punto de encuentro?, el vacío que queda al sostenerse indefenso ante los sentimientos más ancestrales que pueblan el destino del Hombre.
Bien redactado, es una poesía, la de este autor, que se mece entre luces y penumbras, y este trabajo en concreto, es una historia sin títulos, entre versos que dejan entrever un único título: Recóndito trasluz.`
      },
      {
        id: 'recuerdo-noche',
        title: 'RECUERDO EN LA NOCHE',
        author: 'CARMEN SERNA',
        publicationInfo: 'Colección de Poesía: Devenir. Madrid. 1.ª Ed. Mayo, 1997',
        imageUrl: '/images/Critica_literaria/Ficciones3/recuerdos en la noche.png',
        text: `Poesía de Carmen Serna, fácil de comprender, a la vez toca el alma como la resiente, por la pasión y dulzura que conlleva. La Poesía en sí alcanza caminos insospechados, a veces existe una pretensión de buscar la ambigüedad de palabras, llegar a la duda del lector, sin embargo, no existen secretos en la forma de escribir de esta autora que confluye en verdades y corazas todo un mundo de sentimientos.
Separa su obra en diferentes títulos en torno a "Recuerdos de una noche", posiblemente la única noche que habita en la poesía de Carmen Serna.`
      },
      {
        id: 'perteneci',
        title: 'PERTENECÍ',
        author: 'ANDRÉS NEUMAN',
        publicationInfo: 'Colección Sureste Narrativa. 1997',
        imageUrl: '/images/Critica_literaria/Ficciones3/pertenecí.png',
        text: `Aparece este primer trabajo del escritor Andrés Neuman con un simbólico alcance al intentar rozar una realidad dentro del mundo surreal. Escribir relatos a los que se pertenece mientras se dominan y dejar de pertenecer a ellos como la huida hacia otros destinos, es sin duda la idea que deja entrever el autor. Se embebe, efectivamente, en sus propias historias y alcanza el placer en ellas, hasta justo el momento de la consistencia de una forma. Diferentes historias bidimensionales como los relatos de Héctor Álvarez y el mismo Mallea que derivan en la inconsciencia.
Todos los relatos tienen un denominador común, el resultado de la propia conclusión que sus protagonistas en cada cuento, los cuales deciden por sí mismos la ironía de su destino y que a la vez se dejan balancear por el devenir de sus propias vidas. Vienen a menos los motivos de las historias, no serán lo fundamental, pero sí la consecuencia que dará término a cada relato.
Nace el autor en Sudamérica, posiblemente influenciado por toques de ocultamiento de datos y situaciones, como se puede apreciar en Juan Carlos Onetti e incluso con toques de mayor fantasía (en similitud con Jorge Onetti), existe en su estilo una mezcla entre las vanguardias originales y las más avanzadas de los últimos años.
Uno de los relatos, no el primero, que no da título pero sí forma a este libro, parece centrar la historia de los hombres alrededor de una vida nocturna en desembocadura hacia la vida diaria. ¿No es este libro realmente un avance entre noches para alcanzar las claridades de otros posibles trabajos?
PERTENECÍ, primer y sugerente título que con total seguridad dará comienzo a futuros y más ambiciosos libros, por supuesto dentro de la lógica evolución del intento de superación.`
      }
    ]
  },
  {
    id: '3',
    publication: 'Revista Ficciones',
    title: 'Número 4',
    year: '1998',
    coverUrl: '/images/Critica_literaria/Ficciones_4/Ficciones_4.jpeg',
    slug: 'ficciones-4',
    excerpt: 'En el Nº4 de FICCIONES: reseña de CUANTAS LLAVES (Icaria, 1998) de Concha García. EL LIBRO DE LOS SALMOS (Devenir, 1998) de Jesús Urceloy. TODOS LOS NOMBRES (Alfaguara, 1998) de José Saramago. SIN PUERTAS (Pre-textos, 1996) y EL SILLÓN MALVA (Planeta, 1995) de Ramón Mayrata',
    reviews: [
      {
        id: 'cuantas-llaves',
        title: 'CUÁNTAS LLAVES',
        author: 'CONCHA GARCÍA',
        publicationInfo: 'Editorial Icaria. Poesía. Barcelona. 1998. Prólogo M. Vázquez Montalván',
        imageUrl: '/images/Critica_literaria/Ficciones_4/llaves.png',
        text: `Sentarse a descubrir un ritual hermético, silenciado, coherente con la propia existencia que deja al descubierto todos los extremos del desorden de lo que se es y lo que se vive. CUÁNTAS LLAVES, cuántas llaves abrirían el espacio cúbico de un libro que deplora ya desde el principio todo el mundo que cualquier personaje protagonista de su presente es incapaz de ver. Sin embargo, es la autora real en su sentido de visión, dueña de todas las llaves que desde lo cotidiano nos deja pasar a las sensaciones no perceptibles y tan evidentes a la vez, de todo hombre o mujer. Situándonos desde esta realidad, todo lo que cabe en un bolsillo o entre los ojos es elocuente. Pero alcanzar esa posición inicial, desde una soledad incierta, desde la situación de valentía, a veces puede escapar de las manos y es la poeta quien nos dirige esas manos cerradas y las llena de llaves, de cosas tangibles, de costumbres. Existe en este libro el balanceo y dominio de las palabras, palabras que a veces desde la sorpresa no es posible descubrir sino a través de la tinta de la escritora, recuerdos de un futuro mal calculado, negación de un presente inmóvil en beneficio del intento de alargar ese presente, o la incertidumbre del pasado que no lo es desde el lenguaje. Se vive dentro de este libro, se empieza su lectura con un sabor de boca no preguntado, y a su paso, el futuro se irá adueñando de nuestro tiempo entre los (momentos) cotidianos.
Efectivamente, un futuro a fragmentos mal calculado por parte del lector que se siente obligado desde su propia experiencia a poseer todas y cada una de las líneas aquí escritas.
El silencio se despliega desde una música interior, y nos obliga a la reflexión desde la poesía, desde las palabras, desde la armonía de las letras perfectamente equilibradas:

_En la vida de cualquiera_
_no hay nada más perverso_
_que un amor imposible. Sirve oler_
_cualquier ángulo de la sábana_
_para tener certezas de segundo orden._

Y desde esa sábana, a propósito de cotidiano, se mira el techo o la ventana, y no será lo importante, pues los elementos del vivir serán solamente instrumentos al servicio del tiempo de la mujer interior que vive al otro lado de Concha. Empieza esa singular trayectoria desde una situación que es la de cualquiera:

_Hubo suerte al dejar el coche_
_situándolo junto al hotel. Mi rostro_
_había cambiado en esas horas._
_Te distraje en el aparcamiento_
_y vi a dios un rato, desconecté_
_la radio y me puse la ropa_
_de los días helados. Te amaba_
_mientras perdía las llaves . ..._

Revela así mismo un presente (¿o pasado?) antes mencionado como alargado:

_... Bendije mi pasado_
_por haberme ocultado tanto_
_quebranto del alma, sospeché_
_que tu silencio provenía de un amor_
_lejano, y me acerqué a tu lado. ..._

Y termina llevándonos, al final del poema, a ese futuro (¿o presente?) que nos obliga desde los días:

_...Yo y mi cuerpo. Este cuerpo_
_que debe sentarse reclinado_
_para que los delirios sean reales._
...
_Me crecen facultades extrañas_
_como si fuesen antiguas, las reconozco_
_en mi manera de estar_
_de concederle a la noche días aparte._

Antonio Ortega en LA PRUEBA DEL NUEVE (antología) nos dice: "Cuando el lector entra en cualquiera de los libros de Concha percibe casi de inmediato dos cosas: la soberanía del sujeto lírico (mi personaje literario es una mujer y el lenguaje que transmite es el lenguaje de otra mujer), y la peculiaridad, por su personal construcción del habla que lo sustenta".
Como diría Oscar Wilde: _La vida moral del hombre forma parte del tema del artista, pero la moralidad del arte consiste en el perfecto uso de un medio imperfecto_. A él acudo, y de momento sólo a él que nos dice desde las páginas amarillas de un libro ya casi olvidado que —_Los que encuentran bellas intenciones en las cosas bellas son los cultos. A ellos les queda la esperanza_—
A Concha le queda la esperanza, pero no únicamente lo bello, hace moral el uso del lenguaje y de ello se deriva la perfección de su uso. De este libro, ¿cuántas llaves seremos capaces de averiguar? ¿hasta dónde la capacidad de llegar?

_... Debo regresar a las sábanas_
_pagaremos mañana. Ven._
_....Iremos._`
      },
      {
        id: 'libro-salmos',
        title: 'EL LIBRO DE LOS SALMOS',
        author: 'JESÚS URCELOY',
        publicationInfo: 'Devenir, 1998',
        imageUrl: '/images/Critica_literaria/Ficciones_4/salmos.png',
        text: `_…Concibo la poesía como el mayor acto de libertad…_
[R] J. Urceloy

Primer libro publicado de este joven autor, que merece -desde su comienzo- que se le preste la suficiente atención. Dividido en tres libros a su vez detallado por años, poemas desde 1985 hasta 1998. Llama al ojo de la crítica por la originalidad de su tono: un salmo de vivencias que se escapan de las manos y que llegan al oído en un intento de acometer la inexistencia de lo cotidiano. Inicia sus textos con una forma sorprendente y con increíble fuerza inquietante:

_Yo, ego, pecador_
_de una nueva forma de blasfemia..._

Y a lo largo de sus textos intenta y consigue llegar a tocar lo evidente y en lo que no se repara habitualmente, tres salmos menores por las líneas de un bolero que concluyen su primer espacio para continuar en su segundo tiempo con el tono de lo vivido.

_...Lo peor es tu amor por esa chica que hoy comparte mi cama,_
_y la frialdad con que escribe tu nombre_
_en su libreta azul de los festivos._

Describe finalmente una línea totalmente cóncava en el ritmo, de caídas y subidas llegando incluso a provocar el vértigo de las ideas. Se entrelaza en recuerdos breves, tal vez en miedos a hacerse adelante, pero desde luego con la total lucidez de un extraordinario poeta por descubrir.

_...alzo esta capa y brindo por vosotros,_
_y doy gracias al cielo la virtud_
_de haberos conocido y la desgracia_
_de no ser peor poeta o mercader._

Es por tanto la condición de la fuerza poética lo que más sobresale de sus líneas. Tal vez nuestra próxima generación de ritmos novedosos que ya se adentra en el nuevo milenio. Como él mismo dice: Me importa muy poco cómo se ha escrito un poema si éste me dice. Si habla. Si comunica. Si es honesto, en suma. Pero no admito la ignorancia, la ausencia de rigor, la decadencia —como decía Twain— en el arte de mentir. Y eso se nota. Siempre. La poesía es.`
      },
      {
        id: 'todos-nombres',
        title: 'TODOS LOS NOMBRES',
        author: 'JOSÉ SARAMAGO',
        publicationInfo: 'Alfaguara, 1998. Traducción Pilar del Rio',
        imageUrl: '/images/Critica_literaria/Ficciones_4/nombres.png',
        text: `El escritor escribe un libro, pero ese libro no está terminado hasta que el lector no lo ha entendido perfectamente.
Pilar del Río.

Nuevamente nos sorprende el autor tras más de diez libros publicados en su brillante trayectoria iniciada públicamente con EL AÑO DE LA MUERTE DE RICARDO REIS, y digo nos sorprende pues no se trata de una simple novela de rutinario entretenimiento, por otro lado, cosa fácil de hacer en nuestros días y de atrevida vulgaridad, a veces, en muchos autores que no quiero ni nombrar.
Existen intenciones de dejar evidencia de la importancia del lenguaje, de la esencialidad de la palabra como origen del recurso más básico del hombre. Y no sólo en su uso correcto me entretengo, pues su tendencia a la denuncia de la violación social, hecho casi paralelo a la propia condición humana, se palpa de forma singular en este libro. Un señor, Don José, que narra su historia de búsqueda ansiosa de la mujer desconocida no es más que la incógnita y el vehículo de narración de la explotación piramidal de la estructura social en la que estamos inmersos. Y eso es lo importante en este libro: la condición del autor comprometida con las clases sociales más explotadas, que no menos cultas. Un simple escribiente de intachable y eficiente conducta en su quehacer diario no es más que eso, un valor añadido a la sociedad que produce y consume. ¿Y no hay nada más?, incluso la benevolencia al no castigo del mandamás de la Conservaduría es un insulto. De todo nos habla el autor, de todas estas cosas y por supuesto no necesariamente con palabras escritas.`
      },
      {
        id: 'ramon-mayrata',
        title: 'RAMÓN MAYRATA, UN ESCRITOR VIBRANTE',
        author: 'RAMÓN MAYRATA',
        publicationInfo: 'SIN PUERTAS (Pre-textos, 1996) / EL SILLÓN MALVA (Planeta, 1995)',
        imageUrl: '/images/Critica_literaria/Ficciones_4/sillon.png',
        text: `Poesía:
Sus primeros poemas aparecen en la Antología ESPEJO DEL AMOR Y DE LA MUERTE (1971) junto a otros autores como Javier Lostalé, Eduardo Calvo, Luis Alberto de Cuenca y Luis Antonio de Villena. Selección y prólogo de Antonio Prieto. Prologada de Vicente Aleixandre.
Más tarde publica ESTÉTICA DE LA SERPIENTE, 1972, UNA DUDA DE ALICIA, 1990. SIN PUERTAS, 1996.

Ensayo:
POR ARTE DE MAGIA, 1982. EL OJO DE LA ARBITRARIEDAD, 1986. LA SANGRE DEL TURCO, 1990.

Teatro:
LA VÍA LÁCTEA, estrenada en 1993.

Narrativa:
Relatos: SI ME ESCUCHAS ESTA NOCHE, 1991. Novela: EL IMPERIO DESIERTO, 1992. EL SILLÓN MALVA, 1994. ALI BEY, EL ABASSI, 1995.

Si abriésemos en algún mágico momento las puertas de la realidad del lenguaje, del mundo imaginario de las sensaciones, o la denuncia de un autor comprometido con otras culturas, tal vez nos encontraríamos con Ramón Mayrata. Y no hay que olvidar que un autor que demuestra un claro dominio de géneros tan diversos como son poesía, narrativa, ensayo o teatro, no se debe únicamente a una exactitud y correcto equilibrio de la técnica. Debe haber algo más; y ese «algo más» corre en beneficio de un mundo interior lleno de vivencias, sensaciones y sensibilidad extraordinaria.
Con su último libro de poesía SIN PUERTAS, tal vez no sea necesario insistir en las tres partes que lo delimitan, tal vez es condición necesaria fijarse en el ritmo palpitante y enlazado de sus versos. Porque el autor no nos habla sólo de un lugar o espacio dirigido (en su primera parte) buscando la consecución de los personajes (en su tercera parte) que habitan ese lugar. Existe un fondo en sus versos llenos de elocuencia, de imágenes, tal vez irreales, que muestran la insistencia del autor por la vibración interna, suya propia.
De su narrativa, nunca olvidar su situación comprometida con culturas africanas, tan cercanas a él por la propia experiencia que lo llevó de viaje al otro lado del Estrecho. Nunca olvidar que junto a su tono literario fluido vive el hombre del desierto.
Fijándonos en EL SILLÓN MALVA, el autor nos relata la vivencia de un guionista perseguido por la parodia de su propia vida, seres de un solo instante al amparo de un hombre "casi sin rostro", y desde luego no deja este libro de mirar hacia al Sur donde encuentra en la huida del protagonista también su instante en África.
Otros libros igualmente sugerentes son ALI BEY, EL ABASSI, o EL IMPERIO DESIERTO volviendo a notar la insistencia del autor por el tema saharaui.
Y de toda esta diversidad, se debe insistir siempre en lo evidente: no sirve de nada saber escribir con diferentes plumas si no se consigue la atención máxima del lector. Lo difícil es encontrar poesía vibrante en un novelista, prosa devorante en un poeta, el pensamiento irónico en un dramaturgo (no se le escapa ni Unamuno y sus pajaritas de papel), o la consecución de la originalidad de las escenas en un narrador de relatos. Y este autor lo consigue. Lo consigue sobradamente desde su intuición y su estilo.`
      }
    ]
  },
  {
    id: '1',
    publication: 'Revista Alhucema',
    title: 'Número 8',
    year: '2002',
    coverUrl: '/images/Critica_literaria/Alhucema_8/Alhucema_8.jpeg',
    slug: 'alhucema',
    excerpt: `RAFAEL RODRÍGUEZ ALMODÓVAR Y EL VERSO DE LOS AÑOS
Reseña del libro: MEMORIA DE UN TIEMPO CUMPLIDO. Colección literaria CAROAL. 2001

Versos que muestran el recorrido de un tiempo que se esfumó entre las manos de este poeta, dejando una estela de aceptación, tristeza y asombrosa clarividencia. El autor comprime su tiempo en este poemario con elegancia y maestría. Libro prologado por la también desaparecida Mari Luz Escribano con quien el autor mantuvo una estrecha y armónica relación literaria en la revista Extramuros, y que fue referencia de las Letras Españolas de aquellos años. Quedó -sin lugar a dudas- la esencia de aquellos años bañados por el esplendor de magníficos poetas y poesía plural. En esta ocasión, versos limpios y profundos de un poeta ya desaparecido. Desde sus primeras páginas se advierte la apacible tristeza de un tiempo cumplido.`,
    reviews: [
      {
        id: 'memoria-tiempo-cumplido',
        title: 'RAFAEL RODRÍGUEZ ALMODÓVAR Y EL VERSO DE LOS AÑOS',
        author: 'RAFAEL RODRÍGUEZ ALMODÓVAR',
        publicationInfo: 'Colección literaria CAROAL. 2001',
        imageUrl: '/images/Critica_literaria/Alhucema_8/tiempocumplido.jpg',
        text: `Reseña del libro: MEMORIA DE UN TIEMPO CUMPLIDO

Belén Juárez. Enero. 2002

Yo conozco a Rafael Rodríguez Almodóvar, persona de tremendos silencios y leves sonrisas. Poeta de los que encuentran en las calles de su Granada, en cada recorrido, el mismísimo verso infinito del tiempo. Conozco a Rafael, es de esas personas con las que nunca he tenido conversaciones largas, pero aun sin necesitarlas he podido ver y comprender en sus ojos, acertar en pensar que es una persona brillante por el sentido tan exacto que tiene de la Vida. Él es una de esas personas que no le piden a la Vida la prisa de la Evolución, —paso a paso, —tiempo al tiempo, por favor...—, —Amabilidad...—, la Modernidad no consiste en apresurarse a descubrir los inventos del Lenguaje, pues éste llega en su propio caminar a nuestras mentes sin necesidad de obligarlo con símbolos artificiales.
Rafael, es lo que denominamos en el mundo de los escritores, un poeta elegante. A quien no le estorban los jóvenes, pero que tampoco olvida a sus poetas mayores.
Nos sorprende en esta ocasión con un nuevo libro "Memoria de un tiempo cumplido", de la Colección literaria CAROAL, prologado por la también escritora M. Luz Escribano e ilustrado por Dolores Montijano. Libro donde una vez más nos deja ver su madurez literaria con asombrosa clarividencia. Podemos recorrer este poemario y sentir el verso limpio y profundo de un poeta consolidado; Ya desde su primera página en su poema "En sombras" advertimos una tristeza de años de la que no huye y donde delata la presencia de un tiempo que él considera ya cumplido.


_—Si esto ocurriera, que rechazo_
_por ética del hombre,_
_cuando el deseo me puede,_
_me conmueve y me inclina_
_a perderme en la nada,_
_me afirmo en la miseria_
_de saberme agotado_
_y mi tiempo cumplido...—_



Versos de una tremenda fuerza que van creando el cuerpo de este libro ahogado en su propia fiebre de años. Libro que se balancea solo, que llega del pasado, mira hacia delante con incertidumbre, y vuelve nuevamente la mirada al pasado. Ir y venir de luces, abierto el tiempo entre sus propias manos, he aquí algunos de los versos más hermosos de este texto:


_—...Las dos manos que tengo no_
_tiemblan todavía:_
_en una se sostiene el peso de mis años._
_El tiempo breve que me queda_
_mi derecha soporta_
_sin que claudique nunca,_
_y soy sólo el que soy,_
_un hombre que camina_
_con ética profunda...—_

Acierta M. Luz Escribano en advertir una tendencia machadiana en este libro, la soledad como cúmulo de muertes, sus paseos por noviembre y sus fuertes. Bien este autor consagrado, sincero y maduro nos muestra su imagen más dolida, inquieta y justa, donde podemos averiguar el diálogo del propio poeta con los años ya vividos.
Es por tanto, Rafael, el poeta de la Amistad y como ya dije antes uno de nuestros poetas más elegantes de Granada. En este libro, así lo podremos descubrir, en cada uno de sus versos, en cada una de las eternas sensaciones de su tiempo.


Bibliografía: Jerez de la Frontera, 1921. Estudió Filosofía y Letras en Sevilla y Madrid, tras lo cual pasó a trabajar en la Banca. Director del Banco Exterior de España en Ceuta, Zaragoza, Granada y Cádiz.

Colaborador en revistas y periódicos: "Cauce" (años 40); "Ayer" "La voz del Sur" (Jerez); "Diario de África" (Tetuán, Marruecos); "El Faro de Ceuta".
Cofundador de la revista "Extramuros" con José Espada, 1995.
Fundador de la revista "Primavera" y "Solera jerezana" (1944-49).
Libros publicados: "En ningún tiempo". 1990. "Ámbar de mi vino". 1992. "De nieblas y silencios". 1998.`
      }
    ]
  },
  {
    id: '2',
    publication: 'Revista Extramuros',
    title: 'Número 29-30',
    year: '2003',
    coverUrl: '/images/Critica_literaria/extramuros/Extramuros_29-30.jpeg',
    slug: 'extramuros',
    excerpt: `LO MIRÉ A LOS OJOS

Reseña del libro: DE(S)APARICIONES
PEDRO J. DE LA PEÑA

Ediciones Libertarias, Poesía.1994
Extramuros. Revista de Letras, Nº 29-30
Belen Juárez. 2003

Quisiera aclarar el inicio de la reseña de este libro: “Una cálida madrugada en el aterrador desierto del aeropuerto de Valencia, entre risas y emociones, charlaba con un viejo amigo, mientras yo, poco ingenua y más antártica que nunca, olfateaba entre anónimos, emprendiendo mi viaje y aventura por tierras orientales de dátiles y suspiros.” Conocí a Pedro J. Peña hace más de 20 años, en el aeropuerto de Valencia camino del Instituto Cervantes de Beirut. Junto a Ricardo Bellveser y Antonio Porpetta fuimos invitados a llevar nuestros versos a las orillas más orientales del Mediterráneo. Hoy ninguno de los tres está ya con nosotros, y me sigue abrumando su partida y emocionando sus versos. El libro reseñado de Pedro J de la Peña escrito en 1994 derrochaba pasión, ironía y majestuosos silencios escritos con versos. El poeta debe hacer sentir, dijo una vez. Hoy nos queda su alma, su sonrisa y aquella crecida chistera de versos.`,
    reviews: [
      {
        id: 'desapariciones-pedro-pena',
        title: 'DE(S)APARICIONES',
        author: 'PEDRO J. DE LA PEÑA',
        publicationInfo: 'Ediciones Libertarias, Poesía.1994',
        imageUrl: '/images/Critica_literaria/extramuros/Extramuros_29-30.jpeg',
        text: `Lo miré a los ojos. Una cálida madrugada en el aterrador desierto del aeropuerto de Valencia, entre risas y emociones, charlaba con un viejo amigo, mientras yo, poco ingenua y más antártica que nunca, olfateaba entre anónimos, emprendiendo mi viaje y aventura por tierras orientales de dátiles y suspiros.

De(S)aparecido del mundo, y Aparecido en medio del verso más increíble, encontré al poeta en el año 1994 cubierto de una chistera negra a modo de enorme tejado protegiendo los azules que estremecían la fachada de su rostro. Encontré a Pedro J. de la Peña, en la "Onomatopeya" atrevida y sinfónica, en la "Abolición" del verso más cautivador, en la "Hibernación" de su propia tarde de miedos autistas, en la "Fosforescencia" del doloroso cuerpo del poeta bajo la hierba.
"Sostengo la hipótesis de que nunca he nacido", me dijo nada más abrir sus páginas, a modo de conversación inicial con su propia existencia, sin embargo sostenía entre sus dedos un dorado bastón, sólido y presidencial, como si me advirtiera de un terrible viaje... Comenzó su vida y su escena prima recordándome la muerte, los paraísos del infierno ante el deshonor, la ausencia de la memoria del Lenguaje, los trabajos hostiles, ¿y para cuándo?, sus mismísimos zapatos a motor y carcajadas, los deprimentes compañeros de pluma que venden su mercancía a menor precio que una mujer sin concha, y a modo de inconfundible arena construyó entre mis dedos su propio laberinto, —susurrándome— (para no atenernos a engaños), que una tumba de versos no es más profunda que la que olvidamos al nacer.
[[IMG:R:0]]
Sin embargo, su mejor escena estaba aún por llegar, al seguir avanzando por los silencios de sus páginas, encontré que la mayor de las verdades radicaba en la negación de la Luz. "Luz que ciega y maltrata"... donde las estrellas, al igual que las profundidades del poeta que se descubre durante las soledades de su inexistencia. Te miro, —querido poeta— y habría dado la plata de mis muñecas por ser cómplice del robo de tu gata. Tal vez una presa eterna para tus halcones piratas. Más aún, al final del escenario seguían corriendo los trenes de cien pasos a la par de un mismo sueño, porque sueño es la palabra del poeta a quien miro a los ojos en estos momentos. Enjuiciado, y le cantas al traidor, ¿a quién sino? En tu lluvia en Haití donde encontraste entre collares de corales y el hambre acuñada de belleza el recuerdo de tu infancia. 
Hielo. Hielo ante una vida que pasa a mejor vida en inmortal cuerpo helado. En tu tercera escena, hasta el frío protege las páginas de un verso de vidrio y aire en eterna conversa- ción con tus Mayores. Y mientras sigues en tu cúpula de extraños, los dedos de tus inviernos en rozamiento perpetuo de un seno aparecen por las esquinas de tu propia vida. Tal vez... ni acierte en recordar el nombre de aquel hotel en Oriente..., pero sigues, nombrándome las bondades del invierno del Príncipe de la Noche, a modo de revés o bofetada sobre los cuellos de todos los lectores casi diez años después... Y más me castiga El Padre y su Casa en total desacuerdo con los hermosos pájaros correteando por las esquinas de mi alma y de tu sangre, cuando supe que aquel sagrado laberinto herido con olor a hierbabuena y sudor de palomas igualmente se acercaban a mí, hablándome de las cerradas primaveras de castaños, frambuesas y cerezas serranas... Me pierdo, en este frío de páginas templarias a modo de yegua que se lleva en la boca un poco de pradera, el misterio y la vida. Pierdo la Noche y se la cedo al ganador de luces, al gladiador romano que nos batió en sueños en el templo de Júpiter. Hielo, sigue siendo hielo, la advertencia de los años dormidos...
Cuarta escena, y de(s)apareces de los años noventa conservando tu chistera y sus secretos, aquel áureo bastón que le ganaste a la Vida a pesar de sus terribles fugas. Y conservo la imagen del traje negro iluminado de rojos en tu cuello de versos, sin embargo, insistes y me impones la sentencia de la búsqueda inútil atentando contra el viento y las palabras... "No intentes aplacarla (la Vida, se entiende), y menos con imágenes inútiles..."—así me dices— que Nadie nos sigue siempre a pesar de todas nuestras certezas. Fabricamos la esperanza en nuestros delirios, —insistes—, en los cuerpos en lucha contra el tiempo, pero suma y sigue hacia la muerte como río de paneles cayendo sobre el juego (—a modo de dominó—). Versos y más versos de tu boca, escupiendo la lenta transformación, sumiso diálogo del uno contra la otra, la manzana contra Cezzánne. Y a pesar de tus esfuerzos, —créeme— siempre sabré quién eres, a pesar de tus lombrices y tus cerrados ojos azules enmascarados de olvido. Más deseabas tener las manos llenas de disculpas ante tu asesino, que la propia muerte que te ofrecía el verdugo de versos, más abrazabas el deseo de aparecer por sus árboles frondosos, que morir sin alma a modo de piedra sin honor ni huella. No moriría nunca, era(mos) un mastín sin dueño al que la muerte ignora. Y sobre todos aquellos versos de contemplación, el miedo seguía existiendo sobre tus papeles, miedo de morir sin noche, el anhelo de un silencio que no termina de llegar rodando por las páginas, el silencio que nació conmigo, el mismo día y la misma noche, y que hoy decide perpetuarse en la página más abierta del tiempo y se adhiere al galope de tus versos de poeta. Familia fue y hermano sigue siendo, en la inmortal verdad de tus entrañas Hermano mío, tú que no existes... Pues me cierras, con herrumbre y dificultad, esta puerta de los años, así, calmo, quedando por siempre todo bajo tu chistera y tus infinitos ojos, como un trozo de cielo robado a los años, perpetuado en tu mirada.

Así mis ojos te miraron mi señor de(S)aparecido del mundo, tras la puerta cerrada de tus años que impidieron salir de la Casa del Padre todas tus muertes... El nombre de la rosa tatuada en el madero de aquel hotel, sigue sin venir a mi memoria, pero de esta muerte aún conservo su recuerdo entre mis versos. Meses después comprendí la fortuna de aquel viaje, la casual suerte de invadir la Casa de Júpiter, todas las felices carcajadas en los zapatos, lo comprendí al tener entre mis manos el libro perdido de un dios "de(S)aparecido" por siempre de las tertulias de poetas de "moda".

[[IMG:1]]`,
        images: [
          '/images/Critica_literaria/extramuros/bio.jpeg',
          '/images/Critica_literaria/extramuros/Dedicatoria.jpeg'
        ]
      }
    ]
  }
];

export const ALBUM_TRACKS: Track[] = [
  { id: '1', title: 'CATEDRALES DE ROCA', duration: '5:42', poemSource: 'Horizonte de Sucesos', spotifyId: '4gU6i1hRQ2heDzPtCKZfou', youtubeId: 'Vbmx71E9Mfo' },
  { id: '2', title: 'LOBA', duration: '3:15', poemSource: 'Horizonte de Sucesos', spotifyId: '6UT14ihuRCoD6szkFQ2QJZ', youtubeId: 'FPx9I_bpPWA' },
  { id: '3', title: 'EL FRIO DE MIS AMAPOLAS', duration: '4:20', poemSource: 'Horizonte de Sucesos', spotifyId: '7gw0RUTGWxfy04H9LiaNoi', youtubeId: '-vLhUlkmE8k' },
  { id: '4', title: 'EBANO MAR', duration: '3:58', poemSource: 'Horizonte de Sucesos', spotifyId: '3HafW1PTsQLt0IjWkHp8pC', youtubeId: '98Xuloq1PxI' },
  { id: '5', title: 'NORA', duration: '4:12', poemSource: 'Horizonte de Sucesos', spotifyId: '6jHQaRwCAr9kyQmY1cVldU', youtubeId: 'ILJuaCVsW7I' },
  { id: '6', title: 'GEODA', duration: '3:45', poemSource: 'Horizonte de Sucesos', spotifyId: '18Z2BU0bsDPnbflLr3XFiQ', youtubeId: 'GNcjBoSqUhw' },
  { id: '7', title: 'VERDE OLIVINA', duration: '4:05', poemSource: 'Horizonte de Sucesos', spotifyId: '5XnlVzAvR99eTTIkXEBWde', youtubeId: 'k_sDXKezMYA' },
  { id: '8', title: 'ELLOS DEL AIRE', duration: '3:30', poemSource: 'Horizonte de Sucesos', spotifyId: '5tGXFOuxHuuuoW34sLr2Ls', youtubeId: '2ChVN55s8Lk' },
  { id: '9', title: 'ESMERALDA', duration: '4:15', poemSource: 'Horizonte de Sucesos', spotifyId: '7MboNgEP88LGX1JYOLbAPV', youtubeId: '42Bvb9kRWXE' },
  { id: '10', title: 'MONTE DENALI', duration: '3:50', poemSource: 'Horizonte de Sucesos', spotifyId: '1liY63cyTGxSbX7xdb5Ky7', youtubeId: 'Az_xynEj9jE' },
  { id: '11', title: 'AMADA MIA', duration: '4:25', poemSource: 'Horizonte de Sucesos', spotifyId: '1bQl9LaEKa47wQI99kk0x0', youtubeId: '7dFfFvWEqvg' },
  { id: '12', title: 'REQUIEM', duration: '5:10', poemSource: 'Horizonte de Sucesos', spotifyId: '3qMrAYHtJfPuzFjJYKlVlS', youtubeId: 'w9QCknuGguI' },
  { id: '13', title: 'REDES DE ACERO', duration: '4:00', poemSource: 'Horizonte de Sucesos', spotifyId: '06PoOZiCdUy3NjH2uWImSW', youtubeId: 'of5HS4zjmvY' },
  { id: '14', title: 'PURO AZAFRÁN', duration: '3:35', poemSource: 'Horizonte de Sucesos', spotifyId: '3tZS9WF4Q01TN1ZXOlrIGU', youtubeId: 'gAr-1cMfeY4' },
  { id: '15', title: 'GRAN DUQUE', duration: '4:40', poemSource: 'Horizonte de Sucesos', spotifyId: '4t2opuTrSsOEi3m49qkbbh', youtubeId: 'FomuB3WN5DQ' },
  { id: '16', title: 'ARBOL DEL SUEÑO INTERMINABLE', duration: '5:20', poemSource: 'Horizonte de Sucesos', spotifyId: '7EebH3UL5xBFvvUAbWMG2L', youtubeId: 'uoLH-FeRqyI' },
  { id: '17', title: 'LOBO', duration: '3:25', poemSource: 'Horizonte de Sucesos', spotifyId: '3TYJEIOMUL0nObaxL8iVRr', youtubeId: '9nMJ54g1a8Y' },
  { id: '18', title: 'COMPRA MI FRÁGIL VIDA', duration: '4:10', poemSource: 'Horizonte de Sucesos', spotifyId: '3SWh3FyfF3qD4ZlltEs2kW', youtubeId: 'GQ25SITUOzE' },
  { id: '19', title: 'TOQUE DE CAMPANAS', duration: '4:55', poemSource: 'Horizonte de Sucesos', spotifyId: '17lHmpRq9N6f9WRrAV8MOE', youtubeId: '36FcnqltkAY' },
  { id: '20', title: 'KEIKO', duration: '3:40', poemSource: 'Horizonte de Sucesos', spotifyId: '2JWP6NXtce81y8aidndypo', youtubeId: 'XyhFye4ZCbE' },
  { id: '21', title: 'A 6500 AÑOS LUZ', duration: '4:30', poemSource: 'Horizonte de Sucesos', spotifyId: '5DMYd16NZrS2e9bwr9HzUS', youtubeId: 'ze8Pm0MvHJU' },
  { id: '22', title: 'HORIZONTE DE SUCESOS', duration: '6:15', poemSource: 'Horizonte de Sucesos', spotifyId: '2ffT8mrj1PKn8yZCKqL6qk', youtubeId: 'gsMr2C_jFGk' },
];

export const ART_PIECES: ArtPiece[] = [
  {
    id: '1',
    title: '40 Guitarras de Plata',
    medium: 'Óleo sobre lienzo',
    year: '2005',
    imageUrl: '/images/cuadros/40 GUITARRAS DE PLATA 2005.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '2',
    title: 'Abencerrajes',
    medium: 'Técnica mixta',
    year: '1997',
    imageUrl: '/images/cuadros/ABENCERRAJES 1997.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '3',
    title: 'Barco',
    medium: 'Óleo',
    year: '1999',
    imageUrl: '/images/cuadros/BARCO 1999.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '4',
    title: 'Composición I',
    medium: 'Tinta china',
    imageUrl: '/images/cuadros/COMPOSICION 1.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '5',
    title: 'Composición II',
    medium: 'Tinta china',
    imageUrl: '/images/cuadros/COMPOSICION 2.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '6',
    title: 'Torres Vedras',
    medium: 'Óleo',
    year: '1998',
    imageUrl: '/images/cuadros/CUADRO 2 Torres Exposición colectiva Torres Vedras, Portugal, 1998.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '7',
    title: 'El baile de la flor',
    medium: 'Técnica mixta',
    year: '1999',
    imageUrl: '/images/cuadros/EL BAILE DE LA FLOR. PEDRO GARCIARIAS y BELEN JUAREZ.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '8',
    title: 'Flor Tinta China',
    medium: 'Tinta china',
    imageUrl: '/images/cuadros/FLOR TINTA CHINA.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '9',
    title: 'Flor',
    medium: 'Tinta china',
    year: '1999',
    imageUrl: '/images/cuadros/FLOR. 1999.JPEG',
    aspectRatio: 'square',
    category: 'cuadros'
  },
  {
    id: '10',
    title: 'Hombre Elefante',
    medium: 'Carboncillo',
    year: '1990',
    imageUrl: '/images/cuadros/HOMBRE ELEFANTE 1990.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '11',
    title: 'Hotel Castelar Buenos Aires',
    medium: 'Técnica mixta',
    year: '1998',
    imageUrl: '/images/cuadros/HOTEL CASTELAR BUENOS AIRES 1998.png',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '12',
    title: 'Ilustración Ficciones I',
    medium: 'Tinta',
    year: '1999',
    imageUrl: '/images/cuadros/ILUSTRACION FICCIONES Especial primavera_verano 1999_1.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '13',
    title: 'Ilustración Ficciones II',
    medium: 'Tinta',
    year: '1999',
    imageUrl: '/images/cuadros/ILUSTRACION FICCIONES Especial primavera_verano 1999_2.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '14',
    title: 'Sin título (Guitarra)',
    medium: 'Técnica mixta',
    imageUrl: '/images/cuadros/IMG_1881.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '15',
    title: 'La Dama de la Capucha',
    medium: 'Técnica mixta',
    year: '1995',
    imageUrl: '/images/cuadros/LA DAMA DE LA CAPUCHA 1995.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '16',
    title: 'Reflejo en el espejo',
    medium: 'Óleo',
    year: '1999',
    imageUrl: '/images/cuadros/REFLEJO EN EL ESPEJO 1999.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '17',
    title: 'Rostro I',
    medium: 'Carboncillo',
    imageUrl: '/images/cuadros/ROSTRO 1.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '18',
    title: 'Rostro II',
    medium: 'Carboncillo',
    year: '1995',
    imageUrl: '/images/cuadros/ROSTRO 21995.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '19',
    title: 'Tinta I',
    medium: 'Tinta',
    imageUrl: '/images/cuadros/TINTA 1.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '20',
    title: 'Tinta II',
    medium: 'Tinta',
    imageUrl: '/images/cuadros/TINTA 2.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '21',
    title: 'Tinta III',
    medium: 'Tinta',
    imageUrl: '/images/cuadros/TINTA 3.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '22',
    title: 'Tinta IV',
    medium: 'Tinta',
    imageUrl: '/images/cuadros/TINTA 4.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  // BOCETOS A LÁPIZ
  {
    id: '23',
    title: 'Mujer I (Boceto)',
    medium: 'Lápiz',
    year: '1998',
    imageUrl: '/images/cuadros/Lapiz/MUJER 1 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '24',
    title: 'Mujer II (Boceto)',
    medium: 'Lápiz',
    year: '1998',
    imageUrl: '/images/cuadros/Lapiz/MUJER 2 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '25',
    title: 'Mujer III (Boceto)',
    medium: 'Lápiz',
    year: '1998',
    imageUrl: '/images/cuadros/Lapiz/MUJER 3 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  }
];

export const ILLUSTRATED_BOOKS: IllustratedBook[] = [
  {
    id: 'noches-azules',
    title: 'Noches Azules del Alma',
    year: '1999',
    description: 'Ilustraciones interiores para el poemario Noches Azules del Alma.',
    coverUrl: '/images/ilustraciones/Nochesazulesdelalma/PORTADA.jpeg',
    illustrations: [
      { id: 'na1', title: 'Ilustración I', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/1.jpeg', aspectRatio: 'portrait' },
      { id: 'na2', title: 'Ilustración II', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/2.jpeg', aspectRatio: 'portrait' },
      { id: 'na3', title: 'Ilustración III', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/3.jpeg', aspectRatio: 'portrait' },
      { id: 'na4', title: 'Ilustración IV', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/4.jpeg', aspectRatio: 'portrait' },
      { id: 'na5', title: 'Ilustración V', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/5.jpeg', aspectRatio: 'portrait' },
      { id: 'na6', title: 'Ilustración VI', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/6.jpeg', aspectRatio: 'portrait' },
      { id: 'na7', title: 'Ilustración VII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/7.jpeg', aspectRatio: 'portrait' },
      { id: 'na8', title: 'Ilustración VIII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/8.jpeg', aspectRatio: 'portrait' },
      { id: 'na9', title: 'Ilustración IX', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/9.jpeg', aspectRatio: 'portrait' },
      { id: 'na10', title: 'Ilustración X', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/10.jpeg', aspectRatio: 'portrait' },
    ]
  },
  {
    id: 'plaquette-ficciones',
    title: 'Plaquette Ficciones 4',
    description: 'Colección de ilustraciones para la Plaquette Ficciones 4.',
    coverUrl: '/images/ilustraciones/Plaquette_ficciones4/PORTADA.jpeg',
    illustrations: [
      { id: 'pf1', title: 'Plaquette I', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p1.png', aspectRatio: 'portrait' },
      { id: 'pf2', title: 'Plaquette II', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p2.png', aspectRatio: 'portrait' },
      { id: 'pf3', title: 'Plaquette III', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p3.png', aspectRatio: 'portrait' },
      { id: 'pf4', title: 'Plaquette IV', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p4(2).jpeg', aspectRatio: 'portrait' },
      { id: 'pf5', title: 'Plaquette V', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p5(2).jpeg', aspectRatio: 'portrait' },
      { id: 'pf6', title: 'Plaquette VI', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p6(2).jpeg', aspectRatio: 'portrait' },
      { id: 'pf7', title: 'Plaquette VII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p7(2).jpeg', aspectRatio: 'portrait' },
      { id: 'pf8', title: 'Plaquette VIII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p8b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf9', title: 'Plaquette IX', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p9b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf10', title: 'Plaquette X', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p10b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf11', title: 'Plaquette XI', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p11b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf12', title: 'Plaquette XII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p12b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf13', title: 'Plaquette XIII', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p13b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf14', title: 'Plaquette XIV', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p14b.jpeg', aspectRatio: 'portrait' },
      { id: 'pf15', title: 'Plaquette XV', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p15b.jpeg', aspectRatio: 'portrait' },
    ]
  }
];

export const ART_CRITIQUES: ArtArticle[] = [
  {
    id: 'critica-campus-1999',
    title: 'Rostros',
    author: 'Eva María Vicente Galán',
    publication: 'Revista Campus',
    date: 'Junio de 1999',
    extraInfo: 'Número 54, editada por la Universidad de Granada',
    coverUrl: '/images/Critica-artistica/Portada_CAmpus_numero_54_Junio_1999.jpeg',
    images: [
      '/images/Critica-artistica/revista_campus.jpg',
      '/images/Critica-artistica/rostro_de_perro.jpg',
      '/images/Critica-artistica/rostros.jpg'
    ],
    content: `En la Facultad de Ciencias expuso Belén Juárez sus "Rostros" hasta el 10 de Mayo. En torno a esta temática obsesiva, la joven artista ha desarrollado una interesante serie de trabajos que sienta claramente las bases de lo que en un futuro puede ser un más amplio desarrollo de las esotéricas ideas que dan forma y vigencia a esos recuerdos, premoniciones y sensaciones que impregnan totalmente su afán creador.

LA GRAN inquietud de Belén por expresar ese gran caudal de sentimiento artístico que la agita, esos "fantasmas" del pasado y del futuro, que ella intenta exorcizar con su gesto, esas formas enmarañadas que son un claro reflejo de esa visceral amalgama de ambigüedades que constituye en resumen la existencia, se ha manifestado claramente en esta reciente exposición, a lo largo de toda la obra expuesta, agrupada en tres series muy definidas, y que incluía además una sugerente escultura, evidente germen de futuras y más ambiciosas producciones.

En estas tres series: pastel, tinta y óleo, todas trabajadas sobre papel, se evidencia la clara determinación de la joven autora por progresar en el terreno del arte, en sus recursos matéricos y en sus conceptos de fondo y de forma. Y lógicamente, el gesto y el grafismo son una extraordinaria base, en los inicios de toda trayectoria artística, para el asentamiento de las bases cognoscitivas imprescindibles en este difícil ámbito. A veces con timidez, Belén Juárez se ha internado por el camino indicado por el que su propia intuición creadora le ha dictado. 

El negro es el protagonista indiscutible de estas misteriosas obras, en las que, más que organicidad, lo que se palpa es el frío metálico y deshumanizado de los submundos imposibles a los que puede abocar la mente humana. El negro, como adecuadísimo contrapunto a los tonos pastel, a los rotundos y vivos empastes de óleo, y como único definidor de esa especial dicotomía, que entre lo surreal y lo abstracto, lo Kandinskiano y lo postmoderno, caracterizan fundamentalmente la obra expuesta por Belén. El negro, como expresión de lo trágico como equilibrio y referencia entre las deshilvanadas masas cromáticas, que la joven pintora cohesiona gracias a él. Pues el color y las formas que éste puede sugerir, o definir con sus gradaciones, su interpretación, su profundidad y sus contrastes, es claramente el más duro reto que Belén Juárez tiene ahora por delante. En estas primeras concepciones, resulta grata la limpidez y el equilibrio que su sentido cromático manifiesta, y que evidentemente se acrecentarán y enriquecerán con la praxis, a medida que su evidente esfuerzo investigador vaya desarrollando nuevas y más comprometidas posibilidades técnicas, que darán cada vez mayor impulso a esa su indiscutible imaginación artística, poblada de rostros, de color, de trazos y de sentimiento.`
  }
];

export const BOOK_REVIEWS: BookReview[] = [
  {
    id: 'la-noche-de-ayer-extramuros',
    title: 'La Noche de Ayer',
    bookTitle: 'La Noche de Ayer',
    author: 'Enrique Villagrasa',
    publication: 'Extramuros, Nº26',
    date: '2002',
    coverUrl: '/images/resenas/Extramuros_PORTADA.jpg',
    condensedQuote: '[...] La poetisa, pintora, traductora, antóloga, crítica e investigadora de la Universidad de Granada, Belén Juárez, vuelve a sorprender a propios y extraños con la publicación de su segundo poemario, *La Noche de Ayer*. Una poesía moderna que tiene sentido del ritmo y educado oído... cuidadosa construcción externa y palabras bien delimitadas con exactitud de términos. De verdad que es todo un gran logro este poemario, de obligada lectura. [...]',
    fullContent: `Creo que Francisco Morales lomas tiene razón en *Poesía andaluza en libertad (una aproximación antológica a los poetas andaluces del último cuarto de siglo* (Corona del Sur) al señalar en la página 45 del estudio introductorio que «La poesía de la última década se caracteriza por la variedad, el desdén hacia la política, la preocupación por los temas sociales, la lírica metafísica o abstracta, el surrealismo, la poesía del rock, el realismo sucio, neobarroquismo, misticismo heterodoxo, culturalismo; en definitiva, las mismas tendencias que ya había experimentado la lírica de los ochenta, sin grandes aportaciones». Y mira tú por donde la poetisa, pintora, traductora, antóloga, crítica e investigadora de la Universidad de Granada, Belén Juárez (París, 1965), vuelve a sorprender a propios y extraños con la publicación de su segundo poemario, como tal, *La Noche de Ayer* (Alhulia), tras *Destierro en cuatro ángulos* (Devenir, 1999). Sorpresa grata, como veremos, tras nuestra lectura. Por las fechas en que apareció la citada antología es muy probable que Morales Lomas no conociese la poesía de Juárez, que sí aporta novedades y es una poesía moderna que tiene sentido del ritmo y educado oído, con endecasílabos y alejandrinos, en general, y como poeta conoce el lenguaje que maneja y sabe qué precisa concepción el poema necesita: cuidadosa construcción externa y palabras bien delimitadas con exactitud de términos y en donde desaparecen los espacios vacíos, de retórica grandilocuente y palabrería. De verdad que es todo un gran logro este poemario. *La noche de ayer*, de obligada lectura.

El poemario, cuidado de continente y contenido, como queda dicho cuenta con el acertado preliminar del poeta y crítico granadino Antonio Enrique, quien no duda en avisar de la peculiar estructura de la poesía de la autora.

*La noche de ayer* es un poemario bien estructurado, dividido en tres tiempos con diez poemas en cada parte. El libro está dedicado al poeta, al lector y a la poesía. Porque la poesía está escrita por el poeta y el poeta es en ella y en el lector: «Al poeta allá donde exista, allá donde sea, del mundo, del tiempo…, su hogar». Pautas ofrecidas por Juárez para que sepamos a qué atenernos en la lectura de esta noche de San Juan, fecha significativa de impresión del libro y de la poesía española universal, sin fronteras, con Juan de la Cruz a la cabeza y J.R.J y J.A. Valente. El primer tiempo lo abre una cita de Manuel Mantero: «Éranos niños, pájaros de cuenta./ Éramos lo que sobre de la tormenta, / sexo escupido, edén falsificado/ y lamentabilísima osamenta / de un dios en estertor, crucificado». El segundo tiempo lo abre la cita de José Hierro: «Cuando la vida se detiene, / se escribe lo pasado o lo imposible / para que los demás vivan aquello / que ya vivió (o no vivió) el poeta». Y el tercer tiempo está presidido por una cita de Miguel Delibes: «Al hombre, por el mero hecho de vivir, / le era necesario aprender antes a desprenderse / de todo con una sonrisa de escepticismo. / -Vivir es ir pendiendo me decía…» Creo que está claro por dónde camina la poeta y qué hallaremos en su noche, las citas muy cuidadas y acetadas dan buena cuenta de ello y el poema en cursiva que recorre el libro también: desde el poema cuarto (pág 26) del primer tiempo al verso final del poema treinta y último del libro.

Belen Juárez escribe una poesía donde habla de sus obsesiones estéticas y éticas: desde aquella cita latina del apresúrate despacio, del amor perdido, al mismo estar lejos de la ciudad que la vio nacer; emotivas y existenciales: recordar el ansiado paraíso perdido (de la infancia), el mundo de la noche vivida de ayer, del verbo acontecido y sus versos, en páginas y poemas grandemente meditados e hilvanados: «Tres verbos ceden al vacío su figura, » (pág 44); «el primero de los verbos define su buena intención / de conmover a los sensatos». (pág. 46) «El segundo de los verbos recrea los deseos / y sigue perturbando a los sensatos.» Y, el tercero de los verbos comprende a los otros, / entender su poco uso cuesta un tono de justicia.»

Creo que es la imagen de la lucha que sostiene Jacob con su Dios por lograr la bendición, imagen del combate espiritual como tal, y el sueño que tiene también Jacob al pie de la escalera por alcanzar la Luz, que es la imagen de poeta en su peculiar lucha con la poesía, por alcanzarla y ser bendecido por Ella. «Hubo una noche, perla de perlas (…) / de paraísos perdidos…» Es un libro cerrado, firme: no tiene nada de cuaderno de pruebas de un aprendiz en este oficio, lo domina bien este quehacer demiurgo: «Porque todo desde las estrellas se susurra, / y viene la medida a establecer su noche.»; para nada son apuntes, como en otras u otros del triste panorama poético español. Belén Juárez sabe quien es y ejerce de tal. Es poeta. «Conservo la belleza de estos años, / a mitad de precio. Y guardo en mágicos lenguajes / el placer de haber sido en el lugar de las hadas, / servidor de fábulas narradas. (…) ». Sabe el camino y el sendero que debe recorrer en y con su poesía: «Y por qué a consecuencia de tu amor / sigue este accidente de palabras…».

El libro con sus ecos diversos, plurales, con poemas que van desde los tres versos a los veintiiós versos de gran intensidad todos ellos, en los que actúa la filosofía más profunda en todos y cada uno, y tiene como hilo conductor la búsqueda de la poesía, como ya hemos visto con los verbos, de la pasión, del deseo, de la atracción por algunas realidades que están o recorren el poemario. «Holanda está lejos, y París y las estrellas,». Es un libro unitario en los tres tiempos. Es el mejor libro leído de finales del siglo pasado y abre una puerta enclavada en la realidad poética como palabra inventada: «Raro el momento de la lluvia que no moja», para este nuevo siglo, para la poesía escrita por mujeres y hombres a la poesía toda escrita en el panorama mundial, por lo que sé y conozco: «Sin embargo, queda la Poesía que consiguió crecer convirtiéndose en Dama a costa de la propia materia engendrada y desintegrada en los momentos, y éste, ciertamente, es el mayor de los honores a que puede aspirar El Poeta» (pág 126 de *Versos para un fin de Mileno*, Ayuntamiento de Motril).

Belén indaga en todo y por todo, existencia y demás mística del ser humano llámese como se llame y tenga la religión que tenga. Es una poeta que bebe de las fuentes de la poesía arábigo andaluza. «Piensa, Amor, que la garganta aún procura / los versos de ayer, y esta luz / me iguala a tu recuerdo…» (pág 43) para bien de todos los lectores y es que Granada con sus ecos, luces y sombras, tiene de nuevo una poeta, quien tiene presente *La noche de ayer*, la noche de la verdadera poesía no la de anécdota mal elevada por ellos y ellas a la categoría de poesía. Esto sí es poesía y lo demás son historias de periodistas metidos a reseñistas o de reseñistas metidos a periodistas, que de todo hay: «Cierto es que el amor lo destruye todo, / a pesar de su buen nombre…». Y Belén Juárez como Baudelaire puede decir «Je sens vibrer en moi todas las passions», o con sus palabras: «Brillar entre los peces, advierte que el amor existe».`
  },
  {
    id: 'un-mandala-de-libro-turia',
    title: 'Un mandala de libro',
    bookTitle: 'Destierro en cuatro ángulos',
    author: 'Antonio Enrique',
    publication: 'Turia nº 53',
    date: 'Junio, 2000',
    coverUrl: '/images/resenas/Turia_PORTADA.jpg',
    condensedQuote: '[...] Libro éste, cerrado, primigenio, cíclico, silente, sin tiempo. Volcado al futuro. Iniciático. Profético en lo que tiene de adivinación y, al mismo tiempo, elegiaco por el lamento hondo que subyace en su bella y severa impasividad. Los cuatro ángulos del tiempo, las cuatro esquinas del universo que a su propia destrucción y muerte asiste. [...]',
    fullContent: `Posee cuatro partes, acogidas a las materias cósmicas, y cada una de estas partes -tierra, agua, aire y fuego, por este orden- acoge a su vez doce poemas, titulados siempre lo mismo e igualmente distribuidos en análogo orden. El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran). Ahora bien, ¿en torno a qué idea o ideas oscila y se mueve este *Destierro en cuatro ángulos*, orbital y planetario? El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes. Los ejes, sin embargo, en torno a los cuales gira esta gran manzana del mundo transfigurada en libro, no son otros que la Nada y su enmascaramiento -contingente, banal- en la Vida. Estamos, pues, ante un texto iniciático: lo que se ve (y leemos) es símbolo de lo invisible, su forma transitoria. Y no es nada frecuente encontrar un libro así como ópera prima. Su autora, Belén Juárez, nació en París en 1965. Vive en Granada. Es, también pintora y traductora francesa, notoria y selectiva, corre a la par del espíritu de esa cultura, consistente en establecer un orden -estético, vital, mental- entre lo disperso; articular, en definitiva, lo visible en lo metafísico.

Libro, pues, así -digámoslo ya: mandálico, estático y cinético simultáneamente-, admite el caleidoscopio de dos lecturas distintas: diacrónica o vertical (por partes, de primera a cuarta) y sincrónica y horizontal (cada poema en sus cuatro tiempos). Me atrevo a sugerir esta última, como más esclarecedora. Si de este modo lo hacemos, podremos advertir no sólo la graduación de una misma idea rectora a través de cuatro tonalidades diferentes, sino la esferidad externa, su unidad de conjunto, su densidad extraordinaria. Bien evidente resalta que cada poema, inserto en cada una de las cuatro secciones, actúa a semejanza de un hueco en el ensamblaje de una rueda con otra, a cuyo movimiento se impulsan las restantes, en esta maquinaria tan terrenal como celeste; de hecho, unos mismos sintagmas («sandalias del pescador», «trono de la poca vergüenza», «morder los antebrazos», «cuerpos hermosos y no tan hermosos», etc) varían su posición de poema a poema igualmente titulados, en un movimiento imperceptible pero real, igual que las estrellas de magnitud semejante en un cielo nocturno. Quiero decir, existe un tiempo mental dentro de un orden cronológico: una prehistoria sísmica, correspondiente al tránsito de la larva al homo erectus («Me declaro invisible», «Es necesaria la guerra», «En Altamira»; una era de mitos, previa al establecimiento de la Ley («Tiempo de castidad», «No a los dueños de la no-palabra», «Sobra el destino»); la época de la razón y la conciencia del paso del tiempo («Vida», «Grayas en la juventud», «El recreo de Zeus») y otro terminal, de disolución del ego y desamparo ante esa esfinge de la Nada, encubierta por el azar («Cuento mi edad», «No al amor», «Necesito rezar»).

El estilo es críptico, la sintaxis abrupta, ritual el tono, coral la composición: la metáfora absorbente, brillante, seca, brusca, obsesiva. Porque la metáfora no sólo es aquí la configuración del mito esencial y la fragmentación del símbolo global de la existence, sino que se erige en propia norma de lenguaje, única vía para desvelar el sentido oculto de la vida. Por eso tiene algo de «zarza ardiente» esta concepción de la metáfora. La cual precisa de su propio ámbito expresivo: transiciones rápidas, omisión de los predicativos, fusión de las personas primera y tercera, adjetivación reducida, adverbialización mínima en el contexto. El lenguaje así se sustantiviza, *se mineraliza*. Todo él, sus elementos, se ordenan, se imantan hacia esa metáfora ancestral, sustitutiva de la Nada, siempre en relación con el ser: el Destierro. El destierro como destino y naturaleza. Somos dioses, fuimos dioses, lo seremos de nuevo cuando muramos.

Libro éste, cerrado, primigenio, cíclico, silente, sin tiempo. Volcado al futuro. Iniciático. Profético en lo que tiene de adivinación y, al mismo tiempo, elegiaco por el lamento hondo que subyace en su bella y severa impasividad. Gravita, levita. Envuelve. Invade, secuestra. Los cuatro ángulos del tiempo, las cuatro esquinas del universo que a su propia destrucción y muerte asiste. Una entropía que delimita sus confines.`
  }
];

export const PLAQUETTES: Plaquette[] = [
  {
    id: 'la-reflexion-de-boabdil',
    title: 'La reflexión de Boabdil',
    event: 'Día mundial de la Poesía',
    date: '21 de marzo de 2025',
    location: 'Recital en Librería sostiene Pereira, Granada',
    publication: 'Revista Alhucema, Colección libros',
    credits: 'Texto e ilustración: Belén Juárez',
    coverUrl: '/images/Plaquettes/Plaquette_portada.jpeg',
    illustrationUrl: '/images/Plaquettes/Plaquette_ilustracion.png',
    sections: [
      {
        number: 1,
        title: 'Ayúdale en nombre del profeta',
        content: `Roja tierra de ensanchados silencios,
abiertas oquedades en la lejanía de los ojos,
estimo las monedas del tiempo,
por no ser nadie en torpezas pasadas.
Vengo por los desiertos de mi presente,
y castigo mi galope con el sol que quema
mi ambigua estirpe día y noche,
y me enciendo en la muerte,
que mi vencido nombre bien anunció,
de las arenas el regreso.
Y dime, ¿qué puedo reprochar a mis hermanos,
que lucharon por tierra santa sin advertir,
la ira de los vergeles y mis jardines?
Ata a este hombre, o desátale, y
rinde al pensamiento dicha de descanso,
que estoy ya muerto,
y acaso no lo ves...`
      },
      {
        number: 2,
        title: '¡Ay de aquel que gozara en vida del paraíso mejor le fuera no haber nacido...!',
        content: `Ropa y agua a la tristeza entrego,
y fuerza para dormir la causa,
de estas mis manos ya teñidas de nada, pues
encuentro en mi fuego el recuerdo creciente
de esta aventura frente a la Sierra de las Nevadas.
Porque más valiera el olvido del rey de las luces.
El escudo de nazaríes en mi pecho tatuado,
me quema las pupilas por siempre apagadas.
Soy de los mortales la burla de la lejanía,
donde tanto mar acumuló paraísos de aromas, y
forestas invocadas al buen dios,
restando a los verdes goces, esta leyenda.
Porque soy Boabdil,
de mis amigos o enemigos,
el rey desventurado.... Abū Abd Allāh.`
      },
      {
        number: 3,
        title: 'Es verdad..., el agua y los surtidores lloraban por mí',
        content: `Alza la Torre en Vela de ruiseñores, y
asientan en siglos todo el honor de los cielos ocultos,
escrita la verdad de un rugir de melodías,
aquello que siento desde el alma,
fue soñado y velado en tiempos pasados.
Vuelvo a batir mis alas en las alas de mi sangre, y
a lo lejos sigo viendo,
las crecidas fuentes de patios y naranjos.
De mi Alhambra lloran surtidores, y
su sonido de voces atardece entre las aguas.
Y miro temeroso a mi abuelo ciego que,
sabio y paciente de todos los tiempos,
veía desde sus labios, las rosas de un dios,
anunciando paraísos cumplidos en ésta,
mi tierra pasada.
Con los ojos se nubla la sombra de los altares,
sin embargo, en mis ojos tras las rejas,
intuyo un mar de olvidos,
entre paños húmedos.`
      },
      {
        number: 4,
        title: 'La ambición de los tímidos resulta después la más segura',
        content: `¿Cuál es la sabiduría de un esposo
que trae a la danza la fidelidad de un linaje?
Poco recupero al pagar la Paz,
y mucho pierdo con el alza de un cuchillo
que me dio la guerra.`
      },
      {
        number: 5,
        title: 'Nada',
        content: `Nada es el deseo de torreones y aljibes,
nada la diestra de la justicia de un rey,
y mucho los graves de una voz de mujer, que
duerme en los brazos abiertos de la ambición de un reino.
Pues enamorada gana
bálsamos de mirra, sándalo y ámbar,
y toca la centella de un huerto de mieles.
Y mucho habré de pensar en los hermanos, que
edificaran banderas en la hermosura de un deseo.
Nada,
nada será el anuncio de romances castellanos...`
      },
      {
        number: 6,
        title: 'Que el saber sea vuestra riqueza',
        content: `Del conocimiento alcancé la dicha de
sabios que me amaron,
miro mis alfombras que callaron el roce de rodillas,
por no perturbar la densa suerte de la vida.
Porque el buen dios acertó en el fuego de Hefesto
que maldijo el barro de alfareros,
y otorgó lujos en divanes y otomanas,
a mi buena ventura de anchos muros y aposentos.
Ángeles en la luz, y reverencian
las cabriolas de éste, mi maestro de blancos,
que encerró entre mis manos,
la energía moral de la Sabiduría.
Niño era y niño soy en la dignidad de musulmanes,
y el mejor de mis valles, la dote de mi abuelo,
que me otorgó ser Maestro de Soberanos.
Un sabio sabe lo que vale un rey,
pero un rey no sabe lo que vale un sabio…
-me dijo en sueños Alí ibn Abí Tálib-
Vale pues, mi ruina en la conquista,
todo el oro y sedas de Damasco,
por un soplo de aquella voz de entendimiento,
que vistió en mis barbas todo el color de la prudencia.`
      },
      {
        number: 7,
        title: 'Tu regalo será este caballo',
        content: `Y perfection en los bienes a entregar,
que buen cordel de la mano de la templanza llevarás.
Pues no hubo asambleas de diligencias,
fui lázaro en mi honor de emir pequeño.
Acércate, - me dice la sabia fuente de las sorpresas-
acércate a los enemigos del Reino de Horizontes, y
anticípate al tacto de sus hedores de tierra infértil...
Y tú, mi querido Azor, entregarás
mi linaje a los mortales, y serás
príncipe que dona
a los señores de Castilla y Aragón en noble aceifa,
acendrados bienes de lunas y soles sarracenos,
y batirás en tu relincho,
éste, el motivo de mi realeza,
ésta, la sangre de mi sangre,
éste, mi reino cubierto de verdes glorias
de tiempos y ademanes...`
      },
      {
        number: 8,
        title: 'A veces la necesidad nos empuja hacia la Ciencia',
        content: `Lánguido influjo de paz,
otorgó a la razón todo el color de la Ciencia.
Aritmética trenzada en la condición
de noble aventura. Números arábigos
que danzaron entre pliegos,
dieron su vida a las lumbreras de mis torres.
Abrazo de Botánica y Física dejamos escrito
en favor de infieles y bizarros,
cual herencia y pago de esta tierra,
tejida en bellos silencios.
Y oración in aeternum regalada a Ciudad Santa,
como granada de rojas suertes.
Éste fue el último destino de aquel,
el primer mapa que aberró dichas posteriores,
al sol de venidas Españas.
Pues el Sancta Sanctorum y la locura de harenes
no fue suficiente,
las arcadas y baños en nombre del buen profeta,
no restaron la profunda admiración sagrada al orar.
Surgió de la Ciencia y de nuestro saber,
el primer pergamino que entregó direcciones
a vista de nopales, brezos y arroyos.
Y fuimos agradecidos desde el atrio de templos,
salones, torres, balcones y orillas,
fingiendo en áureos surtidores,
la confusa ilusión del buen dios de atardeceres.`
      },
      {
        number: 9,
        title: 'Porque tiene miedo...',
        content: `Abondos bienes que humillan
el azul de una raza,
y sírvanse abismos a las lanzas,
por los aceros que rendirán cristianos,
a la tierra oblicua de escorpiones.
Pues acepto la ira de los miedos, y
la parte de tributo sórdido que pretende
la parada de esta expedición.
Al-Zagal acedado en su lenguaje
de disciplina ciega y admitida,
a corduras y obediencias,
siente en sus venas de buen batiente,
el deseo de instigar revueltas a sol de estrellas.
Miro y me blando en el aciago cristiano,
que no cubre su caballo de nobles acitaras,
miro sus ojos arrugados de hambre,
y brinco en mi montura las luces de mi honor.
Porque mucho habré de llorar desde mi herencia,
llorar como hermosa mujer,
suspirar como hombre rendido,
y largo será el día,
por las templadas acequias de mi memoria,
hasta el confín de todos los futuros… venideros.`
      }
    ]
  }
];

export const SHORT_STORIES: ShortStory[] = [
  {
    id: 'al-otro-lado-del-mundo',
    title: 'À L´AUTRE DU MONDE',
    subtitle: 'Relatos de inmigración',
    year: '2008',
    publicationInfo: 'El tam-Tam de las nubes. Pag 107-123.',
    synopsis: 'Un trasvase emocional y geográfico desde el París de los años 60 hasta las raíces andaluzas. La memoria de una niña de siete años y el mítico Citroën DS-21 "Tiburón" se entrelazan en una épica del destierro y el reencuentro.',
    coverUrl: '/images/relatos/Al_otro_lado_del_mundo/PORTADA EL TAM TAM.jpeg',
    coverPosition: '90% 100%',
    pdfUrl: '/downloads/relatos/al-otro-lado-del-mundo.pdf',
    sections: [
      {
        title: 'I',
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/1tiburon.png',
        content: `ERAN LAS CUATRO de la madrugada cuando abandonó su país. El gran tiburón blanco DS-21 aparcado frente a la casa esperaba apaciblemente el que sería su último gran viaje. Sabía que se dirigiría hacia una muerte tan cierta como real, su condición de automóvil de gasolina y la inminente revolución del petróleo de los últimos meses lo condenaban sin más. Su lomo blanco curvado reflejaba el brillo de las luces de la calle, y sus grandes ojos de cristal-plomo desprendían un calor que condensaba las heladas gotas de lluvia de la noche sobre sus retinas. Eran las ilusiones y vivencias compartidas las que le mantuvo fiel a la familia, tal vez como un miembro más, de metal, sin alma, ni testigo de vida, y sin embargo presentía —de algún modo— que sería su último viaje. Así lo supo ella cuarenta años después. Por aquellos años, aquel gran tiburón se transformaba en sus sueños en un ser animado, compañero de miles de aventuras; ambos eran caminantes de barro por las viejas calles de *París*, como exploradores de una ciudad infinita que ofrecía el encanto del anonimato. Ambos eran, la niña y el soldado cartilaginoso enfundado de invencible acero y elegantes cueros.  La pequeña Lilie descubría el mundo a través de sus ventanillas, mientras él corría como la luz sobre sus anchas ruedas de níquel que ella imaginaba como cuatro veloces caballos, capaces de adentrarse por las múltiples calles del viejo *París*. Eran paseantes del *Barrio Latino*, de la *plaza de La Concordia*, del *Puente de los Artistas*, del *Arco del Triunfo*, por los *Campos Elíseos*, ella bullendo sus fantasías, hablando con él, su pelo suelto, sus abrigos de punto trenzado, sus ojos tan negros y tan curiosos, despertando al mundo.`
      },
      {
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/5 tiburon.png',
        content: `Sintió rugir su motor, como la respiración de un gigante mientras unos brazos la envolvían en una manta protegiéndola del frío de la noche; la fiebre le hacía sudar intensamente, acusaba una tremenda gripe desde hacía varios días que le cerraba los puños y los ojos, como un intento desesperado de su subconsciente, demorando la partida, agarrándose al aire, a sus aventuras y a la casa que dejaba atrás en el 23 de la *rue Championnet*. Aquella niña de siete años no podía imaginar que en los años venideros lloraría una y mil veces por todo lo que abandonaba. Levantó la mirada por última vez hacia la ventana de su amiga judía a quien no volvería a ver nunca más, mientras se acomodaba en el regazo de su protector que la llevaría muy lejos, presagiando un futuro incierto. Aquella invernal madrugada fue como la primera frase escrita de su memoria. Se sintió consciente de saberse habitante de un mundo extrañamente amable que le invitaba a la ruptura brutal con su pasado francés, un mundo disfrazado de azar civilizado.
     El fiel escualo blanco apagó sus luces interiores, empezó a avanzar por el corredor de los dos mil kilómetros, como última misión que cumpliría por su niña; la llevaría al otro lado de la frontera, a cruzar el mar de la civilización, la devolvería a sus orígenes, cumpliendo fielmente su última hazaña vital. Ella miró hacia atrás y vio difuminarse las aceras de su calle, los muros grises de piedra, la gran farola de luz tenue, la que fue tantas veces mástil de su castillo tras la ventana de su habitación. Vio perderse en el horizonte negro la tienda de ultramarinos, la barbería, el colegio y las altas cancelas inmóviles de todos sus amigos. Iba en su gran tiburón albino a atravesar el mundo, no sintió miedo, pero sí una gran desesperanza por el sufrimiento de las horas que avanzaban hacia la despedida al final del viaje. Él moriría para siempre, y ella nacería nuevamente en otro lugar desconocido.`
      },
      {
        title: 'II',
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/AVION 2.png',
        content: `Muchos años atrás su padre se compró un reloj en Sevilla. Fueron meses ahorrando con su escaso salario de soldado lo que le permitió conseguir aquel reloj, y más tarde el que le hizo comprender que las horas eran una trampa mortal, que el tiempo era el traje donde se diseña el destino de las personas, que las horas avanzaban sin más para todos. Cada vez que miraba su fantástico reloj sentía que estrenaba un segundo de su vida, un tiempo que escapaba de sus manos sin que él pudiera detenerlo. Se sentía incómodo y atrapado dentro de aquella mezcla de miseria y tiempo. Su juventud se gastaba y la vida con él. ¿Qué podía hacer? De cara al desarrollo social, las ofertas en aquel tiempo eran escasas, apenas un sector de la población de aquel país podía permitirse el lujo de comer caliente todos los días; corrían los tiempos de la postguerra y las hambrunas de tantas y tantas personas eran tan habituales como los amaneceres. Por eso, en un principio, asintió continuar con la tradición familiar militar. Buscarse un medio de vida, fuese cual fuese, era una prioridad. Sin embargo aquel reloj que tantas veces lució orgulloso en su muñeca los fines de semana con sus compañeros de academia, el que le hizo sentirse importante con las muchachas, y que pocos meses después le robarían de su taquilla, fue tal vez el que dio un giro de 180 grados asu vida; pensaba que el tiempo es robado por el mismísimo Tiempo, sin que nadie pueda denunciarlo ni pararlo. Aquel reloj, marcaría el destino venidero de los siguientes veinte años, despertó en él el valor de tomar la más importante decisión en su vida: abandonar su recién estrenado salario de oficial, sus compañeros, su familia, y su hogar andaluz.

     —Padre, quiero marcharme.
     —¿Quieres marcharte? ¿dónde?
     —A Francia. Un par de amigos y yo hemos decidido irnos, aquí se gana una miseria de sueldo, y nos han hablado de que en Francia las cosas son diferentes, quiero comprobar esa verdad que dicen de la República.
     —Hijo, tú no irás a ninguna parte! Aquí tienes tu puesto de trabajo, tu familia, ¿acaso no has conseguido lo que deseabas? ¿Acaso destripar aviones de combate no era lo que querías? Has logrado poder vivir de eso, y ahora ¿dices que te vas? ¿Abandonas todo? ¡Tú no irás a ninguna parte! Lo digo yo, que soy tu padre y no se hable más!
     —Padre, me marcho. Aquí me ahogo entre tanta miseria, a la gente no se le permite pensar, conocer, quiero saber qué hay más allá de esta pura verdad tan falsa. Y juro que volveré, un día volveré, no sé si lejano, y podrá usted sentirse orgulloso de su hijo. Juro que lo haré.`
      },
      {
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/joven 1.jpg',
        content: `Aquella conversación fue tortuosa para él. Nunca había desobedecido a su progenitor, nunca antes se había atrevido a tomar una decisión tan vital sin el consentimiento de su padre, un hombre de mediana estatura, rasgos duros y marcados por los fríos de tantos amaneceres. Para su padre, todo giraba alrededor de la familia. ¿Acaso había algo más por lo que luchar? Sus siete hijos y una dócil esposa eran todo su mundo. No podía aceptar que el benjamín de su casa rompiera con la tradiciones, ¿qué sería de él?
     La amargura se levantó con él aquella mañana. El viento sacudía las hojas de tabaco colgadas en el secadero, cerca de su casa. Pudo percibir un aroma dulce de incertidumbre de aquellas hojas de tabaco negro agitando el silencio de las primeras luces del día, anunciando que su hijo menor se marchaba. Entre sus pensamientos bullía la idea punzante, hiriente, de que tal vez su hijo tenía razón, pero él no podía admitirlo, su enfado era inminente. Sintió rugir un motor imposible de arrancar a pocos metros de su ventana, un hombre sin identidad intentaba desesperadamente arrancar el furgón con el que iba todos los días al mercado a vender sus hortalizas. Aquel motor de garganta oxidada parecía mostrarle todas las razones por las que su hijo quería marcharse. Aquí no hay nada, más que súplicas al azar para poder arrancar el motor de la supervivencia día tras día. La autoridad de ser el cabeza de familia era la única arma que poseía para defenderse de aquel mundo de afiladas aristas, tan gris como las mil rayas de su traje de los domingos. Sobrevivir y mantener unida a la familia era su ley, la razón para la que nació, y sin embargo ahora su hijo se marchaba. A conocer mundo, decía... ¿Qué mundo existe fuera de esta selva de motores inservibles? Su semblante serio mostraba repulsa a aquella aventura que pretendía su hijo, sin embargo pensaba en su fuero más interno que tal vez él habría hecho lo mismo con cuarenta años menos.`
      },
      {
        title: 'III',
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/joven 7.jpg',
        content: `Dos amigos, una maleta, la disciplina que aprendió en la academia y un diccionario. Ese fue todo el equipaje que le robó a su país. Atrás quedaban las noches alrededor de la lumbre, las charlas y las risas con sus hermanos mayores, la bondad de los calcañales de pan y el aroma de la leche de cabra que hervía su madre por las mañanas. Atrás quedaron las muchachas que sonreían y suspiraban por el azul de sus ojos, el sonido del agua de las fuentes de *Granada*, y la música de los motores de tantos aviones a los que les había visto las entrañas. Atrás y hacia delante. Sus pensamientos se movían como un pesado péndulo bajo el vértigo de la conciencia, y sin embargo jamás sintió miedo, jamás pensó en desistir. Su vida empezaba ahora, y lucharía por conseguir todo a lo que aspiraba. Lucharía por la única mujer que verdaderamente amaba desde niño, la que dejaba atrás a la suerte del destino, la única mujer por la que hacía todo esto. Por ella volvería un día conduciendo un flamante coche para llevarla a ese mundo que él trataba de descubrir para ella.
     No quiso perderse ni un solo detalle de todas aquellas ciudades por las que el tren viajaba. Se sentía caliente como la sangre por las venas de un nuevo país, veloz e insignificante en aquel cuerpo extraño por el que se adentraba. A veces el sueño le vencía, y dormía algunas horas sentado en el asiento de segunda que le rompía los huesos, pero ningún cansancio acusaba; cuando volvía a abrir los ojos, sus amigos dormían, mudo atrapaba en sus retinas a las gentes, las casas tan diferentes, los letreros luminosos. Estrenó su diccionario nada más atravesar la frontera, necesitaba saber y saber, comer y beberse aquel país... por todo ello no dejaba de mirar anuncios y traducirlos, uno tras otro. Cualquier cosa era importante.
     — S'il vous plaît, les billets...! a lo que él respondió: —les voilà, monsieur.
     Esas fueron sus primeras palabras en francés! Para el recaudador era una rutina más, y seguramente ni reparó en la expectación de los ojos de aquel muchacho que lo miraba con tanto ánimo y curiosidad. Guardó aquellos billetes y aquel ceñido rostro en su memoria durante largos años, y a pesar de que nunca hablaría de sus primeras sensaciones, aquellas palabras las recordaría siempre como la primera frase escrita del segundo capítulo de su vida.`
      },
      {
        title: 'IV',
        content: `París lo devoró aquella noche. Un trozo de queso graso, pan y charcutería adornaban humildemente la mesa de aquella familia gallega como exquisitos manjares del nuevo país. Pedro, un refugiado de la Guerra Civil y amigo de un tal Luis que vivía en Granada ya estaba bajo aviso de que tres chavales algo mayores de veinte años llegarían aquella noche a París. Los otros dos tenían conocidos directos pero el que venía de la Academia de Aviación iba a la aventura. Le pidió con gran fervor que lo acogiera cuando llegara, que era un buen muchacho, como de la familia. El tal Luis había conocido a Pedro, un primo segundo de su mujer, algunos años atrás en Galicia, y por esos azares de la vida cultivaron una gran amistad que duraría muchos años después. Por todo ello, Pedro acogió aquella noche en su casa al muchacho de Granada. Si venía de parte de Luis, era de confianza.
     —¿Como está mi buen amigo Luis?
     —Allí sigue. Le dije que se aventurara con nosotros, pero no ha podido ser. Ya sabe usted, las cosas de la familia y con dos chiquillos en el mundo...
     —Claro, y mi prima Paquita que no hay quien la mueva, ¿verdad?
     —Hombre, yo qué sé..., que quiere que le diga, de puertas adentro yo ni pregunto...
     —Mira, muchacho, si no le tienes miedo al trabajo, aquí te irá bien. Los gabachos son muy suyos, pero si te haces con sus costumbres y te acomodas en sus modales, no tendrás problemas y en muchas cosas terminarás pensando como ellos. La "Légalité" y la "Fraternité" son ideas impresas en todo corazón de un buen francés.
     Pedro vivía en París desde hacía una década, había huido de las balas nacionales casi por casualidad. La guerra le sorprendió —como a muchos españoles— en la tasca de su pueblo gallego, donde cada noche se reunían los cuatro amigos a desahogarse y a hablar del malestar social y del trasfondo político que avanzaba a marchas forzadas. Se presagiaban los últimos coletazos del Bienio Negro que ahogarían para siempre a la República y mancharía de sangre las infinitas calles de España.
     Miguel escuchaba con gran pesadumbre y trastorno las razones por las que aquel hombre había abandonado Galicia. En su caso, las cosas eran diferentes, él no huía del grito de ningún disparo, sin embargo la muerte de metal que describía su recién estrenado amigo le sangró las entrañas, sintió la tristeza de aquella familia y la de otras muchas familias anónimas desplegadas por toda Europa: estaba conociendo España desde la trastienda.`
      },
      {
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/joven 8.jpg',
        content: `Aquella noche cayó rendido en la cama, soñaría que ya hablaba perfectamente francés, que su decisión había sido acertada y que aquel país tal vez le ofrecería la verdad de una España que nadie le había mostrado anteriormente. Todo esto pensaba mientras iba quedándose dormido bajo el olor a jabón de Marsella de las suaves sábanas blancas.`
      },
      {
        title: 'V',
        content: `Siete años, dos patrones y posteriormente un floreciente negocio propio. Michel, que así se llamaba ahora, vivía al norte de París en su propia casa, hablaba correctamente francés, vestía gabanes y sombreros de ala corta, conocía cada rincón, cada tertulia del viejo París nocturno y pensaba como ellos, tal como le había dicho su amigo Pedro que le sucedería. Atrás quedaron las incertidumbres de los primeros años, la inocencia de aquel muchacho aventurero y revoltoso. Se sentía triunante. Todo el esfuerzo y las dificultades que tuvo que superar años atrás le hicieron amar el tiempo, cada minuto de aquellos siete años se habían multiplicado por diez, el vértigo de las sensaciones, las emociones y todo lo que había descubierto día a día le hacían gozar de su condición de emigrante afrancesado. Sin embargo, algo hervía en su cerebro. Entre sus pensamientos y a destiempo, se dibujaba la silueta de aquella hermosa muchacha de ojos color miel y pelo dorado que años atrás había dejado en tierras granadinas. ¿Qué habría sido de ella? Seguramente se habría casado —pensaba—, pero algo le decía que debía intentar volver a verla. Pronto volvería a Granada, como hacía en vacaciones todos los años y esta vez trataría de averiguarlo. Ella alcanzaba ahora los veintiún años, desde hacía casi diez no la había visto, la recordaba como una niña de largas trenzas y vestidos bordados de pequeñas flores.
     — Madre, recuerda usted a María, la hija de Don Ramón y Doña Concha?— Claro, hijo mío...
     — ¿Por dónde anda? Me gustaría saludarla y recordar viejos tiempos y preguntarle por su hermano Ramón que era buen amigo mío, sabe usted...
     — Claro, claro.. su hermano, buen chaval, ahora es sacerdote en Guadix. Qué gran muchacho, sí...
     La madre sonrió levemente con disimulo, al tiempo que mantenía su talante sobrio y correcto de buena señora, sin embargo conocía bien a su hijo y percibía el interés que sentía por aquella muchacha. De una manera sutil le estaba pidiendo consejo para acercarse a aquella joven por la que veía los vientos. Ella sabía que Miguel, ahora convertido en un apuesto hombre amaba a aquella mujer, la mujer de sus sueños, y no veía con malos ojos la posibilidad de que esa unión se llevara a cabo.
     La buscó en su pueblo. Subió a las *Alpujarras* a visitar a una hermana de su padre, más que nada, como quien no quiere la cosa, a saludar a la familia...
     Enfundado en su traje color canela, y conduciendo un Citroën ID-19 rojo aparcó en la plaza del pueblo. No quiso preguntar por ella nada más llegar, no era correcto abordarla sin más, —pensaba—, debe parecer "natural", como un encuentro casual.... Nervioso, intuía que ella tenía ya conocimiento de su llegada. ¿Qué casa habitaría ahora? Se sintió todavía más nervioso al averiguar que aún vivía en casa de sus padres, este hecho le invitaba a la ocasión perfecta para su propósito: Iría también a saludar a su antiguo maestro de escuela, el padre de María.
     — María, ¿recuerdas a Miguel? Tráele unos rosquillos y una copa de aguardiente a este muchacho, ¡Ah..! ¡Qué tiempos aquellos! Miguel, cuando no te entraban las matemáticas y te las metía en la cabeza a base de leña, ¿verdad hijo???
     —¡Claro, claro.. Don Ramón y bien que se lo agradezco..! gracias a su empeño y su constancia aprendí "matemáticas"...`
      },
      {
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/novia 2.jpg',
        content: `El pobre Miguel sudaba al recordar la regla que tantas veces midió aquel hombre sobre sus manos, el licor de anís le quemaba la garganta a la vez que su corazón saltaba, latiendo desesperadamente cada vez que María le regalaba su bellísima sonrisa. Se había convertido en una hermosa mujer de largos cabellos dorados, y piel de nácar. Su esbelto cuerpo rozando la perfección le cegaba los ojos y la mente. Un suave temblor en su mano delató su amor. Ella seguía sonriendo, sentada alrededor de la mesa, al lado de Doña María, la mujer de semblante igualmente bellísimo, y que años atrás un maestro de pueblo recién llegado de Córdoba logró robar al corazón de las Alpujarras.
     Don Ramón alargó la visita. — Quédate a cenar Miguel y nos cuentas tu vida en París, ¿a qué te dedicas allí?—
     Miguel sudaba más aún, la mano que tantas veces le castigó cuando era niño, ahora le brindaba quedarse a cenar. Asintió y agradeció la invitación. Aquel sería uno de los días más significativos de su vida. Al pronto todos los "regletazos" sobre las palmas de sus manos se convirtieron en rojos corales, un tesoro que nunca más abandonaría. María era su pasión, y ahora aquel hombre sonreía por primera vez frente a él.`
      },
      {
        title: 'VI',
        content: `Lilie nació con un aspecto feísimo. Eran las tres de la tarde de un invernal día parisino. La pequeña tenía unos ojos negros enormes, la piel arrugada y un pelo azabache más tieso que el esparto cubriéndole casi toda la cara. Tanto que la compañera de habitación de hospital de María la miraba de reojo susurrando a su marido: —¿cómo es posible que la niña sea tan fea? *et pourtant la femme est belle!!!* Fea y llorona. Así era la pequeña Lilie, como un pato negro recién salido de un cascarón blanco en tierras francesas.
     Sus primeras luces fueron grises, amaba el colegio, y vivía mil aventuras con sus amigos. Cosa de los genes, las matemáticas no le entraban. Por más empeño que su madre ponía, la tabla de multiplicar no había manera de metérsela en la cabeza. Sin embargo adoraba los cuentos. Le apasionaban las canciones de *Joe Dassin*, de *Sheila* y *George Moustaky*. Eran sus ídolos. A través de sus vinilos imaginaba vivir aquellas historias a la vez que inventaba nuevas situaciones. *"El extranjero"* de Moustaky, *"mon village du bout du monde"* de Joe Dassin, *"le Tam Tam du vent"* de Sheila..... y adoraba, además, los cuentos infantiles. Cada mañana de domingo, su padre la sorprendía con un cuento entre las sábanas y frente a su ventana, la que dejaba pasar la luz de la farola de su castillo inventado.
     Uno de aquellos cuentos la llevó a darle vida al gran tiburón blanco que siempre estaba aparcado frente a su casa. —
     ¿Cómo es eso? ¿La cenicienta iba en una calabaza tirada por cuatro corceles? ¡Eso no es verdad..! —seguía diciéndose para sí—. Lo que realmente sucedió fue que Cenicienta, que era una niña francesa, un día se fue con su hermana mayor a pasear por el *Sena* en un *bateau-mouche*. Allí conoció a *Pierre Antoine* que luego se casaría con su hermana y allí vio un gran pez con escamas plateadas que levantó la cabeza y miró a la cenicienta. (que por cierto no se llamaba cenicienta sino... mmm... Claudine!). El pez le suplicó que le ayudara a salir del *Sena*, a encontrar la salida al mar y ella le dijo que continuara la dirección de la corriente. Al poco tiempo, el pez agradecido pactó con la luna que cedería parte de su vida si lo convertía en un ser veloz terrestre, que deseaba encontrar a la niña que le había salvado la vida, y la luna lo convirtió en un coche blanco majestuoso. Al poco tiempo el coche, tras buscar por las calles de todo *París*, aparcó frente a la casa de la niña que le había salvado la vida. Y ella lo reconoció mirando sus grandes ojos de luz-metal. Y colorín colorado... así es la historia de la verdadera cenicienta!
     Todo eso pensaba la pequeña Lilie, recreándose en sus cuentos, tan feliz de saber que aquel tiburón blanco era su amigo. El gran pez albino que rescató del Sena.`
      },
      {
        title: 'VII',
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/mujer tiburon.png',
        content: `Llovía intensamente sobre un asfalto que desprendía un intenso olor a combustible. Caminaba bajo las luces de las farolas parisinas salpicando los recuerdos de una infancia feliz devorada por el tiempo y la memoria. La sombra de su cuerpo sobre aquellas aceras marcaba cuarenta años de distancia y sin embargo, todos aquellos recuerdos y vivencias seguían intactos bajo sus sienes. ¿Qué habría sido de su amiga judía con las que tantas aventuras vivió? Al pronto un coche a gran velocidad la puso empapada. Enfadada levantó la mirada sobre la *avenida Kléber* por la que caminaba, *¿qué salvaje conducía así, sin ningún respeto a los transeúntes que pasean por las aceras?* Su rostro se tornó frío, la sorpresa invadió su cara mojada por las salpicaduras de aquel enorme charco lanzado brutalmente sobre ella con la fuerza de la aleta trasera de un enorme pez oceánico sobre las avenidas. No era él, pero sí uno que le recordaba a alguien. Aquel Tiburón DS-25 de tono metálico conducido posiblemente por algún millonario caprichoso corría a gran velocidad haciendo honor a su vejez tan perfecta, a un motor que rugía con la elegancia de un dios, con aquellos ojos luminosos y metálicos girando a voluntad, con aquella suspensión hidráulica que le hacía elevarse por encima del viento como un cóndor negro. No era él, pero su imagen estalló como un enorme grito en su cara mojada.
     A la mañana siguiente se levantó temprano, salió del *Hotel Etoile Trocadero* de la *calle Saint Didier* con la sensación de no saber qué esperaba ni qué encontraría. Se dirigió a la *boca de metro Boissière* siguiendo su camino hasta la *estación Hoche*. Una vez fuera, sobre la acera sintió como si un imán atrajera sus pasos hasta el 25 de la calle *Honoré d'Estienne d'Orves de Pantin*. Continuó caminando hasta por fin sentir que había llegado a un destino tan incierto como sorprendente. Entró en aquel recinto tras pagar una entrada de diez euros y donde se localizaba el *Centro Internacional del Automóvil*. Avanzó por un largo pasillo con la lentitud de sus cuarenta años de espera. Se detuvo frente a la puerta de una enorme sala de moqueta gris y paredes metalizadas. Unos inmensos faros, rasgados como el maquillaje de una mujer de los setenta se iluminaron, mirándola con estupor y alma grafítica. Allí estaba él, decorando la vida de un museo de antigüedades y reliquias, la cárcel en que había sido reclinado por su condición de animal de raza. Allí estaba él frente a Lilie convertida en mujer. Ella avanzó, acarició suavemente el lomo níveo de aquel gran tiburón pacífico de articulaciones estancadas por su quietud de los años. Abrió la puerta trasera, deslizándose en su interior con una clara sonrisa dibujada en su rostro, la puerta se cerró suavemente, silenciosamente desplegándose el telón de su infancia. En el asiento delantero estaba su padre coronado por una gorra de lana y pompón verde. A su lado, una bellísima mujer de pelo dorado y suave como la seda que volvió la mirada hacia ella sonriendo. Miró por la ventanilla, allí estaba el *manège de chevaux de bois*, aquel que tantas veces había columpiado su vértigo. Miró al frente y vio por el retrovisor un rostro de niña: Lilie estaba allí, la miraba con la inocencia de sus cortos años, con sus negros ojos tan limpios. Lilie estaba allí, tan triste, tan muda, derramando la lágrima que impregnaría el asiento trasero del coche, la lágrima del destierro, la lágrima de los años no vividos en el regazo francés de su gran tiburón blanco. Al pronto una canción de *Joe Dassin* empezó a sonar por la radio:
     
     *Mon village est loin,
     à l'autre bout du monde
     et ma maison n'est plus qu'une canción
     comme la neige,
     mes rêves fondent
     buvons, mes frères, les vagabonds.....*
     
     Su gran amigo le rasgó el corazón, le estaba cantando que su casa no había sido más que una canción, una débil canción sonando durante los últimos casi cuarenta años, atrapado en aquella inmortalidad de museo, añorando a su niña, y a veces deseando morir bajo el metal ferroso de alguna grúa o la decisión de algún magnate coleccionista de chapas...
     Sin dudarlo, al día siguiente compró aquel coche. Enfundada en un astracán y sombrero negro de terciopelo, se disfrazó de poder y ambición frente a aquellos vendedores sin escrúpulos que aplaudían la ganancia. Otro escualo ocuparía su lugar...`
      },
      {
        illustrationUrl: '/images/relatos/Al_otro_lado_del_mundo/mujer 3 se usa.png',
        content: `Volvieron a ser vagabundos por las viejas calles de París. *Su casa ahora ya no era una canción.* Su padre le estaba devolviendo el Tiempo que tantas veces marcó las horas sevillanas de su juventud, un tiempo que ahora se medía bajo el capó que escondía el corazón rugiente del más soberano de los automóviles diseñados en el siglo XX.

*Nunca más se deshizo de su escualo. Nunca más el destierro volvería a romper sus sueños...*`
      },
    ]
  },
  {
    id: 'helena-de-esparta',
    title: 'HELENA DE ESPARTA',
    subtitle: 'Y EN EL CENTRO, LA P E R S O N A / Diálogo de la fotografía',
    year: '2009',
    publicationInfo: 'Belén Juárez',
    synopsis: 'Una relectura del mito clásico desde una perspectiva íntima y personal donde Helena confronta su destino el día de su boda.',
    coverUrl: '/images/relatos/Helena_de_Esparta/Helena_PORTADA.jpg',
    sections: [
      {
        content: `Oscilan las horas de Menelao, como un tiempo de coordenadas elásticas atrapado entre los alborotados días de las tres coronas bien ganadas por el *príncipe de Troya*. Oscilan sus horas y los minutos como péndulos universales, por el tejido de la desdicha de un tiempo incapaz de definirse como *Presente*, *Pasado* o *Futuro*. Es el momento de los desposorios del rey de Esparta, donde el *Presente* –despiadado- improvisa la inocencia femenina, por ser *Ella* la más bella e inconsciente criatura del reino espartano. A su lado, *Himero* lo impregna sutilmente el vestido de deseo y pasión, decorándola de inmaculada belleza. Corona su mano derecha un ramo de encendidas pasiones, las que brotaron de la *manzana de oro* lanzada desde el Olimpo, rodando por el suelo hasta llegar gratuitamente a los pies de París. Ella, pues, será la *Dama de la inflexión de la Historia*, la llamaban *Helena de Troya*, sin embargo, ella nunca sospechó la sentencia de su destino incierto, el día de su boda.
     
     Y dijo a su esposo: —*El tiempo me venció con puños de plata. Sin vejez sobre mis años, —comprendí—, que el tiempo no derrota nuestros cuerpos, no declina hacia la muerte nuestras pasiones, mucho más nos castiga su presencia cuando nos revela la verdad de nuestro yerro. Y nuestra guerra, la que fue carne de la carne, ahora se extiende hacia el abismo al que invocas como extraña luciérnaga de mi pasado, con intensos ojos de lágrimas vencidas. Y eres 'el hombre del viento' al que amé desde mis vientres, al que amo desde mis palmas vegetales, eres la casa abierta donde fui hembra de ansiedad, feliz en la inocencia de los cortos días, como leño oloroso tras el fuego chispeante, eres mi leyenda la que nadie nunca pudo comprender. Me puede la templanza de la ley, me puede el rugir de tu ventura, me puede la puerta chirriante que siempre me abres al alba bajo el secreto de tu pan de nueces. Me pueden las aguas de mi libertad. La puerta, como el mar de mis espacios, diluida en este tiempo de extraños deseos...*
     
     Así pues, un día cualquiera sucedió que *Helena* desposó a *Menelao*, partiendo desde la casa blanca de sus antepasados, a favor de los deseos del Olimpo que todo lo improvisa y todo lo puede sobre los mortales.
     
     *«Oscilan las horas de Menelao como un tiempo de coordenadas elásticas, oscilan las horas blancas de todos los mortales hacia la incertidumbre de un tiempo para el amor llamado Dios...».*`
      },
      {
        illustrationUrl: '/images/relatos/Helena_de_Esparta/Imagen5.jpg',
        content: ''
      }
    ]
  },
  {
    id: 'sandrine',
    title: 'SANDRINE',
    subtitle: 'Relatos de París',
    year: '2008',
    publicationInfo: 'Belén Juárez',
    synopsis: 'Un relato breve sobre la bohemia parisina de los años 60, la música de trompeta y los encuentros inesperados a orillas del Sena.',
    coverUrl: '/images/relatos/Sandrine/sandrine_PORTADA.jpeg',
    sections: [
      {
        content: `La violencia de aquella noche me caló hasta los huesos; la ironía de lo imposible, a través de la fragancia del humo de cigarrillos dulces se filtró en mi presente, dejándome sobrecogido.
     
     Miraba, miraba y sólo veía la cadencia que aquel agujero desprendía: mesitas redondas salpicadas de sombreros, miradas tipo Chanel que iban y venían galopando sobre notas musicales danzarinas; gabardinas silenciosas sobre perchas de tres pies que desprendían el vaho de sus dueños adormilados, mientras éstos, sujetos a copas de champán francés iban más allá del escenario.`
      },
      {
        illustrationUrl: '/images/relatos/Sandrine/trompetista2.jpg',
        illustrationSize: 'sm',
        content: `Y allí estaba yo, tocando la trompeta, intentando aclarar las mentes de niñas de cuarenta y tantos años que, jugando a ser adultas, se reían con la historia absurda de sus acompañantes: monjas con sabor a canela, eso es, inocentes monjas con zapatos de tacón de aguja con la sola aspiración de llegar a inhalar elegantemente el humo de sus cigarrillos.`
      },
      {
        content: `Y allí estaba yo, fiel servidor de aquella fauna incoherente y bohemia, romántica y artista como era la vida nocturna del París de los años 60.
     
     Aquella noche, como todas las noches al finalizar mi actuación, me tomé la última copa en la barra del bar, guardé mi trompeta en la habitación trasera, y tras coger mi sombrero y mi gabán, me dirigí a pie a casa por las calles melódicas que encierra la ciudad del Sena.
     
     No supe llegar a casa, imágenes de otra infancia y el viejo sonido a acordeón desafinado me mostraron el camino del recuerdo: sí, unos recuerdos desatinados que trocaron unos momentos tan ordinarios como simples en mi vida. Mi sombrero voló, casi con desprecio hacia mi calva, yendo a depositarse sobre el dorso húmedo de una barca pintada de verde y granate que con suavidad se rozaba sobre uno de los duros y gélidos muros del Sena. Me arrastré por los mojados adoquines hasta intentar alcanzar mi ridículo sombrero cuando aquel dorso húmedo palpitó y sentí como todo mi cuerpo se cubría de vello erizado. Aquella barca se movía, no alegremente al son del cálido oleaje del Sena, sino con un cuerpo de mujer, serenamente y con paciencia. Mi cigarrillo rodó, obligándome a seguirlo con la mirada hasta justo detenerse sobre la inscripción ya casi ilegible en la proa de la barca. Doblemente me sobrecogí cuando pude leer el nombre de Sandrine, y recordé los meses felices que pasé junto a ella en el número 23 de la Rue Lapin Pierot. Pude alcanzar mi sombrero, totalmente calado, desteñido, y corrí lo más rápido que pude, mientras ella me repetía desde su tumba que todo era una absurda casualidad.
     
     No llegué a casa aquella noche, rendido a los brazos de la lluvia, caí recostado al pie de una farola de luz tenue y sin más me precipité hacia un sueño aliviador.`
      },
      {
        title: 'II',
        content: `Al día siguiente, tras olvidar lo sucedido, volví al ambiente decadente de mi lugar de trabajo, abrazado a mi trompeta me mezclé entre las miradas de las niñas grandes torturadas por los años y zapatos de tacón sin reparar en que una mujer, cálida y bella, se sentaba frente a mí con un cigarrillo rubio aplastado y mojado entre los dedos.`
      }
    ]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', iconName: 'Instagram' },
  { platform: 'Twitter', url: '#', iconName: 'Twitter' },
  { platform: 'Email', url: 'mailto:belen@example.com', iconName: 'Mail' },
];
