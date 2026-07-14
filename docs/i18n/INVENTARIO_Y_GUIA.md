# Inventario y guia de internacionalizacion ES/FR

Fecha del inventario: 14 de julio de 2026.

## 1. Punto de partida protegido

- Rama estable: `main`.
- Commit estable verificado: `5edc7d834a1f27466aef54b89a532968417a1bfe`.
- Rama de trabajo: `codex/i18n-frances`.
- Etiqueta de recuperacion local y remota: `pre-i18n-fr`.
- `main`, `origin/main` y `codex/i18n-frances` apuntaban al mismo commit al iniciar el inventario.
- TypeScript: validado con `tsc --noEmit`.
- Compilacion de produccion: validada con Vite 6.4.1, 2139 modulos transformados.
- Copia ZIP local detectada y excluida de Git: `Escritorio-movil-final.zip`.

La etiqueta permite volver al estado anterior a la internacionalizacion con:

```bash
git switch --detach pre-i18n-fr
```

No se debe desarrollar sobre ese estado separado. Solo sirve para inspeccion o recuperacion.

## 2. Objetivo de URL

- Espanol: `https://belenjuarez.com/es/`.
- Frances: `https://belenjuarez.com/fr/`.
- La raiz `https://belenjuarez.com/` debe redirigir a `/es/`.
- Las rutas historicas sin idioma deben redirigir a su equivalente bajo `/es/`.
- El idioma forma parte de la URL y es la fuente de verdad. `localStorage` solo recordara una preferencia auxiliar.
- Los identificadores y slugs dinamicos se conservaran cuando no exista una razon editorial para traducirlos.

## 3. Arquitectura actual

- Aplicacion React 19 y TypeScript construida con Vite.
- Enrutamiento mediante `BrowserRouter` y rutas declaradas en `App.tsx`.
- 39 declaraciones `<Route>` contando rutas contenedoras, indices, redirecciones y detalles.
- Componentes generales en `components/`.
- Paginas estaticas en `pages/`.
- Integracion dinamica de Notion en `src/pages/Blog/` y `src/services/notion.ts`.
- Datos editoriales principales en `constants.ts`.
- Prologos en `pages/ObraLiteraria/prologosData.ts`.
- Traducciones bilingues existentes en `pages/ObraLiteraria/traduccionData.ts`.
- Proxy de Notion y reglas Apache publicados desde `public/`.

No se deben duplicar componentes para crear una segunda web. Un mismo componente debe recibir el idioma y el contenido localizado.

## 4. Mapa propuesto de rutas

Los nombres franceses son propuestas tecnicas iniciales y deben aprobarse antes de implementarlos.

