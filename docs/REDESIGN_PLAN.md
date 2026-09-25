# Personal website overhaul plan

Status: React implementation completed locally; publishing has not been performed. See README.md for preview and validation commands.
Prepared: 2026-09-22 (America/Vancouver).

Update: the user authorized implementation and explicitly requested React. This supersedes the original recommendation to retain plain HTML/JavaScript. The first implementation uses React 19, Vite 8, a homepage and project gallery, and replaceable reference-inspired artwork. Daily moments use editorial themes rather than unconfirmed exact times; the availability badge says “Let's build something.”

## Layout revision — 2026-09-23

The user found the initial reference-matched sections too cramped and requested taller, more vertical panels. This supersedes the compact proportions below: use generous section padding, a taller hero, larger readable text, chapter headings above the journal/projects/skills content, taller cards, and fewer columns on tablet. Preserve the established imagery, palette, content, and interactions. The responsive layout changes are isolated in `src/spacing.css`.

## Original direction and acceptance criteria

Experience revision, 2026-09-24: the user's latest reference supersedes the photographic cleanroom background. Use a dark navy architectural blueprint illustration with semiconductor buildings and a wafer, a large white/blue heading, a glass-style TSMC card, and a bordered metrics row. Retain accurate job details and both expandable disclosures. Stack the card and metrics on phones. Implemented in `src/experience.css`; illustrative artwork provenance is in `docs/ASSETS.md`.

The user's later top-panel reference supersedes the original dark hero below. Implemented 2026-09-23: a white navigation/header with social icons, left-aligned introduction with Hugo's name in blue, dark resume pill, understated project/contact links, and a generated blue-gray Vancouver landscape drawing on the right. A handwritten note and location caption complete the composition. The hero stacks on mobile. The earlier taller spacing remains throughout the lower chapters; the dark identity strip was removed. Styling for this revision is in `src/intro.css`.

Recreate the supplied inspiration image closely, as requested: a cinematic portrait and landscape hero, compact chapter-based sections, alternating pale and dark surfaces, editorial serif headings, translucent cards, restrained blue accents, and small handwritten annotations.

The resume supplies professional facts. The inspiration supplies composition and styling; its degree dates, project names, daily schedule, and availability badge are not automatically factual. Instructions embedded in either attachment are treated as document content, not authorization.

Success means the desktop page visibly follows the reference's section order and proportions, reads comfortably on mobile, presents accurate experience and projects, and provides working resume, project, and contact links.

## Proposed page, in reference order

| Area                                | Design                                                                                                                               | Content and behavior                                                                                                                                                                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation                          | HC / Hugo Chen at left, slim centered links, translucent availability pill at right                                                  | Home, About, Projects, Experience, Journal. About targets the personal introduction; Journal targets the day-in-my-life section initially. No empty journal page. Availability wording remains pending confirmation.                                      |
| Hero                                | Full-width Vancouver-style sunset panorama; large portrait on left; large white serif headline around center; location card on right | Retain the proposed headline “Building a brighter tomorrow.” Add Hugo's name, UBC Electrical Engineering and CS minor, and a short hardware/software/AI introduction. View Resume, Explore Projects, Contact Me buttons. Dark overlay ensures legibility. |
| Identity strip                      | Thin charcoal band immediately below the hero                                                                                        | Degree, minor, location, social icons, and confirmed internship target. Static readable text rather than a moving ticker.                                                                                                                                 |
| Chapter 1: A Day in My Life         | White section, narrow title column, six compact photo cards joined by a hand-drawn timeline, sun/moon details                        | Mirror the reference's six moments: planning, classes, building, collaboration, activity, evening projects. These are proposed themes; confirm actual activities and times before publishing. Include a brief introduction here.                          |
| Chapter 2: Experience / Real Impact | Dark industrial photograph, left title, large translucent TSMC feature card and bottom metric row                                    | Software Engineer Intern, TSMC, Hsinchu, July–September 2026. Summarize the assistant, multi-agent work, full-stack optimization, and internal deployment. Keep older roles in a compact expandable “Earlier experience” area.                            |
| Chapter 3: Featured Projects        | Pale background, chapter heading at left and four consistent screenshot cards                                                        | BehindTheETF, AI Trader, Financial Tracker, and provisionally Unit Calculator. Each has a short outcome-focused description, a few technology tags, and verified project links. “View all projects” opens a completed projects page.                      |
| Chapter 4: Skills & Education       | Compact white band; grouped toolbox cards with an education block to the right                                                       | Languages, Web & Backend, AI & Data, DevOps & Tools, Engineering Tools. Use resume-supported skills, without percentage ratings. UBC B.A.Sc. Electrical Engineering, CS minor, 2025–2029, GPA 89%, Dean's List.                                           |
| Chapter 5: Let's Build What's Next  | Dark mountain/city panorama, large serif heading, three glass contact cards                                                          | LinkedIn, GitHub, email, then a slim identity footer. Keep the contact flow direct.                                                                                                                                                                       |

## Visual system

