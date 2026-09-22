---
version: 1
slug: "src-app-lang-page-tsx"
primary_target: "src/app/[lang]/page.tsx"
related_targets: []
---

# Surface: Home (/pt, /en)

## Scope and mode

Single-page portfolio, bilingual (PT/EN). Mode: **Persuade**. Recruiters and tech leads decide whether to invite him to an interview; the action is contact (e-mail, LinkedIn, WhatsApp) or downloading the CV.

## Audience, job, action, proof, constraints

- Visitor: a recruiter or tech lead screening candidates on a work desktop in daytime office light, sometimes on a phone opened from LinkedIn.
- Job: understand within seconds who he is (full-stack, mid-level), where he's headed (back-end), and whether he fits.
- Proof, from Referencias/: the CV (roles, dates, bullets, education, certifications) and a short quote from the Akna recommendation letter (company only; never CPF, RG, CNPJ, or DocuSign data). The CV PDF ships publicly in `public/cv/`; the letter never does.
- Constraints: no invented metrics, projects, clients, or seniority. Don't use "senior/staff" language for positioning; job titles from the CV stay as they are. His projects are private company work with no public repo or demo, so the page has no projects section and no GitHub. The curriculum map's boxes are the project evidence (company, period, what he did).

## Direction contract

THESIS: His career laid out as a course curriculum map (fluxograma curricular): periods as columns, areas as lanes, each role a prerequisite of the next, and the last column, back-end, "in progress". It rejects the dark-console dev portfolio and the generic résumé timeline.

OWN-WORLD: The department's printed curriculum sheet. Cool sulfite-paper ground, institutional navy ink, a thin cell grid. Area boxes in a full palette (data blue, front-end orange, back-end green, teaching and management plum) with a solid code band and a pale tint. Elbow prerequisite arrows. Status stamps (completed / in progress / next). Archivo in variable widths, Spline Sans Mono for codes and dates.

STORY: The visitor sees 7+ years of real work, a strong front-end foundation, a chain that already goes through SQL, PHP/Node, Spring, and C#/.NET, and a deliberate move toward back-end with Java and Spring Boot as the target stack. They believe it because every box points to a real role, then they contact him or download the CV.

FIRST VIEWPORT: A form-style header with his name in large Archivo, a one-line summary, and a field table (Level, Route, Status). Contact and CV actions sit right below. The full-width curriculum map (2013–2027, four lanes, six periods) takes the rest of the viewport, with a sticky syllabus panel on the right and a "Highlight back-end route" button in the map's toolbar.

FORM: Fluxograma Curricular, candidate 6 of 7 on the grounded list, seed key 045ff511. Raises: fixed panel (pc98), status-stamp vocabulary (coffeehouse), color as law (arcade), a continuous timeline with a "now" marker (drum machine), progressive deployment on mobile (miura), following a single lit route (cityscape). Signature interaction: selecting a box lights up its prerequisite chain and dependents and dims the rest; the back-end route draws its arrows in sequence.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions

- Hosting and domain: undecided.
