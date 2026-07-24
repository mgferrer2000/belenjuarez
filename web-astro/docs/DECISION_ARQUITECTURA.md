# Decision de arquitectura

## Opcion recomendada: Astro estatico

Motivos:

- Genera HTML completo para cada ruta.
- Mantiene JavaScript solo donde hay interaccion.
- Admite componentes React como islas cuando sean necesarios.
- Incluye rutas internacionales ES/FR.
- Permite rutas dinamicas generadas desde colecciones.
- Dispone de integracion oficial para sitemap.
- Produce un `dist` estatico compatible con Hostinger.
- Facilita 404 reales, metadatos y datos estructurados por pagina.

## Opcion alternativa: React con prerenderizado

Ventaja:

- Mayor reutilizacion directa de los componentes actuales.

Inconvenientes:

- Conserva una aplicacion cliente grande.
- El proceso de prerenderizado y la hidratacion requieren mas control.
- Las paginas dinamicas de Notion necesitan una solucion adicional igualmente.
- Es mas facil reintroducir HTML vacio o metadatos tardios.

## Propuesta de despliegue

- La web actual permanece en produccion durante todo el desarrollo.
- La nueva version genera su propio `web-astro/dist/`.
- Se prueba en una URL independiente protegida con `noindex`.
- Notion se integra despues de validar todas las paginas fijas.

## Decision adoptada

- Framework: Astro con salida estatica.
- Alcance SEO: identidad completa de Belen.
- Ejes: poesia, literatura, poesia visual, arte, musica, actividad cultural,
  ciencia y relacion entre ciencia y humanidades.
- Restriccion: no modificar la aplicacion React actual durante la construccion.
