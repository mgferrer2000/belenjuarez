import React from 'react';
import { SOCIALS } from '../constants';
import { Instagram, Twitter, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Instagram': return <Instagram size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Mail size={20} />;
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
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="flex items-center gap-4 text-ink/70 hover:text-deep-red transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-deep-red group-hover:text-white transition-colors">
                    {getIcon(social.iconName)}
                  </div>
                  <span className="font-sans text-sm uppercase tracking-wide">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Simple Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nombre</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Mensaje</label>
              <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-deep-red transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-ink text-white py-3 uppercase tracking-widest font-sans text-sm hover:bg-deep-red transition-colors flex items-center justify-center gap-2">
              Enviar <Send size={14} />
            </button>
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