"use client";

import { useEffect } from "react";

/**
 * CRITICAL COMPONENT: Loads Tailwind v4 CDN on client-side only
 * ⚠️ DO NOT REMOVE OR MODIFY WITHOUT CAREFUL TESTING ⚠️
 *
 * This component prevents hydration mismatches by loading Tailwind CDN
 * only after React hydration is complete. It's essential for CodeSandbox
 * environments where we use Tailwind v4 CDN instead of compiled CSS.
 *
 * Without this component, you'll get hydration errors because server
 * and client would render different HTML/styles.
 *
 * NEVER load CDN styles in layout.tsx with conditional logic based on
 * process.env as this causes hydration mismatches.
 */
export function TailwindCDNClient() {
  useEffect(() => {
    const markLoadedWhenUtilitiesApply = () => {
      const startedAt = Date.now();
      const timeoutMs = 12000;

      const utilitiesApplied = () => {
        const styledElement = Array.from(
          document.querySelectorAll("[class]"),
        ).some((element) => {
          const classes = Array.from(element.classList);
          const style = window.getComputedStyle(element);
          return (
            (classes.includes("flex") && style.display === "flex") ||
            (classes.includes("grid") && style.display === "grid") ||
            (classes.includes("min-h-screen") &&
              parseFloat(style.minHeight || "0") > 0) ||
            (classes.includes("absolute") && style.position === "absolute") ||
            (classes.includes("relative") && style.position === "relative")
          );
        });
        if (styledElement) return true;

        const probe = document.createElement("div");
        probe.className = "flex min-h-screen opacity-0 pointer-events-none";
        probe.style.left = "-99999px";
        probe.style.top = "-99999px";
        document.body.appendChild(probe);
        const style = window.getComputedStyle(probe);
        const applied =
          style.display === "flex" && parseFloat(style.minHeight || "0") > 0;
        probe.remove();
        return applied;
      };

      const check = () => {
        if (utilitiesApplied()) {
          document.body.classList.remove("css-load-failed");
          document.body.classList.add("css-loaded");
          window.dispatchEvent(new Event("kleap-tailwind-ready"));
          return;
        }

        if (Date.now() - startedAt > timeoutMs) {
          document.body.classList.add("css-load-failed");
          window.dispatchEvent(new Event("kleap-tailwind-timeout"));
          console.warn(
            "[Kleap] Tailwind styles did not become ready before timeout",
          );
          return;
        }

        window.setTimeout(check, 100);
      };

      check();
    };

    // Show content immediately on Vercel (CSS is already compiled)
    if (process.env.NEXT_PUBLIC_VERCEL) {
      document.body.classList.add("css-loaded");
      return;
    }

    // Only load CDN if not on Vercel
    if (!process.env.NEXT_PUBLIC_VERCEL) {
      // Check if already loaded
      const existingScript = document.querySelector(
        'script[src*="@tailwindcss/browser"]',
      );
      const existingStyle = document.querySelector(
        'style[type="text/tailwindcss"]',
      );

      if (existingScript || existingStyle) {
        // Script/style already in DOM — wait until utilities really apply.
        markLoadedWhenUtilitiesApply();
        return;
      }

      // Add Tailwind config
      const style = document.createElement("style");
      style.setAttribute("type", "text/tailwindcss");
      style.textContent = `
        @theme {
          --radius: 0.625rem;

          /* shadcn/ui official theme (Neutral) - https://ui.shadcn.com/docs/theming */
          --color-background: oklch(1 0 0);
          --color-foreground: oklch(0.145 0 0);
          --color-card: oklch(1 0 0);
          --color-card-foreground: oklch(0.145 0 0);
          --color-popover: oklch(1 0 0);
          --color-popover-foreground: oklch(0.145 0 0);
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

          /* Animations */
          --animate-scroll: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
          --animate-marquee: marquee var(--marquee-duration) linear infinite;
          --animate-fade-in: fade-in 0.5s linear forwards;
        }

        @keyframes scroll {
          to { transform: translate(calc(-50% - 0.5rem)); }
        }

        @keyframes marquee {
          100% { transform: translateY(-50%); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .shadow-derek {
          box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 0.06),
            0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
            0px 3px 3px -1.5px rgb(0 0 0 / 0.06),
            0px 6px 6px -3px rgb(0 0 0 / 0.06),
            0px 12px 12px -6px rgb(0 0 0 / 0.06),
            0px 24px 24px -12px rgb(0 0 0 / 0.06);
        }

        .shadow-aceternity {
          box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1),
            0px 1px 0px 0px rgba(25,28,33,0.02),
            0px 0px 0px 1px rgba(25,28,33,0.08);
        }

        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }

        .bg-gradient-conic {
          background-image: conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops));
        }
      `;
      document.head.appendChild(style);

      // Add Tailwind script
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
      script.onload = () => {
        markLoadedWhenUtilitiesApply();
      };
      script.onerror = () => {
        document.body.classList.add("css-load-failed");
        window.dispatchEvent(new Event("kleap-tailwind-error"));
      };
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
