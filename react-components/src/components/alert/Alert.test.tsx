import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<Alert text="Test message"/>)
      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(<Alert>Child content</Alert>)
      expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('prefers text prop over children when both provided', () => {
      render(<Alert text="Text prop">Children content</Alert>)
      expect(screen.getByText('Text prop')).toBeInTheDocument()
      expect(screen.queryByText('Children content')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Alert ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  // Alert role
  describe('accessibility', () => {
    it('has role="alert"', () => {
      render(<Alert text="Test"/>)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Alert text="Test" aria-label="Important notification"/>)
      expect(screen.getByLabelText('Important notification')).toBeInTheDocument()
    })
  })

  // Type variants
  describe('type variants', () => {
    it('renders info type by default', () => {
      const { container } = render(<Alert text="Info message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-alert-color-info-default-background)]')
    })

    it('renders info type with correct background', () => {
      const { container } = render(<Alert type="info" text="Info message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-alert-color-info-default-background)]')
    })

    it('renders warn type with correct background', () => {
      const { container } = render(<Alert type="warn" text="Warning message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-alert-color-warning-default-background)]')
    })

    it('renders error type with correct background', () => {
      const { container } = render(<Alert type="error" text="Error message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-alert-color-error-default-background)]')
    })
  })

  // Icons
  describe('icons', () => {
    it('renders circle-info icon for info type', () => {
      render(<Alert type="info" text="Info"/>)
      expect(screen.getByLabelText('circle-info')).toBeInTheDocument()
    })

    it('renders triangle-exclamation icon for warn type', () => {
      render(<Alert type="warn" text="Warning"/>)
      expect(screen.getByLabelText('triangle-exclamation')).toBeInTheDocument()
    })

    it('renders octagon-exclamation icon for error type', () => {
      render(<Alert type="error" text="Error"/>)
      expect(screen.getByLabelText('octagon-exclamation')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      const { container } = render(<Alert className="custom-class" text="Test"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('passes through additional HTML attributes', () => {
      render(<Alert data-testid="alert" text="Test"/>)
      expect(screen.getByTestId('alert')).toBeInTheDocument()
    })
  })

  // Slots
  describe('slots', () => {
    it('renders action slot', () => {
      render(
        <Alert
          text="Test"
          action={<button data-testid="action-btn">Action</button>}
        />
      )
      expect(screen.getByTestId('action-btn')).toBeInTheDocument()
    })

    it('renders close slot', () => {
      render(
        <Alert
          text="Test"
          close={<button data-testid="close-btn">Close</button>}
        />
      )
      expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    })

    it('renders both action and close slots', () => {
      render(
        <Alert
          text="Test"
          action={<button data-testid="action-btn">Action</button>}
          close={<button data-testid="close-btn">Close</button>}
        />
      )
      expect(screen.getByTestId('action-btn')).toBeInTheDocument()
      expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    })
  })

  // Structure
  describe('structure', () => {
    it('renders with correct base classes', () => {
      const { container } = render(<Alert text="Test"/>)

      expect(container.firstChild).toHaveClass('flex', 'flex-row', 'gap-2', 'items-center')
    })

    it('has minimum height of 48px', () => {
      const { container } = render(<Alert text="Test"/>)

      expect(container.firstChild).toHaveClass('min-h-[48px]')
    })

    it('has correct padding', () => {
      const { container } = render(<Alert text="Test"/>)

      expect(container.firstChild).toHaveClass('py-2', 'px-4')
    })
  })

  // Default values
  describe('default values', () => {
    it('uses info type by default', () => {
      const { container } = render(<Alert text="Test"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('info')
    })
  })
})
