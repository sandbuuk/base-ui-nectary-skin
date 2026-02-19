import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<Chip text="Chip Text"/>)
      expect(screen.getByText('Chip Text')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Chip ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('renders close icon by default', () => {
      const { container } = render(<Chip text="Test"/>)
      const svg = container.querySelector('svg')

      expect(svg).toBeInTheDocument()
    })

    it('sets aria-label from text prop', () => {
      render(<Chip text="My Chip"/>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'My Chip')
    })
  })

  // Custom className
  describe('className', () => {
    it('applies custom className', () => {
      render(<Chip className="custom-class" text="Test"/>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      render(<Chip className="my-class" text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('my-class')
      expect(chip).toHaveClass('inline-flex')
    })
  })

  // Sizes
  describe('sizes', () => {
    it('renders medium size by default', () => {
      render(<Chip text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('h-[var(--sinch-comp-chip-size-container-m)]')
    })

    it('renders small size with size="s"', () => {
      render(<Chip size="s" text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('h-[var(--sinch-comp-chip-size-container-s)]')
    })

    it('renders small size with small prop', () => {
      render(<Chip small text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('h-[var(--sinch-comp-chip-size-container-s)]')
    })

    it('small prop takes precedence over size prop', () => {
      render(<Chip small size="m" text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('h-[var(--sinch-comp-chip-size-container-s)]')
    })
  })

  // Colors
  describe('colors', () => {
    it('uses neutral color styling without color prop', () => {
      render(<Chip text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveClass('bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]')
    })

    it('applies custom color via style', () => {
      render(<Chip color="success" text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-chip-color-success-default-background-initial)',
      })
    })

    it('applies text color for custom color', () => {
      render(<Chip color="danger" text="Test"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveStyle({
        color: 'var(--sinch-comp-chip-color-danger-default-foreground-initial)',
      })
    })

    it('does not override styles for neutral color', () => {
      render(<Chip color="neutral" text="Test"/>)

      const chip = screen.getByRole('button')

      // Neutral color uses CSS class, not inline styles
      expect(chip.style.backgroundColor).toBe('')
    })
  })

  // Icon
  describe('icon', () => {
    it('renders icon when provided', () => {
      render(
        <Chip
          text="Test"
          icon={<span data-testid="icon">*</span>}
        />
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders icon with negative margin', () => {
      const { container } = render(
        <Chip
          text="Test"
          icon={<span data-testid="icon">*</span>}
        />
      )
      const iconWrapper = container.querySelector('.-ml-1')

      expect(iconWrapper).toBeInTheDocument()
    })
  })

  // Right icon
  describe('rightIcon', () => {
    it('renders custom right icon when provided', () => {
      render(
        <Chip
          text="Test"
          rightIcon={<span data-testid="custom-icon">X</span>}
        />
      )
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('replaces default close icon with custom right icon', () => {
      const { container } = render(
        <Chip
          text="Test"
          rightIcon={<span data-testid="custom-icon">X</span>}
        />
      )

      // Should have custom icon, not the default SVG close icon
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()

      // SVG should not exist in the right icon slot
      const svg = container.querySelector('svg')

      expect(svg).toBeNull()
    })
  })

  // Events
  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Chip text="Click me" onClick={onClick}/>)
      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('calls onClick when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Chip text="Press Space" onClick={onClick}/>)

      const chip = screen.getByRole('button')

      chip.focus()
      await user.keyboard(' ')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('calls onFocus when focused', async () => {
      const user = userEvent.setup()
      const onFocus = vi.fn()

      render(<Chip text="Focus me" onFocus={onFocus}/>)
      await user.tab()
      expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const user = userEvent.setup()
      const onBlur = vi.fn()

      render(<Chip text="Blur me" onBlur={onBlur}/>)

      const chip = screen.getByRole('button')

      chip.focus()
      await user.tab()
      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it('calls custom onKeyDown handler', async () => {
      const user = userEvent.setup()
      const onKeyDown = vi.fn()

      render(<Chip text="Key test" onKeyDown={onKeyDown}/>)

      const chip = screen.getByRole('button')

      chip.focus()
      await user.keyboard('a')
      expect(onKeyDown).toHaveBeenCalled()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="button"', () => {
      render(<Chip text="Button Chip"/>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('has tabIndex=0 for keyboard navigation', () => {
      render(<Chip text="Focusable"/>)

      const chip = screen.getByRole('button')

      expect(chip).toHaveAttribute('tabindex', '0')
    })

    it('sets aria-label for delete action', () => {
      const { container } = render(<Chip text="My Chip"/>)
      const deleteButton = container.querySelector('[aria-label="Delete My Chip"]')

      expect(deleteButton).toBeInTheDocument()
    })
  })

  // Custom styles
  describe('custom styles', () => {
    it('merges custom style prop with color styles', () => {
      render(
        <Chip
          color="blue"
          text="Test"
          style={{ padding: '10px' }}
        />
      )

      const chip = screen.getByRole('button')

      expect(chip).toHaveStyle({ padding: '10px' })
      expect(chip).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-chip-color-blue-default-background-initial)',
      })
    })
  })

  // Props spreading
  describe('props spreading', () => {
    it('passes through additional props', () => {
      render(<Chip text="Test" data-testid="custom-chip"/>)
      expect(screen.getByTestId('custom-chip')).toBeInTheDocument()
    })
  })
})
