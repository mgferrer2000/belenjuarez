# Design System: Belen Juarez

## 1. Visual Theme & Atmosphere

La web esta planteada como un archivo de autora con sensibilidad editorial. El tono general es sobrio, culto, contemplativo y poetico. No busca parecer una app de producto ni una revista digital agresiva: transmite silencio, permanencia, obra y memoria.

La experiencia mezcla tres registros:

- Archivo literario: fondos claros, ritmo pausado, textos largos, titulos serif y aire generoso.
- Catalogo expositivo: imagenes con protagonismo, fichas discretas, overlays suaves, sensacion de sala o muestra.
- Escenario sonoro: en la seccion de musica, el sistema se invierte a fondo oscuro con acentos dorados y atmosfera mas performativa.

La estetica debe sentirse:

- Elegante pero no lujosa
- Cultural pero no institucional
- Emotiva pero no melodramatica
- Moderna en ejecucion, clasica en temperamento

## 2. Color Palette & Roles

- `paper`: fondo principal claro, tipo papel calido. Es la base de casi toda la web.
- `ink`: color principal de texto y contraste. Debe sentirse como tinta, no como negro puro agresivo.
- `deep-red`: acento principal de navegacion, enlaces activos, subrayados, microdetalles expresivos y llamadas discretas.
- `gold` / `gold-accent`: acento secundario de prestigio. Se usa para citas, detalles curatoriales, etiquetas, lineas finas y la seccion musical.
- `white`: aparece sobre overlays oscuros, modales y entornos `ink`.
- Grises translcidos: se usan para capas, bordes, textos secundarios y hover states; nunca dominan la interfaz.

Reglas de uso:

- El fondo dominante suele ser claro. No introducir bloques de color intensos salvo en musica o modales.
- `deep-red` se usa con moderacion; sirve para marcar, no para inundar.
- `gold-accent` funciona mejor como susurro visual que como protagonista.
- En paginas oscuras, el dorado sustituye al rojo como acento preferente.

## 3. Typography Rules

- `font-serif`: voz autoral. Usar en titulos, citas, nombres de obras, cabeceras importantes y piezas con peso literario.
- `font-sans`: voz de interfaz. Usar en navegacion, labels, anos, descripciones, formularios y metadatos.
- `font-mono`: uso excepcional. Reservado a detalles tecnicos o sonoros, sobre todo en musica.

Jerarquias habituales:

- H1/H2: serif, grandes, entre `text-4xl` y `text-6xl`, con peso medio o regular.
- Subtitulos curatoriales: sans en mayusculas, tracking muy abierto.
- Texto de lectura: sans ligera o serif segun el contexto, con interlineado amplio y color atenuado.
- Citas: serif en cursiva, tamano generoso, a menudo centradas o en bloque destacado.

Rasgos tipograficos clave:

- Uso frecuente de italicas en piezas literarias
- Mayusculas con tracking amplio para navegacion y etiquetas
- Contraste fuerte entre titulos expresivos y metadatos silenciosos
- Evitar tipografia pesada, comprimida o excesivamente geometrica

## 4. Geometry & Shape

- Predominan bordes rectos o apenas suavizados (`rounded-sm`)
- No hay lenguaje de tarjetas blandas o pill UI salvo botones muy concretos en musica
- Las imagenes suelen ir en marcos limpios, con bordes sutiles y sombras suaves
- Las lineas horizontales finas y los bordes inferiores sustituyen a ornamentos mas complejos

Interpretacion visual:

- Rectangulos sobrios
- Contenedores discretos
- Tarjetas con presencia editorial, no comercial
- Botones mas cercanos a una ficha o placa tipografica que a un CTA de ecommerce

## 5. Depth & Elevation

La interfaz es mayoritariamente plana, con profundidad contenida.

- Sombras suaves a medias para fotografias, retratos y piezas destacadas
- Overlays oscuros o degradados en hover para revelar informacion sobre imagenes
- Modales y lightboxes con fondo `ink` casi opaco y desenfoque leve
- Evitar sombras duras, glassmorphism excesivo o efectos brillantes

La profundidad debe sentirse como:

- Papel, marco, vitrina, sala
- No dashboard, no mobile app generica, no marketing landing

## 6. Layout Principles

