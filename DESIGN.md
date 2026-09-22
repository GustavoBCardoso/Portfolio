---
name: Fluxograma Curricular
description: A career printed as a department curriculum sheet; navy ink on cool paper, one colour per track, with a negative dark print.
colors:
  paper: "#f5f6f3"
  sheet: "#ffffff"
  ink: "#13213a"
  ink-soft: "#3d4964"
  ink-mute: "#56627a"
  rule: "#d3d8df"
  rule-soft: "#e4e7eb"
  highlight: "#d6e2ff"
  lane-data: "#2d55c8"
  lane-data-tint: "#e7edfb"
  lane-backend: "#17784a"
  lane-backend-tint: "#e1f1e8"
  lane-frontend: "#b84c19"
  lane-frontend-tint: "#fbeae0"
  lane-practice: "#7a3f9e"
  lane-practice-tint: "#f0e7f6"
  on-lane: "#ffffff"
  shadow: "rgb(19 33 58 / 0.32)"
  paper-dark: "#0d1526"
  sheet-dark: "#121c31"
  ink-dark: "#e6e9ef"
  ink-soft-dark: "#b9c1cf"
  ink-mute-dark: "#8f9aae"
  rule-dark: "#2c3852"
  rule-soft-dark: "#1c273f"
  highlight-dark: "#26396a"
  on-lane-dark: "#0b1322"
  shadow-dark: "rgb(0 0 0 / 0.55)"
  lane-data-dark: "#8aa6ff"
  lane-data-tint-dark: "#1a2748"
  lane-backend-dark: "#5fd39b"
  lane-backend-tint-dark: "#13301f"
  lane-frontend-dark: "#ff9d66"
  lane-frontend-tint-dark: "#33211a"
  lane-practice-dark: "#c89bf0"
  lane-practice-tint-dark: "#291f3b"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  quote:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 100"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "\"wdth\" 78"
  title-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    fontVariation: "\"wdth\" 78"
  field-value:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
    fontVariation: "\"wdth\" 78"
  course-title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    fontVariation: "\"wdth\" 78"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "\"wdth\" 100"
  body-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.08em"
  code:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.04em"
    fontFeature: "\"tnum\""
rounded:
  none: "0px"
spacing:
  hairline-gap: "6px"
  box-gap: "10px"
  row-gap: "16px"
  column-gap: "20px"
  grid-cell: "24px"
  page-inline-sm: "16px"
  page-inline: "32px"
  section-end: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
  button-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.highlight}"
  button-primary-on-ink:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-primary-on-ink-hover:
    backgroundColor: "{colors.highlight}"
  button-route:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.lane-backend}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  button-route-hover:
    backgroundColor: "{colors.lane-backend-tint}"
  button-route-active:
    backgroundColor: "{colors.lane-backend}"
    textColor: "{colors.on-lane}"
  course-box-done:
    backgroundColor: "{colors.lane-data-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.course-title}"
    rounded: "{rounded.none}"
    padding: "6px 8px 8px"
  course-box-current:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  course-band:
    backgroundColor: "{colors.lane-data}"
    textColor: "{colors.on-lane}"
    typography: "{typography.code}"
    padding: "4px 8px"
  course-band-next:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.lane-data}"
    typography: "{typography.code}"
    padding: "4px 8px"
  lane-chip:
    backgroundColor: "{colors.lane-backend-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  lane-label:
    backgroundColor: "{colors.lane-backend}"
    textColor: "{colors.on-lane}"
    padding: "4px 8px"
  field-cell:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.field-value}"
    padding: "12px 16px"
  syllabus-header:
    backgroundColor: "{colors.lane-backend}"
    textColor: "{colors.on-lane}"
    typography: "{typography.code}"
    padding: "8px 16px"
  locale-option:
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    padding: "4px 10px"
  locale-option-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  theme-option:
    textColor: "{colors.ink}"
    height: "26px"
    width: "36px"
  theme-option-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  contact-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "80px 32px"
---

# Design System: Fluxograma Curricular

## Overview

**Creative North Star: "The Department's Printed Curriculum Sheet"**

