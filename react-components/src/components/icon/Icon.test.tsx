import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  describe('rendering', () => {
    it('renders with icon name as text content', () => {
      render(<Icon name="circle-check"/>)
      expect(screen.getByText('circle-check')).toBeInTheDocument()
    })

    it('renders a span element', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      expect(icon.tagName).toBe('SPAN')
    })

    it('renders with default medium size', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-6', 'h-6')
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Icon ref={ref} name="bell"/>)
      expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    })
  })

  describe('sizes', () => {
    it('applies extra small size classes', () => {
      render(<Icon name="bell" size="xs"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-4', 'h-4', 'text-[16px]')
    })

    it('applies small size classes', () => {
      render(<Icon name="bell" size="sm"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-5', 'h-5', 'text-[20px]')
    })

    it('applies medium size classes', () => {
      render(<Icon name="bell" size="md"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-6', 'h-6', 'text-[24px]')
    })

    it('applies large size classes', () => {
      render(<Icon name="bell" size="lg"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-8', 'h-8', 'text-[32px]')
    })

    it('applies extra large size classes', () => {
      render(<Icon name="bell" size="xl"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('w-10', 'h-10', 'text-[40px]')
    })
  })

  describe('styling', () => {
    it('applies custom className', () => {
      render(<Icon name="bell" className="custom-class"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      render(<Icon name="bell" className="text-primary"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('inline-block', 'text-primary')
    })

    it('applies inline-block display', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('inline-block')
    })

    it('applies whitespace-nowrap', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('whitespace-nowrap')
    })

    it('applies user-select none', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('select-none')
    })

    it('applies custom style prop', () => {
      render(<Icon name="bell" style={{ marginTop: '10px' }}/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveStyle({ marginTop: '10px' })
    })
  })

  describe('accessibility', () => {
    it('has role="img"', () => {
      render(<Icon name="circle-check"/>)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('has aria-label matching the icon name', () => {
      render(<Icon name="circle-check"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveAttribute('aria-label', 'circle-check')
    })

    it('accepts custom aria-label', () => {
      render(<Icon name="circle-check" aria-label="Success indicator"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveAttribute('aria-label', 'Success indicator')
    })
  })

  describe('icons version', () => {
    it('defaults to icons version 1', () => {
      render(<Icon name="bell"/>)

      const icon = screen.getByRole('img')

      // Version 1 should not have the font family override classes
      expect(icon).not.toHaveClass('font-[var(--sinch-comp-icon-font-family-zero-to-d)]')
      expect(icon).not.toHaveClass('font-[var(--sinch-comp-icon-font-family-e-to-o)]')
      expect(icon).not.toHaveClass('font-[var(--sinch-comp-icon-font-family-p-to-z)]')
    })

    it('applies zero-to-d font family for icons starting with 0-d in version 2', () => {
      render(<Icon name="fa-check" iconsVersion="2"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('font-[var(--sinch-comp-icon-font-family-zero-to-d)]')
    })

    it('applies e-to-o font family for icons starting with e-o in version 2', () => {
      render(<Icon name="fa-heart" iconsVersion="2"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('font-[var(--sinch-comp-icon-font-family-e-to-o)]')
    })

    it('applies p-to-z font family for icons starting with p-z in version 2', () => {
      render(<Icon name="fa-star" iconsVersion="2"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('font-[var(--sinch-comp-icon-font-family-p-to-z)]')
    })

    it('applies zero-to-d font family for icons without fa- prefix starting with 0-d in version 2', () => {
      render(<Icon name="check" iconsVersion="2"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveClass('font-[var(--sinch-comp-icon-font-family-zero-to-d)]')
    })
  })

  describe('props forwarding', () => {
    it('forwards data attributes', () => {
      render(<Icon name="bell" data-testid="my-icon"/>)
      expect(screen.getByTestId('my-icon')).toBeInTheDocument()
    })

    it('forwards id attribute', () => {
      render(<Icon name="bell" id="icon-1"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveAttribute('id', 'icon-1')
    })

    it('forwards title attribute', () => {
      render(<Icon name="bell" title="Notifications"/>)

      const icon = screen.getByRole('img')

      expect(icon).toHaveAttribute('title', 'Notifications')
    })
  })

  describe('different icon names', () => {
    it('renders circle-check icon', () => {
      render(<Icon name="circle-check"/>)
      expect(screen.getByText('circle-check')).toBeInTheDocument()
    })

    it('renders bell icon', () => {
      render(<Icon name="bell"/>)
      expect(screen.getByText('bell')).toBeInTheDocument()
    })

    it('renders envelope icon', () => {
      render(<Icon name="envelope"/>)
      expect(screen.getByText('envelope')).toBeInTheDocument()
    })

    it('renders eye icon', () => {
      render(<Icon name="eye"/>)
      expect(screen.getByText('eye')).toBeInTheDocument()
    })
  })
})
