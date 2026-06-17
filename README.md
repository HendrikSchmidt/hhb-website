# hhb architekten Website

Static portfolio website for hhb architekten GmbH, built with [Astro](https://astro.build).

## Development

```sh
pnpm install
pnpm dev        # dev server at http://localhost:4321
pnpm build      # production build → ./dist
pnpm preview    # preview build locally
```

## Adding a project

Create a new file in `src/content/projects/` following this template:

```md
---
title: "Projekttitel"
category: "wohnen"   # gewerbe | hotel | buero | wohnen
location: "Straße, Stadt"
year: "2020–2023"
type: "Wohngebäude"
facts:
  - "Fakt 1"
  - "Fakt 2"
cover: "/images/projects/mein-projekt/cover.jpg"
images:
  - "/images/projects/mein-projekt/bild-02.jpg"
order: 1   # controls sort order within the category
---

Beschreibung des Projekts als Markdown-Text.
```

Put the images in `public/images/projects/<projekt-slug>/`.

## Site structure

```
/                              Landing page (6 tiles)
/hhb                           hhb
/kontakt                       Kontakt
/impressum                     Impressum & Datenschutz
/projekte/gewerbe              Project list
/projekte/hotel
/projekte/buero
/projekte/wohnen
/projekte/<kategorie>/<slug>   Project detail
```

## GitHub Pages deployment

The site deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

**Custom domain (production):** `public/CNAME` contains `hhb-architekten.de`. The workflow builds with `base: '/'`.

**Project-page testing (subpath):** Change `BASE_PATH: /` to `BASE_PATH: /hhb-website` in the workflow, and remove/comment the `CNAME` file for that build. All internal links use `import.meta.env.BASE_URL` via `src/lib/url.ts`, so they resolve correctly under any base path.
