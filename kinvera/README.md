# Kinvera Website V2

A premium Vite/React landing page for Kinvera, positioned around:

**Home, looked after.**

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Netlify settings

If this project folder is named `kinvera` inside the GitHub repo:

```txt
Base directory: kinvera
Build command: npm run build
Publish directory: dist
Functions directory: leave blank
```

## Important

The file must be named:

```txt
index.html
```

not `index.md`.

## Netlify Form

The early access form uses Netlify Forms:

```html
<form name="kinvera-interest" method="POST" data-netlify="true">
```

Form submissions should appear in Netlify under **Forms** after the first successful deploy.

## Main files

- `index.html`
- `package.json`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles.css`
