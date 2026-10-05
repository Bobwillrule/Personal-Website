[PLANS]

- 2026-09-22T21:13:00-07:00 [USER] Initially requested a plan using supplied inspiration PNG and Downloads/Hugo_resume_New (3).pdf. Planning deliverable: docs/REDESIGN_PLAN.md.
- 2026-09-22T21:47:48-07:00 [USER] User subsequently authorized implementation and specifically requested React. No publishing requested.

[DECISIONS]

- 2026-09-22T21:13:00-07:00 [USER] User selected a close recreation of the inspiration image. Preserve its section sequence, scenic hero/footer, day timeline, dark experience band, four project cards, and compact skills/education.
- 2026-09-22T21:47:48-07:00 [CODE] React 19.3/Vite 8.3 supersedes planned plain HTML approach. Separate homepage/projects entries, relative build paths, manual-only Pages workflow. Public GitHub verified original Unit Calculator uses Kotlin; it is the fourth featured project alongside resume projects.
- 2026-09-22T21:47:48-07:00 [CODE] Use editorial journal themes without precise times; neutral availability badge. Reference-inspired generated portrait/scenes are replaceable illustration, not authenticated personal/workplace photos. Provenance and exact prompts in docs/ASSETS.md.

[PROGRESS]

- 2026-09-22T21:13:00-07:00 [TOOL] Read the full one-page resume, rendered and visually inspected it, inspected local source and representative existing images. No live-site browser audit performed.
- 2026-09-22T21:47:48-07:00 [CODE] Implemented all five chapters, responsive navigation, native dialogs with keyboard focus management, project filters, expanded experience, updated resume and metadata, local fonts/WebP assets. Removed obsolete root CSS/JS; original Images/PDF directories retained.

[DISCOVERIES]

- 2026-09-22T21:13:00-07:00 [CODE] [MILESTONE] Initial audit found stale CS degree/dates, incoming TSMC text, broken resume link, placeholder projects, empty skills page, no tooling. Resolved by React implementation.
- 2026-09-22T21:13:00-07:00 [TOOL] Resume specifies UBC Electrical Engineering/CS minor 2025–2029, 89% GPA; TSMC July–September 2026; BehindTheETF, DQN-based AI Trader, Financial Tracker. TSMC metrics concern analyzed machine logs, reduced execution time, and internal deployment scope rather than verified active adoption.
- 2026-09-22T21:47:48-07:00 [TOOL] Docker daemon unavailable; added Dockerfile/Compose and used existing Node 24 with repo-local dependencies. npm audit reported zero vulnerabilities. ESLint 9 has upstream deprecation warning but is required by current React/a11y plugin peer ranges; documented in README. No host packages installed.
- 2026-09-22T21:47:48-07:00 [TOOL] Browser checks exposed focus cycling and two low-contrast captions; fixed. Legacy route assertion corrected to accessible heading name. Visually reviewed desktop/mobile screenshots and live in-app browser.

[OUTCOMES]

- 2026-09-22T21:47:48-07:00 [TOOL] Production build and lint passed; 9 Playwright tests passed at /Personal-Website/, including 375/768/1024/1440 layouts, images/no overflow/no runtime errors, gallery/dialog/mobile interactions, PDF, legacy skills redirect, reduced motion, and axe WCAG A/AA scans. Formatting completed; lint rechecked after formatting.
- 2026-09-22T21:47:48-07:00 [CODE] Local implementation ready for review at http://localhost:5173/ (dev server session 39608). In-app browser tab 1 marked deliverable. No commit, push, publication, or remote setting changes performed. Docker build and manual Pages workflow remain unexecuted. Review/replace illustrative portrait and scenes before publishing.

[LAYOUT REVISION]

- 2026-09-23T09:35:38.0117236-07:00 [USER] User found the first version cramped and requested taller, more vertical panels; this supersedes the initial compact reference proportions.
- 2026-09-23T09:35:38.0117236-07:00 [CODE] Added src/spacing.css, loaded after component styling: taller hero with adjusted image crop; generous chapter padding; journal/projects/skills titles above content; larger type, images, cards and metrics; stacked tablet experience/education/contact sections. Updated plan, README and AGENTS.md.
- 2026-09-23T09:35:38.0117236-07:00 [TOOL] Lint, production build and all 9 existing browser tests passed after the revision. Desktop and tablet screenshots plus live preview visually reviewed. Docker daemon remains unavailable; verified with existing local tools. No publication performed.

[HERO REVISION]

