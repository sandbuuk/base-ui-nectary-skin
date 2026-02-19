# Component Migration Guide

This document provides detailed instructions for agents migrating web components to React.

---

## Overview

You are converting a web component to a native React component using:
- **Tailwind CSS** for styling (with existing CSS variable tokens)
- **CVA (class-variance-authority)** for variant management
- **Storybook** for documentation
- **Vitest + Testing Library** for tests

---

## Step 1: Setup

Run the scaffold script to create boilerplate:

```bash
cd react-components
pnpm scaffold {component-name}
```

This creates:
```
src/components/{component-name}/
├── {ComponentName}.tsx
├── {ComponentName}.stories.tsx
├── {ComponentName}.test.tsx
└── index.ts
```

---

## Step 2: Analyze Source Files

Read these files in `components/{component-name}/`:

| File | What to Extract |
|------|-----------------|
| `index.ts` | Component logic, lifecycle methods, event handlers, state management |
| `template.html` | HTML structure, CSS styles (look at `:host` selectors) |
| `types.ts` | Props (`TSinch*Props`), Events (`TSinch*Events`), Style overrides |
| `utils.ts` | Component-specific utilities (if exists) |

Also check `wrappers/react/src/types.ts` for React-specific prop mappings.

---

## Step 3: Convert Types

### Props Conversion

| Web Component | React |
|---------------|-------|
| `'aria-label': string` | `ariaLabel?: string` |
| `'form-type'?: 'submit' \| 'reset'` | `formType?: 'submit' \| 'reset'` |
| `'data-size'?: string` | `dataSize?: string` |
| `disabled?: boolean` | `disabled?: boolean` |
| `text?: string` | `text?: string` |

### Events Conversion

| Web Component | React |
|---------------|-------|
| `'-click'?: (e: CustomEvent) => void` | `onClick?: (e: React.MouseEvent) => void` |
| `'-change'?: (e: CustomEvent<string>) => void` | `onChange?: (value: string) => void` |
| `'-focus'?: (e: CustomEvent) => void` | `onFocus?: (e: React.FocusEvent) => void` |
| `'-blur'?: (e: CustomEvent) => void` | `onBlur?: (e: React.FocusEvent) => void` |

### Slots Conversion

| Web Component | React |
|---------------|-------|
| `<slot name="icon">` | `icon?: ReactNode` prop |
| `<slot name="left-icon">` | `leftIcon?: ReactNode` prop |
| `<slot name="content">` | `children` or `content?: ReactNode` |
| `<slot>` (default) | `children` |

---

## Step 4: Convert CSS to Tailwind

### Selector Mapping

| CSS (Shadow DOM) | Tailwind (React) |
|------------------|------------------|
| `:host` | Root element classes |
| `:host([type="primary"])` | CVA variant |
| `:host([disabled])` | CVA variant or conditional class |
| `:host(:hover)` | `hover:` prefix |
| `:host(:focus-visible)` | `focus-visible:` prefix |
| `:host(:active)` | `active:` prefix |
| `::slotted(*)` | Child element styles |

### Token Mapping

The Tailwind config maps system tokens. Use these:

```tsx
// Colors
bg-primary                    // var(--sinch-sys-color-primary-default)
bg-primary-hover             // var(--sinch-sys-color-primary-hover)
bg-surface-primary           // var(--sinch-sys-color-surface-primary-default)
text-foreground              // var(--sinch-sys-color-text-default)
text-foreground-muted        // var(--sinch-sys-color-text-muted)
border-border                // var(--sinch-sys-color-border-default)

// Feedback colors
bg-danger                    // var(--sinch-sys-color-feedback-danger-default)
bg-success                   // var(--sinch-sys-color-feedback-success-default)
bg-warning                   // var(--sinch-sys-color-feedback-warning-default)
bg-info                      // var(--sinch-sys-color-feedback-info-default)

// Border radius
rounded-xs                   // var(--sinch-sys-shape-radius-xs)
rounded-sm                   // var(--sinch-sys-shape-radius-s)
rounded-md                   // var(--sinch-sys-shape-radius-m)
rounded-lg                   // var(--sinch-sys-shape-radius-l)
rounded-full                 // var(--sinch-sys-shape-radius-full)

// Heights (component sizes)
h-xs                         // var(--sinch-sys-size-xs) = 24px
h-sm                         // var(--sinch-sys-size-s) = 32px
h-md                         // var(--sinch-sys-size-m) = 40px
h-lg                         // var(--sinch-sys-size-l) = 48px
```

