# Registro de enlaces externos ES/FR

Fecha: 14 de julio de 2026.

Regla general: estas direcciones deben compartirse entre `/es/` y `/fr/`. Solo se cambiara una URL si el proveedor ofrece una pagina francesa oficial y la sustitucion se aprueba expresamente.

## Editoriales

- https://huergayfierro.com/
- https://www.devenir.es/
- https://www.alhulia.es/es/

## Antologias, poemas y resenas

- https://drive.google.com/file/d/1fIJLo6ZMwM0NWlyYUZyyCK4JxLR3yfiy/view?usp=sharing
- https://drive.google.com/file/d/1MG_pMfXvSnDrBALD9bfHSBR1ZpiIx3GY/view?usp=sharing
- https://librujula.publico.es/belen-juarez-regresa-a-la-poesia-con-pasion-y-ciencia/
- https://librujula.publico.es/las-cerezas-de-mi-padre-de-belen-juarez-jimenez/
- https://librujula.publico.es/poesia-para-un-feria-donde-leer-reir-y-pasear/
- https://librujula.publico.es/y-mi-denuncia-de-belen-juarez/
- https://en-clase.ideal.es/belen-juarez-publica-horizonte-de-sucesos-el-proyecto-surgido-tras-dos-decadas-de-quietud-lirica/
- https://www.enbenalmadena.es/3128-belen-juarez-sorprende-con-nueva-poesia-que-integra-emocion-y-ciencia/
- https://www.ideal.es/opinion/fernando-de-villena-horizonte-sucesos-20260625225511-nt.html
- https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/
- http://www.gustavovega.com
- https://www.gustavovega.com/

Las dos variantes de Gustavo Vega aparecen actualmente en el contenido. No se normalizaran durante la internacionalizacion sin comprobar antes su funcionamiento.

## Plataformas musicales

- https://music.amazon.es/tracks/B0FT95JC5W
- https://music.apple.com/es/album/horizonte-de-sucesos/1843135219
- https://music.apple.com/es/album/horizonte-de-sucesos/1879665293
- https://open.spotify.com/intl-es/album/32YXuhIAqGlZm9qnewcgRl
- https://open.spotify.com/intl-es/album/3xQDEU1oeQoWyI6IKsRiWO
- https://unitedmasters.com/a/belen-juarez
- Plantilla YouTube Music: `https://music.youtube.com/playlist?list=${youtubePlaylistId}`.

## Videos

- https://www.youtube.com/embed/CvybR4sOgBM
- https://www.youtube.com/watch?v=_8J9RL0lp_8
- https://www.youtube.com/watch?v=gsMr2C_jFGk
- Plantilla privada: `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`.
- Plantilla Notion: `https://www.youtube-nocookie.com/embed/${videoId}`.
- Plantilla reproductor: `https://www.youtube.com/embed/${currentVideoId}`.
- Plantilla galeria: `https://www.youtube.com/embed/${video.youtubeId}?rel=0`.
- Plantilla miniatura: `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`.

Los identificadores concretos de la coleccion de videos estan almacenados como datos y no deben traducirse.

## Redes sociales

- https://www.facebook.com/belenjj.bjj
- https://www.facebook.com/share/1ApEXkNRGF/?mibextid=wwXIfr
- https://www.instagram.com/belenjj.bjj

## Formulario y correo

- Endpoint: https://formsubmit.co/ajax/contacto@belenjuarez.com
- Correo del pie: `mgferrer2000@gmail.com`.

El endpoint, los destinatarios y los atributos de seguridad no cambian por idioma. Si se traducen asuntos o mensajes enviados, se hara en el cuerpo de la solicitud.

## Imagenes remotas

- https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80
- https://picsum.photos/600/600?grayscale&blur=1

Estas imagenes no dependen del idioma. Debe evaluarse por separado si conviene alojarlas localmente; no forma parte de la traduccion.

## Servicios internos compartidos

- `/notion-proxy.php`.
- `/.notion-image-cache/` en produccion.
- `/notion-api/` durante desarrollo mediante el proxy de Vite.

Estos servicios permanecen en la raiz del dominio y no deben duplicarse bajo `/es/` o `/fr/`.
