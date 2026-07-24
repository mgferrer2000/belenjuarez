# Inventario inicial

## Fuente de verdad

La aplicacion actual es React 19 con Vite y React Router. Contiene rutas
localizadas, componentes responsive, recursos locales y dos colecciones de
Notion servidas mediante un proxy PHP.

## Areas principales

### Identidad

- Inicio.
- Biografia.
- Curriculum literario y artistico.
- Curriculum cientifico.
- Contacto.

### Obra literaria

- Libros.
- Reseñas sobre libros.
- Poemas en antologias y revistas.
- Plaquettes.
- Relatos.
- Critica literaria.
- Critica de libros de El legado andalusi.
- Prologos y capitulos de libro.
- Traducciones bilingues.
- Entrevistas a escritores.

### Poesia visual y arte

- Poesia visual y paginas de detalle.
- Cuadros y bocetos.
- Ilustraciones.
- Critica artistica.
- Galerias y ampliaciones modales.

### Musica

- Musica y poesia.
- Album Horizonte de Sucesos.
- Videos musicales y textos asociados.

### Publicacion dinamica

- Diario Abierto.
- Reseñas literarias.
- Filtrado por etiquetas.
- Versiones espanolas y francesas vinculadas por `Original ES`.
- Imagenes y videos procedentes de Notion.

## Funciones que deben conservarse

- Rutas `/es/` y `/fr/`.
- Cambio de idioma conservando la pagina equivalente.
- Navegacion responsive y menus de segundo nivel.
- Enlaces profundos recargables.
- Galerias, filtros y ventanas de detalle.
- Maquetacion exacta de poemas y traducciones enfrentadas.
- Carga optimizada de imagenes en movil.
- Reproductores de audio y video.
- Publicacion autonoma de Belen desde Notion.

## Recursos

Los assets actuales se organizan en:

- `antologias`
- `Critica_literaria`
- `Critica-artistica`
- `cuadros`
- `Entrevistas`
- `Horizonte_de_Sucesos`
- `ilustraciones`
- `libros`
- `mobile`
- `Plaquettes`
- `PoesiaVisual`
- `prologos`
- `relatos`
- `resenas`
- `sobrebelen`
- `traduccion`

Durante el desarrollo paralelo no se moveran ni renombraran. Se definira un
proceso de copia o sincronizacion hacia la nueva aplicacion para que ambos
proyectos puedan compilar de forma independiente.

## Riesgos que debe resolver la nueva version

- HTML inicial sin contenido.
- Un unico titulo generico por idioma.
- Ausencia de descripciones, canonical y hreflang.
- Ausencia de sitemap y robots reales.
- Rutas inexistentes con estado 200.
- Redirecciones ejecutadas solo en el navegador.
- Dependencia de JavaScript para descubrir Notion.
- CSS de Tailwind generado en tiempo de ejecucion mediante CDN.

