# Agent Instructions: Adding React Component Documentation

## Overview

This document contains instructions for automatically generating React component documentation pages in the Nectary docs site. When a new React component is migrated from the web component library, follow these instructions to add its documentation.

## Prerequisites

- The React component must exist in `react-components/src/components/{component-name}/`
- The component must be exported from `react-components/src/index.ts`
- The corresponding web component documentation exists at `docs/latest/src/pages/components/{ComponentName}/`

## Task: Add Documentation for a React Component

### Step 1: Identify the Component

Given a component name (e.g., "Checkbox"), locate:
1. The React component implementation: `react-components/src/components/checkbox/Checkbox.tsx`
2. The web component documentation: `docs/latest/src/pages/components/Checkbox/01-Examples.mdx`
3. The web component examples: `docs/latest/src/pages/components/Checkbox/examples/`

### Step 2: Create Directory Structure

Create the following directory structure:
```
docs/latest/src/pages/reactComponents/{ComponentName}/
├── 01-Examples.mdx
└── examples/
    └── {ExampleName}.tsx (one for each example)
```

### Step 3: Create Example Files

For each example in the web component documentation, create a corresponding React example.

**Pattern for example files:**
```tsx
import { ComponentName } from '@nectary/react'
import type { FC } from 'react'

export const {ExampleName}Example: FC = () => (
  <ComponentName
    prop1="value"
    prop2={true}
    onClick={() => console.log('click')}
  >
    Content
  </ComponentName>
)
```

**Key rules:**
1. Import `@nectary/react` BEFORE type imports from `react` (import order matters)
2. Sort named imports alphabetically within each import statement
3. Use `type { FC }` for type-only imports
4. Export name must match filename + "Example" suffix (e.g., `Simple.tsx` → `SimpleExample`)
5. No trailing spaces before self-closing JSX tags (`/>` not ` />`)
6. Use inline styles with `CSSProperties` type when needed for layout

**Example with multiple components and styles:**
```tsx
import { Button, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}

export const WithIconExample: FC = () => (
  <div style={wrapperStyles}>
    <Button variant="primary" leftIcon={<Icon name="fa-star" iconsVersion="2" size="sm"/>}>
      Click
    </Button>
  </div>
)
```

### Step 4: Create MDX Documentation File

Create `01-Examples.mdx` following this pattern:

```mdx
import { Example } from '~/components/Example'
import { SimpleExample } from './examples/Simple.tsx?example'
import { DisabledExample } from './examples/Disabled.tsx?example'
import { SizeExample } from './examples/Size.tsx?example'

# Examples

Brief description of the component.

## Simple

Description of the simple example.

<Example Component={SimpleExample}/>

## Disabled

Description of disabled state.

<Example Component={DisabledExample}/>

## Size

Description of size variants.

<Example Component={SizeExample}/>
```

**Key rules:**
1. Import `Example` from `~/components/Example`
2. Import examples with `?example` query suffix (this enables source code display)
3. Use `<Example Component={ExampleName}/>` to render examples
4. Mirror the structure of the corresponding web component documentation

### Step 5: Map Props Between Web Component and React Component

When translating examples, map props appropriately:

| Web Component | React Component |
|---------------|-----------------|
| `type="primary"` | `variant="primary"` |
| `text="Click"` | `children="Click"` or `text="Click"` |
| `disabled` (attribute) | `disabled={true}` or just `disabled` |
| `on-click={() => ...}` | `onClick={() => ...}` |
| `<sinch-icon slot="icon">` | `icon={<Icon .../>}` or `leftIcon={<Icon .../>}` |
| `size="m"` | `size="m"` (usually same) |

Check the React component's TypeScript interface for available props.

### Step 6: Verify

After creating the files:
1. Run `pnpm eslint docs/latest/src/pages/reactComponents/{ComponentName}/**/*.tsx` to check linting
2. The new component will automatically appear in the "React Components" navigation section
3. Routes are auto-discovered from the file system

## Component-Specific Notes

### Button
- Web component `type` → React `variant`
- Web component slots (`slot="icon"`, `slot="right-icon"`) → React props (`icon`, `leftIcon`, `rightIcon`)
- `loading` prop shows spinner automatically

### Input
- React uses `onChange={(value: string) => ...}` (receives string, not event)
- Web component `on-input` → React `onChange`
- `invalid` prop for error state

### Icon
- Always include `iconsVersion="2"` for Font Awesome icons with `fa-` prefix
- Size options: `xs`, `sm`, `md`, `lg`, `xl`

### Spinner
- Size options: `s`, `m`, `l`
- No color prop - inherits from CSS

### Text
- `type` prop for size: `m`, `s`, `xs`, `xxs`
- `emphasized` for bold text (only works with `m` and `s`)
- `ellipsis` for truncation

## Example Prompt for Agent

```
Add React component documentation for the {ComponentName} component.

1. Read the React component at: react-components/src/components/{component-name}/{ComponentName}.tsx
2. Read the web component examples at: docs/latest/src/pages/components/{ComponentName}/01-Examples.mdx
3. Create equivalent React examples at: docs/latest/src/pages/reactComponents/{ComponentName}/
4. Follow the patterns in AGENT_INSTRUCTIONS.md
5. Run eslint to verify: pnpm eslint docs/latest/src/pages/reactComponents/{ComponentName}/**/*.tsx
```

## Files Reference

- React components source: `react-components/src/components/`
- React components exports: `react-components/src/index.ts`
- Web component docs: `docs/latest/src/pages/components/`
- React component docs: `docs/latest/src/pages/reactComponents/`
- Example component: `docs/common/src/components/Example/index.tsx`
