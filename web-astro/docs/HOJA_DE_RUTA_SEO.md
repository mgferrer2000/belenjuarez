# Hoja de ruta SEO segura

## Objetivo general

Reconstruir en paralelo la web de Belen Juarez para que cada pagina entregue
HTML completo, metadatos unicos y relaciones bilingues comprensibles para los
buscadores, sin comprometer la web actual.

## Fase 0. Proteccion

- Mantener `main` como referencia estable.
- Conservar el `dist` funcional y la etiqueta de seguridad anterior al SEO.
- Desarrollar la nueva aplicacion dentro de `web-astro/`.
- No compartir configuraciones de compilacion con la web actual.
- Publicar primero en una URL o subdominio de pruebas no indexable.

### Criterio de salida

La nueva estructura puede instalarse, compilarse y borrarse sin cambiar ningun
archivo ni comando de la web actual.

## Fase 1. Inventario

- Registrar todas las rutas espanolas y francesas.
- Relacionar cada pagina con su equivalente idiomatico.
- Clasificar paginas fijas, colecciones y contenido procedente de Notion.
- Inventariar titulos, descripciones, imagen social y datos estructurados.
- Registrar rutas antiguas que requeriran redireccion 301.

### Criterio de salida

Cada contenido de la web actual tiene un destino conocido en la version SEO.

## Fase 2. Base tecnica

- Crear una aplicacion estatica independiente.
- Configurar TypeScript y estilos propios.
- Crear layout general, cabecera, navegacion, pie y selector ES/FR.
- Establecer rutas con prefijo obligatorio `/es/` y `/fr/`.
- Crear pagina 404 real.

### Criterio de salida

La portada piloto se genera como HTML completo y funciona sin JavaScript.

## Fase 3. Sistema SEO central

- Titulo y descripcion unicos por pagina.
- Canonical autorreferencial.
- `hreflang` reciproco ES/FR y `x-default`.
- Open Graph y Twitter Cards.
- Idioma correcto en `<html lang>`.
- Imagen social predeterminada y excepciones por contenido.
- Metadatos reutilizables mediante un unico componente.

### Criterio de salida

El codigo fuente HTML de cada pagina contiene todos sus metadatos antes de
ejecutar JavaScript.

## Fase 4. Descubrimiento e indexacion

- Generar `robots.txt` real.
- Generar sitemap de paginas estaticas.
- Incluir variantes de idioma.
- Preparar sitemap independiente para Notion.
- Excluir rutas de prueba y filtros que no deban indexarse.

### Criterio de salida

Los sitemaps son XML valido, solo contienen canonicas y se relacionan con
`robots.txt`.

## Fase 5. Migracion por bloques

Orden recomendado:

1. Inicio y Sobre Belen.
2. Libros y reseñas sobre libros.
3. Antologias, plaquettes y relatos.
4. Critica literaria, prologos, traducciones y entrevistas.
5. Poesia visual.
6. Arte: cuadros, ilustraciones y critica artistica.
7. Musica, album y videos.
8. Curriculum literario y cientifico.
9. Contacto.

Cada bloque debe conservar textos, versos, cursivas, saltos, imagenes,
enlaces, modales y comportamiento responsive.

## Fase 6. Datos estructurados

- `Person` y `WebSite` para la identidad principal.
- `Book` para poemarios.
- `Article` o `BlogPosting` para Diario Abierto.
- `Review` para reseñas literarias.
- `VideoObject` para piezas audiovisuales.
- `BreadcrumbList` para paginas interiores.
- `CollectionPage` para indices y galerias.

### Criterio de salida

Los datos pasan validacion y describen contenido visible real.

## Fase 7. Notion

- Mantener separadas las bases Diario Abierto y Reseñas literarias.
- Conservar `Publicado`, `Idioma` y `Original ES`.
- Transformar bloques de Notion en HTML semantico.
- Respetar versos, parrafos, cursivas, listas, imagenes y videos.
- Crear cache para no depender de Notion en cada visita.
- Actualizar automaticamente paginas y sitemap sin intervencion tecnica de la
  autora.

### Criterio de salida

Belen publica una pareja ES/FR en Notion y ambas paginas aparecen en la web y
en el sitemap sin recompilacion manual.

## Fase 8. Rendimiento

- Compilar CSS localmente.
- Evitar Tailwind por CDN.
- Mantener formatos WebP y variantes moviles.
- Carga diferida de imagenes y videos no prioritarios.
- Precargar solo la imagen principal y las fuentes necesarias.
- Comprobar LCP, CLS e INP en movil y escritorio.

## Fase 9. Redirecciones y publicacion

- Crear mapa de redirecciones 301 desde las rutas antiguas.
- Redirigir `/` a `/es/` en el servidor.
- Mantener una unica variante HTTPS y de dominio.
- Probar recarga directa de todas las rutas.
- Publicar primero en entorno de pruebas con `noindex`.
- Comparar visualmente con la web actual.
- Cambiar produccion solo despues de la aceptacion final.

## Regresion obligatoria

- Escritorio, tableta y movil.
- Menus, submenus y selector de idioma.
- Galerias, ampliaciones y pies de imagen.
- Saltos de verso y formatos tipograficos.
- Reproductores de musica y YouTube.
- Formulario de contacto.
- Diario Abierto y Reseñas literarias.
- Navegacion ES/FR entre articulos vinculados.
- Enlaces externos y descargas permitidas.
- 404, redirecciones, canonical, hreflang, robots y sitemap.

## Regla de sustitucion

La nueva version no reemplazara a la actual hasta que todos los criterios de
salida esten verificados con evidencia tecnica y visual.
