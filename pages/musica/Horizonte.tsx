import React, { useState, useEffect } from 'react';
import { ALBUM_TRACKS } from '../../constants';
import { Play, Music as MusicIcon, Disc, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Horizonte: React.FC = () => {
    const albumSpotifyId = '3xQDEU1oeQoWyI6IKsRiWO';
    const [currentSpotifyId, setCurrentSpotifyId] = useState<string | null>(ALBUM_TRACKS[0].spotifyId || null);
    const [activeTrackId, setActiveTrackId] = useState<string | null>(ALBUM_TRACKS[0].id);
    const [showHint, setShowHint] = useState(false);

    const handleTrackSelect = (track: any) => {
        setActiveTrackId(track.id);
        if (track.spotifyId) setCurrentSpotifyId(track.spotifyId);

        // Show hint briefly
        setShowHint(true);
        setTimeout(() => setShowHint(false), 4000);
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 pb-20 relative">
            {/* Playlist Section */}
            <div className="flex-1 space-y-6">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-4">Horizonte de Sucesos</h2>
                    <p className="text-gray-400 font-light max-w-xl leading-relaxed">
                        El nuevo álbum de Belén Juárez (2025). Una travesía sonora de 22 piezas que exploran los límites entre la realidad y el subconsciente, inspiradas en la profundidad del verso.
                    </p>
                </div>

                <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar space-y-3">
                    {ALBUM_TRACKS.map((track) => (
                        <motion.div
                            key={track.id}
                            whileHover={{ x: 10 }}
                            className={`p-4 border rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between group ${activeTrackId === track.id ? 'bg-white/10 border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                            onClick={() => handleTrackSelect(track)}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTrackId === track.id ? 'bg-gold text-ink' : 'bg-white/10 text-white/40 group-hover:bg-white/20'}`}>
                                    <Play size={14} fill={activeTrackId === track.id ? "currentColor" : "none"} />
                                </div>
                                <div>
                                    <h4 className={`font-sans font-medium transition-colors ${activeTrackId === track.id ? 'text-gold' : 'text-white/80'}`}>{track.title}</h4>
                                    <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">{track.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                {activeTrackId === track.id && (
                                    <div className="flex gap-1 items-end h-3">
                                        <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-gold"></motion.span>
                                        <motion.span animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-0.5 bg-gold"></motion.span>
                                        <motion.span animate={{ height: [6, 14, 6] }} transition={{ repeat: Infinity, duration: 1 }} className="w-0.5 bg-gold"></motion.span>
                                    </div>
                                )}
                                <ChevronRight className={`text-white/20 group-hover:text-gold transition-colors ${activeTrackId === track.id ? 'text-gold' : ''}`} size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                    <a
                        href={`https://open.spotify.com/intl-es/album/${albumSpotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#1DB954] text-white font-sans uppercase text-[10px] font-bold tracking-[0.2em] rounded-full hover:scale-105 transition-all flex items-center gap-3"
                    >
                        <MusicIcon size={16} /> Abrir Álbum en Spotify
                    </a>
                </div>
            </div>

            {/* Player Section */}
            <div className="lg:w-96">
                <div className="sticky top-32 space-y-8">
                    {/* Main Album Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/10 group"
                    >
                        <img
                            src="/images/libros/horizonte_de_sucesos.png"
                            alt="Horizonte de Sucesos Cover"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white font-serif italic text-2xl tracking-tighter">Horizonte de Sucesos</h3>
                            <p className="text-gold/80 font-sans text-[10px] uppercase tracking-[0.3em] mt-1">Belén Juárez • 2025</p>
                        </div>
                    </motion.div>

                    {/* Spotify Embed Player */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {currentSpotifyId ? (
                                <motion.div
                                    key={currentSpotifyId}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="relative rounded-xl overflow-hidden shadow-2xl bg-black border border-white/5"
                                >
                                    <iframe
                                        src={`https://open.spotify.com/embed/track/${currentSpotifyId}?utm_source=generator&theme=0&autoplay=1`}
                                        width="100%"
                                        height="152"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="rounded-xl"
                                    ></iframe>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        {/* Interaction Hint Overlay */}
                        <AnimatePresence>
                            {showHint && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute -top-12 left-0 right-0 flex justify-center z-20 pointer-events-none"
                                >
                                    <div className="bg-gold/90 text-ink text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 whitespace-nowrap">
                                        Usa el reproductor para escuchar el tema
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Disc className="text-gold animate-spin-slow" size={20} />
                            <h5 className="text-gold font-sans text-[10px] uppercase tracking-[0.3em]">Nota de la Autora</h5>
                        </div>
                        <p className="text-white/40 font-serif text-sm leading-relaxed italic">
                            Este álbum representa la culminación de un proceso de investigación sonora donde el verso deja de ser palabra para convertirse en atmósfera. Cada frecuencia ha sido elegida para resonar con el Horizonte de Sucesos de nuestra propia conciencia.
                        </p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(212, 175, 55, 0.4);
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}} />
        </div>
    );
};

const ChevronRight = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export default Horizonte;
