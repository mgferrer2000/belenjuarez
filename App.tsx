import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { localizePath, SUPPORTED_LOCALES, type Locale } from './i18n/config';

const Inicio = lazy(() => import('./pages/Inicio'));
const SobreBelen = lazy(() => import('./pages/SobreBelen'));
const Contacto = lazy(() => import('./pages/Contacto'));
const CvaCientifico = lazy(() => import('./pages/CvaCientifico'));
const CurriculumLiterarioArtistico = lazy(() => import('./pages/CurriculumLiterarioArtistico'));
const ObraLiteraria = lazy(() => import('./pages/ObraLiteraria'));
const Libros = lazy(() => import('./pages/ObraLiteraria/Libros'));
const Antologias = lazy(() => import('./pages/ObraLiteraria/Antologias'));
const CollaborationDetail = lazy(() => import('./pages/ObraLiteraria/CollaborationDetail'));
const Plaquettes = lazy(() => import('./pages/ObraLiteraria/Plaquettes'));
const Relatos = lazy(() => import('./pages/ObraLiteraria/Relatos'));
const RelatoDetail = lazy(() => import('./pages/ObraLiteraria/RelatoDetail'));
const CriticaLiteraria = lazy(() => import('./pages/ObraLiteraria/Critica'));
const CriticaDetail = lazy(() => import('./pages/ObraLiteraria/CriticaDetail'));
const Traduccion = lazy(() => import('./pages/ObraLiteraria/Traduccion'));
const TraduccionDetail = lazy(() => import('./pages/ObraLiteraria/TraduccionDetail'));
const ResenasLibros = lazy(() => import('./pages/ObraLiteraria/ResenasLibros'));
const ResenaDetail = lazy(() => import('./pages/ObraLiteraria/ResenaDetail'));
const CriticaAndalusi = lazy(() => import('./pages/ObraLiteraria/CriticaAndalusi'));
const Prologos = lazy(() => import('./pages/ObraLiteraria/Prologos'));
const PrologoDetail = lazy(() => import('./pages/ObraLiteraria/PrologoDetail'));
const Entrevistas = lazy(() => import('./pages/ObraLiteraria/Entrevistas'));
const EntrevistaDetail = lazy(() => import('./pages/ObraLiteraria/EntrevistaDetail'));
const PoesiaVisual = lazy(() => import('./pages/PoesiaVisual'));
const PoesiaVisualDetail = lazy(() => import('./pages/PoesiaVisualDetail'));
const Arte = lazy(() => import('./pages/arte'));
const Cuadros = lazy(() => import('./pages/arte/Cuadros'));
const CriticaArtistica = lazy(() => import('./pages/arte/Critica'));
const Ilustracion = lazy(() => import('./pages/arte/Ilustracion'));
const Musica = lazy(() => import('./pages/musica'));
const Poesia = lazy(() => import('./pages/musica/Poesia'));
const Horizonte = lazy(() => import('./pages/musica/Horizonte'));
const Videos = lazy(() => import('./pages/musica/Videos'));
const BlogList = lazy(() => import('./src/pages/Blog/BlogList'));
const BlogPostView = lazy(() => import('./src/pages/Blog/BlogPost'));

const RouteLoader = () => (
  <RouteLoaderContent />
);

const RouteLoaderContent = () => {
  const { messages } = useI18n();

  return (
    <div className="min-h-[45vh] flex items-center justify-center bg-paper" role="status">
      <p className="font-serif italic text-ink/55 tracking-wide">{messages.loadingPage}</p>
    </div>
  );
};

const MobileScrollToTop = () => {
  const location = useLocation();
  const shouldFocusContent = (location.state as { scrollToSectionContent?: boolean } | null)?.scrollToSectionContent;

  useLayoutEffect(() => {
    if (window.matchMedia('(max-width: 1023px)').matches && !shouldFocusContent) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, shouldFocusContent]);

  return null;
};

const renderLocalizedRoutes = (locale: Locale) => {
  const root = `/${locale}`;

  return (
    <>
      <Route path={`${root}/`} element={<Inicio />} />
      <Route path={`${root}/sobre-belen`} element={<SobreBelen />} />
      <Route path={`${root}/sobre-belen/curriculum-literario-artistico`} element={<CurriculumLiterarioArtistico />} />
      <Route path={`${root}/sobre-belen/curriculum-cientifico`} element={<CvaCientifico />} />

      <Route path={`${root}/obra-literaria`} element={<ObraLiteraria />}>
        <Route index element={<Navigate to="libros" replace />} />
        <Route path="libros" element={<Libros />} />
        <Route path="resenas-libros" element={<ResenasLibros />} />
        <Route path="resenas-libros/:id" element={<ResenaDetail />} />
        <Route path="antologias" element={<Antologias />} />
        <Route path="antologias/:id" element={<CollaborationDetail />} />
        <Route path="plaquettes" element={<Plaquettes />} />
        <Route path="relatos" element={<Relatos />} />
        <Route path="relatos/:id" element={<RelatoDetail />} />
        <Route path="critica" element={<CriticaLiteraria />} />
        <Route path="critica/:slug" element={<CriticaDetail />} />
        <Route path="critica-andalusi" element={<CriticaAndalusi />} />
        <Route path="prologos" element={<Prologos />} />
        <Route path="prologos/:slug" element={<PrologoDetail />} />
        <Route path="traduccion" element={<Traduccion />} />
        <Route path="traduccion/:slug" element={<TraduccionDetail />} />
        <Route path="entrevistas" element={<Entrevistas />} />
        <Route path="entrevistas/:slug" element={<EntrevistaDetail />} />
      </Route>

      <Route path={`${root}/poesia-visual`} element={<PoesiaVisual />} />
      <Route path={`${root}/poesia-visual/:id`} element={<PoesiaVisualDetail />} />

      <Route path={`${root}/arte`} element={<Arte />}>
        <Route index element={<Navigate to="cuadros" replace />} />
        <Route path="cuadros" element={<Cuadros />} />
        <Route path="critica" element={<CriticaArtistica />} />
        <Route path="ilustracion" element={<Ilustracion />} />
      </Route>

      <Route path={`${root}/musica`} element={<Musica />}>
        <Route index element={<Navigate to="poesia" replace />} />
        <Route path="poesia" element={<Poesia />} />
        <Route path="horizonte" element={<Horizonte />} />
        <Route path="videos" element={<Videos />} />
      </Route>

      <Route path={`${root}/blog`} element={<BlogList />} />
      <Route path={`${root}/blog/:id`} element={<BlogPostView />} />

      <Route
        path={`${root}/cva-cientifico`}
        element={<Navigate to={`${root}/sobre-belen/curriculum-cientifico`} replace />}
      />
      <Route path={`${root}/contacto`} element={<Contacto />} />
      <Route path={`${root}/*`} element={<Navigate to={`${root}/`} replace />} />
    </>
  );
};

const LegacyLanguageRedirect = () => {
  const location = useLocation();
  const { locale } = useI18n();
  const targetPath = localizePath(locale, location.pathname);

  return <Navigate to={`${targetPath}${location.search}${location.hash}`} replace />;
};

const AppContent = () => (
  <>
    <MobileScrollToTop />
    <div className="bg-paper min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/es/" replace />} />
            {SUPPORTED_LOCALES.map((locale) => (
              <React.Fragment key={locale}>{renderLocalizedRoutes(locale)}</React.Fragment>
            ))}
            <Route path="*" element={<LegacyLanguageRedirect />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </Router>
  );
}

export default App;
