# Auditoría de portadas React frente a Astro

Fecha de la auditoría: 20 de julio de 2026

## 1. Alcance

Esta hoja compara exclusivamente las páginas principales:

- Producción React en español: `https://belenjuarez.com/es/`
- Producción React en francés: `https://belenjuarez.com/fr/`
- Portada Astro en español: `/es/`
- Portada Astro en francés: `/fr/`

El objetivo es que Astro reproduzca con fidelidad visual y funcional la portada React, manteniendo las mejoras SEO propias de Astro.

No se ha modificado ningún archivo de React ni de Astro durante esta auditoría. Solo se ha creado este documento.

## 2. Fuentes de evidencia

- Inspección de las dos portadas React publicadas.
- Medición del DOM y de los estilos calculados en React a `1440 × 1000 px` y `390 × 844 px`.
- Revisión del HTML estático generado por Astro para `/es/` y `/fr/`.
- Revisión de `Header.astro`, `Footer.astro`, la portada Astro y `global.css`.
- Revisión de `Navbar.tsx`, `Hero.tsx`, `Footer.tsx` y los textos localizados de React.

La web temporal de Hostinger está protegida con contraseña y no fue posible inspeccionarla directamente sin autenticación. Las diferencias de Astro se han obtenido de la compilación exacta que se sube a ese servidor. Después de aplicar las correcciones será necesario realizar una validación visual final en el dominio temporal autenticado.

## 3. Referencia exacta de React

### Escritorio a 1440 × 1000 px

| Elemento | Valor de referencia React |
| --- | --- |
| Cabecera | 80 px de alto, fija, transparente al inicio |
| Hero | 1000 px de alto, comienza en `y = 80` |
| Ancho útil por la barra vertical | 1425 px |
| Antetítulo | 20 px, línea de 28 px, espaciado de 6 px, ancho 672 px |
| Posición del antetítulo | `x = 376,6`, `y = 376` |
| Título | 96 px, peso 500, línea de 96 px, dos líneas, ancho 672 px |
| Posición del título | `x = 376,6`, `y = 420`, alto 192 px |
| Citas | 20 px, peso 300, línea de 28 px, ancho 672 px |
| Posición de las citas | `x = 376,6`, `y = 644`, alto 140 px |
| Imagen de fondo | `cover`, opacidad 0,20, recurso Unsplash con `q=80` |
| Pie | 80,6 px de alto, comienza en `y = 1080` |
| Altura total | 1160 px |

Estas medidas son iguales en español y francés. Solo cambia el contenido textual.

### Móvil a 390 × 844 px

| Elemento | Valor de referencia React |
| --- | --- |
| Ancho útil | 375,4 px |
| Cabecera | 76 px calculados; el hero mantiene una separación superior de 80 px |
| Hero | 844 px de alto |
| Márgenes laterales del contenido | 24 px |
| Ancho del contenido | 327,4 px |
| Antetítulo | 18 px, línea de 28 px, espaciado de 5,4 px |
| Título | 48 px, peso 500, línea de 60 px, dos líneas |
| Citas | 18 px, peso 300, línea de 29,25 px |
| Imagen de fondo | `cover`, opacidad 0,20 |
| Pie | Aproximadamente 95 px al ocupar dos líneas |

## 4. Resumen ejecutivo de diferencias

| ID | Prioridad | Zona | Diferencia | Acción necesaria |
| --- | --- | --- | --- | --- |
| P-01 | Crítica | Fondo | Astro no reproduce la composición de imagen y degradado de React | Usar la misma estructura de imagen y overlay de React |
| P-02 | Crítica | Cabecera | Astro muestra fondo, borde y desenfoque desde el inicio | Hacerla transparente al inicio y aplicar el estado opaco solo al desplazarse |
| P-03 | Crítica | Responsive | React cambia a hamburguesa por debajo de 1366 px; Astro lo hace por debajo de 1180 px | Igualar el breakpoint a 1366 px |
| P-04 | Alta | Menú móvil | La estructura Astro no coincide con el panel móvil React | Replicar overlay, bloqueo de scroll, ancho y rejillas de submenús |
| P-05 | Alta | Hero móvil | El interlineado y el ancho del título no coinciden | Fijar línea de 60 px y márgenes laterales de 24 px |
| P-06 | Alta | Animación | Astro anima todo el bloque a la vez | Replicar las tres animaciones escalonadas de React |
| P-07 | Alta | Navegación | Tamaños, pesos y separaciones del menú de escritorio difieren | Aplicar reglas distintas para ES y FR según React |
| P-08 | Media | Idiomas | En francés Astro invierte el orden visual de ES y FR | Mantener siempre ES seguido de FR |
| P-09 | Media | Francés | Astro usa “Art Visuel” y React “Art visuel” | Corregir la capitalización |
| P-10 | Media | Título | Astro confía en el ajuste automático de línea | Forzar las dos líneas como en React |
| P-11 | Media | Desplegables | Tamaño, espaciado y forma de la flecha difieren | Replicar botones, icono y caja de React |
| P-12 | Baja | Pie móvil | El interlineado de Astro es 1 px mayor | Usar 15 px en móvil y 16 px en escritorio |

