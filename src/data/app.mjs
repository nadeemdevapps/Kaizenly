// ---------------------------------------------------------------------------
// KaiZenly+ — single source of truth for app facts.
// Every claim here was verified against the Android project
// (README.md, DESIGN.md, AndroidManifest.xml, docs/PRIVACY.md, docs/PERMISSIONS.md,
// KaiZenly_Brand_Meaning.md). Do not add unverified claims.
// ---------------------------------------------------------------------------

export const app = {
  name: 'KaiZenly+',
  alternateName: 'KaiZenly Plus',
  tagline: 'Quiet the noise, reclaim your focus, and improve calmly—step by step',
  shortTagline: 'Small steps. Better days.',
  version: '1.0.0',
  platform: 'Android',
  minAndroid: 'Android 8.0 (API 26)',
  price: 'Free',
  contactEmail: 'kaizenlyplus@gmail.com',
  category: [
    'Productivity',
    'Focus App',
    'App Blocker',
    'Habit Tracker',
    'Journal',
    'Mood Tracker',
    'Self-improvement',
  ],
  availability: {
    status: 'Coming soon to Google Play — not yet publicly distributed',
    playStore: 'Coming soon — not yet listed',
    googleDrive: 'Optional, in testing — opt-in backup/restore to your own Drive',
  },
};

// --- Download / distribution (single source of truth) -----------------------
// The app is not distributed directly yet. When the Google Play listing goes
// live, set `live: true` and fill in `playStoreUrl` — every "Coming soon"
// button across the site will turn into a "Get it on Google Play" link.
export const download = {
  live: false,
  playStoreUrl: '', // e.g. 'https://play.google.com/store/apps/details?id=app.kaizenly'
  comingSoonLabel: 'Coming soon',
  liveLabel: 'Get it on Google Play',
};

// --- Privacy model (verified) ----------------------------------------------
export const privacy = {
  facts: [
    'No developer server and no custom backend — the app does not send your data to the developer.',
    'No mandatory login or account — normal use works fully offline.',
    'No analytics SDKs, no advertising IDs, no background tracking or reporting.',
    'All data lives on your device in an encrypted database.',
    'Local backups are encrypted and protected by a password only you know.',
    'Google Drive backup is optional and uploads an already-encrypted file to your own Drive.',
  ],
  // Things we deliberately do NOT claim:
  // - not "open source" (repo is private, all rights reserved)
  // - not "end-to-end encrypted" / "military-grade"
  // - not "zero permissions" (the app does need permissions for focus protection)
};

// --- Storage / encryption model (verified from README) ----------------------
export const storage = {
  database:
    'Your data is stored in a database on your device, and that database is encrypted. The key that unlocks it stays on your device and never leaves it.',
  preferences:
    'Local preferences (theme, onboarding state, parachute balance, schedules) are stored on the device.',
  backupFormat:
    'A backup is saved as a single encrypted file, locked with a password you choose. The backup password is never stored and cannot be recovered by the app.',
  androidAutoBackup:
    'System-level cloud backup and device transfer are turned off, so your encrypted data is never copied off the device automatically — it stays on your phone.',
};

// --- Zen Shield allowed apps (verified against the Android app policy) ------
export const allowedApps = {
  summary:
    'Zen Shield only shows installed apps that match the approved essential-app policy. It is designed for real-life essentials, not as a loophole for broad social or streaming apps.',
  examples:
    'Phone app, Messaging/SMS app, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps.',
  financeCoverage:
    'Major banking and payment apps across regions are supported where installed, without listing every bank publicly on the website.',
  request:
    'If your essential banking or productivity app is missing, request it from inside the app.',
};

