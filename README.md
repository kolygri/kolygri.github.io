# Konstantin Grigorov — Data & AI Engineering

A responsive static portfolio focused on engineering judgement, selected work, two bounded engagements and conference resources.

## Development

No dependency installation is needed. With Node.js installed:

```sh
npm run dev
npm run check
npm run build
```

The local server runs at `http://127.0.0.1:4173`. The build copies the public site into `dist/`. The root site is also compatible with GitHub Pages: `.nojekyll` bypasses Jekyll, and all existing PDF and PowerPoint paths are preserved.

## Content and maintenance

- Edit copy in `index.html`, design in `styles.css` and interactions in `script.js`.
- The portrait and conference/CV files were recovered from the existing public profile and website.
- Fonts are self-hosted. There are no analytics, client-side dependencies or gated downloads.
- Email links and the copy-email button use `k.l.grigorov@gmail.com`.
- The conference date is fixed content; update it after the event if desired.
- The homepage is independent of an employer and uses generalised project descriptions.

## Evidence and boundaries

Case-study copy is grounded in the user's **Principal Defence Transcript**, read from Google Drive on 12 October 2026, and the existing public CV. The transcript itself is not included in this repository or deployed output.

- **Performance:** the transcript describes a measured analytics workflow reduced from roughly 20 minutes to around 40 seconds. The site conservatively says “under a minute”, scopes the comparison to that workflow and credits the implementation rather than the original Polars recommendation.
- **Platforms:** the transcript describes initial catalogue engineering and growth to a team of 10–15, alongside contributions to an inherited shared framework. The site makes both responsibilities clear.
- **Agent delivery:** the transcript describes hackathon and prototype work with contracts, planning gates, evaluation and human review. The site labels the maturity explicitly and avoids treating reported experimental acceleration as a verified production outcome.
- **Conference:** the existing slides explicitly use a fictional startup story. The resource section preserves that distinction.
- Uncertain cost figures, internal names, vendor-contract details, panel commentary and proposed future capabilities have been omitted.

The separate ignored `.site-deploy/` checkout is used only to package and publish the Sites preview; it does not change GitHub Pages automatically.
