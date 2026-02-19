import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Title } from './Title'

describe('Title', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text content', () => {
      render(<Title>Hello World</Title>)
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Title ref={ref}>Test</Title>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<Title className="custom-class">Test</Title>)
      expect(screen.getByText('Test')).toHaveClass('custom-class')
    })

    it('passes through additional props', () => {
      render(<Title data-testid="my-title" id="title-1">Test</Title>)

      const title = screen.getByTestId('my-title')

      expect(title).toHaveAttribute('id', 'title-1')
    })
  })

  // Type/size variants
  describe('type variants', () => {
    it('applies xl type styles', () => {
      render(<Title type="xl">XL Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('[font:var(--sinch-sys-font-desktop-title-xl)]')
    })

    it('applies l type styles', () => {
      render(<Title type="l">Large Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('[font:var(--sinch-sys-font-desktop-title-l)]')
    })

    it('applies m type styles by default', () => {
      render(<Title>Medium Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('[font:var(--sinch-sys-font-desktop-title-m)]')
    })

    it('applies s type styles', () => {
      render(<Title type="s">Small Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('[font:var(--sinch-sys-font-desktop-title-s)]')
    })

    it('applies xs type styles', () => {
      render(<Title type="xs">Extra Small Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('[font:var(--sinch-sys-font-desktop-title-xs)]')
    })
  })

  // Semantic levels and heading elements
  describe('semantic levels', () => {
    it('defaults xl type to h1', () => {
      render(<Title type="xl">XL Title</Title>)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('defaults l type to h2', () => {
      render(<Title type="l">Large Title</Title>)
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('defaults m type to h3', () => {
      render(<Title type="m">Medium Title</Title>)
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('defaults s type to h4', () => {
      render(<Title type="s">Small Title</Title>)
      expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
    })

    it('defaults xs type to h5', () => {
      render(<Title type="xs">XS Title</Title>)
      expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    })

    it('allows overriding level independently of type', () => {
      render(<Title type="xs" level="1">XS visual, H1 semantic</Title>)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('sets aria-level attribute', () => {
      render(<Title level="2">Title</Title>)
      expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '2')
    })
  })

  // Custom element rendering
  describe('as prop', () => {
    it('renders as h1 when as="h1"', () => {
      render(<Title as="h1" type="xs">H1 Element</Title>)

      const heading = screen.getByRole('heading')

      expect(heading.tagName).toBe('H1')
    })

    it('renders as span when as="span"', () => {
      render(<Title as="span">Span Element</Title>)

      const title = screen.getByText('Span Element')

      expect(title.tagName).toBe('SPAN')
    })

    it('renders as div when as="div"', () => {
      render(<Title as="div">Div Element</Title>)

      const title = screen.getByText('Div Element')

      expect(title.tagName).toBe('DIV')
    })

    it('as prop overrides default element from level', () => {
      render(<Title type="xl" as="h6">Override H1</Title>)

      const title = screen.getByRole('heading')

      expect(title.tagName).toBe('H6')
    })
  })

  // Ellipsis
  describe('ellipsis', () => {
    it('does not apply ellipsis styles by default', () => {
      render(<Title>Normal Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).not.toHaveClass('overflow-hidden')
      expect(title).not.toHaveClass('text-ellipsis')
      expect(title).not.toHaveClass('whitespace-nowrap')
    })

    it('applies ellipsis styles when enabled', () => {
      render(<Title ellipsis>Truncated Title</Title>)

      const title = screen.getByRole('heading')

      expect(title).toHaveClass('overflow-hidden')
      expect(title).toHaveClass('text-ellipsis')
      expect(title).toHaveClass('whitespace-nowrap')
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has heading role', () => {
      render(<Title>Accessible Title</Title>)
      expect(screen.getByRole('heading')).toBeInTheDocument()
    })

    it('has correct aria-level for each heading level', () => {
      const { rerender } = render(<Title level="1">Level 1</Title>)

      expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '1')

      rerender(<Title level="3">Level 3</Title>)
      expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '3')

      rerender(<Title level="6">Level 6</Title>)
      expect(screen.getByRole('heading')).toHaveAttribute('aria-level', '6')
    })

    it('supports aria-label', () => {
      render(<Title aria-label="Section header">Title</Title>)
      expect(screen.getByLabelText('Section header')).toBeInTheDocument()
    })

    it('supports aria-describedby', () => {
      render(
        <>
          <Title aria-describedby="desc">Title</Title>
          <p id="desc">Description</p>
        </>
      )
      expect(screen.getByRole('heading')).toHaveAttribute('aria-describedby', 'desc')
    })
  })

  // Base styles
  describe('base styles', () => {
    it('applies block display by default', () => {
      render(<Title>Block Title</Title>)
      expect(screen.getByRole('heading')).toHaveClass('block')
    })

    it('applies text color', () => {
      render(<Title>Colored Title</Title>)
      expect(screen.getByRole('heading')).toHaveClass('text-foreground')
    })

    it('applies letter-spacing', () => {
      render(<Title>Spaced Title</Title>)
      expect(screen.getByRole('heading')).toHaveClass('[letter-spacing:-0.02em]')
    })
  })
})
