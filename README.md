# RSA Governance & Lifecycle

A 28-slide presentation built with [Slidev](https://sli.dev).

## Requirements

- Node.js 20 or newer
- npm

## Run it

```bash
npm install      # first time only
npm run dev      # starts the slides and opens http://localhost:3030
```

## Other commands

```bash
npm run build    # static site in dist/
npm run export   # PDF export (first run: npm i -D playwright-chromium)
```

## Presenting

| Key | Action |
|---|---|
| Space / Arrow keys | Next / previous slide or click |
| O | Slide overview |
| F | Fullscreen |

## Project structure

```
slides.md        Deck settings, cover slide, and the order of the topics
pages/           One Markdown file per topic (01 to 10)
components/      Animated diagrams and widgets used in the slides
layouts/         Cover and topic-divider layouts
style.css        Colors, fonts, and slide transitions
global-bottom.vue  Progress bar and page counter
```

To reorder topics, change the order of the `src:` entries in `slides.md`.