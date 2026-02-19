import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Progress } from './Progress'

describe('Progress', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with default value', () => {
      render(<Progress aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Progress ref={ref} aria-label="Test progress"/>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<Progress className="custom-class" aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveClass('custom-class')
    })
  })

  // Value prop
  describe('value', () => {
    it('displays progress at 0%', () => {
      render(<Progress value={0} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
    })

    it('displays progress at 50%', () => {
      render(<Progress value={50} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')
    })

    it('displays progress at 100%', () => {
      render(<Progress value={100} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
    })

    it('clamps negative values to 0', () => {
      render(<Progress value={-10} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
    })

    it('clamps values over 100 to 100', () => {
      render(<Progress value={150} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
    })

    it('handles decimal values', () => {
      render(<Progress value={33.33} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33.33')
    })
  })

  // Detailed prop
  describe('detailed', () => {
    it('hides percentage text by default', () => {
      render(<Progress value={50} aria-label="Test progress"/>)

      // The text should have hidden class when detailed is false
      const progressbar = screen.getByRole('progressbar')
      const text = progressbar.querySelector('span')

      expect(text).toHaveClass('hidden')
    })

    it('shows percentage text when detailed is true', () => {
      render(<Progress value={50} detailed aria-label="Test progress"/>)

      const progressbar = screen.getByRole('progressbar')
      const text = progressbar.querySelector('span')

      expect(text).toHaveClass('block')
      expect(text).not.toHaveClass('hidden')
    })

    it('displays formatted percentage text', () => {
      render(<Progress value={50} detailed aria-label="Test progress"/>)
      // The percentage should be displayed (format may vary by locale)
      expect(screen.getByText(/50/)).toBeInTheDocument()
    })

    it('displays 0% when value is 0', () => {
      render(<Progress value={0} detailed aria-label="Test progress"/>)
      expect(screen.getByText(/0/)).toBeInTheDocument()
    })

    it('displays 100% when value is 100', () => {
      render(<Progress value={100} detailed aria-label="Test progress"/>)
      expect(screen.getByText(/100/)).toBeInTheDocument()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has progressbar role', () => {
      render(<Progress value={50} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('sets aria-valuenow correctly', () => {
      render(<Progress value={75} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75')
    })

    it('sets aria-valuemin to 0', () => {
      render(<Progress value={50} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemin', '0')
    })

    it('sets aria-valuemax to 100', () => {
      render(<Progress value={50} aria-label="Test progress"/>)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '100')
    })

    it('supports aria-label', () => {
      render(<Progress value={50} aria-label="Upload progress"/>)
      expect(screen.getByLabelText('Upload progress')).toBeInTheDocument()
    })

    it('supports aria-labelledby', () => {
      render(
        <>
          <span id="progress-label">File upload</span>
          <Progress value={50} aria-labelledby="progress-label"/>
        </>
      )
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-labelledby', 'progress-label')
    })
  })

  // Bar width
  describe('bar width', () => {
    it('sets bar width based on value', () => {
      const { container } = render(<Progress value={75} aria-label="Test progress"/>)
      const bar = container.querySelector('[style*="width"]')

      expect(bar).toHaveStyle({ width: '75%' })
    })

    it('sets bar width to 0% for value 0', () => {
      const { container } = render(<Progress value={0} aria-label="Test progress"/>)
      const bar = container.querySelector('[style*="width"]')

      expect(bar).toHaveStyle({ width: '0%' })
    })

    it('sets bar width to 100% for value 100', () => {
      const { container } = render(<Progress value={100} aria-label="Test progress"/>)
      const bar = container.querySelector('[style*="width"]')

      expect(bar).toHaveStyle({ width: '100%' })
    })
  })
})
