# Web activa de Belen Juarez

Este directorio contiene la version definitiva de belenjuarez.com desarrollada
con Astro. Desde el cierre de la migracion es la referencia editorial,
funcional y visual del proyecto.

## Objetivo

Mantener el contenido, la identidad visual y la funcionalidad de la web con
HTML completo y metadatos especificos para cada URL.

## Principios

1. Mantener las rutas publicas `/es/` y `/fr/`.
2. Conservar la publicacion autonoma desde Notion.
3. Mantener dentro de esta carpeta todos los datos, traducciones, recursos y
   configuraciones necesarios.
4. Tratar `../web-react/` unicamente como una copia historica.

## Documentos

- `docs/HOJA_DE_RUTA_SEO.md`: plan de ejecucion y controles de seguridad.
- `docs/INVENTARIO_INICIAL.md`: alcance funcional y contenidos migrados.
- `docs/ESTRATEGIA_TEMATICA.md`: campos semanticos y oportunidades SEO.
- `docs/DECISION_ARQUITECTURA.md`: decision tecnologica adoptada y motivos.

## Estado

La aplicacion Astro genera 150 paginas ES/FR. Las 144 paginas indexables
superan la auditoria automatizada de metadatos, recursos locales, datos
estructurados, sitemap y textos provisionales.

Los datos editoriales y traducciones heredados se conservan dentro de
`src/legacy/`, y todos los recursos publicos estan en `public/`. No existe
ninguna dependencia de archivos externos al proyecto. Diario Abierto y Resenas
literarias conservan la publicacion autonoma desde Notion. Las listas se
actualizan en el navegador y cada articulo se entrega desde PHP como HTML
semantico completo, con metadatos, canonical, `hreflang` y JSON-LD propios.
El sitemap dinamico incorpora automaticamente las entradas publicadas en ES y
FR sin recompilar Astro.

## Comandos

- `npm run dev`: desarrollo local en el puerto 4321.
- `npm run build`: comprobacion TypeScript, compilacion Astro y reglas Apache.
- `npm run audit`: auditoria del `dist` ya generado.
- `npm run preview`: vista previa estatica en el puerto 4322. Esta vista no
  ejecuta PHP, por lo que los detalles y el sitemap de Notion deben probarse
  en un servidor PHP.

## Antes de publicar

Consultar `docs/ESTADO_IMPLEMENTACION.md` antes de publicar cambios relevantes.
