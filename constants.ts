import { Book, Collaboration, ArtPiece, Track, SocialLink, IllustratedBook, ArtArticle, BookReview, Plaquette } from './types';

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
    condensedQuote: '[...] La poetisa, pintora, traductora, antóloga, crítica e investigadora de la Universidad de Granada, Belén Juárez, vuelve a sorprender a propios y extraños con la publicación de su segundo poemario, La Noche de Ayer. Una poesía moderna que tiene sentido del ritmo y educado oído... cuidadosa construcción externa y palabras bien delimitadas con exactitud de términos. De verdad que es todo un gran logro este poemario, de obligada lectura. [...]',
    fullContent: `Creo que Francisco Morales lomas tiene razón en Poesía andaluza en libertad (una aproximación antológica a los poetas andaluces del último cuarto de siglo (Corona del Sur) al señalar en la página 45 del estudio introductorio que «La poesía de la última década se caracteriza por la variedad, el desdén hacia la política, la preocupación por los temas sociales, la lírica metafísica o abstracta, el surrealismo, la poesía del rock, el realismo sucio, neobarroquismo, misticismo heterodoxo, culturalismo; en definitiva, las mismas tendencias que ya había experimentado la lírica de los ochenta, sin grandes aportaciones». Y mira tú por donde la poetisa, pintora, traductora, antóloga, crítica e investigadora de la Universidad de Granada, Belén Juárez (París, 1965), vuelve a sorprender a propios y extraños con la publicación de su segundo poemario, como tal, La Noche de Ayer (Alhulia), tras Destierro en cuatro ángulos (Devenir, 1999). Sorpresa grata, como veremos, tras nuestra lectura. Por las fechas en que apareció la citada antología es muy probable que Morales Lomas no conociese la poesía de Juárez, que sí aporta novedades y es una poesía moderna que tiene sentido del ritmo y educado oído, con endecasílabos y alejandrinos, en general, y como poeta conoce el lenguaje que maneja y sabe qué precisa concepción el poema necesita: cuidadosa construcción externa y palabras bien delimitadas con exactitud de términos y en donde desaparecen los espacios vacíos, de retórica grandilocuente y palabrería. De verdad que es todo un gran logro este poemario. La noche de ayer, de obligada lectura.

El poemario, cuidado de continente y contenido, como queda dicho cuenta con el acertado preliminar del poeta y crítico granadino Antonio Enrique, quien no duda en avisar de la peculiar estructura de la poesía de la autora.

La noche de ayer es un poemario bien estructurado, dividido en tres tiempos con diez poemas en cada parte. El libro está dedicado al poeta, al lector y a la poesía. Porque la poesía está escrita por el poeta y el poeta es en ella y en el lector: «Al poeta allá donde exista, allá donde sea, del mundo, del tiempo…, su hogar». Pautas ofrecidas por Juárez para que sepamos a qué atenernos en la lectura de esta noche de San Juan, fecha significativa de impresión del libro y de la poesía española universal, sin fronteras, con Juan de la Cruz a la cabeza y J.R.J y J.A. Valente. El primer tiempo lo abre una cita de Manuel Mantero: «Éranos niños, pájaros de cuenta./ Éramos lo que sobre de la tormenta, / sexo escupido, edén falsificado/ y lamentabilísima osamenta / de un dios en estertor, crucificado». El segundo tiempo lo abre la cita de José Hierro: «Cuando la vida se detiene, / se escribe lo pasado o lo imposible / para que los demás vivan aquello / que ya vivió (o no vivió) el poeta». Y el tercer tiempo está presidido por una cita de Miguel Delibes: «Al hombre, por el mero hecho de vivir, / le era necesario aprender antes a desprenderse / de todo con una sonrisa de escepticismo. / -Vivir es ir pendiendo me decía…» Creo que está claro por dónde camina la poeta y qué hallaremos en su noche, las citas muy cuidadas y acetadas dan buena cuenta de ello y el poema en cursiva que recorre el libro también: desde el poema cuarto (pág 26) del primer tiempo al verso final del poema treinta y último del libro.

Belen Juárez escribe una poesía donde habla de sus obsesiones estéticas y éticas: desde aquella cita latina del apresúrate despacio, del amor perdido, al mismo estar lejos de la ciudad que la vio nacer; emotivas y existenciales: recordar el ansiado paraíso perdido (de la infancia), el mundo de la noche vivida de ayer, del verbo acontecido y sus versos, en páginas y poemas grandemente meditados e hilvanados: «Tres verbos ceden al vacío su figura, » (pág 44); «el primero de los verbos define su buena intención / de conmover a los sensatos». (pág. 46) «El segundo de los verbos recrea los deseos / y sigue perturbando a los sensatos.» Y, el tercero de los verbos comprende a los otros, / entender su poco uso cuesta un tono de justicia.»

Creo que es la imagen de la lucha que sostiene Jacob con su Dios por lograr la bendición, imagen del combate espiritual como tal, y el sueño que tiene también Jacob al pie de la escalera por alcanzar la Luz, que es la imagen de poeta en su peculiar lucha con la poesía, por alcanzarla y ser bendecido por Ella. «Hubo una noche, perla de perlas (…) / de paraísos perdidos…» Es un libro cerrado, firme: no tiene nada de cuaderno de pruebas de un aprendiz en este oficio, lo domina bien este quehacer demiurgo: «Porque todo desde las estrellas se susurra, / y viene la medida a establecer su noche.»; para nada son apuntes, como en otras u otros poetas y poetisas del triste panorama poético español. Belén Juárez sabe quien es y ejerce de tal. Es poeta. «Conservo la belleza de estos años, / a mitad de precio. Y guardo en mágicos lenguajes / el placer de haber sido en el lugar de las hadas, / servidor de fábulas narradas. (…) ». Sabe el camino y el sendero que debe recorrer en y con su poesía: «Y por qué a consecuencia de tu amor / sigue este accidente de palabras…».

El libro con sus ecos diversos, plurales, con poemas que van desde los tres versos a los veintiiós versos de gran intensidad todos ellos, en los que actúa la filosofía más profunda en todos y cada uno, y tiene como hilo conductor la búsqueda de la poesía, como ya hemos visto con los verbos, de la pasión, del deseo, de la atracción por algunas realidades que están o recorren el poemario. «Holanda está lejos, y París y las estrellas,». Es un libro unitario en los tres tiempos. Es el mejor libro leído de finales del siglo pasado y abre una puerta enclavada en la realidad poética como palabra inventada: «Raro el momento de la lluvia que no moja», para este nuevo siglo, para la poesía escrita por mujeres y hombres a la poesía toda escrita en el panorama mundial, por lo que sé y conozco: «Sin embargo, queda la Poesía que consiguió crecer convirtiéndose en Dama a costa de la propia materia engendrada y desintegrada en los momentos, y éste, ciertamente, es el mayor de los honores a que puede aspirar El Poeta» (pág 126 de Versos para un fin de Mileno, Ayuntamiento de Motril).

Belén indaga en todo y por todo, existencia y demás mística del ser humano llámese como se llame y tenga la religión que tenga. Es una poeta que bebe de las fuentes de la poesía arábigo andaluza. «Piensa, Amor, que la garganta aún procura / los versos de ayer, y esta luz / me iguala a tu recuerdo…» (pág 43) para bien de todos los lectores y es que Granada con sus ecos, luces y sombras, tiene de nuevo una poeta, quien tiene presente la noche de ayer, la noche de la verdadera poesía no la de anécdota mal elevada por ellos y ellas a la categoría de poesía. Esto sí es poesía y lo demás son historias de periodistas metidos a reseñistas o de reseñistas metidos a periodistas, que de todo hay: «Cierto es que el amor lo destruye todo, / a pesar de su buen nombre…». Y Belén Juárez como Baudelaire puede decir «Je sens vibrer en moi todas las passions», o con sus palabras: «Brillar entre los peces, advierte que el amor existe».`
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
    fullContent: `Posee cuatro partes, acogidas a las materias cósmicas, y cada una de estas partes -tierra, agua, aire y fuego, por este orden- acoge a su vez doce poemas, titulados siempre lo mismo e igualmente distribuidos en análogo orden. El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran). Ahora bien, ¿en torno a qué idea o ideas oscila y se mueve este Destierro en cuatro ángulos, orbital y planetario? El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes. Los ejes, sin embargo, en torno a los cuales gira esta gran manzana del mundo transfigurada en libro, no son otros que la Nada y su enmascaramiento -contingente, banal- en la Vida. Estamos, pues, ante un texto iniciático: lo que se ve (y leemos) es símbolo de lo invisible, su forma transitoria. Y no es nada frecuente encontrar un libro así como ópera prima. Su autora, Belén Juárez, nació en París en 1965. Vive en Granada. Es, también pintora y traductora francesa, notoria y selectiva, corre a la par del espíritu de esa cultura, consistente en establecer un orden -estético, vital, mental- entre lo disperso; articular, en definitiva, lo visible en lo metafísico.

Libro, pues, así -digámoslo ya: mandálico, estático y cinético simultáneamente-, admite el caleidoscopio de dos lecturas distintas: diacrónica o vertical (por partes, de primera a cuarta) y sincrónica y horizontal (cada poema en sus cuatro tiempos). Me atrevo a sugerir esta última, como más esclarecedora. Si de este modo lo hacemos, podremos advertir no sólo la graduación de una misma idea rectora a través de cuatro tonalidades diferentes, sino la esferidad externa, su unidad de conjunto, su densidad extraordinaria. Bien evidente resalta que cada poema, inserto en cada una de las cuatro secciones, actúa a semejanza de un hueco en el ensamblaje de una rueda con otra, a cuyo movimiento se impulsan las restantes, en esta maquinaria tan terrenal como celeste; de hecho, unos mismos sintagmas («sandalias del pescador», «trono de la poca vergüenza», «morder los antebrazos», «cuerpos hermosos y no tan hermosos», etc) varían su posición de poema a poema igualmente titulados, en un movimiento imperceptible pero real, igual que las estrellas de magnitud semejante en un cielo nocturno. Quiero decir, existe un tiempo mental dentro de un orden cronológico: una prehistoria sísmica, correspondiente al tránsito de la larva al homo erectus («Me declaro invisible», «Es necesaria la guerra», «En Altamira»; una era de mitos, previa al establecimiento de la Ley («Tiempo de castidad», «No a los dueños de la no-palabra», «Sobra el destino»); la época de la razón y la conciencia del paso del tiempo («Vida», «Grayas en la juventud», «El recreo de Zeus») y otro terminal, de disolución del ego y desamparo ante esa esfinge de la Nada, encubierta por el azar («Cuento mi edad», «No al amor», «Necesito rezar»).

El estilo es críptico, la sintaxis abrupta, ritual el tono, coral la composición: la metáfora absorbente, brillante, seca, brusca, obsesiva. Porque la metáfora no sólo es aquí la configuración del mito esencial y la fragmentación del símbolo global de la existence, sino que se erige en propia norma de lenguaje, única vía para desvelar el sentido oculto de la vida. Por eso tiene algo de «zarza ardiente» esta concepción de la metáfora. La cual precisa de su propio ámbito expresivo: transiciones rápidas, omisión de los predicativos, fusión de las personas primera y tercera, adjetivación reducida, adverbialización mínima en el contexto. El lenguaje así se sustantiviza, se mineraliza. Todo él, sus elementos, se ordenan, se imantan hacia esa metáfora ancestral, sustitutiva de la Nada, siempre en relación con el ser: el Destierro. El destierro como destino y naturaleza. Somos dioses, fuimos dioses, lo seremos de nuevo cuando muramos.

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
el rey desventurado.... Ab? Abd All?h.`
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

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', iconName: 'Instagram' },
  { platform: 'Twitter', url: '#', iconName: 'Twitter' },
  { platform: 'Email', url: 'mailto:belen@example.com', iconName: 'Mail' },
];
