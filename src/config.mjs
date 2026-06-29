// ---------------------------------------------------------------------------
// Single source of truth for the site origin + base path.
//
// Custom domain: origin = https://kaizenly.qzz.io , base = ''
//
// Every canonical URL, sitemap entry, OpenGraph tag, JSON-LD url and
// internal link updates automatically.
// ---------------------------------------------------------------------------

export const SITE = {
  origin: 'https://kaizenly.qzz.io',
  base: '',

  name: 'KaiZenly+',
  alternateName: 'KaiZenly Plus',
  tagline: 'Quiet the noise, reclaim your focus, and improve calmly—step by step',
  shortDescription:
    'Privacy-first Android Zen Shield focus app with app blocking, scheduled focus, allowed apps, habits, journaling, mood tracking, and routines. Local-first, no tracking.',
  twitter: '', // no handle yet
  locale: 'en',
};

// Absolute URL builder (origin + base + path) for canonical / OG / sitemap / JSON-LD.
// absUrl('/')          -> https://kaizenly.qzz.io/
// absUrl('/privacy/')  -> https://kaizenly.qzz.io/privacy/
// absUrl('/llms.txt')  -> https://kaizenly.qzz.io/llms.txt
export function absUrl(path = '/') {
  const base = `${SITE.origin}${SITE.base}`.replace(/\/$/, '');
  const p = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return `${base}${p}`;
}

// Base-prefixed path for internal links & public assets (no origin).
// withBase('/privacy/')           -> /privacy/
// withBase('screenshots/x.webp') -> /screenshots/x.webp
export function withBase(path = '/') {
  const base = SITE.base.replace(/\/$/, '');
  const p = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return `${base}${p}`;
}
