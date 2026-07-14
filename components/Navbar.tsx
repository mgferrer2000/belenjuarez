import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { stripLocalePrefix, SUPPORTED_LOCALES } from '../i18n/config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const bodyOverflowBeforeMenu = React.useRef<string | null>(null);
  const location = useLocation();
  const { locale, messages, path, switchLanguagePath } = useI18n();
  const unlocalizedPath = stripLocalePrefix(location.pathname);
  const nav = messages.nav;

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

  useEffect(() => {
    if (!isMenuOpen) return;

    bodyOverflowBeforeMenu.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      if (bodyOverflowBeforeMenu.current !== null) {
        document.body.style.overflow = bodyOverflowBeforeMenu.current;
        bodyOverflowBeforeMenu.current = null;
      }
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: nav.home, path: path('/') },
    {
      name: nav.about,
      path: path('/sobre-belen'),
      submenu: [
        { name: nav.biography, path: path('/sobre-belen') },
        { name: nav.literaryCv, path: path('/sobre-belen/curriculum-literario-artistico') },
        { name: nav.scientificCv, path: path('/sobre-belen/curriculum-cientifico') },
      ]
    },
    {
      name: nav.literaryWork,
      path: path('/obra-literaria'),
      submenu: [
        { name: nav.books, path: path('/obra-literaria/libros') },
        { name: nav.bookReviews, path: path('/obra-literaria/resenas-libros') },
        { name: nav.anthologies, path: path('/obra-literaria/antologias') },
        { name: nav.plaquettes, path: path('/obra-literaria/plaquettes') },
        { name: nav.stories, path: path('/obra-literaria/relatos') },
        { name: nav.literaryCriticism, path: path('/obra-literaria/critica') },
        { name: nav.andalusiCriticism, path: path('/obra-literaria/critica-andalusi') },
        { name: nav.prologues, path: path('/obra-literaria/prologos') },
        { name: nav.translation, path: path('/obra-literaria/traduccion') },
        { name: nav.interviews, path: path('/obra-literaria/entrevistas') },
      ]
    },
    { name: nav.visualPoetry, path: path('/poesia-visual') },
    {
      name: nav.art,
      path: path('/arte'),
      submenu: [
        { name: nav.paintings, path: path('/arte/cuadros') },
        { name: nav.bookIllustration, path: path('/arte/ilustracion') },
        { name: nav.artCriticism, path: path('/arte/critica') },
      ]
    },
    {
      name: nav.music,
      path: path('/musica'),
      submenu: [
        { name: nav.musicPoetry, path: path('/musica/poesia') },
        { name: nav.horizonte, path: path('/musica/horizonte') },
        { name: nav.videos, path: path('/musica/videos') },
      ]
    },
    { name: nav.openDiary, path: path('/blog') },
    { name: nav.contact, path: path('/contacto') },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeMobileMenu = () => {
    if (bodyOverflowBeforeMenu.current !== null) {
      document.body.style.overflow = bodyOverflowBeforeMenu.current;
      bodyOverflowBeforeMenu.current = null;
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const shouldFocusSectionContent = (path: string) => (
    stripLocalePrefix(path).startsWith('/obra-literaria/')
    || stripLocalePrefix(path).startsWith('/arte/')
    || stripLocalePrefix(path).startsWith('/musica/')
  );

  // Determine text color based on route and scroll state
  const isDarkPage = unlocalizedPath.startsWith('/musica');
  const textColorClass = isScrolled || !isDarkPage ? 'text-ink' : 'text-paper';
  const hoverColorClass = isScrolled || !isDarkPage ? 'hover:text-deep-red' : 'hover:text-gold-accent';
  const activeColorClass = isScrolled || !isDarkPage ? 'text-deep-red font-bold' : 'text-gold-accent font-bold';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to={path('/')} className={`text-xl lg:text-2xl font-serif font-bold tracking-wider z-50 transition-colors ${textColorClass}`}>
          BELÉN JUÁREZ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-3 xl:space-x-6 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`flex items-center gap-1 text-[12px] xl:text-sm uppercase tracking-widest transition-colors ${location.pathname.startsWith(link.path) ? activeColorClass : `${textColorClass}/80`
                    } ${hoverColorClass}`}
                >
                  {link.name} <ChevronDown size={14} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`text-[12px] xl:text-sm uppercase tracking-widest transition-colors ${location.pathname === link.path ? activeColorClass : `${textColorClass}/80`
                    } ${hoverColorClass}`}
                >
                  {link.name}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {link.submenu && (
                <div className="absolute left-0 top-full w-max pt-3 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-opacity duration-150">
                  <div className="py-2 flex flex-col bg-paper shadow-xl border border-gray-100">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="px-6 py-3 text-sm text-ink/70 hover:text-deep-red hover:bg-gray-50 transition-colors text-left whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={`flex items-center gap-1 border-l pl-3 xl:pl-5 ${isScrolled || !isDarkPage ? 'border-ink/15' : 'border-paper/20'}`} aria-label={messages.languageLabel}>
            {SUPPORTED_LOCALES.map((language) => (
              <Link
                key={language}
                to={switchLanguagePath(language)}
                lang={language}
                aria-current={locale === language ? 'page' : undefined}
                className={`px-1 py-1 text-[10px] font-sans font-medium uppercase tracking-[0.12em] transition-colors ${locale === language ? activeColorClass : `${textColorClass}/45 ${hoverColorClass}`}`}
              >
                {language}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden z-50 transition-colors ${isMenuOpen ? 'text-ink' : textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? messages.closeMenu : messages.openMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && createPortal(
        <div id="mobile-navigation" className="fixed inset-0 bg-paper z-40 flex flex-col pt-20 px-5 overflow-y-auto overscroll-contain">
          <div className="mb-5 flex items-center justify-between border-y border-ink/10 py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-ink/45">
            <span>{messages.languageLabel}</span>
            <div className="flex items-center gap-2">
              {SUPPORTED_LOCALES.map((language) => (
                <Link
                  key={language}
                  to={switchLanguagePath(language)}
                  lang={language}
                  aria-current={locale === language ? 'page' : undefined}
                  onClick={closeMobileMenu}
                  className={`min-w-9 px-2 py-1 text-center transition-colors ${locale === language ? 'bg-deep-red text-paper' : 'text-ink/50'}`}
                >
                  {language}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 pb-10">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2">
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex min-h-12 justify-between items-center w-full text-lg font-serif text-ink py-2"
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="grid grid-cols-2 gap-px mt-1 mb-3 overflow-hidden border border-ink/10 bg-ink/10">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            state={shouldFocusSectionContent(subItem.path) ? { scrollToSectionContent: true } : undefined}
                            onClick={closeMobileMenu}
                            className={`flex min-h-[42px] items-center bg-paper px-3 py-2 font-sans text-[11px] leading-snug tracking-[0.02em] text-ink/65 transition-colors hover:text-deep-red ${location.pathname === subItem.path ? 'bg-deep-red text-paper font-medium hover:text-paper' : ''}`}
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
                    onClick={closeMobileMenu}
                    className={`flex min-h-12 items-center text-lg font-serif text-ink py-2 ${location.pathname === link.path ? 'text-deep-red font-semibold' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;






