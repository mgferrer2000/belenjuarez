import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import { Instagram, Twitter, Mail, Send, Youtube, Music, CheckCircle, AlertCircle, Loader2, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Brand colors for social platforms
const BRAND_COLORS: Record<string, { text: string; bg: string }> = {
  Instagram: { text: 'text-[#E4405F]', bg: 'bg-[#E4405F]' },
  Twitter: { text: 'text-[#1DA1F2]', bg: 'bg-[#1DA1F2]' },
  'X (Twitter)': { text: 'text-white', bg: 'bg-black' },
  YouTube: { text: 'text-[#FF0000]', bg: 'bg-[#FF0000]' },
  'YouTube Music': { text: 'text-[#FF0000]', bg: 'bg-[#FF0000]' },
  Spotify: { text: 'text-[#1DB954]', bg: 'bg-[#1DB954]' },
  'Apple Music': { text: 'text-[#FA243C]', bg: 'bg-[#FA243C]' },
  Facebook: { text: 'text-[#1877F2]', bg: 'bg-[#1877F2]' },
  TikTok: { text: 'text-[#000000]', bg: 'bg-[#000000]' },
  Email: { text: 'text-[#d4af37]', bg: 'bg-[#d4af37]' },
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Instagram': return <Instagram size={20} />;
      case 'Facebook': return <Facebook size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'YouTube': return <Youtube size={20} />;
      case 'YouTube Music': return <Youtube size={20} />;
      case 'Spotify': return <Music size={20} />;
      case 'Apple Music': return <Music size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const getBrandColor = (platform: string) => {
    return BRAND_COLORS[platform] || { text: 'text-[#d4af37]', bg: 'bg-[#d4af37]' };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/belenjj.bjj4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Nuevo mensaje de ${name} — Web Belén Juárez`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-stone-100 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 md:p-12 -mt-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-ink mb-2">Contacto</h2>
          <p className="text-ink/60 font-sans text-sm">Para lecturas, colaboraciones o prensa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-serif text-xl text-ink">Encuéntrame en</h3>
            <div className="space-y-4">
              {SOCIALS.map((social) => {
                const colors = getBrandColor(social.platform);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 text-ink/70 transition-colors group"
                    style={{ '--brand-color': colors.text.replace('text-[', '').replace(']', '') } as React.CSSProperties}
                  >
                    <div
                      className={`w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg ${colors.bg.startsWith('bg-[')
                        ? ''
                        : `group-hover:${colors.bg}`
                        }`}
                      style={{
                        // Use inline style for hover via CSS variable
                      }}
                      onMouseEnter={(e) => {
                        const bgColor = colors.bg.replace('bg-[', '').replace(']', '');
                        (e.currentTarget as HTMLElement).style.backgroundColor = bgColor;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '';
                      }}
                    >
                      {getIcon(social.iconName)}
                    </div>
                    <span className="font-sans text-sm uppercase tracking-wide group-hover:font-semibold transition-all">{social.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Mensaje</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors"
                disabled={status === 'sending'}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 uppercase tracking-widest font-sans text-sm flex items-center justify-center gap-2 transition-colors ${status === 'sending'
                ? 'bg-gray-400 text-white cursor-wait'
                : 'bg-ink text-white hover:bg-deep-red'
                }`}
            >
              {status === 'sending' ? (
                <>Enviando <Loader2 size={14} className="animate-spin" /></>
              ) : (
                <>Enviar <Send size={14} /></>
              )}
            </button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-emerald-600 text-sm font-sans mt-2"
                >
                  <CheckCircle size={16} />
                  <span>¡Mensaje enviado correctamente! Te responderé lo antes posible.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-600 text-sm font-sans mt-2"
                >
                  <AlertCircle size={16} />
                  <span>Error al enviar. Inténtalo de nuevo o escríbeme directamente a mi email.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      <footer className="text-center mt-20 text-ink/40 font-sans text-xs">
        <p>&copy; {new Date().getFullYear()} Belén Juarez. Todos los derechos reservados.</p>
        <p className="mt-2">Diseñado con <span className="text-deep-red">♥</span> y versos.</p>
      </footer>
    </section>
  );
};

export default Contact;