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

const steamCommunityDiscussions: GuideSource = {
  label: "WARDOGS Steam community discussions",
  url: "https://steamcommunity.com/app/1867240/discussions/",
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
          { label: "Server Status", href: "/wardogs-server-status/", description: "Use this when connection, server, or matchmaking issues are the symptom." },
          { label: "Best Settings", href: "/wardogs-best-settings/", description: "Use this once current-build settings guidance has been verified." }
        ]
      },
      {
        heading: "Troubleshooting",
        paragraphs: [
          "The first troubleshooting cluster covers crashing, not launching, server or matchmaking symptoms, and a specific error-code page. Those pages stay manual-review sensitive until each fix is checked against official notes or the current build.",
          "For now, this site separates confirmed official information from community-reported workarounds so launch-week pages do not turn guesses into instructions."
        ],
        links: [
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/" },
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
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/" },
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
          { label: "WARDOGS Early Access", href: "/wardogs-early-access/", description: "Access, pricing, beta history, and Early Access expectations." }
        ]
      },
      {
        heading: "Troubleshooting",
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/", description: "Server, region, failed join, and matchmaking checks." },
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/", description: "Crash symptoms and safe current-build checks." },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/", description: "Startup failure and access checks." },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/", description: "Specific error lookup without unverified fixes." }
        ]
      },
      {
        heading: "Settings & Controls",
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/", description: "Graphics, visibility, and performance guidance after verification." },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/", description: "Controller, keyboard, mouse, and keybind setup." },
          { label: "WARDOGS Helicopter Controls", href: "/wardogs-helicopter-controls/", description: "Vehicle and helicopter controls after current-build checks." }
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
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/" },
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
      "Officially confirmed: BULKHEAD's Closed Beta Known Issues post says crashes are being tracked as part of the test process. The same official post does not provide a universal WARDOGS crash fix.",
      "Use the steps below as general PC troubleshooting, not as WARDOGS-specific official fixes: restart Windows, verify Steam files, update Windows and drivers, close non-essential software, and compare your PC with the Steam system requirements.",
      "If WARDOGS causes a full PC restart, blue screen, or hard freeze, stop treating it like an ordinary game crash. Record the exact symptom, crash report, and time, then wait for official guidance or seek qualified PC support."
    ],
    sections: [
      {
        heading: "Before You Try Fixes",
        facts: [
          {
            status: "Officially confirmed",
            text: "BULKHEAD acknowledged Closed Beta crashes in a pinned Known Issues post and said crash reports help the team catch issues before Early Access launch."
          },
          {
            status: "Not officially confirmed",
            text: "No official WARDOGS-specific cause has been published for crashes, driver conflicts, overlays, DirectX errors, Windows updates, or corrupted files in the sources checked on August 28, 2026."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Apply general Steam and Windows checks first. Keep a note of what changed so you can reverse it if the issue remains."
          }
        ]
      },
      {
        heading: "Officially Confirmed Crash Issues",
        facts: [
          {
            status: "Officially confirmed",
            text: "Crashes existed during the Closed Beta and were being tracked by BULKHEAD."
          },
          {
            status: "Not officially confirmed",
            text: "No public patch note or official troubleshooting post found in this check names a universal crash fix for WARDOGS."
          }
        ]
      },
      {
        heading: "Safe Troubleshooting Steps",
        facts: [
          {
            status: "Safe generic troubleshooting",
            text: "Restart Windows and Steam before making deeper changes."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Use Steam's Verify integrity of game files tool to check whether installed files are missing or damaged."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Update Windows and GPU drivers, then test again with the same settings."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Close non-essential overlays, hardware-monitoring tools, recording tools, and background apps for one clean test, but do not permanently disable security software."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Compare your PC with the Steam minimum and recommended requirements before assuming the issue is server-side."
          },
          {
            status: "Safe generic troubleshooting",
            text: "Check Steam announcements and pinned discussions for current crash notes or patch updates."
          }
        ]
      },
      {
        heading: "Community-reported Crash Patterns",
        facts: [
          {
            status: "Community-reported",
            text: "Steam Support forum posts describe startup crashes, shader-compilation or DirectX 12 crash reports, and hard crashes during or after entering matches."
          },
          {
            status: "Community-reported",
            text: "Some players mention overlays, RGB software, Windows updates, or specific system configurations, but these are mixed reports and should not be treated as universal fixes."
          }
        ]
      },
      {
        heading: "When to Stop Troubleshooting",
        facts: [
          {
            status: "Safe generic troubleshooting",
            text: "Stop local troubleshooting if the game repeatedly causes a blue screen, full PC restart, or Windows recovery event. Record the crash code or dump evidence instead of repeating the same launch attempts."
          },
          {
            status: "Safe generic troubleshooting",
            text: "If many players are reporting the same issue after a new build, wait for an official patch note or developer update before applying risky community workarounds."
          }
        ],
        links: [
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "WARDOGS Not Launching", href: "/wardogs-not-launching/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamKnownIssues, steamShaderCrashThread, steamGameCrashesThread, steamLaunchSupport, steamVerifyFilesSupport, steamComputerCrashSupport],
    reviewNotes: [
      "Keep manual review high because crash guidance can change quickly when Early Access builds or hotfix notes appear.",
      "Do not promote community fixes such as deleting files, uninstalling Windows updates, or changing anti-cheat components unless official WARDOGS guidance confirms them."
    ]
  },
  "/wardogs-not-launching/": {
    quickAnswer: [
      "Officially confirmed: the Steam page lists WARDOGS as a Windows PC game and says it uses kernel-level Easy Anti-Cheat. Steam also lists minimum requirements including Windows 10, 16 GB RAM, a 64-bit processor and operating system, broadband internet, and 50 GB storage.",
      "Not officially confirmed: no public official WARDOGS-specific fix was found for access denied, launcher failure, Easy Anti-Cheat repair, antivirus conflicts, or other security conflicts.",
      "Start with safe checks: restart Windows and Steam, confirm the official live window, verify files in Steam, check official announcements, and avoid risky downloads or security changes."
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
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/" },
          { label: "WARDOGS Error Code 1147405308", href: "/wardogs-error-code-1147405308/" },
          { label: "WARDOGS Server Status", href: "/wardogs-server-status/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamAnnouncements, steamKnownIssues, steamAuthErrorThread, steamLaunchSupport, steamVerifyFilesSupport],
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
          { label: "WARDOGS Crashing", href: "/wardogs-crashing/" },
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
  "/wardogs-helicopter-controls/": {
    quickAnswer: [
      "Officially confirmed: WARDOGS includes vehicles and flyable aircraft, and Team17 specifically describes using a helicopter to ferry supplies to teammates.",
      "BULKHEAD has not published a complete official helicopter control map at the time of writing.",
      "Do not assume default helicopter controls such as throttle, yaw, pitch, mouse steering, or controller bindings until the current in-game controls menu is verified."
    ],
    sections: [
      {
        heading: "Are Helicopters Officially in WARDOGS?",
        facts: [
          {
            status: "Officially confirmed",
            text: "The Steam developer FAQ says WARDOGS includes drivable vehicles and flyable aircraft."
          },
          {
            status: "Officially confirmed",
            text: "Team17 describes players ferrying supplies to teammates by helicopter."
          },
          {
            status: "Officially confirmed",
            text: "The WARDOGS Supporter Pack includes a Littlebird Helicopter Taxi Camo, confirming helicopter-related cosmetic content."
          }
        ]
      },
      {
        heading: "Official Control Information",
        facts: [
          {
            status: "Not officially confirmed",
            text: "BULKHEAD has not published a complete official helicopter control map at the time of writing."
          },
          {
            status: "Not officially confirmed",
            text: "No official source checked here confirms default helicopter keyboard, mouse, controller, or HOTAS bindings."
          },
          {
            status: "Officially confirmed",
            text: "The developer FAQ says HOTAS support is not available now and is not a priority, though it is in the development pipeline."
          }
        ]
      },
      {
        heading: "How to Check Your Current Controls",
        facts: [
          {
            status: "General guidance",
            text: "Open the current in-game Settings or Controls menu and record the bindings shown there before publishing any helicopter-control guide."
          },
          {
            status: "General guidance",
            text: "Check whether helicopter controls are listed separately from infantry, vehicle, controller, and accessibility settings."
          },
          {
            status: "General guidance",
            text: "If a binding is missing or behaves differently from beta reports, treat the live build as the source of truth."
          }
        ]
      },
      {
        heading: "Community-reported Handling",
        facts: [
          {
            status: "Community-reported",
            text: "Steam community discussions include questions and feedback about aircraft handling, mouse flight, and HOTAS or TrackIR-style support."
          },
          {
            status: "Community-reported",
            text: "These reports help identify what players are testing, but they do not establish official default controls."
          }
        ]
      },
      {
        heading: "What Not to Publish Yet",
        bullets: [
          "Do not publish default throttle, yaw, pitch, roll, landing, camera, weapon, or seat-switch bindings without verification.",
          "Do not state that HOTAS or flight sticks are supported in the current build unless official notes or direct testing confirms it.",
          "Do not copy beta-era aircraft handling reports into an Early Access guide without checking the live controls menu."
        ],
        links: [
          { label: "WARDOGS Best Settings", href: "/wardogs-best-settings/" },
          { label: "WARDOGS Controller Settings", href: "/wardogs-controller-settings/" },
          { label: "WARDOGS Guide", href: "/wardogs-guide/" }
        ]
      }
    ],
    sources: [steamStore, steamDeveloperFaq, team17GamePage, supporterPack, steamCommunityDiscussions],
    reviewNotes: [
      "Keep manual review high because vehicle and helicopter controls require direct current-build verification.",
      "Do not add any default helicopter keybinds until the in-game controls menu or official documentation confirms them."
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