// --- Permissions (verified against AndroidManifest.xml + docs/PERMISSIONS.md) -
export const permissions = [
  {
    name: 'Usage Access',
    id: 'android.permission.PACKAGE_USAGE_STATS',
    needed: 'For focus protection',
    why: 'Lets Zen Shield notice when a distracting app is opened during a focus session, and powers on-device screen-time insights. You enable it yourself in Android settings; the app cannot grant it automatically.',
  },
  {
    name: 'Accessibility Service',
    id: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
    needed: 'For focus protection',
    why: 'Used only during active focus sessions to detect blocked apps, recents, popup, and split-screen bypass attempts, then return you to Focus Space or trigger the session lock rule. It reads package and class names for enforcement — it does not read message text, passwords, keystrokes, or personal screen content.',
  },
  {
    name: 'Display over other apps',
    id: 'android.permission.SYSTEM_ALERT_WINDOW',
    needed: 'For focus protection',
    why: 'Shows the full-screen Focus / Distraction Wall over a blocked app during an active session.',
  },
  {
    name: 'Device Admin',
    id: 'android.permission.BIND_DEVICE_ADMIN',
    needed: 'Required for Zen Shield sessions',
    why: 'Required to start protected Zen Shield focus sessions. During an active session, Device Admin lets KaiZenly+ lock the device after blocked-app or bypass violations, and helps prevent uninstall-based bypass while the session is running. It is explained before Android setup opens and is not used to erase data, change passwords, or control the phone outside an active session.',
  },
  {
    name: 'Exact alarms',
    id: 'android.permission.SCHEDULE_EXACT_ALARM',
    needed: 'Reminders & session end',
    why: 'Helps local habit reminders and focus-session end alarms fire on time when Android allows exact scheduling. If exact alarms are not permitted, KaiZenly+ falls back to inexact scheduling instead of forcing the permission.',
  },
  {
    name: 'Notifications',
    id: 'android.permission.POST_NOTIFICATIONS',
    needed: 'Reminders & sessions',
    why: 'Shows habit reminders and the ongoing notification for an active Zen Shield focus session.',
  },
  {
    name: 'Foreground Service',
    id: 'android.permission.FOREGROUND_SERVICE (+ SPECIAL_USE)',
    needed: 'For focus protection',
    why: 'Keeps an active focus session running reliably with a visible ongoing notification.',
  },
  {
    name: 'Phone state (call safety)',
    id: 'android.permission.READ_PHONE_STATE',
    needed: 'Call safety',
    why: 'Lets focus mode detect an incoming call so it can step aside gracefully instead of blocking your phone during a call.',
  },
  {
    name: 'Microphone',
    id: 'android.permission.RECORD_AUDIO',
    needed: 'Only for voice notes',
    why: 'Used only when you record a voice note inside a journal entry. Recordings stay in app-private storage.',
  },
  {
    name: 'Battery optimization exemption',
    id: 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS',
    needed: 'Reliable scheduling',
    why: 'Helps scheduled Zen Shield focus, bedtime mode, and reminders run on time without the system killing them in the background.',
  },
  {
    name: 'Run at startup',
    id: 'android.permission.RECEIVE_BOOT_COMPLETED',
    needed: 'Session persistence',
    why: 'Lets an active focus session and schedules survive a device restart.',
  },
  {
    name: 'Internet',
    id: 'android.permission.INTERNET',
    needed: 'Only for Drive backup',
    why: 'Used only for optional Google account sign-in and manual Google Drive backup / restore. Normal use never needs the network.',
  },
  {
    name: 'Vibrate',
    id: 'android.permission.VIBRATE',
    needed: 'Haptics',
    why: 'Provides subtle haptic feedback, for example on focus completion.',
  },
];