| Identificador | Espanol | Frances |
|---|---|---|
| `home` | `/es/` | `/fr/` |
| `about` | `/es/sobre-belen` | `/fr/a-propos` |
| `literaryCv` | `/es/sobre-belen/curriculum-literario-artistico` | `/fr/a-propos/curriculum-litteraire-artistique` |
| `scientificCv` | `/es/sobre-belen/curriculum-cientifico` | `/fr/a-propos/curriculum-scientifique` |
| `literaryWork` | `/es/obra-literaria` | `/fr/oeuvre-litteraire` |
| `books` | `/es/obra-literaria/libros` | `/fr/oeuvre-litteraire/livres` |
| `bookReviews` | `/es/obra-literaria/resenas-libros` | `/fr/oeuvre-litteraire/critiques-de-livres` |
| `bookReviewDetail` | `/es/obra-literaria/resenas-libros/:id` | `/fr/oeuvre-litteraire/critiques-de-livres/:id` |
| `anthologies` | `/es/obra-literaria/antologias` | `/fr/oeuvre-litteraire/anthologies` |
| `anthologyDetail` | `/es/obra-literaria/antologias/:id` | `/fr/oeuvre-litteraire/anthologies/:id` |
| `plaquettes` | `/es/obra-literaria/plaquettes` | `/fr/oeuvre-litteraire/plaquettes` |
| `stories` | `/es/obra-literaria/relatos` | `/fr/oeuvre-litteraire/recits` |
| `storyDetail` | `/es/obra-literaria/relatos/:id` | `/fr/oeuvre-litteraire/recits/:id` |
| `literaryCriticism` | `/es/obra-literaria/critica` | `/fr/oeuvre-litteraire/critique` |
| `literaryCriticismDetail` | `/es/obra-literaria/critica/:slug` | `/fr/oeuvre-litteraire/critique/:slug` |
| `andalusiCriticism` | `/es/obra-literaria/critica-andalusi` | `/fr/oeuvre-litteraire/critique-heritage-andalou` |
| `prologues` | `/es/obra-literaria/prologos` | `/fr/oeuvre-litteraire/prefaces` |
| `prologueDetail` | `/es/obra-literaria/prologos/:slug` | `/fr/oeuvre-litteraire/prefaces/:slug` |
| `translations` | `/es/obra-literaria/traduccion` | `/fr/oeuvre-litteraire/traduction` |
| `translationDetail` | `/es/obra-literaria/traduccion/:slug` | `/fr/oeuvre-litteraire/traduction/:slug` |
| `interviews` | `/es/obra-literaria/entrevistas` | `/fr/oeuvre-litteraire/entretiens` |
| `interviewDetail` | `/es/obra-literaria/entrevistas/:slug` | `/fr/oeuvre-litteraire/entretiens/:slug` |
| `visualPoetry` | `/es/poesia-visual` | `/fr/poesie-visuelle` |
| `visualPoetryDetail` | `/es/poesia-visual/:id` | `/fr/poesie-visuelle/:id` |
| `art` | `/es/arte` | `/fr/art` |
| `paintings` | `/es/arte/cuadros` | `/fr/art/peintures` |
| `bookIllustration` | `/es/arte/ilustracion` | `/fr/art/illustration` |
| `artCriticism` | `/es/arte/critica` | `/fr/art/critique` |
| `music` | `/es/musica` | `/fr/musique` |
| `musicPoetry` | `/es/musica/poesia` | `/fr/musique/poesie` |
| `horizonteAlbum` | `/es/musica/horizonte` | `/fr/musique/horizon` |
| `videos` | `/es/musica/videos` | `/fr/musique/videos` |
| `openDiary` | `/es/blog` | `/fr/journal-ouvert` |
| `openDiaryPost` | `/es/blog/:id` | `/fr/journal-ouvert/:id` |
| `contact` | `/es/contacto` | `/fr/contact` |

La ruta historica `/cva-cientifico` debe redirigir a `/es/sobre-belen/curriculum-cientifico`.

## 5. Colecciones editoriales

| Fuente | Coleccion | Elementos | Tratamiento principal |
|---|---:|---:|---|
| `constants.ts` | `BOOKS` | 3 | Traducir descripcion; conservar titulos publicados y versos. |
| `constants.ts` | `COLLABORATIONS` | 14 | Traducir metadatos y prosa; conservar poemas originales. |
| `constants.ts` | `LITERARY_CRITICISMS` | 4 | Traducir critica; conservar versos citados en su idioma original. |
| `constants.ts` | `ALBUM_TRACKS` | 21 | Conservar titulos; traducir etiquetas y procedencia explicativa. |
| `constants.ts` | `ART_PIECES` | 48 | Conservar titulos de obra; traducir tecnica y descripcion. |
| `constants.ts` | `ILLUSTRATED_BOOKS` | 2 | Conservar titulos publicados; traducir descripcion. |
| `constants.ts` | `ART_CRITIQUES` | 1 | Traducir articulo y pies descriptivos. |
| `constants.ts` | `BOOK_REVIEWS` | 8 | Traducir resenas y pies; conservar citas poeticas originales. |
| `constants.ts` | `PLAQUETTES` | 1 | Traducir metadatos; conservar poemas y estructura del verso. |
| `constants.ts` | `SHORT_STORIES` | 3 | Traducir relato completo, sin alterar su estructura. |
| `constants.ts` | `SOCIALS` | 2 | Conservar URLs; traducir etiquetas accesibles si aparecen. |
| `constants.ts` | `INTERVIEWS` | 3 | Traducir entrevista; conservar poemas citados. |
| `constants.ts` | `VISUAL_POETRY` | 5 | Conservar titulo artistico; traducir interfaz y descripcion. |
| `prologosData.ts` | `PROLOGUE_WORKS` | 4 | Traducir prosa; identificar y conservar poemas o citas literarias. |
| `traduccionData.ts` | `TRANSLATION_WORKS` | 2 | Contenido bilingue existente: no retraducir ni normalizar versos. |

