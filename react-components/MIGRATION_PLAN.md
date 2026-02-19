# Nectary React Components Migration Plan

> **Status**: PHASE 3 COMPLETE - Migration Complete
> **Last Updated**: 2026-02-19
> **Components**: 67 total (all migrated)

## Quick Start (For New Sessions)

To resume this migration in a new session:
```
Continue the React migration. Read react-components/MIGRATION_PLAN.md for context.
```

---

## Executive Summary

Convert 67 web components from `components/` to native React components in `react-components/` using:
- **Tailwind CSS** with existing design token CSS variables
- **CVA (class-variance-authority)** for variant management
- **Storybook** for component documentation
- **Vitest + Testing Library** for unit tests

---

## Project Structure

```
react-components/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── vitest.config.ts
├── MIGRATION_PLAN.md          # This file
├── MIGRATION_GUIDE.md         # Agent instructions
├── src/
│   ├── index.ts               # Barrel exports
│   ├── styles/
│   │   └── globals.css
│   ├── components/
│   │   ├── button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── ... (67 components)
│   ├── hooks/
│   │   └── index.ts
│   ├── context/
│   │   └── index.ts
│   ├── utils/
│   │   └── cn.ts
│   └── test/
│       └── setup.ts
├── .storybook/
│   ├── main.ts
│   ├── preview.tsx
│   └── manager.ts
└── scripts/
    └── scaffold-component.ts
```

---

## Execution Progress

### Phase 1: Setup Infrastructure
- [x] Create `package.json`
- [x] Create `tsconfig.json`
- [x] Create `tailwind.config.ts`
- [x] Create `postcss.config.js`
- [x] Create `vite.config.ts`
- [x] Create `vitest.config.ts`
- [x] Create `src/utils/cn.ts`
- [x] Create `src/styles/globals.css`
- [x] Create `src/test/setup.ts`
- [x] Create `.storybook/main.ts`
- [x] Create `.storybook/preview.tsx`
- [x] Create `scripts/scaffold-component.ts`
- [x] Run `pnpm install`
- [x] Verify `pnpm dev` starts Storybook

### Phase 2: Component Migration (67 components)

