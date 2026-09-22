"use client";

import { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Check, CircleDashed, Route, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  backendRoute,
  courses,
  currentPeriod,
  defaultCourse,
  lanes,
  orgName,
  periods,
  type Course,
  type LaneId,
  type Status,
} from "@/content/curriculum";
import { laneVars } from "@/lib/lane-vars";

type Props = { lang: Locale; t: Dictionary["map"] };

type Edge = { from: string; to: string; d: string; lane: LaneId };

const byCode = new Map(courses.map((c) => [c.code, c]));
const dependents = new Map<string, string[]>();
for (const c of courses) {
  for (const r of c.requires) dependents.set(r, [...(dependents.get(r) ?? []), c.code]);
}

function walk(start: string, next: (code: string) => string[], into: Set<string>) {
  for (const code of next(start)) {
    if (!into.has(code)) {
      into.add(code);
      walk(code, next, into);
    }
  }
}

function chainOf(code: string) {
  const set = new Set([code]);
  walk(code, (c) => byCode.get(c)?.requires ?? [], set);
  walk(code, (c) => dependents.get(c) ?? [], set);
  return set;
}

const statusIcon: Record<Status, typeof Check> = {
  done: Check,
  current: CircleDashed,
  next: ArrowRight,
};

export function StatusStamp({ status, label, size = "sm" }: { status: Status; label: string; size?: "sm" | "lg" }) {
  const Icon = statusIcon[status];
  if (size === "sm") {
    return (
      <span className="inline-flex items-center" title={label}>
        <Icon aria-hidden className="size-3.5" strokeWidth={2.25} />
        <span className="sr-only">{label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex -rotate-3 items-center gap-1.5 border-[1.5px] border-current px-2 py-0.5 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase">
      <Icon aria-hidden className="size-3.5" strokeWidth={2.5} />
      {label}
    </span>
  );
}

/**
 * Elbow connector: out of the source's right edge, drop in the gutter, into the target's left edge.
 * The drop sits 7px before the target; the "now" marker holds 16px, so the two never share a stroke.
 */
function elbow(x1: number, y1: number, x2: number, y2: number) {
  const mx = x2 - 7;
  if (Math.abs(y2 - y1) < 1) return `M${x1},${y1} H${x2}`;
  const r = Math.min(6, Math.abs(y2 - y1) / 2, Math.max(mx - x1, 1));
  const dir = y2 > y1 ? 1 : -1;
  return [
    `M${x1},${y1}`,
    `H${mx - r}`,
    `Q${mx},${y1} ${mx},${y1 + r * dir}`,
    `V${y2 - r * dir}`,
    `Q${mx},${y2} ${mx + r},${y2}`,
    `H${x2}`,
  ].join(" ");
}

export function CurriculumMap({ lang, t }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [selected, setSelected] = useState<string | null>(null);
  const [routeOn, setRouteOn] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [routeRun, setRouteRun] = useState(0);

  const panelCode = selected ?? defaultCourse;
  const panel = byCode.get(panelCode)!;

  const lit = useMemo<Set<string> | null>(() => {
    if (routeOn) return new Set(backendRoute);
    if (selected) return chainOf(selected);
    return null;
  }, [routeOn, selected]);

  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const box = grid.getBoundingClientRect();
    setSize({ w: box.width, h: box.height });
    const rect = (code: string) =>
      grid.querySelector<HTMLElement>(`[data-code="${code}"]`)?.getBoundingClientRect();

    const next: Edge[] = [];
    for (const c of courses) {
      const to = rect(c.code);
      if (!to || to.width === 0) continue;
      for (const r of c.requires) {
        const from = rect(r);
        if (!from || from.width === 0) continue;
        next.push({
          from: r,
          to: c.code,
          lane: c.lane,
          d: elbow(
            from.right - box.left,
            from.top - box.top + Math.min(from.height / 2, 30),
            to.left - box.left,
            to.top - box.top + Math.min(to.height / 2, 30),
          ),
        });
      }
    }
    setEdges(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (gridRef.current) ro.observe(gridRef.current);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSelected(null);
      setRouteOn(false);
      setSheetOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const select = (code: string) => {
    setRouteOn(false);
    setSelected((cur) => (cur === code ? null : code));
    setSheetOpen(true);
    // Below lg the syllabus is a bottom sheet: keep the chosen box above it.
    if (!window.matchMedia("(min-width: 64rem)").matches) {
      gridRef.current
        ?.querySelector(`[data-code="${code}"]`)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const toggleRoute = () => {
    setSelected(null);
    setRouteOn((on) => !on);
    setRouteRun((n) => n + 1);
  };

  const edgeState = (e: Edge) => {
    if (!lit) return "base";
    return lit.has(e.from) && lit.has(e.to) ? "lit" : "dim";
  };

  // Order in which the route's arrows draw: by the target's period.
  const routeOrder = (e: Edge) => (byCode.get(e.to)?.period ?? 0) - 1;

  const requires = panel.requires.map((c) => byCode.get(c)!);
  const unlocks = (dependents.get(panel.code) ?? []).map((c) => byCode.get(c)!);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] xl:grid-cols-[minmax(0,1fr)_21rem]">
      <div className="flex min-w-0 flex-col">
        {/* Toolbar: legend + route. Below lg a compact key sits inside the sheet, under the 1st period. */}
        <div className="mb-4 hidden flex-wrap items-end justify-between gap-x-8 gap-y-4 lg:flex">
          <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="mb-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
                {t.legendLanes}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {lanes.map((lane) => (
                    <li key={lane.id} className="flex items-center gap-1.5" style={laneVars(lane.id)}>
                      <span aria-hidden className="size-3 bg-(--lane)" />
                      {lane.name[lang]}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="mb-1.5 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
                {t.legendStatus}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {(["done", "current", "next"] as const).map((s) => (
                    <li key={s} className="flex items-center gap-1.5">
                      <StatusStamp status={s} label={t.status[s]} />
                      <span aria-hidden>{t.status[s]}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={toggleRoute}
            aria-pressed={routeOn}
            className={`inline-flex items-center gap-2 border-[1.5px] px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
              routeOn
                ? "border-lane-backend bg-lane-backend text-white"
                : "border-lane-backend bg-sheet text-lane-backend hover:bg-lane-backend-tint"
            }`}
          >
            <Route aria-hidden className="size-4" strokeWidth={2.25} />
            {routeOn ? t.routeOn : t.route}
          </button>
        </div>

        {/* The sheet */}
        <div className="border-[1.5px] border-ink sheet-grid">
          <div
            ref={gridRef}
            className="relative grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4 lg:grid-cols-[6.5rem_repeat(6,minmax(0,1fr))] lg:grid-rows-[auto_repeat(4,auto)] lg:gap-x-5 lg:gap-y-4 lg:p-5"
          >
            {/* Lane labels (desktop) */}
            {lanes.map((lane, i) => (
              <div
                key={lane.id}
                style={{ ...laneVars(lane.id), "--row": i + 2 } as CSSProperties}
                className="hidden lg:col-start-1 lg:row-(--row) lg:block"
              >
                <span className="inline-block bg-(--lane) px-2 py-1 text-[0.8125rem] leading-tight font-semibold font-condensed text-white">
                  {lane.name[lang]}
                </span>
              </div>
            ))}

            {/* "Now" marker */}
            <div
              aria-hidden
              style={{ "--col": currentPeriod + 1 } as CSSProperties}
              className="pointer-events-none absolute hidden lg:relative lg:col-(--col) lg:row-[1/-1] lg:-ml-4 lg:block lg:border-l-2 lg:border-dashed lg:border-ink"
            >
              <span className="absolute -top-5 -left-px bg-ink px-1.5 py-0.5 font-mono text-[0.625rem] tracking-[0.08em] text-paper uppercase">
                {t.now}
              </span>
            </div>

            {periods.map((period) => (
              <Fragment key={period.id}>
                <PeriodColumn
                  period={period}
                  lang={lang}
                  t={t}
                  lit={lit}
                  selected={selected}
                  onSelect={select}
                />
                {period.id === 1 && (
                  <div className="col-span-full mt-2 flex flex-col gap-3 border-y border-rule bg-paper px-3 py-3 lg:hidden">
                    <p className="text-sm text-ink-soft">{t.intro}</p>
                    <ul aria-label={t.legendLanes} className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                      {lanes.map((lane) => (
                        <li key={lane.id} className="flex items-center gap-1.5" style={laneVars(lane.id)}>
                          <span aria-hidden className="size-2.5 bg-(--lane)" />
                          {lane.name[lang]}
                        </li>
                      ))}
                    </ul>
                    <ul aria-label={t.legendStatus} className="-mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                      {(["done", "current", "next"] as const).map((s) => (
                        <li key={s} className="flex items-center gap-1.5">
                          <StatusStamp status={s} label={t.status[s]} />
                          <span aria-hidden>{t.status[s]}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={toggleRoute}
                      aria-pressed={routeOn}
                      className={`inline-flex min-h-11 items-center justify-center gap-2 border-[1.5px] px-3 text-sm font-semibold transition-colors duration-200 ${
                        routeOn
                          ? "border-lane-backend bg-lane-backend text-white"
                          : "border-lane-backend bg-sheet text-lane-backend"
                      }`}
                    >
                      <Route aria-hidden className="size-4" strokeWidth={2.25} />
                      {routeOn ? t.routeOn : t.route}
                    </button>
                  </div>
                )}
              </Fragment>
            ))}

            {/* Prerequisite arrows (desktop) */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
              width={size.w}
              height={size.h}
            >
              <defs>
                <marker id="arrow-base" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                  <path d="M0,0.5 L7.5,4 L0,7.5 Z" fill="var(--color-ink)" />
                </marker>
                {lanes.map((l) => (
                  <marker key={l.id} id={`arrow-${l.id}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0,0.5 L7.5,4 L0,7.5 Z" fill={`var(--color-lane-${l.id})`} />
                  </marker>
                ))}
              </defs>
              {edges.map((e) => {
                const state = edgeState(e);
                if (state === "lit") return null;
                return (
                  <path
                    key={`${e.from}-${e.to}`}
                    d={e.d}
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth={1.25}
                    strokeOpacity={state === "dim" ? 0.12 : 0.42}
                    markerEnd="url(#arrow-base)"
                    className="transition-[stroke-opacity] duration-300"
                    style={{ opacity: state === "dim" ? 0.35 : 1 }}
                  />
                );
              })}
              {edges
                .filter((e) => edgeState(e) === "lit")
                .map((e) => (
                  <path
                    key={`${e.from}-${e.to}-${routeOn ? routeRun : "sel"}`}
                    d={e.d}
                    pathLength={1}
                    fill="none"
                    stroke={`var(--color-lane-${e.lane})`}
                    strokeWidth={2.25}
                    markerEnd={`url(#arrow-${e.lane})`}
                    className={routeOn ? "route-draw" : undefined}
                    style={routeOn ? { animationDelay: `${routeOrder(e) * 140}ms` } : undefined}
                  />
                ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Syllabus panel: fixed region, only its contents change */}
      <aside
        aria-label={t.panelLabel}
        style={laneVars(panel.lane)}
        className={`${sheetOpen ? "fixed" : "hidden"} inset-x-0 bottom-0 z-40 max-h-[62dvh] overflow-y-auto border-t-[1.5px] border-ink bg-sheet shadow-[0_-12px_32px_-12px_rgb(19_33_58/0.28)] lg:sticky lg:top-16 lg:block lg:max-h-[calc(100dvh-5rem)] lg:self-start lg:border-[1.5px] lg:shadow-none`}
      >
        <div aria-live="polite">
          <div className="flex items-center justify-between gap-3 bg-(--lane) px-4 py-2 text-white">
            <span className="font-mono text-xs font-medium tracking-[0.06em]">
              {t.panelLabel} · {panel.code}
            </span>
            <span className="flex items-center gap-2">
              <StatusStamp status={panel.status} label={t.status[panel.status]} size="lg" />
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                className="-mr-1 p-1 lg:hidden"
                aria-label={t.close}
              >
                <X aria-hidden className="size-4" />
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-5 p-4 lg:p-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl leading-tight font-bold font-condensed">{panel.title[lang]}</h3>
              <p className="text-sm text-ink-soft">
                {orgName(panel.org, lang)}
                {panel.dates !== "—" && (
                  <>
                    <span className="mx-1.5 text-ink-mute">·</span>
                    <span className="font-mono text-xs tabular-nums">{panel.dates}</span>
                  </>
                )}
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-rule pt-4 text-[0.9375rem] leading-relaxed">
              {panel.syllabus[lang].map((line) => (
                <li key={line} className="relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:bg-(--lane)">
                  {line}
                </li>
              ))}
            </ul>
            <CourseLinks label={t.requires} none={t.none} items={requires} lang={lang} onSelect={select} />
            <CourseLinks label={t.unlocks} none={t.none} items={unlocks} lang={lang} onSelect={select} />
          </div>
        </div>
      </aside>
    </div>
  );
}

function PeriodColumn({
  period,
  lang,
  t,
  lit,
  selected,
  onSelect,
}: {
  period: (typeof periods)[number];
  lang: Locale;
  t: Dictionary["map"];
  lit: Set<string> | null;
  selected: string | null;
  onSelect: (code: string) => void;
}) {
  const isNow = period.id === currentPeriod;
  return (
    <section aria-labelledby={`period-${period.id}`} className="contents">
      <header
        style={{ "--col": period.id + 1 } as CSSProperties}
        className={`col-span-full flex items-baseline justify-between gap-2 border-b-[1.5px] border-ink pb-1.5 lg:col-(--col) lg:row-start-1 lg:mt-0 lg:block ${
          period.id > 1 ? "mt-4" : ""
        }`}
      >
        <h3 id={`period-${period.id}`} className="font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
          {period.label[lang]}
          {isNow && (
            <span className="ml-2 bg-ink px-1.5 py-0.5 text-paper lg:hidden">{t.now}</span>
          )}
        </h3>
        <p className="text-sm font-semibold tabular-nums font-condensed lg:mt-0.5 lg:text-base">{period.years}</p>
      </header>
      {lanes.map((lane, laneIndex) => {
        const cell = courses.filter((c) => c.period === period.id && c.lane === lane.id);
        return (
          <div
            key={lane.id}
            style={{ "--col": period.id + 1, "--row": laneIndex + 2 } as CSSProperties}
            // Below lg the cell dissolves so a period's boxes flow through one grid in lane order.
            className={`${cell.length ? "contents" : "hidden"} lg:flex lg:flex-col lg:gap-2.5 lg:col-(--col) lg:row-(--row)`}
          >
            {cell.map((course) => (
              <CourseBox
                key={course.code}
                course={course}
                lang={lang}
                statusLabel={t.status[course.status]}
                dim={lit !== null && !lit.has(course.code)}
                pressed={selected === course.code}
                onSelect={onSelect}
              />
            ))}
          </div>
        );
      })}
    </section>
  );
}

function CourseBox({
  course,
  lang,
  statusLabel,
  dim,
  pressed,
  onSelect,
}: {
  course: Course;
  lang: Locale;
  statusLabel: string;
  dim: boolean;
  pressed: boolean;
  onSelect: (code: string) => void;
}) {
  const shell = {
    done: "border-(--lane) bg-(--lane-tint)",
    current: "border-dashed border-(--lane) bg-sheet",
    next: "border-dashed border-(--lane) bg-transparent",
  }[course.status];
  const band = course.status === "next" ? "bg-sheet text-(--lane) border-b-[1.5px] border-dashed border-(--lane)" : "bg-(--lane) text-white";

  return (
    <button
      type="button"
      data-code={course.code}
      aria-pressed={pressed}
      onClick={() => onSelect(course.code)}
      style={laneVars(course.lane)}
      className={`group relative flex w-full scroll-mt-20 flex-col border-[1.5px] text-left transition-[opacity,transform,box-shadow] duration-300 ease-(--ease-out-expo) hover:-translate-y-0.5 hover:shadow-[0_6px_14px_-8px_rgb(19_33_58/0.45)] ${shell} ${
        dim ? "opacity-45 saturate-[0.6]" : "opacity-100"
      } ${pressed ? "ring-2 ring-ink ring-offset-2 ring-offset-sheet" : ""}`}
    >
      <span className={`flex items-center justify-between gap-2 px-2 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.04em] tabular-nums ${band}`}>
        {course.code}
        <StatusStamp status={course.status} label={statusLabel} />
      </span>
      <span className="flex flex-col gap-1 px-2 pt-1.5 pb-2">
        <span className="text-[0.8125rem] leading-[1.2] font-semibold font-condensed text-ink">
          {course.title[lang]}
        </span>
        <span className="font-mono text-[0.6875rem] leading-snug text-ink-mute">
          {orgName(course.org, lang)}
        </span>
      </span>
    </button>
  );
}

function CourseLinks({
  label,
  none,
  items,
  lang,
  onSelect,
}: {
  label: string;
  none: string;
  items: Course[];
  lang: Locale;
  onSelect: (code: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-mono text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">{label}</p>
      {items.length === 0 ? (
        <p className="text-sm text-ink-mute">{none}</p>
      ) : (
        <ul className="flex flex-wrap gap-1.5">
          {items.map((c) => (
            <li key={c.code} style={laneVars(c.lane)}>
              <button
                type="button"
                onClick={() => onSelect(c.code)}
                className="flex items-center gap-1.5 border border-(--lane) bg-(--lane-tint) px-2 py-1 text-left text-xs transition-colors duration-200 hover:bg-sheet"
              >
                <span className="font-mono font-medium text-(--lane)">{c.code}</span>
                <span className="font-condensed font-semibold">{c.title[lang]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
