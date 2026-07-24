# Plan de optimizacion SEO post-migracion

## Objetivo principal

Conseguir que Google identifique `belenjuarez.com` como la fuente oficial,
completa y fiable sobre Belen Juarez Jimenez, su obra poetica y visual, su
relacion con Granada, su trayectoria cientifica y el proyecto
`Horizonte de Sucesos`.

La estrategia no intentara posicionar artificialmente la web por la palabra
aislada `poesia`. Se trabajaran entidades, temas e intenciones de busqueda
concretas, especialmente consultas de cola larga.

## Principios de trabajo

- No cambiar simultaneamente contenido, estructura y rendimiento.
- Completar y verificar una fase antes de comenzar la siguiente.
- Conservar las URL publicas existentes siempre que sea posible.
- Aplicar redireccion 301 si una URL tuviera que cambiar.
- No repetir palabras clave de forma artificial.
- Mantener la identidad visual y la lectura poetica de la web.
- No traducir titulos propios de obras cuando deban conservar su nombre
  original.
- Mantener equivalencia reciproca entre las versiones `/es/` y `/fr/`.
- Generar una copia de seguridad y un `dist` validado antes de cada despliegue.

## Indicadores que se mediran

- Paginas validas e indexadas.
- Paginas excluidas y motivo de exclusion.
- Impresiones organicas.
- Clics organicos.
- CTR o porcentaje de clics.
- Posicion media por consulta.
- Consultas de marca: `Belen Juarez`, libros y proyectos.
- Consultas tematicas sin marca.
- Enlaces externos recibidos.
- LCP, INP y CLS en movil y escritorio.
- Errores 404, canonical y `hreflang`.

---

## Fase 0. Proteccion y medicion inicial

### Objetivo

Poder comparar el antes y el despues y revertir cualquier cambio.

### Tareas

- [x] Confirmar que `main` contiene la version actualmente publicada.
- [x] Guardar una copia del `dist` de produccion.
- [x] Crear una etiqueta Git anterior a la optimizacion SEO.
- [x] Crear una rama especifica para los cambios SEO.
- [x] Ejecutar `npm run build` y `npm run audit`.
- [x] Registrar el numero actual de paginas, titulos, descripciones, `H1`,
      canonical, `hreflang`, datos estructurados e imagenes sin `alt`.
- [ ] Registrar las metricas iniciales disponibles en Search Console. Requiere
      acceso del propietario a la propiedad de `belenjuarez.com`.

Referencia tecnica: `docs/BASELINE_SEO_2026-07-24.md`.

Puntos de restauracion:

- etiqueta Git: `pre-seo-optimizacion-2026-07-24`;
- rama de trabajo: `codex/seo-optimizacion`;
- copia local del despliegue:
  `backups/pre-seo-2026-07-24-dist-astro.zip`.

### Criterio de salida

Existe una referencia tecnica y estadistica previa con la que comparar todos
los cambios posteriores.

---

## Fase 1. Google Search Console

### Objetivo

Confirmar que Google puede descubrir, rastrear e indexar correctamente la web.

### Tareas del propietario

- [ ] Crear o abrir una propiedad de dominio para `belenjuarez.com`.
- [ ] Verificarla mediante el registro DNS que indique Google.
- [ ] Enviar `https://belenjuarez.com/sitemap-index.xml`.
- [ ] Comprobar que Google puede leer `robots.txt`.
- [ ] Inspeccionar manualmente estas URL:
  - `/es/`
  - `/fr/`
  - `/es/sobre-belen/`
  - `/es/obra-literaria/`
  - `/es/poesia-visual/`
  - `/es/arte/`
  - `/es/musica/`
  - una entrada real de Diario Abierto.
- [ ] Exportar el informe inicial de rendimiento de los ultimos 3 meses.
- [ ] Registrar paginas no indexadas y la razon indicada por Google.

### No hacer

- No solicitar indexacion masiva de todas las paginas.
- No corregir exclusiones que sean intencionadas, como `404`, plantillas o
  rutas marcadas `noindex`.

### Criterio de salida

El sitemap esta procesado, las paginas principales son rastreables y existe
una lista clara de incidencias reales de indexacion.

---

## Fase 2. Titulos, H1 y descripciones

### Objetivo

Que cada pagina explique con claridad que contenido ofrece y para que busqueda
es relevante.

### Punto de partida detectado

- Las portadas de Arte y Musica no tienen un `H1` explicito en ES y FR.
- Existen titulos repetidos que deben clasificarse entre repeticiones
  justificadas y duplicados mejorables.
- Las plantillas genericas de Notion estan correctamente en `noindex`.

### Tareas

