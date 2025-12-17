# Guía de Estilo y Documentación del Proyecto

Este documento contiene las directrices técnicas y de diseño para el proyecto web de Belén Juárez. Está diseñado para facilitar la continuidad del desarrollo y asegurar la consistencia visual.

## 1. Stack Tecnológico

El proyecto está construido utilizando tecnologías modernas del ecosistema React.

*   **Framework**: [React 19](https://react.dev/)
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router v7](https://reactrouter.com/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (vía CDN)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
*   **Iconos**: [Lucide React](https://lucide.dev/)

## 2. Sistema de Diseño (Design System)

La identidad visual del proyecto se define por una estética minimalista, elegante y clásica, evocando la sensación de papel y tinta.

### Colores

La paleta de colores está configurada en `tailwind.config` dentro de `index.html`.

| Nombre | Hex | Variable Tailwind | Uso |
| :--- | :--- | :--- | :--- |
| **Paper** | `#fdfbf7` | `bg-paper` | Fondo principal, simula papel crema/hueso. |
| **Ink** | `#2d2a2e` | `text-ink` | Texto principal, simula tinta oscura (no negro puro). |
| **Gold Accent** | `#d4af37` | `text-gold-accent` | Detalles, bordes, elementos destacados. |
| **Deep Red** | `#722f37` | `text-deep-red` | Acentos fuertes, llamadas a la acción. |

### Tipografía

Se utilizan fuentes de Google Fonts.

*   **Serif (Principal)**: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
    *   Uso: Títulos, encabezados, citas.
    *   Clase Tailwind: `font-serif`
    *   Pesos: 300 (Light), 400 (Regular), 600 (Semi-bold), Italic.
*   **Sans-serif (Secundaria)**: [Montserrat](https://fonts.google.com/specimen/Montserrat)
    *   Uso: Cuerpo de texto, navegación, elementos de UI.
    *   Clase Tailwind: `font-sans`
    *   Pesos: 300 (Light), 400 (Regular), 500 (Medium).

### Configuración de Estilos

*   **Tailwind CSS**: Se carga vía CDN en `index.html`.
*   **Configuración**: La configuración de Tailwind (colores, fuentes) se encuentra en un script dentro del `<head>` de `index.html`.
*   **Estilos Globales**: Se aplican estilos base al `body` (fondo y color de texto) en una etiqueta `<style>` en `index.html`.

## 3. Estructura del Proyecto

La estructura de carpetas es plana y funcional:

```
/
├── components/       # Componentes reutilizables de UI (Navbar, Footer, Layout, etc.)
├── pages/            # Componentes de página (Inicio, Bio, Libros, etc.)
├── documentación/    # Documentación del proyecto
├── constants.ts      # Datos estáticos (libros, colaboraciones, tracks, redes sociales)
├── types.ts          # Definiciones de tipos TypeScript
├── App.tsx           # Componente principal y configuración de rutas
├── index.tsx         # Punto de entrada de la aplicación
├── index.html        # Archivo HTML principal (configuración de estilos y fuentes)
└── package.json      # Dependencias y scripts
```

## 4. Gestión de Contenido

El contenido estático del sitio se gestiona principalmente a través del archivo `constants.ts`.

*   **Libros**: `BOOKS`
*   **Colaboraciones**: `COLLABORATIONS`
*   **Música**: `ALBUM_TRACKS`
*   **Arte**: `ART_PIECES`
*   **Redes Sociales**: `SOCIALS`

Para actualizar el contenido, modifique este archivo respetando los tipos definidos en `types.ts`.

## 5. Instalación y Ejecución

Para continuar el desarrollo localmente:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```
