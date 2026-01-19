---
description: Sincronizar repositorio con GitHub
---

# Sincronizar repositorio

Este workflow describe los pasos para mantener tu repositorio local actualizado con los cambios en GitHub y subir tus propios cambios.

## Pasos

// turbo
1. Actualizar repositorio local (Pull)
   ```powershell
   git pull origin main
   ```

2. Ver estado de los cambios
   ```powershell
   git status
   ```

3. Subir cambios locales (Push)
   > [!NOTE]
   > Solo ejecuta estos comandos si tienes cambios que quieras subir.
   
   ```powershell
   git add .
   git commit -m "Actualización desde el asistente"
   git push origin main
   ```
