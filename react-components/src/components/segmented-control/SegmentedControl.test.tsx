import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  SegmentedControl,
  SegmentedControlGroup,
  SegmentedControlOption,
} from './SegmentedControl'

describe('SegmentedControl', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders segmented control with options', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(1)
    })

    it('renders option labels', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="First Option" isFirst />
          <SegmentedControlOption value="option2" text="Second Option" isLast />
        </SegmentedControl>
      )
      expect(screen.getByText('First Option')).toBeInTheDocument()
      expect(screen.getByText('Second Option')).toBeInTheDocument()
    })

    it('forwards ref to segmented control', () => {
      const ref = { current: null }

      render(
        <SegmentedControl ref={ref} aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref to segmented control option', () => {
      const ref = { current: null }

      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption ref={ref} value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className to segmented control', () => {
      render(
        <SegmentedControl aria-label="Test control" className="custom-class">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toHaveClass('custom-class')
    })

    it('applies custom className to segmented control option', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" className="option-class" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tab')).toHaveClass('option-class')
    })
  })

  // Selection state
  describe('selection state', () => {
    it('has no selection by default', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('respects defaultValue prop', () => {
      render(
        <SegmentedControl aria-label="Test control" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('respects controlled value prop', () => {
      render(
        <SegmentedControl aria-label="Test control" value="option2">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('changes selection when option is clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

      await user.click(tabs[1])

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('does not change internal state in controlled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControl aria-label="Test control" value="option1" onChange={onChange}>
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      await user.click(tabs[1])

      // onChange should be called but aria-selected should remain unchanged (controlled)
      expect(onChange).toHaveBeenCalledWith('option2')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('sets data-checked attribute when selected', async () => {
      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('data-checked', 'true')
      expect(tabs[1]).not.toHaveAttribute('data-checked')
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets aria-disabled on disabled options', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" disabled isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-disabled', 'false')
      expect(tabs[1]).toHaveAttribute('aria-disabled', 'true')
    })

    it('sets tabIndex to -1 on disabled options', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" disabled isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('tabindex', '0')
      expect(tabs[1]).toHaveAttribute('tabindex', '-1')
    })

    it('does not call onChange when disabled option is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControl aria-label="Test control" onChange={onChange}>
          <SegmentedControlOption value="option1" text="Option 1" disabled isFirst isLast />
        </SegmentedControl>
      )

      await user.click(screen.getByRole('tab'))
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange with selected value when option is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControl aria-label="Test control" onChange={onChange}>
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })

    it('calls onChange when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControl aria-label="Test control" onChange={onChange}>
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )

      const tab = screen.getByRole('tab')

      tab.focus()
      await user.keyboard(' ')

      expect(onChange).toHaveBeenCalledWith('option1')
    })

    it('calls onChange when Enter key is pressed', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControl aria-label="Test control" onChange={onChange}>
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )

      const tab = screen.getByRole('tab')

      tab.focus()
      await user.keyboard('{Enter}')

      expect(onChange).toHaveBeenCalledWith('option1')
    })
  })

  // Keyboard navigation
  describe('keyboard navigation', () => {
    it('moves to next option with ArrowDown', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[1]).toHaveFocus()
    })

    it('moves to next option with ArrowRight', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowRight}')

      expect(tabs[1]).toHaveFocus()
    })

    it('moves to previous option with ArrowUp', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[1].focus()
      await user.keyboard('{ArrowUp}')

      expect(tabs[0]).toHaveFocus()
    })

    it('moves to previous option with ArrowLeft', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[1].focus()
      await user.keyboard('{ArrowLeft}')

      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from last to first option', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option3">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[2].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from first to last option', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowUp}')

      expect(tabs[2]).toHaveFocus()
    })

    it('skips disabled options during navigation', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" disabled />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[2]).toHaveFocus()
    })

    it('is focusable with Tab', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )

      await user.tab()
      expect(screen.getByRole('tab')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="tablist" on the group', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('has role="tab" on each option', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('sets aria-orientation to horizontal', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('uses text as aria-label for options when no explicit aria-label', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Option Label" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Option Label')
    })

    it('uses explicit aria-label over text for options', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption value="option1" text="Visible text" aria-label="Screen reader text" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Screen reader text')
    })

    it('sets aria-label on the group', () => {
      render(
        <SegmentedControl aria-label="Choose an option">
          <SegmentedControlOption value="option1" text="Option 1" isFirst isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Choose an option')
    })
  })

  // Data attributes
  describe('data attributes', () => {
    it('stores current value as data attribute on group', () => {
      render(
        <SegmentedControl aria-label="Test control" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('data-value', 'option2')
    })

    it('updates data-value when selection changes', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedControl aria-label="Test control" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" isLast />
        </SegmentedControl>
      )

      const group = screen.getByRole('tablist')

      expect(group).toHaveAttribute('data-value', 'option1')

      await user.click(screen.getAllByRole('tab')[1])
      expect(group).toHaveAttribute('data-value', 'option2')
    })
  })

  // Icon support
  describe('icon support', () => {
    it('renders icon when provided', () => {
      render(
        <SegmentedControl aria-label="Test control">
          <SegmentedControlOption
            value="option1"
            text="Option 1"
            icon={<span data-testid="test-icon">*</span>}
            isFirst
            isLast
          />
        </SegmentedControl>
      )
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    })
  })

  // SegmentedControlGroup compound component
  describe('SegmentedControlGroup compound component', () => {
    it('renders using SegmentedControlGroup.Option', () => {
      render(
        <SegmentedControlGroup aria-label="Test control">
          <SegmentedControlGroup.Option value="option1" text="Option 1" isFirst />
          <SegmentedControlGroup.Option value="option2" text="Option 2" isLast />
        </SegmentedControlGroup>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('works with controlled state via SegmentedControlGroup', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedControlGroup aria-label="Test control" defaultValue="option1" onChange={onChange}>
          <SegmentedControlGroup.Option value="option1" text="Option 1" isFirst />
          <SegmentedControlGroup.Option value="option2" text="Option 2" isLast />
        </SegmentedControlGroup>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })
  })

  // Error handling
  describe('error handling', () => {
    it('throws error when SegmentedControlOption is used outside SegmentedControl', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<SegmentedControlOption value="option1" text="Option 1" isFirst isLast />)
      }).toThrow('SegmentedControlOption must be used within a SegmentedControl component')

      consoleError.mockRestore()
    })
  })
})
