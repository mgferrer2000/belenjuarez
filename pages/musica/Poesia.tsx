import React from 'react';
import { Film, MapPin, Info, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { MUSIC_POETRY_MESSAGES } from '../../i18n/musicMessages';

const Poesia: React.FC = () => {
    const { locale } = useI18n();
    const content = MUSIC_POETRY_MESSAGES[locale];

    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-16">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <Film className="text-[#d4af37]" size={28} />
                    <h2 className="text-4xl md:text-5xl font-serif text-white italic">{content.title}</h2>
                </div>
                <p className="text-gray-400 font-light max-w-2xl leading-relaxed">
                    {content.introduction}
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
                        title={content.videoTitle}
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
                        <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">{content.liveExhibition}</h3>
                    </div>
                    <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                        <p>
                            {content.exhibitionText}
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
                        <h3 className="text-[#d4af37] font-sans text-[11px] uppercase tracking-[0.4em] font-bold">{content.pieceTitle}</h3>
                    </div>
                    <div className="space-y-4 text-white/80 font-serif text-base leading-relaxed">
                        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </motion.div>
            </div>
        </div >
    );
};

export default Poesia;