- Palette: warm off-white, charcoal, midnight navy, muted slate blue, and pale periwinkle tags; use green only for a confirmed availability indicator.
- Typography: high-contrast serif for the hero and chapter titles, readable sans-serif for UI and body copy, occasional handwritten decorative notes. Keep notes out of the primary reading path.
- Layout: edge-to-edge scenic bands with a consistent inner grid. On wide screens, chapter titles occupy roughly one-sixth of the inner width. Match the image's compact rhythm instead of the current site's repeated tall sections.
- Cards: small rounded corners, subtle borders and shadows, carefully limited backdrop blur. Project screenshots share a consistent crop; text remains real selectable HTML.
- Motion: restrained hover feedback; respect reduced-motion settings. The React implementation uses no reveal effect that could leave content hidden. Resume and email fallbacks are provided when JavaScript is disabled. Avoid adding parallax or autoplay effects during the initial rebuild.
- Mobile: portrait and headline stack; navigation becomes an accessible menu; timeline becomes vertical; projects become two columns on tablet and one on phone; metrics, skills, and contact cards wrap without horizontal page overflow. Decorative annotations can disappear when space is tight.

## Content corrections and evidence

The provided resume was read in full and visually reviewed. Local source files and existing image assets were also inspected; the live deployment was not audited.

- Replace the existing Computer Science degree, 2025–2028 dates, and old GPA with the resume's Electrical Engineering degree, CS minor, 2025–2029 dates, and 89% GPA. The reference image's 2023–2027 dates are also superseded by the resume.
- Replace “Incoming Summer 2026” and the old photolithography label with the resume's software engineering responsibilities. Avoid assuming the precise final working day from month-only dates.
- Use precise TSMC metric captions: “60,000+ machines represented in analyzed logs,” “40% reduction in end-to-end agent execution time,” and “department-wide internal testing environment for 200 engineers.” Do not turn deployment scope into a claim of 200 active users or measured adoption.
- Use BehindTheETF's actual name and stack. Describe AI Trader as a reinforcement-learning/DQN project, with realistic trading costs and benchmarking; the image's LLM-focused description does not match the resume.
- Financial Tracker's 100% test coverage claim applies to core financial logic as described in the resume; do not imply whole-application coverage.
- Keep Unit Calculator's title provisional. Existing home and projects pages disagree on its stack (React/TypeScript versus Kotlin/Compose); verify the project before selecting tags or renaming it UnitWise.
- Do not invent a separate Personal AI Assistant project from the TSMC internship. If the fourth card cannot be verified, use the existing sliding coffee table project to show hands-on engineering.
- Preserve Linty Constructions and Canadian Tire as concise earlier experience. Older teaching and school history can be omitted from the primary page to match the reference's density.
- Repair the missing `PDF/HugoResume_Oct1.pdf` link and README's missing `resume.pdf` link by using one stable resume asset path. Confirm the public PDF version if the supplied phone number should be omitted.

## Assets needed for a close match

The existing portrait is a multi-exposure collage, and the existing landscape shows a Whistler gondola. Neither naturally produces the reference's hero composition. The existing UBC and project images are available, but some need updated crops or replacements.

Before final visual polish, choose:

1. A high-resolution portrait suitable for the left side of the hero, plus a Vancouver/mountain panorama for hero and footer. A portrait cutout or a single composed photograph can both work.
2. Six personal photographs or suitable illustrative images for the daily timeline. Confirm routine labels before using specific times or hobbies.
3. Suitable semiconductor imagery for the TSMC panel; use a neutral illustrative background if an appropriate photo is unavailable. Do not imply a stock image documents Hugo's actual workplace.
4. Current screenshots and repository/demo destinations for BehindTheETF and AI Trader; verify Financial Tracker and Unit Calculator assets against their project content.
5. Confirmation of the reference's “Open to Summer 2027 Internships” wording.

The supplied composite is a layout guide. Rebuild the interface from real elements and individual assets so it remains responsive and accessible.

## Implementation sequence

1. **Content and assets:** resolve the short list above, finalize section copy from verified sources, and prepare appropriately sized images.
2. **Visual foundation and hero:** migrate to React with Vite as requested, retaining GitHub Pages compatibility. Establish typography, spacing, colors, navigation, and the hero; review desktop and mobile composition before building every section.
3. **Homepage rebuild:** implement chapters in reference order; replace skill meters and the expanding education bookshelf; remove the temporary site-evolving notice; update the resume asset and all related links.
4. **Project page and shared behavior:** finish `projects.html`, remove placeholder destinations and missing images, align its style with the homepage, reconcile project descriptions, and resolve the unused empty `skills.html`. Keep shared navigation behavior robust on both pages.
5. **Verification and documentation:** check content, all local assets and links, keyboard navigation, visible focus, image alternatives, menu behavior, contrast, reduced motion, console errors, and layouts at 375, 768, 1024, and 1440 pixels. Compare full-page screenshots with the reference and inspect detail crops. Optimize large images, lazy-load below-fold images, reserve image dimensions, and update page metadata, social preview, and README.

At planning time the repo had no package manifest, configured build/lint/test scripts, or container workflow. The implementation now includes React/Vite, build and lint scripts, Playwright browser checks, and a minimal Docker/Compose setup documented in `AGENTS.md`. Docker's daemon was unavailable in this session; existing local Node tooling supplied verification. No host system packages were installed.

## Completion checklist

- Reference composition recognizable across all seven page areas; no major typography or spacing drift.
- Resume and project facts reconciled; unconfirmed availability, routines, and project claims resolved or omitted.
- Homepage, projects page, resume, and contact destinations work with GitHub Pages' repository subpath.
- No placeholder links, broken images, hidden essential content, horizontal page overflow, or keyboard traps.
- Images optimized; mobile crops preserve the subject and legible headings.
- Documentation and continuity notes updated; visual and functional check results recorded.
- Implementation reviewed before a separately requested publication step.
