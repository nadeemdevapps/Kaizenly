# KaiZenly+ — Marketing Website (Internal Developer Guide)

> **This file is an internal developer reference.** It is not published on the live site.
> Public-facing machine-readable info lives at `/llms.txt`, `/llms-full.txt`, and `/app-data.json`.

**Live site:** https://kaizenly.qzz.io/

---

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| [Node.js](https://nodejs.org/) | 18+ (LTS recommended) | Required for Astro and the build tooling |
| npm | Bundled with Node.js | Used for dependency management |
| Git | Any recent version | To clone and manage the repository |

> [!NOTE]
> No other global tools, frameworks, or environment variables are needed. The project uses plain Astro with zero client-side frameworks.

---

## Clone & Setup

```bash
# 1. Clone the repository (private — you need access)
git clone https://github.com/nadeemdevapps/Kaizenly_web.git
cd Kaizenly_web

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → opens at http://localhost:4321/

# 4. Build for production (static HTML output → ./dist)
npm run build

# 5. Preview the production build locally
npm run preview
# → serves ./dist at http://localhost:4321/
```

> [!IMPORTANT]
> The repository is **private**. You need to be added as a collaborator on GitHub to clone it.
> Contact: kaizenlyplus@gmail.com

---

## Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the Astro dev server with hot reload (`http://localhost:4321/`) |
| `npm run build` | Generates the full static site into `./dist` |
| `npm run preview` | Serves the built `./dist` folder locally for testing |

### Utility Scripts (run manually when needed)

```bash
node scripts/process-screenshots.mjs   # copies + privacy-masks screenshots into public/screenshots
node scripts/build-assets.mjs          # generates og-image.png + PNG icons
node scripts/check-links.mjs           # verifies no broken internal links (run after build)
```

---

## Project Structure

```
kaizenly/
├── src/
│   ├── config.mjs              # origin + base path — SINGLE SOURCE OF TRUTH for all URLs
│   ├── data/
│   │   ├── app.mjs             # all verified app facts, features, permissions, FAQ, positioning
│   │   └── screenshots.mjs     # categorized screenshot library with alt text
│   ├── layouts/
│   │   └── Base.astro          # <head>, SEO meta, OG/Twitter, JSON-LD, theme toggle, header/footer
│   ├── components/
│   │   ├── Header.astro        # navigation with mobile hamburger
│   │   ├── Footer.astro        # footer links + email
│   │   ├── DownloadCta.astro   # "Coming soon" / "Get it on Google Play" button (config-driven)
│   │   ├── Phone.astro         # phone frame for screenshot display
│   │   └── Shot.astro          # single screenshot component
│   ├── pages/                  # all routes (see Routes section below)
│   └── styles/
│       └── global.css          # monochrome design system (EB Garamond + Inter)
├── public/
│   ├── screenshots/            # optimized WebP screenshots used by the site (~55 files)
│   ├── favicon.svg             # KaiZenly+ sprout-K mark
│   ├── favicon.ico
│   ├── icon-32.png, icon-48.png, icon-180.png, icon-192.png, icon-512.png
│   ├── og-image.png            # OpenGraph share image (1200×630)
│   ├── site.webmanifest        # PWA manifest
│   └── google3f557a9ea09902b1.html  # Google Search Console verification
├── scripts/                    # screenshot masking, asset generation, link checking
├── _raw_screens/               # raw screenshot masters (NOT published, gitignored)
├── netlify.toml                # Netlify build config, 301 redirects, security headers
├── astro.config.mjs            # Astro config (imports from src/config.mjs)
├── package.json
├── tsconfig.json
└── dist/                       # build output (gitignored)
```

---

## Routes

### Pages

| Path | Description |
|------|-------------|
| `/` | Home — hero, trust strip, feature cards, CTA |
| `/features/` | All features overview |
| `/zen-shield/` | Focus timer, app blocking, allowed apps, scheduling, bedtime mode |
| `/habits/` | Habit tracking details |
| `/journal/` | Journal & mood tracking |
| `/insights/` | On-device insights & analytics |
| `/backup/` | Local + Google Drive backup |
| `/compare/` | KaiZenly+ vs timer-based lock apps (e.g. Blockit) |
| `/design/` | Design philosophy (calm, monochrome UI) |
| `/privacy/` | Privacy overview |
| `/privacy-policy/` | Formal privacy policy |
| `/terms/` | Terms & conditions |
| `/data-safety/` | Data safety declaration (mirrors Play Store form) |
| `/permissions/` | Android permissions explained |
| `/screenshots/` | Full screenshot gallery |
| `/why-kaizenly/` | Why choose KaiZenly+ |
| `/use-cases/students/` | Use case: students |
| `/use-cases/professionals/` | Use case: professionals |
| `/about/` | About the founder |
| `/faq/` | Frequently asked questions |
| `/download/` | Download / "Coming soon" page |
| `/404` | Custom 404 error page |

### Machine-Readable Endpoints

| Path | Purpose |
|------|---------|
| `/llms.txt` | Short LLM/AI-friendly app summary |
| `/llms-full.txt` | Extended LLM summary with feature details |
| `/app-data.json` | Structured JSON app data for programmatic consumption |
| `/robots.txt` | Crawler directives + sitemap reference |
| `/sitemap.xml` | Full sitemap for search engines |

---

## Changing the Domain (One Place Only)

All URLs across the entire site (canonical, sitemap, OG tags, JSON-LD, llms.txt, robots.txt) are derived from **one file**: `src/config.mjs`.

```js
// Current — Netlify
origin: 'https://kaizenly.qzz.io',
base: '',

// Future — just change origin:
// origin: 'https://kaizenly.app',
// base: '',
```

After changing, rebuild and redeploy. No other file needs editing.

---

## Deploy to Netlify

### Automatic (recommended)

1. Connect the GitHub repo to Netlify.
2. Netlify reads `netlify.toml` automatically for build settings.
3. No environment variables needed.

### Manual (drag-drop)

1. Run `npm run build` locally.
2. Drag the `dist/` folder into the Netlify dashboard.

### Netlify Config Summary

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 18+ (Netlify default is fine) |
| Environment variables | None required |

### What `netlify.toml` Does

- **Security headers**: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`
- **Asset caching**: `/assets/*` gets `Cache-Control: public, max-age=31536000, immutable`

### After Deployment

- Submit `https://kaizenly.qzz.io/sitemap.xml` to Google Search Console
- The `google3f557a9ea09902b1.html` verification file deploys to root automatically

---

## Distribution ("Coming Soon" → Google Play)

The app is **not publicly distributed yet**. Every download button is controlled by a single config in `src/data/app.mjs`:

```js
export const download = {
  live: false,                 // flip to true when Play Store listing goes live
  playStoreUrl: '',            // e.g. 'https://play.google.com/store/apps/details?id=app.kaizenly'
  comingSoonLabel: 'Coming soon',
  liveLabel: 'Get it on Google Play',
};
```

- While `live: false` → all CTAs show a non-clickable **"Coming soon"** button.
- Set `live: true` + fill `playStoreUrl` → all buttons become **"Get it on Google Play"** links.
- No per-page edits needed.

> [!WARNING]
> Do not add a Play Store badge, rating, review count, or download count until the listing is actually published.



## Content & Honesty Rules

These rules are baked into the project and must be followed:

1. **No fake claims** — no fabricated reviews, ratings, download counts, or Play Store badges.
2. **Not open source** — the repository is private, all rights reserved. Never describe it as open source.
3. **Security framing** — describe security positively (data is encrypted, backups are encrypted). Do not name specific algorithms (app is closed source).
4. **No "end-to-end encrypted"** or "military-grade" claims.
5. **Future features** — AI / backend / MCP features are mentioned only as possibilities, never as current features.
6. **Privacy-first positioning** — KaiZenly+ is local-first with no developer server, no mandatory login, no tracking. This is the core identity.
7. **Screenshots** — backup screenshots with visible Google account emails are privacy-masked by `scripts/process-screenshots.mjs`. Screenshot 48 was excluded entirely.
8. **Comparisons** — when comparing to apps like Blockit, keep it factual and fair, never disparaging.

---

## Future Screenshot TODOs — Unified Journal + Habit Sync

The website now contains full marketing copy for unified Journal + Habit sync. Some newer app states still need fresh screenshots when they are available. When the user provides them, replace the placeholder cards on `/journal/` and update `src/data/screenshots.mjs`, `src/data/screenshot-dims.json`, and the relevant page galleries.

### Needed screenshots

| Slot | Target page | What the screenshot should show | Suggested filename | Suggested alt text |
|------|-------------|----------------------------------|--------------------|--------------------|
| Synced daily timeline | `/journal/`, `/screenshots/` | A saved Daily log with a linked Journal activity chip and a separate `Habit done` section | `61_journal_synced_timeline.webp` | `Journal daily log showing a synced activity and a separate Habit done section` |
| Linked Count control | `/journal/`, `/blog/unified-daily-records/` if screenshots are added there later | Journal composer with a linked Count habit sheet open, showing plus, minus, reset, and done controls | `62_journal_linked_count_control.webp` | `Journal linked Count control showing exact daily progress controls` |
| Synced Scale rating | `/journal/`, `/habits/`, `/screenshots/` | A Scale habit value reflected inside the Journal scale section or saved daily record | `63_journal_synced_scale_rating.webp` | `Journal scale section showing a synced Scale habit rating` |

### Replacement workflow

1. Put the final screenshot in `public/screenshots/` using the suggested filename.
2. Add the real dimensions to `src/data/screenshot-dims.json`.
3. Add the screenshot to the right category in `src/data/screenshots.mjs`.
4. Replace the placeholder card in `src/pages/journal.astro` with `Shot` or `Phone` once the screenshot is ready.
5. Run `npm run build`; then run `node scripts/check-links.mjs` if the build succeeds.

### Current new screenshots already added

| File | Shows |
|------|-------|
| `58_habit_journal_sync_no_sync.jpg` | Habit setup with Journal sync turned off for an independent habit |
| `59_habit_journal_sync_existing.jpg` | Habit setup with an existing Journal activity link |
| `60_habit_journal_sync_new.jpg` | Habit setup creating and linking a new Journal activity |
