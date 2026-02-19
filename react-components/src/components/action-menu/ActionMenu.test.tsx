import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ActionMenu } from './ActionMenu'
import { ActionMenuOption } from './ActionMenuOption'

describe('ActionMenu', () => {
  describe('rendering', () => {
    it('renders with children', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" />
        </ActionMenu>
      )
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(
        <ActionMenu ref={ref} aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(
        <ActionMenu aria-label="Test menu" className="custom-class">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      expect(screen.getByRole('listbox')).toHaveClass('custom-class')
    })

    it('has correct role', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('applies aria-label', () => {
      render(
        <ActionMenu aria-label="File actions">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      expect(screen.getByLabelText('File actions')).toBeInTheDocument()
    })

    it('is focusable', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      const menu = screen.getByRole('listbox')
      expect(menu).toHaveAttribute('tabindex', '0')
    })
  })

  describe('rows prop', () => {
    it('limits visible height with rows prop', () => {
      render(
        <ActionMenu aria-label="Test menu" rows={3}>
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" />
          <ActionMenuOption text="Option 3" />
          <ActionMenuOption text="Option 4" />
          <ActionMenuOption text="Option 5" />
        </ActionMenu>
      )
      const listbox = screen.getByRole('listbox')
      const presentation = listbox.querySelector('[role="presentation"]')
      expect(presentation).toHaveStyle({ maxHeight: '120px' }) // 3 * 40px
    })

    it('does not limit height without rows prop', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
        </ActionMenu>
      )
      const listbox = screen.getByRole('listbox')
      const presentation = listbox.querySelector('[role="presentation"]')
      expect(presentation).not.toHaveStyle({ maxHeight: expect.any(String) })
    })
  })

  describe('keyboard navigation', () => {
    it('navigates down with ArrowDown', async () => {
      const user = userEvent.setup()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" />
          <ActionMenuOption text="Option 3" />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}')

      expect(screen.getByText('Option 1').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')

      await user.keyboard('{ArrowDown}')
      expect(screen.getByText('Option 2').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')
    })

    it('navigates up with ArrowUp', async () => {
      const user = userEvent.setup()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" />
          <ActionMenuOption text="Option 3" />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowUp}')

      // Should wrap to last option
      expect(screen.getByText('Option 3').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')
    })

    it('wraps around when navigating past the end', async () => {
      const user = userEvent.setup()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}') // Option 1
      await user.keyboard('{ArrowDown}') // Option 2
      await user.keyboard('{ArrowDown}') // Should wrap to Option 1

      expect(screen.getByText('Option 1').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')
    })

    it('skips disabled options when navigating', async () => {
      const user = userEvent.setup()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" />
          <ActionMenuOption text="Option 2" disabled />
          <ActionMenuOption text="Option 3" />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}') // Option 1
      await user.keyboard('{ArrowDown}') // Should skip Option 2, go to Option 3

      expect(screen.getByText('Option 3').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')
    })

    it('selects option with Enter key', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" onClick={onClick} />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}')
      await user.keyboard('{Enter}')

      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('selects option with Space key', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option 1" onClick={onClick} />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}')
      await user.keyboard(' ')

      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('blur behavior', () => {
    it('clears selection on blur', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <ActionMenu aria-label="Test menu">
            <ActionMenuOption text="Option 1" />
          </ActionMenu>
          <button>Other button</button>
        </div>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      await user.keyboard('{ArrowDown}')

      expect(screen.getByText('Option 1').closest('[role="option"]')).toHaveAttribute('aria-selected', 'true')

      await user.click(screen.getByText('Other button'))

      expect(screen.getByText('Option 1').closest('[role="option"]')).toHaveAttribute('aria-selected', 'false')
    })
  })
})

describe('ActionMenuOption', () => {
  describe('rendering', () => {
    it('renders text content', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Test Option" />
        </ActionMenu>
      )
      expect(screen.getByText('Test Option')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption ref={ref} text="Test Option" />
        </ActionMenu>
      )
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('has option role', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Test Option" />
        </ActionMenu>
      )
      expect(screen.getByRole('option')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Test Option" className="custom-option" />
        </ActionMenu>
      )
      expect(screen.getByRole('option')).toHaveClass('custom-option')
    })
  })

  describe('icons', () => {
    it('renders left icon', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="With Icon" icon={<span data-testid="left-icon">🔧</span>} />
        </ActionMenu>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders right icon', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="With Icon" rightIcon={<span data-testid="right-icon">→</span>} />
        </ActionMenu>
      )
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })

    it('renders both icons', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption
            text="With Icons"
            icon={<span data-testid="left-icon">🔧</span>}
            rightIcon={<span data-testid="right-icon">→</span>}
          />
        </ActionMenu>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })
  })

  describe('click behavior', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Clickable" onClick={onClick} />
        </ActionMenu>
      )

      await user.click(screen.getByText('Clickable'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Disabled" disabled onClick={onClick} />
        </ActionMenu>
      )

      await user.click(screen.getByText('Disabled'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('disabled state', () => {
    it('has aria-disabled when disabled', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Disabled" disabled />
        </ActionMenu>
      )
      expect(screen.getByRole('option')).toHaveAttribute('aria-disabled', 'true')
    })

    it('does not have aria-selected when disabled and selected', async () => {
      const user = userEvent.setup()
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Enabled" />
          <ActionMenuOption text="Disabled" disabled />
        </ActionMenu>
      )

      const menu = screen.getByRole('listbox')
      await user.click(menu)
      // Navigate down - disabled option should be skipped
      await user.keyboard('{ArrowDown}')

      expect(screen.getByText('Disabled').closest('[role="option"]')).toHaveAttribute('aria-selected', 'false')
    })
  })

  describe('accessibility', () => {
    it('uses text as aria-label by default', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Test Option" />
        </ActionMenu>
      )
      expect(screen.getByRole('option')).toHaveAttribute('aria-label', 'Test Option')
    })

    it('supports custom aria-label', () => {
      render(
        <ActionMenu aria-label="Test menu">
          <ActionMenuOption text="Option" aria-label="Custom label" />
        </ActionMenu>
      )
      expect(screen.getByRole('option')).toHaveAttribute('aria-label', 'Custom label')
    })
  })
})
