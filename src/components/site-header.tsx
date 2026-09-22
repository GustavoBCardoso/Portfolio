import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

type Props = { lang: Locale; dict: Dictionary };

export function SiteHeader({ lang, dict }: Props) {
  const links = [
    { href: "#grade", label: dict.nav.map },
    { href: "#historico", label: dict.nav.history },
    { href: "#parecer", label: dict.nav.reference },
    { href: "#contato", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-sheet items-center justify-between gap-4 px-4 md:px-8">
        <a
          href={`/${lang}`}
          className="font-mono text-xs font-medium tracking-wide text-ink no-underline"
        >
          GBC<span className="text-ink-mute">·</span>2026
        </a>
        <nav aria-label={dict.nav.label} className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-soft no-underline transition-colors duration-200 hover:text-ink hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher current={lang} label={dict.nav.language} />
      </div>
    </header>
  );
}
