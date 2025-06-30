# Nectary Labs

Welcome to Nectary Labs! This is the experimental playground for new components, patterns, and features that are being evaluated for inclusion in the main Nectary design system.

---

> Nectary Labs is where innovation meets collaboration - a shared incubator for experimental components that could become the next generation of design system patterns.

---

## 🎯 What is Nectary Labs?

Nectary Labs is a shared component library where **any team** can contribute their own experimental components. When a component is requested or used by multiple teams, it becomes a candidate for promotion to the main Nectary design system by the official Nectary team.

## 🚀 Getting Started

### Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nectary
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the docs locally**

   ```bash
   pnpm start
   ```

## 📝 Creating a New Component

### 1. Component Structure

Create a new directory following the naming convention:

```bash
mkdir my-new-component
cd my-new-component
```

### 2. Create Documentation Page

**First**, create a documentation page in `docs/latest/src/pages/labComponents/MyComponent/` to display and manually test your component during development:

```typescript
// docs/latest/src/pages/labComponents/MyComponent/examples/Basic.tsx
import '@nectary/labs/my-new-component'

export const BasicExample = () => (
  <sinch-labs-my-new-component 
    text="Hello World"
    disabled={false}
  />
)
```

### 3. Create the TypeScript File (index.ts)

```typescript
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')
template.innerHTML = templateHTML

export class MyNewComponent extends NectaryElement {
  // Private fields for DOM elements
  #button: HTMLButtonElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()
    shadowRoot.appendChild(template.content.cloneNode(true))

    // Query DOM elements
    this.#button = shadowRoot.querySelector('#button')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()
    const { signal } = this.#controller

    // Add event listeners
    this.#button.addEventListener('click', this.#onClick, { signal })

    this.#updateUI()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['disabled', 'text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) return

    switch (name) {
      case 'disabled':
      case 'text':
        this.#updateUI()
        break
    }
  }

  // Properties with getters/setters
  get disabled(): boolean {
    return this.hasAttribute('disabled')
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  set text(value: string) {
    this.setAttribute('text', value)
  }

  #updateUI() {
    if (!this.isDomConnected) return

    this.#button.disabled = this.disabled
    this.#button.textContent = this.text
  }

  #onClick = () => {
    this.dispatchEvent(new CustomEvent('-click'))
  }
}

defineCustomElement('sinch-labs-my-new-component', MyNewComponent)

// TypeScript definitions
type Props = {
  disabled?: boolean
  text?: string
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-my-new-component': ElementProps & HTMLElement
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-my-new-component': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>
    }
  }
}
```

### 4. Create the Template File (template.html)

```html
<style>
:host {
  display: inline-block;
}

#button {
  padding: 8px 16px;
  border: 1px solid var(--sinch-sys-color-border-default);
  border-radius: 4px;
  background: var(--sinch-sys-color-surface-default);
  color: var(--sinch-sys-color-text-default);
  font: var(--sinch-sys-font-body-m);
  cursor: pointer;
}

#button:hover {
  background: var(--sinch-sys-color-surface-hover);
}

#button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<button id="button" type="button">
  Default Text
</button>
```

## 🎨 Design Patterns

### Use Primitive Props and Slots for Composition

Only use primitive types (string, number, boolean) for component properties to keep components as close to native HTML as possible. For complex data structures, prefer slots/children over array props for better composability:

```typescript
// ❌ Avoid complex props
<my-component config={{theme: "dark", items: [1, 2, 3]}} />
<my-component items={[{title: "Item 1"}, {title: "Item 2"}]} />

// ✅ Use primitive props and slotted children
<my-component theme="dark" count="3">
  <my-item title="Item 1" />
  <my-item title="Item 2" />
</my-component>
```

### Event Naming Convention

Use the `-` prefix for custom events:

```typescript
// Dispatch custom events
this.dispatchEvent(new CustomEvent('-click'))
this.dispatchEvent(new CustomEvent('-change', { detail: newValue }))
```

### Attribute Reflection

Always reflect important properties as attributes:

```typescript
get disabled(): boolean {
  return this.hasAttribute('disabled')
}

set disabled(value: boolean) {
  if (value) {
    this.setAttribute('disabled', '')
  } else {
    this.removeAttribute('disabled')
  }
}
```

### Use CSS Custom Properties

Leverage design tokens for consistent styling:

```css
:host {
  color: var(--sinch-sys-color-text-default);
  font: var(--sinch-sys-font-body-m);
  background: var(--sinch-sys-color-surface-default);
}
```


## 🚢 Submission Guidelines

### Commit Messages

Follow conventional commit format for automated versioning:

```text
feat(labs): add new component for data visualization
fix(labs): resolve accessibility issue in phone preview
docs(labs): update contributing guide with new patterns
```

We use [semantic-release](https://semantic-release.gitbook.io/) for automated versioning and publishing. Your commit messages directly determine the version bump:

- **`feat:`** triggers a **minor** version bump (e.g., 1.2.0 → 1.3.0)
- **`fix:`** triggers a **patch** version bump (e.g., 1.2.0 → 1.2.1)
- **`docs:`**, **`style:`**, **`refactor:`** etc. don't trigger a release
- **Breaking changes** (with `BREAKING CHANGE:` in footer) trigger a **major** version bump (e.g., 1.2.0 → 2.0.0)

### Pull Request Process

1. **Create Feature Branch**: `git checkout -b feat/my-new-component`
2. **Implement Component**: Follow the patterns above
3. **Test Thoroughly**: Run build, lint, and manual tests
4. **Update Documentation**: Add usage examples
5. **Submit PR**: Include clear description and testing notes

## 🐛 Troubleshooting

### Common Issues

**TypeScript Conflicts**: If you see "Subsequent property declarations must have the same type":

- Remove any old compiled `.d.ts` files
- Run `npm run build` to regenerate types
- Restart TypeScript service in your editor

**Import Errors**: Ensure all child components are properly imported:

- Check import paths are correct
- Verify component registration
- Import child components before parent components

**Styling Issues**:

- Use `:host` for component root styles
- Ensure CSS custom properties are defined
- Check shadow DOM style encapsulation

## 💬 Getting Help

- Check existing components in `labs/` for patterns and examples
- Review the main Nectary design system documentation
- Ask questions in #nectary channels or discussions
- Browse the [Lab Components](/labComponents) section for live examples

---

**Ready to contribute?** Start by exploring existing components in the repository, then follow the patterns above to create your own experimental component that could benefit teams across the organization!
