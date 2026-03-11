# @nectary/react

Sinch Nectary design system — React component library built on [Base UI](https://base-ui.com) and `@nectary/theme-base` tokens.

## Quick Start

```bash
git clone https://github.com/sandbuuk/base-ui-nectary-skin.git
npm install
npm run storybook
```

Storybook opens at [http://localhost:6006](http://localhost:6006) with stories for all 62 components.

## Available Scripts

| Script | Description |
|---|---|
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook site |
| `npm run build:lib` | Build library (Vite + TypeScript declarations) |
| `npm run typecheck` | Run TypeScript type checking |

## Components

### Phase 1 — Base UI Wrappers

Direct wrappers around Base UI primitives with Nectary token styling.

| Component | Description |
|---|---|
| Field | Form field container with label, description, error |
| Input | Text input |
| Textarea | Multi-line text input |
| Toggle | Toggle button |
| ToggleGroup | Group of mutually exclusive toggles |
| Collapsible | Expandable/collapsible content panel |
| ScrollArea | Custom-styled scrollable container |
| NumberField | Numeric input with increment/decrement |

### Phase 2 — Simple Composed

Standalone presentational components.

| Component | Description |
|---|---|
| Text | Body text with size/weight/color variants |
| Title | Heading text (h1–h6) |
| Link | Anchor with underline/hover styling |
| Icon | SVG icon wrapper with size/color props |
| Avatar | User avatar with image, initials, or icon fallback |
| Spinner | Loading spinner animation |
| Skeleton | Placeholder loading skeleton |
| Tag | Colored label tag |
| Chip | Interactive chip with optional remove button |
| CodeTag | Inline code snippet display |

### Phase 3 — Layout & Containers

Structural components for page composition.

| Component | Description |
|---|---|
| Card | Content card container |
| Alert | Full-width alert banner |
| InlineAlert | Inline contextual alert |
| Grid | CSS Grid layout helper |
| List | Styled list with items and dividers |
| Table | Data table with header, body, rows |
| Sheet | Bottom/side sheet overlay panel |

### Phase 4 — Advanced Composed

Components combining multiple primitives.

| Component | Description |
|---|---|
| Pagination | Page navigation with previous/next and page numbers |
| ProgressStepper | Multi-step progress indicator |
| FileStatus | File upload status display (progress, complete, error) |
| HelpTooltip | Icon-triggered help tooltip |
| SelectButton | Button that opens a selection dropdown |
| Breadcrumb | Navigation breadcrumb trail |
| SegmentedControl | Segmented button group for switching views |
| Flag | Country/region flag icon |

### Phase 5 — Complex Feature

Full-featured interactive components.

| Component | Description |
|---|---|
| DatePicker | Calendar date selection |
| TimePicker | Time input with hour/minute/period |
| ColorMenu | Color palette picker dropdown |
| ColorSwatch | Single color swatch display |
| EmojiPicker | Categorized emoji selection popover |

### Phase 6 — Remaining

| Component | Description |
|---|---|
| FilePicker | Drag-and-drop file upload area |
| PersistentOverlay | Always-visible overlay panel |
| RichText | Rich text display renderer |
| Pop | Generic popover container |
| RichTextarea | Rich text editor with toolbar |

### Pre-existing (19)

These were already in the repo before the phased build.

Button, ButtonGroup, TextField, Switch, Badge, Checkbox, Radio, Separator, Dialog, AlertDialog, Popover, Tooltip, Menu, Select, Tabs, Accordion, Progress, Slider, Toast

## Build Approach

The library was built in 6 phases, ordered by dependency and complexity:

1. **Base UI Wrappers** — Established the token integration pattern by wrapping Base UI primitives with CSS Modules that consume `@nectary/theme-base` custom properties.
2. **Simple Composed** — Built leaf-node presentational components that don't depend on other library components.
3. **Layout & Containers** — Created structural components that provide composition contexts for other components.
4. **Advanced Composed** — Combined primitives and layout components into higher-level patterns.
5. **Complex Feature** — Full interactive widgets requiring internal state management and multiple sub-components.
6. **Remaining** — Components with unique requirements (rich text editing, file handling, overlays).

## Architecture

Each component follows a 4-file pattern:

```
ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.types.ts      # TypeScript interface
├── ComponentName.module.css    # Scoped styles using Nectary tokens
└── ComponentName.stories.tsx   # Storybook stories
```

**Compound components** — Complex components expose sub-components via dot notation (e.g. `Table.Root`, `Table.Header`, `Table.Row`).

**Class composition** — All components accept `className` and `style` props for consumer overrides, merged with internal CSS Module classes.

**Token system** — Styles reference `@nectary/theme-base` CSS custom properties (`--nectary-color-*`, `--nectary-spacing-*`, `--nectary-radius-*`, etc.) rather than hardcoded values.

## Theming

Components are styled via CSS custom properties from `@nectary/theme-base`. Import the base theme CSS, then override tokens as needed:

```tsx
import '@nectary/theme-base/style.css'
import '@nectary/react/style.css'

// Override tokens via CSS
// :root { --nectary-color-primary: #your-color; }
```

## Tech Stack

- **React** 19
- **Base UI** 1.0.0-rc.0
- **Vite** 6
- **TypeScript** 5.7
- **Storybook** 10
- **Vitest** 4 + Playwright (browser testing)
