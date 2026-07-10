
import React from 'react';
import { Film, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
    // Array para facilitar añadir más vídeos en el futuro
    const videos = [
        {
            id: 'ebano-mar',
            title: 'Ébano Mar',
            youtubeId: '53OVZR2ryWQ',
            description: 'La letra de Ébano Mar está compuesta por una combinación de los poemas cuarto, sexto y séptimo del capítulo “Ébano mar” del libro “Horizonte de sucesos”. En “Ébano mar”, la Poesía recorre las profundidades de la emoción humana para mostrar el sutil equilibrio de la existencia. El mar se revela aquí como el agua que nos sostiene sobre el planeta, es el elemento necesario para la vida, pero también actúa como reflejo de ese espacio inexplorado y misterioso de nuestra propia psique sobre el tejido del tiempo.'
        },
        {
            id: 'puro-azafran',
            title: 'Puro azafrán',
            youtubeId: 'zjIDFsu1L68',
            description: 'La letra de Puro Azafrán está compuesta a partir del segundo poema del capítulo “Bubo bubo” del libro “Horizonte de sucesos”. En “Puro Azafrán”, la Poesía evoca a ese animal de ojos magnéticos que puebla nuestros bosques en el más puro silencio. El texto lo nombra como “Duque”, en un fiel guiño al “Gran Duque” de Félix Rodríguez de la Fuente. La majestuosidad de esta criatura flota en paralelo a la melancolía de un amor evocado: el deseo de haber compartido la vida con esa persona que solo pudo existir en nuestros sueños y que justifica, en el fondo, su hermosa y solitaria existencia en el bosque.'
        },
        {
            id: 'requiem',
            title: 'Réquiem',
            youtubeId: 'Af6bEyyaJ8c',
            description: 'En este caso, la letra de Réquiem está compuesta a partir del tercer poema del capítulo “Bubo bubo” del libro “Horizonte de sucesos”. En “Réquiem”, la poesía se sumerge en las profundidades más recónditas de nuestro silencio, abrazando el deseo de descansar algún día al lado del ser querido tras la partida. Los versos de este tema arropan la soledad de un bosque nocturno concebido como destino final, donde el búho real, —protagonista metafórico de esta historia— habita la foresta en perfecta armonía con la tranquilidad de su entorno. Sosiego, paz y lealtad definen su naturaleza como criatura finita al igual que nosotros. Este video nos revela que, incluso en la muerte, seguimos amando eternamente con el pulso de nuestros últimos deseos.'
        },
        {
            id: 'toque-de-campanas',
            title: 'Toque de Campanas',
            youtubeId: 'RS0DY9od_tc',
            description: 'La letra de Toque de Campanas es una adaptación del segundo poema del capítulo “Isla Libertad” del libro “Horizonte de sucesos”. En “Toque de Campanas”, la Poesía nos sumerge en un canto a la Vida; un grito de libertad tejido con emociones tan intensas como frágiles, capaces de romperse en mil pedazos en un instante. Al final del video, se intuye el eco de un destino alternativo: la posibilidad de que esas almas podrían haber sido felices hasta el fin de sus días de no haber subido a aquel avión que las lanzó, al unísono, hacia la libertad y hacia la muerte. Así, la canción y el video se entrelazan para hablarnos de dos planos posibles de la existencia.'
        },
        {
            id: 'isla-libertad',
            title: 'Isla Libertad',
            youtubeId: 'B6-sAEaPy5w',
            description: 'Los versos de este video proceden del capítulo “Isla Libertad” del libro “Horizonte de sucesos”. En este video los versos se estructuran de forma diferente al capítulo de donde procede. En el libro la secuencia de Fibonacci es la que define cada uno de los capítulos; sin embargo, esta composición audiovisual “Isla Libertad/Despertar” se concibe como un nuevo poema al mezclar las estrofas de los diferentes poemas del capítulo, generando —de este modo— un mensaje diferente. Al igual que sucede en “Destierro en Cuatro Ángulos” (Devenir, 1999), esta composición define una nueva lectura con una geometría poética diferente. La secuencia de estrofas ordena los versos en un único poema que fluye desde el inicio hasta el final del video, siendo estrofa/poema: 1:1; 2:1; 3:1; 4:3; 5:3; 6:1; 7:4; 8:5; 9;6. Respecto a la música, el pianista y compositor Eduardo Salas Arques comenta que “Despertar” trata de ilustrar el instante en que la vida nos invita a iniciar algo nuevo. Algo que cambia profundamente en nuestro interior sintiendo la necesidad de dejar atrás el pasado para iniciar una nueva etapa. Se trata —pues— de “despertar” de un largo letargo para descubrir una nueva forma de vivir. En definitiva, esta composición audiovisual funde Poesía y Música en una única obra con un nuevo y original mensaje global.'
        },
        {
            id: 'nora',
            title: 'Nora',
            youtubeId: 'K5-Rqt-3LU4',
            description: 'La letra de Nora está compuesta a partir del primer poema del capítulo “Ciudad prostitución” del libro “Horizonte de sucesos”. En “Nora”, la poesía rinde homenaje a una mujer solitaria que transita las calles de cualquier ciudad y termina rindiéndose al amor de un hombre que vive otra vida. Una bellísima criatura con derecho a enamorarse y a recorrer las profundidades de sus propias emociones; porque vivir del cuerpo no es prostitución, nos prostituye la propia vida cuando nos pone precio. En esta pieza audiovisual, la Poesía misma se transforma en la piel de Nora.'
        },
        {
            id: 'redes-de-acero',
            title: 'Redes de Acero',
            youtubeId: 'LMuB9vNl-2w',
            description: 'La letra de Redes de Acero procede del primer poema del capítulo “Orcinus orca” del libro “Horizonte de sucesos”. En “Redes de acero”, la Poesía se alinea con el amor de dos jóvenes que viven su homosexualidad desde el silencio, en el borde exterior de una sociedad deshumanizada. Al mismo tiempo, el relato de esta historia toma como metáfora viviente a un noble ser de los océanos, históricamente maltratado por la literatura: la orca. Estas magníficas criaturas poseen sus propias leyes de convivencia, a menudo incomprendidas por los humanos. Así, el video denuncia con fuerza ese instinto arrollador de querer destruir todo lo que escapa de la norma, convirtiendo la homosexualidad y la naturaleza de las orcas en dos reflejos de una misma y conmovedora historia.'
        },
        {
            id: 'ellos-del-aire',
            title: 'Ellos del aire',
            youtubeId: 'FeO8HCMi6jI',
            description: 'La letra de Ellos del aire es una adaptación del primer poema del capítulo “Ellos del Aire” del libro “Horizonte de sucesos”. En “Ellos del aire”, la Poesía rinde homenaje a esos seres magníficos que son los árboles; guardianes de la supervivencia, nacidos para enraizar la vida en la Tierra. Desde el silencio de sus brazos abiertos al mundo, no solo nos regalan el aire que respiramos, sino que sostienen la red vital de todos los ecosistemas. En este escenario, los versos y la pieza audiovisual se alinean con dos almas que se buscan en el bosque para sobrevivir al amparo de la magia de los libros; páginas que, al igual que las raíces bajo el suelo, actúan como conectores universales del conocimiento, la vida y la naturaleza.'
        },
        {
            id: 'lobo',
            title: 'Lobo',
            youtubeId: '_8J9RL0lp_8',
            description: ''
        },
        {
            id: 'loba',
            title: 'Loba',
            youtubeId: 'ZmaaPb8oPNI',
            description: 'En este caso se parte del segundo poema del capítulo “Canis lupus” del libro “Horizonte de sucesos”. En “Loba”, la Poesía se entrelaza con el instinto maternal de una loba que protege a sus crías tal y como se observa en la última secuencia frente al cazador. En los versos iniciales tanto de la canción como del poema, la propia Poesía dialoga con el poeta para revelarse como la guardiana de su linaje y de su morada; los cuatro lobeznos se convierten en la metáfora viva de los versos nacidos del poeta.'
        },
        {
            id: 'horizonte-de-sucesos',
            title: 'Horizonte de Sucesos',
            youtubeId: 'fy61eblw7Nw',
            description: 'La canción Horizonte de sucesos incluye el tercer poema del capítulo “Horizonte de sucesos”. En la canción, la Poesía establece un monólogo frente al poeta, expresando que “alumbrará estrellas” y que el canto de su voz será un rondel que llegue hasta él. Este escenario musical se sitúa frente al horizonte de sucesos del agujero negro Sagitario A de la Vía Láctea; esta es la frontera donde el espacio y el tiempo transcurren de forma diferente respecto a nuestro lejano planeta. Un tejido espaciotemporal que se curva y deforma de acuerdo con la Teoría Gravitacional de Albert Einstein. La Poesía se personifica como silueta de esa mujer que mira al infinito. El plano visual del video combina imágenes de los telescopios Hubble y James Webb —recreadas en movimiento a través de inteligencia artificial—.'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-16">
            {/* Header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Film className="text-[#d4af37]" size={28} />
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic">Vídeos</h2>
                </div>
                <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                    Piezas audiovisuales donde la música, la palabra y la imagen se encuentran.
                </p>
            </div>

            {/* Video Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {videos.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="space-y-6"
                    >
                        {/* Video Embed */}
                        <div className="relative rounded-sm overflow-hidden shadow-2xl bg-black border border-white/10 aspect-video w-full group">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                allowFullScreen
                                className="w-full h-full"
                                loading="lazy"
                                title={video.title}
                            ></iframe>
                        </div>

                        {/* Video Info */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Play className="text-[#d4af37]" size={16} />
                                <h3 className="text-[#d4af37] font-sans text-xs uppercase tracking-[0.3em] font-bold">
                                    {video.title}
                                </h3>
                            </div>
                            {video.description && (
                                <p className="text-gray-400 font-light text-sm leading-7 text-justify">
                                    {video.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
