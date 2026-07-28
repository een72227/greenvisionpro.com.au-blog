# Green Vision Pro Australia — Blog & Marketing Site

A production-grade, SEO/GEO-optimised Next.js 15 blog and marketing website for **Green Vision
Pro Australia**, a Victorian Energy Upgrades (VEU) accredited provider.

Built with the App Router, TypeScript, Tailwind CSS, MDX content, Framer Motion and full
schema.org structured data.

---

## ✨ What's included

- **Pages**: Home, Blog, Blog Category, Single Article, About, Contact, FAQ, Privacy Policy,
  Terms, custom 404
- **7 long-form MDX articles** covering the VEU program, reverse cycle heating & cooling, heat
  pump hot water, water-saving showerheads, weather sealing, energy saving tips and
  sustainability — written in Australian English with compliant, non-overpromising language
- **SEO**: dynamic metadata, OpenGraph/Twitter cards, canonical URLs, `sitemap.xml`,
  `robots.txt`, and JSON-LD for Organization, LocalBusiness, Website, Breadcrumb, Article and FAQ
  schema
- **GEO (Generative Engine Optimisation)**: direct-answer summary blocks, Q&A sections, FAQ
  schema, and semantic heading structure aimed at helping AI answer engines (ChatGPT, Google AI
  Overviews, Gemini, Claude, Perplexity) understand and cite the content accurately
- **UI**: sticky header, animated hero with a custom efficiency gauge, glassmorphism/gradient
  accents, hover animations via Framer Motion, reading progress bar, sticky table of contents,
  FAQ accordions, search + category filtering, newsletter capture, floating CTA
- **Accessibility**: semantic landmarks, skip link, visible focus states, reduced-motion support

## 🧱 Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · MDX (`next-mdx-remote`) · Framer Motion ·
Lucide Icons · `@tailwindcss/typography`

## 📁 Project structure

```
greenvisionpro-blog/
├── app/                    # App Router pages, layouts, sitemap, robots
│   ├── blog/
│   │   ├── [slug]/         # Single article page
│   │   ├── category/[category]/
│   │   └── page.tsx        # Blog listing
│   ├── about/ contact/ faq/ privacy-policy/ terms/
│   ├── layout.tsx  page.tsx  not-found.tsx  loading.tsx
│   ├── sitemap.ts  robots.ts
├── components/              # All UI components (Navbar, Hero, ArticleCard, etc.)
├── content/blog/             # MDX article source files
├── data/                    # Site-wide constants (nav, categories, business info)
├── lib/                     # Article data layer, schema.org generators, utilities
├── types/                   # Shared TypeScript types
├── public/                  # Static assets (images, icons)
└── styles/globals.css        # Tailwind layer + design tokens
```

## 🚀 Installation

**Requirements**: Node.js 18.18+ and npm (or pnpm/yarn).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # run the production build locally
npm run lint       # ESLint
npm run format     # Prettier
```

## ✍️ Adding a new blog article

1. Create a new file in `content/blog/your-article-slug.mdx`.
2. Add frontmatter matching the shape in `types/index.ts` (`ArticleFrontmatter`):

```mdx
---
title: "Your Article Title"
slug: "your-article-slug"
description: "One or two sentence summary for previews and meta description."
category: "Energy Saving Tips"
publishedAt: "2026-04-01"
author: "Green Vision Pro Team"
authorRole: "Accredited VEU Provider"
heroImage: "/images/articles/your-image.svg"
heroImageAlt: "Descriptive alt text"
tags: ["tag-one", "tag-two"]
featured: false
faqs:
  - question: "A relevant question?"
    answer: "A clear, direct answer."
---

## Summary

...
```

3. Use `##` and `###` headings — they're automatically picked up for the sticky table of
   contents.
4. `category` must exactly match one of the names in `data/site.ts` → `categories`.

## 🖼️ Replacing placeholder imagery

Article covers, the logo and the OpenGraph image ship as branded SVG placeholders in
`public/images/`. Replace them with real photography (`.jpg`/`.webp`) and update the
`heroImage` fields in each MDX file's frontmatter — `next/image` and the OpenGraph metadata will
pick up the new files automatically.

## 🎨 Brand tokens

Colours, fonts and shadows are defined once in `tailwind.config.ts`:

| Token | Value |
|---|---|
| `primary` | `#2E7D32` |
| `secondary` | `#66BB6A` |
| Display font | Poppins (`font-display`) |
| Body font | Inter (`font-body`) |

## ⚖️ Compliance note

All copy on this site follows a deliberately careful tone around program eligibility — using
language such as *"eligible Victorian households may qualify..."* rather than promising
guaranteed savings or free upgrades to everyone. Please keep this tone when adding new content,
in line with Victorian Energy Upgrades program advertising expectations.

## 📦 Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for full Vercel and GitHub Pages guides.

Quick start for Vercel:

```bash
npm install -g vercel
vercel
```

---

© Green Vision Pro Australia. Built for demonstration/starter purposes — replace placeholder
contact details, ABN, and imagery with real business information before going live.