The system is the Brazilian university *fluxograma curricular*: the printed sheet a department hands new students, with periods as columns, tracks as coloured lanes, each course a box, and arrows showing what is a prerequisite of what. Everything on the page behaves like that document. The ground is cool sulfite paper, the ink is institutional navy, structure comes from ruled lines at 1.5px, and data is set in a registry monospace as if printed by the secretariat. There is no decorative layer. Every mark is a field, a rule, a box, a stamp, or an arrow.

Density is that of a form: compact labels over firm values, bordered cells, tabular dates. Reading text stays at normal width and relaxed leading so the summary and syllabus lines read easily, while headings, values, and course titles tighten to Archivo's condensed width. The name and the closing contact headline are the only places the face goes expanded and heavy.

Colour carries meaning, not mood. Four track hues (data blue, back-end green, front-end orange, practice plum) mark which lane a thing belongs to and nothing else; all other UI is navy on paper. The world explicitly rejects the dark-console developer portfolio and the generic résumé timeline. Light paper is the default print. The dark theme is the same sheet printed in negative: navy becomes the ground, paper-white becomes the type, the four tracks lighten so they read on navy, and lane bands flip to near-black type. Nothing else changes: same rules, boxes, stamps, and arrows. In either print the only full-bleed inverse field is the closing contact band, filled with ink: a solid navy block at the end of the light sheet, a pale paper-white block at the end of the dark one.

**Key Characteristics:**
- Cool paper ground, white sheet surfaces, navy ink by default; a negative dark print (navy ground, paper-white ink) chosen by the OS or the header switch.
- Four lane colours used strictly as track identity, each as a solid band plus a pale tint.
- Archivo on its width axis: expanded for the name, condensed for headings and data, normal for reading.
- Spline Sans Mono for codes, dates, field labels, and period labels.
- Square corners, 1.5px ink rules, 24px printed cell grid behind the map.
- Status stamps (done, in progress, next) expressed through solid vs dashed borders and a small icon.
- Elbow prerequisite arrows; the lit route draws in, period by period.

## Colors

A cool, near-neutral paper-and-navy base with four saturated institutional track colours, each paired with its own pale tint. Every colour is a token with a light value and a negative dark value (the `-dark` keys in the frontmatter), applied by redefining the same custom properties under `:root[data-theme="dark"]`.

### Primary
- **Institutional Navy Ink** (ink): all text, every structural rule, the primary button, the active locale and theme options, the "now" tag, the focus ring, and the closing contact band. It is the voice of the sheet. In the dark print it becomes **Negative Ink** (ink-dark), a paper-white, and keeps every one of those roles.

### Secondary (the tracks)
- **Registry Blue** (lane-data) with **Blue Tint** (lane-data-tint): the data track.
- **Ledger Green** (lane-backend) with **Green Tint** (lane-backend-tint): the back-end track, and the one colour that also owns the route toggle, because that button lights the back-end route.
- **Stamp Orange** (lane-frontend) with **Orange Tint** (lane-frontend-tint): the front-end track.
- **Seminar Plum** (lane-practice) with **Plum Tint** (lane-practice-tint): teaching, management, and education.
- In the dark print each track lightens (lane-*-dark: periwinkle blue, mint green, apricot orange, lilac plum) and each tint deepens to a dark wash of its own hue (lane-*-tint-dark), so hue identity holds while the ground inverts.

### Neutral
- **Sulfite Paper** (paper): page ground, the header at 95%, the in-map mobile key strip, text on ink. Dark: **Night Paper** (paper-dark), a deep navy.
- **Sheet White** (sheet): every bordered surface (field table, map sheet, syllabus panel, transcript table, current-status boxes). Dark: **Night Sheet** (sheet-dark), one step lighter than the dark ground.
- **Band Type** (on-lane): text and icons on solid lane bands, lane labels, the syllabus header, and the pressed route toggle; white in the light print, near-black navy (on-lane-dark) in the dark print.
- **Shadow Ink** (shadow): the one shadow colour, translucent navy in light and translucent black (shadow-dark) in dark.
- **Soft Ink** (ink-soft): summary and secondary prose, organisation names, nav links at rest, primary-button hover.
- **Muted Ink** (ink-mute): field labels, period labels, dates, org lines in boxes, the de-emphasised "2013–2027" in the map title.
- **Rule Grey** (rule): hairline dividers inside tables and lists.
- **Grid Grey** (rule-soft): the 24px cell grid lines on the map sheet.
- **Highlighter Blue** (highlight): text selection and hover fill on secondary buttons and locale options; on the ink band it is the primary button's hover.

