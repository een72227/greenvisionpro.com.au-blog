# Deployment Guide

This project deploys cleanly to **Vercel** (recommended, zero config) and can also be deployed
to **GitHub Pages** as a static export with a few adjustments described below.

---

## Option A — Vercel (recommended)

Vercel is built by the creators of Next.js and supports every feature used in this project
(dynamic metadata routes, server components, image optimisation) with no extra configuration.

### Via the Vercel dashboard

1. Push this repository to GitHub, GitLab or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `next build` (default) — Output directory: `.next` (default).
5. Click **Deploy**. Vercel will build and give you a live URL, plus automatic preview
   deployments for every pull request.

### Via the CLI

```bash
npm install -g vercel
vercel login
vercel          # deploy a preview
vercel --prod    # deploy to production
```

### Environment/domain setup

- Add your custom domain (`greenvisionpro.com.au`) under **Project → Settings → Domains**.
- Update `site.url` in `data/site.ts` to match your production domain if it changes — this value
  feeds canonical URLs, OpenGraph tags and the sitemap.

---

## Option B — GitHub Pages (static export)

GitHub Pages only serves static files, so a few things behave differently there compared to
Vercel:

- The newsletter and contact forms are demo-only (client-side state) either way, so no server is
  required for them.
- `app/sitemap.ts` and `app/robots.ts` still work, since Next.js pre-renders them to static
  files at build time.
- The category page's `?page=` query-string pagination relies on reading `searchParams` on the
  server. With a static export this resolves once at build time, so **remove or simplify
  pagination** on `/blog/category/[category]` before exporting (e.g. render all articles for
  smaller catalogs, or switch that page to a client component using the same pattern as
  `BlogExplorer`).

### Steps

1. In `next.config.ts`, add static export mode:

   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true }, // GitHub Pages can't run the Next.js image optimizer
     // ...keep the rest of your existing config
   };
   ```

2. Build and export:

   ```bash
   npm run build
   ```

   Static files will be output to the `out/` directory.

3. Add a `.nojekyll` file so GitHub Pages doesn't ignore files starting with `_`:

   ```bash
   touch out/.nojekyll
   ```

4. Push the contents of `out/` to a `gh-pages` branch (or use the
   [`actions/deploy-pages`](https://github.com/actions/deploy-pages) GitHub Action) and enable
   GitHub Pages in **Repository → Settings → Pages**, pointing at that branch.

5. If deploying to a project page (`username.github.io/repo-name`), set `basePath` in
   `next.config.ts`:

   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     basePath: "/repo-name",
   };
   ```

---

## Post-deploy checklist

- [ ] Update `site.url`, `site.phone`, `site.email` and `site.address` in `data/site.ts`
- [ ] Replace placeholder SVG imagery in `public/images/` with real photography
- [ ] Replace the ABN placeholder in `components/Footer.tsx`
- [ ] Point DNS for `greenvisionpro.com.au` at your hosting provider
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Run Lighthouse in production to confirm performance/accessibility scores
