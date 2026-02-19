import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  describe('rendering', () => {
    it('renders text content', () => {
      render(<Text>Hello World</Text>)
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('renders as paragraph by default', () => {
      render(<Text>Test</Text>)

      const element = screen.getByText('Test')

      expect(element.tagName).toBe('P')
    })

    it('renders as span when inline', () => {
      render(<Text inline>Test</Text>)

      const element = screen.getByText('Test')

      expect(element.tagName).toBe('SPAN')
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Text ref={ref}>Test</Text>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('renders children of various types', () => {
      render(
        <Text>
          Text with <strong>bold</strong> content
        </Text>
      )
      expect(screen.getByText(/Text with/)).toBeInTheDocument()
      expect(screen.getByText('bold')).toBeInTheDocument()
    })
  })

  describe('type variants', () => {
    it('applies medium type by default', () => {
      render(<Text>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-m)]')
    })

    it('applies medium type font', () => {
      render(<Text type="m">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-m)]')
    })

    it('applies small type font', () => {
      render(<Text type="s">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-s)]')
    })

    it('applies extra small type font', () => {
      render(<Text type="xs">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-xs)]')
    })

    it('applies extra extra small type font', () => {
      render(<Text type="xxs">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-xxs)]')
    })
  })

  describe('inline prop', () => {
    it('applies block display by default', () => {
      render(<Text>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('block')
    })

    it('applies inline display when inline is true', () => {
      render(<Text inline>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('inline')
    })

    it('applies block display when inline is false', () => {
      render(<Text inline={false}>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('block')
    })
  })

  describe('emphasized prop', () => {
    it('applies emphasized font for medium type', () => {
      render(
        <Text type="m" emphasized>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-emphasize)]')
    })

    it('applies emphasized font for small type', () => {
      render(
        <Text type="s" emphasized>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).toHaveClass(
        '[font:var(--sinch-sys-font-body-emphasize-s)]'
      )
    })

    it('does not apply emphasized font for xs type', () => {
      render(
        <Text type="xs" emphasized>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).not.toHaveClass(
        '[font:var(--sinch-sys-font-body-emphasize)]'
      )
      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-xs)]')
    })

    it('does not apply emphasized font for xxs type', () => {
      render(
        <Text type="xxs" emphasized>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).not.toHaveClass(
        '[font:var(--sinch-sys-font-body-emphasize)]'
      )
      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-xxs)]')
    })
  })

  describe('ellipsis prop', () => {
    it('does not apply ellipsis classes by default', () => {
      render(<Text>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).not.toHaveClass('overflow-hidden')
      expect(element).not.toHaveClass('text-ellipsis')
      expect(element).not.toHaveClass('whitespace-nowrap')
    })

    it('applies ellipsis classes when ellipsis is true', () => {
      render(<Text ellipsis>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('overflow-hidden')
      expect(element).toHaveClass('text-ellipsis')
      expect(element).toHaveClass('whitespace-nowrap')
    })
  })

  describe('as prop (polymorphic rendering)', () => {
    it('renders as paragraph by default', () => {
      render(<Text>Test</Text>)
      expect(screen.getByText('Test').tagName).toBe('P')
    })

    it('renders as span when as="span"', () => {
      render(<Text as="span">Test</Text>)
      expect(screen.getByText('Test').tagName).toBe('SPAN')
    })

    it('renders as div when as="div"', () => {
      render(<Text as="div">Test</Text>)
      expect(screen.getByText('Test').tagName).toBe('DIV')
    })

    it('renders as label when as="label"', () => {
      render(<Text as="label">Test</Text>)
      expect(screen.getByText('Test').tagName).toBe('LABEL')
    })

    it('renders as p when as="p" even if inline', () => {
      render(
        <Text as="p" inline>
          Test
        </Text>
      )
      expect(screen.getByText('Test').tagName).toBe('P')
    })
  })

  describe('styling', () => {
    it('applies text-foreground class for default color', () => {
      render(<Text>Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('text-foreground')
    })

    it('applies custom className', () => {
      render(<Text className="custom-class">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      render(<Text className="text-primary">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveClass('text-primary')
      expect(element).toHaveClass('block')
    })
  })

  describe('props forwarding', () => {
    it('forwards data attributes', () => {
      render(<Text data-testid="my-text">Test</Text>)
      expect(screen.getByTestId('my-text')).toBeInTheDocument()
    })

    it('forwards id attribute', () => {
      render(<Text id="text-1">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveAttribute('id', 'text-1')
    })

    it('forwards title attribute', () => {
      render(<Text title="Tooltip text">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveAttribute('title', 'Tooltip text')
    })

    it('forwards aria-label attribute', () => {
      render(<Text aria-label="Accessible label">Test</Text>)

      const element = screen.getByText('Test')

      expect(element).toHaveAttribute('aria-label', 'Accessible label')
    })

    it('forwards onClick handler', () => {
      const handleClick = vi.fn()

      render(<Text onClick={handleClick}>Test</Text>)
      screen.getByText('Test').click()
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('combined props', () => {
    it('handles type, inline, and ellipsis together', () => {
      render(
        <Text type="s" inline ellipsis>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-s)]')
      expect(element).toHaveClass('inline')
      expect(element).toHaveClass('overflow-hidden')
      expect(element.tagName).toBe('SPAN')
    })

    it('handles type and emphasized together', () => {
      render(
        <Text type="s" emphasized>
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element).toHaveClass(
        '[font:var(--sinch-sys-font-body-emphasize-s)]'
      )
    })

    it('handles all props together', () => {
      render(
        <Text type="m" inline emphasized ellipsis as="span" className="custom">
          Test
        </Text>
      )

      const element = screen.getByText('Test')

      expect(element.tagName).toBe('SPAN')
      expect(element).toHaveClass('[font:var(--sinch-sys-font-body-emphasize)]')
      expect(element).toHaveClass('inline')
      expect(element).toHaveClass('overflow-hidden')
      expect(element).toHaveClass('custom')
    })
  })
})
