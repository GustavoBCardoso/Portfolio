import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { contact } from "@/content/history";

type Props = { t: Dictionary["actions"]; tone?: "paper" | "ink" };

export function ContactActions({ t, tone = "paper" }: Props) {
  const onInk = tone === "ink";
  const primary = onInk
    ? "bg-paper text-ink hover:bg-highlight"
    : "bg-ink text-paper hover:bg-ink-soft";
  const secondary = onInk
    ? "border-paper/70 text-paper hover:border-paper hover:bg-paper/10"
    : "border-ink text-ink hover:bg-highlight";

  const base =
    "flex min-h-11 items-center gap-2 px-3 text-sm font-semibold no-underline transition-colors duration-200 sm:inline-flex sm:px-4 sm:text-[0.9375rem]";

  return (
    <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
      <li>
        <a href={`mailto:${contact.email}`} className={`${base} ${primary}`}>
          <Mail aria-hidden className="size-4" strokeWidth={2.25} />
          {t.email}
        </a>
      </li>
      <li>
        <a href={contact.cv} download className={`${base} border-[1.5px] ${secondary}`}>
          <Download aria-hidden className="size-4" strokeWidth={2.25} />
          {t.cv}
          <span className="font-mono text-[0.6875rem] font-normal opacity-75">{t.cvNote}</span>
        </a>
      </li>
      <li>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${base} border-[1.5px] ${secondary}`}>
          {t.linkedin}
          <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.25} />
        </a>
      </li>
      <li>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={`${base} border-[1.5px] ${secondary}`}>
          <MessageCircle aria-hidden className="size-4" strokeWidth={2.25} />
          {t.whatsapp}
        </a>
      </li>
    </ul>
  );
}
