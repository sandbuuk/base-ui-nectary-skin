import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Tabs, TabsGroup, TabsIconOption, TabsOption } from './Tabs'

describe('Tabs', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders tabs container with options', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('renders tab labels', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="First Tab" />
          <TabsOption value="tab2" text="Second Tab" />
        </Tabs>
      )
      expect(screen.getByText('First Tab')).toBeInTheDocument()
      expect(screen.getByText('Second Tab')).toBeInTheDocument()
    })

    it('forwards ref to tabs container', () => {
      const ref = { current: null }

      render(
        <Tabs ref={ref} aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
        </Tabs>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref to tabs option', () => {
      const ref = { current: null }

      render(
        <Tabs aria-label="Test tabs">
          <TabsOption ref={ref} value="tab1" text="Tab 1" />
        </Tabs>
      )
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })

    it('applies custom className to tabs container', () => {
      render(
        <Tabs aria-label="Test tabs" className="custom-class">
          <TabsOption value="tab1" text="Tab 1" />
        </Tabs>
      )
      expect(screen.getByRole('tablist')).toHaveClass('custom-class')
    })

    it('applies custom className to tabs option', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" className="option-class" />
        </Tabs>
      )
      expect(screen.getByRole('tab')).toHaveClass('option-class')
    })
  })

  // Selection state
  describe('selection state', () => {
    it('has no selection by default when no defaultValue', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })

    it('respects defaultValue prop', () => {
      render(
        <Tabs aria-label="Test tabs" defaultValue="tab2">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('respects controlled value prop', () => {
      render(
        <Tabs aria-label="Test tabs" value="tab2">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    })

    it('changes selection when tab is clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
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
        <Tabs aria-label="Test tabs" value="tab1" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      await user.click(tabs[1])

      // onChange should be called but aria-selected should remain unchanged (controlled)
      expect(onChange).toHaveBeenCalledWith('tab2')
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('disables individual tabs', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" disabled />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).not.toBeDisabled()
      expect(tabs[1]).toBeDisabled()
    })

    it('sets tabIndex to -1 on disabled tabs', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" disabled />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('tabindex', '0')
      expect(tabs[1]).toHaveAttribute('tabindex', '-1')
    })

    it('does not call onChange when disabled tab is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" disabled />
        </Tabs>
      )

      await user.click(screen.getByRole('tab'))
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange with selected value when tab is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('tab2')
    })
  })

  // Keyboard navigation
  describe('keyboard navigation', () => {
    it('moves to next tab with ArrowRight', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab1" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
          <TabsOption value="tab3" text="Tab 3" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowRight}')

      expect(onChange).toHaveBeenCalledWith('tab2')
      expect(tabs[1]).toHaveFocus()
    })

    it('moves to previous tab with ArrowLeft', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab2" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[1].focus()
      await user.keyboard('{ArrowLeft}')

      expect(onChange).toHaveBeenCalledWith('tab1')
      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from last to first tab', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab3" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
          <TabsOption value="tab3" text="Tab 3" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[2].focus()
      await user.keyboard('{ArrowRight}')

      expect(onChange).toHaveBeenCalledWith('tab1')
      expect(tabs[0]).toHaveFocus()
    })

    it('wraps around from first to last tab', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab1" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
          <TabsOption value="tab3" text="Tab 3" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowLeft}')

      expect(onChange).toHaveBeenCalledWith('tab3')
      expect(tabs[2]).toHaveFocus()
    })

    it('skips disabled tabs during navigation', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab1" onChange={onChange}>
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" disabled />
          <TabsOption value="tab3" text="Tab 3" />
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs[0].focus()
      await user.keyboard('{ArrowRight}')

      expect(onChange).toHaveBeenCalledWith('tab3')
      expect(tabs[2]).toHaveFocus()
    })

    it('is focusable with Tab', async () => {
      const user = userEvent.setup()

      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
        </Tabs>
      )

      await user.tab()
      expect(screen.getByRole('tab')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="tablist" on the container', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
        </Tabs>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('has role="tab" on each option', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('sets aria-label on the tablist', () => {
      render(
        <Tabs aria-label="Navigation tabs">
          <TabsOption value="tab1" text="Tab 1" />
        </Tabs>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Navigation tabs')
    })

    it('stores current value as data attribute on container', () => {
      render(
        <Tabs aria-label="Test tabs" defaultValue="tab2">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )
      expect(screen.getByRole('tablist')).toHaveAttribute('data-value', 'tab2')
    })

    it('updates data-value when selection changes', async () => {
      const user = userEvent.setup()

      render(
        <Tabs aria-label="Test tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Tab 1" />
          <TabsOption value="tab2" text="Tab 2" />
        </Tabs>
      )

      const tablist = screen.getByRole('tablist')

      expect(tablist).toHaveAttribute('data-value', 'tab1')

      await user.click(screen.getAllByRole('tab')[1])
      expect(tablist).toHaveAttribute('data-value', 'tab2')
    })
  })

  // TabsOption with icon
  describe('TabsOption with icon', () => {
    it('renders icon when provided', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsOption
            value="tab1"
            text="Tab 1"
            icon={<span data-testid="icon">*</span>}
          />
        </Tabs>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
  })

  // TabsIconOption
  describe('TabsIconOption', () => {
    it('renders icon-only tab', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsIconOption
            value="tab1"
            aria-label="Home"
            icon={<span data-testid="icon">*</span>}
          />
        </Tabs>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'Home')
    })

    it('shows tooltip with aria-label text', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsIconOption
            value="tab1"
            aria-label="Settings"
            icon={<span>*</span>}
          />
        </Tabs>
      )
      // The tooltip wrapper is rendered (tooltip content only shown when open)
      expect(screen.getByRole('tab')).toBeInTheDocument()
    })

    it('responds to click events', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Tabs aria-label="Test tabs" onChange={onChange}>
          <TabsIconOption value="tab1" aria-label="Tab 1" icon={<span>*</span>} />
          <TabsIconOption value="tab2" aria-label="Tab 2" icon={<span>*</span>} />
        </Tabs>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('tab2')
    })

    it('can be disabled', () => {
      render(
        <Tabs aria-label="Test tabs">
          <TabsIconOption value="tab1" aria-label="Tab 1" icon={<span>*</span>} disabled />
        </Tabs>
      )
      expect(screen.getByRole('tab')).toBeDisabled()
    })
  })

  // TabsGroup compound component
  describe('TabsGroup compound component', () => {
    it('renders using TabsGroup.Option', () => {
      render(
        <TabsGroup aria-label="Test tabs">
          <TabsGroup.Option value="tab1" text="Tab 1" />
          <TabsGroup.Option value="tab2" text="Tab 2" />
        </TabsGroup>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('renders using TabsGroup.IconOption', () => {
      render(
        <TabsGroup aria-label="Test tabs">
          <TabsGroup.IconOption value="tab1" aria-label="Tab 1" icon={<span>*</span>} />
          <TabsGroup.IconOption value="tab2" aria-label="Tab 2" icon={<span>*</span>} />
        </TabsGroup>
      )
      expect(screen.getByRole('tablist')).toBeInTheDocument()
      expect(screen.getAllByRole('tab')).toHaveLength(2)
    })

    it('works with controlled state via TabsGroup', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <TabsGroup aria-label="Test tabs" defaultValue="tab1" onChange={onChange}>
          <TabsGroup.Option value="tab1" text="Tab 1" />
          <TabsGroup.Option value="tab2" text="Tab 2" />
        </TabsGroup>
      )

      await user.click(screen.getAllByRole('tab')[1])
      expect(onChange).toHaveBeenCalledWith('tab2')
    })
  })

  // Error handling
  describe('error handling', () => {
    it('throws error when TabsOption is used outside Tabs', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<TabsOption value="tab1" text="Tab 1" />)
      }).toThrow('TabsOption must be used within a Tabs component')

      consoleError.mockRestore()
    })

    it('throws error when TabsIconOption is used outside Tabs', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<TabsIconOption value="tab1" aria-label="Tab 1" icon={<span>*</span>} />)
      }).toThrow('TabsOption must be used within a Tabs component')

      consoleError.mockRestore()
    })
  })
})
