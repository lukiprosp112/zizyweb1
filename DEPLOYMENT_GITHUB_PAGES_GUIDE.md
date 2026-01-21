# 🚀 Guía de Deployment y Verificación - GitHub Pages

## Paso 1: Verificar Configuración de GitHub

### En tu repositorio de GitHub:

1. Ve a **Settings** → **Pages**
2. Verifica que esté configurado:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (o `master`)
   - **Folder:** `/ (root)`
   - **Custom domain:** `zzyworks.com` (si deseas)

### En Settings → Environments:

1. Deberías tener un environment llamado `github-pages`
2. Este se crea automáticamente al hacer push

---

## Paso 2: Configurar el Dominio (Opcional pero Recomendado)

Si quieres que `zzyworks.com` apunte directamente a tu sitio:

### En tu proveedor de dominio:

Añade estos registros DNS:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: tu-usuario.github.io
```

O más simple - un registro CNAME:

```
Type: CNAME
Name: @
Value: tu-usuario.github.io
```

### En GitHub:

1. Settings → Pages → Custom domain
2. Introduce: `zzyworks.com`
3. Marca "Enforce HTTPS"

GitHub creará automáticamente un archivo `CNAME` en la rama `gh-pages`

---

## Paso 3: Hacer Push a GitHub

```bash
# En tu terminal local
cd c:\Users\pc\Downloads\zizyweb1

# Agregar cambios
git add .

# Commit
git commit -m "Agregar cumplimiento legal (RGPD, LSSI-CE, cookies) y mejorar GitHub Actions"

# Push a main
git push origin main
```

---

## Paso 4: Monitorear el Deploy

### En GitHub - Actions Tab:

1. Ve a tu repositorio
2. Click en **Actions**
3. Verás el workflow "Deploy to GitHub Pages" ejecutándose

**Estados esperados:**
- 🟡 **Yellow/Running:** El build está en progreso
- ✅ **Green:** Build y deploy completados exitosamente
- ❌ **Red:** Error en build o deploy

### En el workflow:

Verás dos jobs:
1. **build** - Compila tu proyecto (npm run build)
2. **deploy** - Sube el contenido a GitHub Pages

---

## Paso 5: Verificar el Sitio Vivo

Espera 30-60 segundos después de que el deploy sea verde.

**URL esperada:**
- Si NO tienes dominio personalizado: `https://tu-usuario.github.io`
- Si tienes `zzyworks.com`: `https://zzyworks.com`

### Checks que debes hacer:

1. ✅ El sitio carga correctamente
2. ✅ Los links funcionan
3. ✅ Las políticas legales se abren en los modales
4. ✅ No hay errores en la consola del navegador (F12)
5. ✅ Los estilos están correctos (no hay FOUC)

---

## Paso 6: Solucionar Problemas (Si aparecen ❌)

### Error común: Build falló

**Síntomas:** ❌ El job "build" es rojo

**Soluciones:**

```bash
# 1. Verifica que el package.json tenga script build
npm run build  # Prueba localmente

# 2. Revisa el output del error en GitHub Actions
# Haz click en el workflow → build job → ver logs

# 3. Errores típicos:
# - TypeScript errors: Corregir types
# - Import errors: Verificar rutas
# - Missing dependencies: npm install
```

### Error común: Deploy falló

**Síntomas:** ✅ Build verde, pero ❌ deploy rojo

**Soluciones:**

```bash
# 1. Verifica que exista carpeta 'dist'
# (El build debe crearla)

# 2. En GitHub Settings → Pages
#    - Verifica que el environment `github-pages` existe
#    - Verifica permisos de workflow
```

### Error: Sitio no accesible

**Si ves 404:**

1. Espera 1-2 minutos más (GitHub tarda a veces)
2. Hard refresh: `Ctrl+Shift+R` (o Cmd+Shift+R en Mac)
3. Verifica que el dominio está configurado correctamente
4. Revisa los registros DNS (pueden tardar 24h en propagar)

