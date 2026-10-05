# Hugo Chen — Personal Portfolio

A React portfolio with a light illustrated introduction, a day-in-the-life journal, TSMC experience, featured projects, a toolbox and education section, and a Vancouver-inspired contact footer.

## Run locally

The default development workflow uses Docker:

```sh
docker compose up --build -d
```

Open [localhost:5173](http://localhost:5173/). Run checks inside the container:

```sh
docker compose exec web npm run lint
docker compose exec web npm run build
```

Stop with `docker compose down`. The Compose volume keeps dependencies inside the container. Rebuild/reinstall container dependencies after changing the lockfile.

If Docker is unavailable, use an existing Node 24 installation:

```sh
npm ci
npm run dev
```

On Windows, `npm.cmd` can be used if PowerShell blocks `npm.ps1`. No global dependencies or system installations are required.

## Check the site

```sh
npm run lint
npm run build
npm test
```

The browser suite uses installed Google Chrome and starts a production preview under `/Personal-Website/`, checking the actual GitHub Pages path behavior. Set `PLAYWRIGHT_CHANNEL=msedge` to use installed Edge instead. No browser download is needed on a machine with either supported browser installed.

The browser checks cover layouts at 375, 768, 1024, and 1440 pixels; image loading and horizontal overflow; JavaScript errors; mobile navigation; project-dialog focus, Escape, and focus restoration; project filters; PDF download; the legacy skills URL; reduced motion; and automated WCAG A/AA accessibility checks using axe. The work-experience timeline is also checked at mobile, tablet, and desktop sizes, including keyboard navigation from the Chapter Two arrow and direct page reloads. The suite saves screenshots under `tmp/screenshots/`.

`npm run format` formats the authored files. The production output is `dist/`; `npm run preview` serves it locally.

## Edit content

The TSMC chapter follows the user's dark blueprint reference, with a blue-accented heading, glass-style card, and three bordered metrics. Its content and disclosures remain resume-based; on phones, the card and metrics stack vertically. The generated background is conceptual architectural artwork.

The arrow on the TSMC card opens `experience.html`: a newest-first vertical timeline of all three resume roles, with shared gallery typography, navigation, and footer. Dates, details, and tags are maintained in `workExperience` in `src/content.js`; timeline styles live in `src/experience.css`.

| File                                    | Purpose                                                            |
| --------------------------------------- | ------------------------------------------------------------------ |
| `src/content.js`                        | Projects, links, journal themes, and skill groups                  |
| `src/App.jsx`                           | Shared React components, navigation, sections, and project dialogs |
| `src/styles.css`                        | Design system and component visual treatments                      |
| `src/spacing.css`                       | Spacious section layouts, larger cards, and responsive spacing     |
| `src/intro.css`                         | White homepage header and illustrated hero                         |
| `src/experience.css`                    | Blueprint experience chapter and responsive card, loaded last      |
| `src/main.jsx`                          | App entry and locally bundled fonts                                |
| `public/images/`                        | Optimized scenic and project assets                                |
| `public/documents/Hugo-Chen-Resume.pdf` | Supplied resume, linked consistently throughout the site           |
| `projects.html`                         | Directly loadable project gallery entry                            |
| `experience.html`                       | Directly loadable work-experience timeline entry                    |
| `skills.html`                           | Redirect for the old skills URL                                    |
| `docs/ASSETS.md`                        | Image provenance, generation prompts, and replacement guidance     |
| `docs/REDESIGN_PLAN.md`                 | Design direction and content decisions                             |

The supplied resume takes precedence over the old website and inspiration image. Education is UBC Electrical Engineering with a Computer Science minor, 2025–2029. The TSMC section uses the resume's work and qualified metrics. GitHub project links were verified against the public repository list. Existing original images and PDFs remain in `Images/` and `PDF/`; only optimized assets in `public/` ship with the new build.

The Vancouver hero drawing and some scene images are generated illustrative artwork based on the references. The earlier portrait artwork remains only as the portfolio project's cover and is not an authenticated photograph of Hugo. Project covers are illustrations, identified as such in their detail dialogs. Daily cards use editorial themes instead of exact unconfirmed times; the gallery's availability badge does not claim a specific internship season. See the complete [asset guide](docs/ASSETS.md).

## Publish when ready

This React version needs a build step. Serving the repository's raw HTML directly will not serve the production application.

A **manual-only** GitHub Pages workflow is included at `.github/workflows/pages.yml`. After reviewing the site and pushing the code, set the repository's Pages source to **GitHub Actions**, then manually run **Publish portfolio to GitHub Pages** from the Actions tab. That workflow builds in a Node 24 container, runs lint, and publishes `dist/`. It does not run on push. No publishing or remote settings change was performed during implementation.

Relative asset paths and separate HTML entries let the same output run at the repository URL or a domain root. No server-side routing or SPA rewrite is required. Browser tests exercise `/Personal-Website/` explicitly.

Implementation references: [React's build-from-scratch guide](https://react.dev/learn/build-a-react-app-from-scratch), [Vite's static deployment guide](https://vite.dev/guide/static-deploy.html#github-pages), and [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), checked 2026-09-22.

## Verification notes

- Local lint and production build passed; nine browser checks passed.
- Dependencies installed with no reported npm audit vulnerabilities.
- Docker configuration is provided but its build was not exercised because the local Docker daemon was not running.
- ESLint 9 is retained for compatibility with the React and JSX accessibility plugins' declared peer dependencies. npm warns that ESLint 9 is no longer supported; moving to ESLint 10 should wait for compatible plugin releases or a separate lint-tool migration. This is a development-tool warning, not a runtime failure.
- Test output may include a harmless inherited `NO_COLOR`/`FORCE_COLOR` environment warning.
- The manual publishing workflow has not been run against GitHub.

## Contact

[GitHub](https://github.com/Bobwillrule) · [LinkedIn](https://www.linkedin.com/in/hugochen07/) · [Email](mailto:hugohqchen@gmail.com)