## 5. Diferencias detalladas

### 5.1. Fondo del hero

**React**

- Renderiza una etiqueta `<img>` real.
- Usa exactamente `q=80` en la URL de Unsplash.
- Aplica `opacity: 0.20` a la imagen.
- Superpone un degradado independiente: transparente al comienzo, `paper/50` en el centro y color papel al final.
- Conserva un texto alternativo localizado:
  - ES: `Textura de fondo con libros`.
  - FR: `Texture de fond composée de livres`.

**Astro**

- Usa la imagen dentro de `background` en `.hero-backdrop`.
- Solicita `q=78`.
- Combina imagen y degradado en una sola declaración.
- Aplica `opacity: .72` al conjunto completo.
- El resultado mezcla el degradado y la fotografía en proporciones diferentes a React, especialmente en la zona superior y central.
- El fondo se marca como decorativo y pierde el texto alternativo que existe en React.

**Corrección propuesta**

1. Reproducir en Astro las dos capas de React: `<img>` y overlay independiente.
2. Usar la URL exacta con `q=80`.
3. Aplicar `opacity: .20` únicamente a la imagen.
4. Aplicar el degradado exacto sobre la imagen.
5. Recuperar los textos alternativos ES y FR.

### 5.2. Cabecera en la parte superior

**React**

- `position: fixed`.
- Fondo transparente cuando la página está arriba.
- Sin borde inferior inicial.
- Al superar 50 px de scroll pasa a fondo papel al 95 %, desenfoque, sombra suave y menor altura interior.

**Astro**

- `position: sticky`.
- Fondo papel al 94 % desde el primer momento.
- Borde inferior visible desde el inicio.
- Desenfoque de 14 px permanente.
- No existe cambio visual asociado al scroll.

**Efecto visual**

La cabecera Astro se percibe como una franja sólida separada del hero. En React la cabecera forma parte visualmente de la fotografía al cargar la portada.

**Corrección propuesta**

1. Convertir la cabecera Astro en fija.
2. Dejarla transparente y sin borde en el estado inicial.
3. Añadir un pequeño script que aplique una clase al superar 50 px de scroll.
4. Replicar en esa clase el fondo, desenfoque, sombra y reducción de padding de React.
5. Mantener una compensación superior de 80 px en la portada para que el hero siga comenzando en `y = 80`.

### 5.3. Menú de escritorio

#### Español a 1440 px

React usa:

- Marca: 24 px, peso 700, espaciado 1,2 px.
- Opciones: 12 px, espaciado 1,2 px.
- Separación entre opciones: 20 px.
- Opción activa: color vino y peso 700.

Astro usa actualmente:

- Marca: 24 px, peso 600.
- Opciones: aproximadamente 11 px.
- Espaciado: aproximadamente 1,32 px.
- Separación fluida próxima a 23 px a 1440 px.
- Opción activa: cambia de color, pero no aumenta a peso 700.

#### Francés a 1440 px

React usa:

- Opciones: 11 px.
- Espaciado: 0,88 px.
- Separación entre opciones: 16 px.

Astro aplica las mismas reglas que en español, por lo que no reproduce el ajuste específico creado para que el menú francés encaje.

**Corrección propuesta**

1. Aplicar peso 700 a la marca.
2. Usar selectores por idioma (`html[lang='es']` y `html[lang='fr']`).
3. ES: 12 px, `letter-spacing: 1.2px`, `gap: 20px` a partir de 1440 px.
4. FR: 11 px, `letter-spacing: .88px`, `gap: 16px` a partir de 1440 px.
5. Aplicar peso 700 al elemento activo.
6. Mantener el alto interactivo de 24 px y la alineación vertical en `y = 28`.

### 5.4. Breakpoint y fase intermedia

**React**

- Menú completo desde 1366 px.
- Menú hamburguesa por debajo de 1366 px.
- La marca usa 20 px entre 1366 y 1439 px y 24 px desde 1440 px.
- Las separaciones también se reducen entre 1366 y 1439 px.

**Astro**

- Menú completo desde 1181 px.
- Menú hamburguesa hasta 1180 px.
- La marca mantiene 24 px en el intervalo intermedio.

**Riesgo**

Entre 1181 y 1365 px Astro intenta mostrar un menú que React sustituye por la hamburguesa. Es una fuente probable de apiñamiento, desplazamiento y desbordamiento.

