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

## For Designers

Each component in Storybook has:
- **Docs tab** — description, props table, and keyboard interaction notes
- **Stories** — visual examples of all variants and states
- **Controls** — interactive knobs to change props in real time

If you want to explore the code, each component lives in `src/components/<name>/` with:
- `ComponentName.tsx` — the component implementation
- `ComponentName.stories.tsx` — Storybook stories
- `ComponentName.test.tsx` — unit tests
