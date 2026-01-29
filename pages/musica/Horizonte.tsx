import React, { useState, useEffect, useRef } from 'react';
import { ALBUM_TRACKS } from '../../constants';
import { Play, Music as MusicIcon, Disc, Info, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Horizonte: React.FC = () => {
    const albumSpotifyId = '3xQDEU1oeQoWyI6IKsRiWO';
    const [currentSpotifyId, setCurrentSpotifyId] = useState<string | null>(ALBUM_TRACKS[0].spotifyId || null);
    const [activeTrackId, setActiveTrackId] = useState<string | null>(ALBUM_TRACKS[0].id);
    const [showHint, setShowHint] = useState(false);
    const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleTrackSelect = (track: any) => {
        setActiveTrackId(track.id);
        if (track.spotifyId) setCurrentSpotifyId(track.spotifyId);

        setShowHint(true);
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = setTimeout(() => setShowHint(false), 8000);
    };

    useEffect(() => {
        return () => {
            if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
        };
    }, []);

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 pb-20 relative">
            {/* Playlist Section */}
            <div className="flex-1 space-y-6">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-4">Horizonte de Sucesos</h2>
                    <p className="text-gray-400 font-light max-w-xl leading-relaxed">
                        El nuevo álbum de Belén Juárez (2025). Una travesía sonora de 22 piezas que exploran los límites entre la realidad y el subconsciente.
                    </p>
                </div>

                <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar space-y-2">
                    {ALBUM_TRACKS.map((track) => (
                        <div
                            key={track.id}
                            className={`p-4 border rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between group ${activeTrackId === track.id ? 'bg-white/10 border-[#d4af37]' : 'bg-white/5 border-white/5'}`}
                            onClick={() => handleTrackSelect(track)}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTrackId === track.id ? 'bg-[#d4af37] text-[#2d2a2e]' : 'bg-white/10 text-white/40'}`}>
                                    <Play size={14} fill={activeTrackId === track.id ? "currentColor" : "none"} />
                                </div>
                                <h4 className={`font-sans font-medium ${activeTrackId === track.id ? 'text-[#d4af37]' : 'text-white/80'}`}>{track.title}</h4>
                            </div>
                            <span className="font-mono text-[10px] text-white/20">{track.duration}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Player Section */}
            <div className="lg:w-96 relative">
                <div className="sticky top-32 space-y-8">
                    <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src="/images/Horizonte_de_Sucesos/1 PORTADA.JPG"
                            alt="Horizonte de Sucesos Cover"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10">
                        {currentSpotifyId && (
                            <iframe
                                src={`https://open.spotify.com/embed/track/${currentSpotifyId}?utm_source=generator&theme=0&autoplay=1`}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                className="rounded-xl"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>

            {/* GLOBAL TOAST - Using HEX COLORS to ensure visibility */}
            <AnimatePresence>
                {showHint && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-10 left-0 right-0 z-[99999] flex justify-center px-4"
                    >
                        <div className="bg-[#d4af37] text-[#2d2a2e] p-5 rounded shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex items-center gap-4 max-w-md border border-white/40">
                            <div className="bg-[#2d2a2e] text-[#d4af37] p-2 rounded-full">
                                <Info size={24} />
                            </div>
                            <div className="flex-1">
                                <h5 className="font-bold text-[11px] uppercase tracking-widest leading-none mb-1 text-[#2d2a2e]">Instrucción de Reproducción</h5>
                                <p className="text-[13px] font-semibold leading-tight text-[#2d2a2e]">
                                    Haz clic en el botón <span className="underline italic">PLAY</span> del reproductor a la derecha para escuchar el tema.
                                </p>
                            </div>
                            <button onClick={() => setShowHint(false)} className="bg-[#2d2a2e]/10 p-1 rounded-full hover:bg-[#2d2a2e]/20 transition-colors">
                                <X size={20} className="text-[#2d2a2e]" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.4); border-radius: 10px; }
            `}} />
        </div>
    );
};

export default Horizonte;