### Named Rules
**The Colour Is Law Rule.** A lane colour means one track and appears only on things that belong to that track: lane labels, course boxes, arrows, legend swatches, lane chips, and the syllabus header of the selected course. Never use a lane hue for decoration or for generic UI emphasis; the route toggle is green because it is the back-end route.

**The Band and Tint Rule.** The solid lane colour carries on-lane text (white in light, near-black in dark; all four clear 4.5:1 in both prints); the tint only ever sits behind ink. Never put lane-coloured text on a tint of another lane, and never use a tint as a band.

**The Negative Print Rule.** Light paper is the default print; dark is the same sheet in negative, produced only by redefining the colour tokens under `data-theme="dark"`. Components reference tokens (paper, sheet, ink, on-lane, shadow, lanes), never literal colours, so they print correctly both ways. The one full-bleed inverse field is the closing contact band (ink fill: navy in light, pale in dark); do not add others.

## Typography

**Display Font:** Archivo variable, width axis (with ui-sans-serif, system-ui)
**Body Font:** Archivo variable at normal width
**Label/Mono Font:** Spline Sans Mono (with ui-monospace)

**Character:** One grotesque stretched across its width axis does all the talking, from wide and heavy for the name down to narrow semibold for box titles, so the page reads as a single institutional document. The mono is the secretariat's typewriter: codes, dates, and the small caps-tracked labels of a printed form.

### Hierarchy
- **Display** (800, clamp 2.25–5rem, 0.95, -0.03em, width 112): the candidate's name only.
- **Headline** (800, clamp 2–3.5rem, 1.02, -0.02em, width 112): the contact band headline only.
- **Quote** (500, clamp 1.5–2.25rem, 1.25, width 100, max 40ch): the reference quotation.
- **Title** (700, 1.5rem mobile to 1.875rem, width 78): section titles for the map, transcript, and reference.
- **Title small** (700, 1.25rem, width 78): the selected course's title in the syllabus panel; 1.125rem for sub-section titles.
- **Field value** (600, 0.9375–1.125rem, width 78): values in the field table, period years, lane labels.
- **Course title** (600, 0.8125rem, 1.2, width 78): titles inside course boxes and course links.
- **Body** (400, 1rem to 1.125rem, 1.625, width 100, max 60ch): the summary; 0.9375rem for intros, syllabus lines, and the transcript.
- **Label** (Spline Sans Mono 400, 0.6875rem, 0.08em, uppercase): form-field labels, table column heads, period labels, legend headings, the "now" tag.
- **Code** (Spline Sans Mono 500, 0.6875rem, 0.04em, tabular figures): course codes, dates, org lines in boxes.

### Named Rules
**The Width Is Voice Rule.** Expanded width (112) is reserved for the name and the contact headline; condensed width (78) is for headings, values, and titles; reading text stays at normal width (100). Never set a paragraph condensed.

**The Registry Mono Rule.** Spline Sans Mono is for machine-printed data only: codes, dates, field and column labels, the file-number mark in the header. Never set prose in mono. Uppercase tracked mono labels always name a field or column directly attached to its data; they never float above a heading as a kicker.

## Layout

A centred sheet up to 90rem wide, with 16px page gutters on mobile and 32px from md. The home reads top to bottom as one document: form header (name across 12 columns; summary and actions in 7, the 2×2 field table in 5), then the curriculum map, the transcript, the reference, and the ink contact band that runs to the gutters' edges. Each section after the header opens with a 1.5px ink rule and its title on the rule, and ends with 80px of space.

