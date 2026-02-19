import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tag } from './Tag'

describe('Tag', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with children content', () => {
      render(<Tag>Test Content</Tag>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders with text prop', () => {
      render(<Tag text="Tag Text"/>)
      expect(screen.getByText('Tag Text')).toBeInTheDocument()
    })

    it('prefers text prop over children', () => {
      render(<Tag text="Text Prop">Children Content</Tag>)
      expect(screen.getByText('Text Prop')).toBeInTheDocument()
      expect(screen.queryByText('Children Content')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Tag ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  // Custom className
  describe('className', () => {
    it('applies custom className', () => {
      const { container } = render(<Tag className="custom-class" text="Test"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      const { container } = render(<Tag className="my-class" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('my-class')
      expect(tag).toHaveClass('inline-flex')
    })
  })

  // Sizes
  describe('sizes', () => {
    it('renders medium size by default', () => {
      const { container } = render(<Tag text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('h-[var(--sinch-comp-tag-size-container-m)]')
    })

    it('renders small size with size="s"', () => {
      const { container } = render(<Tag size="s" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('h-[var(--sinch-comp-tag-size-container-s)]')
    })

    it('renders small size with small prop', () => {
      const { container } = render(<Tag small text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('h-[var(--sinch-comp-tag-size-container-s)]')
    })

    it('small prop takes precedence over size prop', () => {
      const { container } = render(<Tag small size="m" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('h-[var(--sinch-comp-tag-size-container-s)]')
    })
  })

  // Colors
  describe('colors', () => {
    it('uses default color styling without color prop', () => {
      const { container } = render(<Tag text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveClass('bg-[var(--sinch-comp-tag-color-default-background)]')
    })

    it('applies custom color via style', () => {
      const { container } = render(<Tag color="success" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-tag-color-success-background)',
      })
    })

    it('applies text color for custom color', () => {
      const { container } = render(<Tag color="danger" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveStyle({
        color: 'var(--sinch-comp-tag-color-danger-foreground)',
      })
    })

    it('does not override styles for default color', () => {
      const { container } = render(<Tag color="default" text="Test"/>)
      const tag = container.firstChild as HTMLElement

      // Default color uses CSS class, not inline styles
      expect(tag.style.backgroundColor).toBe('')
    })
  })

  // Icon
  describe('icon', () => {
    it('renders icon when provided', () => {
      render(
        <Tag
          text="Test"
          icon={<span data-testid="icon">*</span>}
        />
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('does not render icon wrapper when no icon provided', () => {
      const { container } = render(<Tag text="Test"/>)
      // Only one child span (the text wrapper)
      const spans = container.querySelectorAll('span')

      expect(spans).toHaveLength(1)
    })

    it('renders icon with negative margin', () => {
      const { container } = render(
        <Tag
          text="Test"
          icon={<span data-testid="icon">*</span>}
        />
      )
      const iconWrapper = container.querySelector('.-ml-1')

      expect(iconWrapper).toBeInTheDocument()
    })
  })

  // Ellipsis
  describe('ellipsis', () => {
    it('applies ellipsis classes when enabled', () => {
      const { container } = render(<Tag ellipsis text="Long text content"/>)
      const textSpan = container.querySelector('.text-ellipsis')

      expect(textSpan).toBeInTheDocument()
      expect(textSpan).toHaveClass('overflow-hidden')
      expect(textSpan).toHaveClass('whitespace-nowrap')
    })

    it('does not apply ellipsis classes by default', () => {
      const { container } = render(<Tag text="Normal text"/>)
      const textSpan = container.querySelector('.text-ellipsis')

      expect(textSpan).toBeNull()
    })
  })

  // Custom styles
  describe('custom styles', () => {
    it('merges custom style prop with color styles', () => {
      const { container } = render(
        <Tag
          color="blue"
          text="Test"
          style={{ padding: '10px' }}
        />
      )
      const tag = container.firstChild as HTMLElement

      expect(tag).toHaveStyle({ padding: '10px' })
      expect(tag).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-tag-color-blue-background)',
      })
    })
  })

  // Props spreading
  describe('props spreading', () => {
    it('passes through additional props', () => {
      render(<Tag text="Test" data-testid="custom-tag" aria-label="Custom label"/>)

      const tag = screen.getByTestId('custom-tag')

      expect(tag).toHaveAttribute('aria-label', 'Custom label')
    })

    it('supports onClick handler', () => {
      let clicked = false

      render(<Tag
        text="Clickable"
        onClick={() => {
          clicked = true
        }}
             />)
      screen.getByText('Clickable').parentElement?.click()
      expect(clicked).toBe(true)
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('supports aria-label', () => {
      const { container } = render(<Tag text="Test" aria-label="Status tag"/>)

      expect(container.firstChild).toHaveAttribute('aria-label', 'Status tag')
    })

    it('supports role attribute', () => {
      const { container } = render(<Tag text="Test" role="status"/>)

      expect(container.firstChild).toHaveAttribute('role', 'status')
    })
  })
})