| Component | Status | Notes |
|-----------|--------|-------|
| accordion | [x] complete | Compound component with AccordionItem |
| accordion-item | [x] complete | Included with Accordion |
| action-menu | [x] complete | Compound component with ActionMenuOption |
| action-menu-option | [x] complete | Included with ActionMenu |
| alert | [x] complete | |
| avatar | [x] complete | |
| badge | [x] complete | |
| button | [x] complete | |
| button-group | [x] complete | Compound component with ButtonGroupItem |
| button-group-item | [x] complete | Included with ButtonGroup |
| card-container | [x] complete | Included with Card |
| card-v2 | [x] complete | Compound component with CardTitle, CardContainer |
| card-v2-title | [x] complete | Included with Card |
| checkbox | [x] complete | |
| chip | [x] complete | |
| code-tag | [x] complete | |
| color-menu | [x] complete | Compound component with ColorMenuOption |
| color-menu-option | [x] complete | Included with ColorMenu |
| color-swatch | [x] complete | |
| date-picker | [x] complete | Calendar grid, navigation, range selection, locale support |
| dialog | [x] complete | Portal, focus trap, escape key, backdrop click |
| emoji | [x] complete | |
| emoji-picker | [x] complete | Emoji grid, category tabs, search, skin tone selector |
| field | [x] complete | Form field wrapper with label, helper text, error |
| file-drop | [x] complete | Drag-and-drop file upload zone with validation |
| file-picker | [x] complete | File selection wrapper with validation |
| file-status | [x] complete | |
| flag | [x] complete | |
| grid | [x] complete | Layout component with GridItem |
| grid-item | [x] complete | Included with Grid |
| help-tooltip | [x] complete | Wraps Tooltip + Icon |
| icon | [x] complete | Priority: used by many |
| inline-alert | [x] complete | |
| input | [x] complete | Priority: form element |
| link | [x] complete | |
| list | [x] complete | Compound component with ListItem |
| list-item | [x] complete | Included with List |
| pagination | [x] complete | |
| persistent-overlay | [x] complete | Persistent dialog without close button, monitors visibility |
| pop | [x] complete | Low-level floating element utility with positioning |
| popover | [x] complete | Floating content anchored to trigger |
| progress | [x] complete | |
| progress-stepper | [x] complete | Compound component with ProgressStepperItem |
| progress-stepper-item | [x] complete | Included with ProgressStepper |
| radio | [x] complete | Compound component with RadioOption |
| radio-option | [x] complete | Included with Radio |
| rich-text | [x] complete | Compound component with RichTextarea, RichTextareaChip |
| rich-textarea | [x] complete | Included with RichText |
| rich-textarea-chip | [x] complete | Included with RichText |
| segment-collapse | [x] complete | Toggle button for expand/collapse sections |
| segmented-control | [x] complete | Compound component with SegmentedControlOption |
| segmented-control-option | [x] complete | Included with SegmentedControl |
| segmented-icon-control | [x] complete | Compound component with SegmentedIconControlOption, supports multiple selection |
| segmented-icon-control-option | [x] complete | Included with SegmentedIconControl |
| select-button | [x] complete | Included with SelectMenu |
| select-menu | [x] complete | Compound component with SelectMenuOption, SelectButton |
| select-menu-option | [x] complete | Included with SelectMenu |
| sheet | [x] complete | Includes SheetTitle |
| sheet-title | [x] complete | Included with Sheet |
| skeleton | [x] complete | |
| skeleton-item | [x] complete | Included with Skeleton |
| spinner | [x] complete | Priority: simple |
| stop-events | [x] complete | Utility component to stop event propagation |
| table | [x] complete | Compound component with TableHead, TableBody, TableRow, TableHeadCell, TableCell |
| table-body | [x] complete | Included with Table |
| table-cell | [x] complete | Included with Table |
| table-head | [x] complete | Included with Table |
| table-head-cell | [x] complete | Included with Table |
| table-row | [x] complete | Included with Table |
| tabs | [x] complete | Compound component with TabsOption, TabsIconOption |
| tabs-icon-option | [x] complete | Included with Tabs |
| tabs-option | [x] complete | Included with Tabs |
| tag | [x] complete | |
| text | [x] complete | Priority: used by many |
| textarea | [x] complete | |
| time-picker | [x] complete | Clock face with hour/minute selection, AM/PM support |
| title | [x] complete | |
| toast | [x] complete | Includes ToastProvider, useToast hook |
| toast-manager | [x] complete | Included with Toast |
| toggle | [x] complete | |
| tooltip | [x] complete | |

### Phase 3: Integration
- [x] Create `src/index.ts` barrel exports (all 55 component directories exported)
- [x] Run full test suite (1720 tests passing)
- [x] Build Storybook (successful)
- [x] TypeScript check (no errors)
- [x] Fix type issues (duplicate exports, interface conflicts, unused variables)

---

## Configuration Files

