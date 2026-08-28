export const site = {
  name: "WARDOGS Guide",
  domain: "https://wardogsguide.site",
  language: "en",
  supportedLanguages: ["en", "sv", "fi", "no"],
  analyticsId: "G-Q6XYZQ8ZZ4",
  description:
    "Independent fan-made WARDOGS guide focused on Early Access, launch, troubleshooting, settings, controls, and current-version answers.",
  disclaimer:
    "Independent fan-made WARDOGS guide. Not affiliated with BULKHEAD or Team17."
} as const;

export type SiteConfig = typeof site;