The curriculum map is the structural core. From lg (64rem) it is a grid with a 6.5rem lane-label column plus six equal period columns, a header row of period labels, and four lane rows, with 20px column and 16px row gaps; boxes stack in their cell with 10px gaps. A dashed 2px ink line marks the current period with an "Agora/Now" tag above it. The sticky syllabus panel sits in a 19rem (21rem at xl) right column below the 48px sticky header. Below lg the map collapses into a 2-column (3 from sm) flow of boxes grouped by period, the legend and route toggle move inside the sheet under the first period, and the syllabus becomes a bottom sheet.

**The Sheet Grid Rule.** The 24px printed cell grid lives only on the map sheet. The page ground and other surfaces are plain paper or plain white.

## Elevation & Depth

The system is printed and flat. Depth comes from ink rules (1.5px for structure, 1px for the header and hairlines), white sheets on paper, and tints inside lanes. Two soft shadows exist, both as responses rather than resting decoration.

### Shadow Vocabulary
Both shadows take their colour from the shadow token, so they deepen to translucent black in the dark print.
- **Box lift** (`box-shadow: 0 6px 14px -8px var(--color-shadow)` with a 2px upward translate): a course box on hover.
- **Bottom sheet** (`box-shadow: 0 -12px 32px -12px var(--color-shadow)`): the mobile syllabus sheet over the map; removed at lg.

### Named Rules
**The Printed Flat Rule.** Surfaces are flat at rest. Selection is shown with a 2px ink ring offset 2px, and focus with a 2px ink outline offset 3px, never with glow or elevation.

## Shapes

Every corner is square (0px): buttons, boxes, tables, chips, panels, swatches, bullets. Borders are the form language: solid 1.5px for completed or structural things, dashed 1.5px for in-progress and next. The only curves are the 6px turns of the elbow arrows and the icon strokes. The only rotated elements are stamps: the large status stamp in the syllabus header (-3°) and the reference source stamp (-2°), each a 1.5px bordered mono label.

**The Square Corner Rule.** No border radius anywhere in the UI.

**The Stamp Rule.** Rotation belongs to stamps only; a stamp is a small bordered mono uppercase mark that certifies a status or a source.

## Components

### Buttons
Blunt and form-like: square, bordered, semibold Archivo with a 16px lucide icon.
- **Shape:** square corners (0px), 44px minimum height, 12–16px inline padding.
- **Primary:** navy ink fill with paper text (Send e-mail); hovers to soft ink.
- **Secondary:** 1.5px ink border, transparent, ink text (CV, LinkedIn, WhatsApp); hovers to Highlighter Blue. The CV button carries a small mono "PDF" note at 75% opacity.
- **On ink:** in the contact band the primary inverts to paper with ink text (hover Highlighter Blue) and secondaries take a 70% paper border that firms to full paper on hover.
- **Route toggle:** 1.5px back-end green border on the sheet with green text, hover green tint; pressed state fills solid green with on-lane text and switches the label. It is a toggle (aria-pressed).
- **Transitions:** colour only, 200ms.

### Chips
- **Lane chip:** 1px lane border, lane tint fill, navy condensed semibold text, 2px 6px padding; used in the transcript's tracks column.
- **Course link:** same shell with the lane-coloured mono code before the condensed title; hovers to white. Used for "Requires" and "Unlocks" in the syllabus panel.

### Cards / Containers
- **Field table:** a 2×2 definition list on white with a 1.5px ink outer border and 1px inner ink rules; mono label over a condensed semibold value.
- **Map sheet:** 1.5px ink border over the white 24px cell grid.
- **Transcript table:** white, 1.5px ink border, mono column heads over a 1.5px rule, 1px rule-grey row dividers; rows become stacked blocks below md.

