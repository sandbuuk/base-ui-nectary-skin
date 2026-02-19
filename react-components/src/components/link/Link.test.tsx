import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Link } from './Link'

describe('Link', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<Link href="/test" text="Test Link"/>)
      expect(screen.getByText('Test Link')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(<Link href="/test">Children Link</Link>)
      expect(screen.getByText('Children Link')).toBeInTheDocument()
    })

    it('prefers text prop over children when both provided', () => {
      render(<Link href="/test" text="Text Prop">Children</Link>)
      expect(screen.getByText('Text Prop')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Link ref={ref} href="/test" text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
    })

    it('renders as an anchor element', () => {
      render(<Link href="/test" text="Test"/>)
      expect(screen.getByRole('link')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies href attribute', () => {
      render(<Link href="https://example.com" text="Test"/>)
      expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
    })

    it('applies custom className', () => {
      render(<Link href="/test" text="Test" className="custom-class"/>)
      expect(screen.getByRole('link')).toHaveClass('custom-class')
    })

    it('passes through aria-label', () => {
      render(<Link href="/test" text="Test" aria-label="Custom label"/>)
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
    })
  })

  // External links
  describe('external', () => {
    it('sets target="_blank" when external', () => {
      render(<Link href="https://example.com" text="External" external/>)
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    })

    it('sets rel="noopener noreferrer" when external', () => {
      render(<Link href="https://example.com" text="External" external/>)
      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('does not set target when not external', () => {
      render(<Link href="/internal" text="Internal"/>)
      expect(screen.getByRole('link')).not.toHaveAttribute('target')
    })
  })

  // Standalone mode
  describe('standalone', () => {
    it('applies standalone variant classes', () => {
      render(<Link href="/test" text="Standalone" standalone/>)
      expect(screen.getByRole('link')).toHaveClass('block')
    })

    it('applies inline variant classes by default', () => {
      render(<Link href="/test" text="Inline"/>)
      expect(screen.getByRole('link')).toHaveClass('inline')
    })
  })

  // Disabled state
  describe('disabled', () => {
    it('sets aria-disabled when disabled', () => {
      render(<Link href="/test" text="Disabled" disabled/>)

      // An anchor without href doesn't have link role, so we query by text
      const anchor = screen.getByText('Disabled').closest('a')

      expect(anchor).toHaveAttribute('aria-disabled', 'true')
    })

    it('removes href when disabled', () => {
      render(<Link href="/test" text="Disabled" disabled/>)

      const anchor = screen.getByText('Disabled').closest('a')

      expect(anchor).not.toHaveAttribute('href')
    })

    it('applies disabled styles', () => {
      render(<Link href="/test" text="Disabled" disabled/>)

      const anchor = screen.getByText('Disabled').closest('a')

      expect(anchor).toHaveClass('pointer-events-none')
    })

    it('prevents click events when disabled', async () => {
      const onClick = vi.fn()

      render(<Link href="/test" text="Disabled" disabled onClick={onClick}/>)

      const anchor = screen.getByText('Disabled').closest('a')!

      // Even though pointer-events-none prevents normal clicks,
      // the onClick handler still checks for disabled and returns early
      await userEvent.click(anchor, { pointerEventsCheck: 0 })
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  // Events
  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault())

      render(<Link href="/test" text="Click me" onClick={onClick}/>)

      await userEvent.click(screen.getByRole('link'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('prevents default when preventDefault is true', async () => {
      const onClick = vi.fn((e: React.MouseEvent) => {
        expect(e.defaultPrevented).toBe(true)
      })

      render(<Link href="/test" text="Click me" preventDefault onClick={onClick}/>)

      await userEvent.click(screen.getByRole('link'))
      expect(onClick).toHaveBeenCalled()
    })

    it('prevents default when useHistory is true', async () => {
      const onClick = vi.fn((e: React.MouseEvent) => {
        expect(e.defaultPrevented).toBe(true)
      })

      render(<Link href="/test" text="Click me" useHistory onClick={onClick}/>)

      await userEvent.click(screen.getByRole('link'))
      expect(onClick).toHaveBeenCalled()
    })

    it('calls history.pushState when useHistory is true', async () => {
      const pushStateSpy = vi.spyOn(history, 'pushState')

      render(<Link href="/new-route" text="Click me" useHistory/>)

      await userEvent.click(screen.getByRole('link'))
      expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/new-route')

      pushStateSpy.mockRestore()
    })
  })

  // Referrer policy
  describe('referrer policy', () => {
    it('sets referrerPolicy to no-referrer', () => {
      render(<Link href="/test" text="Test"/>)
      expect(screen.getByRole('link')).toHaveAttribute('referrerPolicy', 'no-referrer')
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has correct role', () => {
      render(<Link href="/test" text="Test"/>)
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    it('supports keyboard navigation (focusable)', () => {
      render(<Link href="/test" text="Test"/>)

      const link = screen.getByRole('link')

      link.focus()
      expect(document.activeElement).toBe(link)
    })
  })

  // Combined scenarios
  describe('combined scenarios', () => {
    it('standalone + external shows correct attributes', () => {
      render(<Link href="https://example.com" text="Test" standalone external/>)

      const link = screen.getByRole('link')

      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveClass('block')
    })

    it('disabled + external does not have href', () => {
      render(<Link href="https://example.com" text="Test" disabled external/>)

      const anchor = screen.getByText('Test').closest('a')

      expect(anchor).not.toHaveAttribute('href')
      expect(anchor).toHaveAttribute('aria-disabled', 'true')
    })
  })
})
