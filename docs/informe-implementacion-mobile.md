# Informe de implementacion mobile

Fecha: 10 de julio de 2026
Rama de desarrollo original: `codex/mobile-responsive`
Integrada en `main`: 13 de julio de 2026

## Garantia de escritorio

- La optimizacion se integro en `main` despues de verificar que no altera la experiencia de escritorio.
- Las reglas de reduccion de contenido se activan exclusivamente por debajo de `768 px`.
- Escritorio conserva todas las obras visibles, las imagenes originales y los reproductores de YouTube existentes.
- Los textos, poemas, traducciones, rutas y datos no se han recortado ni reescrito.

## Cambios realizados

1. Carga diferida de todas las paginas mediante `React.lazy` y `Suspense`.
2. Generacion reproducible de miniaturas WebP para la galeria de cuadros.
3. Carga inicial de 12 obras en movil con accion `Ver mas obras`; escritorio conserva el catalogo completo.
4. Reproductores de YouTube diferidos solo en movil; escritorio conserva los iframes originales.
5. Imagenes de Diario Abierto con carga diferida y decodificacion asincrona.
6. Menu movil con areas tactiles mayores, estado activo, atributos accesibles y bloqueo del fondo.
7. Reduccion de movimiento cuando el dispositivo solicita `prefers-reduced-motion`.
8. Variantes WebP de 640 y 960 px para las imagenes de Notion, con cache y recuperacion del original.

## Metricas antes y despues

| Medida | Antes | Despues |
| --- | ---: | ---: |
| JavaScript inicial | 986,57 kB | 244,93 kB |
| JavaScript inicial comprimido | 322,38 kB | 78,34 kB |
| Imagenes originales de cuadros | 22,87 MB | se conservan |
| Variantes mobile de cuadros | inexistentes | 2,39 MB |
| Ahorro potencial en galeria mobile | 0 % | 90 % |

El resto del contenido se distribuye ahora en fragmentos por ruta y solo se descarga cuando el visitante entra en la seccion correspondiente.

## Pruebas realizadas

Se comprobaron los viewports `360x740`, `390x844`, `430x932`, `768x1024` y `1440x1000` sobre ocho rutas criticas. Resultado: 40 comprobaciones superadas, sin desbordamiento horizontal, contenido vacio ni errores de consola de la aplicacion.

Validaciones especificas:

- Escritorio: 48 obras visibles, originales cargados y sin boton de paginacion.
- Movil: 12 obras iniciales, miniaturas WebP activas y boton `Ver mas obras`.
- Videos movil: cero iframes al entrar; se crea uno al pulsar una portada.
- Menu movil: apertura, cierre, bloqueo y restauracion de scroll correctos.
- Compilacion de produccion completada correctamente.

El unico aviso de consola procede del uso preexistente de Tailwind mediante CDN y no ha sido introducido por esta optimizacion.

## Reversion

La rama `codex/mobile-responsive` se conserva como respaldo del trabajo previo a la fusion. `main` contiene ya la version conjunta de escritorio y movil.