---

## Verificar que Todo Funciona

### Test de Políticas Legales:

```
1. Abre https://zzyworks.com
2. Ve al footer
3. Click en "Aviso Legal" → Se abre modal
4. Click en "Política de Privacidad" → Se abre modal
5. Click en "Política de Cookies" → Se abre modal
6. Cierra el modal (X o fuera del modal)
```

### Test de SEO:

```
1. Click derecho → Inspeccionar
2. Verifica en <head>:
   - <title>zzyworks.com - Desarrollo Web...</title>
   - <meta name="description" content="zzyworks.com: ...
   - <html lang="es">
3. Abre Google Search Console
4. Verifica que aparece tu sitio
```

---

## Workflow YAML Explicado

Tu archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

# Se ejecuta en:
on:
  push:
    branches:
      - main      # Tu rama principal
      - master    # Alternativa

# Permisos necesarios para el workflow
permissions:
  contents: read           # Leer el repo
  pages: write            # Escribir en Pages
  id-token: write         # Generar JWT para deploy

# Evita ejecuciones simultáneas
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Job 1: Compilar el proyecto
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4           # Descargar repo
      - uses: actions/setup-node@v4         # Instalar Node.js 20
        with:
          node-version: 20
          cache: 'npm'                      # Cachear dependencias
      - run: npm ci                         # Instalar deps
      - run: npm run build                  # Compilar (crea /dist)
      - uses: actions/upload-pages-artifact@v3  # Subir /dist
        with:
          path: './dist'

  # Job 2: Desplegar en Pages
  deploy:
    needs: build                            # Espera a que build termine
    if: github.event_name == 'push' && (github.ref == 'refs/heads/main' || github.ref == 'refs/heads/master')
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4      # Deploy oficial de GitHub
        id: deployment
```

---

## Desactivar Checks Innecesarios

Si ves ❌ en tu repositorio que no son del workflow:

### En Settings → Branches → Branch protection:

Si hay reglas de protección que causan problemas:
1. Deshabilita temporalmente
2. Haz el push
3. Reactiva si es necesario

---

## Monitoreo Continuo

### Una vez funcione:

Cada vez que hagas push a `main`:

```bash
git add .
git commit -m "Cambios"
git push origin main
```

El workflow se ejecutará **automáticamente**:
1. Build en ~2 minutos
2. Deploy en ~30 segundos
3. Sitio live

---

## Rollback (Si algo sale mal)

Si necesitas volver a una versión anterior:

```bash
# Ver commits anteriores
git log --oneline

# Volver a un commit anterior
git revert <commit-hash>

# O simplemente edita el archivo que salió mal
# y haz push de nuevo
```

---

## Checklist Final

- [ ] Repositorio tiene rama `main`
- [ ] GitHub Actions workflow existe en `.github/workflows/deploy.yml`
- [ ] Settings → Pages está configurado
- [ ] El build corre sin errores (green ✅)
- [ ] El deploy se ejecuta (green ✅)
- [ ] Sitio es accesible en tu URL
- [ ] Políticas legales se abren correctamente
- [ ] Meta tags son visibles en el HTML
- [ ] No hay errores en consola (F12)
- [ ] HTTPS está activo (se ve candado 🔒)

---

## Soporte Adicional

Si tienes problemas:

1. **Verifica logs de GitHub Actions:**
   - Settings → Actions → Workflow runs
   - Click en el run fallido
   - Ve a "Deploy to GitHub Pages"
   - Abre los logs detallados

2. **Verifica package.json:**
   - Tiene script `build`?
   - Todas las dependencias están instaladas?

3. **Verifica vite.config.ts:**
   - Si tienes ruta personalizada, actualiza en GitHub Pages

---

**¿Preguntas? Revisa:** [GitHub Pages Documentation](https://docs.github.com/es/pages)

