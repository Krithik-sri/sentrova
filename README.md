# Sentrova — marketing website (demo)

A complete, single-page marketing site for **Sentrova**, the (fictional) control plane
for enterprise AI agents — an AI gateway for governance, security, and compliance.

> **Demo note:** Sentrova is a fictional company created for demonstration purposes.
> All metrics, testimonials, ratings, and the founder persona are illustrative.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Comprehensive landing page (semantic, SEO-optimized, JSON-LD) |
| `styles.css` | Enterprise navy/gold visual system, fully responsive |
| `script.js` | Mobile nav, scroll reveal, FAQ accordion, animated stat counters |
| `robots.txt` | Crawl directives + sitemap reference |
| `sitemap.xml` | Sitemap for the `sentrova.space` domain |
| `README.md` | This file |

## Preview locally

From this directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Highlights

- **SEO:** unique keyword-rich title + meta description, canonical, Open Graph &
  Twitter cards, and four JSON-LD blocks (`Organization`, `WebSite`,
  `SoftwareApplication`, `FAQPage` matching the visible FAQ).
- **Accessibility:** single `<h1>`, semantic landmarks, skip link, focus styles,
  ARIA on the mobile nav and FAQ accordion, `alt`/`aria-label`/`<title>` on SVGs,
  and `prefers-reduced-motion` support.
- **Self-contained:** no build step and no dependencies except Google Fonts
  (Sora + Inter, loaded with `preconnect`). All icons, the architecture diagram,
  compliance badges, and the founder monogram are inline SVG.

## Notes for going live

- Replace `https://sentrova.space/og.png` with a real 1200×630 social image.
- Wire the `Request access` / `Talk to sales` CTAs to your real form or CRM
  (they currently link to `mailto:` and the `#contact` band).
- Update social profile URLs in the footer and `Organization` JSON-LD.
