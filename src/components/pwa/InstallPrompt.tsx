"use client";

import { useEffect, useState } from "react";

/**
 * Minimal typing for the beforeinstallprompt event.
 * Not part of lib.dom by default in some TS configs.
 */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const handleBeforeInstallPrompt = (e: Event) => {
      // some browsers provide more specific event, cast it
      const evt = e as BeforeInstallPromptEvent;
      // prevent the mini-infobar from appearing on mobile
      evt.preventDefault();
      setDeferredPrompt(evt);
      setVisible(true);
      // optionally log/debug
      // console.log("beforeinstallprompt captured");
    };

    const handleAppInstalled = () => {
      // Hide prompt if app gets installed
      setVisible(false);
      setDeferredPrompt(null);
      // console.log("App installed");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      // show the browser's install prompt
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        // user accepted
        setVisible(false);
        setDeferredPrompt(null);
      } else {
        // user dismissed, you may choose to show again later
        setVisible(false);
      }
    } catch (err) {
      // ignore errors (some browsers may throw)
      console.error("Install prompt error:", err);
      setVisible(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  // Nothing to render if prompt isn't available or not visible
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 bg-white border border-gray-200 shadow-md rounded-lg p-3 flex items-center gap-3 max-w-xs"
    >
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">Install this app</div>
        <div className="text-xs text-gray-600">Get a faster experience — install to home screen</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleInstallClick}
          disabled={!deferredPrompt}
          className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Install
        </button>

        <button
          onClick={handleClose}
          aria-label="Close install prompt"
          className="text-gray-500 hover:text-gray-700 text-sm px-2 py-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
