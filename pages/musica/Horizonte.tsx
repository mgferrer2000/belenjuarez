import React, { useState } from 'react';
import { ALBUM_TRACKS } from '../../constants';
import { Music as MusicIcon, Disc, ChevronRight, X, ListMusic, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { MUSIC_HORIZON_MESSAGES } from '../../i18n/musicMessages';

const Horizonte: React.FC = () => {
    const { locale } = useI18n();
    const content = MUSIC_HORIZON_MESSAGES[locale];
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
        <div className="max-w-7xl mx-auto px-4 md:px-0 pb-20">
            <div className="flex flex-col lg:flex-row gap-12 mb-16 relative">
                {/* Playlist Section */}
                <div className="flex-1 space-y-6">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <ListMusic className="text-[#d4af37]" size={28} />
                            <h2 className="text-4xl md:text-5xl font-serif text-white italic">{content.title}</h2>
                        </div>
                        <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                            {content.introduction}
                            <br />
                            <span className="text-[#d4af37]/80 text-sm mt-2 block font-medium">{content.selectionPrompt}</span>
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

                        <div className="-mx-10 w-[calc(100%+5rem)] border-y border-white/10 bg-white/5 p-5 md:mx-0 md:w-auto md:rounded-sm md:border md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Disc className="text-[#d4af37] animate-spin-slow" size={24} />
                                <h5 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">{content.authorNote}</h5>
                            </div>
                            <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                                {content.authorParagraphs.map((paragraph, index) => (
                                    <p key={paragraph} className={index === content.authorParagraphs.length - 1 ? 'italic text-white/60' : undefined}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-white/20 text-[10px] uppercase tracking-widest text-right italic font-sans">— Belén Juárez</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Section - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative -mx-10 w-[calc(100%+5rem)] overflow-hidden border-y border-gold/10 bg-white/5 p-5 shadow-2xl md:mx-0 md:w-auto md:rounded-sm md:border md:p-14 group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MusicIcon size={120} className="text-gold" />
                </div>
                
                <div className="flex flex-col gap-1 mb-8">
                    <h5 className="text-gold font-sans text-[12px] uppercase tracking-[0.25em] md:tracking-[0.5em] font-bold">{content.reviewTitle}</h5>
                    <p className="text-white/40 font-sans text-[11px] uppercase tracking-wider">{content.reviewMeta}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 text-left font-serif text-base italic leading-relaxed text-white/70 md:grid-cols-2 md:gap-16 md:text-lg">
                    <div className="space-y-6">
                        {content.reviewParagraphs.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <div className="space-y-6">
                        {content.reviewParagraphs.slice(2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-start border-t border-white/10 pt-6 md:mt-12 md:justify-end md:pt-8">
                    <a 
                        href="https://www.facebook.com/share/1ApEXkNRGF/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gold/60 hover:text-gold text-xs uppercase tracking-[0.2em] font-sans transition-colors flex items-center gap-3 group/link"
                    >
                        {content.reviewLink}
                        <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>

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
