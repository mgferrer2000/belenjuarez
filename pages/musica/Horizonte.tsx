import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Horizonte: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="max-w-4xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-md mx-auto md:mx-0"
            >
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-sm shadow-2xl border border-gray-700 flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                    <img
                        src="https://picsum.photos/600/600?grayscale&blur=1"
                        alt="Horizonte de Sucesos Cover"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
                    />
                    <div className={`w-full h-full absolute inset-0 flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                        <div className="w-32 h-32 md:w-48 md:h-48 border border-white/20 rounded-full flex items-center justify-center">
                            <div className="w-24 h-24 md:w-36 md:h-36 border border-white/40 rounded-full"></div>
                        </div>
                    </div>
                    <div className="relative z-10 text-center pointer-events-none">
                        <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-2">Horizonte</h3>
                        <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase text-gray-400">de Sucesos</h3>
                    </div>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-400 font-mono">
                    <span>EST. 2023</span>
                    <span>BELÉN JUAREZ</span>
                    <span>LP AUDIO</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Horizonte;