- 2026-09-23T23:02:28-07:00 [USER] Supplied a new white illustrated top-panel reference; supersedes the photographic hero while retaining roomier lower chapters.
- 2026-09-23T23:02:28-07:00 [CODE] Replaced homepage header/hero with navy navigation/social icons, blue-name introduction, resume pill and text links, generated Vancouver ink illustration, handwritten note, and location caption. Removed identity strip. Responsive styles in src/intro.css, loaded last; updated metadata and docs. Exact artwork prompt/provenance in docs/ASSETS.md.
- 2026-09-23T23:02:28-07:00 [TOOL] Lint and production build passed; all 9 browser tests passed with exit 0. Desktop and mobile screenshots and live preview visually reviewed. Initial test run completed assertions but stalled during Windows preview teardown; rerun against existing preview exited normally. Docker still unavailable, used existing Node. Dev preview restarted at http://localhost:5173/ (session 73639), browser tab 1 refreshed and marked deliverable. No publication performed.

[EXPERIENCE REVISION]

- 2026-09-24T08:05:28-07:00 [USER] Requested TSMC chapter match new dark blueprint reference, superseding cleanroom photograph treatment.
- 2026-09-24T08:05:28-07:00 [CODE] Added generated semiconductor-blueprint.webp (conceptual architecture; prompt/provenance in docs/ASSETS.md) and src/experience.css loaded last. White/blue heading, larger TSMC mark, glass-style card, bordered metrics and handwritten notes; responsive single-column card/metrics on phones. Kept resume-based facts and expandable details. Updated README, AGENTS and plan; browser suite now saves experience-only screenshots.
- 2026-09-24T08:05:28-07:00 [TOOL] Lint, build and all 9 browser tests passed. Visually reviewed desktop/tablet/mobile captures and live preview; corrected caption specificity and blended artwork edge. Docker unavailable, used existing local Node. Browser tab 1 shows localhost:5173/#experience and is marked deliverable. No publication or remote changes.

[DAY IN THE LIFE REVISION]

- 2026-09-26 [USER] Confirmed six representative activities: Wake Up & Gym; Classes & Labs; Projects & LeetCode; Cook Dinner; relaxing with Valorant or going out with friends; and Sleep. No exact times were supplied.
- 2026-09-26 [CODE] Updated the journal copy and added generated editorial card images for gym and sleep. The user subsequently replaced the gaming image with a supplied Valorant ace screenshot and the dinner image with a touched-up supplied beef Wellington photo. Existing campus and workspace images remain for classes and project work. Prompts and provenance are recorded in docs/ASSETS.md.

[PROJECT GALLERY REVISION]

- 2026-09-26 [USER] Requested that the full projects page include the remaining projects from the public Bobwillrule GitHub profile.
- 2026-09-26 [CODE] Added five distinct original repositories to the full gallery: Canadian Internship List, GPT Front, Unit Calculator V3, Unit Calculator V2, and Odin Recipes. Kept the homepage's existing four featured projects unchanged. Omitted the forked css-exercises repository and the empty duplicate Unit-CalculatorV2 repository. Added code-drawn covers, project details, repository links, and updated gallery/filter checks.

[PROJECT GALLERY CORRECTION]

- 2026-09-27 [USER] Superseded the broad GitHub import: remove Canadian Internship List, Odin Recipes, Unit Calculator V2, and Unit Calculator V3 from the gallery; add only the earlier sewer-themed hackathon game.
- 2026-09-27 [CODE] Restored Sewage Search from the earlier site using its existing screenshot and confirmed copy: a Python/Pygame 2D game made for SFU Mountain Madness 2025 about descending into a surreal sewer to rescue a lost cat. Kept the original Unit Calculator. No repository link was invented because the earlier site did not supply one.
- 2026-09-27 [USER] Requested GPT Front also be removed from the full gallery, leaving seven projects total.

[HERO QUOTE CORRECTION]

- 2026-09-27 [USER] Noticed the handwritten “Same curiosity. A different day!” hero note was missing its closing quotation mark.
- 2026-09-27 [CODE] Added a matching closing curly quotation mark and separate positioning styles for the opening and closing marks.
- 2026-09-27 [USER] Requested balanced spacing because the inline closing mark crowded the exclamation point.
- 2026-09-27 [CODE] Positioned the closing mark independently 17px beyond the note’s right edge, mirroring the opening mark’s 17px left offset and scaling with the responsive note text.

[WORK EXPERIENCE TIMELINE]

