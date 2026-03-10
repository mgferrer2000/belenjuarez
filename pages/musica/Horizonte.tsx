import React, { useState } from 'react';
import { ALBUM_TRACKS } from '../../constants';
import { Music as MusicIcon, Disc, ChevronRight, X, ListMusic, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Horizonte: React.FC = () => {
    const youtubePlaylistId = 'OLAK5uy_nDUfLuFMPYEaeLx1Lyqcj_pBlOxhEE_pE';
    const [currentVideoId, setCurrentVideoId] = useState<string>(ALBUM_TRACKS[0].youtubeId || '');
    const [activeTrackId, setActiveTrackId] = useState<string | null>(ALBUM_TRACKS[0].id);
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleTrackSelect = (track: any) => {
        setActiveTrackId(track.id);
        setCurrentVideoId(track.youtubeId ?? '');
        setHasInteracted(true); // Mark interaction to allow autoplay
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 pb-20 relative px-4 md:px-0">
            {/* Playlist Section */}
            <div className="flex-1 space-y-6">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <ListMusic className="text-[#d4af37]" size={28} />
                        <h2 className="text-4xl md:text-5xl font-serif text-white italic">Horizonte de Sucesos</h2>
                    </div>
                    <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                        El nuevo álbum de Belén Juárez (2025). Una travesía sonora de 21 piezas que exploran los límites entre la realidad y el subconsciente.
                        <br />
                        <span className="text-[#d4af37]/80 text-sm mt-2 block font-medium">Pulsa en un tema para seleccionarlo en el reproductor.</span>
                    </p>
                </div>

                <div className="h-[900px] overflow-y-auto pr-4 custom-scrollbar space-y-2">
                    {ALBUM_TRACKS.map((track, idx) => (
                        <div
                            key={track.id}
                            className={`p-4 border rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between group ${activeTrackId === track.id ? 'bg-white/10 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.05)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                            onClick={() => handleTrackSelect(track)}
                        >
                            <div className="flex items-center gap-5 font-sans">
                                <div className={`text-[10px] w-6 text-center font-mono ${activeTrackId === track.id ? 'text-[#d4af37]' : 'text-white/20'}`}>
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div>
                                    <h4 className={`text-sm font-medium transition-colors ${activeTrackId === track.id ? 'text-[#d4af37]' : 'text-white/70 group-hover:text-white'}`}>
                                        {track.title}
                                    </h4>
                                    <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mt-0.5">{track.poemSource}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-[9px] text-white/20">{track.duration}</span>
                                {activeTrackId === track.id && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-row flex-nowrap gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
                    <a
                        href={`https://music.youtube.com/playlist?list=${youtubePlaylistId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-[#f00] text-white font-sans uppercase text-[9px] font-bold tracking-[0.15em] rounded-full hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                        <Youtube size={14} /> YouTube Music
                    </a>
                    <a
                        href="https://open.spotify.com/intl-es/album/32YXuhIAqGlZm9qnewcgRl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/30 font-sans uppercase text-[9px] font-bold tracking-[0.15em] rounded-full hover:bg-[#1DB954]/20 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                        <MusicIcon size={14} /> Spotify
                    </a>
                    <a
                        href="https://music.apple.com/es/album/horizonte-de-sucesos/1879665293"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-[#FA243C]/10 text-[#FA243C] border border-[#FA243C]/30 font-sans uppercase text-[10px] sm:text-[9px] font-bold tracking-[0.15em] rounded-full hover:bg-[#FA243C]/20 transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                        <MusicIcon size={14} /> Apple Music
                    </a>
                </div>
            </div>

            {/* Player Section */}
            <div className="lg:w-[500px] relative">
                <div className="sticky top-32 space-y-6">
                    {/* YouTube Music Embed Player - Large and Centralized */}
                    <div className="relative z-[100] group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentVideoId}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="relative rounded-sm overflow-hidden shadow-2xl bg-black border border-white/10 aspect-square w-full"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=${hasInteracted ? 1 : 0}&rel=0`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture shadow-2xl"
                                    className="w-full h-full"
                                    title="YouTube Music Player"
                                ></iframe>
                            </motion.div>
                        </AnimatePresence>


                    </div>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Disc className="text-[#d4af37] animate-spin-slow" size={24} />
                            <h5 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">Nota de la Autora</h5>
                        </div>
                        <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                            <p>
                                Este álbum representa la culminación de un proceso de investigación sonora donde el verso se proyecta desde la palabra para convertirse en acordes de un atlas de emociones. Las letras proceden de poemas del libro Horizonte de Sucesos (Huerga & Fierro, 2025).
                            </p>
                            <p>
                                El libro se compone de diez capítulos que siguen la secuencia de Fibonacci y con temas que giran alrededor de una única idea: el Amor en nuestro planeta, y más allá. Versos que se convierten en secuencias, música trenzada con la Poesía. Las voces de este álbum no son de nadie, no se identifican con ninguna persona, pertenecen a la Poesía como ecos de versos que cabalgan en la mente del poeta.
                            </p>
                            <p>
                                Las canciones se caracterizan por tener un número total de compases de 2105 (1 hora, 10 minutos), canciones que van desde 68 a 130 compases. El arco de este álbum se compone de géneros musicales variados, blues, baladas, a capella, con variedad de ritmos y tempos, y diferentes matices dentro de cada género.
                            </p>
                            <p className="italic text-white/60">
                                En este álbum, el verso abandona el libro para elevarse a la condición de horizonte infinito donde cada estrofa respira al son de la música y la voz.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/20 text-[10px] uppercase tracking-widest text-right italic font-sans">— Belén Juárez</p>
                        </div>
                    </div>
                </div>
            </div>

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