- [ ] Crear una tabla con URL, idioma, intencion, `title`, `H1` y descripcion.
- [ ] Corregir las cuatro portadas de Arte y Musica sin alterar su aspecto.
- [ ] Revisar las paginas principales:
  - Inicio.
  - Sobre Belen.
  - Obra literaria.
  - Libros.
  - Resenas sobre libros.
  - Antologias y revistas.
  - Relatos.
  - Poesia visual.
  - Arte.
  - Musica.
  - Diario Abierto.
  - Resenas literarias.
- [ ] Mantener los titulos propios y añadir contexto alrededor de ellos.
- [ ] Escribir descripciones unicas, naturales y fieles al contenido.
- [ ] Revisar equivalencia semantica ES/FR, no traduccion palabra por palabra.
- [ ] Evitar titulos demasiado extensos o listas de palabras clave.

### Patron recomendado

- Pagina de obra: `Titulo de la obra | Tipo de obra de Belen Juarez`.
- Coleccion: `Poemas en antologias y revistas | Belen Juarez`.
- Tema: `Poesia visual de Belen Juarez | Obra y exposiciones`.
- Biografia: `Belen Juarez | Poeta, artista y cientifica en Granada`.

### Criterio de salida

Cada pagina indexable tiene un solo `H1`, un titulo diferenciable y una
descripcion que resume el contenido visible.

---

## Fase 3. Identidad y datos estructurados

### Objetivo

Consolidar a Belen Juarez como autora y relacionar correctamente todas sus
obras y perfiles.

### Tareas

- [ ] Crear una entidad `Person` central y reutilizable.
- [ ] Añadir `ProfilePage` en Sobre Belen.
- [ ] Añadir `WebSite` en las portadas ES y FR.
- [ ] Incorporar solo perfiles oficiales o verificables en `sameAs`:
  - ORCID.
  - ResearchID.
  - Universidad de Granada, si existe un perfil publico.
  - Editoriales o perfiles oficiales de autora.
  - Plataformas musicales oficiales.
  - Canal oficial de YouTube.
- [ ] Relacionar libros, articulos, musica y arte mediante `author`,
      `creator`, `illustrator` o `about`.
- [ ] Revisar los tipos existentes:
  - `Book`.
  - `Article` y `BlogPosting`.
  - `VisualArtwork`.
  - `MusicAlbum` y `MusicRecording`.
  - `VideoObject`.
  - `CollectionPage`.
- [ ] Incorporar `BreadcrumbList` en paginas interiores.
- [ ] Validar muestras con Schema Markup Validator y Rich Results Test.

### Criterio de salida

Los datos estructurados describen contenido visible, no contienen errores y
presentan una identidad coherente de la autora en todo el sitio.

---

## Fase 4. Paginas centrales y autoridad tematica

### Objetivo

Transformar las paginas principales en centros tematicos que expliquen y
distribuyan el contenido.

### Centros prioritarios

1. Sobre Belen.
2. Obra literaria.
3. Poesia visual.
4. Arte.
5. Musica.
6. Horizonte de Sucesos.
7. Diario Abierto.

### Tareas

- [ ] Asignar una intencion principal a cada centro.
- [ ] Redactar entre 100 y 250 palabras cuando la pagina carezca de contexto.
- [ ] Integrar el texto sin convertir la portada en un bloque pesado.
- [ ] Explicar la relacion de Belen con Granada donde sea pertinente.
- [ ] Presentar de forma clara poesia, arte, ciencia y musica sin mezclarlas
      indiscriminadamente.
- [ ] Revisar subtitulos y encabezados secundarios.
- [ ] Añadir enlaces hacia las obras mas representativas.
- [ ] Incorporar contenidos relacionados al final de cada centro.

### Nucleos tematicos

- Belen Juarez y Granada.
- Poemarios y obra literaria.
- Horizonte de Sucesos.
- Poesia visual y arte.
- Relatos y prosa poetica.
- Traduccion poetica castellano-frances.
- Poesia y ciencia.
- Actividad cultural, recitales y publicaciones.

### Criterio de salida

Cada centro puede entenderse por si mismo y conduce a varias paginas de
detalle relacionadas.

---

## Fase 5. Enlazado interno y navegacion semantica

### Objetivo

Ayudar a lectores y buscadores a descubrir las relaciones reales entre los
contenidos.

### Tareas

- [ ] Añadir migas de pan visibles o discretas en paginas interiores.
- [ ] Crear bloques de `Contenido relacionado` donde aporten valor.
- [ ] Relacionar cada libro con sus reseñas, presentaciones, musica y videos.
- [ ] Relacionar antologias con los poemas concretos incluidos.
- [ ] Relacionar ilustraciones con el libro correspondiente.
- [ ] Relacionar videos con el album y el poema que los origina.
- [ ] Relacionar entradas de Diario Abierto con secciones permanentes.
- [ ] Utilizar textos de enlace descriptivos, evitando abusar de `leer mas`.
- [ ] Detectar paginas huerfanas sin enlaces internos entrantes.
- [ ] Comprobar que los enlaces ES conducen a ES y los FR a FR.

