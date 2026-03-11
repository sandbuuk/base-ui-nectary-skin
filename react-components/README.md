# @nectary/react

Sinch Nectary design system — React component library built with Tailwind CSS and class-variance-authority (CVA).

Browse all components interactively in [Storybook](http://localhost:6006/?path=/docs/components-toast--docs).

## Quick Start

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

Then open **http://localhost:6006** in your browser. You should see all components in the sidebar.

## Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start Storybook dev server on port 6006 |
| `pnpm build` | Build the library (Vite + TypeScript declarations) |
| `pnpm build:storybook` | Build static Storybook site |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:ui` | Run tests with browser UI |
| `pnpm lint` | Run ESLint |

## Components

### Form Controls

| Component | Description |
|---|---|
| Button | Interactive button with 7 variants and 4 sizes |
| ButtonGroup | Groups buttons with shared size/variant |
| Input | Text input with icon and addon slots |
| Textarea | Multi-line text input with auto-resize |
| Field | Form field wrapper with label, helper text, validation |
| Checkbox | Checkbox with checked/indeterminate states |
| Radio | Radio button group for single selection |
| Toggle | Switch control for boolean values |
| SelectMenu | Dropdown select with search, multi-select, keyboard navigation |
| SelectButton | Trigger button for select dropdown |

### Date, Time & Color

| Component | Description |
|---|---|
| DatePicker | Calendar date selection with range support |
| TimePicker | Clock-face time picker (12/24hr) |
| ColorMenu | Color palette picker grid |
| ColorSwatch | Single color preview dot |
| EmojiPicker | Categorized emoji selection panel |

### Navigation

| Component | Description |
|---|---|
| Tabs | Tab navigation with text and icon options |
| Pagination | Page navigation with previous/next and page numbers |
| Link | Anchor with external/standalone modes |
| SegmentedControl | Horizontal toggle group for view switching |
| SegmentedIconControl | Icon-only segmented control |
| ActionMenu | Dropdown action list |

### Layout & Containers

| Component | Description |
|---|---|
| Card | Content card with media, title, content, footer slots |
| Grid | Responsive CSS Grid with breakpoint variables |
| List | Styled list container |
| Accordion | Expandable/collapsible content sections |
| Table | Data table with aligned cells |
| ProgressStepper | Multi-step progress indicator |

### Feedback & Status

| Component | Description |
|---|---|
| Alert | Full-width alert banner (info/warn/error) |
| InlineAlert | Compact inline alert with caption |
| Toast | Temporary notification with ToastProvider |
| Dialog | Modal dialog with backdrop and focus trap |
| Progress | Progress bar with optional percentage |
| FileStatus | File upload status (pending/loading/success/error) |
| Spinner | Loading spinner |
| SkeletonItem | Loading placeholder |

### Overlays

| Component | Description |
|---|---|
| Sheet | Slide-in panel from any edge |
| Popover | Floating content anchored to trigger |
| Tooltip | Hover/focus tooltip |
| HelpTooltip | Question-mark icon with tooltip |
| Pop | Generic popover container |
| PersistentOverlay | Always-visible overlay panel |

### Display

| Component | Description |
|---|---|
| Text | Body text with size/weight variants (m/s/xs/xxs) |
| Title | Heading text (xl/l/m/s/xs, h1-h6) |
| Badge | Notification count overlaid on content |
| Avatar | User avatar with image, initials, or status |
| Tag | Colored label (29 color options) |
| Chip | Interactive pill with optional remove |
| Icon | Sinch icon font (version 1 and 2) |
| Flag | Country flag by ISO code |
| Emoji | Emoji character display |
| CodeTag | Inline code snippet |

### Utilities

| Component | Description |
|---|---|
| FileDrop | Drag-and-drop file upload zone |
| FilePicker | Hidden file input triggered by children |
| StopEvents | Prevents event propagation |
| RichText | Rich text display renderer |

## Architecture

Each component follows a consistent file pattern:

```
src/components/<name>/
  ComponentName.tsx           # Implementation (forwardRef + CVA)
  ComponentName.stories.tsx   # Storybook stories with controls
  ComponentName.test.tsx      # Unit tests (Vitest + Testing Library)
```

**Compound components** expose sub-components via dot notation:
- `AccordionGroup` + `AccordionGroup.Item`
- `TabsGroup` + `TabsGroup.Option` + `TabsGroup.IconOption`
- `Select` + `Select.Button` + `Select.Option`
- `RadioGroup` + `RadioGroup.Option`
- `ProgressStepperGroup` + `ProgressStepperGroup.Item`
- `ColorMenuCompound` + `ColorMenuCompound.Option`

**Token system** — All components reference Nectary CSS custom properties (`--sinch-sys-color-*`, `--sinch-ref-color-*`, `--sinch-comp-*`) via Tailwind utility classes rather than hardcoded values.

## Project Structure

```
base-ui-nectary-skin/
  react-components/         # This package (@nectary/react)
    src/
      components/           # All 67 components (one folder each)
      assets/               # SVG icons, brand assets
      styles/               # Global CSS tokens (globals.css)
      utils/                # Shared utilities (cn, useScrollLock)
    dist/                   # Built output (index.mjs, styles.css)
    COMPONENT_API.md        # Full API reference for all components
    DESIGN_AUDIT.md         # Audit status and remaining items
  themes/                   # Generated CSS tokens per theme
    base/                   # Default theme (ref.css, sys.css, comp/*.css)
    dark/                   # Dark theme
    message-media/          # MessageMedia brand theme
  tokens/                   # Design token source data (data.json)
  scripts/                  # Token processing (process-tokens.ts)
```

## Using as a Design System

The library ships a self-contained CSS bundle with all design tokens, fonts, and Tailwind utilities. To use it in any React project:

```bash
npm install sandbuuk/base-ui-nectary-skin
```

Then in your code:

```tsx
import { Button, Card, CardTitle, Dialog, Text } from '@nectary/react'
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

## Theming

Components are styled via CSS custom properties from the Nectary token system. The base theme is bundled in `styles.css`. Override tokens as needed:

```css
/* Override primary color */
.nectary-theme-base {
  --sinch-sys-color-primary-default: #your-color;
  --sinch-sys-color-primary-hover: #your-hover;
}
```

Token layers:
- `--sinch-ref-*` — Reference palette (raw colors, typography)
- `--sinch-sys-*` — Semantic system tokens (primary, surface, text, border)
- `--sinch-comp-*` — Component-specific overrides

## AI-Assisted Prototyping

Use this library with Claude or other AI tools to generate working prototypes. The repo includes a complete **[Component API Reference](./COMPONENT_API.md)** with every component's props, variants, and usage examples.

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

## Common Issues

| Problem | Fix |
|---------|-----|
| `command not found: pnpm` | Run `npm install -g pnpm` first |
| `ERR_PNPM_NO_PKG_MANIFEST` / `No package.json found` | Make sure you `cd base-ui-nectary-skin` before running `pnpm install` |
| `Missing script: storybook` | You're in the repo root — run `cd react-components` then `pnpm dev` |
| Port 6006 already in use | Kill the old process: `lsof -ti:6006 \| xargs kill` then retry |
| AirDrop conflict (Mac) | Not an issue here — Storybook uses port 6006, not 5000 |

## Tech Stack

- **React** 18
- **Tailwind CSS** 3.4
- **class-variance-authority** (CVA) 0.7
- **Vite** 5
- **TypeScript** 5.3
- **Storybook** 8.6
- **Vitest** 1.3 + Testing Library