### package.json
```json
{
  "name": "@nectary/react-components",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/styles.css"
  },
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "vite build && tsc --emitDeclarationOnly",
    "build:storybook": "storybook build",
    "lint": "eslint src/ --ext .ts,.tsx",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "scaffold": "tsx scripts/scaffold-component.ts"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@storybook/addon-a11y": "^8.0.0",
    "@storybook/addon-essentials": "^8.0.0",
    "@storybook/addon-interactions": "^8.0.0",
    "@storybook/addon-links": "^8.0.0",
    "@storybook/react": "^8.0.0",
    "@storybook/react-vite": "^8.0.0",
    "@storybook/test": "^8.0.0",
    "@testing-library/jest-dom": "^6.4.0",
    "@testing-library/react": "^14.2.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.17",
    "jsdom": "^24.0.0",
    "postcss": "^8.4.35",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "storybook": "^8.0.0",
    "tailwindcss": "^3.4.1",
    "tsx": "^4.7.0",
    "typescript": "^5.3.0",
    "vite": "^5.1.0",
    "vite-plugin-dts": "^3.7.0",
    "vitest": "^1.3.0",
    "@vitest/ui": "^1.3.0"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "declaration": true,
    "declarationDir": "dist",
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### tailwind.config.ts
```ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--sinch-sys-color-primary-default)',
          hover: 'var(--sinch-sys-color-primary-hover)',
          active: 'var(--sinch-sys-color-primary-active)',
          disabled: 'var(--sinch-sys-color-primary-disabled)',
          foreground: 'var(--sinch-sys-color-primary-foreground)',
        },
        surface: {
          canvas: 'var(--sinch-sys-color-surface-canvas)',
          primary: {
            DEFAULT: 'var(--sinch-sys-color-surface-primary-default)',
            hover: 'var(--sinch-sys-color-surface-primary-hover)',
            active: 'var(--sinch-sys-color-surface-primary-active)',
            disabled: 'var(--sinch-sys-color-surface-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--sinch-sys-color-surface-secondary-default)',
            hover: 'var(--sinch-sys-color-surface-secondary-hover)',
            active: 'var(--sinch-sys-color-surface-secondary-active)',
          },
          tertiary: {
            DEFAULT: 'var(--sinch-sys-color-surface-tertiary-default)',
            hover: 'var(--sinch-sys-color-surface-tertiary-hover)',
            active: 'var(--sinch-sys-color-surface-tertiary-active)',
          },
          transparent: {
            DEFAULT: 'var(--sinch-sys-color-surface-transparent-default)',
            hover: 'var(--sinch-sys-color-surface-transparent-hover)',
            active: 'var(--sinch-sys-color-surface-transparent-active)',
          },
        },
        foreground: {
          DEFAULT: 'var(--sinch-sys-color-text-default)',
          muted: 'var(--sinch-sys-color-text-muted)',
          caption: 'var(--sinch-sys-color-text-caption)',
          disabled: 'var(--sinch-sys-color-text-disabled)',
        },
        border: {
          DEFAULT: 'var(--sinch-sys-color-border-default)',
          subtle: 'var(--sinch-sys-color-border-subtle)',
          strong: 'var(--sinch-sys-color-border-strong)',
          disabled: 'var(--sinch-sys-color-border-disabled)',
        },
        danger: {
          DEFAULT: 'var(--sinch-sys-color-feedback-danger-default)',
          strong: 'var(--sinch-sys-color-feedback-danger-strong)',
          subtle: 'var(--sinch-sys-color-feedback-danger-subtle)',
        },
        success: {
          DEFAULT: 'var(--sinch-sys-color-feedback-success-default)',
          strong: 'var(--sinch-sys-color-feedback-success-strong)',
          subtle: 'var(--sinch-sys-color-feedback-success-subtle)',
        },
        warning: {
          DEFAULT: 'var(--sinch-sys-color-feedback-warning-default)',
          strong: 'var(--sinch-sys-color-feedback-warning-strong)',
          subtle: 'var(--sinch-sys-color-feedback-warning-subtle)',
        },
        info: {
          DEFAULT: 'var(--sinch-sys-color-feedback-info-default)',
          strong: 'var(--sinch-sys-color-feedback-info-strong)',
          subtle: 'var(--sinch-sys-color-feedback-info-subtle)',
        },
        focus: 'var(--sinch-sys-color-focus)',
        pure: 'var(--sinch-sys-color-basic-pure)',
        'pure-inverted': 'var(--sinch-sys-color-basic-pure-inverted)',
      },
      borderRadius: {
        none: '0',
        xs: 'var(--sinch-sys-shape-radius-xs)',
        sm: 'var(--sinch-sys-shape-radius-s)',
        md: 'var(--sinch-sys-shape-radius-m)',
        lg: 'var(--sinch-sys-shape-radius-l)',
        full: 'var(--sinch-sys-shape-radius-full)',
      },
      height: {
        xs: 'var(--sinch-sys-size-xs)',
        sm: 'var(--sinch-sys-size-s)',
        md: 'var(--sinch-sys-size-m)',
        lg: 'var(--sinch-sys-size-l)',
      },
      fontFamily: {
        sans: ['var(--sinch-ref-typography-font-family-main)', 'sans-serif'],
        mono: ['var(--sinch-ref-typography-font-family-mono)', 'monospace'],
      },
      boxShadow: {
        focus: '0 0 0 2px var(--sinch-sys-color-focus)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid var(--sinch-sys-color-focus)',
            outlineOffset: '2px',
          },
        },
      })
    }),
  ],
}

export default config
```

### postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NectaryReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
```

### vitest.config.ts
```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
```

### src/utils/cn.ts
```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### src/styles/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    font-family: var(--sinch-ref-typography-font-family-main), system-ui, sans-serif;
  }
}
```

### src/test/setup.ts
```ts
import '@testing-library/jest-dom'
```

