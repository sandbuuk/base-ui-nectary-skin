import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  describe('rendering', () => {
    it('renders an svg element', () => {
      render(<Spinner/>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('renders with default medium size', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('w-6', 'h-6')
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Spinner ref={ref}/>)
      expect(ref.current).toBeInstanceOf(SVGSVGElement)
    })
  })

  describe('sizes', () => {
    it('applies small size classes', () => {
      render(<Spinner size="s"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('w-4', 'h-4')
    })

    it('applies medium size classes', () => {
      render(<Spinner size="m"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('w-6', 'h-6')
    })

    it('applies large size classes', () => {
      render(<Spinner size="l"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('w-[50px]', 'h-[50px]')
    })

    it('has correct viewBox for small size', () => {
      render(<Spinner size="s"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('viewBox', '0 0 16 16')
    })

    it('has correct viewBox for medium size', () => {
      render(<Spinner size="m"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('has correct viewBox for large size', () => {
      render(<Spinner size="l"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('viewBox', '0 0 50 50')
    })
  })

  describe('animation', () => {
    it('has spin animation class', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('animate-spin')
    })
  })

  describe('styling', () => {
    it('applies custom className', () => {
      render(<Spinner className="custom-class"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      render(<Spinner className="text-primary"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveClass('animate-spin', 'text-primary')
    })
  })

  describe('accessibility', () => {
    it('has role="status"', () => {
      render(<Spinner/>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('has aria-live="polite"', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('aria-live', 'polite')
    })

    it('has aria-busy="true"', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('aria-busy', 'true')
    })

    it('has default aria-label', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('aria-label', 'Loading')
    })

    it('accepts custom aria-label', () => {
      render(<Spinner aria-label="Processing your request"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('aria-label', 'Processing your request')
    })
  })

  describe('SVG structure', () => {
    it('contains a background circle', () => {
      const { container } = render(<Spinner/>)
      const circle = container.querySelector('circle')

      expect(circle).toBeInTheDocument()
      expect(circle).toHaveClass('opacity-30')
    })

    it('contains a foreground path', () => {
      const { container } = render(<Spinner/>)
      const path = container.querySelector('path')

      expect(path).toBeInTheDocument()
      expect(path).toHaveAttribute('stroke-linecap', 'round')
    })

    it('has fill="none"', () => {
      render(<Spinner/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('fill', 'none')
    })
  })

  describe('props forwarding', () => {
    it('forwards data attributes', () => {
      render(<Spinner data-testid="my-spinner"/>)
      expect(screen.getByTestId('my-spinner')).toBeInTheDocument()
    })

    it('forwards id attribute', () => {
      render(<Spinner id="spinner-1"/>)

      const spinner = screen.getByRole('status')

      expect(spinner).toHaveAttribute('id', 'spinner-1')
    })
  })
})
