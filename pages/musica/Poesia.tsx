import React from 'react';
import { Film, MapPin, Info, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Poesia: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-16">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <Film className="text-[#d4af37]" size={28} />
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic">Música y Poesía</h2>
                </div>
                <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                    Donde la palabra se convierte en sonido y la imagen en verso. Una pieza audiovisual que fusiona poesía, música y arte visual.
                </p>
            </div>

            {/* Video Embed Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <div className="relative rounded-sm overflow-hidden shadow-2xl bg-black border border-white/10 aspect-video w-full">
                    <iframe
                        src="https://www.youtube.com/embed/CvybR4sOgBM"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="w-full h-full"
                        title="Música y Poesía - Belén Juárez"
                    ></iframe>
                </div>
            </motion.div>

            {/* Context & Exhibition Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Exhibition Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-8 bg-white/5 border border-white/10 rounded-sm"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-[#d4af37]" size={20} />
                        <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">Exhibición en Directo</h3>
                    </div>
                    <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                        <p>
                            VIII Encuentro de mujeres poetas. En memoria de Ernestina de Champourcin. “Diversidad de voces y formas”. Vitoria 2005. Organizado por la poeta y amiga Ángela Serna.
                        </p>
                    </div>
                </motion.div>

                {/* About the Piece */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-8 bg-white/5 border border-white/10 rounded-sm"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Info className="text-[#d4af37]" size={20} />
                        <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">El Vals de lo Invisible</h3>
                    </div>
                    <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                        <p>
                            La música y la palabra no son artes distintas; son hilos de un mismo tapiz universal donde el sentir cobra forma. Allí, donde el silencio se rinde, emergen las notas de Rachmaninov: pulsos de una realidad ultrajada que él supo diseñar con la maestría de quien acaricia el infinito.
                        </p>
                        <p>
                            Yo me sumo a ese eco. Acompaño la elocuente mudez del maestro ruso con la huella de mis trazos y la arquitectura de mis versos. Como un diálogo de sombras y luces, un baile donde las blancas, negras y corcheas se atreven a ser cuerpos: bailarinas etéreas que danzan en el filo del tiempo, suspendidas entre los acordes del Concierto Número 2.
                        </p>
                        <p>
                            En este espacio, el piano respira, se mueve sobre la vida, habitando los sueños que aún no nos atrevemos a soñar. Los versos que acompañan al maestro proceden del libro "El universo de las luces" aún sin publicar, versos que duermen en el lecho del silencio desde hace ya tanto tiempo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Poesia;