### .storybook/main.ts
```ts
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
```

### .storybook/preview.tsx
```tsx
import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/styles/globals.css'
import '../../themes/base/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a2126' },
        { name: 'canvas', value: 'var(--sinch-sys-color-surface-canvas)' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="nectary-theme-base p-4">
        <Story />
      </div>
    ),
  ],
}

export default preview
```

### scripts/scaffold-component.ts
```ts
import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const componentName = process.argv[2]
if (!componentName) {
  console.error('Usage: pnpm scaffold <component-name>')
  process.exit(1)
}

const pascalCase = (str: string) =>
  str.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')

const kebabCase = componentName
const PascalName = pascalCase(componentName)
const variantName = kebabCase.replace(/-/g, '')

const dir = join(__dirname, '../src/components', kebabCase)

if (existsSync(dir)) {
  console.error(`Component ${kebabCase} already exists`)
  process.exit(1)
}

mkdirSync(dir, { recursive: true })

// Component
writeFileSync(join(dir, `${PascalName}.tsx`), `import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * TODO: Review source component at components/${kebabCase}/
 * - index.ts: Component logic
 * - template.html: HTML structure and CSS
 * - types.ts: TypeScript types
 */

const ${variantName}Variants = cva(
  // Base styles
  '',
  {
    variants: {
      // TODO: Add variants based on source component
    },
    defaultVariants: {},
  }
)

export interface ${PascalName}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ${variantName}Variants> {
  // TODO: Add props from source types.ts
}

export const ${PascalName} = forwardRef<HTMLDivElement, ${PascalName}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(${variantName}Variants({}), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
${PascalName}.displayName = '${PascalName}'
`)

// Stories
writeFileSync(join(dir, `${PascalName}.stories.tsx`), `import type { Meta, StoryObj } from '@storybook/react'
import { ${PascalName} } from './${PascalName}'

const meta: Meta<typeof ${PascalName}> = {
  title: 'Components/${PascalName}',
  component: ${PascalName},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ${PascalName}>

export const Default: Story = {
  args: {},
}
`)

// Tests
writeFileSync(join(dir, `${PascalName}.test.tsx`), `import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ${PascalName} } from './${PascalName}'

describe('${PascalName}', () => {
  it('renders', () => {
    render(<${PascalName}>Test</${PascalName}>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<${PascalName} ref={ref}>Test</${PascalName}>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('applies custom className', () => {
    render(<${PascalName} className="custom">Test</${PascalName}>)
    expect(screen.getByText('Test')).toHaveClass('custom')
  })
})
`)

// Index
writeFileSync(join(dir, 'index.ts'), `export * from './${PascalName}'\n`)

console.log(\`
Created: src/components/${kebabCase}/
  - ${PascalName}.tsx
  - ${PascalName}.stories.tsx
  - ${PascalName}.test.tsx
  - index.ts

Next: Review components/${kebabCase}/ and implement the component.
\`)
```

---

## Agent Dispatch Instructions

To migrate components in parallel, dispatch agents with this prompt template:

```
Migrate the {COMPONENT_NAME} component to React.

Read these files for context:
1. react-components/MIGRATION_PLAN.md - Full project context
2. react-components/MIGRATION_GUIDE.md - Detailed instructions

Source files at components/{COMPONENT_NAME}/:
- index.ts: Component class and logic
- template.html: HTML structure and CSS
- types.ts: TypeScript types

Steps:
1. cd react-components && pnpm scaffold {COMPONENT_NAME}
2. Read and analyze source component files
3. Implement React component with Tailwind + CVA
4. Create Storybook stories for all variants/states
5. Write comprehensive unit tests
6. Verify: pnpm test --run

Update MIGRATION_PLAN.md status when complete.
```

---

## Recommended Migration Order

Start with these foundational components:
1. **spinner** - Simple, no dependencies
2. **icon** - Used by many components
3. **text** - Used by many components
4. **button** - Core interactive component
5. **input** - Core form component

Then proceed with remaining components in any order (can be parallelized).

---

## Notes

- Existing web components remain untouched in `components/`
- React components go in `react-components/src/components/`
- Use existing theme CSS: `themes/base/index.css`
- Component-specific tokens use arbitrary syntax: `[var(--sinch-comp-*)]`
- All 67 components can be migrated in parallel by separate agents
