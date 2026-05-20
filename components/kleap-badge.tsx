"use client";

import { useEffect } from "react";

/**
 * Kleap Badge Component
 *
 * Renders "Made with Kleap" badge unless the app owner is on a paid plan
 * with hide_kleap_badge=true. Source of truth is the DB, queried via the
 * public config endpoint — so toggling the setting takes effect on next page
 * load (preview AND production), with no redeploy required for preview.
 */
export function KleapBadge() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).__kleapBadgeHidden) return;
    if (document.querySelector("[data-kleap-badge]")) return;

    const appId = (window as any)._kleap?.id;
    let cleanup: (() => void) | undefined;

    const renderBadge = () => {
      if ((window as any).__kleapBadgeHidden) return;
      if (document.querySelector("[data-kleap-badge]")) return;

      const badge = document.createElement("div");
      badge.setAttribute("data-kleap-badge", "true");
      badge.style.cssText =
        "position:fixed;bottom:20px;right:20px;z-index:999999;font-family:-apple-system,system-ui,sans-serif;";

      const refId = appId || "preview";
      const badgeUrl = `https://kleap.co/from-badge?utm_source=badge&utm_medium=built-with&utm_campaign=app-${refId}&ref=${refId}`;

      const link = document.createElement("a");
      link.href = badgeUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.style.cssText =
        "display:inline-flex;align-items:center;gap:4px;padding:8px 12px;background:white;color:#000;text-decoration:none;font-size:14px;font-weight:500;border-radius:6px;box-shadow:0 0 0 1px rgba(0,0,0,0.08),0 2px 8px rgba(0,0,0,0.12);transition:all 0.15s ease;";
      link.innerHTML =
        'Made with <strong style="color:#ff0055;">Kleap</strong>';

      link.onclick = () => {
        if ((window as any).umami?.track) {
          (window as any).umami.track("badge_click", { app_id: refId });
        }
        try {
          navigator.sendBeacon(
            "https://kleap.co/api/track-badge-click",
            JSON.stringify({
              appId: refId,
              timestamp: Date.now(),
              referrer: window.location.href,
            }),
          );
        } catch {
          /* sendBeacon may fail silently */
        }
      };
      link.onmouseenter = () => {
        link.style.transform = "translateY(-2px)";
        link.style.boxShadow =
          "0 0 0 1px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.15)";
      };
      link.onmouseleave = () => {
        link.style.transform = "";
        link.style.boxShadow =
          "0 0 0 1px rgba(0,0,0,0.08),0 2px 8px rgba(0,0,0,0.12)";
      };

      badge.appendChild(link);
      document.body.appendChild(badge);
      cleanup = () => badge.remove();
    };

    if (!appId) {
      renderBadge();
      return () => cleanup?.();
    }

    fetch(`https://kleap.co/api/public/apps/${appId}/config`, {
      mode: "cors",
      cache: "default",
    })
      .then((r) => r.json())
      .then((cfg) => {
        if (cfg?.badge === false) {
          (window as any).__kleapBadgeHidden = true;
          return;
        }
        renderBadge();
      })
      .catch(() => {
        renderBadge();
      });

    return () => cleanup?.();
  }, []);

  return null;
}
