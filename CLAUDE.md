# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Type-check with tsc, then build for production
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
```

No test suite is configured.

## Architecture

Single-page React 19 portfolio built with Vite + TypeScript. No router — all sections are on one page, navigated via anchor links (`#hero`, `#experience`, `#projects`, `#learnings`, `#contact`).

**Path alias:** `@/` maps to `src/` (configured in `vite.config.ts`).

**Styling:** Tailwind CSS (utility classes) plus custom CSS in `src/App.css` and `src/index.css`. Dark mode uses the `class` strategy.

**Animation:** Framer Motion is used for entrance animations and the `AnimatedShapes` background in the About section.

**UI primitives** (`src/components/ui/`): shadcn/ui-style components built on Radix UI (`label`, `button`, `input`, `textarea`, `card`, `badge`). Also contains domain-specific display components: `timeline.tsx`, `blog-post-card.tsx`, `contact-2.tsx`.

**Section components** (`src/components/`):
- `TimelineSection` — work/education history rendered via `ui/timeline`, with expandable content using local `useState`
- `ProjectsSection` — static project list rendered as horizontally scrollable `BlogPostCard` items
- `LearningsSection` — static list of learning resources linking to Google NotebookLM notebooks
- `AnimatedShapes` — decorative animated SVG shapes for the About section background
- `Contact2` (in `ui/`) — contact form/info block using Radix Label + custom inputs; `resend` is installed for email but the sending logic is not yet wired up

**Content is hardcoded** directly in the section components — there is no CMS, API, or data file layer. To update projects, learnings, or timeline entries, edit the relevant component file.
