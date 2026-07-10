export interface VisualPoetry {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  artworkImages: string[];
  poemText?: string;
}

import { Book, Collaboration, ArtPiece, Track, SocialLink, IllustratedBook, ArtArticle, BookReview, Plaquette, ShortStory, LiteraryCriticism, Interview } from './types';

export const BOOKS: Book[] = [
  {
    id: '3',
    title: 'Horizonte de Sucesos',
    year: '2026',
    description: `Tras un largo silencio lírico de casi veinte años, Belén ha retomado la poesía con su nuevo libro "Horizonte de Sucesos".`,
    extendedDescription: `Este libro es un profundo diálogo entre la poesía y el poeta. Se ha estructurado con poemas que siguen la secuencia de Fibonacci, poemas de 34-21-13-8-5-3-2-1-1 versos que se repiten en cada capítulo. Esta secuencia es la que ordena todas las proporciones del mundo real que conocemos, de ahí mi elección. Hablar de poesía no es hablar de versos, vivir la poesía transciende más allá del propio entendimiento, más allá de nuestros deseos o motivos. Poeta es aquel que se entrega incondicionalmente a la escritura sin saber, en numerosas ocasiones, por qué ha escrito un texto que se ha desviado de sus intenciones. Hablamos del inconsciente como posible razón, pero tal vez sea algo más que no percibimos.`,
    backCoverVerses: [
      "Memoria de tantos genes,",
      "como impar susurro de un temido presagio,",
      "con el hostil encuentro vigilante,",
      "son sus aullidos de rimas y albas tristezas,",
      "las únicas flechas contra el viento en aquel plenilunio,",
      "contra la eterna batida de cepos y asechanzas,",
      "grito en la noche de odas,",
      "como único testigo de aquellas espléndidas colinas."
    ],
    coverUrl: '/images/libros/Horizonte _de_Sucesos.JPG',
    featured: true,
    purchaseUrl: '#'
  },
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
  }
];