**Corrección propuesta**

1. Cambiar el breakpoint de Astro de 1180 a 1365 px.
2. Reproducir las reglas compactas de React para 1366-1439 px.
3. Probar expresamente 1280, 1365, 1366, 1399, 1439 y 1440 px.

### 5.5. Selector de idioma

**React**

- Mantiene siempre el orden `ES` y después `FR`.
- Banderas SVG de 15 × 10 px.
- Texto de 10 px.
- En francés cambia el elemento activo, pero no altera el orden.

**Astro**

- Coloca primero el idioma activo.
- En `/fr/` muestra `FR` antes que `ES`.
- Banderas CSS de 17 × 11 px.

**Corrección propuesta**

1. Renderizar siempre ES y FR en ese orden.
2. Reducir las banderas a 15 × 10 px.
3. Mantener el color y peso activo sin reordenar elementos.
4. Conservar los enlaces estáticos de Astro y sus atributos de idioma.

### 5.6. Flechas y desplegables

**React**

- Los elementos con submenú son botones.
- Usa el icono `ChevronDown` de Lucide a 14 px.
- El panel se separa 12 px del elemento padre.
- Los enlaces internos usan 14 px, 24 px horizontales y 12 px verticales.
- La aparición se controla por hover y foco.

**Astro**

- Los elementos padre son enlaces.
- Usa el carácter tipográfico `⌄`.
- Los enlaces internos usan aproximadamente 13 px, 18 px horizontales y 9 px verticales.
- La caja, sombra y densidad no coinciden con React.

**Corrección propuesta**

1. Usar botones para los padres con submenú, como React.
2. Sustituir `⌄` por un SVG equivalente al ChevronDown de 14 px.
3. Replicar padding, fuente, borde y sombra del panel React.
4. Conservar el puente invisible que evita que el menú se cierre al mover lentamente el cursor.

### 5.7. Título y composición central en escritorio

La composición Astro actual está muy próxima a la referencia React en 1440 px:

- Antetítulo de 20/28 px.
- Título de 96/96 px.
- Ancho central de 672 px.
- Margen de 16 px tras el antetítulo.
- Margen de 32 px tras el título.
- Citas de 20/28 px.
- Separación de 28 px entre ambas citas.

**Diferencia pendiente**

React fuerza explícitamente el salto entre las dos líneas del título. Astro usa una cadena continua con `text-wrap: balance`. Puede coincidir a 1440 px, pero no garantiza el mismo corte en todos los navegadores y anchuras.

**Corrección propuesta**

1. Separar el título en dos cadenas localizadas.
2. Insertar un `<br>` explícito:
   - ES: `La arquitectura` / `del verso`.
   - FR: `L’architecture` / `du vers`.
3. No depender de `text-wrap: balance` para este elemento.

### 5.8. Composición central en móvil

**React a 390 px**

- Contenido con 24 px a cada lado.
- Ancho útil del bloque: 327,4 px.
- Antetítulo: 18 px con línea de 28 px.
- Título: 48 px con línea de 60 px.
- Citas: 18 px con línea de 29,25 px.

**Astro según sus reglas actuales**

- Usa 20 px laterales en `.hero-content`.
- El bloque puede alcanzar unos 335 px, 8 px más que React.
- El título conserva `line-height: 1`, por lo que queda en 48 px en vez de 60 px.
- El antetítulo hereda una línea proporcional de unos 25,2 px.
- Las citas usan una línea aproximada de 27,9 px.

**Corrección propuesta**

1. Cambiar el ancho móvil a `calc(100% - 48px)`.
2. Fijar título móvil a `font-size: 48px; line-height: 60px`.
3. Fijar antetítulo móvil a `font-size: 18px; line-height: 28px`.
4. Fijar citas móviles a `font-size: 18px; line-height: 29.25px`.
5. Comprobar que la altura y posición central coinciden en ES y FR.

### 5.9. Animación de entrada

**React**

- Antetítulo: opacidad y desplazamiento vertical; duración 1 s; retraso 0,2 s.
- Título: opacidad y escala desde 0,95; duración 1 s; retraso 0,4 s.
- Citas: solo opacidad; duración 1 s; retraso 0,8 s.

**Astro**

- Aplica una única animación `reveal` al contenedor completo.
- Todos los elementos aparecen simultáneamente.
- Usa un desplazamiento vertical común y no reproduce la escala del título.

**Corrección propuesta**

1. Asignar una clase de animación independiente a cada bloque.
2. Replicar duración, retraso y transformación de React.
3. Mantener `prefers-reduced-motion` para accesibilidad.
4. No es necesario incorporar Framer Motion; puede reproducirse con CSS.

### 5.10. Menú móvil

**React**

