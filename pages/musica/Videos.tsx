
import React from 'react';
import { Film, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import DeferredYouTube from '../../components/DeferredYouTube';
import { useIsMobile } from '../../src/hooks/useIsMobile';
import { useI18n } from '../../i18n/I18nProvider';
import { MUSIC_VIDEOS_MESSAGES } from '../../i18n/musicMessages';

const Videos: React.FC = () => {
    const { locale } = useI18n();
    const content = MUSIC_VIDEOS_MESSAGES[locale];
    const isMobile = useIsMobile();

    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-16">
            {/* Header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Film className="text-[#d4af37]" size={28} />
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic">{content.title}</h2>
                </div>
                <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                    {content.introduction}
                </p>
            </div>

            {/* Video Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {content.items.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: isMobile ? 0.5 : 0.6,
                            delay: isMobile ? Math.min(index, 4) * 0.08 : index * 0.1
                        }}
                        className="space-y-6"
                    >
                        {/* Video Embed */}
                        <div className="relative rounded-sm overflow-hidden shadow-2xl bg-black border border-white/10 aspect-video w-full group">
                            {isMobile ? (
                                <DeferredYouTube youtubeId={video.youtubeId} title={video.title} />
                            ) : (
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
                                />
                            )}
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
