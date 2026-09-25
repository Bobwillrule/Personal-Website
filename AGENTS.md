# Portfolio development

- React 19 and Vite 8, with separate HTML entries for home and projects. Keep relative asset paths so the build works at `/Personal-Website/`.
- Read `.agent/CONTINUITY.md` before work. Use the resume as the authority for professional facts; artwork is not factual evidence.
- Container workflow (default): `docker compose up --build -d`; `docker compose exec web npm run lint`; `docker compose exec web npm run build`. Stop with `docker compose down`.
- If the Docker daemon is unavailable, use the existing Node 24 installation and repository-local dependencies; do not install host system packages. `npm ci`, `npm run dev`, `npm run lint`, `npm run build`.
- Browser checks: `npm test` uses an installed Chrome by default. Set `PLAYWRIGHT_CHANNEL` to another installed Chromium channel if needed. The test runner starts the production preview itself. Run `npm run build` first.
- Text, project destinations, and timeline content live in `src/content.js`. Shared UI is in `src/App.jsx`; visual treatments are in `src/styles.css`, roomier section layouts in `src/spacing.css`, the white illustrated homepage header/hero in `src/intro.css`, and the blueprint experience chapter in `src/experience.css` (loaded last).
- Keep generated and supplied asset provenance in `docs/ASSETS.md`. The previous hero portrait remains as a project cover; it is illustrative, not an authenticated photo of Hugo. Do not present illustrative project covers as screenshots.
- Changes are local until publishing is requested. GitHub Pages requires the built `dist` output, not raw JSX.
