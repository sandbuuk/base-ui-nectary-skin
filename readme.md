# Nectary — React Design System

A React component library built on Sinch's Nectary design system. 50+ components with Tailwind CSS and design tokens.

## Structure

| Package | Description |
|---------|-------------|
| [`/react-components`](./react-components/) | React component library (`@nectary/react`) |
| [`/themes`](./themes/) | Generated CSS tokens (colors, spacing, typography) |
| [`/tokens`](./tokens/) | Design token source data |
| [`/scripts`](./scripts/) | Token processing scripts |

## Quick Start

```bash
git clone https://github.com/sandbuuk/base-ui-nectary-skin.git
cd base-ui-nectary-skin
pnpm install
cd react-components
pnpm dev
```

Open **http://localhost:6006** to browse components in Storybook.

See [`react-components/README.md`](./react-components/README.md) for full setup instructions and usage guide.

## Regenerate Tokens

```bash
pnpm tokens:base    # Base theme
pnpm tokens:dark    # Dark theme
pnpm tokens          # All themes
```