### Component-Specific Tokens

For `--sinch-comp-*` tokens not in the config, use arbitrary values:

```tsx
// Background with component token
className="bg-[var(--sinch-comp-button-color-primary-default-background-initial)]"

// Shadow with component token
className="shadow-[var(--sinch-comp-button-shadow-primary-initial)]"

// Font with component token
className="font-[var(--sinch-comp-button-font-size-m-text)]"
```

---

## Step 5: Implement Component

### Basic Structure

```tsx
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

// Define variants using CVA
const componentVariants = cva(
  // Base classes (always applied)
  'inline-flex items-center justify-center transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'bg-surface-primary border border-border hover:bg-surface-primary-hover',
        destructive: 'bg-danger text-pure hover:bg-danger-strong',
      },
      size: {
        xs: 'h-xs px-2 text-xs rounded-xs',
        sm: 'h-sm px-3 text-sm rounded-sm',
        md: 'h-md px-4 text-base rounded-md',
        lg: 'h-lg px-5 text-base rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  }
)

// Props interface
export interface ComponentProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof componentVariants> {
  text?: string
  disabled?: boolean
  icon?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

// Component with forwardRef
export const Component = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ className, variant, size, text, disabled, icon, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          componentVariants({ variant, size }),
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {icon}
        {text || children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)
Component.displayName = 'Component'
```

### Handling State

For components with internal state (controlled/uncontrolled pattern):

```tsx
import { forwardRef, useState, useCallback } from 'react'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value: controlledValue, defaultValue, onChange, ...props }, ref) => {
    // Uncontrolled state
    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    
    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue
    
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }, [isControlled, onChange])
    
    return (
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
```

### Compound Components

For components like Tabs, use compound pattern:

```tsx
import { createContext, useContext, useState, forwardRef } from 'react'

// Context
interface TabsContextValue {
  value: string
  onChange: (value: string) => void
}
const TabsContext = createContext<TabsContextValue | null>(null)

// Root
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ value, defaultValue, onChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue
    
    const handleChange = (newValue: string) => {
      if (!isControlled) setInternalValue(newValue)
      onChange?.(newValue)
    }
    
    return (
      <TabsContext.Provider value={{ value: currentValue, onChange: handleChange }}>
        <div ref={ref} {...props}>{children}</div>
      </TabsContext.Provider>
    )
  }
)

// Tab option
export const TabsOption = forwardRef<HTMLButtonElement, TabsOptionProps>(
  ({ value, children, ...props }, ref) => {
    const ctx = useContext(TabsContext)
    const isActive = ctx?.value === value
    
    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        onClick={() => ctx?.onChange(value)}
        className={cn(isActive && 'bg-primary')}
        {...props}
      >
        {children}
      </button>
    )
  }
)

// Attach subcomponents
Tabs.Option = TabsOption
```

---

## Step 6: Create Stories

Create comprehensive stories covering all variants and states:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Component } from './Component'

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Component>

// Default
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Component variant="primary">Primary</Component>
      <Component variant="secondary">Secondary</Component>
      <Component variant="destructive">Destructive</Component>
    </div>
  ),
}

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Component size="xs">Extra Small</Component>
      <Component size="sm">Small</Component>
      <Component size="md">Medium</Component>
      <Component size="lg">Large</Component>
    </div>
  ),
}

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

// With icons
export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    leftIcon: <span>+</span>,
  },
}

