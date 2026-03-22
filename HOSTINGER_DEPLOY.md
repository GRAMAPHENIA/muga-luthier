# Deploy en Hostinger

Este proyecto ya esta configurado para export estatico con Next.js (`output: "export"`).

## 1) Build local

```bash
pnpm install
pnpm build
```

Al terminar, se genera la carpeta `out/`.

## 2) Subida a Hostinger

1. Entrar a **hPanel** -> **File Manager**.
2. Ir a `public_html/` del dominio.
3. Borrar contenido viejo (si corresponde).
4. Subir **todo el contenido de `out/`** (no la carpeta `out` completa, sino su contenido).

## 3) URLs limpias

Se incluye `public/.htaccess`, que se copia automaticamente al export y ayuda a resolver rutas limpias (por ejemplo `/galeria`).

## 4) Verificacion rapida

- `/`
- `/galeria`
- `/instrumentos`
- `/reparaciones`
- `/taller`
- `/acerca-de`
- `/en`

Si alguna ruta devuelve 404, confirmar que el `.htaccess` este presente en `public_html/`.
