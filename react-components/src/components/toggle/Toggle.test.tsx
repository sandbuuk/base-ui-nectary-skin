import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with role checkbox', () => {
      render(<Toggle aria-label="Test toggle"/>)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('renders with text label', () => {
      render(<Toggle text="Enable feature"/>)
      expect(screen.getByText('Enable feature')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Toggle ref={ref} aria-label="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<Toggle className="custom-class" aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
    })
  })

  // Controlled and uncontrolled behavior
  describe('controlled/uncontrolled', () => {
    it('works in uncontrolled mode with defaultChecked', () => {
      render(<Toggle defaultChecked aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('works in controlled mode', () => {
      const { rerender } = render(<Toggle checked={false} aria-label="Test"/>)

      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')

      rerender(<Toggle checked aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('toggles in uncontrolled mode', async () => {
      const user = userEvent.setup()

      render(<Toggle aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      expect(toggle).toHaveAttribute('aria-checked', 'false')

      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-checked', 'true')

      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-checked', 'false')
    })

    it('does not toggle internally in controlled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle checked={false} onChange={onChange} aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      await user.click(toggle)

      // Should call onChange but not change internal state
      expect(onChange).toHaveBeenCalledWith(true)
      expect(toggle).toHaveAttribute('aria-checked', 'false')
    })
  })

  // Variants
  describe('variants', () => {
    it('applies small variant', () => {
      render(<Toggle small aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      expect(toggle).toHaveClass('[--sinch-local-size:16px]')
    })

    it('applies default size', () => {
      render(<Toggle aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      expect(toggle).toHaveClass('[--sinch-local-size:20px]')
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange when clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle onChange={onChange} aria-label="Test"/>)

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('calls onChange with correct value on subsequent clicks', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle onChange={onChange} aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      await user.click(toggle)
      expect(onChange).toHaveBeenLastCalledWith(true)

      await user.click(toggle)
      expect(onChange).toHaveBeenLastCalledWith(false)
    })

    it('calls onFocus when focused', async () => {
      const user = userEvent.setup()
      const onFocus = vi.fn()

      render(<Toggle onFocus={onFocus} aria-label="Test"/>)

      await user.tab()
      expect(onFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const user = userEvent.setup()
      const onBlur = vi.fn()

      render(<Toggle onBlur={onBlur} aria-label="Test"/>)

      await user.tab() // Focus
      await user.tab() // Blur
      expect(onBlur).toHaveBeenCalledTimes(1)
    })
  })

  // Keyboard interaction
  describe('keyboard interaction', () => {
    it('toggles on Space key', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle onChange={onChange} aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      toggle.focus()
      await user.keyboard(' ')

      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('toggles on Enter key', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle onChange={onChange} aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      toggle.focus()
      await user.keyboard('{Enter}')

      expect(onChange).toHaveBeenCalledWith(true)
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets aria-disabled when disabled', () => {
      render(<Toggle disabled aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-disabled', 'true')
    })

    it('has tabIndex -1 when disabled', () => {
      render(<Toggle disabled aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '-1')
    })

    it('has tabIndex 0 when not disabled', () => {
      render(<Toggle aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '0')
    })

    it('does not call onChange when disabled and clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Toggle disabled onChange={onChange} aria-label="Test"/>)

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).not.toHaveBeenCalled()
    })

    it('does not toggle when disabled and clicked', async () => {
      const user = userEvent.setup()

      render(<Toggle disabled aria-label="Test"/>)

      const toggle = screen.getByRole('checkbox')

      expect(toggle).toHaveAttribute('aria-checked', 'false')

      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-checked', 'false')
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has correct role', () => {
      render(<Toggle aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Toggle aria-label="Enable dark mode"/>)
      expect(screen.getByLabelText('Enable dark mode')).toBeInTheDocument()
    })

    it('has aria-checked false when unchecked', () => {
      render(<Toggle aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
    })

    it('has aria-checked true when checked', () => {
      render(<Toggle checked aria-label="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('is focusable', async () => {
      const user = userEvent.setup()

      render(<Toggle aria-label="Test"/>)

      await user.tab()
      expect(screen.getByRole('checkbox')).toHaveFocus()
    })
  })

  // Labeled toggle (on/off text)
  describe('labeled toggle', () => {
    it('renders on/off labels when labeled prop is true', () => {
      render(<Toggle labeled aria-label="Test"/>)
      expect(screen.getByText('on')).toBeInTheDocument()
      expect(screen.getByText('off')).toBeInTheDocument()
    })

    it('does not render on/off labels when small', () => {
      render(<Toggle labeled small aria-label="Test"/>)
      expect(screen.queryByText('on')).not.toBeInTheDocument()
      expect(screen.queryByText('off')).not.toBeInTheDocument()
    })

    it('does not render on/off labels by default', () => {
      render(<Toggle aria-label="Test"/>)
      expect(screen.queryByText('on')).not.toBeInTheDocument()
      expect(screen.queryByText('off')).not.toBeInTheDocument()
    })
  })
})
