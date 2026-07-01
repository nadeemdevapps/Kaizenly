import { blogArticles } from './app.mjs';

const commonFaq = [
  {
    q: 'Is KaiZenly+ only a habit tracker?',
    a: 'No. KaiZenly+ combines Zen Shield focus, habits, Journal, mood, scales, insights, and backup into one local-first Android app.',
  },
  {
    q: 'Does KaiZenly+ upload my journal or habits to the developer?',
    a: 'No. KaiZenly+ has no developer server, no mandatory login, no analytics SDKs, and no ads. Normal use stays on the device.',
  },
];

export const posts = [
  {
    ...blogArticles[0],
    hero: 'Most people do not live in separate habit and journal systems. They drink water, meditate, study, sleep well, feel tired, write a note, and try again tomorrow. KaiZenly+ is designed around that real day: habits and Journal can become one daily record instead of two separate places to maintain.',
    answer:
      'Habit trackers and journals should not be separate because the same day creates both action and reflection. A habit tracker records what happened; a journal records what it meant. KaiZenly+ connects both so linked habits, mood, scales, notes, and independent progress can live together in the same daily timeline.',
    sections: [
      {
        h: 'The problem with separate habit and journal apps',
        p: [
          'A normal habit tracker is fast: tap meditation, count water, mark reading done, move on. A normal journal is expressive: write how the day felt, choose activities, add mood, and save a memory. The problem is that both tools describe the same day, but they usually do not talk to each other.',
          'That separation creates duplicate work. The user completes meditation in the habit tracker, then opens the journal and selects meditation again. The user logs water as a Count habit, then writes about hydration somewhere else. The user rates sleep quality as a habit, then has to add another sleep rating in the journal.',
          'KaiZenly+ treats that repetition as a product problem. The app keeps the habit board quick, keeps the Journal calm, and lets the saved daily record carry the full context.',
        ],
      },
      {
        h: 'What KaiZenly+ does differently',
        p: [
          'KaiZenly+ lets a habit be independent or explicitly linked to Journal. When the link exists, the same real-world action can be reflected in both places. A Task habit can become a Journal activity. A Count habit can preserve an exact daily total. A Scale habit can share a rating with a Journal scale.',
          'This is not silent name matching. The user chooses the relationship, so “meditation” only syncs with Journal when the user decides it should. That makes the system predictable and avoids surprising data changes.',
        ],
      },
      {
        h: 'The user benefit is simple: one day, one record',
        p: [
          'The strongest part of unified sync is not technical. The benefit is emotional clarity. At the end of the day, the user can see what they did, how they felt, what they tracked, and what they wrote in one place.',
          'A daily record becomes more than a mood entry and more than a checklist. It becomes a calm summary of the day: mood, activities, linked habits, scale ratings, partial counts, notes, photos, voice, and prompts when the user wants them.',
        ],
      },
      {
        h: 'How linked and independent habits stay clean',
        p: [
          'Linked habits appear where the user expects them: a linked Journal activity can be selected in the normal activity area. Independent habit completions do not clutter the composer, but they can appear later in the saved timeline as “Habit done” context.',
          'This separation keeps manual journaling simple while still preserving more data after save. The user does not have to edit every independent habit in the Journal UI, but the daily timeline can still remember what happened.',
        ],
      },
    ],
    table: {
      head: ['Typical app setup', 'What the user has to do', 'KaiZenly+ approach'],
      rows: [
        ['Habit app + separate journal', 'Log the same routine twice', 'Linked habits can update Journal'],
        ['Journal only', 'Write every routine manually', 'Habit board keeps tracking fast'],
        ['Habit tracker only', 'Lose daily context and mood', 'Journal stores reflection and snapshots'],
        ['All-or-nothing sync', 'Risk confusing automatic matches', 'Explicit links keep control with the user'],
      ],
    },
    faqs: [
      {
        q: 'Can a habit stay independent?',
        a: 'Yes. Independent habits stay independent and do not appear as editable Journal activity controls, but their completed progress can still be preserved in the saved timeline.',
      },
      {
        q: 'Why not silently auto-link habits by name?',
        a: 'Silent matching can create mistakes when two items have similar names. KaiZenly+ uses explicit links so the user controls what syncs.',
      },
      ...commonFaq,
    ],
  },
  {
    ...blogArticles[1],
    hero: 'A unified daily record is the center of the KaiZenly+ routine system. It is where action, mood, reflection, and progress meet without forcing the user to rebuild the same day in multiple tools.',
    answer:
      'A KaiZenly+ unified daily record can include mood, notes, Journal activities, linked Task habits, linked Count totals, Scale ratings, photos, voice notes, prompts, and independent habit snapshots. It gives the user a fuller memory of the day without making the composer feel heavy.',
    sections: [
      {
        h: 'What belongs in a unified daily record?',
        p: [
          'A real day is not only a mood score. It is also the routines completed, the routines missed, the sleep quality, the focus quality, the water count, the study session, the note the user wrote, and the feeling behind it.',
          'KaiZenly+ brings those pieces together carefully. The Journal remains a calm place to write, but the saved entry can preserve more context: activities, scales, linked habits, and independent progress snapshots.',
        ],
      },
      {
        h: 'Linked Task habits',
        p: [
          'Task habits are simple yes/no routines: meditate, read, pray, plan, stretch, sleep early, or eat a home meal. When a Task habit is linked with a Journal activity, completing the habit can select that activity for the same day.',
          'The reverse direction also matters. If the user is journaling first and selects the linked activity, the habit can be marked done. This keeps the user from doing the same work twice.',
        ],
      },
      {
        h: 'Linked Count habits',
        p: [
          'Count habits need more care because the value matters. A linked Count habit should not add another count every time the user edits and saves a Journal entry. KaiZenly+ uses exact daily totals for this reason.',
          'That means a value like Water 4/8 represents the daily total, not four accidental saves. It is cleaner for progress, cleaner for editing, and clearer in the timeline.',
        ],
      },
      {
        h: 'Linked Scale habits',
        p: [
          'Scale habits are for subjective daily ratings: energy, sleep quality, stress, confidence, focus quality, mood support, or any personal measure. They are useful because not everything important is yes/no.',
          'When a Scale habit is synced with Journal, the same rating can support both habit progress and daily reflection. A user can log sleep quality from the habit board and still see that value in the Journal context.',
        ],
      },
      {
        h: 'Independent snapshots',
        p: [
          'Not every habit should be linked. Some habits are private routines, experiments, or simple trackers that do not need a Journal activity. KaiZenly+ still lets those independent habits contribute to the saved daily record after save or auto-log.',
          'The timeline can show completed independent habits and partial Count progress while hiding missed or zero-progress items. That keeps the record useful instead of noisy.',
        ],
      },
    ],
    table: {
      head: ['Data type', 'Example', 'Where it appears'],
      rows: [
        ['Mood', 'Good, Great, Okay', 'Journal entry header and insights'],
        ['Linked Task', 'Meditation done', 'Journal activity chip'],
        ['Linked Count', 'Water 4/8', 'Linked count control and saved progress'],
        ['Linked Scale', 'Sleep quality 4/5', 'Journal scale and habit progress'],
        ['Independent snapshot', 'Reading done', 'Habit done timeline section'],
      ],
    },
    faqs: [
      {
        q: 'Does the Journal composer become complicated?',
        a: 'No. Independent habits stay hidden while the user composes. Richer habit context is added to the saved timeline, not forced into every manual Journal screen.',
      },
      {
        q: 'Why are partial Count habits useful?',
        a: 'Partial counts show effort even before a target is complete. Water 4/8 or pages 12/30 can still explain the day later.',
      },
      ...commonFaq,
    ],
  },
  {
    ...blogArticles[2],
    hero: 'Zen Shield is the focus foundation of KaiZenly+. It is built for real life: block distractions, keep important apps available, schedule protected time, and make early exits deliberate.',
    answer:
      'Zen Shield is KaiZenly+ focus protection system. It combines a focus timer, real-time app blocking, a full-screen Focus Space, scheduled focus windows, bedtime mode, a Distraction Wall, Parachute exits, and an essential-app allow-list so users can focus without losing access to truly important apps.',
    sections: [
      {
        h: 'A focus app should protect attention without breaking real life',
        p: [
          'Many blockers treat focus as all-or-nothing. That can work for short sessions, but real life is more complicated. A student may need WhatsApp for family. A professional may need Gmail or Outlook. Someone may need Phone, SMS, or a banking app during a session.',
          'Zen Shield is built around that reality. It adds friction to distractions while keeping selected essentials available when they match the approved essential-app policy.',
        ],
      },
      {
        h: 'Timed focus with stronger commitment',
        p: [
          'A Zen Shield session starts with a timer and a full-screen Focus Space. The user sees the remaining time, the allowed essentials, and the focus state clearly.',
          'If a blocked app is opened, KaiZenly+ can show a Distraction Wall that returns the user to focus. The goal is not punishment; the goal is to make distraction visible before it becomes automatic.',
        ],
      },
      {
        h: 'Allowed essentials are a practical advantage',
        p: [
          'KaiZenly+ can keep up to 8 installed approved essentials available during focus. Examples include Phone, Messaging/SMS, WhatsApp, Gmail, Outlook, Google Keep, AI/productivity tools, and major banking/payment apps where available.',
          'The allow-list is not a loophole for broad social or streaming apps. It exists so users can stay reachable, safe, and productive while distractions stay blocked.',
        ],
      },
      {
        h: 'Schedules and bedtime make focus automatic',
        p: [
          'Manual focus sessions are useful, but routines improve when the environment changes automatically. Zen Shield supports scheduled focus windows and bedtime mode so protected time can start on chosen days and hours.',
          'This makes KaiZenly+ more than a one-off timer. It can become part of a morning study routine, work block, prayer time, deep work window, or night shutdown pattern.',
        ],
      },
    ],
    table: {
      head: ['Focus need', 'Simple timer app', 'KaiZenly+ Zen Shield'],
      rows: [
        ['Block distractions', 'Usually yes', 'Yes, with full-screen focus protection'],
        ['Keep essential apps', 'Often limited', 'Approved allow-list up to 8 apps'],
        ['Automatic schedules', 'Often missing or basic', 'Focus windows and bedtime mode'],
        ['Early exit', 'Varies', 'Parachute system for deliberate exits'],
        ['Routine support', 'Usually separate', 'Habits, Journal, mood, and insights around focus'],
      ],
    },
    faqs: [
      {
        q: 'Can WhatsApp stay available during focus?',
        a: 'Yes, WhatsApp can be allowed when it is installed and selected as an approved essential app.',
      },
      {
        q: 'Is Zen Shield only for students?',
        a: 'No. Students are a strong use case, but Zen Shield also fits professionals and anyone who needs protected phone focus.',
      },
      ...commonFaq,
    ],
  },
  {
    ...blogArticles[3],
    hero: 'Not every routine should be tracked the same way. KaiZenly+ uses Task, Count, and Scale habits so a daily routine can be logged in the format that matches the real behavior.',
    answer:
      'KaiZenly+ has three habit types. Task habits track yes/no completion, Count habits track numeric daily goals, and Scale habits track subjective ratings. Each type can support a different kind of routine, and linked habits can become part of the daily Journal record.',
    sections: [
      {
        h: 'Task habits are for simple completion',
        p: [
          'A Task habit answers one question: did it happen today? Examples include meditation, prayer, reading, stretching, planning, study, or sleeping early.',
          'Task habits are the fastest habit type. They work well when the goal is consistency, not quantity. When linked to Journal, the same completion can appear as a Journal activity.',
        ],
      },
      {
        h: 'Count habits are for measurable targets',
        p: [
          'A Count habit tracks a number: glasses of water, pages read, minutes practiced, workouts completed, or repetitions done. The target gives the day a clear progress line.',
          'KaiZenly+ treats linked Count progress as an exact total. This is important because editing the same Journal entry should not accidentally increase the count. The saved value represents the day, not the number of times the Save button was pressed.',
        ],
      },
      {
        h: 'Scale habits are for subjective ratings',
        p: [
          'Some important habits cannot be counted cleanly. Energy, sleep quality, stress, confidence, soreness, focus quality, or emotional balance are better as ratings.',
          'Scale habits let the user log a daily value without pretending the routine is yes/no. They can stay independent or sync with a Journal scale for a richer daily reflection.',
        ],
      },
      {
        h: 'Choosing the right habit type',
        p: [
          'The best habit type depends on the question the user wants answered. If the question is “did I do it?”, use Task. If the question is “how many?”, use Count. If the question is “how was it?”, use Scale.',
          'This makes the habit system flexible without making it complicated. The user can start small, then link only the habits that should become part of Journal.',
        ],
      },
    ],
    table: {
      head: ['Habit type', 'Best for', 'Journal sync role'],
      rows: [
        ['Task', 'Meditation, reading, planning, sleep early', 'Can select a matching Journal activity'],
        ['Count', 'Water, pages, reps, minutes', 'Can save an exact daily total'],
        ['Scale', 'Energy, sleep quality, stress, focus quality', 'Can update a matching Journal scale'],
        ['Independent', 'Private or standalone routines', 'Can appear later as saved timeline context'],
      ],
    },
    faqs: [
      {
        q: 'Does a Scale value count as habit completion?',
        a: 'Yes. Any logged Scale value counts as done for that day.',
      },
      {
        q: 'Should every habit be linked to Journal?',
        a: 'No. Link only the habits that should become part of reflection. Keep simple or private routines independent.',
      },
      ...commonFaq,
    ],
  },
  {
    ...blogArticles[4],
    hero: 'Self-improvement data is personal. Habits show what someone is trying to change, Journal shows what they feel, and mood history can reveal private patterns. KaiZenly+ is built local-first so that data belongs to the user.',
    answer:
      'Local-first self-improvement means the app works on the user device without a developer server, mandatory login, analytics SDKs, ads, or background tracking. KaiZenly+ stores habits, Journal, mood, and insights on the device, with optional encrypted backup controlled by the user.',
    sections: [
      {
        h: 'Why privacy matters more in self-improvement apps',
        p: [
          'A journal is not ordinary app data. It can contain fear, goals, failures, private routines, spiritual habits, health context, family notes, and voice recordings. A mood tracker can reveal patterns the user never meant to share.',
          'KaiZenly+ treats that data as personal by default. The product is designed around local use, not around collecting analytics or building a developer-held profile.',
        ],
      },
      {
        h: 'No developer server for normal use',
        p: [
          'KaiZenly+ does not require a developer server for normal habits, Journal, mood, focus, or insights. There is no mandatory account and no developer backend receiving the user daily routine.',
          'This is a major part of the product identity. The app is not trying to turn personal growth into a cloud dashboard controlled somewhere else.',
        ],
      },
      {
        h: 'Encrypted local data and user-controlled backup',
        p: [
          'KaiZenly+ stores structured data on the device in encrypted form. Local backups are encrypted and protected by a password chosen by the user.',
          'Optional Google Drive backup uploads an already-encrypted backup to the user own Drive. Backups do not route to the developer, and normal use does not require the network.',
        ],
      },
      {
        h: 'Private insights are still useful',
        p: [
          'Local-first does not mean basic. KaiZenly+ can still show mood trends, habit comparisons, focus stats, screen-time patterns, and routine insights on-device.',
          'The difference is where the analysis happens. KaiZenly+ is designed so users can understand themselves without sending that journey to an analytics service.',
        ],
      },
    ],
    table: {
      head: ['Privacy question', 'KaiZenly+ answer', 'User benefit'],
      rows: [
        ['Is login required?', 'No mandatory login', 'Start using the app privately'],
        ['Does the developer collect data?', 'No developer server for normal use', 'Daily life stays on the device'],
        ['Are ads or analytics included?', 'No ads and no analytics SDKs', 'No tracking-based product model'],
        ['Can the user back up data?', 'Yes, encrypted local and optional Drive backup', 'Control without developer access'],
      ],
    },
    faqs: [
      {
        q: 'Does KaiZenly+ need the internet?',
        a: 'Normal use works offline. Internet is only used for optional Google Drive backup and restore.',
      },
      {
        q: 'Is KaiZenly+ open source?',
        a: 'No. KaiZenly+ is proprietary and the repository is private.',
      },
      ...commonFaq,
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