`constants.ts` tiene aproximadamente 2673 lineas y es la mayor concentracion de contenido. No se debe convertir entero de una vez. Se extraera por colecciones para reducir el riesgo.

## 6. Clasificacion por seccion

| Seccion | Interfaz | Prosa traducible | Poesia original | Bilingue existente | Externo |
|---|---|---|---|---|---|
| Inicio | Si | Presentaciones y llamadas | Citas poeticas, si las hubiera | No | Imagen remota del hero |
| Sobre Belen | Si | Biografia completa | Fragmentos claramente poeticos | No | Enlaces curriculares |
| Curriculum literario | Si | Todos los meritos y actividades | Titulos publicados sin traducir | No | Plataformas y entidades |
| Curriculum cientifico | Si | Perfil, proyectos y meritos | No | Titulos de articulos se conservan como publicados | DOI y publicaciones |
| Libros | Si | Descripciones editoriales | Versos de contraportada | No | Editoriales |
| Resenas | Si | Resenas completas | Versos citados | No | Medios externos |
| Antologias | Si | Fichas y notas | `fullText` poetico | No | Librujula y Google Drive |
| Plaquettes | Si | Creditos y contexto | Secciones poeticas | No | No relevante |
| Relatos | Si | Todo el relato | Solo fragmentos identificados como poema | No | No relevante |
| Critica literaria | Si | Articulos criticos | Versos citados | No | Fuentes editoriales |
| Legado andalusi | Si | Introduccion y etiquetas | No | No | Datos bibliograficos |
| Prologos | Si | Prologos y capitulos | Poemas/citas incrustados | Algunos textos pueden incluir otras lenguas | Gustavo Vega |
| Traduccion | Si | Introducciones y analisis | Todos los versos | Espanol/frances ya publicado | No relevante |
| Entrevistas | Si | Preguntas y respuestas | Poemas citados | No | Publicaciones citadas |
| Poesia visual | Si | Contexto y tecnica | Texto integrado en la obra | No | No relevante |
| Cuadros | Si | Tecnica y descripcion | No | No | No relevante |
| Ilustracion | Si | Resena y descripciones | Texto poetico reproducido, si aparece | No | No relevante |
| Critica artistica | Si | Articulo completo | Citas que sean versos | No | Revista original |
| Musica y poesia | Si | Presentacion | Letras/versos | No | YouTube |
| Horizonte de Sucesos | Si | Nota de autora y resena | Letras y versos | No | Plataformas musicales |
| Videos | Si | Texto explicativo de cada video | Letras citadas | No | YouTube |
| Diario Abierto | Si | Depende de politica Notion | Poemas de Notion | Puede contener idiomas mezclados | Notion y YouTube |
| Contacto | Si | Mensajes e instrucciones | No | No | FormSubmit y redes |

## 7. Textos escritos directamente en componentes

### Infraestructura e interfaz global

- `App.tsx`: cargador `Abriendo pagina...`, redirecciones y rutas.
- `components/Navbar.tsx`: todos los nombres del menu, submenus y etiquetas ARIA.
- `components/Footer.tsx`: credito de diseno y programacion.
- `components/Contact.tsx`: formulario, validaciones, estados, mensajes y etiquetas.
- `components/DeferredYouTube.tsx`: textos accesibles y accion de reproduccion.
- `components/BookThumbnailRow.tsx`: etiquetas de acceso a editoriales.