### Navigation
- **Header:** sticky, 48px tall, paper at 95% with a 1px ink bottom rule; a mono file mark on the left, four anchor links in soft ink (hover ink plus underline) hidden below sm, and on the right the theme switch then the locale switch, 8px apart.
- **Locale switch:** two mono uppercase cells in a 1px ink box divided by a 1px rule; the active locale is filled ink with paper text, the other hovers to Highlighter Blue.
- **Theme switch:** the locale switch's twin: two 36×26px cells in a 1px ink box divided by a 1px rule, each holding a 14px lucide icon (sun for light, moon for dark) with a screen-reader label and title; the active theme is filled ink with paper text, the other hovers to Highlighter Blue. The buttons carry aria-pressed. With no stored choice the page follows prefers-color-scheme, live; a click persists the choice in localStorage `theme`. An inline head script sets `data-theme` on `<html>` before first paint so the page never flashes, and the browser theme colour follows the OS (paper or paper-dark).
- **Theme print transition:** an explicit switch runs a View Transition that prints the new theme over the old one top to bottom (clip-path inset from 100% to 0, 560ms on the expo-out curve); skipped under reduced motion and for OS-driven changes.

### Course Box (signature)
A box per role, parameterised by its lane (`--lane`, `--lane-tint`). A mono code band on top carries the code and a small status icon; below it the condensed title and the mono organisation line.
- **Done:** solid 1.5px lane border, tint fill, solid lane band with on-lane text, check icon.
- **In progress:** dashed lane border on white, solid band, dashed-circle icon.
- **Next:** dashed lane border, transparent fill, inverted band (sheet with lane text and a dashed underline), arrow icon.
- **Hover:** 2px lift with the box-lift shadow, 300ms on the expo-out curve.
- **Selected:** 2px ink ring offset 2px on the sheet; the chain of prerequisites and dependents stays lit while every other box drops to 45% opacity and 60% saturation.

### Prerequisite Arrows (signature)
Elbow connectors from a box's right edge, dropping in the gutter 7px before the target and entering its left edge, with 6px rounded turns and a small filled triangular head. At rest they are 1.25px ink at 42% opacity; when a chain is lit, its arrows switch to 2.25px in the target's lane colour and the rest fade to near invisibility. With the back-end route on, lit arrows draw in over 700ms on the expo-out curve, staggered 140ms per period. Arrows render from lg only; reduced motion removes the draw.

### Syllabus Panel (signature)
A fixed region whose contents change with the selection: a lane-coloured header with the mono "Syllabus · CODE" and a large rotated status stamp, then the condensed title, organisation and mono dates, square lane-coloured bullets for syllabus lines, and the Requires/Unlocks course links. Sticky on desktop with a 1.5px ink border; a bottom sheet up to 62dvh with a close button below lg. Its content is announced politely to assistive tech.

### Contact Band
The closing full-bleed ink field: expanded headline, paper body at 80%, inverted contact buttons, mono e-mail and phone, and a mono update note over a 25% paper rule. Filled with ink and set in paper, it inverts with the theme: a navy block on the light sheet, a pale paper-white block with navy type on the dark sheet. It is always the inverse of the page.

## Do's and Don'ts

### Do:
- **Do** tie every lane colour to its track: set `--lane` and `--lane-tint` from the item's lane rather than choosing a hue.
- **Do** use 1.5px ink rules for structure and 1px rule grey for hairlines inside tables and lists.
- **Do** express status through border style: solid for done, dashed for in progress and next.
- **Do** set codes and dates in Spline Sans Mono with tabular figures, and headings and values in condensed Archivo (width 78).
- **Do** keep contact actions and the mobile route toggle at least 44px tall, and show focus as a 2px ink outline offset 3px.
- **Do** honour reduced motion: no route draw, no smooth scroll, no theme-print transition.
- **Do** colour every surface, rule, band, and shadow through tokens so it prints in both themes; a new colour ships as a light token plus its `:root[data-theme="dark"]` negative.

### Don't:
- **Don't** use a lane colour for decoration, generic emphasis, or any element that does not belong to that track.
- **Don't** round corners.
- **Don't** build a separate dark look: dark is only the negative print of the same sheet through the token swap, never a console style with glows, neon, or terminal chrome; the contact band stays the only inverse field.
- **Don't** set prose in mono or in condensed width.
- **Don't** place mono uppercase labels above headings as kickers; they label fields and columns only.
- **Don't** extend the cell grid beyond the curriculum map sheet.
- **Don't** add resting shadows or glows; shadows appear only as the box hover lift and the mobile bottom sheet.
