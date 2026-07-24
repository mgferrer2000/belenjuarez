# Estado de implementacion y siguientes pasos

## Resultado actual

- Aplicacion Astro independiente y activa dentro de `web-astro/`.
- Rutas completas bajo `/es/` y `/fr/`.
- 150 paginas HTML generadas.
- 144 paginas indexables auditadas sin errores ni avisos.
- Cuatro plantillas genericas de respaldo de Notion marcadas `noindex`.
- Articulos de Notion renderizados en PHP como HTML semantico indexable.
- Sitemap dinamico de Notion actualizado sin recompilar Astro.
- HTML completo, canonical, `hreflang`, Open Graph y Twitter Cards.
- Datos estructurados para persona, libros, colecciones, articulos, arte,
  musica, video y contacto.
- `robots.txt`, sitemap y `.htaccess` propios.
- Identidad visual, navegacion responsive, galerias, poemas, traducciones,
  musica, videos y formulario de contacto reconstruidos.
- Recursos propios dentro de `web-astro/public`, sin dependencias de React.

## Controles superados

1. `astro check`: 0 errores, 0 avisos y 0 indicaciones.
2. `astro build`: 150 paginas generadas.
3. `npm run audit`: 144 paginas indexables sin fallos.
4. Sin desbordamiento horizontal en las vistas verificadas a 393 y 1440 px.
5. Menu, selector de idioma, galeria y modal comprobados en navegador.
6. Reproductores de YouTube diferidos hasta la accion del usuario.
7. React y Astro se conservan en carpetas hermanas y no comparten archivos.
8. PHP 8.3: los tres modulos SEO y el proxy existente superan validacion
   sintactica.
9. Notion real: 6 entradas publicadas en ES y 6 en FR detectadas.
10. Articulos reales ES/FR: respuesta 200, metadatos unicos, canonical,
    `hreflang`, JSON-LD valido y contenido completo sin isla React.
11. ID inexistente: respuesta 404 y directiva `noindex`.

## Integracion de Notion

La publicacion autonoma de Belen exige que Diario Abierto y Resenas literarias
sean dinamicos. Las listas consultan el proxy PHP y enlazan a URL limpias. En
cada URL de detalle, PHP consulta Notion, resuelve la pareja ES/FR, transforma
los bloques en HTML semantico y completa los metadatos antes de responder.

Las URL `/{idioma}/{seccion}/{id}/` se reescriben hacia `notion-entry.php`.
Solo se sirven paginas marcadas `Publicado`; las traducciones francesas se
relacionan mediante `Original ES`. El sitemap `notion-sitemap.php` consulta
ambas bases y ambos idiomas. Las respuestas se almacenan brevemente en cache
para reducir latencia y consumo de la API.

La vista previa estatica de Astro no ejecuta PHP. La integracion se ha probado
localmente con PHP y datos reales, pero debe repetirse en el subdominio de
pruebas de Hostinger para confirmar sus reglas Apache y extensiones PHP.

## Publicacion segura, paso a paso

1. Conservar intactos `main`, el `dist` actual y la copia de seguridad validada.
2. Crear un subdominio de pruebas, por ejemplo `seo.belenjuarez.com`.
3. Protegerlo con contrasena y cabecera `X-Robots-Tag: noindex`.
4. Subir el contenido de `web-astro/dist/`, incluido `.htaccess` y
   `notion-proxy.php`.
5. Subir el `.env` de produccion fuera del acceso publico o bloquearlo mediante
   Apache.
6. Probar Diario Abierto y Resenas literarias en ES y FR con articulos reales.
7. Probar el formulario sin enviar datos de prueba a terceros hasta confirmar
   el destinatario.
8. Ejecutar la regresion de `docs/HOJA_DE_RUTA_SEO.md` en escritorio, tableta y
   movil.
9. Revisar una muestra de URLs con Rich Results Test y Search Console.
10. Crear el mapa definitivo de redirecciones 301 desde todas las URL antiguas.
11. Solo tras la aceptacion, guardar el `public_html` actual y sustituirlo por
    el nuevo `dist`.
12. Enviar el sitemap nuevo a Search Console y vigilar errores 404, cobertura y
    Core Web Vitals durante las primeras semanas.

## Criterio de cambio a produccion

No sustituir la web actual hasta que Notion, formulario, redirecciones, recargas
directas, metadatos y comparacion visual hayan sido validados en el servidor de
pruebas. La compilacion correcta por si sola no autoriza el cambio.
