import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Grid, type GridStyleOverrides } from './Grid'
import { GridItem } from './GridItem'

describe('Grid', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<Grid>Test Content</Grid>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders multiple children', () => {
      render(
        <Grid>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </Grid>
      )
      expect(screen.getByText('Child 1')).toBeInTheDocument()
      expect(screen.getByText('Child 2')).toBeInTheDocument()
      expect(screen.getByText('Child 3')).toBeInTheDocument()
    })

    it('renders as a div element', () => {
      render(<Grid data-testid="grid">Content</Grid>)
      const grid = screen.getByTestId('grid')
      expect(grid.tagName).toBe('DIV')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the DOM element', () => {
      const ref = { current: null }
      render(<Grid ref={ref}>Test</Grid>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('allows ref manipulation', () => {
      const ref = { current: null as HTMLDivElement | null }
      render(<Grid ref={ref}>Test</Grid>)
      expect(ref.current?.tagName).toBe('DIV')
    })
  })

  describe('className handling', () => {
    it('applies custom className', () => {
      render(<Grid className="custom-class" data-testid="grid">Test</Grid>)
      expect(screen.getByTestId('grid')).toHaveClass('custom-class')
    })

    it('preserves base grid classes with custom className', () => {
      render(<Grid className="custom-class" data-testid="grid">Test</Grid>)
      const grid = screen.getByTestId('grid')
      expect(grid).toHaveClass('grid')
      expect(grid).toHaveClass('custom-class')
    })

    it('applies multiple custom classes', () => {
      render(<Grid className="class-a class-b" data-testid="grid">Test</Grid>)
      const grid = screen.getByTestId('grid')
      expect(grid).toHaveClass('class-a')
      expect(grid).toHaveClass('class-b')
    })
  })

  describe('style handling', () => {
    it('applies custom style', () => {
      render(
        <Grid style={{ backgroundColor: 'red' }} data-testid="grid">
          Test
        </Grid>
      )
      // Check style attribute directly since jsdom has limitations with toHaveStyle
      expect(screen.getByTestId('grid').style.backgroundColor).toBe('red')
    })

    it('applies CSS variable overrides', () => {
      const style: GridStyleOverrides = {
        '--sinch-comp-grid-columns-xl': '6',
      }
      render(
        <Grid style={style} data-testid="grid">
          Test
        </Grid>
      )
      const grid = screen.getByTestId('grid')
      expect(grid).toHaveStyle({ '--sinch-comp-grid-columns-xl': '6' })
    })

    it('applies multiple CSS variable overrides', () => {
      const style: GridStyleOverrides = {
        '--sinch-comp-grid-columns-xl': '6',
        '--sinch-comp-grid-gutter-xl': '2rem',
        '--sinch-comp-grid-margin-xl': '1rem',
      }
      render(
        <Grid style={style} data-testid="grid">
          Test
        </Grid>
      )
      const grid = screen.getByTestId('grid')
      expect(grid).toHaveStyle({
        '--sinch-comp-grid-columns-xl': '6',
        '--sinch-comp-grid-gutter-xl': '2rem',
        '--sinch-comp-grid-margin-xl': '1rem',
      })
    })
  })

  describe('HTML attributes', () => {
    it('passes through data attributes', () => {
      render(
        <Grid data-testid="grid" data-custom="value">
          Test
        </Grid>
      )
      expect(screen.getByTestId('grid')).toHaveAttribute('data-custom', 'value')
    })

    it('passes through aria attributes', () => {
      render(
        <Grid aria-label="Grid layout" data-testid="grid">
          Test
        </Grid>
      )
      expect(screen.getByTestId('grid')).toHaveAttribute(
        'aria-label',
        'Grid layout'
      )
    })

    it('passes through role attribute', () => {
      render(
        <Grid role="region" data-testid="grid">
          Test
        </Grid>
      )
      expect(screen.getByTestId('grid')).toHaveAttribute('role', 'region')
    })

    it('passes through id attribute', () => {
      render(
        <Grid id="my-grid" data-testid="grid">
          Test
        </Grid>
      )
      expect(screen.getByTestId('grid')).toHaveAttribute('id', 'my-grid')
    })
  })

  describe('base styles', () => {
    it('applies grid display class', () => {
      render(<Grid data-testid="grid">Test</Grid>)
      expect(screen.getByTestId('grid')).toHaveClass('grid')
    })
  })
})

