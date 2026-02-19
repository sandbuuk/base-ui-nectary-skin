import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  SegmentedIconControl,
  SegmentedIconControlGroup,
  SegmentedIconControlOption,
} from './SegmentedIconControl'

// Simple test icon
const TestIcon = () => <span data-testid="test-icon">*</span>

describe('SegmentedIconControl', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders segmented icon control with options', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(1)
    })

    it('renders option with icon', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    })

    it('forwards ref to segmented icon control', () => {
      const ref = { current: null }

      render(
        <SegmentedIconControl ref={ref} aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref to segmented icon control option', () => {
      const ref = { current: null }

      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption ref={ref} value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className to segmented icon control', () => {
      render(
        <SegmentedIconControl aria-label="Test control" className="custom-class">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toHaveClass('custom-class')
    })

    it('applies custom className to segmented icon control option', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} className="option-class" isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tab')).toHaveClass('option-class')
    })
  })

  // Single selection mode
  describe('single selection mode', () => {
    it('has no selection by default', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('respects defaultValue prop', () => {
      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('respects controlled value prop', () => {
      render(
        <SegmentedIconControl aria-label="Test control" value="option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('changes selection when option is clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
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
        <SegmentedIconControl aria-label="Test control" value="option1" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      await user.click(tabs[1])

      // onChange should be called but aria-selected should remain unchanged (controlled)
      expect(onChange).toHaveBeenCalledWith('option2')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('sets data-checked attribute when selected', () => {
      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('data-checked', 'true')
      expect(tabs[1]).not.toHaveAttribute('data-checked')
    })
  })

  // Multiple selection mode
  describe('multiple selection mode', () => {
    it('supports multiple selection with comma-separated values', () => {
      render(
        <SegmentedIconControl aria-label="Test control" multiple defaultValue="option1,option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} />
          <SegmentedIconControlOption value="option3" aria-label="Option 3" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
    })

    it('toggles selection in multiple mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControl aria-label="Test control" multiple defaultValue="option1" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      // Click option2 to add it
      await user.click(tabs[1])
      expect(onChange).toHaveBeenLastCalledWith('option1,option2')

      // In uncontrolled mode, both should now be selected
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('removes selection when clicking already selected option in multiple mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControl aria-label="Test control" multiple defaultValue="option1,option2" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      // Click option1 to remove it
      await user.click(tabs[0])
      expect(onChange).toHaveBeenLastCalledWith('option2')
    })

    it('sets data-multiple attribute when in multiple mode', () => {
      render(
        <SegmentedIconControl aria-label="Test control" multiple>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('data-multiple', 'true')
    })

    it('does not set data-multiple attribute in single mode', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).not.toHaveAttribute('data-multiple')
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets aria-disabled on disabled options', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} disabled isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-disabled', 'false')
      expect(tabs[1]).toHaveAttribute('aria-disabled', 'true')
    })

    it('sets tabIndex to -1 on disabled options', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} disabled isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('tabindex', '0')
      expect(tabs[1]).toHaveAttribute('tabindex', '-1')
    })

    it('does not call onChange when disabled option is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControl aria-label="Test control" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} disabled isFirst isLast />
        </SegmentedIconControl>
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
        <SegmentedIconControl aria-label="Test control" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })

    it('calls onChange when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControl aria-label="Test control" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
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
        <SegmentedIconControl aria-label="Test control" onChange={onChange}>
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
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
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} />
          <SegmentedIconControlOption value="option3" aria-label="Option 3" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[1]).toHaveFocus()
    })

    it('moves to next option with ArrowRight', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowRight}')

      expect(tabs[1]).toHaveFocus()
    })

    it('moves to previous option with ArrowUp', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[1].focus()
      await user.keyboard('{ArrowUp}')

      expect(tabs[0]).toHaveFocus()
    })

    it('moves to previous option with ArrowLeft', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[1].focus()
      await user.keyboard('{ArrowLeft}')

      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from last to first option', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option3">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} />
          <SegmentedIconControlOption value="option3" aria-label="Option 3" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[2].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from first to last option', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} />
          <SegmentedIconControlOption value="option3" aria-label="Option 3" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowUp}')

      expect(tabs[2]).toHaveFocus()
    })

    it('skips disabled options during navigation', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} disabled />
          <SegmentedIconControlOption value="option3" aria-label="Option 3" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(tabs[2]).toHaveFocus()
    })

    it('is focusable with Tab', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )

      await user.tab()
      expect(screen.getByRole('tab')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="tablist" on the group', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('has role="tab" on each option', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('sets aria-orientation to horizontal', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('sets aria-label on options', () => {
      render(
        <SegmentedIconControl aria-label="Test control">
          <SegmentedIconControlOption value="option1" aria-label="Option Label" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Option Label')
    })

    it('sets aria-label on the group', () => {
      render(
        <SegmentedIconControl aria-label="Choose an option">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Choose an option')
    })
  })

  // Data attributes
  describe('data attributes', () => {
    it('stores current value as data attribute on group', () => {
      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option2">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('data-value', 'option2')
    })

    it('updates data-value when selection changes', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const group = screen.getByRole('tablist')

      expect(group).toHaveAttribute('data-value', 'option1')

      await user.click(screen.getAllByRole('tab')[1])
      expect(group).toHaveAttribute('data-value', 'option2')
    })

    it('stores comma-separated values in multiple mode', async () => {
      const user = userEvent.setup()

      render(
        <SegmentedIconControl aria-label="Test control" multiple defaultValue="option1">
          <SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlOption value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControl>
      )

      const group = screen.getByRole('tablist')

      expect(group).toHaveAttribute('data-value', 'option1')

      await user.click(screen.getAllByRole('tab')[1])
      expect(group).toHaveAttribute('data-value', 'option1,option2')
    })
  })

  // SegmentedIconControlGroup compound component
  describe('SegmentedIconControlGroup compound component', () => {
    it('renders using SegmentedIconControlGroup.Option', () => {
      render(
        <SegmentedIconControlGroup aria-label="Test control">
          <SegmentedIconControlGroup.Option value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlGroup.Option value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControlGroup>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('works with controlled state via SegmentedIconControlGroup', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControlGroup aria-label="Test control" defaultValue="option1" onChange={onChange}>
          <SegmentedIconControlGroup.Option value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlGroup.Option value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControlGroup>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })

    it('supports multiple mode with compound component', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentedIconControlGroup aria-label="Test control" multiple defaultValue="option1" onChange={onChange}>
          <SegmentedIconControlGroup.Option value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst />
          <SegmentedIconControlGroup.Option value="option2" aria-label="Option 2" icon={<TestIcon />} isLast />
        </SegmentedIconControlGroup>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('option1,option2')
    })
  })

  // Error handling
  describe('error handling', () => {
    it('throws error when SegmentedIconControlOption is used outside SegmentedIconControl', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<SegmentedIconControlOption value="option1" aria-label="Option 1" icon={<TestIcon />} isFirst isLast />)
      }).toThrow('SegmentedIconControlOption must be used within a SegmentedIconControl component')

      consoleError.mockRestore()
    })
  })
})
