import React from 'react';
import { Film, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
    // Array para facilitar añadir más vídeos en el futuro
    const videos = [
        {
            id: 'lobo',
            title: 'Lobo',
            youtubeId: 'ikNHPi9g5AI',
            description: 'Poema visual y musical basado en "Horizonte de Sucesos".'
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
                            <p className="text-white/70 font-serif text-sm italic">
                                {video.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
