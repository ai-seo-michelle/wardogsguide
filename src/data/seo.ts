import { site } from "./site";

export type SeoEntry = {
  title: string;
  description: string;
  h1: string;
  canonical: string;
  keyword: string;
  ogType: "website" | "article";
};

const canonical = (route: string) => new URL(route, site.domain).toString();

export const seoByRoute: Record<string, SeoEntry> = {
  "/": {
    title: "WARDOGS Guide | Independent Fan-Made Game Guide",
    description:
      "Independent fan-made WARDOGS guide for Early Access, launch, troubleshooting, settings, controls, and beginner answers.",
    h1: "WARDOGS Guide",
    canonical: canonical("/"),
    keyword: "wardogs",
    ogType: "website"
  },
  "/wardogs-guide/": {
    title: "WARDOGS Guide | Launch, Settings, Controls and Troubleshooting",
    description:
      "Start with the central WARDOGS guide hub for launch, Early Access, troubleshooting, settings, controls, and beginner pages.",
    h1: "WARDOGS Guide",
    canonical: canonical("/wardogs-guide/"),
    keyword: "wardogs guide",
    ogType: "article"
  },
  "/wardogs-release-date/": {
    title: "WARDOGS Release Date | Verified Launch Guide",
    description:
      "Verification-ready WARDOGS release date guide for official timing, launch windows, platforms, and time-zone handling.",
    h1: "WARDOGS Release Date",
    canonical: canonical("/wardogs-release-date/"),
    keyword: "wardogs release date",
    ogType: "article"
  },
  "/wardogs-early-access/": {
    title: "WARDOGS Early Access | Access, Timing and Launch Checks",
    description:
      "WARDOGS Early Access guide structure for access timing, preload, purchase details, and verified official updates.",
    h1: "WARDOGS Early Access",
    canonical: canonical("/wardogs-early-access/"),
    keyword: "wardogs early access",
    ogType: "article"
  },
  "/wardogs-server-status/": {
    title: "WARDOGS Server Status | Matchmaking and Connection Checks",
    description:
      "WARDOGS server status guide structure for server availability, offline messages, failed joins, and matchmaking checks.",
    h1: "WARDOGS Server Status",
    canonical: canonical("/wardogs-server-status/"),
    keyword: "wardogs server status",
    ogType: "article"
  },
  "/wardogs-crashing/": {
    title: "WARDOGS Crash Troubleshooting Hub | Diagnose Crash Issues",
    description:
      "Diagnose WARDOGS crash issues and choose the right guide for crashing fixes, not launching, Easy Anti-Cheat errors, server status, or error codes.",
    h1: "WARDOGS Crash Troubleshooting Hub",
    canonical: canonical("/wardogs-crashing/"),
    keyword: "wardogs crash troubleshooting",
    ogType: "article"
  },
  "/wardogs-crashing-fix/": {
    title: "WARDOGS Crashing Fix: Startup, Launch, Steam & Mid-Game Crashes",
    description:
      "Fix WARDOGS crashing on startup, Steam launch, shader compilation, DX12, freezing, and mid-game crashes with official notes and safe community-reported checks.",
    h1: "WARDOGS Crashing Fix",
    canonical: canonical("/wardogs-crashing-fix/"),
    keyword: "wardogs crashing",
    ogType: "article"
  },
  "/wardogs-voip-not-working/": {
    title: "WARDOGS VoIP Not Working? Voice Chat & Mic Fixes",
    description:
      "Troubleshoot WARDOGS VoIP, voice chat, and mic issues with official beta voice-service notes, input checks, and community-reported workarounds.",
    h1: "WARDOGS VoIP Not Working? Voice Chat & Mic Fixes",
    canonical: canonical("/wardogs-voip-not-working/"),
    keyword: "wardogs voip not working",
    ogType: "article"
  },
  "/wardogs-easy-anti-cheat-error-fix/": {
    title: "WARDOGS Easy Anti-Cheat Error Fix: Login Failed, Module Not Found & Crashes",
    description:
      "Troubleshoot WARDOGS Easy Anti-Cheat login failed, module not found, splash-screen crashes, and anti-cheat launch symptoms without unsafe fixes.",
    h1: "WARDOGS Easy Anti-Cheat Error Fix",
    canonical: canonical("/wardogs-easy-anti-cheat-error-fix/"),
    keyword: "wardogs anti cheat",
    ogType: "article"
  },
  "/wardogs-missing-game-executable/": {
    title: "WARDOGS Missing Game Executable: Fix Launch & Anti-Cheat Errors",
    description:
      "Fix the WARDOGS missing game executable error, including Steam playtest access, invalid executable paths, launch issues, and anti-cheat errors.",
    h1: "WARDOGS Missing Game Executable Fix",
    canonical: canonical("/wardogs-missing-game-executable/"),
    keyword: "wardogs missing game executable",
    ogType: "article"
  },
  "/wardogs-best-settings/": {
    title: "WARDOGS Best Settings | Performance and Visibility Guide",
    description:
      "WARDOGS best settings guide structure for performance, graphics, visibility, and current-build testing.",
    h1: "WARDOGS Best Settings",
    canonical: canonical("/wardogs-best-settings/"),
    keyword: "wardogs best settings",
    ogType: "article"
  },
  "/what-is-wardogs-game/": {
    title: "What Is WARDOGS Game? | Independent Overview",
    description:
      "Concise WARDOGS overview page for explaining what the game is and where new players should start.",
    h1: "What Is WARDOGS Game?",
    canonical: canonical("/what-is-wardogs-game/"),
    keyword: "what is wardogs game",
    ogType: "article"
  },
  "/how-to-play-wardogs/": {
    title: "How to Play WARDOGS | Beginner Guide Structure",
    description:
      "Beginner-friendly WARDOGS guide structure for first-match orientation and verified learning paths.",
    h1: "How to Play WARDOGS",
    canonical: canonical("/how-to-play-wardogs/"),
    keyword: "how to play wardogs",
    ogType: "article"
  },
  "/wardogs-not-launching/": {
    title: "WARDOGS Not Launching | Startup Troubleshooting",
    description:
      "WARDOGS not launching troubleshooting page structure for startup failures, access checks, and safe diagnosis.",
    h1: "WARDOGS Not Launching",
    canonical: canonical("/wardogs-not-launching/"),
    keyword: "wardogs not launching",
    ogType: "article"
  },
  "/wardogs-error-code-1147405308/": {
    title: "WARDOGS Error Code 1147405308: Failed to Authenticate Fix",
    description:
      "Fix WARDOGS error code 1147405308 and failed to authenticate with online services by checking server status, Steam, and safe authentication steps.",
    h1: "WARDOGS Error Code 1147405308 Fix",
    canonical: canonical("/wardogs-error-code-1147405308/"),
    keyword: "wardogs error code 1147405308",
    ogType: "article"
  },
  "/wardogs-failed-to-connect-to-server/": {
    title: "WARDOGS Failed to Connect to Server: Reasonable Time Error Fix",
    description:
      "Fix WARDOGS failed to connect to server and reasonable time errors by checking server status, launch queues, Steam, network, firewall, and VPN safely.",
    h1: "WARDOGS Failed to Connect to Server Fix",
    canonical: canonical("/wardogs-failed-to-connect-to-server/"),
    keyword: "wardogs failed to connect to server",
    ogType: "article"
  },
  "/wardogs-controller-settings/": {
    title: "WARDOGS Controller Settings | Input and Keybind Guide",
    description:
      "WARDOGS controller settings page structure for controller, keyboard, mouse, and keybind setup after verification.",
    h1: "WARDOGS Controller Settings",
    canonical: canonical("/wardogs-controller-settings/"),
    keyword: "wardogs controller settings",
    ogType: "article"
  },
  "/wardogs-helicopter-guide/": {
    title: "WARDOGS Helicopter Guide: Controls, Flying, Landing & Transport",
    description:
      "Learn how to fly helicopters in WARDOGS with controls, landing, aiming, transport, settings, and practical flying tips.",
    h1: "WARDOGS Helicopter Guide",
    canonical: canonical("/wardogs-helicopter-guide/"),
    keyword: "wardogs helicopter",
    ogType: "article"
  },
  "/wardogs-how-to-make-money/": {
    title: "How to Make Money in WARDOGS: Best Ways to Earn Money Fast",
    description:
      "Learn how to make money in WARDOGS, including cash basics, logistics, supply and transport, money loss, and useful money-making tips.",
    h1: "How to Make Money in WARDOGS",
    canonical: canonical("/wardogs-how-to-make-money/"),
    keyword: "how to make money in wardogs",
    ogType: "article"
  },
  "/wardogs-playtest-schedule/": {
    title: "WARDOGS Playtest Schedule: End Time & Next Beta Updates",
    description:
      "Track the WARDOGS playtest schedule, current beta end time, next playtest status, access notes, and official Steam update sources.",
    h1: "WARDOGS Playtest Schedule",
    canonical: canonical("/wardogs-playtest-schedule/"),
    keyword: "wardogs playtest end time",
    ogType: "article"
  },
  "/wardogs-helicopter-controls/": {
    title: "WARDOGS Helicopter Controls: Current Keybind Status",
    description:
      "Check what is officially confirmed about WARDOGS helicopter controls, controller limits, HOTAS status, and where to use the full helicopter guide.",
    h1: "WARDOGS Helicopter Controls",
    canonical: canonical("/wardogs-helicopter-controls/"),
    keyword: "wardogs helicopter controls status",
    ogType: "article"
  }
};

export function getSeo(route: string) {
  return seoByRoute[route];
}