### Criterio de salida

No hay paginas indexables huerfanas y cada obra importante recibe enlaces
contextuales desde varias paginas relacionadas.

---

## Fase 6. Imagenes de Notion y metadatos sociales

### Objetivo

Evitar URLs temporales y conseguir que buscadores y redes sociales puedan
recuperar siempre la imagen representativa de cada articulo.

### Tareas

- [ ] Usar el proxy estable para las imagenes visibles de Notion.
- [ ] Usar URLs estables tambien en `og:image`, Twitter Cards y JSON-LD.
- [ ] Evitar que el HTML cacheado conserve enlaces firmados caducados.
- [ ] Incluir ancho, alto y tipo de imagen cuando sea posible.
- [ ] Mantener una imagen social predeterminada si el post no tiene portada.
- [ ] Comprobar una entrada ES y su equivalente FR.
- [ ] Comprobar Diario Abierto y Resenas literarias.
- [ ] Probar una URL con LinkedIn Post Inspector y Facebook Sharing Debugger.

### Criterio de salida

Las imagenes cargan en navegador, vista previa social y datos estructurados
sin depender de una URL temporal de Notion.

---

## Fase 7. Campos SEO opcionales en Notion

### Objetivo

Permitir que Belen publique de forma autonoma y optimice entradas importantes
sin depender de cambios de codigo.

### Propiedades propuestas

- `Titulo SEO`.
- `Descripcion SEO`.
- `Slug SEO`.
- `Alt portada`.
- `Tema principal`.
- `Fecha de actualizacion`.

### Reglas

- Todos los campos seran opcionales.
- Si estan vacios, la web generara valores seguros a partir del contenido.
- `Slug SEO` solo se utilizara en nuevas entradas o mediante redireccion 301.
- El titulo visible del articulo no sera sustituido automaticamente.
- Los campos de la traduccion francesa se rellenaran en la pagina francesa.

### Tareas

- [ ] Crear las propiedades en ambas bases de Notion.
- [ ] Adaptar el proxy y el renderizador.
- [ ] Definir limites y ejemplos para cada campo.
- [ ] Preparar un tutorial breve para Belen.
- [ ] Probar una entrada nueva ES/FR.
- [ ] Verificar fallback con una entrada que no rellene ningun campo SEO.

### Criterio de salida

Belen puede publicar con el flujo habitual y los campos adicionales mejoran
el resultado sin ser obligatorios.

---

## Fase 8. SEO de imagenes y sitemap visual

### Objetivo

Dar visibilidad independiente a cuadros, ilustraciones, portadas y poesia
visual.

### Tareas

- [ ] Clasificar imagenes originales, decorativas y portadas.
- [ ] Revisar textos alternativos y pies de foto.
- [ ] Evitar repetir el mismo `alt` en galerias.
- [ ] Sustituir gradualmente nombres genericos como `IMG_0314` por nombres
      descriptivos sin romper URL existentes.
- [ ] Mantener imagenes mediante `<img>` o `<picture>`, no solo CSS.
- [ ] Crear un sitemap de imagenes.
- [ ] Incluir imagen, titulo, pie y URL canonica de la pagina.
- [ ] Añadirlo al indice de sitemaps.
- [ ] Enviarlo y supervisarlo en Search Console.

### Criterio de salida

Las imagenes relevantes son rastreables, tienen contexto y aparecen asociadas
a su obra y pagina canonica.

---

## Fase 9. Rendimiento y Core Web Vitals

### Objetivo

Mantener una experiencia rapida y estable, especialmente en movil.

Seguimiento detallado de la portada:
`docs/OPTIMIZACION_RENDIMIENTO_MOVIL.md`.

### Tareas

- [ ] Medir Inicio, Sobre Belen, una galeria, Diario Abierto y un articulo.
- [ ] Medir ES y FR.
- [ ] Registrar resultados de movil y escritorio.
- [ ] Optimizar la imagen LCP de cada plantilla.
- [ ] Definir dimensiones para evitar cambios de disposicion.
- [ ] Mantener carga diferida fuera del primer pantallazo.
- [ ] Revisar fuentes, CSS y JavaScript no utilizados.
- [ ] Revisar el coste de galerias y paginas con muchas imagenes.
- [ ] Confirmar que Notion no bloquea el contenido principal.
- [ ] Consultar los datos reales de usuarios en Search Console.

### Objetivos