// --- Feature groups (verified from README "Core Features") -------------------
export const featureGroups = [
  {
    id: 'focus',
    title: 'Zen Shield Focus',
    summary:
      'Protect your attention with scheduled, allow-list aware Zen Shield focus sessions.',
    points: [
      'A Zen Shield focus timer (screen timer): start a timed session with a full-screen Focus Space showing a live countdown, blocked-attempt counter, and your allowed apps.',
      'Zen Shield app blocking in real time via Accessibility + Usage Access + a foreground service.',
      'Allowed-apps list: keep up to 8 installed approved essentials, including Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps where available.',
      'Missing essential app request: if a legitimate banking or productivity app is not available in the picker, the user can request review from inside the app.',
      'A full-screen Distraction Wall that gently returns you to focus when you open a blocked app.',
      'Scheduled Zen Shield focus windows and a Bedtime mode that auto-activate on your chosen days and hours.',
      'A Parachute system of limited early-exit tokens (3 to start, +2 each month, capped at 3) to make ending Zen Shield focus a deliberate choice.',
      'Device Admin protected sessions that can lock the device after blocked-app or bypass violations, while emergency calls stay available.',
      'Reliable by design: sessions survive reboots, a watchdog restarts Zen Shield if the system kills it, and incoming calls are handled gracefully.',
    ],
  },
  {
    id: 'habits',
    title: 'Habits',
    summary:
      'Turn protected Zen Shield focus time into consistent daily routines.',
    points: [
      'Two habit types: simple Task (yes/no) or Count goals with targets and units.',
      'Per-habit reminders with a custom time picker, plus snooze and notification actions.',
      'Streaks, best streaks, consistency %, calendar heatmaps, and per-habit analytics.',
      'Subtasks, repeat schedules (daily / weekdays / custom), tags and categories.',
      'Starter habits seeded from the goals you pick during onboarding.',
    ],
  },
  {
    id: 'journal',
    title: 'Journal & Mood',
    summary: 'Reflect on your day with rich entries and integrated mood check-ins.',
    points: [
      'Journal entries with title, body, tags, activities, and prompt templates.',
      'Mood check-ins scored 1–5 with labels, flexible past dates, and a consistent 12-hour time picker.',
      'Optional photos and voice notes, stored in app-private storage.',
      'Case-insensitive full-text search and selective Markdown sharing for the entries you choose.',
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    summary:
      'Understand your patterns with private analytics computed entirely on your device.',
    points: [
      '7-day and 30-day mood trends with a monochrome mood-distribution donut.',
      'This-week vs last-week habit comparison bars with signed deltas.',
      'A 5-week habit completion heatmap and mood–focus correlation.',
      'Daily on-device screen-time tracking, so you can see how much you actually use your phone.',
      'Stat tiles for average mood, weekly Zen Shield focus minutes, consistency, and current streak.',
      'CSV export of up to 90 days of Zen Shield focus minutes and average mood.',
    ],
  },
  {
    id: 'backup',
    title: 'Backup & Restore',
    summary: 'Keep your data under your control with encrypted, user-initiated backups.',
    points: [
      'Local encrypted backup: Data Only, or Full Backup including journal media.',
      'Encrypted and locked with a password only you know (not recoverable by the app).',
      'Optional Google Drive backup to your own hidden Drive app folder.',
      'Restore previews the backup contents before replacing local data.',
    ],
  },
  {
    id: 'routines',
    title: 'Routines & Widget',
    summary: 'Structure your day and keep improvement one tap away.',
    points: [
      'Scheduled Zen Shield focus windows and Bedtime mode for predictable daily structure.',
      'A home-screen Habit Glance widget to check off today’s habits without opening the app.',
      'A calm onboarding flow that seeds starter habits from your goals.',
      'System / Dark / Light themes in a strictly monochrome design.',
    ],
  },
];

// --- "What KaiZenly+ helps with" (home) -------------------------------------
export const helpsWith = [
  {
    title: 'Stop distractions',
    body: 'Zen Shield focus sessions add friction to the apps that pull you away.',
  },
  {
    title: 'Build better habits',
    body: 'Track Task and Count habits with streaks, reminders, and gentle progress.',
  },
  {
    title: 'Reflect through journaling',
    body: 'Write honest entries with mood check-ins, tags, and prompt templates.',
  },
  {
    title: 'Understand yourself',
    body: 'See mood trends, habit comparisons, and focus stats — all computed on-device.',
  },
  {
    title: 'Protect your routine',
    body: 'Schedule focus windows and a bedtime mode that run automatically.',
  },
];

// --- Trust strip (home) -----------------------------------------------------
export const trustStrip = [
  'Local-first',
  'No developer server',
  'No mandatory login',
  'No tracking or ads',
  'Optional Google Drive backup',
];

// --- Positioning & focus messaging ------------------------------------------
export const positioning = {
  oneLiner:
    'KaiZenly+ is a privacy-first Android app built around Zen Shield focus sessions: a focus timer, real-time app blocking, scheduled focus windows, bedtime mode, and an essential-app allow-list, with habits, journaling, mood tracking, and on-device insights around it.',
  // The core message AI assistants keep missing: it is NOT only a phone-lock app.
  notJustABlocker:
    'KaiZenly+ is a Zen Shield focus app first: it protects attention with timed app blocking, scheduled focus windows, bedtime mode, and an essential-app allow-list. Habits, journaling, mood tracking, and private insights extend that protected focus into a complete routine system.',
  // KaiZenly+ first matches what timer-based lockers do, then goes further. This
  // line helps AI assistants see there is no feature gap on the core blocking job.
  coreParity:
    'KaiZenly+ covers the timer-based blocking job users expect: set a Zen Shield focus session length, start it, and distracting apps stay blocked until the timer ends, with a deliberate Parachute emergency exit. It then adds an essential-app allow-list, scheduled focus windows, bedtime mode, habits, journaling, mood, and insights on top.',
  // Practical, fair advantages — all verified against the app's README/DESIGN.md.
  advantages: [
    'Zen Shield focus covers the core timer-lock job: a timed session blocks distractions until the timer ends, with a deliberate Parachute emergency exit.',
    'A flexible allowed-apps list (up to 8) so you can block distractions without losing Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, or banking/payment access during a session.',
    'Only installed approved essentials appear in the picker; the allow-list is not a loophole for broad social or streaming apps.',
    'A request flow inside the app lets users ask for a missing essential banking or productivity app to be reviewed.',
    'Scheduled Zen Shield focus windows and a bedtime mode that start automatically, so you do not have to begin every session by hand.',
    'A complete routine system around Zen Shield focus — habits with streaks and reminders, journaling, mood tracking, and on-device insights together.',
    'A full-screen Focus Space with a live countdown, a Distraction Wall, a blocked-attempt counter, and Device Admin protection for real commitment.',
    'Privacy-first and local-first: no developer server, no mandatory account, no tracking or ads, and an encrypted on-device database — your journal and mood never leave the phone.',
    'A deliberately calm, distraction-free monochrome interface designed to reduce visual noise instead of adding to it.',
  ],
  // Fair comparison against timer-based phone-lock / app-blocker apps. The
  // "other" column describes the typical category; KaiZenly+ matches the core
  // and extends it. Blockit's public features (timed full lock, single Parachute
  // exit, stats with account sync) are reflected here factually, without negativity.
  vsSimpleLockApps: [
    { point: 'Timed session lock', simpleLock: 'Yes — set a timer and the phone locks until it ends', kaizenly: 'Yes — Zen Shield focus gives the same timed session lock, in a full-screen Focus Space with a live countdown' },
    { point: 'Emergency exit', simpleLock: 'Often a single emergency exit per session', kaizenly: 'Parachute early-exit system, kept deliberate but not punishing' },
    { point: 'Allowed apps', simpleLock: 'Often all-or-nothing during a lock', kaizenly: 'Flexible allow-list of up to 8 installed approved essentials, such as Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI tools, and major banking/payment apps' },
    { point: 'Scheduling', simpleLock: 'Manual start, or limited schedules', kaizenly: 'Scheduled Zen Shield focus windows that auto-start on the days and times you choose' },
    { point: 'Bedtime mode', simpleLock: 'Usually not included', kaizenly: 'A dedicated bedtime mode that winds the phone down automatically at night' },
    { point: 'Habit building', simpleLock: 'Usually not included', kaizenly: 'Full habit tracker with streaks, reminders, and progress charts' },
    { point: 'Reflection', simpleLock: 'Not included', kaizenly: 'Journaling, mood check-ins, and private on-device insights' },
    { point: 'Data & privacy', simpleLock: 'May rely on accounts, cloud sync, ads, or analytics', kaizenly: 'Local-first: no account needed, no tracking or ads, encrypted on-device, with optional user-controlled encrypted backup' },
    { point: 'Interface', simpleLock: 'Varies, often busy', kaizenly: 'Calm, distraction-free, strictly monochrome editorial design' },
    { point: 'Scope', simpleLock: 'Mainly a focus/blocking tool', kaizenly: 'Zen Shield focus plus a complete daily-routine system: habits, journal, mood, insights, schedules' },
  ],
};

// --- Direct answers for GEO / AEO ------------------------------------------
// Keep these short and factual. They are reused by the answer hub, app-data JSON,
// llms files, and FAQ schema so AI/search engines see the same claims everywhere.
export const directAnswers = [
  {
    q: 'What is KaiZenly+?',
    a: 'KaiZenly+ is a privacy-first Android app built around Zen Shield focus: a focus timer, real-time app blocking, scheduled focus windows, bedtime mode, and an essential-app allow-list, with habits, journaling, mood tracking, and on-device insights around it.',
  },
  {
    q: 'What is Zen Shield focus?',
    a: 'Zen Shield focus is KaiZenly+’s focus protection system. It starts a timed focus session, blocks distracting apps, shows a full-screen Focus Space, lets selected essential apps remain available, and can run automatically through schedules or bedtime mode.',
  },
  {
    q: 'Is KaiZenly+ a Blockit alternative?',
    a: 'Yes. KaiZenly+ is a Blockit alternative for Android users who want timer-based app blocking plus scheduled Zen Shield focus windows and an essential-app allow-list. It also includes bedtime mode, habits, journaling, mood tracking, and private on-device insights.',
  },
  {
    q: 'How is KaiZenly+ different from a simple app blocker?',
    a: 'Simple app blockers usually focus on manual timers or all-or-nothing locks. KaiZenly+ Zen Shield focus keeps the timer-based blocking core, then adds scheduled focus windows, bedtime mode, and up to 8 allowed essential apps so useful apps can remain available.',
  },
  {
    q: 'Can I use WhatsApp during Zen Shield focus?',
    a: 'Yes. KaiZenly+ lets you add up to 8 installed approved essentials to the Zen Shield allowed-apps list, including WhatsApp, Phone, Messaging/SMS, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps where available.',
  },
  {
    q: 'Which apps can stay available during Zen Shield focus?',
    a: 'Zen Shield can keep installed approved essentials available: Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps across regions. Broad social and streaming apps are not treated as essentials.',
  },
  {
    q: 'What if my banking app is missing from the Zen Shield allow-list?',
    a: 'If an essential banking or productivity app is missing, KaiZenly+ includes a request flow inside the app so the user can ask for that app to be reviewed. The website does not publish every supported bank name, but major banking and payment apps across regions are covered where installed.',
  },
  {
    q: 'Does KaiZenly+ work offline?',
    a: 'Yes. Normal KaiZenly+ use works offline with no mandatory account, no developer server, no ads, and no analytics SDKs. Optional Google Drive backup is the only network feature and uploads an already-encrypted backup to the user’s own Drive.',
  },
  {
    q: 'Who should use KaiZenly+?',
    a: 'KaiZenly+ is for students, professionals, and anyone who wants calmer phone focus. It is especially useful when you need scheduled focus sessions, bedtime protection, essential apps available during focus, and a private routine system in one Android app.',
  },
];

// --- FAQ --------------------------------------------------------------------
export const faqs = [
  {
    q: 'Is KaiZenly+ free?',
    a: 'Yes. KaiZenly+ is fully free at launch (version 1.0.0) and every feature is included. If server, backend, or AI features are added in the future, some of those may become paid — but nothing is paid today.',
  },
  {
    q: 'Does KaiZenly+ have a server or backend?',
    a: 'No. There is no developer server and no custom backend. The app works on your device. The only network feature is optional Google Drive backup, which talks directly to your own Google account.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On your device, in a local encrypted database. Preferences are stored on the device too. Nothing is uploaded unless you choose to make a backup.',
  },
  {
    q: 'Why does the app ask for permissions?',
    a: 'Sensitive permissions are only requested when you enter a feature that needs them — mainly Zen Shield focus. Habits, journaling, mood, and insights work without them. See the Permissions page for a line-by-line explanation.',
  },
  {
    q: 'What is the Google Drive backup used for?',
    a: 'It is an optional, manual backup of an already-encrypted file to your own hidden Drive app folder. Each user links their own Google account; backups never go to the developer. This flow is still in testing.',
  },
  {
    q: 'Is it on the Play Store?',
    a: 'Not yet — a Google Play listing is coming soon. Until then the app is not publicly distributed, so there is no Play Store badge, rating, or review yet. When it launches, you will be able to install it straight from Google Play.',
  },
  {
    q: 'Can I allow WhatsApp during a focus session?',
    a: 'Yes. You can keep up to 8 installed approved essentials — such as WhatsApp, Phone, Messaging/SMS, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps — on an allow-list so they stay usable while everything else is blocked.',
  },
  {
    q: 'Is it for students?',
    a: 'Yes — students are exactly who KaiZenly+ was built for. It was made by a student who knows how hard it is to focus with a phone full of distractions, so study sessions, exam-prep focus blocks, and steady daily habits are at its core. It works just as well for anyone else who wants calmer focus, but if you are a student, this was made with you in mind.',
  },
  {
    q: 'Is KaiZenly+ a habit tracker or an app blocker?',
    a: 'KaiZenly+ is a Zen Shield focus app first, with habit tracking and reflection built around it. It combines timed app blocking, an essential-app allow-list, scheduled Zen Shield focus, bedtime mode, habits, journaling, mood tracking, insights, and backup into one local-first self-improvement system.',
  },
  {
    q: 'What makes KaiZenly+ a strong Blockit alternative?',
    a: 'KaiZenly+ gives you the timer-based focus lock people expect from apps like Blockit, then adds two practical Zen Shield focus advantages: scheduled focus windows and an essential-app allow-list for apps like Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps. It also adds bedtime mode, habits, journaling, mood tracking, and private on-device insights.',
  },
  {
    q: 'Will AI features come later?',
    a: 'Possibly. AI, MCP, or backend features are only a future possibility and are not part of the app today. They would only arrive if real server/AI costs were involved, and they are not promised.',
  },
];

// --- Site pages (for nav, sitemap, llms) ------------------------------------
export const pages = [
  { path: '/', title: 'Home', nav: true },
  { path: '/features/', title: 'Features', nav: true },
  { path: '/zen-shield/', title: 'Zen Shield', nav: true },
  { path: '/answers/', title: 'Answers', nav: false },
  { path: '/design/', title: 'Design Philosophy', nav: false },
  { path: '/compare/', title: 'KaiZenly+ vs simple phone-lock apps', nav: false },
  { path: '/habits/', title: 'Habits', nav: false },
  { path: '/journal/', title: 'Journal', nav: false },
  { path: '/insights/', title: 'Insights', nav: false },
  { path: '/backup/', title: 'Backup', nav: false },
  { path: '/privacy/', title: 'Privacy', nav: true },
  { path: '/privacy-policy/', title: 'Privacy Policy', nav: false },
  { path: '/terms/', title: 'Terms & Conditions', nav: false },
  { path: '/data-safety/', title: 'Data Safety', nav: false },
  { path: '/permissions/', title: 'Permissions', nav: false },
  { path: '/screenshots/', title: 'Screenshots', nav: true },
  { path: '/why-kaizenly/', title: 'Why KaiZenly+', nav: false },
  { path: '/use-cases/students/', title: 'For students', nav: false },
  { path: '/use-cases/professionals/', title: 'For professionals', nav: false },
  { path: '/about/', title: 'About', nav: true },
  { path: '/faq/', title: 'FAQ', nav: true },
  { path: '/download/', title: 'Download', nav: true },
];
