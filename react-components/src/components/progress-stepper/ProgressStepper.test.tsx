import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ProgressStepper, ProgressStepperItem } from './ProgressStepper'

describe('ProgressStepper', () => {
  // ============================================================================
  // Basic Rendering
  // ============================================================================

  describe('rendering', () => {
    it('renders with children', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
    })

    it('forwards ref', () => {
      const ref = { current: null }

      render(
        <ProgressStepper ref={ref} progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(
        <ProgressStepper className="custom-class" progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tablist')).toHaveClass('custom-class')
    })

    it('sets aria-label on tablist', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Progress navigation">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Progress navigation')
    })
  })

  // ============================================================================
  // ProgressStepperItem
  // ============================================================================

  describe('ProgressStepperItem', () => {
    it('renders with text', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Account Setup" />
        </ProgressStepper>
      )

      expect(screen.getByText('Account Setup')).toBeInTheDocument()
    })

    it('has role="tab"', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tab')).toBeInTheDocument()
    })

    it('forwards ref to item', () => {
      const ref = { current: null }

      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem ref={ref} value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className to item', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" className="item-custom" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tab')).toHaveClass('item-custom')
    })

    it('sets data-value attribute', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="account" text="Account" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tab')).toHaveAttribute('data-value', 'account')
    })
  })

  // ============================================================================
  // Status States
  // ============================================================================

  describe('status states', () => {
    it('marks items before progressValue as complete', () => {
      render(
        <ProgressStepper progressValue="step-3" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('data-status', 'complete')
      expect(tabs[1]).toHaveAttribute('data-status', 'complete')
    })

    it('marks item at progressValue as incomplete', () => {
      render(
        <ProgressStepper progressValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[1]).toHaveAttribute('data-status', 'incomplete')
    })

    it('marks items after progressValue as inactive', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[1]).toHaveAttribute('data-status', 'inactive')
      expect(tabs[2]).toHaveAttribute('data-status', 'inactive')
    })

    it('sets tabIndex=-1 for inactive items', () => {
      render(
        <ProgressStepper progressValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('tabIndex', '0')
      expect(tabs[1]).toHaveAttribute('tabIndex', '-1')
    })
  })

  // ============================================================================
  // Selection (Checked State)
  // ============================================================================

  describe('selection', () => {
    it('marks selected item with aria-selected', () => {
      render(
        <ProgressStepper progressValue="step-2" value="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('sets data-checked on selected item', () => {
      render(
        <ProgressStepper progressValue="step-2" value="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).not.toHaveAttribute('data-checked')
      expect(tabs[1]).toHaveAttribute('data-checked')
    })

    it('calls onChange when active item is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <ProgressStepper progressValue="step-2" value="step-2" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      await user.click(screen.getByText('Step 1'))
      expect(onChange).toHaveBeenCalledWith('step-1')
    })

    it('does not call onChange when inactive item is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <ProgressStepper progressValue="step-1" value="step-1" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      await user.click(screen.getByText('Step 2'))
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // ============================================================================
  // Controlled vs Uncontrolled
  // ============================================================================

  describe('controlled vs uncontrolled', () => {
    it('works as uncontrolled with defaultValue', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <ProgressStepper progressValue="step-2" defaultValue="step-1" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

      await user.click(screen.getByText('Step 2'))

      expect(onChange).toHaveBeenCalledWith('step-2')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('works as controlled with value prop', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      const { rerender } = render(
        <ProgressStepper progressValue="step-2" value="step-1" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      await user.click(screen.getByText('Step 2'))

      expect(onChange).toHaveBeenCalledWith('step-2')

      // Value should not change until parent updates it
      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

      // Simulate parent updating value
      rerender(
        <ProgressStepper progressValue="step-2" value="step-2" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })
  })

  // ============================================================================
  // Invalid State
  // ============================================================================

  describe('invalid state', () => {
    it('sets aria-invalid on invalid item', () => {
      render(
        <ProgressStepper progressValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" invalid />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      expect(tabs[0]).toHaveAttribute('aria-invalid', 'true')
      expect(tabs[1]).not.toHaveAttribute('aria-invalid')
    })

    it('renders error icon for invalid items', () => {
      render(
        <ProgressStepper progressValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" invalid />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      // The error icon should be visible (opacity-100) for the invalid item
      // Both items have icons, but only the invalid one is visible
      const tabs = screen.getAllByRole('tab')
      const firstTabIcon = tabs[0].querySelector('[aria-label="triangle-exclamation"]')
      const secondTabIcon = tabs[1].querySelector('[aria-label="triangle-exclamation"]')

      expect(firstTabIcon).toHaveClass('opacity-100')
      expect(secondTabIcon).toHaveClass('opacity-0')
    })
  })

  // ============================================================================
  // Keyboard Navigation
  // ============================================================================

  describe('keyboard navigation', () => {
    it('navigates to next item with ArrowRight', async () => {
      const user = userEvent.setup()

      render(
        <ProgressStepper progressValue="step-3" defaultValue="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[0].focus()

      await user.keyboard('{ArrowRight}')

      expect(tabs[1]).toHaveFocus()
    })

    it('navigates to previous item with ArrowLeft', async () => {
      const user = userEvent.setup()

      render(
        <ProgressStepper progressValue="step-3" defaultValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[1].focus()

      await user.keyboard('{ArrowLeft}')

      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around when navigating past last active item', async () => {
      const user = userEvent.setup()

      render(
        <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[1].focus()

      // Arrow right should wrap to first active item
      await user.keyboard('{ArrowRight}')

      expect(tabs[0]).toHaveFocus()
    })

    it('selects item with Enter key', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <ProgressStepper progressValue="step-2" defaultValue="step-1" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[1].focus()

      await user.keyboard('{Enter}')

      expect(onChange).toHaveBeenCalledWith('step-2')
    })

    it('selects item with Space key', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <ProgressStepper progressValue="step-2" defaultValue="step-1" onChange={onChange} aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[1].focus()

      await user.keyboard(' ')

      expect(onChange).toHaveBeenCalledWith('step-2')
    })

    it('skips inactive items during navigation', async () => {
      const user = userEvent.setup()

      render(
        <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
          <ProgressStepperItem value="step-2" text="Step 2" />
          <ProgressStepperItem value="step-3" text="Step 3" />
        </ProgressStepper>
      )

      const tabs = screen.getAllByRole('tab')
      tabs[1].focus() // Focus on step-2 (current)

      // Arrow right should wrap back to step-1, skipping inactive step-3
      // Since current value is step-2, which is last active item (index 1),
      // next wraps to step-1 (index 0)
      await user.keyboard('{ArrowRight}')

      expect(tabs[0]).toHaveFocus()
    })
  })

  // ============================================================================
  // Data Attributes
  // ============================================================================

  describe('data attributes', () => {
    it('sets data-value on stepper', () => {
      render(
        <ProgressStepper progressValue="step-2" value="step-1" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tablist')).toHaveAttribute('data-value', 'step-1')
    })

    it('sets data-progress-value on stepper', () => {
      render(
        <ProgressStepper progressValue="step-2" aria-label="Test stepper">
          <ProgressStepperItem value="step-1" text="Step 1" />
        </ProgressStepper>
      )

      expect(screen.getByRole('tablist')).toHaveAttribute('data-progress-value', 'step-2')
    })
  })

  // ============================================================================
  // Error Handling
  // ============================================================================

  describe('error handling', () => {
    it('throws error when ProgressStepperItem is used outside ProgressStepper', () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<ProgressStepperItem value="step-1" text="Step 1" />)
      }).toThrow('ProgressStepperItem must be used within a ProgressStepper component')

      consoleSpy.mockRestore()
    })
  })
})
