import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import SobreBelen from './pages/SobreBelen';
import Contacto from './pages/Contacto';
import ObraLiteraria from './pages/ObraLiteraria';
import Libros from './pages/ObraLiteraria/Libros';
import Antologias from './pages/ObraLiteraria/Antologias';
import CollaborationDetail from './pages/ObraLiteraria/CollaborationDetail';
import Plaquettes from './pages/ObraLiteraria/Plaquettes';
import Relatos from './pages/ObraLiteraria/Relatos';
import CriticaLiteraria from './pages/ObraLiteraria/Critica';
import Traduccion from './pages/ObraLiteraria/Traduccion';
import ResenasLibros from './pages/ObraLiteraria/ResenasLibros';
import CriticaAndalusi from './pages/ObraLiteraria/CriticaAndalusi';
import Prologos from './pages/ObraLiteraria/Prologos';
import Entrevistas from './pages/ObraLiteraria/Entrevistas';
// import Articulos from './pages/ObraLiteraria/Articulos'; // Keeping if needed or deleting
import PoesiaVisual from './pages/PoesiaVisual';
import Arte from './pages/arte';
import Cuadros from './pages/arte/Cuadros';
import CriticaArtistica from './pages/arte/Critica';
import Ilustracion from './pages/arte/Ilustracion';
import Musica from './pages/musica';
import Poesia from './pages/musica/Poesia';
import Horizonte from './pages/musica/Horizonte';

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
              <Route path="resenas-libros" element={<ResenasLibros />} />
              <Route path="antologias" element={<Antologias />} />
              <Route path="antologias/:id" element={<CollaborationDetail />} />
              <Route path="plaquettes" element={<Plaquettes />} />
              <Route path="relatos" element={<Relatos />} />
              <Route path="critica" element={<CriticaLiteraria />} />
              <Route path="critica-andalusi" element={<CriticaAndalusi />} />
              <Route path="prologos" element={<Prologos />} />
              <Route path="traduccion" element={<Traduccion />} />
              <Route path="entrevistas" element={<Entrevistas />} />
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