### Inicio y presentacion

- `components/Hero.tsx`: titular, subtitulo, textos alternativos y llamadas.
- `components/Bio.tsx`: biografia extensa y enlaces a curriculos.
- `components/Books.tsx`: encabezados y llamadas de libros.
- `components/Art.tsx`: presentacion de arte.
- `components/Music.tsx`: presentacion musical.

### Sobre Belen

- `pages/CurriculumLiterarioArtistico.tsx`: contenido editorial en arrays internos y JSX.
- `pages/CvaCientifico.tsx`: indicadores, trayectoria, produccion, congresos, proyectos y meritos.

### Obra literaria

- `pages/ObraLiteraria/index.tsx`: submenu interno.
- `pages/ObraLiteraria/Libros.tsx`: componente contenedor; contenido real en `components/Books.tsx` y `constants.ts`.
- `Antologias.tsx`, `Relatos.tsx`, `Critica.tsx`, `Prologos.tsx`, `Traduccion.tsx`, `Entrevistas.tsx`, `ResenasLibros.tsx`: titulos, introducciones, botones y estados.
- `CollaborationDetail.tsx`, `RelatoDetail.tsx`, `CriticaDetail.tsx`, `PrologoDetail.tsx`, `TraduccionDetail.tsx`, `EntrevistaDetail.tsx`, `ResenaDetail.tsx`: navegacion, metadatos, textos alternativos y etiquetas.
- `CriticaAndalusi.tsx`: introduccion, agrupaciones por ano y toda la interfaz; los registros bibliograficos estan dentro del componente.
- `Plaquettes.tsx`: presentacion, metadatos, pies y etiquetas.

### Arte, musica y blog

- `pages/arte/index.tsx`, `pages/arte/Cuadros.tsx`, `pages/arte/Ilustracion.tsx`, `pages/arte/Critica.tsx`.
- `pages/musica/index.tsx`, `pages/musica/Poesia.tsx`, `pages/musica/Horizonte.tsx`, `pages/musica/Videos.tsx`.
- `pages/PoesiaVisual.tsx` y `pages/PoesiaVisualDetail.tsx`.
- `src/pages/Blog/BlogList.tsx`: titulo, filtros, carga, ausencia de resultados y fechas.
- `src/pages/Blog/BlogPost.tsx`: navegacion, carga, errores y renderizado de bloques Notion.

`pages/ObraLiteraria/Articulos.tsx` no aparece conectado a ninguna ruta actual. Debe mantenerse fuera del primer lote hasta confirmar si es codigo obsoleto.

## 8. Campos que deben localizarse

La traduccion no debe reemplazar objetos completos cuando solo cambien campos textuales.

### Traducir

- `description`, `extendedDescription`, `externalNote`.
- `excerpt`, `synopsis`, `intro`, `content` cuando sean prosa.
- `condensedQuote`, `fullContent`, `text` cuando sean critica o relato.
- `caption`, `detailImageCaption`, `sourceLabel`.
- `medium`, `mediumDetail`, etiquetas de categoria y filtros.
- Titulos de seccion creados para la web.
- Etiquetas de botones, enlaces, errores, carga y accesibilidad.

### Conservar como obra publicada

- Titulos de libros, poemarios, canciones, cuadros, poemas, revistas y articulos cientificos.
- Nombres de autores, editoriales, revistas, instituciones y proyectos.
- DOI, ISBN, identificadores, fechas, duraciones y URLs.
- `id`, `slug`, `youtubeId`, `spotifyId`, rutas de imagen y nombres de archivo.

### Conservar sin traducir

- `backCoverVerses`.
- `COLLABORATIONS.fullText` cuando sea poema.
- Secciones poeticas de `PLAQUETTES`.
- Versos y estrofas incluidos en entrevistas, resenas, prologos o relatos.
- Campos `original` y `translation` de `traduccionData.ts`; ya constituyen una edicion bilingue.

La separacion entre prosa y poesia debe registrarse por bloque, no inferirse automaticamente por saltos de linea.

