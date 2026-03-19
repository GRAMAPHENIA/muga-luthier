# Di Corato Luthier

Sitio web oficial del taller Di Corato Luthier: instrumentos de autor, reparaciones y contenido de taller.

## Descripcion

Proyecto frontend construido con Next.js (App Router) y Tailwind CSS, enfocado en:

- Presentacion de modelos de instrumentos (Buconero, Velluto, Eira)
- Galeria de trabajos y fotos
- Informacion del taller y servicios de reparacion
- Formulario de contacto para consultas

## Stack tecnico

- Next.js 14
- React 18
- Tailwind CSS 3
- pnpm

## Requisitos

- Node.js 18 o superior
- pnpm 9

## Instalacion

```bash
pnpm install
```

## Desarrollo local

```bash
pnpm dev
```

Abrir en: `http://localhost:3000`

## Scripts disponibles

```bash
pnpm dev     # entorno de desarrollo
pnpm build   # build de produccion
pnpm start   # levanta build de produccion
pnpm lint    # lint del proyecto
```

## Configuracion de entorno

Variable opcional para SEO/canonicals:

- `NEXT_PUBLIC_SITE_URL` (ejemplo: `https://dicorato-luthier.com`)

Si no se define, se usa el valor por defecto configurado en el proyecto.

## Rutas principales

- `/` Inicio
- `/instrumentos`
- `/instrumentos/buconero`
- `/instrumentos/velluto`
- `/instrumentos/eira`
- `/galeria`
- `/reparaciones`
- `/taller`
- `/acerca-de`

## SEO y metadata

El proyecto incluye:

- Metadata por pagina
- Open Graph / Twitter cards
- `sitemap.xml`
- `robots.txt`
- `manifest.webmanifest`
- JSON-LD en Home

## Contacto (formulario)

El formulario de contacto esta integrado con Formspree.
Para cambiar el destino, actualiza el endpoint en el componente correspondiente.

## Estructura del proyecto

```txt
src/
  app/            # rutas y paginas (App Router)
  components/     # componentes de UI y secciones
  data/           # datos de galeria/modelos
  lib/            # utilidades (SEO, helpers)
public/           # assets estaticos (imagenes, SVG, etc.)
docs/             # documentacion interna
```

## Documentacion interna

- Guia visual / wireframe: `docs/HOJA_DE_ESTILO_WIREFRAME.md`

## Deploy

El proyecto esta configurado como export estatico (`output: "export"`), por lo que puede desplegarse en hosts estaticos compatibles.
