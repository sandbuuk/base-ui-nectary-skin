import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders children content', () => {
      render(<Badge>Test Content</Badge>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders badge text', () => {
      render(<Badge text="5">Content</Badge>)
      expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Badge ref={ref}>Test</Badge>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('renders without text (dot indicator)', () => {
      const { container } = render(<Badge size="s">Content</Badge>)
      const badgeIndicator = container.querySelector('[class*="absolute"]')

      expect(badgeIndicator).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className to container', () => {
      const { container } = render(<Badge className="custom-class">Test</Badge>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('passes through additional HTML attributes', () => {
      render(<Badge data-testid="badge" aria-label="notifications">Content</Badge>)

      const badge = screen.getByTestId('badge')

      expect(badge).toHaveAttribute('aria-label', 'notifications')
    })
  })

  // Size variants
  describe('sizes', () => {
    it('renders large size', () => {
      const { container } = render(<Badge text="3" size="l">Content</Badge>)
      const indicator = container.querySelector('[class*="w-5"]')

      expect(indicator).toBeInTheDocument()
    })

    it('renders medium size', () => {
      const { container } = render(<Badge text="3" size="m">Content</Badge>)
      const indicator = container.querySelector('[class*="w-3.5"]')

      expect(indicator).toBeInTheDocument()
    })

    it('renders small size (dot)', () => {
      const { container } = render(<Badge text="3" size="s">Content</Badge>)
      const indicator = container.querySelector('[class*="w-2"]')

      expect(indicator).toBeInTheDocument()
    })

    it('hides text in small size', () => {
      const { container } = render(<Badge text="3" size="s">Content</Badge>)
      const textElement = container.querySelector('[class*="hidden"]')

      expect(textElement).toBeInTheDocument()
    })
  })

  // Mode variants
  describe('modes', () => {
    it('renders in square mode by default', () => {
      const { container } = render(<Badge text="3">Content</Badge>)
      // Should not have circle mode positioning classes
      const indicator = container.querySelector('[class*="absolute"]')

      expect(indicator).toBeInTheDocument()
    })

    it('renders in circle mode', () => {
      const { container } = render(<Badge text="3" mode="circle">Content</Badge>)
      const indicator = container.querySelector('[class*="absolute"]')

      expect(indicator).toBeInTheDocument()
    })
  })

  // Hidden state
  describe('hidden state', () => {
    it('hides badge indicator when hidden is true', () => {
      const { container } = render(<Badge text="5" hidden>Content</Badge>)
      const indicator = container.querySelector('[class*="absolute"]')

      expect(indicator).not.toBeInTheDocument()
    })

    it('shows badge indicator when hidden is false', () => {
      const { container } = render(<Badge text="5" hidden={false}>Content</Badge>)
      const indicator = container.querySelector('[class*="absolute"]')

      expect(indicator).toBeInTheDocument()
    })

    it('still renders children when hidden', () => {
      render(<Badge text="5" hidden>Visible Content</Badge>)
      expect(screen.getByText('Visible Content')).toBeInTheDocument()
    })
  })

  // Long text handling
  describe('long text', () => {
    it('applies long class for multi-character text', () => {
      const { container } = render(<Badge text="99+">Content</Badge>)
      const indicator = container.querySelector('[class*="w-fit"]')

      expect(indicator).toBeInTheDocument()
    })

    it('does not apply long class for single character', () => {
      const { container } = render(<Badge text="5">Content</Badge>)
      // Single char should have fixed width, not w-fit from long variant
      const inner = container.querySelector('[class*="box-border"]')

      expect(inner).toBeInTheDocument()
      // The element should not have w-fit when text is single char
      expect(inner?.className).not.toMatch(/\bw-fit\b/)
    })

    it('renders long text correctly', () => {
      render(<Badge text="999">Content</Badge>)
      expect(screen.getByText('999')).toBeInTheDocument()
    })
  })

  // Structure
  describe('structure', () => {
    it('renders with correct base classes', () => {
      const { container } = render(<Badge>Content</Badge>)

      expect(container.firstChild).toHaveClass('relative', 'inline-flex', 'flex-col')
    })

    it('renders children as first element', () => {
      const { container } = render(
        <Badge text="5">
          <div data-testid="child">Child Content</div>
        </Badge>
      )
      const child = screen.getByTestId('child')

      expect(container.firstChild?.firstChild).toBe(child)
    })
  })

  // Default values
  describe('default values', () => {
    it('uses medium size by default', () => {
      const { container } = render(<Badge text="1">Content</Badge>)
      const indicator = container.querySelector('[class*="w-3.5"]')

      expect(indicator).toBeInTheDocument()
    })

    it('uses square mode by default', () => {
      const { container } = render(<Badge text="1">Content</Badge>)
      const wrapper = container.querySelector('[class*="absolute"]')

      expect(wrapper).toBeInTheDocument()
    })

    it('is not hidden by default', () => {
      const { container } = render(<Badge text="1">Content</Badge>)
      const indicator = container.querySelector('[class*="absolute"]')

      expect(indicator).toBeInTheDocument()
    })
  })
})
