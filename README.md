# Konstantin Grigorov — From idea to enterprise flagship

A concise portfolio for enterprise leaders commissioning greenfield data and AI platforms, and founders preparing products for enterprise buyers.

## Development

No dependency installation is needed. With Node.js installed:

```sh
npm run dev
npm run check
npm run build
```

The local server runs at `http://127.0.0.1:4173`. The build copies the public site into `dist/`.

## Maintenance

- Edit content in `index.html`, presentation in `styles.css`, and the footer year in `script.js`.
- The hero uses an optimised, transparent WebP illustration. Four SVG diagrams explain pipeline delivery, the data catalogue, algorithmic trading and Athena's migration to AWS.
- The page uses system fonts, with no analytics or client-side dependencies.
- Project descriptions reflect the owner's supplied experience. The catalogue's 10,000-person figure describes organisation size, rather than verified product adoption.
- Leadership is attributed to the Shell Trading and Trading 212 projects. The Athena description identifies the J.P. Morgan migration contribution.
- The original CV and Amsterdam PDF/PowerPoint download paths are preserved. The conference talk uses a fictional startup scenario to explain architectural decisions.
- LinkedIn and CV links appear in navigation and contact sections. The hero deliberately contains no duplicate buttons.

## Deployment

GitHub Pages publishes `master` from the repository root at https://kolygri.github.io/. Push the checked source files to `origin/master` and wait for the Pages deployment to finish. `.nojekyll` keeps publication static.

The private Sites preview is separate from GitHub Pages; its hosting configuration and credentials are not part of this public site.
