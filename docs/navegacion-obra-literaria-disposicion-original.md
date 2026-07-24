# Navegacion de Obra literaria: disposicion original

Documento de respaldo creado antes de sustituir la navegacion interna de
Obra literaria por un selector editorial desplegable.

Fecha del respaldo: 24 de julio de 2026.

## Archivos implicados

- `web-astro/src/components/LiterarySectionNav.astro`
- `web-astro/src/styles/global.css`
- `web-astro/src/data/literary-landing.ts`

La lista y el orden de las secciones proceden de `literary-landing.ts`. El
componente se comparte entre las paginas generales y las paginas de detalle,
por lo que no hay copias independientes del menu en cada pagina.

## Orden de las secciones

1. Libros
2. Resenas sobre libros
3. Poemas en antologias y revistas
4. Plaquettes
5. Relatos
6. Critica literaria
7. Critica libros legado andalusi
8. Prologos y capitulos de libro
9. Traduccion
10. Entrevistas a escritores

La version francesa mantiene este mismo orden y las mismas rutas internas.

## Componente original

```astro
---
import { literaryLanding } from '../data/literary-landing';
import type { Locale } from '../data/site';
import { localizedPath } from '../utils/paths';

interface Props { lang: Locale; activePath: string; }
const { lang, activePath } = Astro.props;
const content = literaryLanding[lang];
---

<nav class="literary-section-nav" aria-label={content.title}>
  {content.sections.map((section) => (
    <a class:list={{ active: section.path === activePath }} href={localizedPath(lang, `obra-literaria/${section.path}`)} aria-current={section.path === activePath ? 'page' : undefined}>
      {section.title}
    </a>
  ))}
</nav>
```

## Presentacion original en escritorio

En las paginas que replican la presentacion de React, las diez opciones se
mostraban permanentemente como enlaces en linea. El contenedor permitia el
salto de linea, por lo que habitualmente ocupaba dos renglones.

```css
.react-literary-page > .literary-section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 0 48px;
  padding: 0 0 16px;
  border: 0;
  border-bottom: 1px solid rgba(45,42,46,.1);
}

.react-literary-page > .literary-section-nav a,
.react-literary-page > .literary-section-nav a:nth-child(5n),
.react-literary-page > .literary-section-nav a:nth-child(n+6) {
  display: inline;
  min-height: 0;
  padding: 0;
  border: 0;
  color: rgba(45,42,46,.6);
  background: transparent;
  font: 400 .875rem/1.5 var(--sans);
  text-transform: uppercase;
  letter-spacing: .1em;
  white-space: nowrap;
}

.react-literary-page > .literary-section-nav a:hover {
  color: var(--wine);
  background: transparent;
}

.react-literary-page > .literary-section-nav a.active {
  padding-bottom: 2px;
  border-bottom: 2px solid var(--wine);
  color: var(--wine);
  background: transparent;
  font-weight: 700;
}
```

## Presentacion original en movil

Por debajo de 768 px, los enlaces formaban una cuadricula de dos columnas.
Cada enlace era una celda de al menos 42 px de altura y la seccion activa
tenia fondo color vino.

```css
@media (max-width: 767px) {
  .react-literary-page > .literary-section-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1px;
    overflow: hidden;
    padding: 0;
    border: 1px solid rgba(45,42,46,.1);
    background: rgba(45,42,46,.1);
  }

  .react-literary-page > .literary-section-nav a,
  .react-literary-page > .literary-section-nav a:nth-child(5n),
  .react-literary-page > .literary-section-nav a:nth-child(n+6) {
    display: flex;
    min-height: 42px;
    align-items: center;
    padding: 8px 12px;
    border: 0;
    color: rgba(45,42,46,.6);
    background: var(--paper);
    font-size: .625rem;
    line-height: 1.35;
    letter-spacing: .04em;
    white-space: normal;
  }

  .react-literary-page > .literary-section-nav a.active {
    border: 0;
    color: var(--paper);
    background: var(--wine);
  }
}
```

## Variante generica anterior

Algunas plantillas disponian ademas de una regla generica en forma de tabla
de cinco columnas en escritorio y dos columnas en movil:

```css
.literary-section-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 78px;
  border: 1px solid var(--line);
}

.literary-section-nav a {
  display: flex;
  gap: 9px;
  align-items: center;
  min-height: 58px;
  padding: 12px 14px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--ink-soft);
  font: 400 .63rem/1.4 var(--sans);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .05em;
}
```

## Como restaurar esta disposicion

1. Sustituir el contenido de `LiterarySectionNav.astro` por el componente
   original incluido en este documento.
2. Eliminar de `global.css` el bloque titulado
   `Literary section editorial selector`.
3. Las reglas originales permanecen documentadas arriba y tambien pueden
   recuperarse desde Git.
4. Ejecutar `npm run build` desde `web-astro`.
5. Verificar una pagina general y una pagina de detalle en espanol y frances,
   tanto a 1366 px como a menos de 768 px.

No es necesario cambiar rutas, datos ni paginas individuales.
