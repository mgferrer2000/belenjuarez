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
                    <div className="space-y-4 text-white/60 font-serif text-base leading-relaxed">
                        <p>
                            {/* TODO: Añadir información sobre dónde y cuándo fue exhibida la pieza en directo */}
                            <span className="text-white/30 italic">Información sobre el evento, lugar y fecha de la exhibición en directo próximamente...</span>
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
                        <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">Sobre la Pieza Audiovisual</h3>
                    </div>
                    <div className="space-y-4 text-white/60 font-serif text-base leading-relaxed">
                        <p>
                            {/* TODO: Añadir descripción detallada de la pieza audiovisual */}
                            <span className="text-white/30 italic">Descripción sobre la pieza audiovisual, su proceso creativo y detalles técnicos próximamente...</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Additional Credits / Technical Details */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 bg-white/5 border border-white/10 rounded-sm"
            >
                <div className="flex items-center gap-3 mb-6">
                    <Music className="text-[#d4af37]" size={20} />
                    <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">Créditos y Ficha Técnica</h3>
                </div>
                <div className="space-y-4 text-white/60 font-serif text-base leading-relaxed">
                    <p>
                        {/* TODO: Añadir créditos y ficha técnica de la pieza */}
                        <span className="text-white/30 italic">Créditos, colaboradores y ficha técnica de la producción próximamente...</span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Poesia;
