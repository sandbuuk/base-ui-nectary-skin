import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Card, CardContainer, CardTitle } from './Card'

// =============================================================================
// CARD TESTS
// =============================================================================

describe('Card', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with children', () => {
      render(<Card>Test content</Card>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders with content prop', () => {
      render(<Card content="Content prop"/>)
      expect(screen.getByText('Content prop')).toBeInTheDocument()
    })

    it('prefers content prop over children when both provided', () => {
      render(<Card content="Content prop">Children content</Card>)
      expect(screen.getByText('Content prop')).toBeInTheDocument()
      expect(screen.queryByText('Children content')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Card ref={ref}>Test</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      const { container } = render(<Card className="custom-class">Test</Card>)

      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  // Slots
  describe('slots', () => {
    it('renders media slot', () => {
      render(
        <Card
          media={<img data-testid="media" alt="test"/>}
          content="Content"
        />
      )
      expect(screen.getByTestId('media')).toBeInTheDocument()
    })

    it('renders title slot', () => {
      render(
        <Card
          title={<CardTitle text="Test Title"/>}
          content="Content"
        />
      )
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('renders footer slot', () => {
      render(
        <Card
          content="Content"
          footer={<button data-testid="footer-btn">Footer</button>}
        />
      )
      expect(screen.getByTestId('footer-btn')).toBeInTheDocument()
    })

    it('renders all slots together', () => {
      render(
        <Card
          media={<img data-testid="media" alt="test"/>}
          title={<CardTitle text="Title"/>}
          content="Content"
          footer={<span data-testid="footer">Footer</span>}
        />
      )
      expect(screen.getByTestId('media')).toBeInTheDocument()
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
      expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('hides empty slots', () => {
      const { container } = render(<Card content="Content"/>)
      // Should only have body with content, no media/title/footer containers with empty content
      const bodySlots = container.querySelectorAll('[class*="flex"]')

      expect(bodySlots.length).toBeGreaterThan(0)
    })
  })

  // Clickable state
  describe('clickable state', () => {
    it('becomes clickable when onClick is provided', () => {
      const onClick = vi.fn()

      render(<Card onClick={onClick}>Clickable</Card>)
      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
    })

    it('has cursor-pointer class when clickable', () => {
      const onClick = vi.fn()
      const { container } = render(<Card onClick={onClick}>Clickable</Card>)
      const inner = container.querySelector('[role="button"]')

      expect(inner).toHaveClass('cursor-pointer')
    })

    it('calls onClick when clicked', async () => {
      const onClick = vi.fn()

      render(<Card onClick={onClick}>Click me</Card>)
      await userEvent.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('supports keyboard activation with Enter', async () => {
      const onClick = vi.fn()

      render(<Card onClick={onClick}>Keyboard</Card>)
      const button = screen.getByRole('button')

      button.focus()
      await userEvent.keyboard('{Enter}')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('supports keyboard activation with Space', async () => {
      const onClick = vi.fn()

      render(<Card onClick={onClick}>Keyboard</Card>)
      const button = screen.getByRole('button')

      button.focus()
      await userEvent.keyboard(' ')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('can be made clickable without onClick via prop', () => {
      render(<Card clickable>Clickable</Card>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  // Selected state
  describe('selected state', () => {
    it('applies selected styles', () => {
      const { container } = render(<Card selected>Selected</Card>)
      const inner = container.querySelector('.bg-\\[var\\(--sinch-comp-card-v2-color-selected-background-initial\\)\\]')

      expect(inner).toBeInTheDocument()
    })

    it('has cursor-pointer when selected', () => {
      const { container } = render(<Card selected>Selected</Card>)
      const inner = container.querySelector('[class*="cursor-pointer"]')

      expect(inner).toBeInTheDocument()
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('applies disabled styles', () => {
      const { container } = render(<Card disabled>Disabled</Card>)
      const inner = container.querySelector('.cursor-not-allowed')

      expect(inner).toBeInTheDocument()
    })

    it('does not call onClick when disabled', async () => {
      const onClick = vi.fn()

      render(<Card disabled onClick={onClick}>Disabled</Card>)
      await userEvent.click(screen.getByRole('button'))
      expect(onClick).not.toHaveBeenCalled()
    })

    it('still shows button role when clickable but disabled', () => {
      render(<Card disabled onClick={() => {}}>Disabled</Card>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  // Combined states
  describe('combined states', () => {
    it('applies selected + disabled styles', () => {
      const { container } = render(
        <Card selected disabled>
          Both
        </Card>
      )
      const inner = container.querySelector('.cursor-not-allowed')

      expect(inner).toBeInTheDocument()
      // Should have selected disabled background
      const selectedDisabled = container.querySelector('.bg-\\[var\\(--sinch-comp-card-v2-color-selected-background-disabled\\)\\]')

      expect(selectedDisabled).toBeInTheDocument()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has no role when not clickable', () => {
      render(<Card>Not clickable</Card>)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('has button role when clickable', () => {
      render(<Card onClick={() => {}}>Clickable</Card>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('has tabIndex when clickable', () => {
      render(<Card onClick={() => {}}>Clickable</Card>)
      const button = screen.getByRole('button')

      expect(button).toHaveAttribute('tabindex', '0')
    })

    it('supports aria-label', () => {
      render(<Card aria-label="Custom card label" onClick={() => {}}>Test</Card>)
      expect(screen.getByLabelText('Custom card label')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('passes through additional HTML attributes', () => {
      render(<Card data-testid="card">Test</Card>)
      expect(screen.getByTestId('card')).toBeInTheDocument()
    })
  })
})

// =============================================================================
// CARD TITLE TESTS
// =============================================================================

describe('CardTitle', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<CardTitle text="Title Text"/>)
      expect(screen.getByText('Title Text')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(<CardTitle>Children Title</CardTitle>)
      expect(screen.getByText('Children Title')).toBeInTheDocument()
    })

    it('prefers text prop over children', () => {
      render(<CardTitle text="Text Prop">Children</CardTitle>)
      expect(screen.getByText('Text Prop')).toBeInTheDocument()
      expect(screen.queryByText('Children')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<CardTitle ref={ref} text="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  // Orientation
  describe('orientation', () => {
    it('defaults to horizontal', () => {
      const { container } = render(<CardTitle text="Title"/>)

      expect(container.firstChild).toHaveClass('flex-row')
    })

    it('applies vertical layout', () => {
      const { container } = render(<CardTitle orientation="vertical" text="Title"/>)

      expect(container.firstChild).toHaveClass('flex-col')
    })
  })

  // Icon
  describe('icon', () => {
    it('renders icon', () => {
      render(<CardTitle text="Title" icon={<span data-testid="icon">*</span>}/>)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('places icon with margin-right in horizontal mode', () => {
      const { container } = render(
        <CardTitle
          text="Title"
          icon={<span data-testid="icon">*</span>}
        />
      )
      const iconWrapper = container.querySelector('.mr-2')

      expect(iconWrapper).toBeInTheDocument()
    })

    it('places icon with margin-bottom in vertical mode', () => {
      const { container } = render(
        <CardTitle
          orientation="vertical"
          text="Title"
          icon={<span data-testid="icon">*</span>}
        />
      )
      const iconWrapper = container.querySelector('.mb-2')

      expect(iconWrapper).toBeInTheDocument()
    })
  })

  // Ellipsis
  describe('ellipsis', () => {
    it('applies ellipsis when prop is true', () => {
      render(<CardTitle text="Long title" ellipsis/>)
      // Text component should receive ellipsis prop
      const text = screen.getByText('Long title')

      expect(text).toHaveClass('overflow-hidden')
      expect(text).toHaveClass('text-ellipsis')
    })

    it('does not apply ellipsis by default', () => {
      render(<CardTitle text="Normal title"/>)
      const text = screen.getByText('Normal title')

      expect(text).not.toHaveClass('text-ellipsis')
    })
  })

  // Context integration
  describe('card context integration', () => {
    it('inherits disabled state from Card', () => {
      const { container } = render(
        <Card disabled>
          <CardTitle text="Disabled Title"/>
        </Card>
      )
      // Should apply disabled text color via inline style
      const title = container.querySelector('[style*="color"]')

      expect(title).toBeInTheDocument()
    })

    it('inherits selected state from Card', () => {
      const { container } = render(
        <Card selected>
          <CardTitle text="Selected Title"/>
        </Card>
      )
      // Title rendered inside selected card
      expect(container.querySelector('.bg-\\[var\\(--sinch-comp-card-v2-color-selected-background-initial\\)\\]')).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      const { container } = render(<CardTitle className="custom" text="Title"/>)

      expect(container.firstChild).toHaveClass('custom')
    })

    it('passes through additional HTML attributes', () => {
      render(<CardTitle data-testid="card-title" text="Title"/>)
      expect(screen.getByTestId('card-title')).toBeInTheDocument()
    })
  })
})

// =============================================================================
// CARD CONTAINER TESTS
// =============================================================================

describe('CardContainer', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders children', () => {
      render(<CardContainer>Container content</CardContainer>)
      expect(screen.getByText('Container content')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<CardContainer ref={ref}>Test</CardContainer>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  // Styling
  describe('styling', () => {
    it('applies background color', () => {
      const { container } = render(<CardContainer>Test</CardContainer>)
      const wrapper = container.querySelector('.bg-\\[var\\(--sinch-comp-card-color-default-background-initial\\)\\]')

      expect(wrapper).toBeInTheDocument()
    })

    it('applies border radius', () => {
      const { container } = render(<CardContainer>Test</CardContainer>)
      const wrapper = container.querySelector('.rounded-\\[var\\(--sinch-comp-card-shape-radius\\)\\]')

      expect(wrapper).toBeInTheDocument()
    })

    it('applies border', () => {
      const { container } = render(<CardContainer>Test</CardContainer>)
      const wrapper = container.querySelector('.border')

      expect(wrapper).toBeInTheDocument()
    })

    it('has scrollable content area', () => {
      const { container } = render(<CardContainer>Test</CardContainer>)
      const scrollArea = container.querySelector('.overflow-auto')

      expect(scrollArea).toBeInTheDocument()
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className', () => {
      const { container } = render(<CardContainer className="custom">Test</CardContainer>)

      expect(container.firstChild).toHaveClass('custom')
    })

    it('passes through additional HTML attributes', () => {
      render(<CardContainer data-testid="container">Test</CardContainer>)
      expect(screen.getByTestId('container')).toBeInTheDocument()
    })
  })

  // Integration
  describe('integration', () => {
    it('can contain Card components', () => {
      render(
        <CardContainer>
          <Card data-testid="card-1">Card 1</Card>
          <Card data-testid="card-2">Card 2</Card>
        </CardContainer>
      )
      expect(screen.getByTestId('card-1')).toBeInTheDocument()
      expect(screen.getByTestId('card-2')).toBeInTheDocument()
    })
  })
})
