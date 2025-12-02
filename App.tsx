import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import SobreBelen from './pages/SobreBelen';
import Contacto from './pages/Contacto';
import ObraLiteraria from './pages/ObraLiteraria';
import Libros from './pages/ObraLiteraria/Libros';
import Antologias from './pages/ObraLiteraria/Antologias';
import Plaquettes from './pages/ObraLiteraria/Plaquettes';
import Relatos from './pages/ObraLiteraria/Relatos';
import CriticaLiteraria from './pages/ObraLiteraria/Critica';
import Articulos from './pages/ObraLiteraria/Articulos';
import Traduccion from './pages/ObraLiteraria/Traduccion';
import PoesiaVisual from './pages/PoesiaVisual';
import Arte from './pages/Arte';
import Cuadros from './pages/Arte/Cuadros';
import CriticaArtistica from './pages/Arte/Critica';
import Ilustracion from './pages/Arte/Ilustracion';
import Musica from './pages/Musica';
import Poesia from './pages/Musica/Poesia';
import Horizonte from './pages/Musica/Horizonte';

function App() {
  return (
    <Router>
      <div className="bg-paper min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-belen" element={<SobreBelen />} />

            <Route path="/obra-literaria" element={<ObraLiteraria />}>
              <Route index element={<Navigate to="libros" replace />} />
              <Route path="libros" element={<Libros />} />
              <Route path="antologias" element={<Antologias />} />
              <Route path="plaquettes" element={<Plaquettes />} />
              <Route path="relatos" element={<Relatos />} />
              <Route path="critica" element={<CriticaLiteraria />} />
              <Route path="articulos" element={<Articulos />} />
              <Route path="traduccion" element={<Traduccion />} />
            </Route>

            <Route path="/poesia-visual" element={<PoesiaVisual />} />

            <Route path="/arte" element={<Arte />}>
              <Route index element={<Navigate to="cuadros" replace />} />
              <Route path="cuadros" element={<Cuadros />} />
              <Route path="critica" element={<CriticaArtistica />} />
              <Route path="ilustracion" element={<Ilustracion />} />
            </Route>

            <Route path="/musica" element={<Musica />}>
              <Route index element={<Navigate to="poesia" replace />} />
              <Route path="poesia" element={<Poesia />} />
              <Route path="horizonte" element={<Horizonte />} />
            </Route>

            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;