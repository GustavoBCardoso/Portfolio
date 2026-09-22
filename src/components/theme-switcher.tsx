"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY as STORAGE_KEY, type Theme } from "@/lib/theme";

type Props = { label: string; light: string; dark: string };

const current = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function applyTheme(next: Theme, persist: boolean) {
  const run = () => {
    document.documentElement.dataset.theme = next;
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private mode or blocked storage: the choice just won't be remembered.
      }
    }
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (persist && !reduced && typeof document.startViewTransition === "function") {
    document.startViewTransition(run);
  } else {
    run();
  }
}

/** <html data-theme> is the source of truth; watch it like any external store. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeSwitcher({ label, light, dark }: Props) {
  const theme = useSyncExternalStore<Theme | null>(subscribe, current, () => null);

  useEffect(() => {
    // Without a stored choice, keep following the OS setting.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {}
      if (!stored) applyTheme(e.matches ? "dark" : "light", false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const choose = (next: Theme) => {
    if (next !== current()) applyTheme(next, true);
  };

  const options = [
    { value: "light" as const, text: light, Icon: Sun },
    { value: "dark" as const, text: dark, Icon: Moon },
  ];

  return (
    <ul aria-label={label} className="flex border border-ink text-xs">
      {options.map(({ value, text, Icon }) => (
        <li key={value} className="not-first:border-l not-first:border-ink">
          <button
            type="button"
            onClick={() => choose(value)}
            aria-pressed={theme === null ? undefined : theme === value}
            title={text}
            // Active state comes from <html data-theme> so it is right before hydration too.
            // The ::after extends the hit area to 44px tall without changing the drawn cell.
            className={`relative flex h-[1.625rem] w-9 items-center after:absolute after:inset-x-0 after:-inset-y-[9px] after:content-[''] justify-center transition-colors duration-200 ${
              value === "light"
                ? "bg-ink text-paper dark:bg-transparent dark:text-ink dark:hover:bg-highlight"
                : "text-ink hover:bg-highlight dark:bg-ink dark:text-paper dark:hover:bg-ink"
            }`}
          >
            <Icon aria-hidden className="size-3.5" strokeWidth={2.25} />
            <span className="sr-only">{text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
