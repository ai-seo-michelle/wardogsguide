export type NavigationGroup = {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
};

export const navigation: NavigationGroup[] = [
  {
    label: "Guide",
    items: [{ label: "WARDOGS Guide", href: "/wardogs-guide/" }]
  },
  {
    label: "Launch",
    items: [
      { label: "Release Date", href: "/wardogs-release-date/" },
      { label: "Early Access", href: "/wardogs-early-access/" }
    ]
  },
  {
    label: "Troubleshooting",
    items: [
      { label: "Server Status", href: "/wardogs-server-status/" },
      { label: "Crashing", href: "/wardogs-crashing/" },
      { label: "Not Launching", href: "/wardogs-not-launching/" },
      { label: "Error Code 1147405308", href: "/wardogs-error-code-1147405308/" }
    ]
  },
  {
    label: "Settings",
    items: [
      { label: "Best Settings", href: "/wardogs-best-settings/" },
      { label: "Controller Settings", href: "/wardogs-controller-settings/" }
    ]
  },
  {
    label: "Controls",
    items: [{ label: "Helicopter Controls", href: "/wardogs-helicopter-controls/" }]
  }
];
