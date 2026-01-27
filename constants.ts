import { Book, Collaboration, ArtPiece, Track, SocialLink } from './types';

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
    title: 'Acta Encuentro Mujeres Poetas',
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
  }
];

export const ALBUM_TRACKS: Track[] = [
  { id: '1', title: 'Singularidad (Intro)', duration: '2:14', poemSource: 'Prólogo' },
  { id: '2', title: 'Gravedad Cero', duration: '3:45', poemSource: 'Poema IV' },
  { id: '3', title: 'Ecos de Luz', duration: '4:12', poemSource: 'Poema XI' },
  { id: '4', title: 'Materia Oscura', duration: '3:30', poemSource: 'Poema XV' },
  { id: '5', title: 'El Último Fotón', duration: '5:01', poemSource: 'Epílogo' },
];

export const ART_PIECES: ArtPiece[] = [
  { id: '1', title: 'Estudio de manos', medium: 'Carboncillo', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80', aspectRatio: 'portrait' },
  { id: '2', title: 'Paisaje onírico', medium: 'Acuarela', imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=600&q=80', aspectRatio: 'landscape' },
  { id: '3', title: 'Autorretrato fragmentado', medium: 'Óleo', imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=500&q=80', aspectRatio: 'square' },
  { id: '4', title: 'Boceto urbano', medium: 'Tinta', imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=400&q=80', aspectRatio: 'portrait' },
  { id: '5', title: 'Abstracción I', medium: 'Acrílico', imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80', aspectRatio: 'landscape' },
  { id: '6', title: 'La espera', medium: 'Grafito', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80', aspectRatio: 'square' },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', iconName: 'Instagram' },
  { platform: 'Twitter', url: '#', iconName: 'Twitter' },
  { platform: 'Email', url: 'mailto:belen@example.com', iconName: 'Mail' },
];