- Anchura principal habitual: `max-w-7xl` o `max-w-6xl`
- Mucho aire vertical: `py-24`, `py-32`, separaciones amplias entre bloques
- Uso recurrente de `px-6`, con composiciones centradas y respiradas
- Alternancia entre bloques de texto e imagen para mantener ritmo expositivo
- En biografia y paginas largas: composicion tipo ensayo visual
- En secciones de archivo: grids limpias, masonry o listados con buena separacion

Patrones estructurales:

- Navbar fija arriba, translucida al inicio y mas solida al hacer scroll
- Cabecera de seccion con titulo grande y navegacion secundaria horizontal
- Contenido principal en bloques largos, no en modulos pequenos repetitivos
- Footer minimo y silencioso

## 7. Motion & Interaction

La animacion es suave, lenta y nunca invade.

- Entradas por `opacity` y desplazamientos cortos
- `hover:scale-105` o similar sobre imagenes, siempre con transicion lenta
- Cambios de color discretos en links y navegacion
- Overlays que aparecen con suavidad para revelar informacion
- Lightboxes y modales con aparicion limpia y cinematografica

Evitar:

- Microanimaciones nerviosas
- Bounce excesivo fuera de detalles puntuales
- Transiciones agresivas o muy app-like

## 8. Section-Specific Rules

### Inicio

- Hero manifiesto
- Gran titular serif
- Subtitulo en mayusculas con tracking amplio
- Sensacion de introduccion lirica, no de portada comercial

### Sobre Belen

- Ensayo visual-biografico
- Fotografias grandes y respiradas
- Alternancia de retrato, texto, cita y galeria
- Tono intimo, culto y contemplativo

### Obra Literaria

- Archivo editorial claro
- Navegacion secundaria horizontal
- Fichas, portadas y textos extensos con tono de catalogo
- Muy importante preservar claridad y jerarquia textual

### Poesia Visual

- Debe sentirse entre galeria y manifiesto
- Mantener protagonismo de obra e idea critica
- Usar citas, bloques destacados y fondos claros

### Arte

- Lenguaje de exposicion
- Masonry, overlays y lightbox sofisticado
- Mucha presencia de imagen
- Metadatos discretos, titulos con peso artistico

### Musica

- Universo propio dentro de la web
- Fondo `ink`, textos claros, acentos dorados
- Sensacion de escenario, escucha y objeto musical
- Botones algo mas visibles, pero sin romper la sobriedad general

### Blog

- Debe integrarse como diario editorial, no como blog tecnologico
- Portadas limpias, fechas visibles, titulos serif, ritmo de lectura pausado

### Contacto

- Debe seguir siendo sobrio y directo
- Formularios simples, bien espaciados, sin decoraciones superfluas

## 9. Reusable Patterns

- Titulo serif + subtitulo/label sans en mayusculas
- Imagen con overlay oscuro y texto revelado al hover
- Linea fina o bloque de color pequeno como marcador visual
- Texto descriptivo en `text-ink/60` o `text-ink/70`
- Enlaces activos en `deep-red` o `gold-accent` segun contexto
- Citas centradas o en bloque con serif italica
- Primeras letras decorativas en textos largos cuando la pagina lo permita

## 10. Guardrails For Future Changes

- No introducir una estetica SaaS, startup o dashboard
- No usar paletas saturadas o gradientes chillones
- No sustituir la logica serif/sans por una sola voz tipografica
- No llenar la web de botones primarios solidos sin necesidad
- No compactar excesivamente el espaciado
- No convertir las paginas en grids uniformes si actualmente funcionan como relato visual
- No abusar de tarjetas redondeadas, badges de app o iconografia decorativa
- No romper la diferencia tonal entre secciones claras y seccion musical

## 11. Implementation Heuristics

Cuando haya que anadir o modificar algo, priorizar:

1. Reutilizar wrappers, spacing y patrones de navegacion ya existentes.
2. Mantener el mismo tono tipografico: serif para voz autoral, sans para interfaz.
3. Introducir nuevas secciones como piezas curatoriales, no como modulos genericos.
4. Dar protagonismo a imagen y texto, no a componentes ornamentales.
5. Si hay duda entre algo mas espectacular y algo mas sobrio, elegir lo sobrio.

## 12. Working Summary

La web de Belen Juarez debe seguir sintiendose como una mezcla de:

- archivo literario
- catalogo de exposicion
- cuaderno de autora
- escena poetica y musical

Toda intervencion futura debe conservar ese equilibrio.