## 9. Imagenes, textos alternativos y pies

Las rutas de imagen y los archivos fisicos son compartidos por ambos idiomas. No deben duplicarse.

### Fuentes de pies traducibles

- `ART_CRITIQUES.images[].caption`.
- `BOOK_REVIEWS.detailImageCaption`.
- Descripciones de `ILLUSTRATED_BOOKS` y `ART_PIECES` cuando actuen como pie.
- Creditos y pies escritos directamente en `Plaquettes.tsx`, `Critica.tsx` y paginas de detalle.
- `caption` recibido desde bloques de Notion, sujeto a la politica de contenido dinamico.

### Textos alternativos que deben internacionalizarse

- Plantillas como `Portada de ...`, `Ilustracion ...`, `Ampliacion ...` y `Imagen relacionada con ...`.
- Alternativas fijas de hero, revistas, plaquettes y contenidos de detalle.
- Mensajes alternativos genericos de Notion cuando no exista caption.

### Textos alternativos que pueden conservar el titulo original

- `alt={piece.title}`, `alt={book.title}`, `alt={interview.title}` y equivalentes.
- El texto contextual que acompane al titulo debe traducirse, pero no el titulo editorial o artistico.

La auditoria detecta imagenes en componentes generales, todas las areas de obra literaria, arte, poesia visual y blog. La traduccion debe cubrir tanto la tarjeta como el lightbox.

## 10. Contenido bilingue existente

`pages/ObraLiteraria/traduccionData.ts` contiene dos obras y debe considerarse fuente editorial protegida.

- No unir versos.
- No recalcular saltos de linea.
- No corregir automaticamente puntuacion o espacios.
- No traducir de nuevo el original ni la traduccion publicada.
- Traducir solamente interfaz, introducciones, etiquetas de idioma y analisis en prosa cuando proceda.
- Mantener la visualizacion enfrentada de ambos idiomas.

## 11. Notion y Diario Abierto

### Estado actual

- `src/services/notion.ts` consulta Notion directamente en desarrollo y usa `/notion-proxy.php` en produccion.
- Propiedades reconocidas: titulo, fecha, portada y etiquetas.
- Los nombres admitidos incluyen variantes espanolas e inglesas: `Titulo/Title`, `Fecha/Date`, `Etiqueta/Tags`.
- Los bloques se renderizan dinamicamente en `BlogPost.tsx`.
- Se respetan parrafos, versos, listas, columnas, imagenes, captions, embeds y videos.
- El proxy PHP y la cache de imagenes deben seguir en una unica ubicacion comun, fuera de `/es/` y `/fr/`.

### Decision editorial pendiente

No se traduciran entradas de Notion automaticamente durante la primera fase. Debe elegirse una de estas politicas:

1. Mostrar el contenido original en `/fr/journal-ouvert` con aviso en frances.
2. Anadir propiedades francesas en la misma base de Notion.
3. Mantener dos paginas Notion vinculadas por un identificador comun.
4. Ocultar en frances las entradas sin traduccion revisada.

Recomendacion: propiedades o paginas enlazadas en la misma base, con un campo `Idioma` y un identificador editorial comun. El proxy puede seguir siendo unico.

### Textos Notion que no deben alterarse automaticamente

- Poemas y saltos de verso.
- Rich text con cursivas, negritas, subrayados y enlaces.
- Captions y creditos.
- Embeds de YouTube.
- Etiquetas editoriales hasta definir sus equivalencias francesas.

## 12. Enlaces externos que deben conservarse

Las URLs son independientes del idioma salvo que una entidad facilite una pagina francesa oficial.

