# Plan de optimizacion mobile

Proyecto: web de Belen Juarez  
Objetivo: crear una version muy fluida para dispositivos moviles sin perder la identidad editorial, poetica y artistica de la web de escritorio.

## 1. Principio rector

La web de escritorio se considera definitiva. La optimizacion mobile no debe reinterpretar el proyecto ni rebajar su ambicion cultural. Debe conservar:

- La sensacion de archivo literario y catalogo de autora.
- La voz tipografica: serif para obra, citas y titulos; sans para interfaz y metadatos.
- La paleta `paper`, `ink`, `deep-red` y acentos dorados.
- El caracter contemplativo, sobrio y editorial.
- La integridad de textos, poemas, traducciones y contenidos esenciales.

La version mobile debe ser mas ligera, mas secuencial y mas selectiva. En movil no todo tiene que aparecer con la misma densidad visual que en escritorio.

## 2. Diagnostico actual

### Estructura tecnica

La aplicacion es React + Vite con `react-router-dom`. Actualmente las rutas se importan de forma estatica desde `App.tsx`, por lo que muchas paginas y datos quedan dentro del bundle principal aunque el usuario no las visite.

El archivo `constants.ts` pesa aproximadamente 225 KB y concentra muchos datos de contenido: libros, antologias, entrevistas, obra visual, canciones, poesia visual, ilustraciones y cuadros.

La web utiliza bastante `framer-motion`. Visualmente encaja con la experiencia de escritorio, pero en movil puede penalizar fluidez si muchas tarjetas animan simultaneamente.

### Peso de imagenes

Tras la optimizacion previa, el peso ha bajado mucho, pero las imagenes siguen siendo el coste principal de la experiencia mobile.

Carpetas mas pesadas dentro de `public/images`:

- `cuadros`: 22,87 MB
- `antologias`: 13,56 MB
- `Entrevistas`: 11,44 MB
- `ilustraciones`: 11,17 MB
- `Critica_literaria`: 10,55 MB
- `PoesiaVisual`: 6,63 MB
- `relatos`: 5,66 MB

Tipos de archivo:

- `.jpeg`: 86 archivos, 40,17 MB
- `.jpg`: 78 archivos, 29,09 MB
- `.png`: 38 archivos, 21,37 MB
- `.webp`: 2 archivos, 0,84 MB

La web ya no tiene un problema extremo de imagenes gigantes, pero aun no tiene una estrategia mobile: miniaturas especificas, `srcset`, dimensiones estables, carga diferida sistematica ni separacion entre imagen de listado e imagen de ampliacion.

### Zonas de mayor riesgo mobile

- `Arte / Cuadros`: galeria masonry con muchas imagenes y lightbox.
- `Arte / Ilustracion`: galerias visuales y modal.
- `Poesia Visual`: tarjetas con portadas y detalles con imagenes ampliables.
- `Antologias`, `Entrevistas`, `Critica literaria`, `Prologos`: listados con portadas y paginas de detalle largas.
- `Traduccion`: poemas bilingues en columnas, actualmente con `overflow-x-auto`; en movil necesita una lectura mas natural.
- `Musica / Horizonte de Sucesos`: lista larga de canciones, iframe de YouTube y bloque textual extenso.
- `Sobre Belen`: muchas imagenes decorativas con valor atmosferico, pero no todas son imprescindibles en movil.

## 3. Objetivos medibles

Objetivos recomendados para una primera version mobile optimizada:

- Reducir el bundle inicial mediante carga diferida por rutas.
- Evitar descargar imagenes de galerias completas si el usuario no llega a ellas.
- Usar miniaturas para listados y reservar imagen completa para lightbox o detalle.
- Mantener el primer render mobile por debajo de 2,5 segundos en conexion 4G razonable.
- Mantener interacciones fluidas en galerias y menu mobile.
- Evitar saltos de layout por imagenes sin dimensiones.
- Mejorar lectura de poemas, entrevistas y textos largos en pantallas estrechas.
- Conservar la esencia visual sin cargar imagenes decorativas secundarias cuando no aporten contenido.

## 4. Estrategia de ramas

No trabajar directamente sobre `main` hasta que el resultado mobile este validado.

Rama recomendada:

```bash
git switch main
git pull origin main
git switch -c mobile-responsive
```

Trabajo por fases, con commits pequenos:

- `perf: split routes for mobile performance`
- `perf: add responsive image variants`
- `style: refine mobile navigation and layout`
- `perf: simplify heavy mobile galleries`
- `style: improve mobile reading views`

Cuando todo este validado:

```bash
git switch main
git merge mobile-responsive
```

## 5. Fase 1: auditoria base antes de tocar codigo

### Acciones

1. Generar build limpia.
2. Medir peso de bundle y assets.
3. Probar rutas principales en viewport mobile.
4. Hacer capturas de referencia antes de cambios.
5. Anotar paginas lentas o con scroll torpe.

### Rutas a revisar

- `/`
- `/sobre-belen`
- `/sobre-belen/curriculum-literario-artistico`
- `/sobre-belen/curriculum-cientifico`
- `/obra-literaria/libros`
- `/obra-literaria/antologias`
- `/obra-literaria/traduccion`
- `/obra-literaria/traduccion/las-noches-azules-del-alma`
- `/obra-literaria/prologos`
- `/poesia-visual`
- `/arte/cuadros`
- `/arte/ilustracion`
- `/arte/critica`
- `/musica/horizonte`
- `/musica/videos`
- `/blog`

### Resultado esperado

Un pequeno informe tecnico con:

- Peso JS/CSS.
- Peso total de imagenes.
- Tiempo de carga aproximado.
- Paginas mas pesadas.
- Problemas visuales mobile detectados.

## 6. Fase 2: separar el codigo por rutas

### Problema

`App.tsx` importa todas las paginas de forma estatica. En movil, el usuario paga parte del coste de secciones que no esta visitando.

### Accion recomendada

Aplicar `React.lazy` y `Suspense` en rutas principales:

- Inicio
- Sobre Belen
- Obra Literaria
- Poesia Visual
- Arte
- Musica
- Blog
- Contacto

Las paginas de detalle tambien deben cargarse bajo demanda.

### Criterio visual

El fallback de carga debe ser editorial y minimo:

- fondo `paper`
- texto serif o spinner sobrio
- sin pantallas llamativas

### Resultado esperado

- Menor bundle inicial.
- Mejor primera carga en mobile.
- Cada seccion carga su contenido solo al entrar.

## 7. Fase 3: estrategia de imagenes mobile

### Problema

Las mismas imagenes se usan para listado, detalle y lightbox. En mobile no hace falta cargar una imagen grande para una miniatura pequena.

### Accion recomendada

Crear variantes por imagen relevante:

- `thumb`: 480 px de ancho, para listados.
- `mobile`: 900 px de ancho, para detalle mobile.
- `desktop`: 1600-1800 px, para escritorio y lightbox.

Formato recomendado:

- `webp` para fotografias, portadas y reproducciones sin transparencia.
- `webp` con transparencia cuando proceda.
- Mantener algunos `jpg` solo si visualmente conservan mejor textura o si el ahorro de `webp` no compensa.

### Componentes recomendados

Crear un componente comun:

- `ResponsiveImage`

Responsabilidades:

- `srcSet`
- `sizes`
- `loading="lazy"` por defecto
- `decoding="async"`
- `width` y `height` cuando se conozcan
- `fetchPriority="high"` solo para imagen hero o primera imagen importante
- soporte de `objectPosition`

### Prioridades

1. `cuadros`
2. `antologias`
3. `Entrevistas`
4. `ilustraciones`
5. `Critica_literaria`
6. `PoesiaVisual`
7. `relatos`
8. `sobrebelen`

### Resultado esperado

- Las tarjetas no descargan imagenes grandes.
- Las imagenes bajo el pliegue se cargan tarde.
- El lightbox mantiene calidad al ampliar.
- No hay saltos de layout.

## 8. Fase 4: optimizar galerias visuales

### Arte / Cuadros

La galeria de `Cuadros` es una de las paginas mas sensibles en mobile. Debe conservar la sensacion de catalogo, pero no cargar todo de golpe.

Acciones:

- Usar miniaturas en la galeria.
- Cargar imagen completa solo al abrir lightbox.
- En mobile, mostrar inicialmente un numero limitado de obras.
- Anadir un boton sobrio `Ver mas obras`.
- Reducir animaciones por item en mobile.
- Mantener filtros `Todo el Arte`, `Cuadros/Pinturas`, `Bocetos a lapiz`.

Contenido que no se debe eliminar:

- Titulo de obra.
- Tecnica.
- Ano.
- Lightbox de detalle.

Contenido que se puede simplificar en mobile:

- Overlay complejo en hover, porque hover no existe en tactil.
- Sombras grandes.
- Animaciones de escala.

### Arte / Ilustracion

Acciones:

- Separar miniaturas de imagen ampliada.
- En mobile, presentar galerias como carrusel o lista compacta.
- Evitar cargar todas las ilustraciones completas al inicio.
- Mantener modal solo si funciona con gestos simples y botones grandes.

### Poesia Visual

Acciones:

- Mantener texto introductorio, pero recortar la densidad visual inicial.
- Cargar portadas en miniatura.
- En detalle, cargar obras grandes bajo demanda.
- Mantener la lectura critica como nucleo, no convertirla en galeria pura.

## 9. Fase 5: simplificar paginas largas en mobile

### Sobre Belen

La pagina tiene valor atmosferico por las imagenes, pero en mobile algunas pueden ser decorativas.

Acciones:

- Mantener retrato principal y 1-2 imagenes de fuerte valor emocional.
- Ocultar en mobile algunas imagenes secundarias de ambiente.
- Reducir `py-24` y `py-32` a ritmos mas contenidos.
- Evitar que la biografia parezca una sucesion interminable de bloques.

No eliminar:

- Citas.
- Nucleo biografico.
- Imagenes principales de identidad.

### Curriculum literario y cientifico

Acciones:

- Convertir bloques largos en secciones colapsables si la lectura se hace demasiado extensa.
- Mantener encabezados claros.
- Evitar tablas anchas.
- Usar listas verticales, no columnas.

### Traduccion

Problema:

La lectura bilingue en dos columnas funciona en escritorio, pero en mobile fuerza scroll horizontal.

Accion recomendada:

- En mobile, cambiar a modo alterno:
  - texto original
  - traduccion
  - separador fino
  - siguiente poema

Conservar:

- Saltos de verso.
- Blancos entre estrofas.
- Negritas e italicas.
- Identificacion de idioma.

Evitar:

- Partir versos por ancho.
- Obligar a leer dos columnas comprimidas.

### Blog / Diario Abierto

Acciones:

- Mantener tarjetas limpias.
- Usar imagenes `thumb`.
- Mantener filtro por etiquetas.
- Reducir animacion escalonada cuando hay muchas entradas.
- En post individual, mantener poemas con saltos reales y prosa con parrafos.

## 10. Fase 6: musica y video

### Problema

Los iframes de YouTube son caros en mobile. La pagina `Horizonte de Sucesos` incluye reproductor, lista larga y textos extensos.

### Accion recomendada

- No cargar iframe automaticamente en mobile.
- Mostrar una portada/boton de reproduccion.
- Insertar el iframe solo cuando el usuario toca reproducir.
- En la lista de canciones, usar acordeon o lista compacta.
- Mantener enlaces a plataformas como acciones principales.
- Separar la reseña del album con una ancla o bloque plegable si pesa visualmente demasiado.

### Videos

- Usar poster o thumbnail.
- Cargar iframe bajo demanda.
- Evitar varios iframes simultaneos en la primera carga.

## 11. Fase 7: navegacion mobile

### Estado actual

Existe menu mobile a pantalla completa con submenus desplegables.

### Mejoras recomendadas

- Hacer que el menu recuerde bien la seccion activa.
- Ajustar altura y scroll para telefonos pequenos.
- Aumentar area tactil de subitems.
- Reducir densidad de `Obra Literaria`, porque es el submenu mas largo.
- Considerar agrupar subitems de Obra Literaria por familias:
  - Libros y reseñas
  - Textos y antologias
  - Traduccion, prologos y entrevistas

Esta agrupacion debe hacerse con mucho cuidado para no cambiar la arquitectura mental de la web.

## 12. Fase 8: movimiento y rendimiento

### Problema

`framer-motion` aparece en muchas secciones. En desktop aporta suavidad; en mobile conviene usarlo con moderacion.

### Acciones

- Respetar `prefers-reduced-motion`.
- Reducir delays escalonados en listados largos.
- Evitar animaciones de layout en galerias grandes mobile.
- Mantener transiciones de opacidad y desplazamiento corto.
- Evitar `hover:scale` como efecto principal en tactil.

## 13. Fase 9: datos y bundle

### Problema

`constants.ts` concentra mucho contenido y se importa desde muchas paginas. Esto puede arrastrar datos no usados a rutas donde no hacen falta.

### Accion recomendada

Dividir datos por dominio:

