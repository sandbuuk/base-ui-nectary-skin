import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InlineAlert } from './InlineAlert'

describe('InlineAlert', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<InlineAlert text="Test message"/>)
      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(<InlineAlert>Child content</InlineAlert>)
      expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('prefers text prop over children when both provided', () => {
      render(<InlineAlert text="Text prop">Children content</InlineAlert>)
      expect(screen.getByText('Text prop')).toBeInTheDocument()
      expect(screen.queryByText('Children content')).not.toBeInTheDocument()
    })

    it('renders caption when provided', () => {
      render(<InlineAlert caption="Alert Title" text="Message"/>)
      expect(screen.getByText('Alert Title')).toBeInTheDocument()
      expect(screen.getByText('Message')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<InlineAlert ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="alert"', () => {
      render(<InlineAlert text="Test"/>)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('has aria-atomic="true"', () => {
      render(<InlineAlert text="Test"/>)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true')
    })

    it('has aria-live="polite"', () => {
      render(<InlineAlert text="Test"/>)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite')
    })

    it('supports aria-label', () => {
      render(<InlineAlert text="Test" aria-label="Important notification"/>)
      expect(screen.getByLabelText('Important notification')).toBeInTheDocument()
    })
  })

  // Type variants
  describe('type variants', () => {
    it('renders info type by default', () => {
      const { container } = render(<InlineAlert text="Info message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-inline-alert-color-info-default-background)]')
    })

    it('renders info type with correct background', () => {
      const { container } = render(<InlineAlert type="info" text="Info message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-inline-alert-color-info-default-background)]')
    })

    it('renders success type with correct background', () => {
      const { container } = render(<InlineAlert type="success" text="Success message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-inline-alert-color-success-default-background)]')
    })

    it('renders warn type with correct background', () => {
      const { container } = render(<InlineAlert type="warn" text="Warning message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-inline-alert-color-warning-default-background)]')
    })

    it('renders error type with correct background', () => {
      const { container } = render(<InlineAlert type="error" text="Error message"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('bg-[var(--sinch-comp-inline-alert-color-error-default-background)]')
    })
  })

  // Icons
  describe('icons', () => {
    it('renders circle-info icon for info type', () => {
      render(<InlineAlert type="info" text="Info"/>)
      expect(screen.getByLabelText('circle-info')).toBeInTheDocument()
    })

    it('renders circle-check icon for success type', () => {
      render(<InlineAlert type="success" text="Success"/>)
      expect(screen.getByLabelText('circle-check')).toBeInTheDocument()
    })

    it('renders triangle-exclamation icon for warn type', () => {
      render(<InlineAlert type="warn" text="Warning"/>)
      expect(screen.getByLabelText('triangle-exclamation')).toBeInTheDocument()
    })

    it('renders octagon-exclamation icon for error type', () => {
      render(<InlineAlert type="error" text="Error"/>)
      expect(screen.getByLabelText('octagon-exclamation')).toBeInTheDocument()
    })

    it('renders custom icon when provided', () => {
      render(<InlineAlert type="info" text="Test" icon="bell"/>)
      expect(screen.getByLabelText('bell')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      const { container } = render(<InlineAlert className="custom-class" text="Test"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('passes through additional HTML attributes', () => {
      render(<InlineAlert data-testid="inline-alert" text="Test"/>)
      expect(screen.getByTestId('inline-alert')).toBeInTheDocument()
    })
  })

  // Slots
  describe('slots', () => {
    it('renders action slot', () => {
      render(
        <InlineAlert
          text="Test"
          action={<button data-testid="action-btn">Action</button>}
        />
      )
      expect(screen.getByTestId('action-btn')).toBeInTheDocument()
    })

    it('renders close slot', () => {
      render(
        <InlineAlert
          text="Test"
          close={<button data-testid="close-btn">Close</button>}
        />
      )
      expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    })

    it('renders both action and close slots', () => {
      render(
        <InlineAlert
          text="Test"
          action={<button data-testid="action-btn">Action</button>}
          close={<button data-testid="close-btn">Close</button>}
        />
      )
      expect(screen.getByTestId('action-btn')).toBeInTheDocument()
      expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    })

    it('does not render action wrapper when no action provided', () => {
      const { container } = render(<InlineAlert text="Test"/>)
      const actionWrapper = container.querySelector('.mt-4')

      expect(actionWrapper).not.toBeInTheDocument()
    })

    it('does not render close wrapper when no close provided', () => {
      const { container } = render(<InlineAlert text="Test"/>)
      const closeWrapper = container.querySelector('.ml-4')

      expect(closeWrapper).not.toBeInTheDocument()
    })
  })

  // Structure
  describe('structure', () => {
    it('renders with correct base classes', () => {
      const { container } = render(<InlineAlert text="Test"/>)

      expect(container.firstChild).toHaveClass('flex', 'flex-row', 'items-start', 'p-4')
    })

    it('has correct border radius class', () => {
      const { container } = render(<InlineAlert text="Test"/>)

      expect(container.firstChild).toHaveClass('rounded-[var(--sinch-comp-inline-alert-shape-radius)]')
    })

    it('spans full width', () => {
      const { container } = render(<InlineAlert text="Test"/>)

      expect(container.firstChild).toHaveClass('w-full')
    })
  })

  // Caption styling
  describe('caption', () => {
    it('adds margin to text when caption is present', () => {
      const { container } = render(<InlineAlert caption="Title" text="Message"/>)
      const textElement = container.querySelector('.mt-1')

      expect(textElement).toBeInTheDocument()
    })

    it('does not add margin to text when caption is absent', () => {
      const { container } = render(<InlineAlert text="Message"/>)
      const textElement = container.querySelector('.mt-1')

      expect(textElement).not.toBeInTheDocument()
    })
  })

  // Default values
  describe('default values', () => {
    it('uses info type by default', () => {
      const { container } = render(<InlineAlert text="Test"/>)
      const alert = container.firstChild as HTMLElement

      expect(alert.className).toContain('info')
    })
  })
})
