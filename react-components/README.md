# @nectary/react — Component Library

A React component library built with Tailwind CSS and class-variance-authority (CVA). Browse all components interactively in Storybook.

## Quick Start (3 steps)

### 1. Install prerequisites

You need **Node.js 20+** and **pnpm**. If you don't have them:

```bash
# Install Node.js 20 from https://nodejs.org (use the LTS installer)

# Install pnpm (after Node is installed)
npm install -g pnpm
```

### 2. Clone and install

```bash
git clone https://github.com/sandbuuk/base-ui-nectary-skin.git
cd base-ui-nectary-skin
pnpm install
```

> This installs dependencies for the entire monorepo. It may take a minute the first time.

### 3. Run Storybook

```bash
cd react-components
pnpm dev
```

Then open **http://localhost:6006** in your browser.

That's it — you should see all the components in the sidebar.

## Common Issues

| Problem | Fix |
|---------|-----|
| `command not found: pnpm` | Run `npm install -g pnpm` first |
| `ERR_PNPM_NO_PKG_MANIFEST` / `No package.json found` | Make sure you `cd base-ui-nectary-skin` before running `pnpm install` |
| `Missing script: storybook` | You're in the repo root — run `cd react-components` then `pnpm dev` |
| Port 6006 already in use | Kill the old process: `lsof -ti:6006 \| xargs kill` then retry |
| AirDrop conflict (Mac) | Not an issue here — Storybook uses port 6006, not 5000 |

## Other Commands

```bash
pnpm test          # Run unit tests (Vitest)
pnpm build         # Build the library for publishing
pnpm lint          # Run ESLint
```

## Project Structure

```
react-components/
  src/
    components/     # All 67 components (one folder each)
    assets/         # SVG icons, brand assets
    styles/         # Global CSS tokens (globals.css)
    utils/          # Shared utilities (cn, useScrollLock)
  DESIGN_AUDIT.md   # Audit status and remaining items
```

## Using as a Design System (in your own project)

The library ships a self-contained CSS bundle with all design tokens, fonts, and Tailwind utilities. To use it in any React project:

```bash
npm install @nectary/react
# or install from GitHub directly:
npm install sandbuuk/base-ui-nectary-skin
```

Then in your code:

```tsx
import { Button, Card, Dialog, Text } from '@nectary/react'
import '@nectary/react/styles.css'

function App() {
  return (
    <div className="nectary-theme-base">
      <Card
        title={<CardTitle text="Hello" />}
        content={<Text>Your app content here.</Text>}
        footer={<Button variant="primary" text="Get Started" />}
      />
    </div>
  )
}
```

The `styles.css` import includes everything — fonts (DM Sans, DM Mono), color tokens, spacing, and component overrides. No extra setup needed.

## AI-Assisted Prototyping

You can use this library with Claude or other AI tools to generate working prototypes. The repo includes a complete **[Component API Reference](./COMPONENT_API.md)** with every component's props, variants, and usage examples.

**How it works:**
1. Give the AI the `COMPONENT_API.md` file as context
2. Describe the UI you want (e.g. "build a settings page with a form, toggle, and save button")
3. The AI generates JSX using real Nectary components and Tailwind token classes
4. Run it locally — styles just work via `@nectary/react/styles.css`

**Components that exist** get imported from the library. **Components that don't exist yet** can be built inline using Tailwind with the same `--sinch-*` design tokens, so everything stays visually consistent.

### Tailwind Token Classes (quick reference)

| Category | Classes |
|----------|---------|
| **Primary** | `bg-primary`, `bg-primary-hover`, `text-primary` |
| **Surfaces** | `bg-surface-canvas`, `bg-surface-primary`, `bg-surface-secondary` |
| **Text** | `text-foreground`, `text-foreground-muted`, `text-foreground-caption` |
| **Borders** | `border-border`, `border-border-subtle`, `border-border-strong` |
| **Feedback** | `bg-feedback-danger`, `bg-feedback-success`, `bg-feedback-warning`, `bg-feedback-info` |
| **Radius** | `rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` |
| **Fonts** | `font-sans` (DM Sans), `font-mono` (DM Mono) |

See `COMPONENT_API.md` for the full reference with all 50+ components.

## For Designers

Each component in Storybook has:
- **Docs tab** — description, props table, and keyboard interaction notes
- **Stories** — visual examples of all variants and states
- **Controls** — interactive knobs to change props in real time

If you want to explore the code, each component lives in `src/components/<name>/` with:
- `ComponentName.tsx` — the component implementation
- `ComponentName.stories.tsx` — Storybook stories
- `ComponentName.test.tsx` — unit tests
