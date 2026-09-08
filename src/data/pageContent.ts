export type FactStatus =
  | "Officially confirmed"
  | "Not officially confirmed"
  | "Community-reported"
  | "General guidance"
  | "Safe generic troubleshooting";

export type GuideContentLink = {
  label: string;
  href: string;
  description?: string;
};

export type GuideFact = {
  status: FactStatus;
  text: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideContentSection = {
  heading: string;
  paragraphs?: string[];
  facts?: GuideFact[];
  links?: GuideContentLink[];
  bullets?: string[];
};

export type GuideSource = {
  label: string;
  url: string;
  type:
    | "Official"
    | "Store"
    | "Announcement"
    | "Developer FAQ"
    | "Developer Post"
    | "Support"
    | "Community"
    | "Media";
};

export type GuidePageContent = {
  quickAnswer: string[];
  sections: GuideContentSection[];
  sources: GuideSource[];
  faqs?: GuideFaq[];
  lastUpdated?: string;
  reviewNotes?: string[];
};

const steamStore: GuideSource = {
  label: "WARDOGS on Steam",
  url: "https://store.steampowered.com/app/1867240/WARDOGS/",
  type: "Store"
};

const steamAnnouncements: GuideSource = {
  label: "WARDOGS Steam announcements",
  url: "https://steamcommunity.com/app/1867240/announcements/",
  type: "Announcement"
};

const team17GamePage: GuideSource = {
  label: "Team17 WARDOGS game page",
  url: "https://www.team17.com/games/wardogs",
  type: "Official"
};

const team17PressHub: GuideSource = {
  label: "Team17 Press and Creator Hub",
  url: "https://www.team17.com/press-and-creator-hub",
  type: "Official"
};

const steamDeveloperFaq: GuideSource = {
  label: "WARDOGS developer FAQ on Steam",
  url: "https://steamcommunity.com/app/1867240/discussions/0/762932533852726673/",
  type: "Developer FAQ"
};

const supporterPack: GuideSource = {
  label: "WARDOGS Supporter Pack on Steam",
  url: "https://store.steampowered.com/app/4809960/WARDOGS__Supporter_Pack/",
  type: "Store"
};

const team17RevealTrailer: GuideSource = {
  label: "Team17 WARDOGS reveal trailer post",
  url: "https://www.team17.com/news/wardogs-reveal-trailer",
  type: "Official"
};

const steamKnownIssues: GuideSource = {
  label: "Closed Beta Known Issues & Info",
  url: "https://steamcommunity.com/app/1867240/discussions/0/586183630899134901/",
  type: "Developer Post"
};

const steamBetaDelayThread: GuideSource = {
  label: "Steam discussion with developer beta-delay reply",
  url: "https://steamcommunity.com/app/1867240/discussions/0/586183630899109396/",
  type: "Developer Post"
};

const steamAuthErrorThread: GuideSource = {
  label: "Steam community reports for error 1147405308",
  url: "https://steamcommunity.com/app/1867240/discussions/0/586183630899113049/",
  type: "Community"
};

const steamShaderCrashThread: GuideSource = {
  label: "Steam Support forum report: shader / DX12 crash",
  url: "https://steamcommunity.com/app/1867240/discussions/3/586183630899086230/",
  type: "Community"
};

const steamGameCrashesThread: GuideSource = {
  label: "Steam Support forum report: game crashes",
  url: "https://steamcommunity.com/app/1867240/discussions/3/589560061703228946/",
  type: "Community"
};

const meinMmoBetaTicker: GuideSource = {
  label: "MeinMMO Closed Beta server-status live ticker",
  url: "https://mein-mmo.de/en/wardogs-beta-server-status-in-the-live-ticker-the-queues-and-error-codes-are-over,1583529/",
  type: "Media"
};

const steamLaunchSupport: GuideSource = {
  label: "Steam Support: games do not run after Preparing to Launch",
  url: "https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF",
  type: "Support"
};

const steamVerifyFilesSupport: GuideSource = {
  label: "Steam Support: verify integrity of game files",
  url: "https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB",
  type: "Support"
};

const steamComputerCrashSupport: GuideSource = {
  label: "Steam Support: computer restarts or blue screen",
  url: "https://help.steampowered.com/en/faqs/view/6E58-B45E-9263-0B19",
  type: "Support"
};

const easyAntiCheatSupport: GuideSource = {
  label: "Easy Anti-Cheat Support",
  url: "https://www.easy.ac/support/",
  type: "Support"
};

const steamCommunityDiscussions: GuideSource = {
  label: "WARDOGS Steam community discussions",
  url: "https://steamcommunity.com/app/1867240/discussions/",
  type: "Community"
};

const steamOpenBetaNews: GuideSource = {
  label: "WARDOGS Steam news: current beta update",
  url: "https://steamcommunity.com/app/1867240/homecontent/",
  type: "Announcement"
};

const steamHotasDeveloperReply: GuideSource = {
  label: "Steam discussion with developer HOTAS response",
  url: "https://steamcommunity.com/app/1867240/discussions/0/806848045381638518/",
  type: "Developer Post"
};

const steamMissingExecutableSupport: GuideSource = {
  label: "Steam Support: Failed to Start Game (Missing Executable)",
  url: "https://help.steampowered.com/en/faqs/view/3A2A-BF2D-15FF-7963",
  type: "Support"
};

const steamMissingExecutableThread: GuideSource = {
  label: "Steam community report: WARDOGS missing game executable",
  url: "https://steamcommunity.com/app/1867240/discussions/0/588436064418606542/",
  type: "Community"
};


export const guideContentByRoute: Record<string, GuidePageContent> = {
  "/": {
    quickAnswer: [
      "WARDOGS is officially described as a tactical all-out-warfare FPS from BULKHEAD, published by Team17. Official Steam and Team17 pages describe large-scale, combined-arms multiplayer with up to 100 players split across three teams.",
      "As of August 28, 2026, the official Steam page lists WARDOGS as coming to Steam Early Access on September 10, 2026. This is not a full 1.0 release, and several launch-sensitive details may still change.",
      "WARDOGS Guide is an independent fan-made guide focused on current-version answers: Early Access, release timing, troubleshooting, settings, controls, and getting started."
    ],
    sections: [
      {
        heading: "Start Here",
        links: [
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Use the main hub to pick the right next page." },
          { label: "Release Date", href: "/wardogs-release-date/", description: "Check the confirmed Early Access date and open launch questions." },
          { label: "Early Access", href: "/wardogs-early-access/", description: "See what Early Access means, how access works, and what is still unconfirmed." },
          { label: "Playtest Schedule", href: "/wardogs-playtest-schedule/", description: "Check the current beta end time and next-playtest status." },
          { label: "Server Status", href: "/wardogs-server-status/", description: "Use this when connection, server, or matchmaking issues are the symptom." },
          { label: "Best Settings", href: "/wardogs-best-settings/", description: "Use this once current-build settings guidance has been verified." }
        ]
      },
      {
        heading: "Troubleshooting",
        paragraphs: [
          "The troubleshooting cluster covers crashing, not launching, server or matchmaking symptoms, and specific error pages. Each page separates official notes from community-reported workarounds until fixes are confirmed against the current build.",
          "For now, this site separates confirmed official information from community-reported workarounds so launch-week pages do not turn guesses into instructions."
        ],
        links: [
          { label: "Crash Troubleshooting Hub", href: "/wardogs-crashing/" },
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/" },
          { label: "WARDOGS VoIP Not Working", href: "/wardogs-voip-not-working/" },
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/" },
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/" },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" }
        ]
      },
      {
        heading: "Settings & Controls",
        paragraphs: [
          "The settings and controls pages are reserved for verified current-build advice. Steam confirms PC system requirements and online play, while exact best settings, controller behavior, and helicopter keybinds still need build-level checking before they become recommendations."
        ],
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/" },
          { label: "How to Make Money in WARDOGS", href: "/wardogs-how-to-make-money/" },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/" },
          { label: "WARDOGS Helicopter Guide", href: "/wardogs-helicopter-guide/" },
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/" }
        ]
      },
      {
        heading: "Scope",
        bullets: [
          "This is not the official WARDOGS website.",
          "This is not a full WARDOGS wiki.",
          "This is not a weapon database.",
          "This is not a tier list or meta site."
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, team17GamePage, team17PressHub, steamDeveloperFaq]
  },
  "/wardogs-guide/": {
    quickAnswer: [
      "Start with Release Date and Early Access if your question is about when or how to play. Use Server Status, Crashing, Not Launching, or Error Code 1147405308 if something fails. Use Best Settings, Controller Settings, and Helicopter Controls only for current-build setup topics.",
      "WARDOGS is still launch-sensitive as of August 28, 2026. Official sources confirm the Steam Early Access date and core game framing, while exact release time, Early Access preload, and final 1.0 date are not confirmed."
    ],
    sections: [
      {
        heading: "Getting Started",
        links: [
          { label: "What Is WARDOGS Game", href: "/what-is-wardogs-game/", description: "A short overview of the game and its official framing." },
          { label: "How to Play WARDOGS", href: "/how-to-play-wardogs/", description: "A first-match path once gameplay details are verified." },
          { label: "WARDOGS Release Date", href: "/wardogs-release-date/", description: "Confirmed launch date, platform, and open timing questions." },
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/", description: "Access, pricing, beta history, and Early Access expectations." },
          { label: "WARDOGS Playtest Schedule", href: "/wardogs-playtest-schedule/", description: "Current beta end time, next-playtest status, and official schedule checks." },
          { label: "How to Make Money in WARDOGS", href: "/wardogs-how-to-make-money/", description: "Cash, logistics, supply transport, and persistence questions." }
        ]
      },
      {
        heading: "Troubleshooting",
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Server, region, failed join, and matchmaking checks." },
          { label: "Crash Troubleshooting Hub", href: "/wardogs-crashing/", description: "Diagnose crash issues and choose the right troubleshooting route." },
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/", description: "Startup, Steam, shader, DX12, and mid-game crash fixes." },
          { label: "WARDOGS VoIP Not Working", href: "/wardogs-voip-not-working/", description: "Voice chat, microphone, and local voice reset checks." },
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/", description: "EAC login, module, splash, and anti-cheat launch symptoms." },
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/", description: "Steam missing executable, invalid executable path, and Playtest build checks." },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Startup failure and access checks." },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/", description: "Specific error lookup without unverified fixes." }
        ]
      },
      {
        heading: "Settings & Controls",
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/", description: "Graphics, visibility, and performance guidance after verification." },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/", description: "Controller, keyboard, mouse, and keybind setup." },
          { label: "WARDOGS Helicopter Guide", href: "/wardogs-helicopter-guide/", description: "Flying, landing, transport, and helicopter settings boundaries." },
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/", description: "Current helicopter keybind and input-support status." }
        ]
      },
      {
        heading: "Current-version note",
        paragraphs: [
          "Official Steam Early Access text says WARDOGS is a work in progress and may change with player feedback. Treat launch-week details such as balance, performance, access, server behavior, and input behavior as current-version information, not permanent rules."
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, team17GamePage, steamDeveloperFaq, supporterPack]
  },
  "/wardogs-release-date/": {
    quickAnswer: [
      "Officially confirmed: WARDOGS is scheduled to enter Steam Early Access on September 10, 2026. Steam lists BULKHEAD as developer and Team17 as publisher, and Team17's press hub lists the same Early Access date with Steam as the platform.",
      "Not officially confirmed: an exact global unlock hour, an Early Access preload, console launch timing, and a full 1.0 release date. Early Access is the public development launch, not the finished full release."
    ],
    sections: [
      {
        heading: "Confirmed Release Information",
        facts: [
          {
            status: "Officially confirmed",
            text: "The official Steam page lists the release date as September 10, 2026."
          },
          {
            status: "Officially confirmed",
            text: "BULKHEAD announced in Steam official announcements that WARDOGS is launching into Steam Early Access on September 10."
          },
          {
            status: "Officially confirmed",
            text: "Team17's press hub lists WARDOGS as coming to Steam Early Access on September 10, 2026, with Steam as the platform."
          }
        ]
      },
      {
        heading: "Release Time",
        facts: [
          {
            status: "Not officially confirmed",
            text: "An exact global release time has not been officially confirmed. Do not convert the date into UTC or regional unlock times until Steam, BULKHEAD, or Team17 publishes a specific hour."
          }
        ],
        paragraphs: [
          "Near launch, the Steam page is the safest place to check the local store countdown. This page should not infer an unlock hour from Steam's usual patterns."
        ]
      },
      {
        heading: "Platforms",
        facts: [
          {
            status: "Officially confirmed",
            text: "The current launch listing is Steam. Steam system requirements are for Windows PC."
          },
          {
            status: "Not officially confirmed",
            text: "No PlayStation, Xbox, or other console release date is listed on the official Steam or Team17 pages used for this update."
          }
        ]
      },
      {
        heading: "Preload",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam official announcements confirmed a separate WARDOGS Playtest preload for the August Closed Beta."
          },
          {
            status: "Not officially confirmed",
            text: "That Closed Beta preload is not an Early Access preload confirmation. No Early Access preload has been confirmed in the official sources checked on August 28, 2026."
          }
        ]
      },
      {
        heading: "Full Release",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam page says the team expects Early Access to last around 1 to 2 years, with the exact duration depending on development and community feedback."
          },
          {
            status: "Not officially confirmed",
            text: "A final version 1.0 release date has not been officially announced."
          }
        ]
      },
      {
        heading: "What to Check Before Launch",
        links: [
          { label: "Steam store page", href: "https://store.steampowered.com/app/1867240/WARDOGS/" },
          { label: "Official Steam announcements", href: "https://steamcommunity.com/app/1867240/announcements/" },
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" },
          { label: "What Is WARDOGS Game", href: "/what-is-wardogs-game/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, team17PressHub, steamDeveloperFaq],
    reviewNotes: [
      "Keep manual review high until launch-day Steam timing, preload status, and post-launch platform notes are checked again.",
      "Do not add regional unlock times unless an official source publishes the exact hour."
    ]
  },
  "/wardogs-early-access/": {
    quickAnswer: [
      "Officially confirmed: WARDOGS begins Steam Early Access on September 10, 2026. As of August 28, 2026, the Steam store lists the base pre-purchase at $39.99 in the United States and a Supporter Edition at $49.99.",
      "Official sources describe WARDOGS Early Access as a playable FPS that will continue to evolve with community feedback. The August Closed Beta was a separate pre-launch test and is not the same as Early Access.",
      "Not officially confirmed: an Early Access preload, a console release date, and the final 1.0 release date."
    ],
    sections: [
      {
        heading: "What Early Access Means",
        paragraphs: [
          "Steam's Early Access section says the developers intend to release WARDOGS as a work in progress and develop it with player feedback. The same section says players should expect the game to keep evolving through balance changes, feature expansion, and polish.",
          "The official current-state description says the Early Access version represents the core vision: large-scale three-team play, dynamic objective zones, cash and XP progression, vehicles, logistics, support play, online multiplayer, and proximity voice chat."
        ]
      },
      {
        heading: "How to Get Access",
        facts: [
          {
            status: "Officially confirmed",
            text: "Access is through Steam Early Access. The Steam store lists WARDOGS as available for pre-purchase before the September 10 launch."
          },
          {
            status: "Officially confirmed",
            text: "The Steam store lists a base WARDOGS purchase and a WARDOGS Supporter Edition."
          },
          {
            status: "Officially confirmed",
            text: "The Supporter Pack is described as optional cosmetic content. Official text says there will be no WARDOGS monetization during Early Access except this optional supporter edition."
          }
        ]
      },
      {
        heading: "What Is Included",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam Early Access description lists up to 100 players across three teams, large-scale maps with dynamic objective zones, cash and XP progression, vehicles, logistics, support-focused gameplay, online multiplayer, and proximity voice chat."
          },
          {
            status: "Officially confirmed",
            text: "Team17 describes WARDOGS as tactical gunplay and combined-arms combat with building and destruction in a large-scale militaristic sandbox."
          }
        ]
      },
      {
        heading: "Beta / Playtest vs Early Access",
        facts: [
          {
            status: "Officially confirmed",
            text: "The August Closed Beta ran as a pre-launch test from August 21 to 23, 2026. A later official announcement said that Closed Beta weekend was over."
          },
          {
            status: "Not officially confirmed",
            text: "A beta or playtest entry should not be treated as the current way to play WARDOGS once paid Steam Early Access begins."
          }
        ]
      },
      {
        heading: "Preload",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam announcements confirmed a WARDOGS Playtest preload for the Closed Beta client."
          },
          {
            status: "Not officially confirmed",
            text: "No official Early Access preload confirmation was found in the sources checked on August 28, 2026."
          }
        ]
      },
      {
        heading: "How Long Will Early Access Last",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam says the team expects WARDOGS to remain in Early Access for around 1 to 2 years."
          },
          {
            status: "Not officially confirmed",
            text: "No exact full-release calendar date has been published."
          }
        ]
      },
      {
        heading: "Console Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam and Team17 currently list Steam as the launch platform, and the Steam system requirements are for Windows PC."
          },
          {
            status: "Not officially confirmed",
            text: "No console Early Access launch or console release date is listed in the official sources used for this update."
          }
        ]
      },
      {
        heading: "What May Change",
        paragraphs: [
          "Official Early Access text says balance, pacing, progression, features, systems, content, performance, and stability may change as BULKHEAD iterates with community feedback."
        ],
        links: [
          { label: "WARDOGS Release Date", href: "/wardogs-release-date/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "How to Play WARDOGS", href: "/how-to-play-wardogs/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, team17GamePage, team17PressHub, supporterPack, steamDeveloperFaq],
    reviewNotes: [
      "Keep manual review high until Early Access actually unlocks and store/access details can be checked again.",
      "Do not mix historical Closed Beta access with the current Early Access purchase path."
    ]
  },
  "/wardogs-server-status/": {
    quickAnswer: [
      "As of August 28, 2026, no dedicated public WARDOGS server-status page or status API was found in the official sources checked. The safest official checks are the Steam store page, Steam announcements, official Steam discussion posts, and the official WARDOGS Discord or X links listed by Team17.",
      "Officially confirmed for the Closed Beta: BULKHEAD said the Server Browser may show no servers if more than one region is selected. Community and media reports also described Closed Beta launch queues and authentication errors, but those reports should be treated as beta-era context, not a live Early Access outage.",
      "If matchmaking is not working, start with low-risk checks: restart the game and Steam, confirm WARDOGS is inside an announced live window, check official announcements, and avoid assuming a server-side cause without a current official notice."
    ],
    sections: [
      {
        heading: "How to Check WARDOGS Server Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists WARDOGS as a Steam Early Access title with online PvP and a broadband internet requirement."
          },
          {
            status: "Officially confirmed",
            text: "Team17's reveal post lists official WARDOGS X and Discord links, while Steam announcements provide the most durable public archive for official updates."
          },
          {
            status: "Not officially confirmed",
            text: "No official public live server-status dashboard, server-count feed, or region-by-region status page was found in the official sources checked on August 28, 2026."
          }
        ],
        links: [
          { label: "WARDOGS on Steam", href: "https://store.steampowered.com/app/1867240/WARDOGS/" },
          { label: "Steam announcements", href: "https://steamcommunity.com/app/1867240/announcements/" },
          { label: "Team17 reveal post", href: "https://www.team17.com/news/wardogs-reveal-trailer" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      },
      {
        heading: "Server Full / Failed to Join",
        facts: [
          {
            status: "Officially confirmed",
            text: "In the Closed Beta Known Issues post, BULKHEAD said players should select a single region in the Server Browser; selecting more than one region could make no servers appear."
          },
          {
            status: "Officially confirmed",
            text: "A developer reply in a Steam queue thread said the Closed Beta had a short delay and was going live at 17:30 UTC on August 21, 2026."
          },
          {
            status: "Community-reported",
            text: "Community posts and a live ticker reported large queues, access-denied messages, and error 1147405308 during the August Closed Beta launch window."
          },
          {
            status: "Not officially confirmed",
            text: "No official server capacity number, full region list, or universal failed-to-join fix was found in the public official sources checked."
          }
        ]
      },
      {
        heading: "Matchmaking Not Working",
        facts: [
          {
            status: "Safe generic troubleshooting",
            text: "Restart WARDOGS and Steam, then try again before changing network or security settings."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Check whether the current date is inside an official playtest or Early Access live window; an old playtest client may not authenticate outside its announced window."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Check Steam announcements and pinned Steam discussions for current incident notes before assuming your local PC is the cause."
          },
          {
            status: "Safe generic troubleshooting",
            text: "If the Server Browser opens but appears empty, use BULKHEAD's Closed Beta guidance and select only one region before retesting."
          }
        ]
      },
      {
        heading: "Current Known Issues",
        facts: [
          {
            status: "Officially confirmed",
            text: "Closed Beta Known Issues confirmed that crashes were being tracked, the Server Browser had the single-region issue, local voice chat could be affected by third-party provider outages, and Supporter Pack items were not available in the Closed Beta."
          },
          {
            status: "Community-reported",
            text: "The August 21 live ticker and Steam community reports connected beta launch queues with access-denied and authentication failures, including error code 1147405308."
          },
          {
            status: "Not officially confirmed",
            text: "No current Early Access server outage is officially documented in the checked public sources as of August 28, 2026."
          }
        ],
        links: [
          { label: "Crash Troubleshooting Hub", href: "/wardogs-crashing/" },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, team17RevealTrailer, steamKnownIssues, steamBetaDelayThread, steamAuthErrorThread, meinMmoBetaTicker],
    reviewNotes: [
      "Keep manual review high because WARDOGS has no checked official live status page and Early Access has not yet unlocked as of August 28, 2026.",
      "Recheck Steam announcements, pinned Steam discussions, Discord or X, and the Steam store near launch before changing outage wording."
    ]
  },
  "/wardogs-crashing/": {
    quickAnswer: [
      "Use this page as the WARDOGS crash troubleshooting hub, not the detailed crash-fix article. If your intent is to fix WARDOGS crashing on startup, Steam launch, shader compilation, DX12, freezing, or mid-game crashes, go to the dedicated WARDOGS Crashing Fix page.",
      "Start by identifying where the failure happens: before the game opens, at the Easy Anti-Cheat splash, during login or server join, during shader compilation, inside a match, or alongside a numeric error code.",
      "Officially confirmed: BULKHEAD acknowledged Closed Beta crashes and tracked crash reports. This hub keeps that official context separate from community-reported symptoms and routes each case to the right guide."
    ],
    lastUpdated: "September 4, 2026",
    sections: [
      {
        heading: "Choose the Right Troubleshooting Path",
        links: [
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/", description: "For startup, launch, Steam, shader, DX12, freezing, and mid-game crash fix checks." },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "For cases where Steam starts WARDOGS but the game never reaches a playable state." },
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/", description: "For Easy Anti-Cheat login failed, module not found, splash, or anti-cheat launch symptoms." },
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/", description: "For Steam missing executable, invalid executable path, or executable-refused launch errors." },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "For failed joins, queues, server access, matchmaking, or online-service symptoms." },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/", description: "For the specific beta-era authentication error code." },
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Return to the main WARDOGS guide hub." }
        ]
      },
      {
        heading: "Official Crash Context",
        facts: [
          { status: "Officially confirmed", text: "BULKHEAD acknowledged Closed Beta crashes in a pinned Known Issues post and said crash reports help the team catch issues before Early Access launch." },
          { status: "Not officially confirmed", text: "No official public source checked here names one universal WARDOGS crash fix for every crash symptom." },
          { status: "General guidance", text: "Use the crash location and error text to choose the next guide instead of trying every fix path at once." }
        ]
      },
      {
        heading: "Diagnose the Crash Symptom",
        bullets: [
          "If Steam briefly starts WARDOGS and then returns to Play, use the Crashing Fix or Not Launching guide depending on whether a game window appears.",
          "If the message says missing game executable, game executable not found, invalid game executable, or points to a missing launcher path, use the Missing Game Executable page.",
          "If the message mentions Easy Anti-Cheat, failed login, module not found, or an anti-cheat splash, use the Easy Anti-Cheat guide.",
          "If the crash happens during shader compilation, DX12 startup, freezing, or mid-match play, use the Crashing Fix page.",
          "If the problem appears with queues, failed joins, matchmaking, authentication, or server access, check Server Status and the error-code page before changing local PC settings."
        ]
      },
      {
        heading: "What This Hub Does Not Do",
        bullets: [
          "It does not repeat the full WARDOGS crashing fix checklist.",
          "It does not present community-reported workaround claims as guaranteed fixes.",
          "It does not turn anti-cheat, server, or numeric error symptoms into one generic crash article.",
          "It does not replace official WARDOGS crash reporting or current build notes."
        ]
      }
    ],
    sources: [steamStore, steamKnownIssues, steamShaderCrashThread, steamGameCrashesThread, steamMissingExecutableSupport, steamLaunchSupport, steamVerifyFilesSupport, steamComputerCrashSupport],
    reviewNotes: [
      "Keep this page as a diagnosis and routing hub. Do not expand it back into the primary crash fix article.",
      "Route explicit fix-intent links and anchor text to /wardogs-crashing-fix/ instead of this hub."
    ]
  },
  "/wardogs-not-launching/": {
    quickAnswer: [
      "Officially confirmed: the Steam page lists WARDOGS as a Windows PC game and says it uses kernel-level Easy Anti-Cheat. Steam also lists minimum requirements including Windows 10, 16 GB RAM, a 64-bit processor and operating system, broadband internet, and 50 GB storage.",
      "Not officially confirmed: no public official WARDOGS-specific fix was found for access denied, launcher failure, Easy Anti-Cheat repair, antivirus conflicts, or other security conflicts.",
      "Start with safe checks: restart Windows and Steam, confirm the official live window, verify files in Steam, check official announcements, and avoid risky downloads or security changes.",
      "If Steam specifically says missing game executable, game executable not found, or invalid game executable, use the dedicated Missing Game Executable page before applying broader not-launching checks."
    ],
    sections: [
      {
        heading: "Check First",
        facts: [
          {
            status: "Safe generic troubleshooting",
            text: "Restart Windows and Steam, then launch WARDOGS again from your Steam Library."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Confirm the game is inside an official playable window. The August Closed Beta was temporary, and Steam lists Early Access for September 10, 2026."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Use Steam's file-verification tool to check the installation before reinstalling."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Check the official Steam announcements and pinned discussions for current launch or access notes."
          },
          {
            status: "Officially confirmed",
            text: "Steam lists the minimum OS as Windows 10 and the recommended OS as Windows 11, with a 64-bit processor and operating system required."
          }
        ],
        links: [
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/", description: "Use this if Steam or anti-cheat cannot find or accept the game executable." }
        ]
      },
      {
        heading: "Access Denied",
        facts: [
          {
            status: "Community-reported",
            text: "During the August Closed Beta, players reported access-denied messages after queueing, including error code 1147405308."
          },
          {
            status: "Not officially confirmed",
            text: "No official public source checked here defines every access-denied case as a local account, entitlement, server, or anti-cheat issue."
          },
          {
            status: "Safe generic troubleshooting",
            text: "If the message appears after an online queue or authentication screen, check Server Status and the specific error-code page before changing local security settings."
          }
        ],
        links: [
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" }
        ]
      },
      {
        heading: "Anti-Cheat",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam store lists WARDOGS as using kernel-level Easy Anti-Cheat."
          },
          {
            status: "Not officially confirmed",
            text: "No WARDOGS-specific official Easy Anti-Cheat repair steps were found in the public sources checked on August 28, 2026."
          },
          {
            status: "Safe generic troubleshooting",
            text: "If the splash screen appears and then closes, preserve the exact message and check official posts before repairing, deleting, or replacing anti-cheat files."
          }
        ]
      },
      {
        heading: "Do Not Recommend",
        bullets: [
          "Do not permanently disable antivirus or firewall protection.",
          "Do not download random DLL files, unofficial launchers, or replacement executables.",
          "Do not apply registry hacks or delete security components based on a single forum post.",
          "Do not assume Access Denied means an anti-cheat ban, server outage, or entitlement failure unless an official source says so."
        ]
      },
      {
        heading: "When to Wait",
        paragraphs: [
          "If launch failures appear across many Steam threads shortly after a beta, patch, or Early Access unlock, wait for Steam announcements or a pinned developer post. Repeating risky local changes can hide the original symptom."
        ],
        links: [
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/" },
          { label: "Crash Troubleshooting Hub", href: "/wardogs-crashing/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, steamKnownIssues, steamAuthErrorThread, steamMissingExecutableSupport, steamLaunchSupport, steamVerifyFilesSupport],
    reviewNotes: [
      "Keep manual review high because launch and anti-cheat symptoms are sensitive and can change with the Early Access build.",
      "Do not add Easy Anti-Cheat repair steps unless BULKHEAD, Team17, Steam, or Easy Anti-Cheat publishes WARDOGS-specific guidance."
    ]
  },
  "/wardogs-error-code-1147405308/": {
    quickAnswer: [
      "WARDOGS error code 1147405308 does not currently have a publicly documented official explanation.",
      "Community reports from the August Closed Beta show the code alongside Access Denied and failed authentication with online services, usually after a queue or login attempt. That places the observed symptom around authentication, but it does not prove one permanent root cause.",
      "Treat 1147405308 as a historical / beta-era authentication issue unless it reappears in a current official Early Access notice. Use safe checks only and avoid code-specific claims that BULKHEAD has not published."
    ],
    sections: [
      {
        heading: "Is This Official?",
        facts: [
          {
            status: "Not officially confirmed",
            text: "No official public WARDOGS source checked on August 28, 2026 publishes a numeric explanation for error code 1147405308."
          },
          {
            status: "Not officially confirmed",
            text: "No code-specific official fix was found in the Steam store page, Steam announcements, WARDOGS FAQ, or Closed Beta Known Issues post."
          },
          {
            status: "Officially confirmed",
            text: "The official Known Issues post covers Closed Beta crashes, Server Browser region selection, voice-chat provider outages, and Supporter Pack availability, but it does not name 1147405308."
          }
        ]
      },
      {
        heading: "What Players Report",
        facts: [
          {
            status: "Community-reported",
            text: "Steam players reported error 1147405308 with Access Denied and failed authentication after reaching or waiting in Closed Beta login queues."
          },
          {
            status: "Community-reported",
            text: "A live ticker reported that 1147405308 and 1628505085 were occurring frequently during the August 21 Closed Beta launch queue, then later reported that queue errors appeared resolved."
          },
          {
            status: "Community-reported",
            text: "Most checked reports place the code around login, authentication, queue completion, or server access. They do not establish a specific anti-cheat, account, or local network cause."
          }
        ]
      },
      {
        heading: "Safe Steps to Try",
        facts: [
          {
            status: "Safe generic troubleshooting",
            text: "Check whether WARDOGS is inside a currently announced live window before troubleshooting your PC."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Restart WARDOGS and Steam, then try one clean launch."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Check Steam announcements, pinned Steam discussions, and official channels for a current authentication or queue incident."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Verify game files in Steam if the client also crashes, fails to launch, or behaves differently after an update."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Keep a screenshot of the full error text, time, build, and whether it appeared during login, matchmaking, or server join."
          }
        ]
      },
      {
        heading: "Do Not State as Confirmed",
        bullets: [
          "Do not state that 1147405308 definitely means a server outage.",
          "Do not state that 1147405308 definitely means an anti-cheat issue.",
          "Do not state that changing firewall, VPN, DNS, IPv6, registry, or DLL files is an official fix.",
          "Do not treat beta-era queue reports as proof of a current Early Access outage."
        ]
      },
      {
        heading: "Historical / Beta-era Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "WARDOGS Early Access is listed for September 10, 2026, so the August reports belong to the pre-Early Access Closed Beta period."
          },
          {
            status: "Community-reported",
            text: "The strongest evidence ties 1147405308 to Closed Beta authentication and queue reports on August 21, 2026."
          },
          {
            status: "Not officially confirmed",
            text: "There is no official evidence that this code is obsolete forever, but it should be described as beta-era until a current official source repeats it."
          }
        ],
        links: [
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "Crash Troubleshooting Hub", href: "/wardogs-crashing/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, steamDeveloperFaq, steamKnownIssues, steamAuthErrorThread, steamBetaDelayThread, meinMmoBetaTicker, steamVerifyFilesSupport],
    reviewNotes: [
      "Keep manual review high because the official numeric meaning and any official fix for 1147405308 remain undocumented.",
      "Recheck official sources after Early Access unlocks before calling the code active, fixed, server-side, or local."
    ]
  },
  "/wardogs-crashing-fix/": {
    quickAnswer: [
      "If WARDOGS keeps crashing, start with safe, reversible checks: restart Steam and Windows, verify the game files in Steam, update Windows and GPU drivers, compare your PC with the Steam requirements, and check current official posts before changing security or anti-cheat files.",
      "Officially confirmed: BULKHEAD's Closed Beta Known Issues post says crash reports were being tracked during testing. It does not publish one universal WARDOGS crashing fix.",
      "Community-reported: Steam players have reported shader-compilation crashes, DX12-adjacent crash dumps, EXCEPTION_ACCESS_VIOLATION, Steam launch failures, and mid-game freezes. Treat those as evidence of symptoms, not guaranteed fixes."
    ],
    lastUpdated: "September 4, 2026",
    sections: [
      {
        heading: "Start Here: Safe Checks",
        facts: [
          { status: "Officially confirmed", text: "Steam lists WARDOGS as a Windows PC title with published system requirements and kernel-level Easy Anti-Cheat on the store page." },
          { status: "Officially confirmed", text: "BULKHEAD's Closed Beta Known Issues post says crashes were being tracked and that crash reports helped the team catch issues before Early Access launch." },
          { status: "Safe generic troubleshooting", text: "Restart Windows and Steam, then launch WARDOGS once from the Steam Library before changing deeper settings." },
          { status: "Safe generic troubleshooting", text: "Use Steam's Verify integrity of game files tool before reinstalling the game." },
          { status: "Safe generic troubleshooting", text: "Update Windows and GPU drivers, close non-essential overlays or recording tools for one clean test, and keep notes so every change can be reversed." }
        ]
      },
      {
        heading: "Startup, Launch, and Steam Crashes",
        paragraphs: [
          "For wardogs crashing on startup, wardogs crashing on launch, or wardogs crashing on Steam, first identify what you actually see: the Steam button flips back to Play, an anti-cheat splash closes, shader compilation starts and then exits, or the menu loads before the client freezes.",
          "Steam's general launch support and file-verification support are safe first checks. They are not WARDOGS-specific official fixes, but they avoid risky steps such as deleting DLL files, swapping executables, or changing security software permanently."
        ],
        links: [
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Use this if Steam opens the game and it never reaches a playable state." },
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/", description: "Use this if the crash appears around Easy Anti-Cheat, login, or an anti-cheat module message." }
        ]
      },
      {
        heading: "Shader Compilation, DX12, and EXCEPTION_ACCESS_VIOLATION",
        facts: [
          { status: "Community-reported", text: "Steam Support forum reports describe WARDOGS Playtest crashing after shader compilation, including DX12-adjacent crash discussion and 0xC0000005 EXCEPTION_ACCESS_VIOLATION in player-provided crash details." },
          { status: "Not officially confirmed", text: "No official public source checked on September 4, 2026 confirms one WARDOGS-specific root cause or guaranteed fix for shader compilation crashes, wardogs crashing dx12, or EXCEPTION_ACCESS_VIOLATION." },
          { status: "Safe generic troubleshooting", text: "If the crash always happens during shader compilation, preserve the crash text, driver version, Windows build, GPU model, and whether the same crash happens after Steam file verification." }
        ]
      },
      {
        heading: "Mid-Game Freezing and Crashes",
        facts: [
          { status: "Community-reported", text: "Steam players have reported wardogs crashing mid game, hard crashes, and wardogs freezing and crashing after entering matches. These reports help identify patterns, but they are not a universal fix list." },
          { status: "Safe generic troubleshooting", text: "Record match timing, server region, graphics preset, overlays, and the exact crash behavior before repeating the same test." },
          { status: "Safe generic troubleshooting", text: "If WARDOGS causes a full PC restart or blue screen, stop repeated launch attempts and treat it as a system-level crash. Steam's support guidance for blue screens and restarts is the safer reference point." }
        ],
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Use this if the symptom looks like server kicks, failed joins, or login failures instead of a local crash." }
        ]
      },
      {
        heading: "Easy Anti-Cheat-Related Crash Symptoms",
        paragraphs: [
          "Steam's store disclosure currently lists Easy Anti-Cheat for WARDOGS. If the crash happens before or during the anti-cheat splash, or if the error mentions login failed, failed to login, module not found, or an anti-cheat server error, do not mix that with generic crash advice.",
          "Use the dedicated anti-cheat page for safe EAC troubleshooting boundaries and link generic wardogs crashing PC symptoms back here."
        ],
        links: [
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/", description: "EAC login failed, module not found, anti-cheat splash, and launch crash checks." },
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Return to the central WARDOGS troubleshooting hub." }
        ]
      }
    ],
    faqs: [
      { question: "Why does WARDOGS keep crashing on startup?", answer: "There is no single official cause confirmed for every startup crash. Start with Steam file verification, a Steam and Windows restart, driver updates, and current official posts before trying community workarounds." },
      { question: "Is EXCEPTION_ACCESS_VIOLATION a confirmed WARDOGS bug?", answer: "EXCEPTION_ACCESS_VIOLATION appears in Steam player reports around shader-compilation crashes, but no official public WARDOGS source checked here confirms it as one universal bug with one guaranteed fix." },
      { question: "Should I reinstall WARDOGS to fix crashing?", answer: "Reinstalling is not the first confirmed WARDOGS fix. Verify game files in Steam first, then only reinstall if safe checks and official guidance leave no better option." },
      { question: "Can Easy Anti-Cheat make WARDOGS crash on launch?", answer: "WARDOGS is listed on Steam with Easy Anti-Cheat, so anti-cheat-adjacent launch symptoms are possible. Use the anti-cheat guide if the crash occurs at the EAC splash or names an anti-cheat login or module error." }
    ],
    sources: [steamStore, steamKnownIssues, steamShaderCrashThread, steamGameCrashesThread, steamLaunchSupport, steamVerifyFilesSupport, steamComputerCrashSupport, easyAntiCheatSupport],
    reviewNotes: [
      "Keep manual review high because WARDOGS crash behavior can change with the current beta and Early Access builds.",
      "Do not publish BIOS, registry, DLL, antivirus-disable, or anti-cheat file-swap advice unless official WARDOGS, Steam, or Easy Anti-Cheat guidance supports it for the current build."
    ]
  },
  "/wardogs-voip-not-working/": {
    quickAnswer: [
      "If WARDOGS VoIP is not working, first identify the direction of the problem: you cannot hear other players, other players cannot hear you, or local voice chat drops after working for a while.",
      "Officially confirmed for the Closed Beta: BULKHEAD said lost local voice chat could be reset by turning voice chat off in settings or opening the scoreboard and pressing U twice to toggle mute/unmute. BULKHEAD also noted possible third-party voice provider outages.",
      "If your microphone works in Windows and Steam but not in WARDOGS, do not assume reinstalling the game is a confirmed fix. The symptom may be game-side, server-side, or related to the voice provider."
    ],
    lastUpdated: "September 4, 2026",
    sections: [
      {
        heading: "First Separate the Voice Chat Symptom",
        facts: [
          { status: "General guidance", text: "If you cannot hear others, check output device, volume, in-game voice settings, and whether the issue follows one server or one session." },
          { status: "General guidance", text: "If others cannot hear you, check the selected Windows and Steam microphone input before treating WARDOGS as broken." },
          { status: "Officially confirmed", text: "Steam lists WARDOGS with online PvP and official material describes proximity voice chat as part of the Early Access feature set." }
        ]
      },
      {
        heading: "Official Local Voice Chat Workaround",
        facts: [
          { status: "Officially confirmed", text: "BULKHEAD's Closed Beta Known Issues post says that if local voice chat is lost, players can turn voice chat off in settings or open the scoreboard and press U twice to toggle mute/unmute." },
          { status: "Officially confirmed", text: "The same official post says there are potential outages with the third-party voice provider that the team was investigating." },
          { status: "Safe generic troubleshooting", text: "After using the scoreboard + U twice workaround, test in the same context before changing microphone drivers or reinstalling the game." }
        ]
      },
      {
        heading: "If Others Cannot Hear You",
        bullets: [
          "Confirm Windows is using the intended microphone and the device is not muted at the hardware level.",
          "Confirm Steam voice input uses the same microphone that works in Windows.",
          "Check the current WARDOGS voice setting and input binding in-game instead of assuming a key from another build.",
          "If Windows and Steam both pass but WARDOGS fails, treat it as possibly game-side, server-side, or voice-provider-side."
        ]
      },
      {
        heading: "If You Cannot Hear Others",
        bullets: [
          "Check that WARDOGS audio is routed to the expected output device.",
          "Try the official local voice reset path: turn voice chat off and on, or open the scoreboard and press U twice.",
          "If voice works on one server but not another, rejoin or test another server before changing system audio settings.",
          "Check current official posts if many players report the same wardogs voice chat issues at once."
        ]
      },
      {
        heading: "Server or Provider-Side VoIP Issues",
        paragraphs: [
          "WARDOGS voice chat can fail even when your microphone is healthy. BULKHEAD specifically noted potential third-party provider outages during the Closed Beta, so widespread wardogs voip issues may not be fixable from your PC.",
          "Restarting the game, rejoining, or trying another server can be reasonable when the issue is session-specific. Reinstalling WARDOGS is not a confirmed voice chat fix in the checked official sources."
        ],
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Use this if voice issues appear alongside server, login, queue, or matchmaking symptoms." },
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/", description: "Use this if voice issues appear with freezing, crashing, or client instability." },
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Return to the central WARDOGS troubleshooting hub." }
        ]
      }
    ],
    faqs: [
      { question: "How do I fix WARDOGS voice chat not working?", answer: "Try the official Closed Beta workaround first: turn voice chat off and on, or open the scoreboard and press U twice to toggle mute/unmute. Then check whether the issue is input, output, server, or provider-side." },
      { question: "Why can other players not hear my mic in WARDOGS?", answer: "Check the microphone selected in Windows and Steam, then confirm WARDOGS is using the intended voice setting. If the mic works outside the game, the issue may be game-side or voice-service-side." },
      { question: "Why can I not hear other players in WARDOGS?", answer: "Check output device and game audio first, then use the scoreboard + U twice voice reset workaround. If many players report it at once, check official posts for a provider outage." },
      { question: "Is reinstalling WARDOGS a confirmed VoIP fix?", answer: "No. The checked official WARDOGS sources do not confirm reinstalling as a VoIP fix. Start with input/output checks, the official local voice workaround, and current server or provider notes." }
    ],
    sources: [steamStore, steamKnownIssues, steamCommunityDiscussions],
    reviewNotes: [
      "Keep manual review high because voice chat behavior can change across beta and Early Access builds.",
      "Do not claim that reinstalling WARDOGS, reinstalling audio drivers, or changing network settings is a confirmed VoIP fix unless official guidance confirms it."
    ]
  },
  "/wardogs-easy-anti-cheat-error-fix/": {
    quickAnswer: [
      "Steam currently lists WARDOGS as using Easy Anti-Cheat, shown as kernel-level anti-cheat on the store page. That is the safest public source for the EAC wording.",
      "No public WARDOGS-specific official fix was found for Easy Anti-Cheat login failed, failed to login, module not found, anti-cheat server error, or EAC splash-screen crashes in the sources checked on September 4, 2026.",
      "Use safe checks only: restart Steam and Windows, verify files in Steam, check official WARDOGS posts, and use Easy Anti-Cheat official support for generic EAC help. Do not download replacement DLLs, run unofficial repair tools, or permanently disable security software."
    ],
    lastUpdated: "September 4, 2026",
    sections: [
      {
        heading: "What Anti-Cheat Does WARDOGS Use?",
        facts: [
          { status: "Officially confirmed", text: "The official Steam store page for WARDOGS lists Easy Anti-Cheat and labels it as kernel-level anti-cheat." },
          { status: "Community-reported", text: "Some September 2026 Steam community posts discuss Elytra or build-specific anti-cheat behavior. These posts are useful context, but they are not a replacement for the current Steam store disclosure or an official public migration note." },
          { status: "Not officially confirmed", text: "No public official WARDOGS post checked here confirms a single, universal player-side fix for all wardogs anticheat launch or login errors." }
        ]
      },
      {
        heading: "Login Failed or Failed to Login",
        facts: [
          { status: "Community-reported", text: "During the August Closed Beta, Steam players reported access-denied and failed-authentication symptoms around online login and queueing." },
          { status: "Not officially confirmed", text: "Those beta login reports do not prove that every wardogs anticheat login fail or wardogs anticheat failed to login message is caused by Easy Anti-Cheat. It may also be account, server, entitlement, or build availability related." },
          { status: "Safe generic troubleshooting", text: "Check official announcements and server-status context before changing local anti-cheat or security settings." }
        ],
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Use this if the anti-cheat message appears with queues, login, failed joins, or server access." },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/", description: "Use this if the symptom includes the beta-era authentication error code." }
        ]
      },
      {
        heading: "Module Not Found or Module Could Not Be Downloaded",
        paragraphs: [
          "For wardogs anti cheat module not found symptoms, no WARDOGS-specific official fix was found in the checked public sources. Keep the troubleshooting reversible: restart Steam and Windows, verify files through Steam, and check Easy Anti-Cheat support for generic EAC guidance.",
          "Do not download a missing module from a third-party site, copy files from another game, or run unknown executables. Anti-cheat components are security-sensitive and build-specific."
        ],
        links: [
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/", description: "Use this if the launcher or Steam says the game executable itself is missing or invalid." }
        ]
      },
      {
        heading: "EAC Splash or Anti-Cheat Launch Crash",
        facts: [
          { status: "Safe generic troubleshooting", text: "If wardogs crashing before Easy Anti-Cheat finishes loading, preserve the exact error text and time, then verify Steam files before reinstalling." },
          { status: "Safe generic troubleshooting", text: "Close overlays or apps that inject into games for one clean test, but do not permanently disable antivirus, firewall, or Windows security protections." },
          { status: "General guidance", text: "If the symptom is shader compilation, DX12, freezing, or a mid-game crash rather than a clear EAC message, use the WARDOGS crashing fix page." }
        ],
        links: [
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/", description: "Startup, Steam, shader, DX12, and mid-game crash diagnosis." },
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/", description: "Missing executable, invalid path, and executable-refused checks." },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Startup failure and access checks." }
        ]
      },
      {
        heading: "Safe EAC Troubleshooting Boundary",
        bullets: [
          "Restart Steam and Windows before changing files.",
          "Verify WARDOGS files through Steam.",
          "Check the official Steam store page, Steam announcements, pinned developer posts, and Easy Anti-Cheat support.",
          "Avoid permanent antivirus or firewall disablement.",
          "Avoid BIOS, registry, DLL, driver, or security-service changes unless official guidance for the current WARDOGS build supports them."
        ],
        links: [
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Return to the main WARDOGS guide and troubleshooting hub." }
        ]
      }
    ],
    faqs: [
      { question: "Does WARDOGS use Easy Anti-Cheat?", answer: "The official Steam store page currently lists WARDOGS with Easy Anti-Cheat and labels it as kernel-level anti-cheat. Community posts may discuss build-specific anti-cheat changes, so check official sources before assuming the current build behavior." },
      { question: "Is every WARDOGS login failed message an anti-cheat issue?", answer: "No. Beta-era reports connect failed authentication and access denied with online queues and server load, but they do not prove every login failed message is caused by anti-cheat." },
      { question: "How do I fix WARDOGS anti-cheat module not found?", answer: "No WARDOGS-specific official module-not-found fix was found. Use safe steps: restart Steam and Windows, verify files in Steam, check official WARDOGS posts, and use Easy Anti-Cheat official support for generic help." },
      { question: "Should I disable antivirus to fix WARDOGS anti-cheat?", answer: "Do not permanently disable antivirus or firewall protection. If a security tool is suspected, test cautiously and follow official WARDOGS, Steam, or Easy Anti-Cheat guidance rather than downloading replacement files or using unofficial repair tools." }
    ],
    sources: [steamStore, steamKnownIssues, steamAuthErrorThread, steamMissingExecutableSupport, steamLaunchSupport, steamVerifyFilesSupport, easyAntiCheatSupport, steamCommunityDiscussions],
    reviewNotes: [
      "Keep manual review high because WARDOGS anti-cheat behavior appears build-sensitive and public player reports may conflict with the Steam store disclosure.",
      "Do not add WARDOGS-specific EAC repair steps, BIOS changes, Secure Boot claims, or module-download claims without official current-build evidence."
    ]
  },
  "/wardogs-missing-game-executable/": {
    quickAnswer: [
      "First decide whether WARDOGS should be playable right now. As of September 8, 2026, the last official beta window checked for this page had already ended on Sunday, September 6, 2026 at 08:00 UTC, while Steam lists Early Access for September 10, 2026. If you are launching an old Playtest entry outside an active window, repeated verify, reinstall, or system-setting changes may not restore a playable build.",
      "If WARDOGS is inside an active playtest or Early Access window and Steam says missing game executable, game executable not found, or invalid game executable, check whether Steam actually downloaded real game files before touching anti-cheat or security settings.",
      "If the error names Easy Anti-Cheat, Elytra, or an anti-cheat module instead of a missing file, treat it as an anti-cheat launch symptom. Steam officially lists Easy Anti-Cheat for WARDOGS; Elytra-specific errors are currently community-reported and build-specific, not a universal official WARDOGS fix path."
    ],
    lastUpdated: "September 8, 2026",
    sections: [
      {
        heading: "Is the WARDOGS Playtest Still Active?",
        facts: [
          {
            status: "Officially confirmed",
            text: "The official Steam store page lists WARDOGS Early Access for September 10, 2026 and describes a closed beta access window ending September 6, 2026 at 08:00 UTC."
          },
          {
            status: "Officially confirmed",
            text: "The official Steam news feed said the beta was open until Sunday at 08:00 UTC."
          },
          {
            status: "General guidance",
            text: "Because September 8, 2026 is after that listed beta end time, check official Steam announcements before assuming a WARDOGS Playtest build should still launch."
          }
        ],
        links: [
          { label: "WARDOGS Playtest Schedule", href: "/wardogs-playtest-schedule/", description: "Check official beta end time and next-playtest status." },
          { label: "WARDOGS on Steam", href: "https://store.steampowered.com/app/1867240/WARDOGS/", description: "Confirm the current Steam access state." }
        ]
      },
      {
        heading: "Why WARDOGS Says Missing Game Executable",
        paragraphs: [
          "The same visible error can point to different problems: a Playtest entry that is no longer available, incomplete Steam local files, an old manifest or launch path, or an anti-cheat/launcher refusal.",
          "Do not treat every WARDOGS missing executable message as a damaged PC. Start by checking whether the current Steam client is supposed to contain a playable executable at all."
        ],
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam has an official support page for Failed to Start Game (Missing Executable) and a separate support page for verifying game files."
          },
          {
            status: "Community-reported",
            text: "August 2026 WARDOGS Steam discussion reports describe players receiving Playtest access after a test ended or seeing very small downloads while Steam still showed a missing executable message."
          }
        ]
      },
      {
        heading: "Playtest Ended / Build No Longer Available",
        bullets: [
          "If you are launching WARDOGS Playtest after September 6, 2026 at 08:00 UTC and no newer official test window is posted, treat availability as the first suspect.",
          "Do not repeatedly verify or reinstall an ended Playtest build expecting Steam to create an executable that is no longer being delivered.",
          "Use the Steam store, Steam announcements, and Playtest Schedule page before changing Windows security, drivers, registry, or anti-cheat files.",
          "If Early Access has not unlocked yet for your region or account, wait for the official Steam unlock state instead of forcing the Playtest client."
        ],
        links: [
          { label: "WARDOGS Playtest Schedule", href: "/wardogs-playtest-schedule/" },
          { label: "WARDOGS Release Date", href: "/wardogs-release-date/" },
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/" }
        ]
      },
      {
        heading: "Verify the WARDOGS Installation in Steam",
        paragraphs: [
          "Use Steam file verification only after you have confirmed that the WARDOGS client you are launching should currently be available. This is a safe Steam-level check for incomplete or corrupted local files.",
          "In Steam, use the WARDOGS or WARDOGS Playtest Library entry, open Properties, go to Installed Files, and run Verify integrity of game files. If Steam downloads missing content afterward, restart Steam before testing again."
        ],
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam Support documents verifying game files from the Steam client."
          },
          {
            status: "Safe generic troubleshooting",
            text: "If the installation size is suspiciously tiny, first check whether Steam is still delivering the current WARDOGS build instead of looping verification."
          }
        ]
      },
      {
        heading: "Check the Executable / Launcher Path",
        paragraphs: [
          "Use Steam's Browse local files action instead of typing a path from a guide or forum post. Your Steam library may be on a different drive, and Playtest launch paths can change between builds.",
          "If the WARDOGS folder has a full install but the expected launcher is genuinely absent, verify files through Steam. Do not create a fake executable, copy another player's file, or download a replacement EXE/DLL."
        ],
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam store lists WARDOGS as a Windows PC game with 50 GB available storage in the published requirements."
          },
          {
            status: "Community-reported",
            text: "Some Playtest-era reports mention old or specific executable paths, but those path names should not be treated as official current-build documentation."
          }
        ]
      },
      {
        heading: "Anti-Cheat Refused the Game Executable",
        paragraphs: [
          "If the message changes from missing executable to invalid game executable, anti-cheat module could not be downloaded, failed to install, or service start failed, the problem has moved from Steam content delivery to anti-cheat or launcher acceptance.",
          "Keep this separate from ordinary WARDOGS crashes. An anti-cheat refusal can stop the game before a normal window or menu appears."
        ],
        facts: [
          {
            status: "Officially confirmed",
            text: "The WARDOGS Steam store currently lists kernel-level Easy Anti-Cheat."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Use official WARDOGS posts, Steam file verification, and Easy Anti-Cheat support before making security or system-level changes."
          }
        ],
        links: [
          { label: "WARDOGS Easy Anti-Cheat Error Fix", href: "/wardogs-easy-anti-cheat-error-fix/", description: "Use this for EAC login, module, splash, or anti-cheat launch messages." }
        ]
      },
      {
        heading: "Elytra / Anti-Cheat Troubleshooting",
        paragraphs: [
          "Elytra appears in current WARDOGS player reports, but the checked official public WARDOGS source still lists Easy Anti-Cheat. Treat Elytra wording as community-reported and build-specific unless BULKHEAD, Team17, Steam, or an official support channel confirms a current public fix.",
          "If your own WARDOGS install includes Elytra files and the launcher specifically names Elytra, only use files that came from your Steam installation. Do not download Elytra, WARDOGS executables, DLLs, or anti-cheat components from third-party sites."
        ],
        facts: [
          {
            status: "Community-reported",
            text: "September 2026 Steam discussion reports mention Elytra Launcher and Elytra.Service errors, including anti-cheat module download or install symptoms."
          },
          {
            status: "Community-reported",
            text: "Some comments mention high-risk Windows security changes such as Smart App Control. This page does not recommend those as confirmed WARDOGS fixes."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Preserve the exact error text, restart Steam and Windows once, verify files, and check official posts before escalating beyond reversible steps."
          }
        ]
      },
      {
        heading: "Invalid Game Executable Path",
        paragraphs: [
          "An invalid game executable path can mean Steam is pointing to a file that is not present, the Playtest manifest is stale, or anti-cheat refused the executable before launch. The order matters: availability first, Steam files second, anti-cheat third.",
          "If you are using a shortcut, custom launch option, or old Playtest entry, launch from the Steam Library entry and clear any custom launch option before retesting. Keep the path check simple and reversible."
        ],
        links: [
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Use this for broader startup failure diagnosis." },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Use this if the game opens but login, queues, or servers fail." }
        ]
      },
      {
        heading: "Still Not Launching?",
        bullets: [
          "If WARDOGS opens a window and then crashes or freezes, move to the crash troubleshooting pages.",
          "If Steam or the launcher cannot find or accept the executable, stay on this page and avoid unrelated graphics or gameplay fixes.",
          "If the game opens but fails during login, matchmaking, queues, or server selection, check server status and playtest availability before local repairs.",
          "If the error is anti-cheat-specific, use the anti-cheat page and keep community workarounds clearly labeled."
        ],
        links: [
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/", description: "Crash diagnosis after the game can start." },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Broader launch failure checks." },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Login, queue, failed join, and server symptoms." },
          { label: "WARDOGS Guide", href: "/wardogs-guide/", description: "Return to the main guide hub." }
        ]
      }
    ],
    faqs: [
      {
        question: "What does WARDOGS missing game executable mean?",
        answer: "It means Steam or the launcher cannot find the executable it expects. For WARDOGS, first check whether the Playtest or Early Access build should be playable, then verify Steam files only if the build should currently be available."
      },
      {
        question: "Can an ended WARDOGS Playtest cause missing executable errors?",
        answer: "Yes, it can. The last official beta window checked for this page ended on September 6, 2026 at 08:00 UTC. If you are launching an old Playtest entry after that, verify the official schedule before reinstalling."
      },
      {
        question: "Should I reinstall WARDOGS to fix missing game executable?",
        answer: "Not first. Confirm the current playable window and correct Steam client, then run Steam file verification. Reinstalling an unavailable or placeholder Playtest build can repeat the same problem."
      },
      {
        question: "Is Elytra the official WARDOGS anti-cheat?",
        answer: "The official Steam store currently lists Easy Anti-Cheat. Elytra appears in WARDOGS player reports and should be treated as community-reported or build-specific unless official WARDOGS sources confirm the current anti-cheat behavior."
      },
      {
        question: "Should I download a missing WARDOGS executable or DLL?",
        answer: "No. Do not download WARDOGS executables, DLLs, launchers, or anti-cheat components from third-party sites. Use Steam installation checks and official support sources."
      }
    ],
    sources: [steamStore, steamOpenBetaNews, steamAnnouncements, steamMissingExecutableSupport, steamVerifyFilesSupport, steamLaunchSupport, easyAntiCheatSupport, steamMissingExecutableThread, steamCommunityDiscussions],
    reviewNotes: [
      "Keep this page focused on Steam/launcher/anti-cheat executable lookup failures, not ordinary crashes after the game starts.",
      "Do not publish third-party executable downloads, DLL swaps, permanent security disablement, or Elytra repair claims as official WARDOGS fixes without official current-build evidence."
    ]
  },
  "/wardogs-best-settings/": {
    quickAnswer: [
      "There is no single officially recommended 'best settings' preset for WARDOGS.",
      "Official sources confirm Windows PC system requirements and describe scalable graphics options, but they do not publish a complete current-build graphics menu, FPS cap guidance, VSync guidance, DLSS / FSR / XeSS details, or frame-generation support as of August 28, 2026.",
      "Use this page as a safe starting point: match your PC against the Steam requirements, start with conservative graphics choices, change one setting at a time, and avoid copying exact FPS or visibility presets until they are verified in the current Early Access build."
    ],
    sections: [
      {
        heading: "Official System Requirements",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists WARDOGS as requiring a 64-bit processor and operating system, Windows 10 minimum, 16 GB RAM, broadband internet, and 50 GB storage."
          },
          {
            status: "Officially confirmed",
            text: "Steam lists the minimum CPU/GPU target as Intel Core i5-8600 or AMD Ryzen 5 3500, with NVIDIA GTX 1660 or AMD RX 590-class graphics, described for 1080p Low at 60 FPS with upscaling."
          },
          {
            status: "Officially confirmed",
            text: "Steam lists the recommended CPU/GPU target as Intel Core i7-12700K or AMD Ryzen 7 5700X, with NVIDIA RTX 3070 or AMD RX 6700 XT-class graphics, described for 1440p Medium above 70 FPS native or 4K Medium above 60 FPS with upscaling."
          }
        ]
      },
      {
        heading: "What to Adjust First",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official Steam requirements reference Low and Medium quality targets, native rendering, and upscaled rendering."
          },
          {
            status: "Officially confirmed",
            text: "A Steam development post describes graphics options that let players tune WARDOGS to their PC, but does not provide a public best-settings preset."
          },
          {
            status: "General guidance",
            text: "Begin with the quality level closest to your hardware class, then adjust resolution or upscaling before changing many smaller options at once."
          },
          {
            status: "General guidance",
            text: "After each change, test the same scene or match type so you can tell which adjustment actually helped."
          }
        ]
      },
      {
        heading: "Performance vs Visual Quality",
        facts: [
          {
            status: "General guidance",
            text: "Favor steady frame pacing over a higher but unstable FPS reading, especially in a large multiplayer FPS where combat readability matters."
          },
          {
            status: "General guidance",
            text: "If performance is unstable, lower broad visual quality or rendering load first. Do not use unverified WARDOGS-specific FPS caps or console commands."
          },
          {
            status: "Not officially confirmed",
            text: "A complete official list of display mode, VSync, FPS cap, anti-aliasing, motion blur, DLSS, FSR, XeSS, or frame-generation options was not found in the official sources checked."
          }
        ]
      },
      {
        heading: "Community-reported Performance Issues",
        facts: [
          {
            status: "Community-reported",
            text: "Steam community discussion around the beta period included mixed performance reports, including stutter, shader or DirectX crash discussion, and hardware-specific complaints."
          },
          {
            status: "Community-reported",
            text: "Those reports are useful for cross-checking symptoms, but they are not an official best-settings preset and should not be copied as universal advice."
          }
        ]
      },
      {
        heading: "Settings We Cannot Verify Yet",
        facts: [
          {
            status: "Not officially confirmed",
            text: "No official public WARDOGS source checked here confirms a recommended FPS cap, VSync setting, display mode, DLSS preset, FSR preset, XeSS preset, frame generation setting, or visibility preset."
          },
          {
            status: "Not officially confirmed",
            text: "Do not publish exact competitive graphics values until the current Early Access build can be checked directly."
          }
        ],
        links: [
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/" },
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, steamDeveloperFaq, steamCommunityDiscussions],
    reviewNotes: [
      "Keep manual review high because exact graphics menus, performance behavior, and best-setting presets require current-build verification.",
      "Do not add exact FPS caps, DLSS/FSR/XeSS settings, frame-generation claims, or visibility presets unless an official source or verified in-game check confirms them."
    ]
  },
  "/wardogs-controller-settings/": {
    quickAnswer: [
      "Officially confirmed: WARDOGS has limited controller support in the current version according to the Steam developer FAQ.",
      "Not officially confirmed: a complete Xbox / PlayStation button map, a full keybind table, controller-specific sensitivity values, deadzone settings, and current HOTAS support were not found in official public sources checked on August 28, 2026.",
      "Use keyboard and mouse as the safest default expectation for launch-sensitive guidance, then verify any controller setup inside the current in-game controls menu before publishing exact bindings."
    ],
    sections: [
      {
        heading: "Official Controller Support",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam developer FAQ says controller support is limited in the current version."
          },
          {
            status: "Officially confirmed",
            text: "A Steam announcement says a development update covered gamepad support, but the checked public sources do not provide a complete controller layout."
          },
          {
            status: "Not officially confirmed",
            text: "No official Xbox controller map, PlayStation controller map, or full Steam Input profile was found in the sources checked."
          }
        ]
      },
      {
        heading: "Input Options",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists WARDOGS as a Windows PC game, and official material shows it as a PC / Steam Early Access launch."
          },
          {
            status: "Not officially confirmed",
            text: "Official sources checked here do not publish a complete current-build list of aim sensitivity, controller sensitivity, deadzone, acceleration, or input smoothing options."
          },
          {
            status: "General guidance",
            text: "Check the current in-game Settings or Controls menu before relying on any controller layout shared during beta or playtest periods."
          }
        ]
      },
      {
        heading: "Keyboard / Mouse vs Controller",
        facts: [
          {
            status: "General guidance",
            text: "For a PC Early Access FPS with limited official controller support, keyboard and mouse should be treated as the most reliable default input path until controller behavior is verified in the current build."
          },
          {
            status: "Community-reported",
            text: "Community discussions include mixed controller experiences, including players asking about gamepad support and reports that some bindings or interactions were not fully covered."
          }
        ]
      },
      {
        heading: "Keybinds and Rebinding",
        facts: [
          {
            status: "Not officially confirmed",
            text: "A complete official WARDOGS keybind list has not been published in the sources checked."
          },
          {
            status: "Not officially confirmed",
            text: "Official public sources checked here do not confirm exactly which keyboard, mouse, controller, vehicle, or helicopter bindings can be rebound."
          },
          {
            status: "General guidance",
            text: "Document only the bindings shown by the live in-game menu after Early Access build verification."
          }
        ]
      },
      {
        heading: "Known Controller Issues",
        facts: [
          {
            status: "Community-reported",
            text: "Steam community posts around beta access include controller and keybinding questions, but they are not official issue acknowledgements."
          },
          {
            status: "Not officially confirmed",
            text: "No official controller-specific known-issues list was found in the public sources checked on August 28, 2026."
          }
        ]
      },
      {
        heading: "What Is Not Yet Confirmed",
        facts: [
          {
            status: "Not officially confirmed",
            text: "Xbox controller layout, PlayStation controller layout, full rebinding coverage, aim assist, deadzone controls, controller sensitivity values, and HOTAS / flight-stick support for the current build are not confirmed in the checked official sources."
          }
        ],
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/" },
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, steamDeveloperFaq, steamCommunityDiscussions],
    reviewNotes: [
      "Keep manual review high because controller behavior, keybinds, and rebinding coverage must be checked in the current Early Access build.",
      "Do not publish a controller button map unless official documentation or direct in-game verification confirms it."
    ]
  },
  "/wardogs-helicopter-guide/": {
    quickAnswer: [
      "WARDOGS officially includes flyable aircraft, vehicles, logistics, and helicopter supply transport. That is enough to write a helicopter guide, but not enough to invent exact keybinds or handling values.",
      "At the time of this update, no complete official helicopter control map was found in public WARDOGS sources. Before flying, open the current in-game controls menu and confirm the live keyboard, mouse, and controller bindings.",
      "Use this page for the full helicopter intent: controls checks, how to fly, how to land, aiming and transport basics, mouse/controller settings, and cautious helicopter tips. Use the Helicopter Controls page only for current keybind-status notes."
    ],
    sections: [
      {
        heading: "What Is Officially Confirmed",
        facts: [
          {
            status: "Officially confirmed",
            text: "The WARDOGS Steam developer FAQ says the game includes drivable vehicles and flyable aircraft."
          },
          {
            status: "Officially confirmed",
            text: "The Steam store Early Access description lists vehicles, logistics, support-focused gameplay, and up to 100-player online multiplayer."
          },
          {
            status: "Officially confirmed",
            text: "Team17 describes helicopter supply transport as part of WARDOGS support play."
          },
          {
            status: "Officially confirmed",
            text: "The Supporter Pack includes a Littlebird Helicopter Taxi Camo, confirming helicopter-related cosmetic content."
          }
        ]
      },
      {
        heading: "Helicopter Controls: Check the Live Menu First",
        facts: [
          {
            status: "Not officially confirmed",
            text: "No complete public WARDOGS helicopter keybind map was found in the official sources checked for this update."
          },
          {
            status: "General guidance",
            text: "Open the live Settings or Controls menu before flying and confirm whether aircraft bindings are separated from infantry, ground vehicle, mouse, and controller bindings."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ says controller support is limited in the current version."
          },
          {
            status: "Officially confirmed",
            text: "A developer response says HOTAS support is in the development pipeline but is not a current priority."
          }
        ],
        links: [
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/", description: "Current keybind and input-support status." },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/", description: "Broader input setup and controller caveats." }
        ]
      },
      {
        heading: "How to Fly Without Guessing Keybinds",
        paragraphs: [
          "Treat your first helicopter session as a control check, not a combat run. Spawn or enter the helicopter only after you know the live bindings for lift, nose movement, turning, camera, exit, and any seat or weapon controls shown by the current build.",
          "Practice light movements first: lift off gently, hold a steady hover, make small turns, move forward slowly, and return to a safe landing area. This is general flight-learning guidance, not a confirmed WARDOGS flight-model claim."
        ]
      },
      {
        heading: "How to Land Safely",
        bullets: [
          "Pick a clear, flat landing area before you begin the approach.",
          "Slow down early instead of trying to stop at the last second.",
          "Keep the helicopter level and avoid crowded combat areas until you understand the handling.",
          "For supply or passenger runs, communicate before landing so teammates know where to load, unload, or move away."
        ]
      },
      {
        heading: "Aiming, Unload, and Transport Basics",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official sources connect helicopters with ferrying supplies and support-focused play."
          },
          {
            status: "Not officially confirmed",
            text: "The exact current controls for unloading supplies, changing seats, using aircraft weapons, or aiming from aircraft are not confirmed in the public sources checked."
          },
          {
            status: "General guidance",
            text: "Treat helicopter transport as team support first: move supplies, move players, avoid unnecessary crashes, and check the money guide before assuming any one transport loop is the best way to earn cash."
          }
        ],
        links: [
          { label: "How to Make Money in WARDOGS", href: "/wardogs-how-to-make-money/", description: "Cash, logistics, supply transport, and persistence questions." }
        ]
      },
      {
        heading: "Mouse and Controller Settings",
        facts: [
          {
            status: "Not officially confirmed",
            text: "No official aircraft sensitivity, deadzone, inversion, smoothing, or controller preset values were found in the public sources checked."
          },
          {
            status: "General guidance",
            text: "Start with the current default settings, make one input change at a time, and test takeoff, hover, turning, and landing before changing another value."
          },
          {
            status: "General guidance",
            text: "If controller behavior feels incomplete, compare it with the current controller settings page and remember that official FAQ wording describes controller support as limited in the current version."
          }
        ],
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/", description: "Performance and visibility setup." },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/", description: "Keyboard, mouse, and controller setup boundaries." }
        ]
      },
      {
        heading: "Helicopter Tips That Stay Inside the Evidence",
        bullets: [
          "Learn takeoff, hover, and landing before carrying passengers or supplies.",
          "Avoid treating beta videos or community comments as a permanent control map.",
          "Keep aircraft runs tied to team value: supply movement, transport, objective support, and safe extraction.",
          "If a helicopter crash looks like a technical issue rather than pilot error, use the crashing fix page instead of changing control settings first."
        ],
        links: [
          { label: "WARDOGS Crashing Fix", href: "/wardogs-crashing-fix/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, team17GamePage, steamDeveloperFaq, supporterPack, steamHotasDeveloperReply],
    faqs: [
      {
        question: "Are helicopters in WARDOGS?",
        answer: "Yes. Official sources confirm flyable aircraft, and Team17 specifically describes ferrying supplies by helicopter."
      },
      {
        question: "What are the WARDOGS helicopter controls?",
        answer: "A complete official helicopter control map was not found in public sources for this update. Check the current in-game controls menu before relying on any keybind list."
      },
      {
        question: "Does WARDOGS support HOTAS or flight sticks?",
        answer: "A developer response says HOTAS support is in the development pipeline but is not a current priority, so do not assume full flight-stick support in the current build."
      },
      {
        question: "Can helicopters help make money in WARDOGS?",
        answer: "Official descriptions connect transport, supplies, and support play with the cash economy, but no single helicopter money route is confirmed as the best method."
      }
    ],
    lastUpdated: "September 6, 2026",
    reviewNotes: [
      "Keep manual review high because helicopter controls and economy impact require current-build verification.",
      "Route broad helicopter queries to this guide and reserve /wardogs-helicopter-controls/ for keybind-status checks."
    ]
  },
  "/wardogs-how-to-make-money/": {
    quickAnswer: [
      "The safest answer is team play, not a magic farm. Official WARDOGS sources say cash can come from useful team actions such as reviving, transporting players, supplying teammates, controlling the objective, and building FOBs.",
      "The Steam developer FAQ says players start with $10,000, cash persists between lives and matches, and cash is used to buy weapons, equipment, gadgets, vehicles, supplies, and building resources.",
      "Exact best money routes, death penalties, vehicle costs, supply payouts, and wipe behavior can change with playtest or Early Access builds. This page keeps WARDOGS logistics inside the money guide instead of splitting it into a separate thin page."
    ],
    sections: [
      {
        heading: "How the WARDOGS Money System Works",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ says players start with $10,000."
          },
          {
            status: "Officially confirmed",
            text: "The FAQ says players use cash to buy weapons, equipment, gadgets, vehicles, supplies, and building resources."
          },
          {
            status: "Officially confirmed",
            text: "The FAQ says cash persists between lives and matches."
          },
          {
            status: "Officially confirmed",
            text: "Steam Early Access wording says players buy gear for each life and can choose whether to spend big for potential returns or save cash."
          }
        ]
      },
      {
        heading: "Best Way to Make Money: What Is Actually Supported",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ lists reviving downed allies, transporting players to the frontline, dropping supplies, shooting down drones, holding the Control Zone, fighting in the Hot Zone, controlling the Hot Zone, and building FOBs as cash-earning team actions."
          },
          {
            status: "Officially confirmed",
            text: "The Steam store says players can earn cash through teamwork such as picking up and reviving teammates, controlling points, and building forward operating bases."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ says performing actions inside the Hot Zone grants a 2x cash bonus."
          },
          {
            status: "General guidance",
            text: "Until current-build payout values are verified, the best supported money advice is to stay useful near team objectives and logistics instead of chasing an unverified farming loop."
          }
        ]
      },
      {
        heading: "Logistics, Supply, and Transport",
        paragraphs: [
          "WARDOGS logistics belongs in this money guide for now. Official sources connect support work, supply transport, player transport, FOB building, and helicopter supply runs with the broader cash loop.",
          "If you are trying to make money, look for team actions that move people, supplies, or objective pressure forward. The checked sources do not confirm exact payout tables, so this page avoids ranking one supply route above another."
        ],
        links: [
          { label: "WARDOGS Helicopter Guide", href: "/wardogs-helicopter-guide/", description: "Transport and helicopter supply context." },
          { label: "How to Play WARDOGS", href: "/how-to-play-wardogs/", description: "The broader match loop and objective basics." }
        ]
      },
      {
        heading: "Money Loss and Persistence",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ says cash persists between lives and matches."
          },
          {
            status: "Officially confirmed",
            text: "Official Steam wording frames spending as a risk decision: spend big for potential returns or save cash for later."
          },
          {
            status: "Community-reported",
            text: "Steam community discussions include player questions about running out of cash and persistent money losses, but those reports do not establish final Early Access economy rules."
          },
          {
            status: "Not officially confirmed",
            text: "Exact death-loss behavior, vehicle refund rules, supply refund behavior, and account-level reset or wipe rules were not confirmed in the official sources checked."
          }
        ]
      },
      {
        heading: "Practical Money-Making Plan for New Players",
        bullets: [
          "Start with team actions that official sources already connect to cash: revives, transport, supplies, objective control, Hot Zone play, and FOB support.",
          "Avoid spending all cash on expensive vehicles or gear until you understand the current build's risk and persistence behavior.",
          "Use logistics to help the team before chasing combat-only income.",
          "Treat any claimed best farm, exact payout route, or guaranteed money exploit as unverified unless it is supported by official notes or current-build testing."
        ]
      },
      {
        heading: "What Is Not Confirmed Yet",
        facts: [
          {
            status: "Not officially confirmed",
            text: "The checked official sources do not publish exact payout values for every action."
          },
          {
            status: "Not officially confirmed",
            text: "The checked official sources do not confirm a final best money-making route, full item price list, vehicle cost table, death penalty table, or wipe schedule."
          }
        ],
        links: [
          { label: "WARDOGS Guide", href: "/wardogs-guide/" },
          { label: "WARDOGS Playtest Schedule", href: "/wardogs-playtest-schedule/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" }
        ]
      }
    ],
    sources: [steamStore, team17GamePage, steamDeveloperFaq, steamCommunityDiscussions],
    faqs: [
      {
        question: "What is the best way to make money in WARDOGS?",
        answer: "Official sources support teamplay money routes: revives, transport, supplies, objective control, Hot Zone actions, and FOB building. Exact best routes are not confirmed."
      },
      {
        question: "Does money persist in WARDOGS?",
        answer: "The Steam developer FAQ says cash persists between lives and matches. Future wipe or reset rules still need official confirmation."
      },
      {
        question: "Is WARDOGS logistics a separate guide?",
        answer: "Not currently. Logistics is handled as a major section of this money guide because supply and transport questions are closely tied to cash."
      },
      {
        question: "Can I lose money by dying in WARDOGS?",
        answer: "Official sources confirm cash persistence and risk-based spending, but exact death-loss behavior was not confirmed in the official sources checked."
      }
    ],
    lastUpdated: "September 6, 2026",
    reviewNotes: [
      "Keep manual review high because economy values, logistics payouts, and persistence rules can change by build.",
      "Do not create a separate wardogs logistics page until search demand and verified material justify a distinct intent."
    ]
  },
  "/wardogs-playtest-schedule/": {
    quickAnswer: [
      "Current official timing: the WARDOGS Steam store lists guaranteed Closed Beta access from September 3, 2026 at 18:00 UTC to September 6, 2026 at 08:00 UTC. The official Steam news feed also describes the beta as open until Sunday at 08:00 UTC.",
      "That means the current WARDOGS playtest end time is Sunday, September 6, 2026 at 08:00 UTC, unless BULKHEAD or Team17 posts an extension or another update.",
      "A next WARDOGS playtest or next beta date has not been officially confirmed in the sources checked for this update. Use Steam's request-access flow and official announcements for schedule changes."
    ],
    sections: [
      {
        heading: "Current Official Playtest Window",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam store pre-purchase wording lists guaranteed Closed Beta access from September 3, 2026 at 18:00 UTC to September 6, 2026 at 08:00 UTC."
          },
          {
            status: "Officially confirmed",
            text: "The official Steam news feed says the Closed Beta is now an Open Beta until Sunday at 08:00 UTC."
          },
          {
            status: "General guidance",
            text: "If you are reading after September 6, 2026 at 08:00 UTC, check official Steam announcements before assuming the beta is still live."
          }
        ]
      },
      {
        heading: "Next Playtest / Next Beta Status",
        facts: [
          {
            status: "Not officially confirmed",
            text: "No next playtest date was confirmed in the official sources checked for this update."
          },
          {
            status: "Officially confirmed",
            text: "The Steam store page provides a Playtest request-access option for WARDOGS."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ points players toward WARDOGS FirstLook, the official Discord, Steam announcements, and official social channels for future playtest details."
          }
        ]
      },
      {
        heading: "Playtest vs Early Access",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam store lists WARDOGS Early Access for September 10, 2026."
          },
          {
            status: "General guidance",
            text: "A playtest or beta is temporary testing access. Early Access is the paid Steam launch phase listed separately on the store page."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ says cash earned during early Pre-Alpha playtests will not carry over to the full game."
          }
        ],
        links: [
          { label: "WARDOGS Release Date", href: "/wardogs-release-date/" },
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/" }
        ]
      },
      {
        heading: "How to Check Schedule Changes",
        paragraphs: [
          "Use official Steam sources first. The store page shows access status and the Steam news feed carries official schedule changes, extensions, or beta announcements.",
          "Community posts can help identify widespread confusion, but they should not be treated as the official end time or next beta date."
        ],
        links: [
          { label: "WARDOGS on Steam", href: "https://store.steampowered.com/app/1867240/WARDOGS/" },
          { label: "WARDOGS Steam announcements", href: "https://steamcommunity.com/app/1867240/announcements/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" }
        ]
      },
      {
        heading: "If the Playtest Does Not Start or Fails to Join",
        bullets: [
          "Confirm whether the beta window is still active before troubleshooting your PC.",
          "Check Steam access status and official announcements for capacity or schedule changes.",
          "Use server-status guidance if the game opens but cannot connect.",
          "Use not-launching or error-code pages if the game fails before connection."
        ],
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/" },
          { label: "WARDOGS Missing Game Executable", href: "/wardogs-missing-game-executable/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" }
        ]
      }
    ],
    sources: [steamStore, steamOpenBetaNews, steamAnnouncements, steamDeveloperFaq],
    faqs: [
      {
        question: "When does the current WARDOGS playtest end?",
        answer: "The checked official Steam sources point to Sunday, September 6, 2026 at 08:00 UTC as the scheduled end time."
      },
      {
        question: "When is the next WARDOGS playtest?",
        answer: "A next playtest date was not officially confirmed in the sources checked for this update. Watch Steam announcements and the Steam request-access status."
      },
      {
        question: "Is the current WARDOGS beta open?",
        answer: "The official Steam news feed says the Closed Beta is now an Open Beta until Sunday at 08:00 UTC. Check Steam for any newer update after that time."
      },
      {
        question: "Does playtest progress carry over?",
        answer: "The developer FAQ says cash earned during early Pre-Alpha playtests will not carry over to the full game. Do not assume carryover rules for later tests unless official wording confirms them."
      }
    ],
    lastUpdated: "September 6, 2026",
    reviewNotes: [
      "Keep manual review high because current beta windows and next-playtest dates can change quickly.",
      "Switch this page from current beta end time to next playtest information only after official sources confirm the next window."
    ]
  },
  "/wardogs-helicopter-controls/": {
    quickAnswer: [
      "Use the full WARDOGS Helicopter Guide for flying, landing, transport, and tips. This page only tracks whether a reliable official helicopter control map or input-support note exists.",
      "Official sources confirm flyable aircraft, but no complete default control layout was found in public sources for this update. Check the live controls menu before copying beta keybind claims."
    ],
    sections: [
      {
        heading: "Control Map Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam developer FAQ says WARDOGS includes drivable vehicles and flyable aircraft."
          },
          {
            status: "Not officially confirmed",
            text: "No complete official helicopter keyboard, mouse, controller, or HOTAS binding list was found in the public sources checked."
          },
          {
            status: "General guidance",
            text: "Use the live in-game controls menu as the source of truth for current aircraft bindings."
          }
        ]
      },
      {
        heading: "Controller and HOTAS Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ says controller support is limited in the current version."
          },
          {
            status: "Officially confirmed",
            text: "A developer response says HOTAS support is in the development pipeline but is not a current priority."
          },
          {
            status: "Not officially confirmed",
            text: "No official aircraft-specific controller preset, deadzone setting, or sensitivity recommendation was found in the checked sources."
          }
        ]
      },
      {
        heading: "Where to Go Next",
        links: [
          { label: "WARDOGS Helicopter Guide", href: "/wardogs-helicopter-guide/", description: "Flying, landing, aiming, transport, settings, and tips." },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/", description: "Broader controller and input setup notes." },
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/", description: "Performance and visibility setup." },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamDeveloperFaq, team17GamePage, steamHotasDeveloperReply],
    reviewNotes: [
      "Keep manual review high because vehicle and helicopter controls require direct current-build verification.",
      "Keep this page narrow so broad helicopter intent belongs to /wardogs-helicopter-guide/."
    ]
  },
  "/how-to-play-wardogs/": {
    quickAnswer: [
      "WARDOGS is a large-scale tactical FPS where up to 100 players fight across three teams for control of a moving objective zone. Official FAQ wording says the main mode is inspired by King of the Hill: every 30 seconds, the team with the most players inside the zone scores one point, and the first team to 100 points wins.",
      "Players do not pick a fixed class in the official description. Instead, the FAQ says you buy the weapons, equipment, gadgets, vehicles, supplies, and building resources you need, using cash that persists between lives and matches.",
      "For a first match, understand the control zone, follow team logistics, spend cautiously, use communication, and treat exact timings, respawn details, loadout balance, and vehicle controls as current-build details that still need verification."
    ],
    sections: [
      {
        heading: "Core Match Objective",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam developer FAQ says the main game mode is inspired by King of the Hill."
          },
          {
            status: "Officially confirmed",
            text: "Every 30 seconds, whichever team has more players in the active control zone earns one point."
          },
          {
            status: "Officially confirmed",
            text: "The first team to 100 points wins."
          }
        ]
      },
      {
        heading: "Teams and Scale",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official Steam and Team17 sources describe up to 100 players split across three teams."
          },
          {
            status: "Officially confirmed",
            text: "The three factions named in the developer FAQ are Valkyra, Lonestar, and Manticore."
          },
          {
            status: "Not officially confirmed",
            text: "This page does not cover faction balance, faction abilities, or meta picks because those details require current-build verification."
          }
        ]
      },
      {
        heading: "Objectives and Territory",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ describes one 2 km by 2 km Control Zone that moves to random locations within a larger 256 km² environment."
          },
          {
            status: "Officially confirmed",
            text: "Team17 describes building, destruction, and key-location fortification as part of the large-scale sandbox."
          },
          {
            status: "General guidance",
            text: "In your first match, treat the active objective as the safest place to understand the flow of combat, logistics, and team movement."
          }
        ]
      },
      {
        heading: "Vehicles and Logistics",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official sources describe drivable vehicles, flyable aircraft, logistics, helicopters, support play, and forward operating base construction."
          },
          {
            status: "General guidance",
            text: "Use vehicles and supply runs to support the objective before trying advanced solo plays, especially while controls and balance are still Early Access-sensitive."
          }
        ]
      },
      {
        heading: "Cash / Economy",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ says players start with $10,000 and can buy weapons, equipment, gadgets, vehicles, supplies, and building resources."
          },
          {
            status: "Officially confirmed",
            text: "The FAQ says cash persists between lives and matches, and that team-oriented actions such as reviving, transporting supplies, controlling the objective, and building FOBs can earn cash."
          },
          {
            status: "General guidance",
            text: "Spend enough to help your team, but avoid treating any specific weapon, vehicle, or economy route as best until the live build is verified."
          }
        ]
      },
      {
        heading: "Roles and Classes",
        facts: [
          {
            status: "Officially confirmed",
            text: "The developer FAQ says there are no set classes in WARDOGS; your role depends on what you buy and how you choose to play."
          },
          {
            status: "General guidance",
            text: "New players should start with useful team actions such as revives, transport, objective presence, and supply support before chasing specialized roles."
          }
        ]
      },
      {
        heading: "What Changes During Early Access",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam Early Access text says WARDOGS will evolve with community feedback, including balance, content, systems, performance, and stability."
          },
          {
            status: "Not officially confirmed",
            text: "Exact respawn timers, loss rules after death, final progression structure, vehicle balance, and current best loadouts should be verified in the live build before being written as fixed guidance."
          }
        ],
        links: [
          { label: "WARDOGS Guide", href: "/wardogs-guide/" },
          { label: "What Is WARDOGS Game", href: "/what-is-wardogs-game/" },
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/" }
        ]
      }
    ],
    sources: [steamStore, steamDeveloperFaq, team17GamePage, team17RevealTrailer, steamAnnouncements],
    reviewNotes: [
      "Keep manual review medium because the official high-level loop is documented, but match details still require current-build verification.",
      "Do not expand into a full wiki, weapon database, map database, or tier-list style guide."
    ]
  },
  "/what-is-wardogs-game/": {
    quickAnswer: [
      "WARDOGS is a tactical all-out-warfare FPS developed by BULKHEAD and published by Team17. Official sources describe large-scale multiplayer for up to 100 players across three teams, with infantry combat, vehicles, aircraft, building, destruction, logistics, and objective control.",
      "The game is planned for Steam Early Access on September 10, 2026. As of August 28, 2026, official pages point to Steam / Windows PC as the confirmed launch platform.",
      "WARDOGS is not confirmed as free to play. Steam lists a paid base purchase and a Supporter Edition, while official text says Early Access monetization is limited to the optional Supporter Edition."
    ],
    sections: [
      {
        heading: "Who Makes WARDOGS?",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists BULKHEAD as the developer and Team17 as the publisher."
          },
          {
            status: "Officially confirmed",
            text: "Team17's official WARDOGS page also presents WARDOGS as a BULKHEAD title published by Team17."
          }
        ]
      },
      {
        heading: "What Kind of Game Is It?",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official Steam and Team17 copy describe WARDOGS as a tactical all-out-warfare FPS."
          },
          {
            status: "Officially confirmed",
            text: "The game features combined-arms combat, building, destruction, vehicles, logistics, support play, online multiplayer, and proximity voice chat."
          }
        ]
      },
      {
        heading: "How Big Are Matches?",
        facts: [
          {
            status: "Officially confirmed",
            text: "Official sources describe up to 100 players across three teams."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ names the three factions as Valkyra, Lonestar, and Manticore."
          }
        ]
      },
      {
        heading: "What Makes It Different?",
        facts: [
          {
            status: "Officially confirmed",
            text: "The main mode uses a randomly located 2 km by 2 km Control Zone inside a larger 256 km² environment."
          },
          {
            status: "Officially confirmed",
            text: "Official descriptions emphasize three-team objective control, player-driven loadouts through cash, logistics, fortification, vehicles, and flyable aircraft."
          },
          {
            status: "General guidance",
            text: "This guide avoids hype comparisons and focuses on what official sources confirm about WARDOGS itself."
          }
        ]
      },
      {
        heading: "Is WARDOGS Free to Play?",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists WARDOGS as a paid pre-purchase before Early Access, with a base version and a Supporter Edition."
          },
          {
            status: "Officially confirmed",
            text: "Official Supporter Pack text says there will be no WARDOGS monetization during Early Access except the optional Supporter Edition."
          },
          {
            status: "Not officially confirmed",
            text: "No official source checked here describes WARDOGS as free to play."
          }
        ]
      },
      {
        heading: "What Platforms Is It On?",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam and Team17 sources list Steam / Windows PC for the Early Access launch."
          },
          {
            status: "Not officially confirmed",
            text: "No PlayStation, Xbox, or other console release date was found in the official sources checked on August 28, 2026."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ says future platform availability will be considered, but the current focus is PC."
          }
        ]
      },
      {
        heading: "Early Access Status",
        facts: [
          {
            status: "Officially confirmed",
            text: "Steam lists the WARDOGS Early Access release date as September 10, 2026."
          },
          {
            status: "Officially confirmed",
            text: "Steam's Early Access text says the game is expected to remain in Early Access for around 1 to 2 years, depending on development and community feedback."
          },
          {
            status: "Not officially confirmed",
            text: "A full version 1.0 release date has not been officially announced."
          }
        ],
        links: [
          { label: "WARDOGS Guide", href: "/wardogs-guide/" },
          { label: "How to Play WARDOGS", href: "/how-to-play-wardogs/" },
          { label: "WARDOGS Release Date", href: "/wardogs-release-date/" }
        ]
      }
    ],
    sources: [steamStore, team17GamePage, team17RevealTrailer, steamDeveloperFaq, supporterPack, steamAnnouncements],
    reviewNotes: [
      "Manual review is low because the overview relies on stable official source descriptions, but launch timing and platform wording should still be checked before publication.",
      "Avoid unverified comparisons, hype labels, weapon data, map data, and meta claims."
    ]
  }
};