export const COLLABORATIONS: Collaboration[] = [
  {
    id: '1',
    publication: 'ACTA ENCUENTRO MUJERES POETAS',
    title: 'Poética',
    type: 'Antología',
    date: '2005',
    description: 'Participación en el encuentro anual de mujeres poetas.',
    coverUrl: '/images/antologias/acta_mujeres_poetas.jpg',
    imagePosition: 'center 40%',
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
    imagePosition: 'top',
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
    imagePosition: 'top',
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
    imagePosition: 'center 25%',
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
    title: 'Hombre Olivo',
    type: 'Antología',
    url: 'https://drive.google.com/file/d/1MG_pMfXvSnDrBALD9bfHSBR1ZpiIx3GY/view?usp=sharing',
    externalNote: 'Antología virtual “De pronto, ¡oh belleza!, canta el verderol”, 2025',
    date: '2025',
    description: 'Edición de Diego Castillo Barco y Pedro Luis Ibáñez Lérida. La Puebla de los Infantes. Sevilla.',
    coverUrl: '/images/antologias/encuentro_letras_celestes_cover.jpg',
    imagePosition: 'bottom',
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
    id: '14',
    publication: 'Y ser como la estrella inaccesible y alta, alumbrando en silencio. Una antología',
    title: 'Mediodía del pasado y del futuro',
    type: 'Antología',
    url: 'https://drive.google.com/file/d/1fIJLo6ZMwM0NWlyYUZyyCK4JxLR3yfiy/view?usp=sharing',
    externalNote: 'Antología virtual “Y ser como la estrella inaccesible y alta, alumbrando en silencio”, 2026',
    date: '2026',
    description: 'Poema publicado en la antología virtual del Proyecto Encuentro de Letras Celestes, edición 2026.',
    coverUrl: '/images/antologias/y_ser_como_estrella_2026_portada.png',
    imagePosition: 'center 62%',
    fullText: `**Mediodía del pasado y del futuro**
Belén Juárez. 2026

Poema publicado en la Antología virtual “Y ser como la estrella inaccesible y alta, alumbrando en silencio” (Proyecto “Letras Celestes” de Pedro Luis Ibáñez Lérida y Diego Castillo, La Puebla de los Infantes, Sevilla). Edición 2026.

Nunca las estrellas inventaron sus luces.
Guardianas del aroma del amor
nos cubrieron de momentos del ayer.
El pasado es un paraíso de áureas músicas,
el que se sueña de madrugada sobre una almohada,
allí donde un dios de barro no estuvo nunca,
ni la suerte puede cambiar el aire que respiramos.
En el mediodía de un silencioso universo,
enjambre de otros universos,
anegados astros de débiles cuellos,
como _Caballo de Troya_ rozando la memoria,
encontraremos sus fuentes,
sus montañas, sus templados días,
las piedras de la vida,
los soles y sus arbóreas selvas,
la ausencia de la costumbre,
la amada conciencia.
En el rostro de un sereno y mudo universo,
dibujaremos la mirada remansada
de quien trató de amarnos alguna vez.
Y viajaremos trenzando nuestras vidas
hacia el lugar de las estrellas,
como destino de una única verdad,
donde la _Curva_ es pregunta,
y es respuesta.

[[IMG:B:0]]`,
    images: [
      '/images/antologias/mediodia_pasado_futuro_postal_2026.jpg'
    ]
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
    title: 'Palestina y Mi denuncia',
    type: 'Antología',
    url: 'https://librujula.publico.es/y-mi-denuncia-de-belen-juarez/',
    externalNote: 'Poema publicado en el Club de Poesía de la Revista Librujula, 2025',
    date: '2002',
    description: 'Participación en la antología Poetas por la Paz.',
    coverUrl: '/images/antologias/PORTADA_poetas-paz.jpg',
    imagePosition: 'center 25%',
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
  , {
    id: '13',
    publication: 'Librujula. Club de la Poesía',
    title: 'Las cerezas de mi padre',
    type: 'Revista',
    url: 'https://librujula.publico.es/las-cerezas-de-mi-padre-de-belen-juarez-jimenez/',
    externalNote: 'Poema publicado en el Club de la Poesía de Librujula 2024',
    date: '2024',
    description: 'Publicación del poema "Las cerezas de mi padre" en Librujula.',
    coverUrl: '/images/antologias/portada_librujula.png',
    imagePosition: 'top',
    fullText: `>> **LAS CEREZAS DE MI PADRE**

>>> A ti, Papá

No existe mayor dolor
que el de no poder detener el tiempo
cuando conoces el futuro….


>> **I.**

Es el tiempo una cuna de ansiedad,
una rima de hilos de luz,
diamante de la vida que se esconde
tras la carne que nace, que muere, y que…
pregunta.

Cuna a destiempo
a lomos de las horas, desgarrando
la mente hundida en un silencio de neón
que destella la infamia de tanto sufrir.

He aquí el maldito rostro de un dios
que juega con los trozos de mi ser,
que me hizo adulta y más niña si cabe,
y donde mi llanto implorando,
sudando la muerte entre mis palmas,
era un juego infantil
para aquel que creó la vida.


>> **II.**

Tal vez un ángel atrevido,
un ángel rencoroso,
un dios disfrazado de ángel,
ángeles que inventamos,
un ángel desterrado,
malévolo de emociones,
tal vez un ángel que bautiza con amor
todas las preguntas de nuestros ojos.

Y hoy soy,
como infinita gota entre multitud de océanos,
un abrazo más del rencor de aquel ángel,
intuyendo la augusta venganza,
le supliqué no alzar su espada
contra la propia creación del que dicen es
Señor del Universo conocido.

Me atravesó…
me atravesó el vientre, los puños y los pies,
sin dejarme morir, sin dejarme abatir,
aplaudiendo mis ojos húmedos,
obligándome a vivir,
con la deshonra de ser hija del viento,
con la memoria intacta,
con la fuerza del reproche,
y la conciencia de saberme hija de mi padre,
de mi padre… al que nunca más volveré a ver…


>> **III.**

Él me dio la sangre,
el huerto de mis años más felices
donde crecí,
jugando con mis insectos.

Tantísimos ojos azules en su rostro,
un cielo a la altura de mis bucles,
el suave tacto de sentirme niña para siempre,
y comprendo,
comprendo que me ciñe la memoria
contra la vida,
ahogando palabras,
como un delfín sin espumas
brotando mis saludos contra el Magnífico
contra el oídium
que por blanco o gris perla
finge eterna belleza…

Veinte años,
            y mis fuerzas que no pueden
maltratarme más …


>> **IV.**

Aquel que fue mi padre suplicó
con los puños cerrados
contra la única primavera que
resbalaba de su tiempo,
volver a ver a su niña
antes de cerrar los ojos para siempre,
antes de cerrar su risa, la luna de sus lágrimas,
el manto de su amor, la ira de sus horas.

Sucedió la tarde,
y las lanzas del sol invadieron mis ventanas,
el plomo de aquel ocaso, de gris metal,
sacudía mi esperanza,
la esperanza que se me negó,
la esperanza de la que hablan los creyentes,
esa esperanza que dicen del buen dios,
y que nunca merecí con tanta maldad,
que me marcara el pecho a latigazos.


>> **V.**

Y sigo llorando…
ahora sigo llorando,
me llega el aroma de la flor de la rapilla
– nomeolvides – insistía…
mi padre me dijo con una flor en la mano
– nomeolvides –
mientras el azul de su mirada,
me sigue devolviendo la tristeza,
como manjar de un tiempo de mangos y aguacates
que jamás madurarán ni morirán en mi recuerdo.

Veinte años después de aquel día de vértigos,
sigo viendo entre sus manos,
aquellas últimas cerezas que me pidió,
las ultimas gotas de vida que me pidió saborear,
las únicas que se llevó hacia el silencio.

– Dios de los otros,
estoy llorando y
no puedo ya ni controlar
mi desprecio hacia ti,
me lo quitaste sin merecerlo,
sin preguntarme.

– En este mundo de necios que permites,
de almas hermosas que no permites,
ya no mereces
ni siquiera el título de Dios.`
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
    excerpt: `EL HOMBRE DE LUXEMBURGO (Tusquets, 1997) de Arnaldo Calveyra. PARÉNTESIS DE TIEMPO, SILENCIO Y CURVATURAS (Devenir, 1998) de Juan Pastor. RECÓNDITO TRASLUZ (Junta de Extremadura, 1997) de Serafín Portillo. RECUERDO EN LA NOCHE (Devenir, 1997) de Carmen Serna. PERTENECÍ (Colección Sureste Narrativa, 1997) de Andrés Neuman.`,
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
    excerpt: 'CUANTAS LLAVES (Icaria, 1998) de Concha García. EL LIBRO DE LOS SALMOS (Devenir, 1998) de Jesús Urceloy. TODOS LOS NOMBRES (Alfaguara, 1998) de José Saramago. SIN PUERTAS (Pre-textos, 1996) y EL SILLÓN MALVA (Planeta, 1995) de Ramón Mayrata',
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
    excerpt: `RAFAEL RODRÍGUEZ ALMODÓVAR Y EL VERSO DE LOS AÑOS Reseña del libro: MEMORIA DE UN TIEMPO CUMPLIDO. Colección literaria CAROAL. 2001

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



Quisiera aclarar el inicio de la reseña de este libro: “Una cálida madrugada en el aterrador desierto del aeropuerto de Valencia, entre risas y emociones, charlaba con un viejo amigo, mientras yo, poco ingenua y más antártica que nunca, olfateaba entre anónimos, emprendiendo mi viaje y aventura por tierras orientales de dátiles y suspiros.” Conocí a Pedro J. Peña hace más de 20 años, en el aeropuerto de Valencia camino del Instituto Cervantes de Beirut. Junto a Ricardo Bellveser y Antonio Porpetta fuimos invitados a llevar nuestros versos a las orillas más orientales del Mediterráneo. Hoy ninguno de los tres está ya con nosotros, y me sigue abrumando su partida y emocionando sus versos. El libro reseñado de Pedro J de la Peña escrito en 1994 derrochaba pasión, ironía y majestuosos silencios escritos con versos. El poeta debe hacer sentir, dijo una vez. Hoy nos queda su alma, su sonrisa y aquella crecida chistera de versos.`,
    reviews: [
      {
        id: 'desapariciones-pedro-pena',
        title: 'DE(S)APARICIONES',
        author: 'PEDRO J. DE LA PEÑA',
        publicationInfo: 'Ediciones Libertarias, Poesía.1994',
        imageUrl: '/images/Critica_literaria/extramuros/desapariciones.jpeg',
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
  { id: '1', title: 'CATEDRALES DE ROCA', duration: '5:42', poemSource: 'Horizonte de Sucesos', spotifyId: '4gU6i1hRQ2heDzPtCKZfou', youtubeId: 'ri3DMbmlCVE' },
  { id: '2', title: 'LOBA', duration: '3:15', poemSource: 'Horizonte de Sucesos', spotifyId: '6UT14ihuRCoD6szkFQ2QJZ', youtubeId: 'gHWxv-046ZY' },
  { id: '3', title: 'EL FRIO DE MIS AMAPOLAS', duration: '4:20', poemSource: 'Horizonte de Sucesos', spotifyId: '7gw0RUTGWxfy04H9LiaNoi', youtubeId: '3pV_vBUnKb4' },
  { id: '4', title: 'EBANO MAR', duration: '3:58', poemSource: 'Horizonte de Sucesos', spotifyId: '3HafW1PTsQLt0IjWkHp8pC', youtubeId: 'bsWFoA_j-YY' },
  { id: '5', title: 'NORA', duration: '4:12', poemSource: 'Horizonte de Sucesos', spotifyId: '6jHQaRwCAr9kyQmY1cVldU', youtubeId: 'PeAbdLqZvHI' },
  { id: '6', title: 'GEODA', duration: '3:45', poemSource: 'Horizonte de Sucesos', spotifyId: '18Z2BU0bsDPnbflLr3XFiQ', youtubeId: 'NIP0NcY4tsA' },
  { id: '7', title: 'VERDE OLIVINA', duration: '4:05', poemSource: 'Horizonte de Sucesos', spotifyId: '5XnlVzAvR99eTTIkXEBWde', youtubeId: 'adfTdAvjFVc' },
  { id: '8', title: 'ELLOS DEL AIRE', duration: '3:30', poemSource: 'Horizonte de Sucesos', spotifyId: '5tGXFOuxHuuuoW34sLr2Ls', youtubeId: 'bW2T18fH5Q4' },
  { id: '9', title: 'ESMERALDA', duration: '4:15', poemSource: 'Horizonte de Sucesos', spotifyId: '7MboNgEP88LGX1JYOLbAPV', youtubeId: 'P7q_-gzsFbw' },
  { id: '10', title: 'MONTE DENALI', duration: '3:50', poemSource: 'Horizonte de Sucesos', spotifyId: '1liY63cyTGxSbX7xdb5Ky7', youtubeId: 'dyauKzaOUbg' },
  { id: '11', title: 'AMADA MIA', duration: '4:25', poemSource: 'Horizonte de Sucesos', spotifyId: '1bQl9LaEKa47wQI99kk0x0', youtubeId: 'mB7fBpfW9qg' },
  { id: '12', title: 'REQUIEM', duration: '5:10', poemSource: 'Horizonte de Sucesos', spotifyId: '3qMrAYHtJfPuzFjJYKlVlS', youtubeId: '7e_vljyg1dg' },
  { id: '13', title: 'REDES DE ACERO', duration: '4:00', poemSource: 'Horizonte de Sucesos', spotifyId: '06PoOZiCdUy3NjH2uWImSW', youtubeId: 'MKe5wbTxED4' },
  { id: '14', title: 'PURO AZAFRÁN', duration: '3:35', poemSource: 'Horizonte de Sucesos', spotifyId: '3tZS9WF4Q01TN1ZXOlrIGU', youtubeId: 'K3KXEcz0ows' },
  { id: '15', title: 'GRAN DUQUE', duration: '4:40', poemSource: 'Horizonte de Sucesos', spotifyId: '4t2opuTrSsOEi3m49qkbbh', youtubeId: 'uDK_V_aA35A' },
  { id: '16', title: 'LOBO', duration: '3:25', poemSource: 'Horizonte de Sucesos', spotifyId: '3TYJEIOMUL0nObaxL8iVRr', youtubeId: 'ikNHPi9g5AI' },
  { id: '17', title: 'COMPRA MI FRÁGIL VIDA', duration: '4:10', poemSource: 'Horizonte de Sucesos', spotifyId: '3SWh3FyfF3qD4ZlltEs2kW', youtubeId: 'XUPyv5AinTY' },
  { id: '18', title: 'TOQUE DE CAMPANAS', duration: '4:55', poemSource: 'Horizonte de Sucesos', spotifyId: '17lHmpRq9N6f9WRrAV8MOE', youtubeId: '8QhUwFkQxAI' },
  { id: '19', title: 'KEIKO', duration: '3:40', poemSource: 'Horizonte de Sucesos', spotifyId: '2JWP6NXtce81y8aidndypo', youtubeId: 'yTg9JSArAAg' },
  { id: '20', title: 'A 6500 AÑOS LUZ', duration: '4:30', poemSource: 'Horizonte de Sucesos', spotifyId: '5DMYd16NZrS2e9bwr9HzUS', youtubeId: 'zzNtV64U540' },
  { id: '21', title: 'HORIZONTE DE SUCESOS', duration: '6:15', poemSource: 'Horizonte de Sucesos', spotifyId: '2ffT8mrj1PKn8yZCKqL6qk', youtubeId: 'k7HFqzDw6iQ' },
];

export const ART_PIECES: ArtPiece[] = [
  {
    id: '1',
    title: '40 guitarras de plata 2005',
    medium: 'TINTA CHINA PINCEL CHINO',
    imageUrl: '/images/cuadros/40 GUITARRAS DE PLATA 2005.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '2',
    title: 'Abencerrajes 1991',
    medium: 'MIXTA OLEO SOBRE PAPEL, TINTA CHINA',
    imageUrl: '/images/cuadros/ABENCERRAJES 1997.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '3',
    title: 'Barco 2000',
    medium: 'ACUARELA',
    imageUrl: '/images/cuadros/BARCO 1999.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '4',
    title: 'Composición II 1999',
    medium: 'TINTA CHINA, ACUARELA',
    imageUrl: '/images/cuadros/COMPOSICION 1.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '5',
    title: 'Composición I 1998',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/COMPOSICION 2.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '6',

    title: 'La Vinoteca',
    medium: 'TINTA CHINA, PINCEL CHINO. Exposición Internacional de Torres Vedras (Portugal) 1998 ',
    imageUrl: '/images/cuadros/CUADRO 2 Torres Exposición colectiva Torres Vedras, Portugal, 1998.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '7',
    title: 'El baile de la flor 2000',
    medium: 'TINTA CHINA, PINCEL CHINO',
    mediumDetail: 'Diálogo silente con Pedro Garciarias: P.G. "Mientras la tarde de abril se elevaba en rosa y eran las 7:45, la mano en flor y la mirada quieta firmaron este papel en Granada y Abril". B.J. Y siempre desde el trazo existe el verso"',
    imageUrl: '/images/cuadros/EL BAILE DE LA FLOR. PEDRO GARCIARIAS y BELEN JUAREZ.JPEG',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '8',
    title: 'Flor I 1999',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/FLOR TINTA CHINA.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '9',
    title: 'Flor II 2000',
    medium: 'ACUARELA',
    imageUrl: '/images/cuadros/FLOR. 1999.JPEG',
    aspectRatio: 'square',
    category: 'cuadros'
  },
  {
    id: '10',
    title: 'Hombre elefante 1990',
    medium: 'SANGUINA, CARBONCILLO',
    imageUrl: '/images/cuadros/HOMBRE ELEFANTE 1990.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '11',
    title: 'Hotel Castelar de Buenos aires 1998',
    medium: 'DIBUJO ENTINTADO, TINTA CHINA',
    imageUrl: '/images/cuadros/HOTEL CASTELAR BUENOS AIRES 1998.png',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '12',
    title: 'Casa colgante 1999',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/ILUSTRACION FICCIONES Especial primavera_verano 1999_1.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '13',
    title: 'Torre de Babel (Ficciones, especial China) 1999',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/ILUSTRACION FICCIONES Especial primavera_verano 1999_2.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '14',
    title: 'Composición III 2001',
    medium: 'TINTA CHINA, ACUARELA',
    imageUrl: '/images/cuadros/IMG_1881.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '15',
    title: 'La Dama de la Capucha 1990',
    medium: 'TINTA CHINA ROJA Y NEGRA',
    imageUrl: '/images/cuadros/LA DAMA DE LA CAPUCHA 1995.png',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '16',
    title: 'Reflejo en el espejo 1999',
    medium: 'TINTA CHINA Y ACUARELA',
    imageUrl: '/images/cuadros/REFLEJO EN EL ESPEJO 1999.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '17',
    title: 'Rostro y sangre 2005',
    medium: 'TINTA CHINA, DIBUJO ENTINTADO',
    imageUrl: '/images/cuadros/ROSTRO 1.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '18',
    title: 'Rostro de perfil 1989',
    medium: 'CARBONCILLO, PASTEL',
    imageUrl: '/images/cuadros/ROSTRO 21995.JPEG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '19',
    title: 'Nota Musical I 1999',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/TINTA 1.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '20',
    title: 'El yo del subconsciente 1999',
    medium: 'DIBUJO ENTINTADO, TINTA CHINA',
    imageUrl: '/images/cuadros/TINTA 2.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '21',
    title: 'Nota musical II 1999',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/TINTA 3.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '22',
    title: 'La Tristeza 1998',
    medium: 'TINTA CHINA, PINCEL CHINO',
    imageUrl: '/images/cuadros/TINTA 4.jpeg',
    aspectRatio: 'landscape',
    category: 'cuadros'
  },
  {
    id: '27',
    title: 'La Puerta del subconsciente',
    medium: 'Oleo sobre lienzo',
    year: '2006',
    imageUrl: '/images/cuadros/La_Puerta_del_subconsciente. 2006 Oleo sobre lienzo.JPG',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '28',
    title: 'Modelo',
    medium: 'Tinta china pincel chino. Exposición Internacional de Torres Vedras (Portugal) 1998 ',
    year: '1998',
    imageUrl: '/images/cuadros/Modelo.1998 tinta china pincel chino.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '29',
    title: 'París',
    medium: 'Tinta china pincel chino. Exposición Internacional de Torres Vedras (Portugal) 1998 ',
    year: '1998',
    imageUrl: '/images/cuadros/París. Tinta china pincel chino.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '30',
    title: 'VERDE 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/1 Verde. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Verde. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '31',
    title: 'AZUL 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/2 Azul. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Azul. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '32',
    title: 'VIOLETA 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/3 Violeta. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Violeta. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '33',
    title: 'ROSA 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/4 Rosa. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Rosa. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '34',
    title: 'ROJO 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/5 Rojo. rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Rojo. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '35',
    title: 'NARANJA 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/6 Naranja. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Naranja. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '36',
    title: 'AMARILLO 1987',
    medium: 'ROTULADOR NEGRO Y CERA',
    mediumDetail: 'Serie “Rostro de los siete colores”. Exposición “Rostros”, 1991',
    year: '1987',
    imageUrl: '/images/cuadros/rostros/7 amarillo. Rostro de los siete colores.jpg',
    aspectRatio: 'portrait',
    description: 'Amarillo. Rostro de los siete colores. Pertenece a la serie “Rostro de los siete colores” y formó parte de la exposición “Rostros” de 1991.',
    category: 'cuadros'
  },
  {
    id: '37',
    title: 'Fantasma 1988',
    medium: 'ROTULADOR NEGRO',
    year: '1988',
    imageUrl: '/images/cuadros/Fantasma.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '38',
    title: 'Amistad 1999',
    medium: 'ROTULADOR NEGRO',
    year: '1999',
    imageUrl: '/images/cuadros/Amistad.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '39',
    title: 'Hombre 1 1998',
    medium: 'LÁPIZ',
    year: '1998',
    imageUrl: '/images/cuadros/Hombre 1 1998.jpeg',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '40',
    title: 'Hombre 2 1998',
    medium: 'LÁPIZ',
    year: '1998',
    imageUrl: '/images/cuadros/Hombre 2 1998.jpeg',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '41',
    title: 'La Poesía escapa del papel 1999',
    medium: 'DIBUJO ENTINTADO, TINTA CHINA',
    year: '1999',
    imageUrl: '/images/cuadros/La Poesía escapa del papel 1999.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '42',
    title: 'Lugareña 1998',
    medium: 'TINTA CHINA, PINCEL CHINO',
    mediumDetail: 'Exposición Internacional de Torres Vedras (Portugal) 1998',
    year: '1998',
    imageUrl: '/images/cuadros/Lugareña.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '43',
    title: 'Música 2005',
    medium: 'TINTA CHINA, PINCEL CHINO',
    year: '2005',
    imageUrl: '/images/cuadros/Musica 2005.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '44',
    title: 'Sepultura 2005',
    medium: 'TINTA CHINA, PINCEL CHINO',
    year: '2005',
    imageUrl: '/images/cuadros/Sepultura 2005.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '45',
    title: 'Sanguina y Negros-1 1987',
    medium: 'SANGUINA, CARBONCILLO',
    year: '1987',
    imageUrl: '/images/cuadros/Sanguina y Negros1.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '46',
    title: 'Sanguina y Negros-2 1987',
    medium: 'SANGUINA, CARBONCILLO',
    year: '1987',
    imageUrl: '/images/cuadros/Sanguina y Negros 2.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '48',
    title: 'Caballo 2001',
    medium: 'TINTA',
    year: '2001',
    imageUrl: '/images/cuadros/Caballo 2001.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  {
    id: '49',
    title: 'Laberinto 2001',
    medium: 'TINTA',
    year: '2001',
    imageUrl: '/images/cuadros/Laberinto 2001.jpeg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  },
  // BOCETOS A LÁPIZ
  {
    id: '23',
    title: 'Mujer I 1998',
    medium: 'LÁPIZ',
    imageUrl: '/images/cuadros/Lapiz/MUJER 1 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '24',
    title: 'Mujer II 1998',
    medium: 'LÁPIZ',
    imageUrl: '/images/cuadros/Lapiz/MUJER 2 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '25',
    title: 'Mujer III 1998',
    medium: 'LÁPIZ',
    imageUrl: '/images/cuadros/Lapiz/MUJER 3 1998.png',
    aspectRatio: 'portrait',
    category: 'bocetos'
  },
  {
    id: '26',
    title: 'Autorretrato 1997',
    medium: 'LÁPIZ',
    imageUrl: '/images/cuadros/Lapiz/autorretrato-belen.jpg',
    aspectRatio: 'portrait',
    category: 'cuadros'
  }
];

export const ILLUSTRATED_BOOKS: IllustratedBook[] = [
  {
    id: 'noches-azules',
    title: 'Noches Azules del Alma',
    year: '2001',
    description: 'Ilustraciones interiores para el poemario Noches Azules del Alma.',
    coverUrl: '/images/ilustraciones/Nochesazulesdelalma/PORTADA.jpeg',
    illustrations: [
      { id: 'na1', title: 'Inicio de Azules', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/1.jpeg', aspectRatio: 'portrait' },
      { id: 'na2', title: 'Verbo de silencios', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/2.jpeg', aspectRatio: 'portrait' },
      { id: 'na3', title: 'Perfil del aire', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/3.jpeg', aspectRatio: 'portrait' },
      { id: 'na4', title: 'Cuando los cuerpos', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/4.jpeg', aspectRatio: 'portrait' },
      { id: 'na5', title: 'Trampa celeste', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/5.jpeg', aspectRatio: 'portrait' },
      { id: 'na6', title: 'Rostro del tiempo', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/6.jpeg', aspectRatio: 'portrait' },
      { id: 'na7', title: 'Dama en soledad de aguas', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/7.jpeg', aspectRatio: 'portrait' },
      { id: 'na8', title: 'Universo de cuerpos azules', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/8.jpeg', aspectRatio: 'portrait' },
      { id: 'na9', title: 'Rojos en el Verso', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/9.jpeg', aspectRatio: 'portrait' },
      { id: 'na10', title: 'Eternidad siempre en la palabra', medium: 'Tinta', imageUrl: '/images/ilustraciones/Nochesazulesdelalma/10.jpeg', aspectRatio: 'portrait' },
    ]
  },
  {
    id: 'plaquette-ficciones',
    title: 'Plaquette Ficciones 4',
    year: '1998',
    description: 'Colección de ilustraciones para la Plaquette Ficciones 4.',
    coverUrl: '/images/ilustraciones/Plaquette_ficciones4/PORTADA.jpeg',
    illustrations: [
      { id: 'pf1', title: 'Plaquette I', medium: 'Tinta', imageUrl: '/images/ilustraciones/Plaquette_ficciones4/p1.jpg', aspectRatio: 'portrait' },
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
    id: 'critica-campus-1991',
    title: 'Rostros',
    author: 'Eva María Vicente Galán',
    publication: 'Revista Campus',
    date: 'Junio de 1991',
    extraInfo: 'Número 54, editada por la Universidad de Granada',
    coverUrl: '/images/Critica-artistica/rostros2.jpg',
    images: [
      { url: '/images/Critica-artistica/revista_campus_grande.jpg' },
      { url: '/images/Critica-artistica/rostro_de_perro.jpg', caption: 'Cráneo de perro 1990. Marmol/Oleo' },
      { url: '/images/Critica-artistica/rostros2.jpg', caption: 'Algunos cuadros de la serie “Rostro de los siete colores” 1987. Cera/Tinta sobre papel.' }
    ],
    content: `En la Facultad de Ciencias expuso Belén Juárez sus "Rostros" hasta el 10 de Mayo. En torno a esta temática obsesiva, la joven artista ha desarrollado una interesante serie de trabajos que sienta claramente las bases de lo que en un futuro puede ser un más amplio desarrollo de las esotéricas ideas que dan forma y vigencia a esos recuerdos, premoniciones y sensaciones que impregnan totalmente su afán creador.

LA GRAN inquietud de Belén por expresar ese gran caudal de sentimiento artístico que la agita, esos "fantasmas" del pasado y del futuro, que ella intenta exorcizar con su gesto, esas formas enmarañadas que son un claro reflejo de esa visceral amalgama de ambigüedades que constituye en resumen la existencia, se ha manifestado claramente en esta reciente exposición, a lo largo de toda la obra expuesta, agrupada en tres series muy definidas, y que incluía además una sugerente escultura, evidente germen de futuras y más ambiciosas producciones.

En estas tres series: pastel, tinta y óleo, todas trabajadas sobre papel, se evidencia la clara determinación de la joven autora por progresar en el terreno del arte, en sus recursos matéricos y en sus conceptos de fondo y de forma. Y lógicamente, el gesto y el grafismo son una extraordinaria base, en los inicios de toda trayectoria artística, para el asentamiento de las bases cognoscitivas imprescindibles en este difícil ámbito. A veces con timidez, Belén Juárez se ha internado por el camino indicado por el que su propia intuición creadora le ha dictado. 

El negro es el protagonista indiscutible de estas misteriosas obras, en las que, más que organicidad, lo que se palpa es el frío metálico y deshumanizado de los submundos imposibles a los que puede abocar la mente humana. El negro, como adecuadísimo contrapunto a los tonos pastel, a los rotundos y vivos empastes de óleo, y como único definidor de esa especial dicotomía, que entre lo surreal y lo abstracto, lo Kandinskiano y lo postmoderno, caracterizan fundamentalmente la obra expuesta por Belén. El negro, como expresión de lo trágico como equilibrio y referencia entre las deshilvanadas masas cromáticas, que la joven pintora cohesiona gracias a él. Pues el color y las formas que éste puede sugerir, o definir con sus gradaciones, su interpretación, su profundidad y sus contrastes, es claramente el más duro reto que Belén Juárez tiene ahora por delante. En estas primeras concepciones, resulta grata la limpidez y el equilibrio que su sentido cromático manifiesta, y que evidentemente se acrecentarán y enriquecerán con la praxis, a medida que su evidente esfuerzo investigador vaya desarrollando nuevas y más comprometidas posibilidades técnicas, que darán cada vez mayor impulso a esa su indiscutible imaginación artística, poblada de rostros, de color, de trazos y de sentimiento.`
  }
];

export const BOOK_REVIEWS: BookReview[] = [
  {
    id: 'horizonte-de-sucesos-ideal-fernando-de-villena',
    title: 'Horizonte de Sucesos',
    bookTitle: 'Horizonte de sucesos',
    author: 'Fernando de Villena',
    publication: 'IDEAL / De la Academia de Buenas Letras de Granada',
    date: '25/06/2026',
    coverUrl: '/images/resenas/ideal-horizonte.png',
    condensedQuote: 'Lo primero que nos sorprende en este libro es su novedad, su decidida apuesta por la poesía cuántica; esa en la que fue precursor Gregorio Morales, y también por la Inteligencia Artificial; lo segundo, una visión positiva de la autora: su defensa de la naturaleza, de los animales, los árboles, la piedra, el mar, todo el cosmos en suma; panteísmo casi y un encendido canto de amor a la poesía…',
    fullContent: `Siempre me ha intrigado el silencio que guardan ciertos poetas durante largos años y su vuelta cuando menos se la espera. Pero es que la poesía constituye un completo misterio y someterla a los cánones de la normalidad resulta absurdo.

La poetisa parisina -profesora de Microbiología en la Universidad de Granada- Belén Juárez se mostró muy activa a finales del siglo pasado y principios del presente. Estuvo entonces vinculada a la revista “Ficciones” y a la histórica Tertulia del Salón y publicó los poemarios “Destierro en Cuatro Ángulos” (1999) y “La Noche de Ayer (2002). Después, cuestiones de salud la mantuvieron alejada de la vida literaria y recientemente ha vuelto por la puerta grande a la creación mediante un álbum de música, un espectáculo audiovisual y un nuevo libro de poemas que forman una unidad titulada “Horizonte de sucesos” (Huerga y Fierro Editores, colección Rayo Azul, 2026). La espectacular presentación de todo ello se llevó a cabo este mes de mayo en al biblioteca de Andalucía.

Lo primero que nos sorprende en este libro es su novedad, su decidida apuesta por la poesía cuántica; lo segundo, la visión positiva de la autora: su defensa de la naturaleza, de los animales, los árboles, la piedra, el mar, todo el cosmos en suma; panteísmo casi y un encendido canto de amor a la poesía.

Se nos presentan paisajes y también animales llenos de simbolismo: así la relectura del mito de los lobos, así el búho, que no solo representa la sabiduría de Minerva, sino también lo más íntimo, al igual que el fenómeno poético. Encontramos imágenes visionarias, oníricas y atrevidas, y referencias científicas en versos que fluyen de modo torrencial con un ritmo marcado por los paralelismos y las anáforas.

Son poemas impregnados de color, con un léxico lujoso, abundantísimo -nival, bellido, dragontea, turpiales…-, con frecuentes símiles que a veces nos llegan a pensar en Gerardo Diego: «Orcas como un manantial de espumas en alta mar». Versos que sorprenden al lector con un halo de neorromanticismo: «Te esperaré como espera un amigo,/ dormido sobre el musgo de una tumba, en primavera».

    Y frente a toda esa fiesta de la naturaleza y de la poesía, un duro alegato contra la ciudad con su asfalto, sus « afilados silbidos de neón» y su tristeza.`,
    sourceUrl: 'https://www.ideal.es/opinion/fernando-de-villena-horizonte-sucesos-20260625225511-nt.html',
    sourceLabel: 'Ver reseña en IDEAL',
    detailImageUrl: '/images/resenas/resena-fernando-de-villena-periodico.jpeg',
    detailImageCaption: 'Artículo publicado en IDEAL'
  },
  {
    id: 'belen-juarez-emocion-ciencia-en-benalmadena',
    title: 'Belén Juárez sorprende con nueva poesía que integra emoción y ciencia',
    bookTitle: 'Horizonte de sucesos',
    author: 'Isabel Fuentes',
    publication: 'En Benalmádena',
    date: '05/06/2026',
    coverUrl: '/images/resenas/benalmadena-horizonte.png',
    condensedQuote: '… La publicación resulta relevante porque reúne dos urgencias del presente cultural: por un lado, la recuperación de voces femeninas con trayectoria plural; por otro, la experimentación formal que dialoga con saberes científicos. En un momento en que la frontera entre disciplinas se difumina, este libro ofrece un modelo de convivencia entre precisión y emoción…',
    fullContent: `… La publicación resulta relevante porque reúne dos urgencias del presente cultural: por un lado, la recuperación de voces femeninas con trayectoria plural; por otro, la experimentación formal que dialoga con saberes científicos. En un momento en que la frontera entre disciplinas se difumina, este libro ofrece un modelo de convivencia entre precisión y emoción…`,
    externalUrl: 'https://www.enbenalmadena.es/3128-belen-juarez-sorprende-con-nueva-poesia-que-integra-emocion-y-ciencia/'
  },
  {
    id: 'horizonte-de-sucesos-cercle-artistes-europeens',
    title: 'Belén Juárez. Horizonte de sucesos',
    bookTitle: 'Horizonte de sucesos',
    author: 'Cercle des Artistes Européens',
    publication: 'Cercle des Artistes Européens',
    date: '2025',
    coverUrl: '/images/resenas/circulo-paris.png',
    condensedQuote: '…Este álbum constituye una creación verdaderamente inédita: transformar su poesía en canciones y musicalizarlas gracias a la inteligencia artificial, con el fin de abrir la poesía a un público más amplio y proponer una nueva vía de acceso a la emoción poética…',
    fullContent: `…Este álbum constituye una creación verdaderamente inédita: transformar su poesía en canciones y musicalizarlas gracias a la inteligencia artificial, con el fin de abrir la poesía a un público más amplio y proponer una nueva vía de acceso a la emoción poética…`,
    externalUrl: 'https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/'
  },
  {
    id: 'poesia-feria-libro-madrid-2026-librujula',
    title: 'Poesía para la feria del libro de Madrid 2026',
    bookTitle: 'Horizonte de sucesos',
    author: 'Enrique Villagrasa',
    publication: 'Librújula',
    date: '29/05/2026',
    coverUrl: '/images/resenas/feria-libro.png',
    condensedQuote: 'En esta entrada el crítico y lector de poesía nombra la poesía de Belén Juárez como: …verdad y belleza en unos poemas que son un regalo para nuestro cerebro.',
    fullContent: `En esta entrada el crítico y lector de poesía nombra la poesía de Belén Juárez como: …verdad y belleza en unos poemas que son un regalo para nuestro cerebro.`,
    externalUrl: 'https://librujula.publico.es/poesia-para-un-feria-donde-leer-reir-y-pasear/'
  },
  {
    id: 'horizonte-de-sucesos-librujula',
    title: 'Horizonte de sucesos',
    bookTitle: 'Horizonte de sucesos',
    author: 'Enrique Villagrasa',
    publication: 'Librújula',
    date: '22/05/2026',
    coverUrl: '/images/resenas/librujula-horizonte.png',
    condensedQuote: '… En el poemario se debate sobre diferentes temas: la naturaleza con su flora y fauna terrestre: el lobo (ecos del hermano lobo de Gubbio con Francisco de Asís); aérea: el búho sabio y marina: reivindicación de la delfínida orca, entre otros temas y cosas. Y Horizonte de sucesos también nos muestra además que poesía y ciencia o ciencia y poesía son muy similares, pues comparten y juegan con esa intuición y un tanto de azar justo y necesario que conlleva un salto al vacío de la fe, de esa fe que cree en uno mismo y en su trabajo, con temor y temblor.',
    fullContent: `… En el poemario se debate sobre diferentes temas: la naturaleza con su flora y fauna terrestre: el lobo (ecos del hermano lobo de Gubbio con Francisco de Asís); aérea: el búho sabio y marina: reivindicación de la delfínida orca, entre otros temas y cosas. Y Horizonte de sucesos también nos muestra además que poesía y ciencia o ciencia y poesía son muy similares, pues comparten y juegan con esa intuición y un tanto de azar justo y necesario que conlleva un salto al vacío de la fe, de esa fe que cree en uno mismo y en su trabajo, con temor y temblor.`,
    externalUrl: 'https://librujula.publico.es/belen-juarez-regresa-a-la-poesia-con-pasion-y-ciencia/'
  },
  {
    id: 'horizonte-de-sucesos-en-clase-ideal',
    title: 'Horizonte de sucesos, un proyecto surgido tras dos décadas de quietud lírica',
    bookTitle: 'Horizonte de sucesos',
    author: 'Antonio Arenas',
    publication: 'IDEAL En Clase',
    date: '20/05/2026',
    coverUrl: '/images/resenas/portada-resena-en-clase-ideal.png',
    condensedQuote: 'De “Horizontes de sucesos” informa que surge «como consecuencia de esa investigación o de esa idea de del diálogo y conversación entre el poeta y la poesía. De tal manera que el poeta cuestiona su labor dentro de su escritura y la poesía lo lleva por diferentes caminos. El título procede del último capítulo, y señala que es «un libro que está dedicado a muchas facetas de la vida».',
    fullContent: `De “Horizontes de sucesos” informa que surge «como consecuencia de esa investigación o de esa idea de del diálogo y conversación entre el poeta y la poesía. De tal manera que el poeta cuestiona su labor dentro de su escritura y la poesía lo lleva por diferentes caminos. El título procede del último capítulo, y señala que es «un libro que está dedicado a muchas facetas de la vida».`,
    externalUrl: 'https://en-clase.ideal.es/belen-juarez-publica-horizonte-de-sucesos-el-proyecto-surgido-tras-dos-decadas-de-quietud-lirica/'
  },
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
    credits: 'Textos y poemas',
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
    synopsis: 'Un trasvase emocional y geográfico desde el París de los años 60 hasta las raíces andaluzas. La memoria de una niña de siete años y el mítico Citroën DS-21 "Tiburón" se entrelazan en una épica que describe el destierro y el reencuentro.',
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
  { platform: 'Instagram', url: 'https://www.instagram.com/belenjj.bjj', iconName: 'Instagram' },
  { platform: 'Facebook', url: 'https://www.facebook.com/belenjj.bjj', iconName: 'Facebook' },
];

export const INTERVIEWS: Interview[] = [
  {
    id: '1',
    title: 'ENTREVISTA A ANTONIO CARVAJAL',
    slug: 'entrevista-antonio-carvajal',
    publication: 'Ficciones, Revista de Letras. 2ª Época. Nº1. Primavera 1997. Pág 4-11',
    year: '1997',
    date: '13 de Marzo de 1997',
    intro: 'Nos situamos en la Facultad de Traductores de la Universidad de Granada, donde Antonio Carvajal tiene su lugar de residencia profesional, profesor de Teoría de la Literatura en dicha Facultad, hoy, 13 de Marzo de 1997, nos recibe amablemente y ajusta su apretada agenda para dedicarnos unos momentos de su tiempo.',
    content: `
Ficciones. En sus inicios encontramos un libro: Tigres en el Jardín, del año 1968, dedicado a Vicente Aleixandre, ¿qué influencia recibe de sus textos? 
A. Carvajal: De Vicente Aleixandre, como poeta, poca, como persona, ya hay muchísima, porque está ya afortunadamente de por medio la amistad. Yo conocí a V. Aleixandre en el año 1965, y para mí, conocerle, fue un hecho absolutamente fundamental en mi vida, pero cuando conozco a V. Aleixandre yo tenía mi voz poética ya casi formada, no muy decidida del todo, pero ya casi formada. En Tigres en el jardín, la influencia es mínima, lo había leído, pero no con la intensidad que había leído a otros poetas y la obra de Aleixandre es mucho más rastreable en otras obras mías posteriores. 
F.: ¿Y qué escritores han influido a partir de entonces en su obra? 
[IMG:1:L]
A. C.: En Tigres en el Jardín está clarísimo, y no sé por qué los críticos no lo han señalado, la huella de Rubén Darío; se han preocupado mucho de citar a Góngora, el Barroco, pero no se dan cuenta de que el barroquismo posible que pueda haber en Tigres en el jardín tiene un tinte modernista muy claro y también una enorme presencia del francés Paul Valéry, y en cuanto al transfondo ideológico ya se observa mi preferencia por los filósofos epicúreos, debido a la lectura de los pocos fragmentos que se conservan de Epicuro y bien de las huellas de Epicuro en otros filósofos, p.e. Lucrecio, del que he hecho auténtico pasto de lecturas y he utilizado como fuente de poesía, pero esas cosas son del intramundo de los libros. 
[IMG:0:R]
F.: En el libro Ciudades de Provincia cita que se sintió en un momento peligroso de escritura por miedo a que se le encasillara en unas formas determinadas... 
A. C.: No era miedo, es que la crítica inmediatamente que uno pone una «estampilla», lo confina a los estrechísimos límites de esa definición; un libro de poesía está abierto a muchos frentes, aunque en el libro se procure que haya una línea coherente tanto de expresión como de temas, la realidad es que de un mismo libro pueden salir múltiples derivaciones, múltiples líneas, y así en Tigres en el Jardín la presencia del dolor es escasísima.
[IMG:2:L]
F.: Se cita el tema de los arcángeles... 
F.: Sí, si, pero el tema del dolor es muy escaso e incluso está tratado con un cierto desdén porque afortunadamente el poeta en ese momento se siente feliz, sin embargo la situación cambia mucho cuando llega Serenata y Navaja (su segundo libro), cambia mucho, porque la vida, queramos o no, influye; los procesos vitales siempre influyen en los desarrollos poéticos y mi vida sufrió una serie de alteraciones en los años que mediaban entre Tigres en el Jardín y Serenata y Navaja; no hablo de la publicación, sino de la relación de los libros: una serie de acontecimientos familiares y de otro tipo alteró lo que era el status provisional, relativamente feliz, que yo vivía cuando escribí Tigres en el Jardín y que se deshizo cuando escribí Serenata y Navaja. El miedo al encasillamiento es lo que yo noté en las reseñas de Tigres en el Jardín, que se quedara únicamente en los elementos formales, cosa que la crítica ha ido repitiendo y que a mí me llama la atención, el que siempre se hable de los elementos formales. 
F.: ¿Investigar nuevas formas? 
A. C.: No, lo mío no es tanto investigar nuevas formas como destruir y recomponer las pasadas, es decir, combinaciones estróficas que yo haya inventado o «reutilizado», sin embargo, lo que sí he hecho ha sido destruir las antiguas e intentar darles un aire nuevo, que yo creo que en Serenata y Navaja ya sí consigo. A mí no se me puede encasillar entre los novísimos, porque en mí sigue la preocupación política y social, a mí no se me puede incluir entre los novísimos porque mi sentido de la ética es otro, y a mí no se me puede incluir entre los novísimos porque yo siempre he repetido una frase, creo de Ravelli que dice «Ciencia sin conciencia es ruina del alma», y eso lo he tenido siempre presente como lema y desde mi primer libro hasta el último esa frase me ha estado condicionando y obligando a hacer un tipo determinado de literatura, es decir, yo sí creo en el compromiso del escritor y ésto sería el dato fundamental que me separaría de los novísimos. 
F.: Habla en su libro Servidumbre de Paso de Pedro Soto de Rojas... 
A. C.: Cuando hablo de Pedro Soto de Rojas me refiero al poeta, autor de Desengaño de amor en rimas, El paraíso cerrado para muchos, un jardín abierto para pocos, estoy hablando de un poeta al que otros poetas como Lorca o Gerardo Diego, incluso el mismo Neruda, prestaron muchísima atención y que si hay algún referente en poesía clásica que se pueda citar como ejemplo de lo granadino sería precisamente él, que es el primero que elabora la Tópica y que construye esa frase como título de su libro Paraíso cerrado para muchos, jardines abiertos para pocos y que a partir de Lorca se va a convertir en un cliché para designar a Granada. 
F.: Incluso en un principio pensé en la relación con Pedro Soto, teólogo y filósofo español de aproximadamente el año 1500, y que habló sobre la Doctrina del Sacramento de la Eucaristía… 
A. C.: (Entre risas), tampoco habría que extrañarse mucho porque en Serenata y Navaja hay un poema que se titula Sobre el ardor de la lucha postrera que es la traducción de un epígrafe de Santo Tomás de Aquino de una de sus partes de su Suma Teológica, y yo algo de Teología he leído también, sobre todo de Teología moral, uno de los libros que más he consultado, precisamente para no cometer errores amorosos en mi poesía ha sido la Teología Moral del Padre Cullera. 
[IMG:3:R]
F.: En Ciudades de Provincia se hace un recorrido por pueblos como Úbeda, Baeza y se utilizan los símbolos de la Naturaleza para describir la belleza, se decide una frase La Arquitectura como arte bella colectiva…, aparte del cambio de formas, ¿es éste el propósito de este libro, la descripción de la belleza de la arquitectura de las ciudades de Jaén? 
A. C.: Concretamente en el poema Piedra viva (Amanecer en Úbeda), que es el primer poema de tema jienense y que se encuentra precisamente en Serenata y Navaja, cuando yo me planteé este libro, Serenata y Navaja, procuré hacer una serie de poemas de los grandes arquetipos artísticos; como arquetipo de la Música tomé a Mozart, para la Escultura me basé en Bernardo Olmedo, para la Pintura un cuadro de Francisco Pedraja Vista de Badajoz al atardecer y para la Arquitectura me basé en Úbeda, en concreto en el espacio urbano presidido por la Capilla de El Salvador, esa fachada con fondo maravilloso, lorquiano, olivares, es fundamentalmente todo el ámbito de la plaza lo que entra dentro de la visión del poema y si se mira bien el poema Piedra Viva (Amanecer en Úbeda) hay incluso un elogio al trabajo colectivo manual, se necesitan muchos picapedreros, albañiles y canteros; precisamente eso está rompiendo con la estética dominante del momento en que esos temas no se podían tocar porque eran realmente ordinarios; pongamos por caso, cuando la gente se queda deslumbrada ante el resplandor de Venecia no piensan en quienes han levantado Venecia, ven el resultado, pero no ven que ese resultado lo es de un proceso y en ese proceso ha habido un trabajo colectivo que es lo que ha posibilitado esa maravilla estética; Venecia es un lugar maravilloso, pero también lo es Úbeda. 
F.: ¿Existe alguna conexión en este libro con amigos queridos? 
A. C.: Sí, normalmente mi poesía está muy motivada: hay una parte de mi poesía en que lo que se cuenta no es una anécdota, una experiencia vivida por mí, sino fundamentalmente algo contemplado, suelo tomar bastante distancia con los temas que trato en mi poesía, entre otras cosas porque la emoción intensa no me permite más que sentirla, y si no tengo distancia no puedo escribir el poema, lo tengo dicho en el libro De un Capricho a Celeste, en concreto en Confidencias de un hijo de este tiempo a Rafael León, hablo de que necesito estar reposado y consciente para la tarea de escribir el poema e incluso próximo a la felicidad, no totalmente feliz porque si soy feliz entonces no escribo. 
F.: ¿Sería como un espectador? 
A. C.: No, es que las vidas ajenas no son solamente fuente de inspiración para el novelista; el poeta puede hallar arquetipos en lo que otros viven, en lo que otros hacen y en lo que otros padecen y desde luego, para mí es mucho más fácil entender desde el punto de vista poético lo que les ocurre a otros que describir las miserias cotidianas que pasan por mi interior y yo tengo la suerte de poder presumir de amigos de altísima calidad humana y esa altísima calidad humana es posiblemente la mayor fuente de mi poesía. 
F.: ¿De alguna manera Antonio Carvajal es un paraíso cerrado? 
A. C.: No, las relaciones amistosas y amorosas son normalmente al menos de dos y yo todos los amigos los tengo compartidos, no son exclusivos, únicos y cerrados, es un mundo muy abierto. No hay cierre, una cosa es la intimidad y otra cosa es el mundo cerrado; yo siempre hago un test a la gente que conozco nueva cuando me empieza a interesar para saber si puedo ser amigo suyo y es que les pregunto qué prefieren si una Torre o un Puente. 
F.: No dejas dudosos y pensativos…
A. C.: Todos los temas me afectan y han aflorado en mi poesía. El libro Siesta en el Mirador (cuarto libro), que toma por título el mismo de un poema del primer libro Tigres en el Jardín, hay alguna interpretación del mito de Narciso, diferente a la interpretación convencional; muchas veces he dicho que el narcisismo no es algo nuevo, es una enfermedad, está clarísimamente descrito por los psicólogos. Existe un componente extraño: cuando Narciso nace, su madre lo lleva al adivino Tilesias, y cuando la madre le pregunta: - ¿Será feliz? -, el adivino dice: - sí, si no se conoce -; claro, marcar un destino de esa manera cuando precisamente el Oráculo de Delfos dice todo lo contrario, - Conócete a ti mismo -, nos tiene que poner en sospecha de que algo raro hay en el mito y efectivamente Narciso muere cuando se conoce, porque el narciso del mito no se enamora de sí mismo, se enamora de una criatura hermosísima que ve y cuando descubre que esa criatura es él mismo, es el momento de su muerte; por eso la interpretación es muy curiosa y yo coloco aquí precisamente el poema Siesta en el Mirador (y sabemos que el mirador es un balcón cerrado). Narciso no amó su voz, amaba el eco de su voz, no se amaba a sí mismo, amaba la imagen que él ignoraba que era sí mismo.
F.: Eres un observador muy sensible de todo lo que te rodea; sería como un balcón abierto, donde ves que entran todos los que están a tu alrededor. Precisamente se siente esa emoción al leer el poema Noviembre, dedicado a tu padre, así como el poema décimo quinto de la Antología de Treinta años de Poesía Española, cuando parece que hablas de tu hijo, «...Alguna vez mis labios, hijo mío,/ han buscado tu rostro...». 
A. C.: No es una experiencia mía, porque yo afortunadamente soy soltero y no soy padre soltero. Se trata de la pérdida del padre y la negación del hijo, pero esa experiencia, repito, no está vivida por mí; me basé en la reacción de un amigo mío ante la negación de su hijo. Es algo en que insisto, p.e. el libro Raso, Milena y Perla, en el poema dedicado a Guillermo González, unas veces Antonio Callejas, otras veces yo mismo, el poema se va componiendo de todo aquello que yo voy asimilando de esa conversación. 
F.: He podido observar que existe en este libro Raso, Milena y Perla una descripción poética de amigos, de personas, ¿qué nos puedes decir de esto? 
A. C.: Este libro es un libro motivado íntegramente desde fuera. Este libro se va haciendo al mismo tiempo que los poemas finales de Testimonio de Invierno, los poemas de Miradas sobre el agua y los poemas del último libro que he terminado y que tengo entregado al editor. Es un libro que es un proceso de años y con las respuestas a pintores, a escultores, a músicos que me piden colaboración bien para catálogos, bien para obras y claro, no he recogido todo lo que he escrito para los distintos artistas, trata de ser un libro coherente. Incluso, en esos concretos, p.e., Fábula pagana y Fábula bíblica tiene como soporte de mi escritura autógrafa, dibujos de M. Teresa Martín Vivaldi, dedicado a las dos personas a las que después se les ha hecho el regalo del cuadro. Frente a libros de poesía como son el resto de mi obra, este libro, Raso, Milena y Perla está totalmente motivado por la amistad.
F.: Entonces, el mensaje que da el libro, ¿podría ser en sí la amistad? 
A. C.: Fundamentalmente; creo que hay una reflexión sobre nuestro estar en el Mundo y una reflexión sobre el Arte, concebido el Arte en sus aspectos más generales y más concretos; en el libro yo afirmo que más durará el cuadro y el poema que quienes lo pintamos o lo escribimos y hay un gozo de saber que la obra perdura por encima de nuestra propia pervivencia vital; hay muchas más cosas p.e. una pregunta sobre la Felicidad, en concreto en el poema dedicado a Asunción Jódar que creo que es una de las claves de toda mi poesía: «¿Por qué los dioses fueron incapaces/ de hacer felices a sus hijos, todos;/ los padres deben ser crueles y mudos?», insisto en la mudez del padre que luego se le va a oír con la paráfrasis de las siete palabras de Cristo en la Cruz y toda esa serie de cosas; hablamos del silencio de Dios. 
F.: Y de los Poemas de Granada... 
A. C.: La paráfrasis se rubricó primero en los Poemas de Granada, pero en realidad, su sitio, el sitio natural de este conjunto de poemas es en Miradas sobre el agua. 
F.: ¿Busca la Nostalgia a Antonio por las esquinas? 
A. C.: a mí no.
F.: ¿Cómo te definirías? 
A. C.: Las palabras como «Neuralgia», «Nostalgia», me suenan a enfermedades que se suelen quitar con una aspirina o cosas de esas. Si me dan ataques de melancolía, pero nostalgia no, es algo que está unido a mi modo de vivir, no sé siquiera si habré utilizado alguna vez esa palabra en verso, no la recuerdo, sin embargo la palabra Melancolía sí. 
F.: ¿Tienes una fuente oculta de mala vida? 
A. C.: (Entre risas) ¡Naturalmente! 
F.: Como todo buen artista... 
A. C.: ¡Como todo buen artista no, como todo ser humano que quiera vivir!, ¡buenos estaríamos si tuviéramos que enseñar nuestra intimidad como si fuera un escaparate de mercancías que se compra y se vende! 
F.: ¿Satisfecho con tu poesía?
A. C.: Todavía no, de algunos poemas sí. 
F.: Pero nunca se llega a alcanzar la satisfacción plena de escritor. 
A. C.: Depende de con quien me compare; si me comparo con la mayoría de los vivos, casi me dan ataques de vanidad y casi me creo que soy bueno; si me comparo con algunos vivos y muchos de los muertos desde luego la humildad se impone y hay que reconocer que de acuerdo con lo que a mí me gusta y con lo que admito, falta todavía mucho para llegar a ese escalón. 
F.: ¿Hablamos de Antologías? 
A. C.: Yo siempre digo lo mismo de las antologías: hay que preguntarle a los antólogos y a los lectores. ¡Yo cómo voy a responder por un antólogo!, ni de sus criterios ni de sus gustos. A mí no me interesa la antología que he tenido y porque me consta que han sido lectores y sé qué poemas míos han llegado a un núcleo determinado de lectores. Me interesa saber la reacción de mis lectores y por lo menos los antólogos me ofrecen la garantía de que me han leído y a veces coincidimos en las preferencias. Desde el momento en que me eligen, ya me están valorando, luego, los rótulos que me pongan, es responsabilidad de ellos. Yo me limito a dar las gracias. 
F.: ¿Duermes bien o los sueños te despiertan a menudo? 
A. C.: A mí no me han despertado nunca los sueños, los sueños… sueños son. 
F.: ¿Te siguen inspirando las mismas cosas que hacen veinte años? 
A. C.: ¡Muchas más!, afortunadamente con la edad el mundo se ensancha mucho, también se reduce porque se pierde interés por cosas que a los diecisiete años parecen fundamentales y después uno comprueba que eso son fantasías de ayer y yo estoy totalmente de acuerdo con unas declaraciones de Carlos Fuentes que decía que él a los veinte años era un perfecto idiota; yo coloqué mi grado de idiotez perfecta entre los quince y veintidós años y a medida que la vida lo va escarmentando a uno y lo va poniendo en su sitio se da cuenta que los caprichos de niño, ni son fecundos, ni conducen a nada. Yo recuerdo ese miedo a no saber qué hacer con la vida, esa sensación de vértigo que el tiempo da, la recuerdo como la mejor época física y la peor época espiritual. No hay cosa más idiota que un adolescente y yo fui un adolescente muy completo y por tanto completamente idiota. 
F.: Es muy fácil ver la vida desde la experiencia de haberla vivido… 
A. C.: Es que nos llaman la belleza de fantasmas, y lo mismo que un niño de nueve años elige marcas de camisas, cuando llegamos a los diecisiete años estamos eligiendo marcas de vida sin darnos cuenta de que la Vida hay que hacerla en común con los demás, con la máxima generosidad posible y el mínimo egoísmo. Hay que darse cuenta de que hay formas de vida mucho más auténticas que pueden prescindir de todas esas cosas que nos atosigan, desde esas divinidades absolutamente hostiles hasta ese comercio urgente que está haciendo de nosotros las propias víctimas, el Consumismo. 
F.: Un modo de vida que no conduzca a esas cosas. 
A. C.: Por ejemplo, aceptarse uno como es. A mí no se me ocurre envidiar al señor que pasa por la calle con un Jaguar (que por otra parte es un coche que me gusta mucho), sería mucho más bonito pasearse a lomos de un jaguar de verdad domesticado y andar a lomos de ese bellísimo animal por encima de la Tierra. Los momentos de máxima felicidad, a veces, han sido compartiendo un vino sin ninguna marca. 
F.: ¿Eso se traduce en la poesía que escribes? 
A. C.: Espero que sí, aunque luego uno espiritualmente tenga sus insatisfacciones. ¡Qué más quisiera yo que ser feliz y no escribir poemas!, si fuera absolutamente feliz no escribiría, me dedicaría a ser feliz que es lo más egoísta y lo más hermoso. 
F.: Eso no lo entiendo, la Felicidad puede estar en escribir... 
A. C.: Lo dudo, decía Machado: Se canta lo que se pierde...
F.: O también lo que se gana…
A.C..: Difícilmente, lo que ocurre es que uno quisiera apresar ese momento, y se escribe sobre ese momento de felicidad para que perdure, para que vuelva a instalarse en el alma y no desaparezca del todo. El poema tiene sentido como disfrute estético y como consuelo siempre me ha entusiasmado la función alcahueta de la poesía. Un poeta auténticamente alcahuete es de los instrumentos más necesarios para el desarrollo de la vida humana. No hay cosa más maravillosa que sorprender a los adolescentes cruzándose versos bien de Bécquer, bien de Salinas, que a un día llegan un amigo y se dé las gracias porque ha cogido dos versos tuyos y ha ligado con ellos, y eso a mí me llena de satisfacción porque entiendo que de esa manera ha facilitado la vida de los demás, lo mismo que a mí me gusta cuando no sé definir lo que tengo dentro, encontrarme con el verso ajeno pongamos por caso de Miguel Hernández y poder concretar mi situación anímica. Yo puedo definir mi adolescencia con unos versos de Lorca que dicen: «...Hoy tengo en el corazón un vago temblor de estrellas, y tengo las cosas son tan blancas como mi pena...» y también puedo en un momento de desgracia auténtica acordarme del aquel verso de Miguel Hernández «Cuánto penar para morirse uno», y tirar para adelante..., y a mí me gustan los poetas que me acompañan. Hay una frase de San Agustín que dice: «...Belleza tan antigua y sin embargo nueva (se me viene a la cabeza la palabra «afín», por aquello de que hacemos a los dioses a nuestra imagen y semejanza); esa frase de San Agustín la hace mirar a uno alrededor y ver cuánta belleza se le escapa, porque la Belleza siempre es vieja y siempre es nueva, siempre es antigua y siempre es presente. 
F.: Cualquier pequeño detalle puede guardar más belleza que todo un mundo... 
A. C.: No son magnitudes mensurables. 
F.: ¿Crees que se puede distinguir un poeta auténtico de otro que no lo es? 
A. C.: Hay algo que casi nunca suele fallar: el poeta auténtico aun en lo más aparentemente vacío, aun en lo más aparentemente esteticista, tiene siempre un latido afectivo que se contagia, y eso es fácilmente detectable; una vez que un espíritu humano se pone en contacto con ese producto de otro espíritu humano, ese fenómeno se detecta, esa especie de pequeña conmoción que nos avisa de que allí está la poesía auténtica; si está la poesía auténtica, aquel poema bueno. Luego hay poetas muy artificiosos, muy deslumbrantes, que no transmiten esa emoción y el poema termina pasando por el espíritu de uno sin romperlo ni mancharlo, como si no hubiera existido, y si se nota, los poetas verdaderos se notan siempre. 
F.: ¿Y para cuando el Nacional, Antonio? 
A. C.: Eso es un problema de los jurados. Le digo a los premios igual que a las antologías, no es el antologado ni el premiado el que tiene que ser preguntado, sino que son los antólogos y los jurados los que tienen que responder de sus actos. 
F.: Pero Antonio Carvajal no lo necesita... 
A. C.: (Entre risas), ¡pues la verdad que cinco millones de pesetas no me vendrían mal!... 
F.: No me refería precisamente a la cuestión económica..., Antonio Carvajal no necesita ya ese premio. 
A. C.: Los reconocimientos ajenos nunca están de más y por mucho que se diga que uno es autosuficiente, si viene ¡bendito sea!, lo que yo no puedo hacer es rebajarme a mendigarlo, si no me lo dan sus razones tendrán ¡a mí que no me pregunten! (entre risas), no sufro porque no me lo den, ni tampoco me voy a alegrar demasiado porque me lo den. 
F.: A eso me refería precisamente... 
A. C.: Tampoco me acuerdo de quien fue el premio de hace cinco años o seis o siete, los premios son una cosa absolutamente efímera, en cambio si me preguntáis por el Premio de las Letras Españolas, sí me acuerdo porque el Ministerio de Cultura hace unas publicaciones maravillosas y después cuando uno las hojea, uno se da cuenta de que aquello sí es un premio consistente, no sólo en dinero sino la publicación de una serie de obras que sí justifican un premio de esa categoría.

Antonio Carvajal. Desde aquí, y en nombre de todos los lectores queremos agradecerte tu colaboración y sus momentos de reflexión y diálogo compartidos. Como dijo Rubén Darío:
[POEM]Ama tu ritmo y rima tus acciones 
[POEM]bajo su ley, así como tus versos, 
[POEM]eres un universo de universos, 
[POEM]y tu alma una fuente de canciones.
[POEM]
[POEM]                           (De Prosas Profanas: 2. «Las ánforas de Epicuro» poema: «Ama tu ritmo»)

[TITLE-CENTER-BOLD]DOS POEMAS DE ANTONIO CARVAJAL DE SU LIBRO RASO MILENA Y PERLA
[SUBTITLE-CENTER-ITALIC]A Mari Paz Muros y Juan Carlos Lazúen
[SUBTITLE-CENTER]Dejó un cuadro, un puñal y un soneto
[SUBTITLE-CENTER-ITALIC]Manuel Machado

[POEM]Si mañana no vivo, si mañana 
[POEM]queda inmóvil la luz en mi ventana 
[POEM]sin mi apresuramiento y mi figura, 
[POEM]sabed que algún soneto os he dejado 
[POEM]y que, cruzando del olvido el vado, 
[POEM]salvé de tantos cuadros la hermosura.
[POEM]
[POEM]El puñal me lo llevo entre los dientes 
[POEM]porque morder las frases más mordientes 
[POEM]es caridad, si no cautela humana. 
[POEM]¿Qué os dejo? Mi palabra agradecida 
[POEM]y nada más. Si acaso, una manzana.
[POEM]
[POEM]que en vuestras bocas suene a fresco fruto. 
[POEM]Iré a otra luz. La luz no guarda luto 
[POEM]por quien la amó en el arte y en la vida.
[DOUBLE-IMG:4:5]`,
    coverUrl: '/images/Entrevistas/Carvajal/PORTADA FICCIONES.jpeg',
    interviewer: 'Belén Juárez',
    location: 'Granada',
    images: [
      '/images/Entrevistas/Carvajal/retrato.jpg',
      '/images/Entrevistas/Carvajal/tigres.png',
      '/images/Entrevistas/Carvajal/serenata-y-navaja.jpg',
      '/images/Entrevistas/Carvajal/ciudades.jpeg',
      '/images/Entrevistas/Carvajal/raso.jpeg',
      '/images/Entrevistas/Carvajal/dedicatoria.jpg'
    ]
  },
  {
    id: '2',
    title: 'ENTREVISTA A JUAN CARLOS SUÑÉN',
    slug: 'entrevista-juan-carlos-sunen',
    publication: 'Ficciones, Revista de Letras. 2ª Época. Nº2. Verano/Otoño 1997. Pág 58-63',
    year: '1997',
    date: 'Verano/Otoño 1997',
    intro: 'Once de la mañana, nos situamos en el Círculo de Bellas Artes de Madrid y es Juan Carlos Suñén, autor de numerosos libros y ganador de otros tantos premios nacionales, quien me recibe.',
    hideIntroInDetail: true,
    content: `[BOOK]EL HOMBRO IZQUIERDO|1997, XVIII Premio Ciudad de Melilla, Colección Visor de Poesía.
[BOOK]UN HOMBRE NO DEBE SER RECORDADO|1992, IX Premio Rey Juan Carlos de Poesía, Colección Visor de Poesía.
[BOOK]POR FORTUNAS PEORES|1991, Poesía/Cátedra.
[BOOK]LA PRISA|1994, Poesía/Cátedra.
[BOOK]PARA NUNCA SER VISTOS|1988, Ediciones Libertarias.
[BOOK]UN ÁNGEL MENOS|1989, Ediciones Libertarias.

[BR]
[BR]

Once de la mañana, nos situamos en el Círculo de Bellas Artes de Madrid y es Juan Carlos Suñén, autor de numerosos libros y ganador de otros tantos premios nacionales, quien me recibe.

[IMG:6:L]
F.: Tú publicas tu primer libro PARA NUNCA SER VISTOS, en 1988. ¿Cuál es el mensaje de esta primera publicación?
—Yo llevaba escribiendo mucho tiempo y PARA NUNCA SER VISTOS es el primer libro que siento que se puede publicar. En aquel momento me importaba mucho no hacer lo que se estaba haciendo en el país, no me gustaba el venecianismo ni me gustaba tampoco la poesía realista que empezaba a despuntar con la Poesía de la Experiencia. Buscaba algo diferente, lo buscaba en mis clásicos, desde San Juan de la Cruz hasta Paul Celan; PARA NUNCA SER VISTOS es un libro más esencialista que los anteriores donde yo seguramente soy un escritor inseguro y donde tengo una sensación más intelectual que ahora.
F: Antes escribías otras cosas...
—Sí, escribía todas esas cosas que escribimos cuando somos más jóvenes pero que no acababan de convencerme. Cuando uno es joven tiende más a tener obsesiones de tipo intelectual, después éstas se vuelven obsesiones de tipo real que es de lo que hablaría ya en los últimos libros, donde hablo del tiempo, de mi concepción sobre la poesía, de mis deseos sobre la Vida en algún momento; ideas y percepciones que me preocupan más intelectualmente que experimentalmente.
[IMG:7:R]
F: En el siguiente libro UN ÁNGEL MENOS se reúnen más las condiciones de la vida, el Ser de la Vida; existen conceptos bíblicos. ¿Por qué esa transición de la Vida a través de tonos proféticos?
—Me interesaba el lenguaje profético porque me iba a obligar a encontrar cosas diferentes, pero sobre todo porque, aunque creo que no era consciente todavía, ya empezaba a escribir con lo que sería mi escritura en sí, que en el fondo es mi propia vida. En aquel momento, creo que ya tenía al menos una dirección y una serie de ideas claras sobre la Vida, esos silencios que se enumeran en el libro donde se reúnen aquello para lo que la Vida no tiene respuestas, aquello que uno tiene que responderse solo. Es un libro muy de arranque, de iniciación a la vida por decirlo de un modo poco feliz pero exacto.
F: ¿Te basas en algún escritor anterior para estos silencios?
—No, no hay conexión con la Poesía del Silencio. No es un silencio adoptado desde influencias literarias, es el silencio del lenguaje, un silencio que se produce porque el lenguaje mismo no es capaz de definir determinadas cosas, y ahí es donde surge la Poesía precisamente, cuando las palabras tienen que ir revelando esos silencios, tienen que ir señalándole al lector el lugar de esos silencios.
F: En 1991 aparece el libro POR FORTUNAS PEORES. ¿Describe el autor en este libro una propia experiencia junto con los dos anteriores que forman la trilogía?
—Sí, en este libro está mi vida también. Hay quizás más realidad, en el sentido de que hay más pasado que en los otros libros, hay un pasado más asimilado, más fatalista, aunque sigue siendo un libro optimista en cualquier caso. Es un libro donde empiezo a pedirle cuentas al mundo; no sólo le digo lo mío, sino que le pregunto por lo suyo también. Es un libro donde empiezo a pensar más en el lector como aquel que completa o termina el poema. Me inicio más en el interés de la mezcla de géneros literarios o mejor dicho en la posibilidad de no ceñirme a ningún género literario; es un libro donde se entra y se sale de la prosa, se entra y se sale de la poesía, y creo que, sin demasiadas dificultades, sin advertir que ese cambio se está produciendo. Desde el punto de vista formal, eso me interesaba y me sigue interesando en estos momentos.
[IMG:8:C]
[SUBTITLE-CENTER]Juan Carlos Suñen, Madrid 1997

F: Me dices que el lector es quien termina el poema, ¿quizás es un rasgo de la Poesía de la Experiencia?, ¿existe conexión contigo?
—Tengo que discrepar que en la Poesía de la Experiencia el lector no termina nada, el lector recibe un paquete de sentido unidireccional donde lo único que le puede quedar al lector después de leer el poema es un pequeño resumen del poema, precisamente por la definición que la Poesía de la Experiencia ha hecho de sí misma como prosa que ha hecho gimnasia, es decir, porque parece no aceptar una esencia propia, sino que la poesía, según sus poetas, sería una veladura o hermoseamiento de la prosa; creo que elimina la dosis de ambigüedad que la poesía debe tener, el hecho de que la palabra se esté utilizando con muchos más valores que el simple valor conceptual y el lenguaje en muchos más sentidos que un simple sentido sintáctico habitual. Aquí es donde empieza la poesía, creo yo, pero aquí es donde termina desde el punto de vista de la Poesía de la Experiencia. Cuando estás dejando el poema abierto, es cuando la intervención del lector se vuelve más importante.
F: Hablando de LA PRISA, libro que aparece en Cátedra en el año 1994, se ha dicho que constituye una de las experiencias más ricas de la última poesía española, donde se reúnen los pasos de la lectura, la indagación del lenguaje y el análisis de la realidad. ¿Cómo analiza J.C. Suñén la Realidad en este libro?, ¿aparece como una ruptura con los anteriores?
—Aparece como una síntesis de las diferentes direcciones en las que yo había buscado, con la misma obsesión de dar cuenta de la Vida. Lo que ocurre en este libro es que me propongo hablar de mi generación, o mejor aún hablar de la frustración de mi generación que tuvo el horizonte al alcance de la mano y que le fue arrebatado; estoy hablando del sentido político. En cualquier caso, en el mismo momento de empezar, arrebatar un poema ya de una manera consciente, en el fondo, es la experiencia de cualquier ser humano en cualquier momento de la vida con independencia de la época que le haya tocado en suerte. Es un libro donde la Realidad entra en forma de lenguaje cotidiano, y donde detrás de las escenas cotidianas surge el sentido transcendente que es lo que quiero que reciba el lector; esa sensación de solidaridad o de consuelo que uno experimenta leyendo algunos autores.

[IMG:0:C]
[SUBTITLE-CENTER]Juan Carlos Suñén y Belén Juárez en el
[SUBTITLE-CENTER]Círculo de Bellas Artes de Madrid. 1997
[IMG:1:R]

F: ¿Existe un juego con el Tiempo?
—Siempre existe un juego con el Tiempo, porque somos el pasado; cuando pensamos en nuestra propia vida, estamos pensando en el pasado, la Vida transcurre en el pasado, pero no siempre la vemos igual, dependiendo de nuestra propia evolución el pasado lo vamos organizando de modos diferentes; es el corazón quien organiza nuestro pasado, no la memoria.
F: ¿Existe una historia del lenguaje en este libro?
—Menos que en el anterior, hay una historia del lenguaje sobre todo en algunas escenas del primer libro PARA NUNCA SER VISTOS donde se llega a eludir lo que eran los ejercicios del lenguaje, de una manera muy velada, pero está ahí; y en POR FORTUNAS PEORES existe un cruce constante entre la figura femenina y el lenguaje, por momentos no se sabe de qué está hablando exactamente. En cualquier caso, siempre he tenido la sensación de que todo lo que nos ocurre, no nos pasa si no pasa en el lenguaje. El lenguaje es la medida de lo Real.

[POEM]¿Va la fuente a la sed, la tumba al muerto?, No,
[POEM]pero yo (me consuelo) he de llevar la casa al [visitante.
[POEM]Y he de sacar la puerta de sus goznes,
[POEM]depositarla alerta al pie de su deseo.
[POEM]Yo he de llevar la lengua a la palabra.
[SUBTITLE-CENTER-ITALIC]Del libro: POR FORTUNAS PEORES

[IMG:4:R]
F: ¿Echa J.C. Suñén la mirada atrás en el tiempo con su libro EL HOMBRO IZQUIERDO?
—Sí, la echa al menos el protagonista del libro que podría ser el mismo personaje que en LA PRISA concluye la última página cerrando la puerta de su casa y metiéndose en ella; y podría ser este mismo personaje el que analiza las mismas cosas, a sí mismo también, pero desde otra perspectiva. Me había resultado difícil sacarme del oído el tema de LA PRISA, pretendía escribir un libro que no fuese LA PRISA-II, y yo era muy consciente de que lo que necesitaba era un lugar desde donde mirar lo mismo, y ese lugar apareció en la Naturaleza. Es un libro donde la Naturaleza está muy presente, donde el discurso está muy pegado al suelo, pero la Naturaleza que aparece no tiene un mensaje especial que darle al hombre, es una sensación de un
personaje que se perdió en algún momento y que se encuentra a sí mismo en la Naturaleza.

[POEM]Allí los corazones
[POEM]claman sin descubrirse. El sufrimiento dicta
[POEM]sin vergüenza su precio. Le susurra
[POEM]su confidencia el hombre
[POEM]al lobo. La costumbre
[POEM]se ciñe a ese rencor. La casa firme,
[POEM]dura más que el presente, se remonta
[POEM]a una fragancia pequeña.
[POEM]Cuando había un sombrero
[POEM]en la repisa de los sombreros.
[SUBTITLE-CENTER-ITALIC]Del libro EL HOMBRO IZQUIERDO

F: Sería como buscar el “Presente Eterno”...
—Nombro el Presente Eterno en el primer libro, es una idea de conceptos, donde el Ser y el Estar coinciden, son los momentos que se persiguen en EL HOMBRO IZQUIERDO y que van organizando la sucesión del libro.
F: ¿Existe el silencio en tus versos?
—Sí, unas veces más y otras veces menos; es como la música, uno puede hacer una pausa y llegar a través de ese silencio al oyente o al próximo tramo; sin embargo, también se puede dejar sonando algunos instrumentos rítmicamente para luego, mediante una mínima variación, introducir el siguiente episodio. Procuro que mis poemas mantengan una estructura musical, y en ese sentido el silencio es imprescindible.
F: ¿Puede el lector introducir su vida dentro de estos libros?
—La pretensión es esa. La experiencia que mueve al poeta a escribir es al mismo tiempo la que entrega al lector, pero no se la puede entregar diciéndoselo, que es lo que harían los poetas de la Experiencia mediante un personaje interpuesto u otro, o mediante un correlato objetivo, creo yo. Pienso que no se le puede decir, lo que sí se puede hacer es poner el lector en situación de vivirla; quizás en él no es exactamente igual, pero esto no es algo importante; lo que sí es importante es que será una experiencia en la misma dirección o intuición que la que tuvo el poeta al escribir. En cualquier caso, lo importante es que el poema se vuelva experiencia.
F: “Un único placer: la Inteligencia” (Guillermo Carnero). ¿Es para J.C. Suñén un placer la inteligencia?
—Lo es si no duele. Si duele es vanidad. La frase la citaba Clara Janés en una crítica a mi primer libro y es acertada porque la poesía debe ser eso, inteligencia, en cuanto que es imaginación al servicio de la verdad; pero también placer, en cuanto que es una incitación a caminar fuera del camino, o sea: seducción. No se trata como ves de ser culto, que sí, sino de saber dudar, de ser crítico.
F: En 1991 como crítico literario de “El País”, ¿encuentras algún tipo de dificultad siendo poeta y crítico a la vez, es decir, crear y criticar la obra ya creada?
—No. Es decir, no fuera de la habitual mezquindad del medio. Decía Eliot que el poeta que ejerce la crítica corre el riesgo de distraerse ante problemas que no perturban a sus colegas menos inquietos. Cito de memoria, pero recuerdo cierta ironía... Y supongo desde luego que hablamos de la crítica escrita, porque un poeta no crítico es algo que no se concibe, me parece. En cualquier caso, uno puede dejar al crítico en posición de tachadura mientras escribe su poema y esperar que aparezca una vez escrito, para que lea sin pasión y decida si lo hecho vale o si hay que seguir, y hasta dónde debe dejar que el poeta se le adelante. Por otra parte, los críticos de poesía suelen ser, a su vez, poetas. Es una cuestión de lenguaje: ¿cómo hablar de algún verdadero poema sin poseer un lenguaje capaz de medirse con él? y, si se posee ese lenguaje, ¿cómo resistirse? Por eso los críticos tienden a primar el poema fácil, que es ese del que pueden hablar.
[IMG:5:L]
F: UN HOMBRE NO DEBE SER RECORDADO, surge como cambio rotundo a los tres primeros libros. ¿Por qué la poesía como conciencia indoblegable?
—Es eso o no es nada. No puedo escribir poemas pensando en lo que se lee en la universidad (un negocio que está detrás de una “poética”, por cierto). Pero ese libro es en realidad un libreto (como un libreto de ópera), posee una voluntad narrativa y una progresión dramática pensadas para su escenificación. Al escribirlo, era el discurso quien seguía al plan, no al revés. Por eso es un libro solitario entre mis libros. No reniego de él, no es eso, pero es otra cosa. En cualquier caso, sí, saltaba allí a primer término mi desprecio hacia ciertas actitudes del poder, y del no-poder...
[SUBTITLE-CENTER]ELLA (y VI) Mors omnia solvit

[POEM]Sintió en el pecho el esmerado filo
[POEM]seco y hondo. Miró la empuñadura:
[POEM]elogió vagamente
[POEM]la sobria habilidad del artesano...
[POEM]Luego cerró los ojos
[POEM]presintiendo
[POEM]a una última mujer.
[POEM]Y, para siempre,
[POEM]soñó que se caía de un caballo.
[SUBTITLE-CENTER-ITALIC]Del libro UN HOMBRE NO DEBE SER RECORDADO

F: En PARA NUNCA SER VISTOS, describes el tiempo de una edad, tiempo de un amor comprado, reconstrucción de un tiempo pasado y conclusión del tiempo vivido. ¿Despecho por vivir en un “presente eterno”?
—¿Despecho? Desazón, quizás, pero una desazón alegre. Nuestra vida transcurre en el pasado y nuestros sueños en el futuro, pero la conciencia es del presente, es presente, y el presente es el único espacio de libertad que conozco.
F: ¿La Muerte en sí como punto final de un tiempo ronda el libro PARA NUNCA SER VISTOS?
—Ronda todos mis libros, pero no como punto final, sino como un elemento más de ese presente. Es la joven muerte, la muerte moderna, que ya no es un punto final, un lugar del futuro al que anclar la construcción de una vida, sino una presencia actual que corremos el riesgo de desvalorizar si no nos ocupamos de tener una ética del presente. Ese cambio de situación de la muerte es el que vuelve viejos todos los argumentos tradicionales, deja a la vida sin argumento. Ya no vivimos para la muerte, sino con la muerte, pero no me parece mal, no siento nostalgia de lo otro. Vivir así exige otra responsabilidad y otra libertad, eso es todo; y no está mal recordar cómo era el mundo cuando tenía argumento, porque ese argumento estaba siempre al servicio de una causa interesada.

[SUBTITLE-CENTER]V
[POEM]Pues el orden del viaje es descendente
[POEM](como en el texto de Orígenes)
[POEM]no alargues la intención:
[POEM]En el diestro costado
[POEM]dispuesto, no lo olvides,
[POEM]muestra a los aduaneros del aire tu viático.
[POEM]Acepta el desafío de un undécimo mandamiento
[POEM]¡Sobrevolad las fiestas!
[POEM]...............................................
[POEM]Recibido el bautismo de la luz encamina
[POEM]tu discurso al prodigio de la profundidad.
[SUBTITLE-CENTER-ITALIC]del Libro PARA NUNCA SER VISTOS

F: ¿Te guía algún ángel cuando profetizas con el verso?
—Llamo “ángel” a todo lo que supera nuestra capacidad de comprensión, pero que no deja de estar en las cosas. Mis ángeles son materiales. En cuanto a mis profecías, se hacen desde la fatalidad y atañen a una primera persona, no se hacen desde ninguna fe, de modo que si me guía un ángel ha de ser el ángel del embrollo.
F: Últimos trabajos...
—Me estoy fijando en los niños; no sé, no tengo nada claro todavía. Desde luego no deseo escribir “para” los niños, pero quizás sí sobre ellos, aunque aún no tengo nada a lo que agarrarme... Me gustaría, eso sí, terminar un libro de ensayos con el que ando peleando hace unos años. Ya veremos.

[TITLE-CENTER-BOLD]Poemas del libro La Prisa, Cátedra, 1994
[POEM]Teníamos la prisa de las navajas
[POEM]Doblábamos la manta en que dormían
[POEM]nuestros muertos y alzábamos el vaso
[POEM]en honor de algún sol moderno y limpio.
[POEM]Teníamos el orgullo,
[POEM]la salud y el regalo de la pobreza,
[POEM]las señales y el tiempo de las señales,
[POEM]la ignorancia y el brazo de la ignorancia,
[POEM]el pan,
[POEM]y la buena suerte.
[POEM]Teníamos la prisa de las navajas. Eso,
[POEM]y una escasa experiencia de lo fría

[TITLE-CENTER-BOLD]Entre la sucesión y la revuelta
[POEM]Así podría
[POEM]descansar todo aquí, ser que no guarde
[POEM]memoria de esta noche (sin embargo, sumada
[POEM]a la futura cuenta
[POEM]de su futuro muerto, recibida
[POEM]en el miembro amputado
[POEM]la moneda del yo) sino esa débil
[POEM]mala conciencia con que cierra, como
[POEM]el que cierra prudente su navaja,
[POEM]el hombre que nos queda,
[POEM]la puerta tras de sí,
[POEM]sin desengaño.

[IMG:2:C]
[SUBTITLE-CENTER]Ilustración para la entrevista

[IMG:3:C]
[SUBTITLE-CENTER]Dedicatorias de libros de J.C. Suñén a B. Juárez.`,
    coverUrl: '/images/Entrevistas/Suñen/portada.jpeg',
    interviewer: 'Belén Juárez',
    location: 'Madrid',
    images: [
      '/images/Entrevistas/Suñen/retrato.jpeg',
      '/images/Entrevistas/Suñen/img20260218_20330407.jpg',
      '/images/Entrevistas/Suñen/dibujo.png',
      '/images/Entrevistas/Suñen/dedicatorias.png',
      '/images/Entrevistas/Suñen/hombro.jpg',
      '/images/Entrevistas/Suñen/hombre.jpg',
      '/images/Entrevistas/Suñen/nunca.jpg',
      '/images/Entrevistas/Suñen/angel.jpg',
      '/images/Entrevistas/Suñen/retrato2.jpg'
    ]
  },
  {
    id: '3',
    title: 'ENTREVISTA A JUAN CARLOS RODRIGUEZ, UN FILÓSOFO ACTUAL',
    slug: 'entrevista-juan-carlos-rodriguez',
    publication: 'Ficciones, Revista de Letras. 2ª Época. Nº4. Otoño/Invierno 1998. Pág 37-44',
    year: '1998',
    date: 'Otoño/Invierno 1998',
    intro: 'Juan Carlos Rodríguez fue catedrático de Literatura de la Facultad de Filosofía y Letras de la Universidad de Granada. Se dedicó exclusivamente a la docencia y la investigación teórica y crítica. Publicó los siguientes libros: Teoría e Historia de la Producción Ideológica (Madrid, Akal, 1975. 2ª Ed. 1990); Melodrama y Populismo en la cultura latinoamericana (incluido en Granada Tango, 1981); La Norma Literaria (Granada, Diputación Provincial, 1984. 2ª Ed. 1994); Moratín o el arte nuevo de hacer teatro (Granada, La General, 1991); Introducción al estudio de la Literatura Hispanoamericana (Akal, 1987, en colaboración con Álvaro Salvador. 2ª Ed. 1994). La Poesía, la Música y el Silencio (de Mallarmé a Wittgenstein) (Renacimiento, Sevilla, 1994); Lorca y el Sentido (Un Inconsciente para una Historia) (Madrid, Akal, 1994). La Literatura del Pobre (Granada, Comares 1994).\n\nSu libro Teoría e Historia de la Producción Ideológica fue traducido por la Universidad de Nueva York donde realizó en la primavera de 1998 un curso titulado "La renovación del pensamiento marxista: Louis Althusser y Juan Carlos Rodríguez". En la primavera de 1999 realizó otro curso (también en la Universidad de Nueva York) titulado: "Neomarxismo y Postmodernismo: Juan Carlos Rodríguez y Anthony Cascardi".\n\nOtros de sus libros hasta el momento de la entrevista fueron: Brecht y el poder de la Literatura (Comares, Colección De guante blanco) y El escritor que compró su propio libro (Comares, Colección De guante blanco).',
    content: `
—Antes de publicar tu primer libro, llenabas las aulas de gente que acudía a tus clases. ¿Te consideras maestro de muchos?
—Por una parte, creo que soy un buen maestro, es decir, mi primera pasión es desde luego la lectura, la segunda pasión para mí es enseñar, enseñar lo que he leído, o mejor, que a la gente le guste leer, aprenda a interpretar la vida, porque eso es la lectura, y la tercera pasión es escribir, por ese orden. Juan Ramón Jiménez decía que él no era un maestro de escuela, pero no tenía nada en contra de los maestros de escuela, se refería a maestro de ninguna escuela poética. Yo no creo que jamás haya sido un maestro de nadie, lo que sí sé es que hay muchas personas influenciadas por un pensamiento mío, por ejemplo, dentro de unos días presido la mesa de Congresos de Psicoanálisis de la Sociedad Andaluza de Psicoanálisis. Bueno, pues el director de la S.A.P. es un médico de Málaga que siempre dice que se hizo psicoanalista gracias a mis clases. Esas son cosas que se agradecen.
—Las cosas que has dicho han influido mucho y casi crean escuela...
—Sí, eso por supuesto es cierto, pero yo creo que más bien porque inevitablemente depende de la pasión que tuve a la hora de enseñar, a la hora de conversar, a la hora de hablar de la Literatura, que normalmente no es un tema que se toma en serio. Yo planteé que la Literatura no es sólo una cuestión de estética ni de belleza, pienso que la Literatura nos indica una serie de contradicciones básicas del subconsciente humano y por eso tiene la fuerza que tiene.
[IMG:1:R]
—¿Y de cuántos has sido discípulo?
—¿De quién me considero discípulo?, evidentemente de Althusser, pero eso no quiere decir que yo sea althusseriano. Althusser para mí fue fantástico, pero piensa, a principios de los años 70 fue fundamental, luego cuando me fui a trabajar con él a París, él me enseñó a leer, lo cual no quiere decir que yo sea una persona que siga estrictamente el planteamiento de Althusser.
—¿Cómo se puede escribir con veintipocos años un libro como Teoría e Historia de la Producción Ideológica?
—Pues mira, empecé a escribirlo cuando estaba haciendo la mili en Tarifa, en el año 68. Empecé a escribir primero mi Tesis y nos buscábamos libros prohibidos, que no se conocían. Empecé haciendo un planteamiento del pensamiento moderno (entonces en España no se conocía), y después de trabajar durante tanto tiempo en torno a la Teoría, llegué a la conclusión de que era evidente que aquello no lo iba a entender ni dios si yo lo publicaba. Lo presenté como Tesis, y ahora veinte años después posiblemente esa Tesis salga a la calle, pero porque todo el mundo conoce en estos momentos más o menos de lo que va el tema. Para que se me entienda de lo que voy a hablar: en la España del franquismo final, se hablaba mucho del s. XVI, XVII, porque era la España imperial, entonces pensé, voy a escribir sobre el s. XVII y voy a escribir otra historia de lo que es el s. XVII. Me volví a encerrar otro par de años, contando ya con la formación teórica que yo había adquirido al escribir mi Tesis. Y más tarde lo publiqué.
—¿Existía una inquietud antes de escribir el libro?
—Sí, yo tenía una idea clarísima: casi todo lo que nos habían explicado tantas y tantas veces sobre el s. XVI y XVII español, era mentira. Y lo que me planteaba muy seriamente era que allí había valores, cuestiones muy importantes que elucidar, cuestiones fundamentales. No es que yo tuviera nada en contra del s. XVI y XVII, se verifica en "La Literatura del Pobre" (y voy a publicar otro libro sobre Góngora), lo que ocurre es que no me gustaba como se planteaban. Por ejemplo, Orozco que era un magnífico profesor, sí que lo estudiaba de otra manera, pero tenía otro planteamiento, el de otra época. El valor de ese libro es quizás la cita que inicia el texto (de uno de mis autores favoritos, Lewis Carroll), luego ya viene todo el trabajo a partir de la primera frase: "...La Literatura no ha existido siempre..." formó un lío increíble.
[IMG:4:L]
—¿Cómo se puede decir que la Literatura no ha existido siempre?
—Creo que cualquier sistema histórico lógicamente tiene sus planteamientos, sus discursos, etc, tiene una economía, una política y una ideología. Yo me planteé que la idea del sujeto libre, esa expresión que se llama Literatura, no había existido nunca, es el sujeto el que lo siente, lo otro es una invención de la libertad del mercado burgués, como la política de Maquiavelo, es el resultado de las relaciones del poder capitalista, del mercado capitalista que aparece a principios del s. XIV y siguiendo en el XVI. En la época de los griegos, en la época del esclavismo, o del feudalismo, no existe la idea del sujeto libre, existe la idea del dueño del esclavo, y el que es dueño del esclavo es el que es libre.
—Pero sí existe la libertad del sujeto...
—No, lo que no existe es la idea del sujeto, el sujeto es una relación, no es una entidad. El sujeto es una relación hacia algo, igual que el capital que siembra una relación con algo, si no existiera el capitalismo y el explotado no existiría el Capital. Sin esa relación señor-siervo no habría existido el feudalismo. Por eso todos los textos son anónimos, no hay autores de texto, los autores de texto son gente que firma pero que lo único que hacen es glosar el texto del señor, o de los caballeros, o de la Iglesia. El capitalismo tiene la habilidad de explotarnos diciéndonos que somos sujetos libres, de ahí nace el amor, la amistad y todas esas cosas. Me di cuenta que por eso era posible que existiera Garcilaso; Imaginaba que hasta ese momento todo estaba escrito por la palabra de Dios, en cambio Garcilaso le dice a la dama "...Escrito está en mi alma...". Es la dama quien escribe el gesto y el alma es la del poeta, eso es asombroso.
[IMG:0:C]
[SUBTITLE-CENTER]Juan Carlos Rodríguez el día de la entrevista. 1998.
[BR]
—Un descubrimiento...
—Claro, el descubrimiento del Amor.
—Si no ha existido siempre la Literatura, ¿cuándo empieza a existir?
—Cuando existe el mercado, la ciudad y la producción del sujeto libre, las ciudades italianas del s. XIV y XVI.
—¿Ahí empieza a existir la Literatura?
—Sí, lo que entendemos hoy por Literatura. Lo que no quiero decir es que no existiera Política o Mercado en Atenas, lo que quiero decir es que no es lo que entendemos hoy por política o mercado, es como decir que existía Wall Street en Atenas; es curioso, cuando uno plantea esto a nivel político o económico no hay ningún problema. Si a alguien le preguntas si existía la Bolsa de Tokio o la de Wall Street en Atenas, nadie lo pone en duda, pues no, la bolsa de Tokio o de Wall Street no existía en Atenas, existía otro tipo de economía y era otro tipo de política, y otro tipo de Estado, por eso lo tienen que teorizar... Pero cuando se habla de la Filosofía o la Literatura todo cambia, parece como si quisieras cambiarles el espíritu, ahí radica el problema.
[IMG:3:R]
—Puede que fueran diferentes tipos de Literatura...
—En abstracto en cualquier modo de producción hay una economía, una política y un inconsciente ideológico, ahora bien, nos consideramos eternos por una cosa muy sencilla: como todo tipo de producción, está basado en la explotación, todos tienen que legitimarse, y consideramos eternas cosas como las leyes, la moral, la literatura, etc... Y eso es falso, eso es absolutamente histórico. Si quieres llamarle a lo que hacían los griegos, o a lo que hacían los feudales (que no hacían más que glosar la Biblia para entendernos), si quieres llamarla a eso Literatura, pues llámale Literatura. Desde que se inventó el sujeto libre o el amor (que es falso, porque es la libertad jamás existe, libertad determinada por el sistema capitalista), pues si aquello es Literatura, llámale a esto X. El problema que se plantea es la eternidad de la naturaleza humana, la linealidad evolutiva de al Naturaleza humana. Aquí lo que existe un poco es la Evolución de Darwin, es decir el hombre ha nacido como un origen pequeño, como una semilla y se va desarrollando (ese espíritu humano) hasta hoy. Nosotros preguntamos: ...La Literatura de la Edad Media, y podemos decir —de la edad media entre qué—; Hablamos del Renacimiento, y nos preguntamos —qué es lo que renace— Edad Media y Renacimiento son términos que están escritos por la burguesía, quiero decir que primero fue el supuesto origen pleno del espíritu humano que habría nacido en Grecia, luego vendrían los curas a establecer la superstición y a eso se le llama Edad Media u Oscuridad de mil años, y en el siglo XVI cuando triunfa la burguesía, cuando empieza a triunfar el sistema burgués o capitalista sería el Renacimiento, porque tiene que buscarse un origen, eso es completamente falso. Desde mi planteamiento, lo que no cabría es la idea de la Naturaleza Humana. Yo no creo en nada de todo esto, yo creo que la "individuación humana" es completamente distinta en el sentido social, es decir se puede hablar del inconsciente en un doble aspecto: en el sentido del paso de la vida a la muerte o de la muerte a la vida, que es en el sentido por ejemplo en el que habla Freud del inconsciente (que posiblemente también sea histórico pero su base es transhistórica), o en el sentido de la radical historicidad de la contingencia humana, incluida por tanto la Literatura. En este sentido yo hablo del Inconsciente Ideológico: "Yo soy o yo escribo" partiendo de la base de que en Grecia no se escribía, se hablaba. Platón decía que escribía... De una cosa estamos seguros y es que en Grecia existieron las Matemáticas, pero el origen de la Ciencia es distinto. Ten en cuenta que las Matemáticas griegas no conocían el cero, es decir, por ejemplo, la Astrología griega creía igual que la Medieval que la Tierra estaba quieta y el Sol se movía. ¿Puedes decir que esa misma Física es la que existe hoy? En el libro de Foucault (1994) dice que los griegos y los latinos forman parte de nuestra literatura, no de la suya, por la magnífica razón de que la Literatura griega no existe, como tampoco la latina (Lenguaje y Literatura, pág. 64). Si eso lo dice Foucault, va a misa, pero que lo dijera J.C. Rodríguez en 1974 formó el follón que formó. De todas maneras, yo estoy fascinado por la escritura latina, lo que ocurre es que es una escritura completamente distinta a la nuestra, y quizás eso me fascina.
[IMG:2:R]
—Evidentemente hay una evolución del pensamiento...
—No, hay una ruptura, una evolución es imposible.
—Para llegar a los conceptos actuales es necesaria una evolución...
—Para llegar a los conceptos actuales, tu jamás evolucionarás desde que la Tierra está quieta hasta que se mueve, no sería evolución, tienes que cambiar el planteamiento teórico. Por mucho que tú evoluciones tu pensamiento a partir del pensamiento central de que la Tierra está quieta, jamás llegarás a la idea de que la Tierra se mueve evolucionando. Para llegar a la idea de que es el Sol el que está quieto tienes que cambiar completamente tus conceptos teóricos, sino… no llegas.
—Cambiarlos, pero conocer los anteriores...
—Claro, pero tienes que romperlos.
—Entre el primer libro que publicas y el siguiente, pasan diez años o más y a partir de 1991 se publican por lo menos cinco, el ritmo de publicación parece irregular, ¿a qué se debe?
—Se debe a que, por una parte, durante esos años yo estaba preparando una nueva versión de la Tesis doctoral, tanto es así que me costó dos enfados con la Editorial, yo seguía en el empeño de sacar la legitimación teórica de lo que había dicho en Teoría e Historia de la Literatura y lo retiré dos veces. Por otra parte, lo que ocurre es que el mundo editorial es muy caprichoso, les entregas los libros y se acumulan en años. Pero no estoy dispuesto a enfadarme.
—¿Tu producción seguía?
—Sí, durante esa época publiqué alrededor de cincuenta artículos, además seguía en el empeño de sacar ese libro teórico. Espero que esta vez sea la vencida, como se suele decir.
—¿El año 1998 es el año Lorca? ¿Disfrutas del año Lorca?
—Me gustan más los números impares, me encantaría celebrar el 73º aniversario de algo, o el 13º...
—¿No es el año Lorca?
—Es una manipulación. Yo comprendo que todo el mundo tenga que hacerlo. No me parece ni bien ni mal. El libro que escribí sobre Lorca, lo escribí para quitarme el lorquismo de encima, aunque también escribí ese libro porque le debía algo a Lorca. Estuve en el Comité de los 33 del primer homenaje a Lorca en Fuente Vaqueros, y cosas por el estilo, pero estaba un poco cansado y pensaba que había que escribir un libro sobre el sentido de Lorca. Es un libro un poco difícil, sobre todo las treinta primeras páginas porque también son muy teóricas. Pero por una parte, es un rechazo al lorquismo establecido, y por otra parte es un pago de una deuda porque yo también a Lorca le debo mucho, Granada le debe mucho.
—Se asocia demasiado Lorca con Granada, Granada con Lorca...
—Sí, la cuestión es el problema de la muerte, de la mala conciencia de la muerte. No es que se abuse, es que hay una mala conciencia de la muerte. Esta ciudad sabe de sobra que como Lorca decía, es la peor burguesía de España, y esta ciudad mató a Lorca, fue una situación política y una cultura política. Por una parte, Lorca era una figura genial, la gracia, el duende y el genio de la ciudad, y por otra parte existía la mala conciencia de haber matado a un inocente. Hay un problema básico, lo que todo el mundo se ha planteado siempre, y ya no me refiero a Granada sino incluso la gente de fuera de España, y es por qué mataron a Lorca, claro por un lado el levantamiento de los fascistas, y por otro lado el que hubiera miles de muertos inocentes. Pero al ser Lorca tan importante la gente se pregunta por qué lo mataron, es un poco el símbolo de nuestra guerra civil, es decir el por qué ocurrió esta guerra. Fue la primera lucha del Fascismo contra la Democracia y lo malo es que las democracias dejaron sola a la República, y las democracias se basan en la libertad de expresión, es decir en la idea de que el lenguaje no delinque, y a Lorca lo mataron por sus ideas o su lenguaje. Yo creo que la mala conciencia no la tiene sólo la burguesía granadina, sino todas las democracias europeas.
—¿Literariamente Granada es Lorca?
—No, Granada tiene muchas más cosas, tiene más literatura comparativamente que ninguna otra ciudad de España, teniendo en cuenta el número de habitantes.
—Siempre se asocia no a Lorca con Granada, sino a Granada con Lorca...
—Sí, desde fuera, pero hay mucho más. El Lorca que ahora escribo es para mí el Lorca de la conciencia trágica. Es tan trágico como Nietzsche o Schopenhauer.
—Pero no se conoce...
—Te voy a sorprender un poco, a mí quizás lo que más me gusta sea El Romancero Gitano. En plena época vanguardista no se escribían romances, lo cual no quiere decir que Poeta en Nueva York no sea una genialidad, y si ves mi libro, está dedicado básicamente a todas estas cosas. Sin embargo, lo que ahora he trabajado son Las Suites y El Diván del Tamarit, me parece una obra genial y la negatividad es ahí sorprendente. Y así volvemos al problema básico de la conciencia trágica de todos nosotros, o sea de la imposibilidad de enganchar el nombre propio al lenguaje. Quizás por eso el verso que más me ha impresionado siempre de Lorca es precisamente... "que raro que me llame Federico"...
—El Público también...
—El Público es el teatro imposible. Yo me planteé qué era imposible en Lorca, porque Lorca había dicho que iba a escribir algo imposible. Y bueno, El Público, o La Comedia sin título, o el Drama sin título, yo considero que son las obras maestras de Lorca, pero no creas que desprecio el topismo de Lorca, en absoluto. Él se enfadaba porque tenía más de treinta años, que en aquella época era una edad muy avanzada y seguía teniendo que vivir con sus padres, ¿no?, mientras que Dalí se hacía rico pintando chorradas y haciendo negocios (...entre risas...). Dalí nunca fue un genio, lo que ocurre es que Lorca estaba enamorado de Dalí.
—¿Dalí nunca fue un genio?
—Nunca.
—¿Ni lo es?
—No, ¡que va!, genios fueron Lorca y Picasso, Dalí no fue un genio, fue un buen talento, un buen imitador, un tipo que sabía analizar la coyuntura como nadie, y en cada coyuntura pintaba lo que estaba de moda, lo que era necesario. De todas maneras, a lo mejor me estoy equivocando, porque Freud en su correspondencia (acabo de terminar un libro sobre la correspondencia de Freud), cuando recibe a los surrealistas, dice "me han parecido todos idiotas menos el español que tiene los ojos más inteligentes que he visto en mi vida", eso dice Freud de Dalí.
—Dalí dijo: "soy mejor escritor que pintor, sin duda" en su libro Rostros Ocultos. ¿Es cierto?
—No lo sé, no puedo hablar de Dalí escritor porque lo conozco poco, supongo que intentarían imitar a los surrealistas.
—¿A quién se le cae el muro de Berlín encima?
—Supongo que a toda la gente que vivió el muro de Berlín. Primero, el muro de Berlín es mentira que lo edificaran los alemanes del Este, los Estados Unidos obligaron a edificar ese muro, y en segundo lugar si lo que quieres preguntar es si yo tengo algo que ver con el Marxismo de los países del Este, verás, existió en URSS a partir de los años treinta el Capitalismo de Estado y quizás un marxismo larvado. El marxismo fue importante en países como Cuba o Vietnam y mucho menos en URSS. Había escritores magníficos, por ejemplo, Bertolt Brecht que nunca fue del partido comunista pero que era marxista, decía que Stalin era el gran problema que tenía planteado el marxismo. El problema es que la gente más explotada no creía que estaba explotada.
—Existe el muro de Berlín en muchos países...
—El muro de Berlín es el que existe en nuestras cabezas porque está establecido por los pensamientos del capitalismo. En cada subjetividad nuestra, en cada "yo soy", empieza el problema. Nuestro nombre es prestado, nos lo presta la familia, y la familia ¿qué es?, una institución completamente burguesa, capitalista. Los aristócratas, los feudales, tienen sangre azul, tienen linaje, son los burgueses los que crean todo esto, tanto es así que la Iglesia tuvo que adaptarse a esta sociedad burguesa.
—Entonces ha existido desde siempre...
—No, sólo desde que existe el sujeto. En el carnet de identidad aparece el nombre del padre y de la madre, ¿no te preguntas por qué el Estado quiere saber el nombre de tu padre o de tu madre?, para garantizar tu lenguaje, tu familia, para garantizar que tienes una individualidad.
—Quizás más un número...
—Bueno, pero es que entonces somos números. ¿Cómo podemos decir "yo soy" si todo es prestado?, la familia nos presta el nombre propio, y el Estado nos lo garantiza.
—Pero esa es la parte material...
—No, es el inconsciente nuestro.
—Hay alguien que dice que la vida sigue siendo Stalingrado, que la vida es resistencia...
—Si no se hubiera ganado la batalla de Stalingrado no estaríamos aquí, el mundo sería de otra manera. Por un parte fue fantástico, fue una victoria contra el nazismo. En Stalingrado ganamos los marxistas, pero el triunfo de Stalingrado no me lo toques... Los americanos invadieron Normandía, porque pensaron, ¡estos se nos meten en Churriana!, luego significó tal robustecimiento de Stalin que acabó con el marxismo. No me gustaría hablar tanto del marxismo, pero bueno, realmente el marxismo es mi vida ciertamente. Hay que tener en cuenta que una revolución no se hace en cuatro días, ni siquiera en veinte años como lo intentó Lenin, o como se intentó en Cuba. Una revolución significa otra cosa, por ejemplo, el Capitalismo tardó cuatro o cinco siglos en establecerse. Las contradicciones son evidentes, Stalingrado fue el triunfo del marxismo, pero también fue el triunfo de Stalin, fortaleció a Stalin con un sistema burocrático soviético que fue mortal para todos nosotros.
—¿Se siente la misma angustia ante la página en blanco cuando se hace poesía que cuando se hace un texto teórico o crítico?
—Yo no he escrito nunca poesía, pero cualquier escritor tiene pánico ante la página en blanco, quien diga que escribir es un placer está mintiendo. No creo que escribir sea un placer, es un placer cuando sale bien. Escribir es un trabajo, y como dice Pavese en su mejor libro de poemas ...Lavorare stanca..., es decir trabajar cansa.
—Es volar una idea sobre un papel en espera...
—Sí, pero el papel es tremendo, es tu enemigo, en el sentido de que es "el otro" y además un "otro" desconocido. ¿Estás esperando qué? Porque se supone que tú tienes la idea hecha y basta con volcarla en el papel, ¡pues no!
—Una vez dijiste que la poesía se leía por detrás del papel...
—Yo no sé si dije que la poesía se leía al trasluz o por detrás, pero sí quise decir leerla, en ese sentido para mí leer siempre es un placer sobre todo cuando es bueno, y mucho más cuando el texto es malo.
—¿Ahí sí?
—¡Sí!, porque entonces me divierto más, hay algunos poemas, versos malísimos que me divierten muchísimo. Pero una cosa es leer y otra es escribir. Escribir es un sufrimiento. Tú tienes la idea de que escribir es una expresión, se lleva dentro la idea y luego se expresa, pues yo pienso que eso es falso, escribir es una cuestión absolutamente material. Se dice siempre que quien lleva el toro toreado desde el hotel nunca lo torea, es decir los personajes después de escribir un texto andan por su cuenta.
—¿Se le escapa a uno el texto de las manos?
—Completamente.
—¿Toman vida los personajes?
—Toman vida, lo he dicho: "La Literatura es una forma de vida".
—¿Son peligrosos?
—Sí, son peligrosos porque te puede volver loco.
—¿Hasta qué punto? ¿Hasta la locura?
—Completamente, no quiero decir que todos los escritores estén locos, pero muy próximo.
—¿Y el Conde Drácula existe?
—El Conde Drácula existe en dos sentidos, primero en el sentido de que existe el mal en la Humanidad. El diablo es el símbolo del mal. No soporto un drácula enamorado, como el de Coppola, no lo soporto. Segundo, en el sentido religioso, Drácula es la imagen inversa de Cristo. Ten en cuenta que el autor de Drácula, Stoker, es un teósofo típico del siglo XIX, por una parte, es un cientificista y por otra parte es alguien que cree en estas cuestiones. Escribió este libro que es un libro sobre el diablo, un libro sobre el mal. El Mal existe, pero como maldad total que fue lo que intentó Passolini en Los 120 días de Salò. Pero la imagen de Drácula es una imagen básicamente cristiana, es la imagen del diablo. Ahora bien, existe un drácula romántico por una cuestión muy sencilla, porque la burguesía (según el planteamiento de Descartes "pienso luego existo") engendra o tiene que legitimar inevitablemente el lado oscuro del hombre y ese lado oscuro del pensamiento es lo que los occidentales plasman en Drácula.
—¿Existe un drácula en cada persona?
—Sí.
—¿Existe vampirismo en la Literatura?
—Sí, a mí me han plagiado de una manera descarada.
—¿En cada uno de los escritores?
—En todos. Además, yo pienso que el escritor que plagia es tonto. Pero hay dos maneras de plagiar, una que yo considero honesta, Gil de Biedma decía que un escritor cuando empieza a escribir es tan tonto que ni siquiera plagia. Como digo, hay una manera honesta de plagiar que es el guiño, y otra deshonesta que es la violación, por ejemplo, cuando una conferencia que no está publicada la plagian directamente o la tergiversan. A mí me han utilizado de mala manera.
—Quizás eso no sea demasiado importante para un maestro...
—No, y siguiendo un poco la broma, eso es casi obligado. Cuando a uno lo plagian con veinticinco años (yo empecé a dar clases con veintidós años), pues... Pero después de haber publicado tantos artículos y libros, es casi obligado, ¡sobre todo cuando se tienen ideas tan buenas como las mías...! (...Entre risas...).
—Entonces no es necesario Drácula...
—No es necesario, pero sí existe, y además es encantador que exista, porque la Literatura se habla siempre a sí misma. El problema es que la Literatura surge como un invento del sujeto, como un invento real de la sociedad burguesa, y el capitalismo que nos construye como sujetos explotados quisiera que fuéramos todos cartesianos y eso es imposible. Es como pretender que no existan las contradicciones, como pretender que todos fuéramos nudistas. Brecht dice en un libro que me fascina Diálogos de fugitivos, que los nudistas son tan castos que resultan insoportablemente orgullosos al pagar su cuota de castidad, yo prefiero la gente más sencilla y normal, yo prefiero como Brecht un país donde no existan héroes y donde pueda existir la impudicia, seríamos más humanos. En realidad, todos somos unos fracasados, porque sino, no tendríamos lo que tenemos.
—Y si no existiera el capitalismo, ¿qué existiría?
—Un tipo de relaciones sociales donde no existiría la explotación, un sistema que no sé lo que es...
—¿Existiría?
—Sí.
—¿Existiendo el hombre?
—Y la mujer también... (Entre risas).
—¿Es posible?
—Sí, una vida no basada en la explotación, otro tipo de relaciones.
—Sería quizás un paraíso...
—No, no, sería otra forma de vida. Lo que cuesta trabajo concebir es que ha habido otras formas distintas de pensar y otra forma distinta de vivir, y otra forma distinta de escribir. Lo típico del capitalismo burgués no es lo típico del esclavismo. Por ejemplo, Calígula nombró cónsul a su caballo, el escándalo no fue en absoluto el nombramiento, pues el caballo era un esclavo de Calígula, ¿sabes por qué el senado protesta? Porque no ha seguido los tres años de cursos de honorum que tenían que seguir los senadores para ser cónsules, no porque sea un caballo. Lo declaró libre, lo convierte en persona. Conozco muchas personas que son caballos en política. El concepto de Persona en aquella época era de Persona jurídica, tiene un sentido diferente al sentido de persona actual. Pero, en resumidas cuentas, el Capitalismo nos ha hecho creer que nuestra vida es la Vida.
—Quince años después has vuelto a teorizar sobre la vida de García Montero, Javier Egea y Álvaro Salvador. ¿Existe en estos momentos "La Otra Sentimentalidad"?
—Existió. En aquella época éramos una serie de amigos donde yo quizás era el teórico y los otros eran magníficos poetas. Nos planteamos una cuestión básica, ganó la izquierda, pero aquí nadie tiene mentalidad de izquierdas. Había que pensar la vida de otra manera, y nos parecía un poco abstracto la división entre pensamiento y sensibilidad y así surgió "La Otra Sentimentalidad". Como es lógico aquello duró tres años como cualquier otro movimiento poético, posteriormente cada uno siguió su camino y hemos escrito cosas diferentes. Quince años después hay una diferencia relativa entre la presentación que yo hice entonces y la que hago ahora. Lo que sí se nota es que el lenguaje poético pasa mucho más por una subjetividad. Ahora mismo sale un libro mío sobre esto, que me lo ha pedido mi amigo y poeta el profesor Francisco Díaz de Castro de Palma de Mallorca.
—Puede que sea una tercera o cuarta sentimentalidad...
—Posiblemente. Lo que sí es importante es que en mi caso no he variado mi pensamiento, en otros casos no lo sé. Mi mentalidad de que hay que acabar con la explotación no cambia.
—¿La mentalidad del poeta evoluciona más que la del filósofo?
—Yo cambio la forma de pensar, lo que no cambio es el sustrato. En ese sentido pienso que al poeta le ocurre igual.
—¿Evoluciona?
—Lógicamente buscan caminos nuevos. El poeta más cercano que tengo es mi mujer, y va cambiando continuamente de registros y a mí me pasa un poco lo mismo, pero no cambio jamás de sustrato.
—¿Si se deja de escribir se sigue evolucionando?
—No, y además lo malo no es dejar de escribir, lo malo es cuando a uno le entra "La Seca" como dicen los sudamericanos, cuando te entra la Sequía.
—Se pueden escribir cosas diferentes a las que se escribía hace cinco años...
—Sí claro, pero no diferentes en el sustrato. Yo odio la palabra Evolución.
—¿Cuál sería la mejor palabra? —Diría "Diferencia", "Matizaciones".
—¿Un silencio literario es enemigo del escritor?
—Es lo peor que existe. Cualquier escritor tiene terror ante eso.
—¿De dónde parte la producción literaria, de la Razón o del Corazón?
—Yo no diferenciaría, la literatura sale siempre de la misma fuente.
—Como dices, .... La Literatura existe porque existen las contradicciones internas, si estuviéramos contentos con nuestras vidas no existiría la Literatura...
—No existirían muchas cosas. Efectivamente la Literatura existe porque existe la contradicción, porque no sabemos cómo llegar al nombre propio del lenguaje.
—¿Es necesaria la palabra en todo hombre?
—Es fundamental.
—No, en base a la cuestión material...
—Es fundamental porque es el préstamo básico. Además, me gusta la palabra porque está manchada, porque está usada, es decir, usada por el mercado. Me gustan las palabras usadas, incluso como diría Brecht, las mujeres usadas... (entre risas). Me encantan las palabras manchadas por el mercado, por la explotación, por la miseria o riqueza de cada persona. Nietzsche decía que las palabras son como bolsillos: vas metiendo cosas y cosas dentro de las palabras como dentro de un bolsillo, y luego cuando sacas lo que hay en el bolsillo ¿qué te encuentras? ...Las palabras son fantásticas, pero uno nunca puede fiarse de ellas.
—¿Existen palabras de segunda mano?
—Todas son palabras de segunda mano.
—¿Todas?
—Todas.

[QUOTE]La Literatura no ha existido siempre. Los discursos a los que hoy aplicamos el nombre de "literarios" constituyen una realidad histórica que sólo ha podido surgir a partir de una serie de condiciones —asimismo históricas— muy estrictas: las condiciones derivadas del nivel ideológico característico de las formaciones sociales "modernas" o "burguesas" en sentido general.
J.C. Rodríguez Teoría e Historia de la Producción Ideológica, 1975

[BR]
[IMG:5:C]
[SUBTITLE-CENTER]Dedicatoria de J.C. Rodríguez a Belén Juárez
`,
    coverUrl: '/images/Entrevistas/Rodriguez/PORTADA.jpeg',
    interviewer: 'Belén Juárez',
    location: 'Granada',
    images: [
      '/images/Entrevistas/Rodriguez/retrato.jpg',
      '/images/Entrevistas/Rodriguez/teoria-libro.jpg',
      '/images/Entrevistas/Rodriguez/la-norma-literaria-libro.jpg',
      '/images/Entrevistas/Rodriguez/la-poesia-la-musica-y-el-silencio.jpg',
      '/images/Entrevistas/Rodriguez/literatura-pobre-libro.jpg',
      '/images/Entrevistas/Rodriguez/dedicatoria.png'
    ]
  }
];

export const VISUAL_POETRY: VisualPoetry[] = [
  {
    id: 'aldea-poetica',
    title: 'Aldea Poética 2000',
    description: 'Poesía visual y grafismos',
    coverImage: '/images/PoesiaVisual/AldeaPoetica2000/portada_aldea_poetica.jpeg',
    artworkImages: [
      '/images/PoesiaVisual/AldeaPoetica2000/IMG_2640.jpeg'
    ]
  },
  {
    id: 'anfora-nova-49',
    title: 'Ánfora Nova (Nº 49-50)',
    description: 'Publicaciones de Poesía Visual',
    coverImage: '/images/PoesiaVisual/AnforaNova49-50/PORTADA_anfora_nova.jpeg',
    artworkImages: [
      '/images/PoesiaVisual/AnforaNova49-50/IMG_1272.jpeg',
      '/images/PoesiaVisual/AnforaNova49-50/IMG_1274.jpeg'
    ],
    poemText: `En la estirpe del Árbol Padre,
Este tiempo permite la eternidad.

De cada instante,
queda la pausa y el delirio de imposibles,
que por reproche,
se hace almendro en nuestra encina
las sombras de todos nuestros hijos.

Pronto la señal de asegurarse la tirada,
tiene el sueño de los años prometidos,
sin embargo,
de esta Madre Tierra que sustenta la promesa,
la Noche sigue siendo templado aire de nuestras experiencias.

La Encina encierra la casa partida,
desciende a sus raíces la palabra oculta,
comenta a la gata su cuerpo infinito,
y sentencia una obediencia centenaria
para siempre...`
  },
  {
    id: 'texturas-12',
    title: 'Texturas 12 (2003)',
    description: 'Águilas sobre nuestras cabezas',
    coverImage: '/images/PoesiaVisual/Texturas12/portada_texturas.jpeg',
    artworkImages: [
      '/images/PoesiaVisual/Texturas12/AGUILAS SOBRE NUESTRAS CABEZAS 2002 Ilustración Revista Texturas 2003.jpeg'
    ]
  },
  {
    id: 'poesia-andaluza',
    title: 'Poesía Visual Andaluza',
    description: 'Antología y catálogos',
    coverImage: '/images/PoesiaVisual/PoesiaVisualAndaluza/Portada_pva.jpeg',
    artworkImages: [
      '/images/PoesiaVisual/PoesiaVisualAndaluza/Imagen1 poesia visual andaluza.webp',
      '/images/PoesiaVisual/PoesiaVisualAndaluza/Imagen2 poesia visual andaluza.webp'
    ]
  },
  {
    id: 'obras-ineditas',
    title: 'Obras Inéditas',
    description: 'Colección de poesía visual no publicada',
    coverImage: '/images/PoesiaVisual/NoPublicadas/cover_no_publicadas.png',
    artworkImages: [
      '/images/PoesiaVisual/NoPublicadas/OTRA OBRA POESIA VISUAL NO PUBLICADA.jpeg'
    ]
  }
];
















