import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { lanes } from "@/content/curriculum";
import { certifications, contact, education, roles } from "@/content/history";
import { ContactActions } from "@/components/contact-actions";
import { CurriculumMap } from "@/components/curriculum-map";
import { laneVars } from "@/lib/lane-vars";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const laneName = Object.fromEntries(lanes.map((l) => [l.id, l.name[lang]]));

  return (
    <main className="mx-auto max-w-sheet px-4 md:px-8">
      {/* Form header */}
      <section aria-labelledby="name" className="grid gap-4 pt-6 pb-6 sm:gap-6 md:pt-10 md:pb-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-6">
        <h1
          id="name"
          className="text-[clamp(2.25rem,5.6vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] font-expanded lg:col-span-12"
        >
          {dict.hero.name}
        </h1>
        <div className="flex flex-col gap-5 lg:col-span-7">
          <p className="max-w-[60ch] text-base leading-relaxed text-ink-soft sm:text-lg">{dict.hero.summary}</p>
          <ContactActions t={dict.actions} />
        </div>
        <dl className="grid grid-cols-2 self-start border-[1.5px] border-ink bg-sheet lg:col-span-5">
          {dict.hero.fields.map((field, i) => (
            <div
              key={field.label}
              className={`flex flex-col gap-1 border-ink px-3 py-3 sm:px-4 ${i >= 2 ? "border-t" : ""} ${
                i % 2 === 1 ? "border-l" : ""
              }`}
            >
              <dt className="font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">{field.label}</dt>
              <dd className="text-[0.9375rem] leading-snug font-semibold font-condensed sm:text-base md:text-lg">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Curriculum map */}
      <section id="grade" aria-labelledby="grade-title" className="scroll-mt-16 pb-20">
        <div className="mb-5 flex flex-col gap-2 border-t-[1.5px] border-ink pt-5 md:flex-row md:items-baseline md:justify-between md:gap-10">
          <h2 id="grade-title" className="text-2xl font-bold font-condensed md:text-3xl">
            {dict.map.title} <span className="font-normal tabular-nums text-ink-mute">2013–2027</span>
          </h2>
          <p className="hidden max-w-[62ch] text-[0.9375rem] text-ink-soft md:block">{dict.map.intro}</p>
        </div>
        <CurriculumMap lang={lang} t={dict.map} />
      </section>

      {/* Transcript */}
      <section id="historico" aria-labelledby="historico-title" className="scroll-mt-16 pb-20">
        <div className="mb-6 flex flex-col gap-2 border-t-[1.5px] border-ink pt-5 md:flex-row md:items-baseline md:justify-between">
          <h2 id="historico-title" className="text-2xl font-bold font-condensed md:text-3xl">
            {dict.history.title}
          </h2>
          <p className="text-[0.9375rem] text-ink-soft">{dict.history.intro}</p>
        </div>

        <div className="border-[1.5px] border-ink bg-sheet">
          <table className="w-full border-collapse text-left text-[0.9375rem]">
            <thead className="hidden md:table-header-group">
              <tr className="border-b-[1.5px] border-ink font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
                <th scope="col" className="px-4 py-2.5 font-normal">{dict.history.dates}</th>
                <th scope="col" className="px-4 py-2.5 font-normal">{dict.history.role}</th>
                <th scope="col" className="px-4 py-2.5 font-normal">{dict.history.org}</th>
                <th scope="col" className="px-4 py-2.5 font-normal">{dict.history.lanes}</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r) => (
                <tr
                  key={`${r.org}-${r.dates}`}
                  className="grid grid-cols-1 gap-1 border-b border-rule px-4 py-3 last:border-b-0 md:table-row md:p-0"
                >
                  <td className="font-mono text-xs whitespace-nowrap text-ink-mute tabular-nums md:px-4 md:py-3 md:align-top md:text-[0.8125rem]">
                    {r.dates}
                  </td>
                  <th scope="row" className="text-left font-semibold md:px-4 md:py-3 md:align-top">
                    {r.role[lang]}
                  </th>
                  <td className="text-ink-soft md:px-4 md:py-3 md:align-top">
                    {r.org}
                    <span className="text-ink-mute"> · {r.place}</span>
                  </td>
                  <td className="pt-1 md:px-4 md:py-3 md:align-top">
                    <ul className="flex flex-wrap gap-1">
                      {r.lanes.map((l) => (
                        <li
                          key={l}
                          style={laneVars(l)}
                          className="border border-(--lane) bg-(--lane-tint) px-1.5 py-0.5 text-xs font-semibold text-ink font-condensed"
                        >
                          {laneName[l]}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-bold font-condensed">
              {dict.history.education}
            </h3>
            <ul className="flex flex-col divide-y divide-rule border-y border-rule">
              {education.map((e) => (
                <li key={e.org} className="flex flex-col gap-0.5 py-3">
                  <span className="font-semibold">{e.title[lang]}</span>
                  <span className="text-sm text-ink-soft">
                    {e.org} <span className="font-mono text-xs text-ink-mute tabular-nums">· {e.dates}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold font-condensed">
              {dict.history.certifications}
            </h3>
            <ul className="flex flex-col divide-y divide-rule border-y border-rule">
              {certifications.map((c) => (
                <li key={c.pt} className="py-3">{c[lang]}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reference */}
      <section id="parecer" aria-labelledby="parecer-title" className="scroll-mt-16 pb-20">
        <div className="grid gap-6 border-t-[1.5px] border-ink pt-5 lg:grid-cols-12">
          <h2 id="parecer-title" className="text-2xl font-bold font-condensed md:text-3xl lg:col-span-3">
            {dict.reference.title}
          </h2>
          <figure className="lg:col-span-9">
            <blockquote className="max-w-[40ch] text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] font-medium tracking-[-0.01em]">
              <p>“{dict.reference.quote}”</p>
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex -rotate-2 border-[1.5px] border-ink px-2.5 py-1 font-mono text-xs font-semibold tracking-[0.08em] text-ink uppercase">
                {dict.reference.source}
              </span>
              <span className="text-sm text-ink-soft">{dict.reference.detail}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contato"
        aria-labelledby="contato-title"
        className="-mx-4 mb-0 scroll-mt-16 bg-ink px-4 py-14 text-paper md:-mx-8 md:px-8 md:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <h2 id="contato-title" className="text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.02em] font-expanded">
              {dict.contact.title}
            </h2>
            <p className="max-w-[52ch] text-lg text-paper/80">{dict.contact.body}</p>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-5 lg:justify-end">
            <ContactActions t={dict.actions} tone="ink" />
            <p className="font-mono text-sm text-paper/75">
              <a href={`mailto:${contact.email}`} className="text-paper underline">{contact.email}</a>
              <span className="mx-2">·</span>
              {contact.phoneDisplay}
            </p>
          </div>
        </div>
        <p className="mt-14 border-t border-paper/25 pt-4 font-mono text-xs text-paper/70">{dict.footer.updated}</p>
      </section>
    </main>
  );
}