| Dominio o servicio | Uso |
|---|---|
| `huergayfierro.com` | Editorial Huerga & Fierro |
| `devenir.es` | Editorial Devenir |
| `alhulia.es` | Editorial Alhulia |
| `librujula.publico.es` | Poemas y resenas |
| `ideal.es` y `en-clase.ideal.es` | Resenas periodisticas |
| `enbenalmadena.es` | Resena periodistica |
| `cercledesartisteseuropeens.com` | Perfil y resena en frances |
| `drive.google.com` | Antologias virtuales |
| `gustavovega.com` | Referencias de prologos |
| `youtube.com` y `youtube-nocookie.com` | Videos y reproductores |
| `music.youtube.com` | Album musical |
| `open.spotify.com` | Album musical |
| `music.apple.com` | Album musical |
| `music.amazon.es` | Album musical |
| `unitedmasters.com` | Perfil musical |
| `instagram.com` y `facebook.com` | Redes y publicaciones |
| `formsubmit.co` | Envio del formulario de contacto |
| `i.ytimg.com` | Miniaturas de YouTube |
| `images.unsplash.com` | Imagen remota del hero |
| `picsum.photos` | Imagen remota de componente musical auxiliar |

Tambien deben conservarse el correo del pie, el correo del formulario y todos los DOI, aunque sus etiquetas visibles se traduzcan.

## 13. Riesgos detectados

- Rutas escritas directamente en `App.tsx`, `Navbar.tsx` y submenus internos.
- Navegaciones y redirecciones absolutas dentro de paginas de detalle.
- Comparaciones `location.pathname.startsWith(...)` dependientes de slugs espanoles.
- Enlaces que usan estado para colocar correctamente el contenido en movil.
- Gran volumen de texto mezclado en `constants.ts`.
- Mezcla de prosa y poesia dentro de algunos campos largos.
- Contenido Notion sin modelo bilingue definido.
- Metadatos HTML actualmente unicos para todos los idiomas.
- `.htaccess` debe admitir recarga directa de rutas `/es/...` y `/fr/...` sin interceptar PHP ni archivos reales.
- Los titulos cientificos y bibliograficos no deben traducirse como si fueran interfaz.
- Las longitudes francesas pueden ensanchar menus, botones y tarjetas.

## 14. Orden de extraccion recomendado

1. Crear tipos `Locale`, `RouteId` y helpers de ruta sin modificar contenido visual.
2. Introducir catalogos para interfaz global: aplicacion, menu, pie y contacto.
3. Implementar `/es/` y `/fr/` con redirecciones historicas.
4. Anadir selector `ES | FR` y equivalencia de pagina.
5. Extraer textos directos de paginas pequenas.
6. Extraer `BOOKS`, `ART_PIECES`, musica y poesia visual.
7. Extraer curriculos y biografia.
8. Extraer resenas, entrevistas, relatos y critica.
9. Tratar prologos por bloques marcados como prosa o poesia.
10. Integrar el contenido bilingue existente sin tocar versos.
11. Definir la politica francesa de Notion.
12. Incorporar SEO, `hreflang`, canonical, sitemap y metadatos.
13. Probar rutas, recargas, escritorio, movil y restauracion.

## 15. Criterios de control por cada lote

- La URL espanola y la francesa representan la misma pagina logica.
- Cambiar de idioma mantiene al usuario en la pagina equivalente.
- Ningun poema cambia de texto, orden, cursiva o salto de linea.
- Los titulos publicados permanecen identificables en su idioma original.
- Los enlaces externos siguen apuntando al mismo recurso.
- Las imagenes no se duplican y sus alternativas se entienden en el idioma activo.
- La version espanola conserva exactamente su contenido y apariencia.
- TypeScript y la compilacion de produccion terminan sin errores.
- Una recarga directa en Hostinger no produce 404.
- Cada lote queda en un commit pequeno y reversible.

## 16. Proximo lote autorizado

El siguiente paso debe limitarse a la infraestructura minima:

- Definir idiomas soportados.
- Definir el mapa central de rutas ES/FR.
- Crear catalogos pequenos para menu, pie, cargador y acciones comunes.
- Implementar deteccion del prefijo sin traducir aun paginas extensas.
- Mantener redirecciones desde las rutas actuales hacia `/es/`.

No se debe comenzar por traducir `constants.ts`; primero se validara la arquitectura con la interfaz comun.