// Interactive (for testing)
export const Interactive: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(args.onClick).toHaveBeenCalled()
  },
}
```

---

## Step 7: Write Tests

Write comprehensive unit tests:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Component } from './Component'

describe('Component', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text content', () => {
      render(<Component>Hello</Component>)
      expect(screen.getByText('Hello')).toBeInTheDocument()
    })

    it('renders with text prop', () => {
      render(<Component text="Hello" />)
      expect(screen.getByText('Hello')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<Component ref={ref}>Test</Component>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  // Variants
  describe('variants', () => {
    it('applies primary variant classes', () => {
      render(<Component variant="primary">Primary</Component>)
      expect(screen.getByText('Primary')).toHaveClass('bg-primary')
    })

    it('applies size classes', () => {
      render(<Component size="lg">Large</Component>)
      expect(screen.getByText('Large')).toHaveClass('h-lg')
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      render(<Component className="custom-class">Test</Component>)
      expect(screen.getByText('Test')).toHaveClass('custom-class')
    })

    it('renders with icon', () => {
      render(<Component icon={<span data-testid="icon">*</span>}>Test</Component>)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
  })

  // Events
  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const onClick = vi.fn()
      render(<Component onClick={onClick}>Click me</Component>)
      await userEvent.click(screen.getByText('Click me'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const onClick = vi.fn()
      render(<Component disabled onClick={onClick}>Click me</Component>)
      await userEvent.click(screen.getByText('Click me'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets disabled attribute', () => {
      render(<Component disabled>Disabled</Component>)
      expect(screen.getByText('Disabled')).toBeDisabled()
    })

    it('applies disabled styles', () => {
      render(<Component disabled>Disabled</Component>)
      expect(screen.getByText('Disabled')).toHaveClass('cursor-not-allowed')
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has correct role', () => {
      render(<Component>Button</Component>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Component aria-label="Close dialog">X</Component>)
      expect(screen.getByLabelText('Close dialog')).toBeInTheDocument()
    })
  })
})
```

---

## Step 8: Verify

1. **Run tests**: `pnpm test --run`
2. **Start Storybook**: `pnpm dev`
3. **Check all stories render correctly**
4. **Verify a11y with Storybook addon**
5. **Update MIGRATION_PLAN.md** - mark component as complete

---

## Common Patterns Reference

### Size Context
If parent provides size to children (like ButtonGroup):

```tsx
import { createContext, useContext } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg'
const SizeContext = createContext<Size>('md')

// Parent
export const ButtonGroup = ({ size = 'md', children }) => (
  <SizeContext.Provider value={size}>
    <div className="flex">{children}</div>
  </SizeContext.Provider>
)

// Child
export const Button = ({ size: propSize, ...props }) => {
  const contextSize = useContext(SizeContext)
  const size = propSize ?? contextSize
  // ...
}
```

### Form Integration
For form-associated components:

```tsx
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, value, onChange, onBlur, ...props }, ref) => {
    return (
      <input
        ref={ref}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        {...props}
      />
    )
  }
)
```

### Portal Components (Dialog, Popover)
For components that render outside the DOM tree:

```tsx
import { createPortal } from 'react-dom'

export const Dialog = ({ open, onClose, children }) => {
  if (!open) return null
  
  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-4 flex items-center justify-center">
        <div className="bg-pure rounded-lg p-6">{children}</div>
      </div>
    </div>,
    document.body
  )
}
```

---

## Troubleshooting

### CSS not applying
- Ensure theme CSS is imported: `import '../../themes/base/index.css'`
- Check `.nectary-theme-base` class is on a parent element
- Verify Tailwind is processing the file (check content paths)

### Arbitrary values not working
- Use square brackets: `bg-[var(--sinch-comp-...)]`
- Ensure no spaces inside brackets
- Check CSS variable exists in theme

### Tests failing
- Run `pnpm test:ui` for visual debugging
- Check if element is actually rendered
- Use `screen.debug()` to see current DOM

---

## Questions?

If unclear about anything, check:
1. The source web component implementation
2. Existing React wrappers in `wrappers/react/`
3. Similar components already migrated