describe('GridItem', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <Grid>
          <GridItem>Test Content</GridItem>
        </Grid>
      )
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders as a div element', () => {
      render(
        <Grid>
          <GridItem data-testid="item">Test</GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item').tagName).toBe('DIV')
    })

    it('renders complex children', () => {
      render(
        <Grid>
          <GridItem>
            <div>
              <span>Nested Content</span>
            </div>
          </GridItem>
        </Grid>
      )
      expect(screen.getByText('Nested Content')).toBeInTheDocument()
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the DOM element', () => {
      const ref = { current: null }
      render(
        <Grid>
          <GridItem ref={ref}>Test</GridItem>
        </Grid>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('className handling', () => {
    it('applies custom className', () => {
      render(
        <Grid>
          <GridItem className="custom-class" data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('custom-class')
    })

    it('preserves base classes with custom className', () => {
      render(
        <Grid>
          <GridItem className="custom" data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      const item = screen.getByTestId('item')
      expect(item).toHaveClass('block')
      expect(item).toHaveClass('custom')
    })
  })

  describe('column span - xl breakpoint', () => {
    it('applies default span of 12 when no xl prop', () => {
      render(
        <Grid>
          <GridItem data-testid="item">Test</GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('col-span-12')
    })

    it('applies xl span when specified', () => {
      render(
        <Grid>
          <GridItem xl={6} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('col-span-6')
    })

    it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const)(
      'applies xl=%i correctly',
      (span) => {
        render(
          <Grid>
            <GridItem xl={span} data-testid="item">
              Test
            </GridItem>
          </Grid>
        )
        expect(screen.getByTestId('item')).toHaveClass(`col-span-${span}`)
      }
    )
  })

  describe('column span - l breakpoint', () => {
    it('applies default span of 12 when no l prop', () => {
      render(
        <Grid>
          <GridItem data-testid="item">Test</GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[1439px]:col-span-12')
    })

    it('applies l span when specified', () => {
      render(
        <Grid>
          <GridItem l={8} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[1439px]:col-span-8')
    })
  })

  describe('column span - m breakpoint', () => {
    it('applies default span of 8 when no m prop', () => {
      render(
        <Grid>
          <GridItem data-testid="item">Test</GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[1023px]:col-span-8')
    })

    it('applies m span when specified', () => {
      render(
        <Grid>
          <GridItem m={4} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[1023px]:col-span-4')
    })
  })

  describe('column span - s breakpoint', () => {
    it('applies default span of 4 when no s prop', () => {
      render(
        <Grid>
          <GridItem data-testid="item">Test</GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[767px]:col-span-4')
    })

    it('applies s span when specified', () => {
      render(
        <Grid>
          <GridItem s={2} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveClass('max-[767px]:col-span-2')
    })
  })

  describe('combined responsive spans', () => {
    it('applies all breakpoint spans correctly', () => {
      render(
        <Grid>
          <GridItem xl={12} l={8} m={6} s={4} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      const item = screen.getByTestId('item')
      expect(item).toHaveClass('col-span-12')
      expect(item).toHaveClass('max-[1439px]:col-span-8')
      expect(item).toHaveClass('max-[1023px]:col-span-6')
      expect(item).toHaveClass('max-[767px]:col-span-4')
    })

    it('applies partial breakpoint spans with defaults', () => {
      render(
        <Grid>
          <GridItem xl={6} m={4} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      const item = screen.getByTestId('item')
      expect(item).toHaveClass('col-span-6') // xl specified
      expect(item).toHaveClass('max-[1439px]:col-span-12') // l default
      expect(item).toHaveClass('max-[1023px]:col-span-4') // m specified
      expect(item).toHaveClass('max-[767px]:col-span-4') // s default
    })
  })

  describe('HTML attributes', () => {
    it('passes through data attributes', () => {
      render(
        <Grid>
          <GridItem data-testid="item" data-custom="value">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveAttribute('data-custom', 'value')
    })

    it('passes through aria attributes', () => {
      render(
        <Grid>
          <GridItem aria-label="Grid item" data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveAttribute(
        'aria-label',
        'Grid item'
      )
    })

    it('passes through id attribute', () => {
      render(
        <Grid>
          <GridItem id="my-item" data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      expect(screen.getByTestId('item')).toHaveAttribute('id', 'my-item')
    })
  })

  describe('style handling', () => {
    it('applies custom style', () => {
      render(
        <Grid>
          <GridItem style={{ backgroundColor: 'blue' }} data-testid="item">
            Test
          </GridItem>
        </Grid>
      )
      // Check style attribute directly since jsdom has limitations with toHaveStyle
      expect(screen.getByTestId('item').style.backgroundColor).toBe('blue')
    })
  })
})

describe('Grid + GridItem integration', () => {
  it('renders a complete grid layout', () => {
    render(
      <Grid data-testid="grid">
        <GridItem xl={6} data-testid="item-1">
          Left
        </GridItem>
        <GridItem xl={6} data-testid="item-2">
          Right
        </GridItem>
      </Grid>
    )

    expect(screen.getByTestId('grid')).toHaveClass('grid')
    expect(screen.getByTestId('item-1')).toHaveClass('col-span-6')
    expect(screen.getByTestId('item-2')).toHaveClass('col-span-6')
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('supports nested grids', () => {
    render(
      <Grid data-testid="outer-grid">
        <GridItem xl={6}>
          <Grid data-testid="inner-grid">
            <GridItem xl={6} data-testid="inner-item">
              Nested
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    )

    expect(screen.getByTestId('outer-grid')).toHaveClass('grid')
    expect(screen.getByTestId('inner-grid')).toHaveClass('grid')
    expect(screen.getByTestId('inner-item')).toHaveClass('col-span-6')
    expect(screen.getByText('Nested')).toBeInTheDocument()
  })

  it('renders many grid items', () => {
    render(
      <Grid>
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i} xl={1} data-testid={`item-${i}`}>
            {i}
          </GridItem>
        ))}
      </Grid>
    )

    for (let i = 0; i < 12; i++) {
      expect(screen.getByTestId(`item-${i}`)).toHaveClass('col-span-1')
    }
  })
})
