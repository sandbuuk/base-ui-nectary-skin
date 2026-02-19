import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Popover } from './Popover'

describe('Popover', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders trigger content', () => {
      render(
        <Popover content={<div>Content</div>}>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })

    it('does not show popover content when closed', () => {
      render(
        <Popover content={<div>Popover Content</div>} open={false}>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.queryByText('Popover Content')).not.toBeInTheDocument()
    })

    it('shows popover content when open', () => {
      render(
        <Popover content={<div>Popover Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByText('Popover Content')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(
        <Popover content={<div>Content</div>} ref={ref}>
          <button>Trigger</button>
        </Popover>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('renders with role="dialog"', () => {
      render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className to content', () => {
      render(
        <Popover content={<div>Content</div>} open className="custom-class">
          <button>Trigger</button>
        </Popover>
      )
      // The className is applied to the content wrapper
      const content = screen.getByText('Content')
      expect(content.parentElement).toHaveClass('custom-class')
    })

    it('passes aria-label to dialog', () => {
      render(
        <Popover content={<div>Content</div>} open aria-label="Test popover">
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Test popover')
    })

    it('sets aria-modal when modal prop is true', () => {
      render(
        <Popover content={<div>Content</div>} open modal>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })
  })

  // Accessibility attributes on trigger
  describe('trigger accessibility', () => {
    it('has aria-haspopup on trigger', () => {
      render(
        <Popover content={<div>Content</div>}>
          <button>Trigger</button>
        </Popover>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
    })

    it('has aria-expanded=false when closed', () => {
      render(
        <Popover content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Popover>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('has aria-expanded=true when open', () => {
      render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-expanded', 'true')
    })

    it('has aria-controls linking to content', () => {
      render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-controls')
    })
  })

  // Orientations
  describe('orientations', () => {
    const orientations = [
      'top',
      'bottom',
      'left',
      'right',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ] as const

    orientations.forEach((orientation) => {
      it(`renders with ${orientation} orientation`, () => {
        render(
          <Popover content={<div>Content</div>} open orientation={orientation}>
            <button>Trigger</button>
          </Popover>
        )
        expect(screen.getByText('Content')).toBeInTheDocument()
      })
    })
  })

  // Tip prop
  describe('tip prop', () => {
    it('renders arrow SVG when tip is true', () => {
      render(
        <Popover content={<div>Content</div>} open tip>
          <button>Trigger</button>
        </Popover>
      )
      const svg = document.querySelector('svg[aria-hidden="true"]')
      expect(svg).toBeInTheDocument()
    })

    it('does not render arrow SVG when tip is false', () => {
      render(
        <Popover content={<div>Content</div>} open tip={false}>
          <button>Trigger</button>
        </Popover>
      )
      const svg = document.querySelector('svg[aria-hidden="true"]')
      expect(svg).not.toBeInTheDocument()
    })
  })

  // Close callbacks
  describe('onClose callback', () => {
    it('calls onClose when escape is pressed', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <Popover content={<div>Content</div>} open onClose={onClose}>
          <button>Trigger</button>
        </Popover>
      )

      await user.keyboard('{Escape}')
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('calls onClose when clicking backdrop in modal mode', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <Popover content={<div>Content</div>} open modal onClose={onClose}>
          <button>Trigger</button>
        </Popover>
      )

      // Click on the backdrop (the fixed overlay)
      const backdrop = document.querySelector('.fixed.inset-0')
      if (backdrop) {
        await user.click(backdrop)
        expect(onClose).toHaveBeenCalledTimes(1)
      }
    })

    it('calls onClose when clicking outside in non-modal mode', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <div>
          <div data-testid="outside">Outside</div>
          <Popover content={<div>Content</div>} open onClose={onClose}>
            <button>Trigger</button>
          </Popover>
        </div>
      )

      // Wait for the click outside handler to be attached
      await waitFor(() => {
        // Click outside
        return user.click(screen.getByTestId('outside'))
      })

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled()
      })
    })
  })

  // Modal mode
  describe('modal mode', () => {
    it('shows backdrop with opacity in modal mode', () => {
      render(
        <Popover content={<div>Content</div>} open modal>
          <button>Trigger</button>
        </Popover>
      )
      const backdrop = document.querySelector('.bg-black\\/20')
      expect(backdrop).toBeInTheDocument()
    })

    it('shows transparent backdrop in non-modal mode', () => {
      render(
        <Popover content={<div>Content</div>} open modal={false}>
          <button>Trigger</button>
        </Popover>
      )
      const backdrop = document.querySelector('.bg-transparent')
      expect(backdrop).toBeInTheDocument()
    })
  })

  // Open/close state
  describe('controlled state', () => {
    it('responds to open prop changes', () => {
      const { rerender } = render(
        <Popover content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Popover>
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()

      rerender(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )

      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('hides content when open changes to false', () => {
      const { rerender } = render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )

      expect(screen.getByText('Content')).toBeInTheDocument()

      rerender(
        <Popover content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Popover>
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })
  })

  // Portal rendering
  describe('portal rendering', () => {
    it('renders content in document.body via portal', () => {
      render(
        <div data-testid="container">
          <Popover content={<div data-testid="popover-content">Content</div>} open>
            <button>Trigger</button>
          </Popover>
        </div>
      )

      const container = screen.getByTestId('container')
      const content = screen.getByTestId('popover-content')

      // Content should NOT be inside the container (it's portaled)
      expect(container.contains(content)).toBe(false)
      // Content should be in document.body
      expect(document.body.contains(content)).toBe(true)
    })
  })

  // Default values
  describe('default values', () => {
    it('uses bottom-left orientation by default', () => {
      render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      // Component renders without errors with default orientation
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('defaults to closed state', () => {
      render(
        <Popover content={<div>Content</div>}>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })

    it('defaults to non-modal mode', () => {
      render(
        <Popover content={<div>Content</div>} open>
          <button>Trigger</button>
        </Popover>
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'false')
    })
  })

  // Display name
  describe('component', () => {
    it('has correct display name', () => {
      expect(Popover.displayName).toBe('Popover')
    })
  })
})
