# r-vis.io

Portfolio site for **r—vis**: a React single-page app that loads project and homepage content from [Sanity](https://www.sanity.io/), with smooth scrolling (Lenis), page transitions (Motion), and deployment-oriented extras (sitemap generation, Vercel Speed Insights).

**Live site:** [https://r-vis.io](https://r-vis.io)

## Tech stack

| Area | Choice |
|------|--------|
| UI | React 19, Create React App (`react-scripts` 5) |
| Routing | React Router 7 |
| Styling | Styled Components, Tailwind CSS 4 (PostCSS) |
| CMS | Sanity (`@sanity/client`), read-only from the app |
| Motion | Motion (Framer Motion successor), Lenis smooth scroll |
| Other | React Helmet, React Hook Form, react-youtube |

## Repository layout

```
├── public/              # Static assets; `sitemap.xml` is generated here on build
├── scripts/
│   └── generate-sitemap.js   # Builds sitemap from Sanity project slugs
├── rvis/                # Sanity Studio (separate package.json)
│   ├── schemaTypes/     # Content models (projects, homepage items, etc.)
│   └── sanity.config.ts
└── src/
    ├── components/
    ├── pages/           # Home, About, Contact, ProjectDetail, NotFound, Test
    ├── sanity/client.js # Sanity client (project id + dataset)
    └── App.js           # Routes + Lenis + Speed Insights
```

## Prerequisites

- **Node.js** (LTS recommended) and **npm**

## Frontend (this folder)

Install dependencies and start the dev server:

```bash
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Development server with hot reload |
| `npm test` | Jest / React Testing Library (watch mode) |
| `npm run build` | Production build to `build/`, then runs `generate-sitemap` |
| `npm run generate-sitemap` | Writes `public/sitemap.xml` using Sanity project URLs |
| `npm run eject` | Irreversible CRA eject (only if you need full webpack control) |

The sitemap script uses the same Sanity project as the app and assumes the production base URL `https://r-vis.io`. Adjust `baseUrl` in `scripts/generate-sitemap.js` if you deploy elsewhere.

### Sanity connection

The browser client is configured in `src/sanity/client.js` (project id, dataset, API version). The dataset is expected to be **public read** for anonymous fetches, or you would need a token-based setup and env-based config for private datasets.

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

Schema definitions are under `rvis/schemaTypes/`. The frontend queries documents such as `project` (including a special slug used for homepage items).

## Deployment notes

- **Build:** `npm run build` produces the static bundle and refreshes `public/sitemap.xml` for SEO.
- **Vercel:** `@vercel/speed-insights` is wired in `App.js` for production analytics.

## License

Private project (`private: true` in `package.json`). The `rvis` studio package is marked `UNLICENSED` in its own `package.json`.
