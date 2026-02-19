import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Flag } from './Flag'

const FLAG_URL_TEMPLATE = 'https://example.com/flags/%s.png'

describe('Flag', () => {
  describe('rendering', () => {
    it('renders an img element when code and flagUrlTemplate are provided', () => {
      render(<Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('renders nothing when code is empty', () => {
      const { container } = render(<Flag code="" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(container).toBeEmptyDOMElement()
    })

    it('renders nothing when flagUrlTemplate is not provided', () => {
      const { container } = render(<Flag code="us" />)
      expect(container).toBeEmptyDOMElement()
    })

    it('generates correct src URL from template', () => {
      render(<Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/flags/us.png')
    })

    it('replaces %s placeholder with country code', () => {
      render(<Flag code="gb" flagUrlTemplate="https://cdn.test/%s/flag.svg" />)
      expect(screen.getByRole('img')).toHaveAttribute('src', 'https://cdn.test/gb/flag.svg')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the img element', () => {
      const ref = { current: null }
      render(<Flag ref={ref} code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(ref.current).toBeInstanceOf(HTMLImageElement)
    })
  })

  describe('alt text', () => {
    it('uses country code as default alt text', () => {
      render(<Flag code="se" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveAttribute('alt', 'se')
    })

    it('uses custom alt text when provided', () => {
      render(<Flag code="se" alt="Swedish flag" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveAttribute('alt', 'Swedish flag')
    })
  })

  describe('loading', () => {
    it('defaults to lazy loading', () => {
      render(<Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy')
    })

    it('allows overriding loading attribute', () => {
      render(<Flag code="us" loading="eager" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveAttribute('loading', 'eager')
    })
  })

  describe('sizes', () => {
    it('applies xs size classes', () => {
      render(<Flag code="us" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('w-4', 'h-4')
    })

    it('applies sm size classes', () => {
      render(<Flag code="us" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('w-5', 'h-5')
    })

    it('applies md size classes (default)', () => {
      render(<Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('w-6', 'h-6')
    })

    it('applies lg size classes', () => {
      render(<Flag code="us" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('w-8', 'h-8')
    })

    it('applies xl size classes', () => {
      render(<Flag code="us" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('w-10', 'h-10')
    })
  })

  describe('className', () => {
    it('applies custom className', () => {
      render(<Flag code="us" className="custom-class" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      expect(screen.getByRole('img')).toHaveClass('custom-class')
    })

    it('merges custom className with variant classes', () => {
      render(<Flag code="us" size="lg" className="my-flag" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('w-8', 'h-8', 'my-flag')
    })
  })

  describe('base styles', () => {
    it('applies base classes', () => {
      render(<Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />)
      const img = screen.getByRole('img')
      expect(img).toHaveClass('inline-block', 'pointer-events-none', 'object-contain')
    })
  })

  describe('additional props', () => {
    it('passes through additional img attributes', () => {
      render(
        <Flag
          code="us"
          flagUrlTemplate={FLAG_URL_TEMPLATE}
          data-testid="test-flag"
          title="United States"
        />
      )
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('data-testid', 'test-flag')
      expect(img).toHaveAttribute('title', 'United States')
    })
  })
})
