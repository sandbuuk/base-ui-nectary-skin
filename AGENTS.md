# AGENTS.md - Nectary Component Library

This is the monorepo for Nectary, Sinch's design system. It contains web components, React wrappers, design tokens, and documentation.

## Build/Lint/Test Commands

### Package Manager
- **pnpm** (v9.14.0+) is the required package manager
- Node.js v20.19.5+ is required (see `.nvmrc`)

### Installation
```bash
pnpm install
```

### Linting
```bash
pnpm lint          # Run ESLint + TypeScript checks + Stylelint
pnpm lint:fix      # Auto-fix ESLint and Stylelint issues
```

### Type Checking
```bash
tsc --noEmit -p components/   # Type check components
tsc --noEmit -p tests/        # Type check tests
```

### Testing
```bash
pnpm test              # Run all tests (unit + visual in Docker)
pnpm test:unit         # Run unit tests only

# Run a single unit test file:
pnpm --dir tests test:unit -- --grep "Component Names"

# Run visual tests for a specific component (in Docker):
pnpm --dir tests test -- --grep "button"
```

### Running Specific Test Projects
```bash
# From the tests/ directory:
npx playwright test --project unit-tests                    # Unit tests only
npx playwright test --project chromium-react               # React visual tests
npx playwright test tests/components/button.ts             # Single component tests
```

### Development Server
```bash
pnpm start         # Start docs at localhost:5000
```

## Code Style Guidelines

### File Structure (Components)
Each component follows this structure:
```
components/{component-name}/
├── index.ts           # Main component class
├── template.html      # HTML template (imported as raw string)
├── types.ts           # TypeScript types and interfaces
├── utils.ts           # Component-specific utilities
└── global/
    └── index.ts       # Global registration variant
```

### Naming Conventions
- **Component directories**: kebab-case (`button-group`, `date-picker`)
- **Custom element tags**: `sinch-{component-name}` (`sinch-button`, `sinch-dialog`)
- **TypeScript types**: PascalCase with `T` prefix (`TSinchButtonType`, `TSinchButtonProps`)
- **Classes**: PascalCase (`Button`, `DatePicker`)
- **Private fields**: Use `#` prefix (`#controller`, `#$button`)
- **DOM element refs**: Prefix with `$` (`#$button`, `#$text`)
- **Boolean props**: Prefix with `is`, `has`, or `should` (`isDisabled`, `hasIcon`)
- **Event handlers**: Prefix with `on` (`#onButtonClick`, `#onContextSize`)

### Import Order (Enforced by ESLint)
Imports are sorted alphabetically within groups:
1. Built-in modules
2. External packages
3. Parent directories
4. Sibling files
5. Index files
6. Type imports (always last, using `import type`)

```typescript
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { expect, test } from '@playwright/test'
import { NectaryElement } from '../utils'
import templateHTML from './template.html?raw'
import type { TSinchButtonType } from './types'
```

### TypeScript Conventions
- Use strict mode (`"strict": true`)
- Use `type` imports for type-only imports: `import type { X } from './types'`
- Type annotations with commas as delimiters (not semicolons)
- Explicit return types on public methods
- Use `readonly` arrays for constant values: `readonly TSinchButtonType[]`

```typescript
export type TSinchButtonProps = {
  type?: TSinchButtonType,
  size?: TSinchSizeEx,
  disabled?: boolean,
}
```

### Formatting Rules
- **Indentation**: 2 spaces
- **Semicolons**: None (no semicolons)
- **Quotes**: Single quotes for strings
- **Trailing commas**: Always on multiline arrays/objects, never in function params
- **Line endings**: LF (Unix-style)
- **Max params**: 4 per function

### Code Patterns

#### Web Component Structure
```typescript
export class Button extends NectaryElement {
  #$button: HTMLDivElement
  #controller: AbortController | null = null

  constructor() {
    super()
    const shadowRoot = this.attachShadow()
    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$button = shadowRoot.querySelector('#button')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()
    const { signal } = this.#controller
    this.addEventListener('click', this.#onClick, { signal })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'size']
  }
}

defineCustomElement('sinch-button', Button)
```

#### Attribute/Property Accessors
```typescript
set disabled(isDisabled: boolean) {
  updateBooleanAttribute(this, 'disabled', isDisabled)
}

get disabled() {
  return getBooleanAttribute(this, 'disabled')
}
```

### Error Handling
- Use strict boolean expressions (no truthy/falsy checks)
- Use explicit null checks: `value !== null` not `value`
- Empty catch blocks are allowed: `catch {}`

### CSS Conventions (Stylelint)
- Use legacy color function notation: `rgba(0, 0, 0, 0.5)` not `rgba(0 0 0 / 0.5)`
- Alpha values as numbers, not percentages
- Custom properties must exist in `themes/base/index.css`

## Commit Message Format
Uses conventional commits with required scope:
```
feat(repo): add new feature
fix(components): fix button click handler
```
Scopes are validated against directories in `packages/`.

## Project Structure
```
/assets         - Images, logos, icons, animations
/components     - Web component library
/docs           - Documentation website (nectary.sinch.com)
/libs           - Utility libraries
/packages       - CLI tools (nectary-cli)
/shared         - Shared base classes
/tests          - Visual and unit tests
/themes         - CSS theme files
/tokens         - Design tokens
/wrappers       - Framework wrappers (React)
```

## Key Utilities
Import from `../utils`:
- `defineCustomElement` - Register custom elements
- `NectaryElement` - Base class for all components
- `getAttribute`, `getBooleanAttribute`, `getLiteralAttribute` - Attribute helpers
- `updateAttribute`, `updateBooleanAttribute`, `updateLiteralAttribute` - Setters
- `Context`, `subscribeContext` - Context API for parent-child communication
- `getReactEventHandler` - Bridge for React event handlers