- El selector de idioma permanece siempre visible junto a la hamburguesa.
- El menú bloquea el scroll del documento al abrirse.
- En teléfonos ocupa toda la pantalla.
- Desde 640 px hasta 1365 px se convierte en panel derecho de 420 px.
- Los submenús se muestran como una rejilla de dos columnas.
- El panel tiene scroll independiente.
- La hamburguesa se convierte en una cruz.

**Astro**

- Usa elementos `<details>` nativos.
- Despliega una franja a ancho completo bajo la cabecera.
- No reproduce el panel derecho de 420 px.
- No bloquea el scroll del documento.
- Los submenús son listas de una columna.
- El estado abierto y el cierre al navegar no siguen exactamente el comportamiento React.

**Corrección propuesta**

1. Mantener HTML estático, pero añadir el JavaScript mínimo para controlar apertura, cierre y bloqueo de scroll.
2. Replicar el overlay a pantalla completa por debajo de 640 px.
3. Replicar el panel derecho de 420 px entre 640 y 1365 px.
4. Usar rejillas de dos columnas para los submenús.
5. Mantener los idiomas fuera del panel, junto a la hamburguesa.
6. Cerrar el panel al navegar y restaurar el scroll del documento.

### 5.11. Texto francés

Existe una diferencia literal en el antetítulo:

- React: `Poésie • Musique • Art visuel`.
- Astro: `Poésie • Musique • Art Visuel`.

**Corrección propuesta**

Cambiar únicamente `Visuel` por `visuel` en los datos de portada franceses de Astro.

### 5.12. Pie de página

El contenido principal del pie ya coincide:

- ES: `Diseño web y programación por Miguel A. González Ferrer © 2026`.
- FR: `Conception et développement web par Miguel A. González Ferrer © 2026`.

También coinciden el centrado, el fondo, la capitalización, el enlace de correo y el padding vertical de 32 px.

**Diferencia menor pendiente**

En móvil React hereda aproximadamente 15 px de interlineado para el texto de 10 px. Astro conserva 16 px.

**Corrección propuesta**

Usar 15 px de línea en móvil y 16 px desde el breakpoint de escritorio.

## 6. Diferencias que no deben revertirse

Astro incorpora mejoras que no alteran la apariencia y deben conservarse:

- Títulos SEO más descriptivos.
- Descripciones meta específicas en español y francés.
- URL canónica.
- Enlaces `hreflang` ES, FR y `x-default`.
- Metadatos Open Graph y Twitter.
- Datos estructurados `WebSite` y `Person`.
- HTML estático indexable.

Por tanto, no se debe cambiar el `<title>` de Astro para hacerlo idéntico al de React. La igualdad buscada es visual, estructural e interactiva, no una regresión del SEO.

## 7. Orden recomendado de corrección

1. Corregir el fondo del hero.
2. Igualar la cabecera inicial y su estado al hacer scroll.
3. Cambiar el breakpoint principal a 1366 px.
4. Igualar tamaños y separaciones del menú ES y FR.
5. Igualar selector de idioma, flechas y desplegables.
6. Forzar las dos líneas del título.
7. Igualar medidas móviles del hero.
8. Replicar la animación escalonada.
9. Replicar el menú móvil y el panel para tablet/portátil estrecho.
10. Corregir `Art visuel`.
11. Ajustar el interlineado móvil del pie.
12. Compilar y validar en el dominio temporal.

## 8. Matriz de validación posterior

Después de aplicar las correcciones se deben comparar las cuatro combinaciones siguientes:

| Ruta | 1440 × 1000 | 1366 × 768 | 390 × 844 | Estado esperado |
| --- | --- | --- | --- | --- |
| `/es/` | Obligatorio | Obligatorio | Obligatorio | Coincidencia visual con React |
| `/fr/` | Obligatorio | Obligatorio | Obligatorio | Coincidencia visual con React |

Comprobaciones adicionales de breakpoint:

- 1180 px: hamburguesa.
- 1280 px: hamburguesa con panel lateral de 420 px.
- 1365 px: hamburguesa.
- 1366 px: menú completo compacto.
- 1439 px: menú completo compacto.
- 1440 px: menú completo normal.

## 9. Criterio de aceptación

La portada se considerará duplicada cuando:

- La diferencia visual de fondo no sea perceptible.
- Cabecera, hero y pie ocupen las mismas posiciones y alturas.
- Los títulos corten exactamente en las mismas líneas.
- Tipografías, pesos, interlineados y espaciados coincidan.
- Los menús completo, compacto y móvil aparezcan en los mismos breakpoints.
- La apertura y cierre de submenús reproduzca el comportamiento React.
- ES y FR mantengan la misma estructura y solo cambien los textos localizados.
- Las mejoras SEO de Astro permanezcan intactas.

