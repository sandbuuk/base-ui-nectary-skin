import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Accordion, AccordionGroup, AccordionItem } from './Accordion'

describe('Accordion', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders accordion with items', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    it('renders item labels', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="First Item">Content</AccordionItem>
          <AccordionItem value="item2" label="Second Item">Content</AccordionItem>
        </Accordion>
      )
      expect(screen.getByText('First Item')).toBeInTheDocument()
      expect(screen.getByText('Second Item')).toBeInTheDocument()
    })

    it('forwards ref to accordion container', () => {
      const ref = { current: null }

      render(
        <Accordion ref={ref}>
          <AccordionItem value="item1" label="Item">Content</AccordionItem>
        </Accordion>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref to accordion item', () => {
      const ref = { current: null }

      render(
        <Accordion>
          <AccordionItem ref={ref} value="item1" label="Item">Content</AccordionItem>
        </Accordion>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className to accordion', () => {
      render(
        <Accordion className="custom-class">
          <AccordionItem value="item1" label="Item">Content</AccordionItem>
        </Accordion>
      )
      expect(document.querySelector('.custom-class')).toBeInTheDocument()
    })

    it('applies custom className to accordion item', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" className="item-class">
            Content
          </AccordionItem>
        </Accordion>
      )
      expect(document.querySelector('.item-class')).toBeInTheDocument()
    })
  })

  // Expand/collapse behavior
  describe('expand/collapse', () => {
    it('has no expanded items by default', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    })

    it('respects defaultValue prop', () => {
      render(
        <Accordion defaultValue="item2">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    })

    it('respects controlled value prop', () => {
      render(
        <Accordion value="item1">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    })

    it('expands item when clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')

      await user.click(buttons[0])

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    })

    it('collapses expanded item when clicked again (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')

      expect(button).toHaveAttribute('aria-expanded', 'true')

      await user.click(button)

      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('single mode: clicking another item closes the current one', async () => {
      const user = userEvent.setup()

      render(
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')

      await user.click(buttons[1])

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    })

    it('does not change internal state in controlled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Accordion value="item1" onChange={onChange}>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      await user.click(buttons[1])

      // onChange should be called but aria-expanded should remain unchanged (controlled)
      expect(onChange).toHaveBeenCalledWith('item2')
      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    })
  })

  // Multiple mode
  describe('multiple mode', () => {
    it('allows multiple items to be expanded', async () => {
      const user = userEvent.setup()

      render(
        <Accordion multiple>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
          <AccordionItem value="item3" label="Item 3">Content 3</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      await user.click(buttons[0])
      await user.click(buttons[1])

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')
    })

    it('respects defaultValue with multiple items', () => {
      render(
        <Accordion defaultValue="item1,item3" multiple>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
          <AccordionItem value="item3" label="Item 3">Content 3</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[2]).toHaveAttribute('aria-expanded', 'true')
    })

    it('toggles individual items independently', async () => {
      const user = userEvent.setup()

      render(
        <Accordion defaultValue="item1,item2" multiple>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')

      await user.click(buttons[0])

      expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
      expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets disabled attribute on button', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2" disabled>Content 2</AccordionItem>
        </Accordion>
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons[0]).not.toBeDisabled()
      expect(buttons[1]).toBeDisabled()
    })

    it('does not expand disabled item when clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Accordion onChange={onChange}>
          <AccordionItem value="item1" label="Item 1" disabled>Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')

      await user.click(button)

      expect(onChange).not.toHaveBeenCalled()
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  // Optional text
  describe('optional text', () => {
    it('renders optional text when provided', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1" optionalText="Optional">
            Content
          </AccordionItem>
        </Accordion>
      )
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })

    it('does not render optional text container when not provided', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content</AccordionItem>
        </Accordion>
      )
      expect(screen.queryByText('Optional')).not.toBeInTheDocument()
    })
  })

  // Status indicators
  describe('status indicators', () => {
    it('renders status indicator for success', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" status="success">
            Content
          </AccordionItem>
        </Accordion>
      )

      // Status indicator should have success background color class
      const statusIndicator = document.querySelector('.bg-\\[var\\(--sinch-comp-accordion-color-default-status-success\\)\\]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders status indicator for warn', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" status="warn">
            Content
          </AccordionItem>
        </Accordion>
      )

      const statusIndicator = document.querySelector('.bg-\\[var\\(--sinch-comp-accordion-color-default-status-warning\\)\\]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders status indicator for error', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" status="error">
            Content
          </AccordionItem>
        </Accordion>
      )

      const statusIndicator = document.querySelector('.bg-\\[var\\(--sinch-comp-accordion-color-default-status-error\\)\\]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders status indicator for info', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" status="info">
            Content
          </AccordionItem>
        </Accordion>
      )

      const statusIndicator = document.querySelector('.bg-\\[var\\(--sinch-comp-accordion-color-default-status-info\\)\\]')

      expect(statusIndicator).toBeInTheDocument()
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange with new value when item is expanded', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Accordion onChange={onChange}>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      await user.click(screen.getAllByRole('button')[1])
      expect(onChange).toHaveBeenCalledWith('item2')
    })

    it('calls onChange with empty string when collapsing single item', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Accordion defaultValue="item1" onChange={onChange}>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      await user.click(screen.getByRole('button'))
      expect(onChange).toHaveBeenCalledWith('')
    })

    it('calls onChange with CSV value in multiple mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Accordion defaultValue="item1" multiple onChange={onChange}>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
          <AccordionItem value="item2" label="Item 2">Content 2</AccordionItem>
        </Accordion>
      )

      await user.click(screen.getAllByRole('button')[1])
      expect(onChange).toHaveBeenCalledWith('item1,item2')
    })
  })

  // Keyboard interaction
  describe('keyboard interaction', () => {
    it('expands item when Enter is pressed', async () => {
      const user = userEvent.setup()

      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')

      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('expands item when Space is pressed', async () => {
      const user = userEvent.setup()

      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard(' ')

      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('does not expand disabled item with keyboard', async () => {
      const user = userEvent.setup()

      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1" disabled>Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')

      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has button role for header', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('has aria-expanded attribute', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded')
    })

    it('has aria-controls pointing to content region', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      const button = screen.getByRole('button')
      const controlsId = button.getAttribute('aria-controls')

      expect(controlsId).toBeTruthy()
      expect(document.getElementById(controlsId!)).toBeInTheDocument()
    })

    it('content region has role="region"', () => {
      render(
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('content region has aria-labelledby pointing to button', () => {
      render(
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Item 1">Content 1</AccordionItem>
        </Accordion>
      )

      const region = screen.getByRole('region')
      const labelledById = region.getAttribute('aria-labelledby')

      expect(labelledById).toBeTruthy()
      expect(document.getElementById(labelledById!)).toBeInTheDocument()
    })
  })

  // AccordionGroup compound component
  describe('AccordionGroup compound component', () => {
    it('renders using AccordionGroup.Item', () => {
      render(
        <AccordionGroup>
          <AccordionGroup.Item value="item1" label="Item 1">Content 1</AccordionGroup.Item>
          <AccordionGroup.Item value="item2" label="Item 2">Content 2</AccordionGroup.Item>
        </AccordionGroup>
      )
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    it('works with controlled state via AccordionGroup', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <AccordionGroup defaultValue="item1" onChange={onChange}>
          <AccordionGroup.Item value="item1" label="Item 1">Content 1</AccordionGroup.Item>
          <AccordionGroup.Item value="item2" label="Item 2">Content 2</AccordionGroup.Item>
        </AccordionGroup>
      )

      await user.click(screen.getAllByRole('button')[1])
      expect(onChange).toHaveBeenCalledWith('item2')
    })
  })

  // Error handling
  describe('error handling', () => {
    it('throws error when AccordionItem is used outside Accordion', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<AccordionItem value="item1" label="Item">Content</AccordionItem>)
      }).toThrow('AccordionItem must be used within an Accordion component')

      consoleError.mockRestore()
    })
  })

  // Icon prop
  describe('icon prop', () => {
    it('renders icon when provided', () => {
      render(
        <Accordion>
          <AccordionItem value="item1" label="Item" icon={<span data-testid="custom-icon">Icon</span>}>
            Content
          </AccordionItem>
        </Accordion>
      )
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })
  })
})
