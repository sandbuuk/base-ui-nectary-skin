import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Dialog, type DialogCloseDetail } from './Dialog'

describe('Dialog', () => {
  // Clean up body styles between tests
  beforeEach(() => {
    document.body.style.overflow = ''
  })

  afterEach(() => {
    document.body.style.overflow = ''
  })

  describe('rendering', () => {
    it('does not render when closed', () => {
      render(<Dialog open={false}>Test content</Dialog>)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('renders when open', () => {
      render(<Dialog open>Test content</Dialog>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('renders content when open', () => {
      render(<Dialog open>Test content</Dialog>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders caption when provided', () => {
      render(<Dialog open caption="Dialog Title">Content</Dialog>)
      expect(screen.getByText('Dialog Title')).toBeInTheDocument()
    })

    it('renders icon when provided', () => {
      render(
        <Dialog open icon={<span data-testid="custom-icon">Icon</span>}>
          Content
        </Dialog>
      )
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('renders buttons when provided', () => {
      render(
        <Dialog
          open
          buttons={<button>Submit</button>}
        >
          Content
        </Dialog>
      )
      expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    })

    it('renders close button by default', () => {
      render(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    })

    it('hides close button when hideCloseButton is true', () => {
      render(<Dialog open hideCloseButton>Content</Dialog>)
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
    })

    it('uses custom closeAriaLabel', () => {
      render(<Dialog open closeAriaLabel="Dismiss">Content</Dialog>)
      expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('has dialog role', () => {
      render(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('sets aria-modal to true', () => {
      render(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('uses caption as aria-label', () => {
      render(<Dialog open caption="My Dialog">Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'My Dialog')
    })

    it('uses explicit aria-label over caption', () => {
      render(
        <Dialog open caption="My Dialog" aria-label="Custom Label">
          Content
        </Dialog>
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Custom Label')
    })

    it('sets aria-labelledby when caption is provided', () => {
      render(<Dialog open caption="My Dialog">Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'dialog-caption')
    })

    it('sets aria-describedby', () => {
      render(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby', 'dialog-content')
    })
  })

  describe('close interactions', () => {
    it('calls onClose with "close" when close button is clicked', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Dialog open onClose={onClose}>Content</Dialog>)

      await user.click(screen.getByRole('button', { name: 'Close' }))
      expect(onClose).toHaveBeenCalledWith('close')
    })

    it('calls onClose with "escape" when Escape key is pressed', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Dialog open onClose={onClose}>Content</Dialog>)

      await user.keyboard('{Escape}')
      expect(onClose).toHaveBeenCalledWith('escape')
    })

    it('calls onClose with "backdrop" when backdrop is clicked', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Dialog open onClose={onClose}>Content</Dialog>)

      await user.click(screen.getByTestId('dialog-backdrop'))
      expect(onClose).toHaveBeenCalledWith('backdrop')
    })

    it('does not call onClose when clicking inside the dialog', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Dialog open onClose={onClose}>Content</Dialog>)

      await user.click(screen.getByText('Content'))
      expect(onClose).not.toHaveBeenCalled()
    })
  })

  describe('scroll locking', () => {
    it('locks body scroll when opened', () => {
      render(<Dialog open>Content</Dialog>)
      expect(document.body.style.overflow).toBe('hidden')
    })

    it('does not lock body scroll when closed', () => {
      render(<Dialog open={false}>Content</Dialog>)
      expect(document.body.style.overflow).toBe('')
    })
  })

  describe('props', () => {
    it('forwards ref to the dialog element', () => {
      const ref = { current: null }
      render(<Dialog open ref={ref}>Content</Dialog>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<Dialog open className="custom-class">Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveClass('custom-class')
    })

    it('applies custom id', () => {
      render(<Dialog open id="my-dialog">Content</Dialog>)
      expect(screen.getByRole('dialog')).toHaveAttribute('id', 'my-dialog')
    })

    it('applies custom style', () => {
      render(
        <Dialog open style={{ maxWidth: '600px' }}>
          Content
        </Dialog>
      )
      expect(screen.getByRole('dialog')).toHaveStyle({ maxWidth: '600px' })
    })

    it('spreads additional props to dialog element', () => {
      render(
        <Dialog open data-custom="value">
          Content
        </Dialog>
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('data-custom', 'value')
    })
  })

  describe('controlled behavior', () => {
    it('opens when open prop changes to true', async () => {
      const { rerender } = render(<Dialog open={false}>Content</Dialog>)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

      rerender(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('starts close animation when open prop changes to false', async () => {
      const { rerender } = render(<Dialog open>Content</Dialog>)
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      rerender(<Dialog open={false}>Content</Dialog>)
      // Dialog still exists during close animation
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })

  describe('portal rendering', () => {
    it('renders into document.body by default', () => {
      render(<Dialog open>Content</Dialog>)
      const backdrop = screen.getByTestId('dialog-backdrop')
      expect(backdrop.parentElement).toBe(document.body)
    })

    it('renders into custom container when provided', () => {
      const container = document.createElement('div')
      document.body.appendChild(container)

      render(<Dialog open container={container}>Content</Dialog>)
      const backdrop = screen.getByTestId('dialog-backdrop')
      expect(backdrop.parentElement).toBe(container)

      document.body.removeChild(container)
    })
  })

  describe('close detail types', () => {
    it('provides correct close detail for close button', async () => {
      const user = userEvent.setup()
      let receivedDetail: DialogCloseDetail | null = null
      const onClose = (detail: DialogCloseDetail) => {
        receivedDetail = detail
      }

      render(<Dialog open onClose={onClose}>Content</Dialog>)
      await user.click(screen.getByRole('button', { name: 'Close' }))

      expect(receivedDetail).toBe('close')
    })

    it('provides correct close detail for escape key', async () => {
      const user = userEvent.setup()
      let receivedDetail: DialogCloseDetail | null = null
      const onClose = (detail: DialogCloseDetail) => {
        receivedDetail = detail
      }

      render(<Dialog open onClose={onClose}>Content</Dialog>)
      await user.keyboard('{Escape}')

      expect(receivedDetail).toBe('escape')
    })

    it('provides correct close detail for backdrop click', async () => {
      const user = userEvent.setup()
      let receivedDetail: DialogCloseDetail | null = null
      const onClose = (detail: DialogCloseDetail) => {
        receivedDetail = detail
      }

      render(<Dialog open onClose={onClose}>Content</Dialog>)
      await user.click(screen.getByTestId('dialog-backdrop'))

      expect(receivedDetail).toBe('backdrop')
    })
  })
})
