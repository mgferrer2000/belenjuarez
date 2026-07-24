# Web de Belen Juarez

El repositorio conserva dos aplicaciones completamente separadas:

- `web-astro/`: proyecto activo y unica fuente de verdad desde el cierre de la
  migracion.
- `web-react/`: copia historica de la web anterior. Se conserva como respaldo,
  pero no recibira nuevas funcionalidades ni cambios editoriales.

## Regla de trabajo

Todo cambio futuro debe realizarse en `web-astro/`. La aplicacion Astro contiene
sus propios textos, traducciones, datos, imagenes, archivos PHP y configuracion
de servidor; no importa ningun archivo desde `web-react/`.

Los recursos estan duplicados de forma intencionada. Esto permite compilar,
probar, archivar o eliminar en el futuro cualquiera de los dos proyectos sin
romper el otro.

## Comandos habituales desde la raiz

```text
npm run dev
npm run check
npm run build
npm run audit
```

Estos comandos trabajan exclusivamente con Astro. Los comandos historicos de
React siguen disponibles:

```text
npm run dev:react
npm run build:react
npm run build:all
```

Cada aplicacion conserva su propio `package.json`, `node_modules`, `public` y
`dist`. La carpeta que debe publicarse es `web-astro/dist/`.
