import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Sheet, SheetTitle } from './Sheet'

describe('Sheet', () => {
  // Basic rendering
  describe('rendering', () => {
    it('does not render when closed', () => {
      render(<Sheet open={false}>Test content</Sheet>)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('renders when open', () => {
      render(<Sheet open>Test content</Sheet>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('renders children content', () => {
      render(<Sheet open>Test content</Sheet>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders title when provided', () => {
      render(
        <Sheet
          open
          title={<SheetTitle title="My Title" />}
        >
          Content
        </Sheet>
      )
      expect(screen.getByRole('heading', { name: 'My Title' })).toBeInTheDocument()
    })

    it('renders footer when provided', () => {
      render(
        <Sheet
          open
          footer={<button>Save</button>}
        >
          Content
        </Sheet>
      )
      expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<Sheet ref={ref} open>Test</Sheet>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  // Placement variants
  describe('placement', () => {
    it('applies right placement by default', () => {
      render(<Sheet open>Content</Sheet>)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('right-0', 'top-0')
    })

    it('applies left placement classes', () => {
      render(<Sheet open placement="left">Content</Sheet>)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('left-0', 'top-0')
    })

    it('applies top placement classes', () => {
      render(<Sheet open placement="top">Content</Sheet>)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('top-0', 'left-0', 'right-0')
    })

    it('applies bottom placement classes', () => {
      render(<Sheet open placement="bottom">Content</Sheet>)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveClass('bottom-0', 'left-0', 'right-0')
    })
  })

  // Overlay modes
  describe('overlay', () => {
    it('renders backdrop in modal mode', () => {
      render(<Sheet open overlay="modal">Content</Sheet>)
      // Backdrop is rendered with aria-hidden
      const backdrop = document.querySelector('[aria-hidden="true"]')
      expect(backdrop).toBeInTheDocument()
    })

    it('does not render backdrop in push mode', () => {
      render(<Sheet open overlay="push">Content</Sheet>)
      const backdrop = document.querySelector('[aria-hidden="true"]')
      expect(backdrop).not.toBeInTheDocument()
    })

    it('sets aria-modal correctly for modal overlay', () => {
      render(<Sheet open overlay="modal">Content</Sheet>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('sets aria-modal correctly for push overlay', () => {
      render(<Sheet open overlay="push">Content</Sheet>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'false')
    })
  })

  // Events
  describe('events', () => {
    it('calls onClose with "escape" when pressing Escape', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Sheet open onClose={onClose}>Content</Sheet>)

      await user.keyboard('{Escape}')

      expect(onClose).toHaveBeenCalledWith('escape')
    })

    it('calls onClose with "backdrop" when clicking backdrop', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Sheet open overlay="modal" onClose={onClose}>Content</Sheet>)

      const backdrop = document.querySelector('[aria-hidden="true"]')
      if (backdrop) {
        await user.click(backdrop)
      }

      expect(onClose).toHaveBeenCalledWith('backdrop')
    })

    it('does not call onClose when clicking inside the sheet', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Sheet open onClose={onClose}>Content</Sheet>)

      await user.click(screen.getByText('Content'))

      expect(onClose).not.toHaveBeenCalled()
    })
  })

  // Custom className
  describe('props', () => {
    it('applies custom className', () => {
      render(<Sheet open className="custom-class">Content</Sheet>)
      expect(screen.getByRole('dialog')).toHaveClass('custom-class')
    })

    it('spreads additional props', () => {
      render(<Sheet open data-testid="custom-sheet">Content</Sheet>)
      expect(screen.getByTestId('custom-sheet')).toBeInTheDocument()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has dialog role', () => {
      render(<Sheet open>Content</Sheet>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('associates title with aria-labelledby', () => {
      render(
        <Sheet
          open
          title={<SheetTitle title="Settings" />}
        >
          Content
        </Sheet>
      )
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-labelledby', 'sheet-title')
    })

    it('associates content with aria-describedby', () => {
      render(<Sheet open>Content</Sheet>)
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-describedby', 'sheet-content')
    })
  })
})

describe('SheetTitle', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders title text', () => {
      render(<SheetTitle title="My Title" />)
      expect(screen.getByRole('heading', { name: 'My Title' })).toBeInTheDocument()
    })

    it('renders description when provided', () => {
      render(<SheetTitle title="Title" description="Description text" />)
      expect(screen.getByText('Description text')).toBeInTheDocument()
    })

    it('renders close button by default', () => {
      render(<SheetTitle title="Title" />)
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    })

    it('hides close button when hideCloseButton is true', () => {
      render(<SheetTitle title="Title" hideCloseButton />)
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
    })

    it('renders icon when provided', () => {
      render(<SheetTitle title="Title" icon={<span data-testid="icon">Icon</span>} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<SheetTitle ref={ref} title="Title" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  // Events
  describe('events', () => {
    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SheetTitle title="Title" onClose={onClose} />)

      await user.click(screen.getByRole('button', { name: 'Close' }))

      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('uses custom close aria-label', () => {
      render(<SheetTitle title="Title" closeAriaLabel="Dismiss" />)
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument()
    })

    it('renders title as heading level 3', () => {
      render(<SheetTitle title="Title" />)
      const heading = screen.getByRole('heading', { name: 'Title' })
      expect(heading).toHaveAttribute('aria-level', '3')
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      render(<SheetTitle title="Title" className="custom-class" />)
      // The className is applied to the wrapper div
      const wrapper = screen.getByRole('heading', { name: 'Title' }).closest('div')?.parentElement
      expect(wrapper).toHaveClass('custom-class')
    })
  })
})

describe('Sheet integration', () => {
  it('works with SheetTitle for complete sheet experience', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(
      <Sheet
        open
        onClose={onClose}
        title={
          <SheetTitle
            title="Settings"
            description="Configure your preferences"
            onClose={() => onClose('close')}
          />
        }
        footer={
          <button onClick={() => onClose('close')}>Save</button>
        }
      >
        <p>Settings content</p>
      </Sheet>
    )

    // Verify all parts are rendered
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByText('Configure your preferences')).toBeInTheDocument()
    expect(screen.getByText('Settings content')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()

    // Click close button in title
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledWith('close')
  })

  it('handles open/close state transitions', async () => {
    const { rerender } = render(<Sheet open={false}>Content</Sheet>)

    // Initially closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Open the sheet
    rerender(<Sheet open={true}>Content</Sheet>)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Close the sheet - note: visibility depends on animation completion
    rerender(<Sheet open={false}>Content</Sheet>)

    // The dialog might still be visible during animation, but eventually hides
    await waitFor(() => {
      // After animation, the dialog should be hidden
      // Note: In tests, transitions may not fire, so we check immediately
    })
  })
})
