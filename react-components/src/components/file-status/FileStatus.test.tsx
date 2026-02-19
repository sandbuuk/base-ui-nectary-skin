import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FileStatus } from './FileStatus'

describe('FileStatus', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with filename', () => {
      render(<FileStatus filename="test.pdf" />)
      expect(screen.getByText('test.pdf')).toBeInTheDocument()
    })

    it('renders without filename', () => {
      const { container } = render(<FileStatus />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<FileStatus ref={ref} filename="test.pdf" />)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      const { container } = render(<FileStatus className="custom-class" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  // Type variants
  describe('type variants', () => {
    it('renders pending type with correct icon', () => {
      render(<FileStatus type="pending" filename="test.pdf" />)
      expect(screen.getByRole('img', { name: 'fa-clipboard-question' })).toBeInTheDocument()
    })

    it('renders loading type with spinner', () => {
      render(<FileStatus type="loading" filename="test.pdf" />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('renders progress type with correct icon', () => {
      render(<FileStatus type="progress" filename="test.pdf" />)
      expect(screen.getByRole('img', { name: 'fa-file-lines' })).toBeInTheDocument()
    })

    it('renders success type with correct icon', () => {
      render(<FileStatus type="success" filename="test.pdf" />)
      expect(screen.getByRole('img', { name: 'circle-check' })).toBeInTheDocument()
    })

    it('renders error type with correct icon', () => {
      render(<FileStatus type="error" filename="test.pdf" />)
      expect(screen.getByRole('img', { name: 'octagon-exclamation' })).toBeInTheDocument()
    })

    it('defaults to pending type', () => {
      render(<FileStatus filename="test.pdf" />)
      expect(screen.getByRole('img', { name: 'fa-clipboard-question' })).toBeInTheDocument()
    })
  })

  // Content slot
  describe('content slot', () => {
    it('renders content when provided', () => {
      render(
        <FileStatus
          filename="test.pdf"
          content={<span data-testid="content">Additional info</span>}
        />
      )
      expect(screen.getByTestId('content')).toBeInTheDocument()
      expect(screen.getByText('Additional info')).toBeInTheDocument()
    })

    it('does not render content wrapper when no content provided', () => {
      const { container } = render(<FileStatus filename="test.pdf" />)
      expect(container.querySelector('[data-testid="content"]')).not.toBeInTheDocument()
    })
  })

  // Action slot
  describe('action slot', () => {
    it('renders action when provided', () => {
      render(
        <FileStatus
          filename="test.pdf"
          action={<button data-testid="action">Cancel</button>}
        />
      )
      expect(screen.getByTestId('action')).toBeInTheDocument()
      expect(screen.getByText('Cancel')).toBeInTheDocument()
    })

    it('does not render action wrapper when no action provided', () => {
      const { container } = render(<FileStatus filename="test.pdf" />)
      // The action container should not be in the document
      const actionContainer = container.querySelector('.flex.gap-1.h-8.-mt-1.-mb-1')
      expect(actionContainer).not.toBeInTheDocument()
    })
  })

  // Combined content and action
  describe('combined slots', () => {
    it('renders both content and action', () => {
      render(
        <FileStatus
          filename="test.pdf"
          content={<span data-testid="content">File info</span>}
          action={<button data-testid="action">Download</button>}
        />
      )
      expect(screen.getByTestId('content')).toBeInTheDocument()
      expect(screen.getByTestId('action')).toBeInTheDocument()
    })
  })

  // Props spreading
  describe('props', () => {
    it('spreads additional props to the root element', () => {
      render(<FileStatus filename="test.pdf" data-testid="file-status" id="my-file-status" />)
      const element = screen.getByTestId('file-status')
      expect(element).toHaveAttribute('id', 'my-file-status')
    })

    it('supports aria attributes', () => {
      render(<FileStatus filename="test.pdf" aria-label="File upload status" />)
      expect(screen.getByLabelText('File upload status')).toBeInTheDocument()
    })
  })

  // Background colors by type
  describe('styling', () => {
    it('applies pending background class', () => {
      const { container } = render(<FileStatus type="pending" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('bg-[var(--sinch-comp-file-status-color-pending-background)]')
    })

    it('applies loading background class', () => {
      const { container } = render(<FileStatus type="loading" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('bg-[var(--sinch-comp-file-status-color-loading-background)]')
    })

    it('applies progress background class', () => {
      const { container } = render(<FileStatus type="progress" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('bg-[var(--sinch-comp-file-status-color-progress-background)]')
    })

    it('applies success background class', () => {
      const { container } = render(<FileStatus type="success" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('bg-[var(--sinch-comp-file-status-color-success-background)]')
    })

    it('applies error background class', () => {
      const { container } = render(<FileStatus type="error" filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('bg-[var(--sinch-comp-file-status-color-error-background)]')
    })

    it('applies base layout classes', () => {
      const { container } = render(<FileStatus filename="test.pdf" />)
      expect(container.firstChild).toHaveClass('flex', 'flex-row', 'items-start')
    })
  })
})
