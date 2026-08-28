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
    title: "WARDOGS Crashing | Safe Troubleshooting Guide",
    description:
      "WARDOGS crashing troubleshooting page structure for crash reports, safe checks, and current-build verification.",
    h1: "WARDOGS Crashing",
    canonical: canonical("/wardogs-crashing/"),
    keyword: "wardogs crashing",
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
    title: "WARDOGS Error Code 1147405308 | Safe Troubleshooting",
    description:
      "Verification-first WARDOGS error code 1147405308 page for confirmed causes, safe checks, and source tracking.",
    h1: "WARDOGS Error Code 1147405308",
    canonical: canonical("/wardogs-error-code-1147405308/"),
    keyword: "wardogs error code 1147405308",
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
  "/wardogs-helicopter-controls/": {
    title: "WARDOGS Helicopter Controls | Vehicle Input Guide",
    description:
      "WARDOGS helicopter controls page structure for vehicle controls, input setup, and HOTAS-related verification.",
    h1: "WARDOGS Helicopter Controls",
    canonical: canonical("/wardogs-helicopter-controls/"),
    keyword: "wardogs helicopter controls",
    ogType: "article"
  }
};

export function getSeo(route: string) {
  return seoByRoute[route];
}
