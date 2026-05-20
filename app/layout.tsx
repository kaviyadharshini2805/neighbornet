import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar";
import { KleapScripts } from "@/components/kleap-scripts";
import { DevToolsGuard } from "./devtools-guard";
import { TailwindCDNClient } from "@/components/tailwind-cdn-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    ...(siteConfig.ogImage
      ? {
          images: [
            {
              url: siteConfig.ogImage,
              width: 1200,
              height: 630,
              alt: `${siteConfig.name} - ${siteConfig.tagline}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    ...(siteConfig.ogImage ? { images: [siteConfig.ogImage] } : {}),
  },
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Force light mode — prevents OS dark theme from bleeding into the preview/screenshots */}
        <meta name="color-scheme" content="light only" />
        {/* Schema.org: associate this site with Kleap for Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              creator: {
                "@type": "Organization",
                name: "Kleap",
                url: "https://kleap.co",
                logo: "https://kleap.co/icon.png",
              },
              isPartOf: {
                "@type": "WebApplication",
                name: "Kleap AI Website Builder",
                url: "https://kleap.co",
                applicationCategory: "WebApplication",
                operatingSystem: "All",
              },
            }),
          }}
        />
        {/*
          CRITICAL: Base styles to prevent FOUC and hydration errors
          ⚠️ DO NOT REMOVE OR MODIFY WITHOUT CAREFUL TESTING ⚠️
          React 19 requires href and precedence attributes on style tags
        */}
        <style href="kleap-base-styles" precedence="high">{`
          /* Base styles to prevent FOUC - always rendered server+client */
          .bg-white { background-color: white; }
          .bg-black { background-color: black; }
          .text-white { color: white; }
          .text-black { color: black !important; }
          .text-neutral-700 { color: rgb(64 64 64) !important; }
          .text-neutral-600 { color: rgb(82 82 82) !important; }
          .text-neutral-500 { color: rgb(115 115 115) !important; }
          .text-muted { color: rgb(82 82 82) !important; }
          .antialiased { -webkit-font-smoothing: antialiased; }
          .h-full { height: 100%; }
          .w-full { width: 100%; }

          /*
            IMPORTANT: Button and shadcn/ui color styles (fallback before Tailwind CDN loads)
            Uses official shadcn/ui Neutral theme with OKLCH colors
            DO NOT REMOVE - Required for FOUC prevention
          */
          .bg-primary { background-color: oklch(0.205 0 0); }
          .text-primary-foreground { color: oklch(0.985 0 0); }
          .hover\\:bg-primary\\/90:hover { background-color: oklch(0.205 0 0 / 0.9); }
          .bg-secondary { background-color: oklch(0.97 0 0); }
          .text-secondary-foreground { color: oklch(0.205 0 0); }
          .hover\\:bg-secondary\\/80:hover { background-color: oklch(0.97 0 0 / 0.8); }
          .bg-destructive { background-color: oklch(0.577 0.245 27.325); }
          .text-destructive-foreground { color: oklch(0.985 0 0); }
          .hover\\:bg-destructive\\/90:hover { background-color: oklch(0.577 0.245 27.325 / 0.9); }
          .border-input { border-color: oklch(0.922 0 0); }
          .bg-background { background-color: oklch(1 0 0); }
          .text-foreground { color: oklch(0.145 0 0); }
          .bg-accent { background-color: oklch(0.97 0 0); }
          .text-accent-foreground { color: oklch(0.205 0 0); }
          .hover\\:bg-accent:hover { background-color: oklch(0.97 0 0); }
          .hover\\:text-accent-foreground:hover { color: oklch(0.205 0 0); }
          .ring-offset-background { --tw-ring-offset-color: oklch(1 0 0); }
          .focus-visible\\:ring-ring:focus-visible { --tw-ring-color: oklch(0.708 0 0); }

          body:not(.css-loaded):not(.css-load-failed) {
            opacity: 0;
          }
          body.css-loaded,
          body.css-load-failed {
            opacity: 1;
          }
        `}</style>
        {/*
          KLEAP-AUTOPATCH: Tailwind v4 CDN in <head> to eliminate FOUC.
          /_kleap/tailwind.js is proxied + edge-cached by the kleap-router worker.
          See src/api/validation/KnownBuildErrors.ts (tailwindCdnHeadFix).
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <style
          type="text/tailwindcss"
          dangerouslySetInnerHTML={{
            __html: `
              @theme {
                --radius: 0.625rem;
                --color-background: oklch(1 0 0);
                --color-foreground: oklch(0.145 0 0);
                --color-primary: oklch(0.205 0 0);
                --color-primary-foreground: oklch(0.985 0 0);
                --color-secondary: oklch(0.97 0 0);
                --color-secondary-foreground: oklch(0.205 0 0);
                --color-muted: oklch(0.97 0 0);
                --color-muted-foreground: oklch(0.556 0 0);
                --color-accent: oklch(0.97 0 0);
                --color-accent-foreground: oklch(0.205 0 0);
                --color-destructive: oklch(0.577 0.245 27.325);
                --color-destructive-foreground: oklch(0.985 0 0);
                --color-border: oklch(0.922 0 0);
                --color-input: oklch(0.922 0 0);
                --color-ring: oklch(0.708 0 0);
                --animate-scroll: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
                --animate-marquee: marquee var(--marquee-duration) linear infinite;
                --animate-fade-in: fade-in 0.5s linear forwards;
              }
              @keyframes scroll { to { transform: translate(calc(-50% - 0.5rem)); } }
              @keyframes marquee { 100% { transform: translateY(-50%); } }
              @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
              .bg-gradient-radial { background-image: radial-gradient(var(--tw-gradient-stops)); }
              .bg-gradient-conic { background-image: conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops)); }
            `,
          }}
        />
        <script src="/_kleap/tailwind.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r=false;var reveal=function(f){if(r)return;r=true;if(!document.body)return;document.body.classList.remove('css-load-failed');document.body.classList.add(f?'css-load-failed':'css-loaded');try{window.dispatchEvent(new Event(f?'kleap-tailwind-timeout':'kleap-tailwind-ready'));}catch(e){}};var check=function(){var p=document.createElement('div');p.className='flex min-h-screen';p.style.cssText='position:absolute;left:-99999px;top:-99999px;opacity:0;pointer-events:none;';document.body.appendChild(p);var s=window.getComputedStyle(p);var ok=s.display==='flex'&&parseFloat(s.minHeight||'0')>0;p.remove();return ok;};var poll=function(d){if(check()){reveal(false);return;}if(Date.now()>d){reveal(true);return;}requestAnimationFrame(function(){poll(d);});};var start=function(){poll(Date.now()+3000);};if(document.body){start();}else{document.addEventListener('DOMContentLoaded',start);}})();`,
          }}
        />
      </head>
      <body
        className={cn(
          "font-sans",
          "bg-white antialiased h-full w-full",
        )}
        suppressHydrationWarning // Prevents browser extension conflicts
      >
        <TailwindCDNClient />
        <DevToolsGuard />
        <KleapScripts />
        <main className={siteConfig.showNavbar !== false ? "pt-24" : ""}>
          {siteConfig.showNavbar !== false && <NavBar />}
          {children}
        </main>
      </body>
    </html>
  );
}
