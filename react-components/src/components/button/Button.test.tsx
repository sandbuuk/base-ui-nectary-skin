import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

// Simple test icon
const TestIcon = () => <span data-testid="test-icon">*</span>

describe('Button', () => {
  describe('rendering', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders with text prop', () => {
      render(<Button text="Click me"/>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('prefers text prop over children', () => {
      render(<Button text="Text prop">Children</Button>)
      expect(screen.getByRole('button', { name: 'Text prop' })).toBeInTheDocument()
    })

    it('renders as a button element', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the button element', () => {
      const ref = { current: null as HTMLButtonElement | null }

      render(<Button ref={ref}>Click me</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })

    it('ref provides access to button DOM node', () => {
      const ref = { current: null as HTMLButtonElement | null }

      render(<Button ref={ref}>Click me</Button>)
      expect(ref.current?.tagName).toBe('BUTTON')
    })
  })

  describe('variants', () => {
    it('applies primary variant classes', () => {
      render(<Button variant="primary">Primary</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('primary')
    })

    it('applies secondary variant by default', () => {
      render(<Button>Default</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('secondary')
    })

    it('applies subtle-primary variant classes', () => {
      render(<Button variant="subtle-primary">Subtle</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('subtle-primary')
    })

    it('applies subtle-secondary variant classes', () => {
      render(<Button variant="subtle-secondary">Subtle</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('subtle-secondary')
    })

    it('applies cta-primary variant classes', () => {
      render(<Button variant="cta-primary">CTA</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('cta-primary')
    })

    it('applies cta-secondary variant classes', () => {
      render(<Button variant="cta-secondary">CTA</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('cta-secondary')
    })

    it('applies destructive variant classes', () => {
      render(<Button variant="destructive">Delete</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('danger')
    })
  })

  describe('sizes', () => {
    it('applies extra small size classes', () => {
      render(<Button size="xs">XS</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('size-container-xs')
    })

    it('applies small size classes', () => {
      render(<Button size="s">Small</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('size-container-s')
    })

    it('applies medium size by default', () => {
      render(<Button>Default</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('size-container-m')
    })

    it('applies large size classes', () => {
      render(<Button size="l">Large</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('size-container-l')
    })
  })

  describe('custom className', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('merges custom className with variant classes', () => {
      render(<Button variant="primary" className="custom-class">Button</Button>)

      const button = screen.getByRole('button')

      expect(button).toHaveClass('custom-class')
      expect(button.className).toContain('primary')
    })
  })

  describe('icons', () => {
    it('renders with left icon', () => {
      render(<Button leftIcon={<TestIcon/>}>With Icon</Button>)
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveTextContent('With Icon')
    })

    it('renders with right icon', () => {
      render(<Button rightIcon={<TestIcon/>}>With Icon</Button>)
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveTextContent('With Icon')
    })

    it('renders with both icons', () => {
      render(
        <Button
          leftIcon={<span data-testid="left-icon">L</span>}
          rightIcon={<span data-testid="right-icon">R</span>}
        >
          With Icons
        </Button>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })

    it('renders icon-only button', () => {
      render(<Button icon={<TestIcon/>} aria-label="Add item"/>)
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Add item' })).toBeInTheDocument()
    })

    it('applies subtle-secondary variant for icon-only buttons by default', () => {
      render(<Button icon={<TestIcon/>} aria-label="Add"/>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('subtle-secondary')
    })

    it('respects explicit variant for icon-only buttons', () => {
      render(<Button icon={<TestIcon/>} variant="primary" aria-label="Add"/>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('primary')
    })
  })

  describe('disabled state', () => {
    it('sets disabled attribute', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('applies disabled styling classes', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toHaveClass('cursor-not-allowed')
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button disabled onClick={onClick}>Disabled</Button>)
      await user.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('loading state', () => {
    it('sets disabled attribute when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('shows spinner when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('hides left icon when loading', () => {
      render(<Button loading leftIcon={<TestIcon/>}>Loading</Button>)
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument()
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('hides right icon when loading', () => {
      render(<Button loading rightIcon={<TestIcon/>}>Loading</Button>)
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument()
    })

    it('sets aria-busy when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('does not call onClick when loading', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button loading onClick={onClick}>Loading</Button>)
      await user.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('toggled state', () => {
    it('sets aria-pressed when toggled', () => {
      render(<Button toggled>Toggled</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    })

    it('does not set aria-pressed when not toggled', () => {
      render(<Button>Not Toggled</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-pressed')
    })

    it('applies toggled styling for subtle-primary', () => {
      render(<Button variant="subtle-primary" toggled>Toggled</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('toggled')
    })

    it('applies toggled styling for subtle-secondary', () => {
      render(<Button variant="subtle-secondary" toggled>Toggled</Button>)

      const button = screen.getByRole('button')

      expect(button.className).toContain('toggled')
    })
  })

  describe('form type', () => {
    it('defaults to type="button"', () => {
      render(<Button>Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('sets type="submit" when formType is submit', () => {
      render(<Button formType="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('sets type="reset" when formType is reset', () => {
      render(<Button formType="reset">Reset</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
    })
  })

  describe('click events', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Click me</Button>)
      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('passes event to onClick handler', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Click me</Button>)
      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledWith(expect.objectContaining({
        type: 'click',
      }))
    })
  })

  describe('keyboard interaction', () => {
    it('can be focused', async () => {
      const user = userEvent.setup()

      render(<Button>Focus me</Button>)
      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })

    it('triggers click on Enter key', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Press Enter</Button>)
      await user.tab()
      await user.keyboard('{Enter}')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('triggers click on Space key', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Press Space</Button>)
      await user.tab()
      await user.keyboard(' ')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('cannot be focused when disabled', async () => {
      const user = userEvent.setup()

      render(
        <>
          <Button>Focusable</Button>
          <Button disabled>Not Focusable</Button>
        </>
      )
      await user.tab()
      expect(screen.getByRole('button', { name: 'Focusable' })).toHaveFocus()
      await user.tab()
      // Should not focus the disabled button, focus moves out of buttons
      expect(screen.getByRole('button', { name: 'Not Focusable' })).not.toHaveFocus()
    })
  })

  describe('accessibility', () => {
    it('has button role', () => {
      render(<Button>Accessible</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Button aria-label="Close dialog">X</Button>)
      expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument()
    })

    it('supports aria-describedby', () => {
      render(
        <>
          <Button aria-describedby="description">Described</Button>
          <span id="description">This button does something</span>
        </>
      )
      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'description')
    })

    it('supports custom id', () => {
      render(<Button id="my-button">With ID</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('id', 'my-button')
    })
  })

  describe('HTML attributes', () => {
    it('passes through data attributes', () => {
      render(<Button data-testid="custom-button">Data</Button>)
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })

    it('passes through name attribute', () => {
      render(<Button name="submit-btn">Named</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('name', 'submit-btn')
    })

    it('passes through form attribute', () => {
      render(<Button form="my-form">Form Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('form', 'my-form')
    })
  })
})
