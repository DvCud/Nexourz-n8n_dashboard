# Embedding the n8n Workflow Galaxy Dashboard

This document describes how to embed the 3D Workflow Galaxy dashboard into another website.

---

## Method 1: iframe Embed (Recommended)

The simplest approach. The dashboard runs as a standalone app and is loaded via an `<iframe>` in your site.

### Basic Usage

```html
<iframe
  src="https://your-deployment-url.vercel.app/embed"
  width="100%"
  height="600"
  style="border: none; border-radius: 12px;"
  allow="autoplay"
  loading="lazy"
  title="n8n Workflow Galaxy"
></iframe>
```

### With Customization (Query Parameters)

| Parameter      | Values                     | Default  | Description                          |
|----------------|----------------------------|----------|--------------------------------------|
| `autoRotate`   | `true` / `false`           | `true`   | Auto-rotate the galaxy scene         |
| `showLabels`   | `true` / `false`           | `true`   | Show category labels in 3D space     |
| `particles`    | `low` / `medium` / `high`  | `medium` | Particle density for background      |
| `showControls` | `true` / `false`           | `false`  | Show drag/zoom/click hint bar        |

**Example with parameters:**

```html
<iframe
  src="https://your-deployment-url.vercel.app/embed?autoRotate=true&showLabels=false&particles=high&showControls=true"
  width="100%"
  height="600"
  style="border: none; border-radius: 12px;"
  allow="autoplay"
  loading="lazy"
  title="n8n Workflow Galaxy"
></iframe>
```

### Responsive Wrapper

```html
<div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden; border-radius: 12px;">
  <iframe
    src="https://your-deployment-url.vercel.app/embed"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="autoplay"
    loading="lazy"
    title="n8n Workflow Galaxy"
  ></iframe>
</div>
```

---

## Method 2: Static Export

Build the project as a static export and serve the files directly from your own domain.

```bash
# In next.config.ts, add:
# output: 'export'

npm run build
# Output will be in the 'out' directory
# Serve these files from any static host or subdirectory
```

> **Note:** Static export disables API routes. The dashboard will only work if workflow data is pre-fetched or the Supabase client calls are made directly from the browser.

---

## Method 3: Micro-Frontend (Advanced)

Deploy the dashboard as a standalone service and load it via Module Federation or a simple script tag approach.

1. Deploy the dashboard to its own domain (e.g., `dashboard.yourdomain.com`)
2. Use a reverse proxy or Module Federation to compose it into your main application
3. The `/embed` route is designed for this use case — minimal chrome, configurable via query params

---

## Architecture Notes

- **3D Rendering**: React Three Fiber (`@react-three/fiber`) wrapping Three.js
- **State**: Zustand store with `localStorage` persistence for settings
- **Data**: Supabase for workflow metadata, with API route caching
- **Styling**: Tailwind CSS 4 with custom glassmorphism design tokens in `globals.css`
- **Post-processing**: Bloom + Vignette via `@react-three/postprocessing`

### Key Routes

| Route    | Purpose                              |
|----------|--------------------------------------|
| `/`      | Full dashboard with navigation & UI  |
| `/embed` | Minimal 3D scene for iframe embedding |
