# Optimizacion de rendimiento movil

Fecha de inicio: 24 de julio de 2026  
Rama: `codex/seo-optimizacion`

## Referencia inicial

Medicion de Hostinger sobre la portada:

- rendimiento movil: 70/100;
- rendimiento de escritorio: 93/100;
- LCP: 5,5 s;
- FCP: 3,4 s;
- Speed Index: 4,8 s;
- Total Blocking Time: 0 ms;
- CLS: 0,009.

Una segunda medicion local con Lighthouse sobre la web publicada obtuvo 78/100,
FCP de 2,6 s y LCP de 4,9 s. La variacion de puntuacion entre ejecuciones es
normal; ambas mediciones identificaron el mismo problema.

## Diagnostico

- El elemento LCP era la imagen de biblioteca de la portada servida desde
  Unsplash.
- El movil descargaba una imagen de 1920 px sin una variante adaptada.
- Lighthouse estimo 339 KiB de ahorro mediante imagenes responsivas y 231 KiB
  mediante una entrega de imagen mas eficiente. Estas cifras se solapan y no se
  deben sumar.
- Google Fonts y el CSS global bloqueaban el primer renderizado. Lighthouse
  estimo hasta 1.760 ms de ahorro en esa ruta critica.
- El CSS global transferia unos 32 KiB comprimidos y Lighthouse detecto
  aproximadamente 28 KiB evitables en la portada.
- El servidor, JavaScript y la estabilidad visual ya ofrecian buenos resultados.

## Cambios realizados

### Imagen LCP

- La imagen deja de depender de Unsplash y se sirve desde el mismo dominio.
- Se han generado variantes AVIF y WebP:
  - movil: 480 x 960 y 768 x 1280;
  - escritorio: 1280 x 720 y 1920 x 1080.
- Los recortes reproducen el encuadre central que realizaba el `object-fit`
  anterior.
- La portada usa `picture`, `srcset`, `sizes`, dimensiones explicitas,
  `loading="eager"`, `decoding="async"` y `fetchpriority="high"`.
- Los AVIF pesan entre 17 y 51 KiB y los WebP entre 24 y 68 KiB.

### Fuentes

- Cormorant Garamond y Montserrat se mantienen sin sustituciones visuales.
- Las fuentes pasan a alojarse en `/public/fonts`.
- Se elimina la hoja de estilos remota de Google Fonts.
- Solo se precargan los dos archivos normales necesarios para la cabecera y el
  primer pantallazo.
- La variante cursiva permanece disponible localmente y se carga cuando se usa.

## Pendiente para la siguiente iteracion

Separar `global.css` en:

1. estilos base y de navegacion;
2. estilos criticos de la portada;
3. estilos especificos de cada seccion.

Esta division se realizara despues de desplegar y medir los cambios actuales.
Debe incluir comparacion visual de escritorio y movil para evitar alteraciones
en el diseño. El objetivo final sigue siendo un LCP inferior a 2,5 segundos,
pero no se debe sacrificar la fidelidad visual para alcanzar una puntuacion.

## Metodo de validacion

1. Ejecutar `npm run build` y `npm run audit`.
2. Revisar visualmente las portadas ES y FR en movil y escritorio.
3. Desplegar el `dist` completo en Hostinger.
4. Limpiar la cache de Hostinger.
5. Repetir la prueba movil dos o tres veces y registrar la mediana.
6. Solo entonces abordar la division del CSS.

## Validacion local posterior

La compilacion optimizada se ha medido con Lighthouse en modo movil sobre el
servidor local:

- rendimiento: 100/100;
- FCP: 0,9 s;
- LCP: 1,7 s;
- Speed Index: 0,9 s;
- Total Blocking Time: 0 ms;
- CLS: 0;
- ahorro pendiente por bloqueo de renderizado: 280 ms, asociado al CSS;
- no se detecta ya ahorro por imagenes responsivas.

La puntuacion local no sustituye la medicion de produccion porque no incluye la
latencia real de Internet ni la infraestructura de Hostinger. Sirve para
confirmar que las oportunidades de imagen y fuentes han sido resueltas. La
comparacion definitiva debe hacerse despues del despliegue.