- 2026-09-27 [USER] Requested the Chapter Two TSMC card's northeast arrow open an all-work-experience page with a vertical timeline, matching the all-projects page.
- 2026-09-27 [CODE] Added experience.html to the production entries, keyboard-accessible arrow navigation, and a responsive newest-first timeline for TSMC, Linty Constructions, and Canadian Tire. Dates and details were checked against public/documents/Hugo-Chen-Resume.pdf and stored in src/content.js. Shared gallery styling and navigation; timeline styles in src/experience.css. Fixed initial cross-page hash scrolling after React and fonts load. Preserved concurrent homepage wording edits.
- 2026-09-27 [TOOL] Docker daemon unavailable; used existing Node 24 and local dependencies. Lint/build and all 13 browser tests passed, including three timeline viewport sizes, keyboard activation, direct reload, return navigation, and accessibility. Desktop/mobile timeline screenshots visually reviewed. Local preview at http://127.0.0.1:5174/experience.html; no publishing performed.

[SUPPLIED TSMC LOGO]

- 2026-09-27 [USER] Requested the supplied TSMC logo image replace the drawn logo.
- 2026-09-27 [CODE] Copied the supplied PNG unchanged to public/images/tsmc-logo.png, replacing the homepage approximation and adding the image to the timeline TSMC card. Preserved the supplied checkerboard background and documented provenance in docs/ASSETS.md.
- 2026-09-27 [TOOL] Lint/build passed; four existing desktop/mobile homepage and timeline checks passed. Visually verified the homepage chapter. Changes remain local.

[TRANSPARENT TSMC LOGO CORRECTION]

- 2026-09-27 [USER] Requested actual transparency and corrected logo sizing, superseding the unchanged checkerboard asset.
- 2026-09-27 [CODE] Added public/images/tsmc-logo-transparent.png, a 561 × 443 RGBA cutout from the original with 10px transparent padding. Two built-in image-edit attempts produced RGB checkerboards and were rejected; deterministic extraction removed the edge-connected background while preserving the original logo. Cards now use natural image proportions: 125px desktop homepage, 95px tablet, 112px phone, and 104px timeline. Original supplied file retained.
- 2026-09-27 [TOOL] Verified alpha channel and actual dark-card rendering. Lint/build and four existing desktop/mobile homepage/timeline tests passed. Visually reviewed the desktop chapter and mobile timeline. No publication.

[REPLACEMENT TRANSPARENT LOGO]

- 2026-09-27 [USER] Supplied a new TSMC logo and requested trying it in place of the extracted version.
- 2026-09-27 [TOOL] Confirmed the replacement is a 1544 × 1215 RGBA PNG with real alpha transparency. Copied unchanged to public/images/tsmc-logo-supplied.png and updated both cards, preserving responsive display widths and setting correct intrinsic dimensions. Lint/build and four desktop/mobile browser checks passed.

[SHARED NAVIGATION]

- 2026-09-28 [USER] Requested projects and work-experience pages use the homepage navbar with social icons instead of the “Let’s build something” badge.
- 2026-09-28 [CODE] Shared Navigation now always uses the light homepage header styling and LinkedIn/GitHub/email SocialLinks component. Secondary-page links still target homepage sections. Escaped two apostrophes in existing contact text without changing displayed wording.
- 2026-09-28 [TOOL] Lint and build passed; all five selected gallery/timeline/accessibility browser checks passed. Visually checked the project gallery header. Changes remain local.

[PROJECTS & LEETCODE IMAGE]

- 2026-10-05 [USER] Requested the Projects & LeetCode journal picture be replaced with a supplied LeetCode screenshot.
- 2026-10-05 [CODE] Added the unchanged supplied 2876 × 1800 PNG as `public/images/projects-leetcode.png`, updated the journal card image and accessible description, and documented its provenance.
- 2026-10-05 [TOOL] Docker Compose was unavailable, so verification used the existing local Node toolchain. Lint and production build passed; all four responsive homepage browser checks passed and confirmed image loading. The full suite had 12 passes and one unrelated existing mobile experience-details timeout while waiting for “Before the code: more of my story”; Windows preview teardown then stalled and was stopped.

[TEXT-ONLY PROJECT CARDS]

- 2026-10-05 [USER] Requested that project photos and cover visuals be removed, leaving text-only project cards.
- 2026-10-05 [CODE] Removed cover visuals from the featured projects, full gallery, and project detail dialogs. Kept titles, descriptions, tags, links, and detail content; restyled the project arrow for the light card background.
- 2026-10-05 [TOOL] Lint and production build passed. Six targeted homepage, gallery, and project-dialog browser checks ran without reporting a test failure, but the Windows preview teardown stalled again and the runner was stopped without its final summary.
