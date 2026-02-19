import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text label', () => {
      render(<Checkbox text="Test label"/>)
      expect(screen.getByText('Test label')).toBeInTheDocument()
    })

    it('renders without text label when text is not provided', () => {
      render(<Checkbox aria-label="Hidden label"/>)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
      expect(screen.queryByText('Hidden label')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Checkbox ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      render(<Checkbox className="custom-class" text="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
    })
  })

  // Checked state
  describe('checked state', () => {
    it('is unchecked by default', () => {
      render(<Checkbox text="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-checked',
        'false'
      )
    })

    it('respects defaultChecked prop', () => {
      render(<Checkbox text="Test" defaultChecked/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-checked',
        'true'
      )
    })

    it('respects controlled checked prop', () => {
      render(<Checkbox text="Test" checked/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-checked',
        'true'
      )
    })

    it('toggles checked state when clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(<Checkbox text="Test"/>)

      const checkbox = screen.getByRole('checkbox')

      expect(checkbox).toHaveAttribute('aria-checked', 'false')

      await user.click(checkbox)
      expect(checkbox).toHaveAttribute('aria-checked', 'true')

      await user.click(checkbox)
      expect(checkbox).toHaveAttribute('aria-checked', 'false')
    })

    it('does not toggle internal state in controlled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Checkbox text="Test" checked={false} onChange={onChange}/>)

      const checkbox = screen.getByRole('checkbox')

      await user.click(checkbox)

      // onChange should be called but aria-checked should remain false (controlled)
      expect(onChange).toHaveBeenCalledWith(true)
      expect(checkbox).toHaveAttribute('aria-checked', 'false')
    })
  })

  // Indeterminate state
  describe('indeterminate state', () => {
    it('shows mixed aria-checked when indeterminate and checked', () => {
      render(<Checkbox text="Test" checked indeterminate/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-checked',
        'mixed'
      )
    })

    it('shows false aria-checked when indeterminate but not checked', () => {
      render(<Checkbox text="Test" indeterminate/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-checked',
        'false'
      )
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets aria-disabled when disabled', () => {
      render(<Checkbox text="Test" disabled/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-disabled',
        'true'
      )
    })

    it('sets tabIndex to -1 when disabled', () => {
      render(<Checkbox text="Test" disabled/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '-1')
    })

    it('does not call onChange when disabled', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Checkbox text="Test" disabled onChange={onChange}/>)

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // Invalid state
  describe('invalid state', () => {
    it('sets aria-invalid when invalid', () => {
      render(<Checkbox text="Test" invalid/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-invalid',
        'true'
      )
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange with new checked state when clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Checkbox text="Test" onChange={onChange}/>)

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('calls onChange when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<Checkbox text="Test" onChange={onChange}/>)

      const checkbox = screen.getByRole('checkbox')

      checkbox.focus()
      await user.keyboard(' ')

      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('calls onFocus when focused', async () => {
      const user = userEvent.setup()
      const onFocus = vi.fn()

      render(<Checkbox text="Test" onFocus={onFocus}/>)

      await user.tab()
      expect(onFocus).toHaveBeenCalled()
    })

    it('calls onBlur when blurred', async () => {
      const user = userEvent.setup()
      const onBlur = vi.fn()

      render(<Checkbox text="Test" onBlur={onBlur}/>)

      await user.tab() // Focus
      await user.tab() // Blur (move to next element)
      expect(onBlur).toHaveBeenCalled()
    })
  })

  // Keyboard navigation
  describe('keyboard navigation', () => {
    it('is focusable with Tab', async () => {
      const user = userEvent.setup()

      render(<Checkbox text="Test"/>)

      await user.tab()
      expect(screen.getByRole('checkbox')).toHaveFocus()
    })

    it('is not focusable when disabled', async () => {
      const user = userEvent.setup()

      render(
        <>
          <button>Before</button>
          <Checkbox text="Test" disabled/>
          <button>After</button>
        </>
      )

      await user.tab() // Focus "Before" button
      await user.tab() // Should skip checkbox and focus "After" button

      expect(screen.getByRole('checkbox')).not.toHaveFocus()
      expect(screen.getByText('After')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="checkbox"', () => {
      render(<Checkbox text="Test"/>)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('uses text as aria-label when no explicit aria-label is provided', () => {
      render(<Checkbox text="Test label"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        'Test label'
      )
    })

    it('uses explicit aria-label over text', () => {
      render(<Checkbox text="Visible text" aria-label="Screen reader text"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-label',
        'Screen reader text'
      )
    })

    it('is focusable by default', () => {
      render(<Checkbox text="Test"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '0')
    })
  })

  // Form integration
  describe('form integration', () => {
    it('stores name as data attribute', () => {
      render(<Checkbox text="Test" name="agreement"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'data-name',
        'agreement'
      )
    })

    it('stores value as data attribute when checked', () => {
      render(<Checkbox text="Test" value="yes" checked/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-value', 'yes')
    })

    it('stores "on" as data attribute value when checked with no value', () => {
      render(<Checkbox text="Test" checked/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-value', 'on')
    })

    it('stores empty string as data attribute value when unchecked', () => {
      render(<Checkbox text="Test" value="yes"/>)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-value', '')
    })
  })
})