- `data/books.ts`
- `data/collaborations.ts`
- `data/artPieces.ts`
- `data/illustrations.ts`
- `data/interviews.ts`
- `data/visualPoetry.ts`
- `data/music.ts`

Cada pagina debe importar solo su conjunto de datos.

### Resultado esperado

- Mejor tree-shaking.
- Rutas mas ligeras.
- Mantenimiento mas claro.

## 14. Fase 10: accesibilidad tactil

Acciones:

- Botones tactiles de al menos 44 px de alto.
- Cierre de modales visible y facil.
- Lightbox navegable sin depender de hover.
- Textos con contraste suficiente.
- No usar texto demasiado pequeno en etiquetas largas.
- Evitar scroll horizontal salvo en poemas donde sea imprescindible para no romper versos.

## 15. Orden recomendado de ejecucion

1. Crear rama `mobile-responsive`.
2. Hacer auditoria visual y tecnica base.
3. Aplicar `React.lazy` por rutas.
4. Crear `ResponsiveImage`.
5. Generar variantes `thumb`, `mobile`, `desktop` para imagenes.
6. Cambiar listados a miniaturas.
7. Optimizar `Cuadros` e `Ilustracion`.
8. Optimizar `Antologias`, `Entrevistas`, `Critica_literaria` y `PoesiaVisual`.
9. Rehacer lectura mobile de `Traduccion`.
10. Optimizar iframes de `Musica`.
11. Ajustar menu mobile.
12. Reducir animaciones en mobile.
13. Dividir `constants.ts` por dominios.
14. Probar rutas criticas.
15. Comparar contra escritorio para asegurar que no se pierde esencia.

## 16. Pruebas obligatorias

### Viewports

- 360 x 740
- 390 x 844
- 430 x 932
- 768 x 1024
- escritorio actual

### Rutas criticas

- Inicio
- Sobre Belen
- Obra Literaria / Antologias
- Traduccion detalle
- Arte / Cuadros
- Arte / Ilustracion
- Poesia Visual detalle
- Musica / Horizonte
- Blog listado y post

### Criterios de aceptacion

- No hay texto cortado.
- No hay elementos superpuestos.
- No hay scroll horizontal global.
- Los poemas conservan versos.
- Las galerias cargan fluidas.
- Los iframes no bloquean la primera carga.
- El menu mobile es usable con una mano.
- La web sigue pareciendo la misma obra, no una version empobrecida.

## 17. Que se puede ocultar en mobile

Ocultable o reducible:

- Imagenes decorativas secundarias de biografia.
- Overlays de hover.
- Sombras grandes.
- Animaciones de entrada repetidas.
- Algunas imagenes de apoyo en articulos largos.
- Reproductores iframe hasta interaccion del usuario.
- Segundas o terceras imagenes en listados si no aportan informacion nueva.

No ocultar:

- Portadas de libros o revistas principales.
- Obra artistica en paginas de galeria.
- Datos bibliograficos.
- Poemas, traducciones, prologos, entrevistas y textos completos.
- Etiquetas de blog.
- Enlaces externos relevantes.

## 18. Riesgos

- Optimizar imagenes sin distinguir miniatura y ampliacion puede degradar el lightbox.
- Compactar demasiado el espaciado puede romper el tono contemplativo.
- Ocultar imagenes sin criterio puede empobrecer la presencia artistica.
- Dividir datos sin cuidado puede romper rutas de detalle.
- Cambiar traducciones a formato mobile puede alterar versos si no se prueba visualmente.
- Los iframes diferidos requieren estados claros para que el usuario entienda que puede reproducir.

## 19. Resultado final esperado

Una version mobile que:

- Carga mas rapido.
- Se desplaza con fluidez.
- Mantiene la estetica editorial y poetica.
- Prioriza lectura, obra y navegacion.
- Usa imagenes con inteligencia segun contexto.
- No sacrifica contenido esencial.
- Convierte la web en una experiencia movil cuidada, no solo responsive.

## 20. Primer bloque de trabajo recomendado

La primera intervencion deberia ser tecnica y de bajo riesgo:

1. Crear rama `mobile-responsive`.
2. Aplicar carga diferida por rutas.
3. Crear `ResponsiveImage`.
4. Cambiar solo 2 paginas piloto:
   - `Arte / Cuadros`
   - `Diario Abierto`
5. Medir antes y despues.

Si esas dos paginas mejoran sin romper la estetica, se replica el patron al resto.

