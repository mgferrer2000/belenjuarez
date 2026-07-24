# Linea base SEO previa a la optimizacion

Fecha: 24 de julio de 2026  
Sitio de referencia: `https://belenjuarez.com/`  
Proyecto activo: `web-astro`

## Proteccion

- Copia del `dist` estable: `backups/pre-seo-2026-07-24-dist-astro.zip`
- SHA-256: `737C2E14E258D3E789F5EC82DCA5C2F749279DEF58175AD0BDB0D6770CE73F04`
- La copia contiene la version de produccion anterior a los cambios SEO.
- Los archivos `.env`, las copias y los ZIP quedan excluidos de Git.
- No se han detectado tokens de Notion con prefijos `ntn_` o `secret_` en los
  archivos que se van a versionar.

## Compilacion y auditoria

- Comprobacion de Astro/TypeScript: 0 errores, 0 avisos y 0 sugerencias.
- Paginas generadas por Astro: 150.
- Paginas HTML indexables auditadas: 144.
- Avisos del auditor del proyecto: 0.
- Errores de recursos locales, canonical, `hreflang`, Open Graph o Twitter Card
  en las paginas indexables: 0.
- `robots.txt` enlaza `https://belenjuarez.com/sitemap-index.xml`.
- El indice de sitemaps incluye el sitemap dinamico de Notion.
- Los modulos PHP dinamicos de Notion y sus reglas de reescritura estan presentes.

## Inventario SEO inicial

El rastreo general del `dist`, incluyendo paginas auxiliares y plantillas que no
se indexan, ofrece esta referencia:

- Imagenes encontradas: 523.
- Imagenes sin atributo `alt`: 0.
- Paginas sin `title`: 0.
- Paginas sin descripcion: 1, correspondiente a una pagina auxiliar no indexable.
- Grupos de titulos repetidos: 33. Incluyen principalmente equivalencias ES/FR
  y nombres de obras; se revisaran por idioma en la fase 2.
- Paginas con una estructura `H1` pendiente de revision: 10 en el rastreo general.
  Las incidencias indexables se concentran en las portadas ES/FR de Arte y Musica;
  el resto son paginas auxiliares o plantillas dinamicas.
- Paginas sin canonical: 1, correspondiente a la redireccion raiz no indexable.
- Paginas con menos de dos variantes `hreflang`: 2, correspondientes a recursos
  auxiliares no indexables.
- Paginas sin JSON-LD: 10 en el rastreo general. Se revisaran los centros
  tematicos y se excluiran del diagnostico las plantillas y paginas no indexables.

## Search Console

Las metricas historicas de Google Search Console quedan pendientes de registrar
porque requieren acceso a la propiedad de `belenjuarez.com`. En la fase 1 se
anotaran, como minimo:

- clics e impresiones de los ultimos 3 y 12 meses;
- CTR y posicion media;
- consultas y paginas con mas visibilidad;
- paginas indexadas y excluidas;
- estado del sitemap y experiencia web.

## Uso de esta referencia

Todos los cambios SEO posteriores deben compararse con esta linea base. Ninguna
fase se considerara terminada si introduce errores de compilacion, reduce el
numero esperado de paginas, rompe recursos o modifica el aspecto y la
funcionalidad aprobados.
