"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type Props = { current: Locale; label: string };

export function LocaleSwitcher({ current, label }: Props) {
  const pathname = usePathname();
  // Swap the leading /<locale> segment and keep the rest of the path.
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <ul aria-label={label} className="flex border border-ink font-mono text-xs">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <li key={locale} className="not-first:border-l not-first:border-ink">
            <Link
              href={`/${locale}${rest}`}
              hrefLang={locale}
              lang={locale}
              title={localeLabels[locale]}
              aria-current={active ? "true" : undefined}
              className={`relative block px-2.5 py-1 uppercase after:absolute after:inset-x-0 after:-inset-y-[9px] after:content-[''] no-underline transition-colors duration-200 ${
                active ? "bg-ink text-paper" : "text-ink hover:bg-highlight"
              }`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
