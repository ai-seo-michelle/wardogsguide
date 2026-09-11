export type ManualReviewLevel = "low" | "medium" | "high";
export type PagePriority = "P0" | "P1" | "P2";
export type PageType =
  | "home"
  | "guide_hub"
  | "launch_guide"
  | "status_guide"
  | "troubleshooting"
  | "settings_guide"
  | "overview"
  | "beginner_guide"
  | "controls_guide"
  | "economy_guide"
  | "playtest_guide";

export type GuideSection = {
  heading: string;
  body: string;
};

export type PageMatrixEntry = {
  title: string;
  route: string;
  keyword: string;
  type: PageType;
  priority: PagePriority;
  manualReview: ManualReviewLevel;
  intent: string;
  eyebrow: string;
  h1: string;
  description: string;
  quickAnswer: string;
  sections: GuideSection[];
  relatedRoutes: string[];
};

export const sourcePriority = [
  "Official WARDOGS / BULKHEAD",
  "Official Steam page / Steam announcements",
  "Team17 official information",
  "Verified in-game information",
  "Current community cross-check",
  "Reliable third-party guides"
] as const;

export const pageMatrix: PageMatrixEntry[] = [
  {
    title: "WARDOGS Guide",
    route: "/",
    keyword: "wardogs",
    type: "home",
    priority: "P0",
    manualReview: "low",
    intent: "home entry for the independent fan-made WARDOGS guide",
    eyebrow: "Independent Fan-Made Guide",
    h1: "WARDOGS Guide",
    description:
      "A practical WARDOGS guide hub for launch, Early Access, troubleshooting, settings, controls, and beginner questions.",
    quickAnswer:
      "This site is being built as an independent fan-made guide. Current pages use a verified-first structure so launch-sensitive details can be checked before publication.",
    sections: [
      {
        heading: "Start with the guide hub",
        body: "Use the main guide hub for the approved first set of WARDOGS pages and the safest route into launch, troubleshooting, settings, and controls topics."
      },
      {
        heading: "Verification-first coverage",
        body: "Release timing, server behavior, error codes, performance advice, and control details are marked for manual review until they can be checked against official or in-game sources."
      }
    ],
    relatedRoutes: [
      "/wardogs-guide/",
      "/wardogs-release-date/",
      "/wardogs-early-access/",
      "/wardogs-server-status/",
      "/wardogs-failed-to-connect-to-server/",
      "/wardogs-crashing/",
      "/wardogs-crashing-fix/",
      "/wardogs-voip-not-working/",
      "/wardogs-missing-game-executable/",
      "/wardogs-playtest-schedule/",
      "/wardogs-how-to-make-money/",
      "/wardogs-helicopter-guide/",
      "/wardogs-best-settings/"
    ]
  },
  {
    title: "WARDOGS Guide",
    route: "/wardogs-guide/",
    keyword: "wardogs guide",
    type: "guide_hub",
    priority: "P0",
    manualReview: "low",
    intent: "central guide and internal-linking hub",
    eyebrow: "Guide Hub",
    h1: "WARDOGS Guide",
    description:
      "The central hub for WARDOGS launch help, Early Access answers, troubleshooting, settings, controls, and beginner routes.",
    quickAnswer:
      "Start here if you need the safest route through the current WARDOGS guide set. Each detailed guide links back here and is separated by launch, troubleshooting, settings, and controls intent.",
    sections: [
      {
        heading: "Launch and access",
        body: "Use the release date and Early Access guides for timing, availability, and purchase-related questions after official details are verified."
      },
      {
        heading: "Troubleshooting path",
        body: "Use the server status, crashing, not launching, and error-code pages as the first troubleshooting cluster."
      },
      {
        heading: "Settings and controls",
        body: "Use the settings and controls guides for performance, input setup, and vehicle-control topics once details have been checked against the current build."
      }
    ],
    relatedRoutes: [
      "/wardogs-release-date/",
      "/wardogs-early-access/",
      "/wardogs-server-status/",
      "/wardogs-failed-to-connect-to-server/",
      "/wardogs-crashing/",
      "/wardogs-crashing-fix/",
      "/wardogs-voip-not-working/",
      "/wardogs-easy-anti-cheat-error-fix/",
      "/wardogs-missing-game-executable/",
      "/wardogs-best-settings/",
      "/what-is-wardogs-game/",
      "/how-to-play-wardogs/",
      "/wardogs-not-launching/",
      "/wardogs-error-code-1147405308/",
      "/wardogs-controller-settings/",
      "/wardogs-helicopter-guide/",
      "/wardogs-how-to-make-money/",
      "/wardogs-playtest-schedule/",
      "/wardogs-helicopter-controls/"
    ]
  },
  {
    title: "WARDOGS Release Date",
    route: "/wardogs-release-date/",
    keyword: "wardogs release date",
    type: "launch_guide",
    priority: "P0",
    manualReview: "high",
    intent: "release timing, platforms, time zones, launch window",
    eyebrow: "Launch Guide",
    h1: "WARDOGS Release Date",
    description:
      "A verification-ready WARDOGS release date page for timing, platforms, time zones, and launch-window updates.",
    quickAnswer:
      "Current release details will be verified against the latest official build and official announcements before publication.",
    sections: [
      {
        heading: "What to verify first",
        body: "Confirm the official release timing, platform availability, and any launch-window language from official WARDOGS, Steam, BULKHEAD, or Team17 sources."
      },
      {
        heading: "Time zone handling",
        body: "Do not publish time-zone conversions until the source announcement includes a confirmed time or a reliable official launch window."
      },
      {
        heading: "Update workflow",
        body: "Keep community reports separate from official facts and mark any unconfirmed launch timing as pending verification."
      }
    ],
    relatedRoutes: ["/wardogs-early-access/", "/wardogs-playtest-schedule/", "/wardogs-guide/", "/what-is-wardogs-game/"]
  },
  {
    title: "WARDOGS Early Access",
    route: "/wardogs-early-access/",
    keyword: "wardogs early access",
    type: "launch_guide",
    priority: "P0",
    manualReview: "high",
    intent: "Early Access timing, access, preload, purchase details",
    eyebrow: "Early Access",
    h1: "WARDOGS Early Access",
    description:
      "A WARDOGS Early Access guide structure for access timing, preload, purchase details, and launch-day checks.",
    quickAnswer:
      "Current Early Access details will be verified against the latest official build and official store information before publication.",
    sections: [
      {
        heading: "Access details",
        body: "Verify how players get access through official store pages, official announcements, or publisher information before writing exact purchase guidance."
      },
      {
        heading: "Preload and availability",
        body: "Leave preload and availability details unpublished until official wording confirms whether they apply."
      },
      {
        heading: "Launch-day checks",
        body: "Link Early Access readers to server status and beginner guidance once those pages are fact-checked."
      }
    ],
    relatedRoutes: ["/wardogs-release-date/", "/wardogs-playtest-schedule/", "/wardogs-server-status/", "/how-to-play-wardogs/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Server Status",
    route: "/wardogs-server-status/",
    keyword: "wardogs server status",
    type: "status_guide",
    priority: "P0",
    manualReview: "high",
    intent: "server status, server full, offline, failed to join, matchmaking",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Server Status",
    description:
      "A WARDOGS server status guide structure for server availability, failed joins, offline messages, and matchmaking checks.",
    quickAnswer:
      "Current server-status details will be verified against official channels and the current live build before publication.",
    sections: [
      {
        heading: "Status checks",
        body: "Prioritize official service updates before adding any statement about server availability, downtime, capacity, or matchmaking behavior."
      },
      {
        heading: "Join and matchmaking issues",
        body: "Keep failed-to-join, offline, and server-full guidance generic until verified with the current build and official troubleshooting notes."
      },
      {
        heading: "Troubleshooting cluster",
        body: "Connect server checks with crashing, not launching, and error-code pages so readers can move through the first diagnosis path."
      }
    ],
    relatedRoutes: ["/wardogs-failed-to-connect-to-server/", "/wardogs-error-code-1147405308/", "/wardogs-crashing/", "/wardogs-not-launching/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Crash Troubleshooting Hub",
    route: "/wardogs-crashing/",
    keyword: "wardogs crash troubleshooting",
    type: "troubleshooting",
    priority: "P0",
    manualReview: "high",
    intent: "diagnose WARDOGS crash issues and route players to the right troubleshooting page",
    eyebrow: "Troubleshooting Hub",
    h1: "WARDOGS Crash Troubleshooting Hub",
    description:
      "A WARDOGS crash troubleshooting hub that helps players diagnose the symptom and choose the right crash, executable, launch, anti-cheat, server, or error-code guide.",
    quickAnswer:
      "Use this hub to diagnose where the WARDOGS crash happens. For step-by-step crash fixes, use the dedicated WARDOGS Crashing Fix page.",
    sections: [
      {
        heading: "Choose the right crash path",
        body: "Identify whether the issue is a startup crash, missing executable message, not-launching symptom, anti-cheat message, server or login problem, or numeric error code before following a fix guide."
      },
      {
        heading: "Use the dedicated fix page for crash fixes",
        body: "This hub does not compete with the crash fix page. It routes fix intent to the detailed WARDOGS Crashing Fix guide."
      }
    ],
    relatedRoutes: [
      "/wardogs-crashing-fix/",
      "/wardogs-easy-anti-cheat-error-fix/",
      "/wardogs-missing-game-executable/",
      "/wardogs-not-launching/",
      "/wardogs-server-status/",
      "/wardogs-failed-to-connect-to-server/",
      "/wardogs-error-code-1147405308/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS Crashing Fix",
    route: "/wardogs-crashing-fix/",
    keyword: "wardogs crashing",
    type: "troubleshooting",
    priority: "P0",
    manualReview: "high",
    intent: "startup, launch, Steam, shader, DX12, anti-cheat-adjacent and mid-game crash fixes",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Crashing Fix",
    description:
      "Fix WARDOGS startup, launch, Steam, shader, DX12, freezing, and mid-game crash symptoms with verified-first guidance.",
    quickAnswer:
      "If WARDOGS keeps crashing, start with reversible Steam and Windows checks, then separate official known issues from community-reported crash patterns.",
    sections: [
      {
        heading: "Start with safe checks",
        body: "Verify game files, restart Steam and Windows, compare your PC with the Steam requirements, and check official posts before applying risky community workarounds."
      },
      {
        heading: "Separate the crash symptom",
        body: "Startup crashes, shader-compilation crashes, Easy Anti-Cheat-adjacent launch crashes, and mid-game freezes point to different diagnosis paths."
      }
    ],
    relatedRoutes: [
      "/wardogs-easy-anti-cheat-error-fix/",
      "/wardogs-crashing/",
      "/wardogs-not-launching/",
      "/wardogs-server-status/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS VoIP Not Working",
    route: "/wardogs-voip-not-working/",
    keyword: "wardogs voip not working",
    type: "troubleshooting",
    priority: "P1",
    manualReview: "high",
    intent: "voice chat, microphone, local voice, provider outage and server-side VoIP checks",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS VoIP Not Working? Voice Chat & Mic Fixes",
    description:
      "Fix WARDOGS voice chat and mic symptoms with official known-issue notes, safe input checks, and clearly labeled community workarounds.",
    quickAnswer:
      "If WARDOGS voice chat stops working, identify whether you cannot hear others or others cannot hear you, then try the official local voice reset workaround before reinstalling anything.",
    sections: [
      {
        heading: "Check the direction of the voice issue",
        body: "Differentiate input, output, server, and provider symptoms before changing Windows, Steam, or game settings."
      },
      {
        heading: "Use the official local voice workaround",
        body: "BULKHEAD's Closed Beta known-issues post gives a local voice chat reset path through settings or the scoreboard mute toggle."
      }
    ],
    relatedRoutes: [
      "/wardogs-server-status/",
      "/wardogs-crashing-fix/",
      "/wardogs-not-launching/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS Easy Anti-Cheat Error Fix",
    route: "/wardogs-easy-anti-cheat-error-fix/",
    keyword: "wardogs anti cheat",
    type: "troubleshooting",
    priority: "P2",
    manualReview: "high",
    intent: "Easy Anti-Cheat login failed, module not found, anti-cheat splash and launch crash symptoms",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Easy Anti-Cheat Error Fix",
    description:
      "Troubleshoot WARDOGS Easy Anti-Cheat login failed, module not found, splash-screen crashes, and anti-cheat launch symptoms safely.",
    quickAnswer:
      "The current Steam store disclosure lists WARDOGS with kernel-level Elytra anti-cheat, while older player wording may still mention Easy Anti-Cheat. No public WARDOGS-specific universal anti-cheat fix is confirmed, so use safe checks and avoid unofficial downloads or file swaps.",
    sections: [
      {
        heading: "Confirm the anti-cheat context",
        body: "Use the Steam store page and official posts first, because anti-cheat behavior can differ between playtest and Early Access builds."
      },
      {
        heading: "Keep launch crashes separate",
        body: "If the symptom is a generic crash or freeze rather than a clear anti-cheat message, use the crashing fix guide first."
      }
    ],
    relatedRoutes: [
      "/wardogs-crashing-fix/",
      "/wardogs-not-launching/",
      "/wardogs-error-code-1147405308/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS Missing Game Executable",
    route: "/wardogs-missing-game-executable/",
    keyword: "wardogs missing game executable",
    type: "troubleshooting",
    priority: "P1",
    manualReview: "high",
    intent: "missing game executable, game executable not found, invalid executable, playtest availability, and anti-cheat refusal",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Missing Game Executable Fix",
    description:
      "A WARDOGS troubleshooting guide for missing executable, Steam launch, playtest availability, invalid executable path, and anti-cheat refusal symptoms.",
    quickAnswer:
      "First check whether the WARDOGS playtest or Early Access build should be playable right now. If access is not active, do not loop verify or reinstall steps; if access is active, separate Steam file problems from anti-cheat refusal.",
    sections: [
      {
        heading: "Check playtest availability first",
        body: "A missing executable can be a real local install problem, but it can also happen when an old or ended Playtest entry no longer has a usable build. Confirm official availability before changing local system settings."
      },
      {
        heading: "Keep crashes separate",
        body: "Use this page when Steam, the launcher, or anti-cheat cannot find or accept the executable. If WARDOGS opens and then crashes or freezes, use the crash troubleshooting hub or crashing fix page instead."
      }
    ],
    relatedRoutes: [
      "/wardogs-playtest-schedule/",
      "/wardogs-not-launching/",
      "/wardogs-easy-anti-cheat-error-fix/",
      "/wardogs-crashing/",
      "/wardogs-server-status/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS Best Settings",
    route: "/wardogs-best-settings/",
    keyword: "wardogs best settings",
    type: "settings_guide",
    priority: "P0",
    manualReview: "high",
    intent: "FPS, performance, graphics and visibility settings",
    eyebrow: "Settings",
    h1: "WARDOGS Best Settings",
    description:
      "A WARDOGS best settings guide structure for performance, visibility, graphics, and safe current-build testing.",
    quickAnswer:
      "Current settings guidance will be verified against the latest official build and in-game options before publication.",
    sections: [
      {
        heading: "Settings to verify",
        body: "Confirm the live graphics menu, display options, and any accessibility or visibility settings before recommending changes."
      },
      {
        heading: "Performance guidance",
        body: "Do not publish FPS targets, hardware claims, or best-setting presets until repeatable testing is available."
      },
      {
        heading: "Input-adjacent settings",
        body: "Route input setup questions toward the controller settings and helicopter controls pages when those details are verified."
      }
    ],
    relatedRoutes: ["/wardogs-controller-settings/", "/wardogs-helicopter-controls/", "/wardogs-guide/"]
  },
  {
    title: "What Is WARDOGS Game",
    route: "/what-is-wardogs-game/",
    keyword: "what is wardogs game",
    type: "overview",
    priority: "P1",
    manualReview: "low",
    intent: "explain what the game is and the gameplay framework",
    eyebrow: "Overview",
    h1: "What Is WARDOGS Game?",
    description:
      "A concise overview page for explaining what WARDOGS is, who it is for, and where new players should start.",
    quickAnswer:
      "This page will explain WARDOGS using verified official descriptions first, then link readers into beginner and launch guides.",
    sections: [
      {
        heading: "Core explanation",
        body: "Use official descriptions to explain the game at a high level without turning the site into a full wiki or database."
      },
      {
        heading: "Who should read next",
        body: "Send new players to the guide hub and how-to-play page for practical next steps."
      }
    ],
    relatedRoutes: ["/wardogs-guide/", "/how-to-play-wardogs/", "/wardogs-release-date/"]
  },
  {
    title: "How to Play WARDOGS",
    route: "/how-to-play-wardogs/",
    keyword: "how to play wardogs",
    type: "beginner_guide",
    priority: "P1",
    manualReview: "medium",
    intent: "first-match learning path",
    eyebrow: "Beginner Guide",
    h1: "How to Play WARDOGS",
    description:
      "A beginner-friendly WARDOGS page structure for first-match orientation and verified learning paths.",
    quickAnswer:
      "This page will become a first-match learning path after core gameplay details are checked against official and in-game sources.",
    sections: [
      {
        heading: "First-match path",
        body: "Keep the beginner route practical, but wait for verified build information before explaining objectives, roles, or mechanics."
      },
      {
        heading: "Setup before playing",
        body: "Link players to Early Access, best settings, and controller settings once those pages have current-version guidance."
      },
      {
        heading: "What not to assume",
        body: "Avoid naming maps, weapons, factions, or meta advice until the site enters the fact-verification stage."
      }
    ],
    relatedRoutes: ["/wardogs-early-access/", "/wardogs-how-to-make-money/", "/wardogs-helicopter-guide/", "/wardogs-best-settings/", "/wardogs-controller-settings/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Not Launching",
    route: "/wardogs-not-launching/",
    keyword: "wardogs not launching",
    type: "troubleshooting",
    priority: "P1",
    manualReview: "high",
    intent: "startup failure, access denied, anti-cheat checks",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Not Launching",
    description:
      "A WARDOGS not launching troubleshooting page structure for startup failures, access checks, and safe diagnosis.",
    quickAnswer:
      "Current startup troubleshooting details will be verified against the latest official build before publication.",
    sections: [
      {
        heading: "Startup symptoms",
        body: "Separate launch failure, access-denied behavior, and post-launch crashes so readers can follow the right troubleshooting path."
      },
      {
        heading: "Anti-cheat caution",
        body: "Do not publish anti-cheat fixes, file edits, or workaround claims unless they are officially documented or safely verified."
      },
      {
        heading: "Next diagnosis step",
        body: "Route readers to the specific error-code page first, then server status if the symptom points to online access."
      }
    ],
    relatedRoutes: ["/wardogs-missing-game-executable/", "/wardogs-easy-anti-cheat-error-fix/", "/wardogs-error-code-1147405308/", "/wardogs-failed-to-connect-to-server/", "/wardogs-server-status/", "/wardogs-crashing-fix/", "/wardogs-crashing/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Error Code 1147405308",
    route: "/wardogs-error-code-1147405308/",
    keyword: "wardogs error code 1147405308",
    type: "troubleshooting",
    priority: "P1",
    manualReview: "high",
    intent: "authentication, access denied, failed to authenticate with online services, and 1147405308 launch errors",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Error Code 1147405308 Fix",
    description:
      "A WARDOGS authentication troubleshooting page for error 1147405308, access denied, and failed-to-authenticate online-service messages.",
    quickAnswer:
      "Use this page when WARDOGS shows error code 1147405308, Access Denied, or Failed to authenticate with online services. Check official status context first because launch-day server load can look like a local PC problem.",
    sections: [
      {
        heading: "Authentication intent",
        body: "This URL is the main WARDOGS 1147405308 and failed-authentication page. Do not split failed-to-authenticate into a separate URL unless the search intent changes."
      },
      {
        heading: "Server-side first",
        body: "Start with official announcements, server-status context, and queue or login reports before asking users to change local security, firewall, or anti-cheat settings."
      },
      {
        heading: "Safe checks only",
        body: "Keep user-side steps reversible: restart the game and Steam, verify files if the client may be damaged, and record exact error text for support."
      }
    ],
    relatedRoutes: ["/wardogs-failed-to-connect-to-server/", "/wardogs-server-status/", "/wardogs-not-launching/", "/wardogs-easy-anti-cheat-error-fix/", "/wardogs-crashing/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Failed to Connect to Server",
    route: "/wardogs-failed-to-connect-to-server/",
    keyword: "wardogs failed to connect to server",
    type: "troubleshooting",
    priority: "P1",
    manualReview: "high",
    intent: "failed to connect to server, reasonable-time timeout, cannot join server, launch queues, and connection checks",
    eyebrow: "Troubleshooting",
    h1: "WARDOGS Failed to Connect to Server Fix",
    description:
      "A WARDOGS connection troubleshooting page for reasonable-time server errors, failed joins, launch-day queues, and safe network checks.",
    quickAnswer:
      "Use this page when WARDOGS opens but cannot join online services or a server in a reasonable time. Check official server and launch-stability updates first before changing local network settings.",
    sections: [
      {
        heading: "Connection timeout intent",
        body: "This page covers failed-to-connect and reasonable-time timeout symptoms, not authentication access-denied codes."
      },
      {
        heading: "Launch queue context",
        body: "Treat launch-day queues, overloaded services, and server join failures as possible server-side symptoms unless official guidance points to a local fix."
      },
      {
        heading: "Safe network checks",
        body: "Keep checks reversible: restart WARDOGS and Steam, test your connection, review VPN or firewall context, and avoid risky file or security changes."
      }
    ],
    relatedRoutes: ["/wardogs-server-status/", "/wardogs-error-code-1147405308/", "/wardogs-not-launching/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Controller Settings",
    route: "/wardogs-controller-settings/",
    keyword: "wardogs controller settings",
    type: "settings_guide",
    priority: "P1",
    manualReview: "high",
    intent: "controller, keyboard, mouse and keybind setup",
    eyebrow: "Settings",
    h1: "WARDOGS Controller Settings",
    description:
      "A WARDOGS controller settings page structure for controller, keyboard, mouse, and keybind setup after verification.",
    quickAnswer:
      "Current controller and keybind details will be verified against the latest official build before publication.",
    sections: [
      {
        heading: "Input support",
        body: "Verify controller support, mouse and keyboard options, and remapping behavior in the current build before writing setup guidance."
      },
      {
        heading: "Sensitivity and layout",
        body: "Do not publish recommended sensitivity, deadzone, or layout values until in-game options and testing are available."
      },
      {
        heading: "Vehicle controls",
        body: "Link readers to helicopter controls for vehicle-specific input questions after those controls are verified."
      }
    ],
    relatedRoutes: ["/wardogs-best-settings/", "/wardogs-helicopter-controls/", "/how-to-play-wardogs/", "/wardogs-guide/"]
  },
  {
    title: "WARDOGS Helicopter Guide",
    route: "/wardogs-helicopter-guide/",
    keyword: "wardogs helicopter",
    type: "controls_guide",
    priority: "P1",
    manualReview: "high",
    intent: "complete helicopter guide for controls, flying, landing, aiming, transport, and settings boundaries",
    eyebrow: "Helicopter Guide",
    h1: "WARDOGS Helicopter Guide",
    description:
      "A verified-first WARDOGS helicopter guide for controls, flying, landing, aiming, transport, and input setup without guessing unconfirmed keybinds.",
    quickAnswer:
      "WARDOGS officially includes flyable aircraft and helicopter supply transport, but a complete official helicopter control map has not been published. Use this guide for safe helicopter learning and verified boundaries.",
    sections: [
      {
        heading: "Official helicopter facts",
        body: "Official Steam and Team17 sources confirm vehicles, flyable aircraft, logistics, and helicopter supply transport. Exact helicopter keybinds and advanced handling values still need current-build verification."
      },
      {
        heading: "Learning path",
        body: "Check the live controls menu first, practice takeoff and landing before loaded transport, and treat community control claims as build-specific until verified."
      }
    ],
    relatedRoutes: [
      "/wardogs-helicopter-controls/",
      "/wardogs-controller-settings/",
      "/wardogs-best-settings/",
      "/wardogs-how-to-make-money/",
      "/how-to-play-wardogs/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "How to Make Money in WARDOGS",
    route: "/wardogs-how-to-make-money/",
    keyword: "how to make money in wardogs",
    type: "economy_guide",
    priority: "P1",
    manualReview: "high",
    intent: "cash, money making, logistics, supply, transport, persistence, and spending-risk guide",
    eyebrow: "Money Guide",
    h1: "How to Make Money in WARDOGS",
    description:
      "A WARDOGS money guide for cash basics, teamplay income, logistics, supply transport, persistence, and unverified money-loss questions.",
    quickAnswer:
      "Official sources say WARDOGS cash is earned through team-oriented play such as revives, transport, supplies, objective control, and building support. Do not trust exact farming routes until the current build is verified.",
    sections: [
      {
        heading: "Money basics",
        body: "Use this page for the economy and logistics intent. The beginner guide stays focused on first-match orientation, while this page tracks money-making and cash-risk questions."
      },
      {
        heading: "Logistics belongs here for now",
        body: "The WARDOGS logistics query is handled as a major section of this money guide instead of a separate thin page."
      }
    ],
    relatedRoutes: [
      "/how-to-play-wardogs/",
      "/wardogs-helicopter-guide/",
      "/wardogs-controller-settings/",
      "/wardogs-server-status/",
      "/wardogs-guide/"
    ]
  },

  {
    title: "WARDOGS Playtest Schedule",
    route: "/wardogs-playtest-schedule/",
    keyword: "wardogs playtest end time",
    type: "playtest_guide",
    priority: "P1",
    manualReview: "high",
    intent: "current playtest end time, next playtest, beta access, and schedule updates",
    eyebrow: "Playtest Schedule",
    h1: "WARDOGS Playtest Schedule",
    description:
      "A continuously updated WARDOGS playtest schedule page for current beta end time, next playtest status, access, and official update checks.",
    quickAnswer:
      "The current official WARDOGS beta window points to Sunday, September 6, 2026 at 08:00 UTC as the scheduled end time. A next playtest date has not been officially confirmed in the checked sources.",
    sections: [
      {
        heading: "Current schedule",
        body: "Use official Steam store and Steam news wording for active test dates. Do not treat community countdowns as the source of truth."
      },
      {
        heading: "Next playtest tracking",
        body: "This page is structured to switch from current beta end time to next playtest or next beta information when official sources publish it."
      }
    ],
    relatedRoutes: [
      "/wardogs-release-date/",
      "/wardogs-early-access/",
      "/wardogs-server-status/",
      "/wardogs-not-launching/",
      "/wardogs-missing-game-executable/",
      "/wardogs-guide/"
    ]
  },
  {
    title: "WARDOGS Helicopter Controls",
    route: "/wardogs-helicopter-controls/",
    keyword: "wardogs helicopter controls status",
    type: "controls_guide",
    priority: "P1",
    manualReview: "high",
    intent: "current helicopter control-map status and input-support boundaries",
    eyebrow: "Controls Status",
    h1: "WARDOGS Helicopter Controls",
    description:
      "A narrow WARDOGS helicopter controls status page for official keybind availability, controller limits, HOTAS status, and the full helicopter guide route.",
    quickAnswer:
      "Use the full WARDOGS Helicopter Guide for flying, landing, transport, and tips. This page tracks whether a reliable official helicopter control map or input-support note exists.",
    sections: [
      {
        heading: "Current control-map status",
        body: "Official sources confirm flyable aircraft, but a complete public helicopter keybind map has not been published in the sources checked."
      },
      {
        heading: "Where to go next",
        body: "Use the helicopter guide for flight practice and transport context, and use controller settings for broader input setup."
      }
    ],
    relatedRoutes: [
      "/wardogs-helicopter-guide/",
      "/wardogs-controller-settings/",
      "/wardogs-best-settings/",
      "/how-to-play-wardogs/",
      "/wardogs-guide/"
    ]
  }
];

export const pageMatrixByRoute = Object.fromEntries(
  pageMatrix.map((page) => [page.route, page])
) as Record<string, PageMatrixEntry>;

export function getPageByRoute(route: string) {
  return pageMatrixByRoute[route];
}

export function getPageBySlug(slug: string) {
  return pageMatrix.find((page) => page.route === `/${slug}/`);
}