- LCP menor de 2,5 segundos.
- INP menor de 200 milisegundos.
- CLS menor de 0,1.

### Criterio de salida

Las plantillas principales alcanzan valores buenos o existe una lista concreta
de excepciones justificadas y siguientes acciones.

---

## Fase 10. Publicacion y recrawl

### Objetivo

Desplegar las mejoras sin perder indexacion ni funcionalidad.

### Tareas

- [ ] Compilar y auditar el `dist`.
- [ ] Ejecutar pruebas de regresion visual y funcional.
- [ ] Comprobar canonical, `hreflang`, JSON-LD, robots y sitemaps.
- [ ] Subir el contenido completo de `dist`.
- [ ] Limpiar la cache de Hostinger si fuera necesario.
- [ ] Inspeccionar una muestra de URL publicas.
- [ ] Solicitar reindexacion solo para las paginas principales modificadas.
- [ ] Vigilar errores 404, 5xx y exclusiones durante dos semanas.

### Criterio de salida

La web publicada conserva funcionalidad, no genera nuevas URL duplicadas y
Google puede rastrear las paginas modificadas.

---

## Fase 11. Autoridad externa

### Objetivo

Confirmar desde fuentes externas que `belenjuarez.com` es el sitio oficial de
la autora.

### Tareas

- [ ] Solicitar enlace desde perfiles oficiales de la UGR.
- [ ] Añadir la web al perfil ORCID y otros perfiles academicos.
- [ ] Solicitar enlaces desde editoriales.
- [ ] Solicitar enlace desde paginas de presentaciones, bibliotecas y centros
      culturales.
- [ ] Revisar que las reseñas periodisticas enlacen a la web cuando sea
      posible.
- [ ] Enlazar desde perfiles musicales y YouTube.
- [ ] Evitar compra de enlaces o directorios de baja calidad.

### Criterio de salida

Varias instituciones y publicaciones relevantes enlazan al dominio oficial.

---

## Fase 12. Revision mensual

### Frecuencia

Una revision ligera cada mes y una revision amplia cada tres meses.

### Informe mensual

- Clics e impresiones frente al mes anterior.
- Consultas nuevas.
- Paginas que ganan o pierden visibilidad.
- CTR bajo con muchas impresiones.
- Paginas descubiertas pero no indexadas.
- Errores de rastreo.
- Core Web Vitals.
- Entradas nuevas de Notion incluidas en el sitemap.
- Enlaces externos nuevos.

### Decisiones posibles

- Mejorar titulo y descripcion si hay impresiones pero pocos clics.
- Reforzar contenido y enlaces internos si la posicion es baja.
- Fusionar o diferenciar paginas si compiten por la misma busqueda.
- Actualizar datos si han cambiado realmente.
- No modificar una pagina solo para aparentar frescura.

### Criterio de exito a seis meses

- Crecimiento sostenido de impresiones y clics de marca.
- Aparicion por consultas tematicas de cola larga.
- Mayor visibilidad de `Horizonte de Sucesos`.
- Indexacion estable de Diario Abierto y Resenas literarias.
- Presencia de imagenes y videos en resultados.
- Ausencia de errores tecnicos graves.

---

## Mapa inicial de consultas

### Identidad

- Belen Juarez.
- Belen Juarez Jimenez.
- Belen Juarez poeta.
- Belen Juarez Granada.
- poeta granadina Belen Juarez.

### Obra

- poemas de Belen Juarez.
- libros de Belen Juarez.
- relatos de Belen Juarez.
- Destierro en cuatro angulos.
- La Noche de Ayer poemario.
- Horizonte de Sucesos poemario.

### Temas

- poesia visual Granada.
- poesia y ciencia.
- poesia cuantica.
- arte y poesia visual.
- traduccion poetica castellano frances.
- poesia arabe contemporanea Granada.
- ilustraciones Las noches azules del alma.

### Actividad

- recitales de poesia Granada.
- antologias de poesia andaluza.
- critica literaria Granada.
- poesia convertida en musica.
- album Horizonte de Sucesos.

Este mapa es una hipotesis inicial. Search Console determinara que consultas
utilizan realmente los lectores y cuales deben priorizarse.

## Orden recomendado de ejecucion

1. Fase 0: proteccion y referencia.
2. Fase 1: Search Console.
3. Fase 2: titulos, H1 y descripciones.
4. Fase 3: identidad y datos estructurados.
5. Fase 4: centros tematicos.
6. Fase 5: enlazado interno.
7. Fase 6: imagenes SEO de Notion.
8. Fase 7: campos SEO en Notion.
9. Fase 8: sitemap de imagenes.
10. Fase 9: rendimiento.
11. Fase 10: publicacion y recrawl.
12. Fases 11 y 12: autoridad y seguimiento continuo.

