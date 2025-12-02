import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Belén', path: '/sobre-belen' },
    {
      name: 'Obra Literaria',
      path: '/obra-literaria',
      submenu: [
        { name: 'Libros', path: '/obra-literaria/libros' },
        { name: 'Antologías y Revistas', path: '/obra-literaria/antologias' },
        { name: 'Plaquettes', path: '/obra-literaria/plaquettes' },
        { name: 'Relatos', path: '/obra-literaria/relatos' },
        { name: 'Crítica Literaria', path: '/obra-literaria/critica' },
        { name: 'Artículos', path: '/obra-literaria/articulos' },
        { name: 'Traducción', path: '/obra-literaria/traduccion' },
      ]
    },
    { name: 'Poesía Visual', path: '/poesia-visual' },
    {
      name: 'Arte',
      path: '/arte',
      submenu: [
        { name: 'Cuadros', path: '/arte/cuadros' },
        { name: 'Crítica Artística', path: '/arte/critica' },
        { name: 'Ilustración de Libros', path: '/arte/ilustracion' },
      ]
    },
    {
      name: 'Música',
      path: '/musica',
      submenu: [
        { name: 'Música y Poesía', path: '/musica/poesia' },
        { name: 'Horizonte de Sucesos', path: '/musica/horizonte' },
      ]
    },
    { name: 'Contacto', path: '/contacto' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Determine text color based on route and scroll state
  const isDarkPage = location.pathname.startsWith('/musica');
  const textColorClass = isScrolled || !isDarkPage ? 'text-ink' : 'text-paper';
  const hoverColorClass = isScrolled || !isDarkPage ? 'hover:text-deep-red' : 'hover:text-gold-accent';
  const activeColorClass = isScrolled || !isDarkPage ? 'text-deep-red font-bold' : 'text-gold-accent font-bold';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-wider z-50 transition-colors ${textColorClass}`}>
          BELÉN JUAREZ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <button
                  className={`flex items-center gap-1 text-sm uppercase tracking-widest transition-colors ${location.pathname.startsWith(link.path) ? activeColorClass : `${textColorClass}/80`
                    } ${hoverColorClass}`}
                >
                  {link.name} <ChevronDown size={14} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm uppercase tracking-widest transition-colors ${location.pathname === link.path ? activeColorClass : `${textColorClass}/80`
                    } ${hoverColorClass}`}
                >
                  {link.name}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-56 bg-paper shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-2 flex flex-col">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="px-6 py-3 text-sm text-ink/70 hover:text-deep-red hover:bg-gray-50 transition-colors text-left"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden z-50 transition-colors ${isMenuOpen ? 'text-ink' : textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-paper z-40 flex flex-col pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4 pb-12">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2">
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex justify-between items-center w-full text-lg font-serif text-ink py-2"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="flex flex-col pl-4 space-y-3 mt-2 mb-4">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="text-ink/70 hover:text-deep-red"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-lg font-serif text-ink py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;