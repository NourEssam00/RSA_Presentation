# RSA Governance & Lifecycle

A 46-slide presentation built with [Slidev](https://sli.dev).

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
pages/           00 is the business case, 01 the loop and modules, 02 to 09 one topic each, 10 takeaways and project plan
components/      Animated diagrams and widgets used in the slides
layouts/         Cover and topic-divider layouts
style.css        Colors, fonts, and slide transitions
global-bottom.vue  Progress bar and page counter
```

To reorder topics, change the order of the `src:` entries in `slides.md`.