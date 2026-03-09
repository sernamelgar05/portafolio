# Portafolio de Víctor Rafael Serna Melgar (Angular)

Portafolio en Angular con diseño tipo landing y despliegue automático en GitHub Pages.

## Ejecutar en local

```bash
npm install
npm start
```

## Build producción

```bash
npm run build
```

## Deploy automático en GitHub Pages

Este repo incluye el workflow `.github/workflows/deploy.yml` que publica automáticamente al hacer push.

1. Sube el proyecto a un repo llamado **`portafolio`** en tu cuenta de GitHub.
2. Ve a **Settings → Pages** y en **Source** selecciona **GitHub Actions**.
3. Haz push a la rama principal (`main`, `master` o `work`).
4. Al acabar el workflow, tu web quedará pública en:

```text
https://TU-USUARIO.github.io/portafolio/
```

> Si tu repositorio usa otro nombre, actualiza el `--base-href /portafolio/` del workflow y el script de deploy.


## Solución de problemas de deploy

Si GitHub Actions muestra el error de lockfile faltante (`package-lock.json`), este proyecto ya usa `npm install` en el workflow para evitar ese bloqueo en el primer despliegue.
