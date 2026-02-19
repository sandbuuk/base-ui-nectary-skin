import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PersistentOverlay } from './PersistentOverlay'

describe('PersistentOverlay', () => {
  // Basic rendering
  describe('rendering', () => {
    it('does not render when closed', () => {
      render(
        <PersistentOverlay
          open={false}
          caption="Test"
          content={<div>Content</div>}
        />
      )
      expect(screen.queryByText('Content')).not.toBeInTheDocument()
      expect(screen.queryByText('Test')).not.toBeInTheDocument()
    })

    it('renders when open', () => {
      render(
        <PersistentOverlay
          open
          caption="Test Title"
          content={<div>Test Content</div>}
        />
      )
      expect(screen.getByText('Test Title')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(
        <PersistentOverlay
          ref={ref}
          open
          content={<div>Content</div>}
        />
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('renders with role="dialog"', () => {
      render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
        />
      )
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('renders with aria-modal="true"', () => {
      render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
        />
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className to dialog', () => {
      render(
        <PersistentOverlay
          open
          className="custom-class"
          content={<div>Content</div>}
        />
      )
      const dialog = document.querySelector('dialog')
      expect(dialog).toHaveClass('custom-class')
    })

    it('passes aria-label to dialog wrapper', () => {
      render(
        <PersistentOverlay
          open
          aria-label="Test overlay"
          content={<div>Content</div>}
        />
      )
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Test overlay')
    })

    it('renders caption in header', () => {
      render(
        <PersistentOverlay
          open
          caption="My Caption"
          content={<div>Content</div>}
        />
      )
      expect(screen.getByText('My Caption')).toBeInTheDocument()
      expect(screen.getByText('My Caption').tagName).toBe('H3')
    })

    it('renders icon in header', () => {
      render(
        <PersistentOverlay
          open
          icon={<span data-testid="icon">Icon</span>}
          content={<div>Content</div>}
        />
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders buttons in footer', () => {
      render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
          buttons={<button>Action Button</button>}
        />
      )
      expect(screen.getByText('Action Button')).toBeInTheDocument()
    })

    it('renders multiple buttons', () => {
      render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
          buttons={
            <>
              <button>Cancel</button>
              <button>Confirm</button>
            </>
          }
        />
      )
      expect(screen.getByText('Cancel')).toBeInTheDocument()
      expect(screen.getByText('Confirm')).toBeInTheDocument()
    })
  })

  // Escape key prevention
  describe('escape key', () => {
    it('prevents escape key from closing', async () => {
      const user = userEvent.setup()

      render(
        <PersistentOverlay
          open
          caption="Test"
          content={<div>Content</div>}
        />
      )

      await user.keyboard('{Escape}')
      
      // Dialog should still be visible
      expect(screen.getByText('Content')).toBeInTheDocument()
      expect(screen.getByText('Test')).toBeInTheDocument()
    })
  })

  // No close button
  describe('close button', () => {
    it('does not render a close button', () => {
      render(
        <PersistentOverlay
          open
          caption="Test"
          content={<div>Content</div>}
        />
      )

      // There should be no close button
      const closeButton = document.querySelector('[aria-label="close"]')
      expect(closeButton).not.toBeInTheDocument()
    })
  })

  // Open/close state
  describe('controlled state', () => {
    it('responds to open prop changes', () => {
      const { rerender } = render(
        <PersistentOverlay
          open={false}
          content={<div>Content</div>}
        />
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()

      rerender(
        <PersistentOverlay
          open
          content={<div>Content</div>}
        />
      )

      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('hides content when open changes to false', () => {
      const { rerender } = render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
        />
      )

      expect(screen.getByText('Content')).toBeInTheDocument()

      rerender(
        <PersistentOverlay
          open={false}
          content={<div>Content</div>}
        />
      )

      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })
  })

  // Portal rendering
  describe('portal rendering', () => {
    it('renders content in document.body via portal', () => {
      render(
        <div data-testid="container">
          <PersistentOverlay
            open
            content={<div data-testid="overlay-content">Content</div>}
          />
        </div>
      )

      const container = screen.getByTestId('container')
      const content = screen.getByTestId('overlay-content')

      // Content should NOT be inside the container (it's portaled)
      expect(container.contains(content)).toBe(false)
      // Content should be in document.body
      expect(document.body.contains(content)).toBe(true)
    })
  })

  // onVisibilityAltered callback
  describe('onVisibilityAltered callback', () => {
    it('calls onVisibilityAltered when unmounting while open', () => {
      const onVisibilityAltered = vi.fn()

      const { unmount } = render(
        <PersistentOverlay
          open
          content={<div>Content</div>}
          onVisibilityAltered={onVisibilityAltered}
        />
      )

      unmount()

      expect(onVisibilityAltered).toHaveBeenCalled()
    })

    it('does not call onVisibilityAltered when unmounting while closed', () => {
      const onVisibilityAltered = vi.fn()

      const { unmount } = render(
        <PersistentOverlay
          open={false}
          content={<div>Content</div>}
          onVisibilityAltered={onVisibilityAltered}
        />
      )

      unmount()

      expect(onVisibilityAltered).not.toHaveBeenCalled()
    })
  })

  // Default values
  describe('default values', () => {
    it('defaults to closed state', () => {
      render(
        <PersistentOverlay content={<div>Content</div>} />
      )
      expect(screen.queryByText('Content')).not.toBeInTheDocument()
    })
  })

  // Display name
  describe('component', () => {
    it('has correct display name', () => {
      expect(PersistentOverlay.displayName).toBe('PersistentOverlay')
    })
  })

  // Content only (no caption, icon, buttons)
  describe('content variations', () => {
    it('renders with content only', () => {
      render(
        <PersistentOverlay
          open
          content={<div>Just content</div>}
        />
      )
      expect(screen.getByText('Just content')).toBeInTheDocument()
    })

    it('renders with caption and content', () => {
      render(
        <PersistentOverlay
          open
          caption="Title"
          content={<div>Body</div>}
        />
      )
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Body')).toBeInTheDocument()
    })

    it('renders with all parts', () => {
      render(
        <PersistentOverlay
          open
          caption="Full Dialog"
          icon={<span>Icon</span>}
          content={<div>Content</div>}
          buttons={<button>Action</button>}
        />
      )
      expect(screen.getByText('Icon')).toBeInTheDocument()
      expect(screen.getByText('Full Dialog')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
    })
  })
})
