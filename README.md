# r-vis.io

Portfolio site for **r—vis**: a Next.js app that loads project and homepage content from [Sanity](https://www.sanity.io/), with smooth scrolling (Lenis), page transitions (Motion), and deployment-oriented extras (sitemap generation, Vercel Speed Insights).

**Live site:** [https://r-vis.io](https://r-vis.io)

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | CSS (global stylesheets) |
| CMS | Sanity (`@sanity/client`) — server-side fetch for project pages, client-side elsewhere |
| Motion | Motion (Framer Motion successor), Lenis smooth scroll |
| Other | React Hook Form, react-youtube |

## Repository layout

```
├── public/              # Static assets; sitemap.xml generated on build
├── scripts/
│   └── generate-sitemap.js   # Builds sitemap from Sanity project slugs
├── rvis/                # Sanity Studio (separate package.json)
│   ├── schemaTypes/     # Content models (projects, homepage items, etc.)
│   └── sanity.config.ts
└── src/
    ├── app/             # Next.js App Router pages
    │   ├── layout.js    # Root layout (metadata, Lenis, analytics)
    │   ├── template.js  # Page transition animation wrapper
    │   ├── page.js      # Home
    │   ├── about/
    │   ├── contact/
    │   ├── projects/[slug]/  # Server-side Sanity fetch + client detail view
    │   ├── test/
    │   └── not-found.js
    ├── components/
    ├── sanity/client.js # Sanity client (project id + dataset)
    └── styles/
```

## Prerequisites

- **Node.js** (LTS recommended) and **npm**

## Frontend (this folder)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build, then generates `public/sitemap.xml` |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run generate-sitemap` | Write `public/sitemap.xml` from Sanity project URLs |

The sitemap script assumes the production base URL `https://r-vis.io`. Adjust `baseUrl` in `scripts/generate-sitemap.js` if you deploy elsewhere.

### Sanity connection

The Sanity client is configured in `src/sanity/client.js` (project ID, dataset, API version). The dataset uses **public** read access for anonymous fetches — no API token is needed in the frontend.

Project detail pages (`/projects/[slug]`) are **server-rendered**: the page component fetches from Sanity on the server and passes data to a client component, giving you SEO-friendly HTML without exposing queries in the browser.

## Content studio (`rvis/`)

The Sanity Studio lives in `rvis/` as its own package. To run it locally:

```bash
cd rvis
npm install
npm run dev
```

Typical Studio commands (see `rvis/package.json`):

- `npm run dev` — local Sanity Studio
- `npm run build` — build the studio
- `npm run deploy` — deploy the studio (Sanity hosting)

Schema definitions are under `rvis/schemaTypes/`.

## Deployment notes

- **Build:** `npm run build` produces the `.next` bundle and refreshes `public/sitemap.xml` for SEO.
- **Vercel:** `@vercel/speed-insights` is wired in the root layout for production analytics. Deploy as a standard Next.js project on Vercel with zero extra config.

## License

Private project (`private: true` in `package.json`).
