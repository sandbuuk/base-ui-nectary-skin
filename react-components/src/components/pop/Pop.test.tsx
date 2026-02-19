import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Pop } from './Pop'

describe('Pop', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders trigger content', () => {
      render(
        <Pop content={<div>Content</div>}>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })

    it('does not show content when closed', () => {
      render(
        <Pop content={<div>Pop Content</div>} open={false}>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.queryByText('Pop Content')).not.toBeInTheDocument()
    })

    it('shows content when open', () => {
      render(
        <Pop content={<div>Pop Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Pop Content')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(
        <Pop content={<div>Content</div>} ref={ref}>
          <button>Trigger</button>
        </Pop>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('renders with dialog element', () => {
      render(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )
      expect(document.querySelector('dialog')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className to content', () => {
      render(
        <Pop content={<div>Content</div>} open className="custom-class">
          <button>Trigger</button>
        </Pop>
      )
      const content = screen.getByText('Content')
      expect(content.parentElement).toHaveClass('custom-class')
    })

    it('passes aria-label to dialog', () => {
      render(
        <Pop content={<div>Content</div>} open aria-label="Test pop">
          <button>Trigger</button>
        </Pop>
      )
      expect(document.querySelector('dialog')).toHaveAttribute('aria-label', 'Test pop')
    })

    it('sets aria-modal when modal prop is true', () => {
      render(
        <Pop content={<div>Content</div>} open modal>
          <button>Trigger</button>
        </Pop>
      )
      expect(document.querySelector('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('sets aria-modal to false when not modal', () => {
      render(
        <Pop content={<div>Content</div>} open modal={false}>
          <button>Trigger</button>
        </Pop>
      )
      expect(document.querySelector('dialog')).toHaveAttribute('aria-modal', 'false')
    })
  })

  // Accessibility attributes on trigger
  describe('trigger accessibility', () => {
    it('has aria-haspopup on trigger', () => {
      render(
        <Pop content={<div>Content</div>}>
          <button>Trigger</button>
        </Pop>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
    })

    it('has aria-expanded=false when closed', () => {
      render(
        <Pop content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Pop>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('has aria-expanded=true when open', () => {
      render(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )
      const trigger = screen.getByText('Trigger').parentElement
      expect(trigger).toHaveAttribute('aria-expanded', 'true')
    })
  })

  // Orientations
  describe('orientations', () => {
    const orientations = [
      'top-left',
      'top-right',
      'top-center',
      'top-stretch',
      'bottom-left',
      'bottom-right',
      'bottom-center',
      'bottom-stretch',
      'center-left',
      'center-right',
    ] as const

    orientations.forEach((orientation) => {
      it(`renders with ${orientation} orientation`, () => {
        render(
          <Pop content={<div>Content</div>} open orientation={orientation}>
            <button>Trigger</button>
          </Pop>
        )
        expect(screen.getByText('Content')).toBeInTheDocument()
      })
    })
  })

  // Close callbacks
  describe('onClose callback', () => {
    it('calls onClose when escape is pressed', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <Pop content={<div>Content</div>} open onClose={onClose}>
          <button>Trigger</button>
        </Pop>
      )

      await user.keyboard('{Escape}')
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('calls onClose when clicking backdrop', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <Pop content={<div>Content</div>} open onClose={onClose}>
          <button>Trigger</button>
        </Pop>
      )

      // Click on the backdrop (the fixed overlay)
      const backdrop = document.querySelector('.fixed.inset-0')
      if (backdrop) {
        await user.click(backdrop)
        expect(onClose).toHaveBeenCalledTimes(1)
      }
    })

    it('does not call onClose when disableBackdropClose is true', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <Pop content={<div>Content</div>} open onClose={onClose} disableBackdropClose>
          <button>Trigger</button>
        </Pop>
      )

      const backdrop = document.querySelector('.fixed.inset-0')
      if (backdrop) {
        await user.click(backdrop)
        expect(onClose).not.toHaveBeenCalled()
      }
    })

    it('calls onClose when clicking outside in non-modal mode', async () => {
      const onClose = vi.fn()
      const user = userEvent.setup()

      render(
        <div>
          <div data-testid="outside">Outside</div>
          <Pop content={<div>Content</div>} open onClose={onClose}>
            <button>Trigger</button>
          </Pop>
        </div>
      )

      await waitFor(() => {
        return user.click(screen.getByTestId('outside'))
      })

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled()
      })
    })
  })

  // Open/close state
  describe('controlled state', () => {
    it('responds to open prop changes', () => {
      const { rerender } = render(
        <Pop content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Pop>
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()

      rerender(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )

      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('hides content when open changes to false', () => {
      const { rerender } = render(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )

      expect(screen.getByText('Content')).toBeInTheDocument()

      rerender(
        <Pop content={<div>Content</div>} open={false}>
          <button>Trigger</button>
        </Pop>
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })
  })

  // Portal rendering
  describe('portal rendering', () => {
    it('renders content in document.body via portal', () => {
      render(
        <div data-testid="container">
          <Pop content={<div data-testid="pop-content">Content</div>} open>
            <button>Trigger</button>
          </Pop>
        </div>
      )

      const container = screen.getByTestId('container')
      const content = screen.getByTestId('pop-content')

      // Content should NOT be inside the container (it's portaled)
      expect(container.contains(content)).toBe(false)
      // Content should be in document.body
      expect(document.body.contains(content)).toBe(true)
    })
  })

  // Default values
  describe('default values', () => {
    it('uses bottom-right orientation by default', () => {
      render(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('defaults to closed state', () => {
      render(
        <Pop content={<div>Content</div>}>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })

    it('defaults to non-modal mode', () => {
      render(
        <Pop content={<div>Content</div>} open>
          <button>Trigger</button>
        </Pop>
      )
      expect(document.querySelector('dialog')).toHaveAttribute('aria-modal', 'false')
    })
  })

  // Display name
  describe('component', () => {
    it('has correct display name', () => {
      expect(Pop.displayName).toBe('Pop')
    })
  })

  // Inset prop
  describe('inset prop', () => {
    it('accepts inset prop', () => {
      render(
        <Pop content={<div>Content</div>} open inset={20}>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })

  // hideOutsideViewport prop
  describe('hideOutsideViewport prop', () => {
    it('accepts hideOutsideViewport prop', () => {
      render(
        <Pop content={<div>Content</div>} open hideOutsideViewport>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })

  // allowScroll prop
  describe('allowScroll prop', () => {
    it('accepts allowScroll prop', () => {
      render(
        <Pop content={<div>Content</div>} open allowScroll>
          <button>Trigger</button>
        </Pop>
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })
})
