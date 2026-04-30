# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Vinoth-portfolio

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and add your NASA API key:
   ```
   VITE_NASA_API_KEY=your_nasa_api_key_here
   ```
   Get your API key from [NASA API Portal](https://api.nasa.gov/)
4. Run development server: `npm run dev`

## Features

**Navigation:** The portfolio uses a StaggeredMenu component (`src/components/StaggeredMenu.tsx`) with GSAP animations for desktop (>768px). The menu slides in from the right with staggered layer animations and features large uppercase navigation items with numbering. Mobile devices use the original simple navigation with hamburger menu. Configuration is in `src/App.tsx`.

Work and education timeline labels (including current role dates) are edited in `src/components/TimelineSection.tsx`.

Hero headline, byline, and intro paragraphs live in `src/App.tsx` (`#hero`). Work history is under the **Experience** section (`#experience`, timeline only—no separate intro block).

**NASA Landsat Gallery:** A section displaying the name "VINOTH" spelled out using satellite images from NASA's Landsat Program. The component (`src/components/NasaGallery.tsx`) fetches alphabet letter images from NASA's "Your Name in Landsat" collection, showing each letter as a natural Earth feature (rivers, lakes, valleys) captured by Landsat satellites. Images are cached locally for 24 hours and randomly selected from available variants on each cache refresh. Images are displayed in a responsive grid with hover effects revealing the geographic location of each letter.

**Responsive layout:** Main breakpoints are `1024px`, `768px`, and `480px` in `src/App.css` and `src/index.css`. Notched devices use `env(safe-area-inset-*)` for nav, hero, sections, and scroll hints. The viewport meta tag uses `viewport-fit=cover` in `index.html`. Anchor scrolling accounts for the fixed header via `scroll-padding-top` on `html`.
