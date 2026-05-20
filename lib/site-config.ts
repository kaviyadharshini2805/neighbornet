/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "NeighborNet",
  tagline: "AI-Powered Community Resilience Platform",
  description:
    "Transform your neighborhood into a connected, resilient community. NeighborNet uses AI semantic matching, crisis intelligence, and real-time coordination to connect those who need help with those who can provide it.",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://your-app.kleap.io",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: true,

  // Navigation links (only used when showNavbar is true)
  navLinks: [
    { title: "Dashboard", link: "/dashboard" },
    { title: "AI Match", link: "/matchmaking" },
    { title: "Smart Map", link: "/map" },
    { title: "Donors", link: "/donors" },
    { title: "Donations", link: "/donations" },
  ] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["keyword1", "keyword2", "keyword3"],

  // Author/Company
  author: "NeighborNet Team",
  company: "Your Company",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/21806/images/1779276037300-hero-neighbornet",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
