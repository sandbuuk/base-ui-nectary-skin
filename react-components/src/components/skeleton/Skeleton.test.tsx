import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'
import { SkeletonItem } from './SkeletonItem'

describe('Skeleton', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <Skeleton>
          <div data-testid="child">Child content</div>
        </Skeleton>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<Skeleton ref={ref}>Content</Skeleton>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<Skeleton className="custom-class" data-testid="skeleton">Content</Skeleton>)
      expect(screen.getByTestId('skeleton')).toHaveClass('custom-class')
    })

    it('passes through additional props', () => {
      render(<Skeleton data-testid="skeleton" id="my-skeleton">Content</Skeleton>)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('id', 'my-skeleton')
    })
  })

  describe('variants', () => {
    it('renders default variant without card styles', () => {
      render(<Skeleton data-testid="skeleton">Content</Skeleton>)

      const skeleton = screen.getByTestId('skeleton')

      expect(skeleton).not.toHaveClass('p-4')
      expect(skeleton).not.toHaveClass('border')
    })

    it('renders card variant with border and padding', () => {
      render(<Skeleton card data-testid="skeleton">Content</Skeleton>)

      const skeleton = screen.getByTestId('skeleton')

      expect(skeleton).toHaveClass('p-4')
      expect(skeleton).toHaveClass('border')
      expect(skeleton).toHaveClass('rounded-lg')
    })

    it('renders card=false without card styles', () => {
      render(<Skeleton card={false} data-testid="skeleton">Content</Skeleton>)

      const skeleton = screen.getByTestId('skeleton')

      expect(skeleton).not.toHaveClass('p-4')
    })
  })

  describe('accessibility', () => {
    it('has status role', () => {
      render(<Skeleton>Content</Skeleton>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('has aria-label for loading state', () => {
      render(<Skeleton>Content</Skeleton>)
      expect(screen.getByLabelText('Loading')).toBeInTheDocument()
    })
  })
})

describe('SkeletonItem', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<SkeletonItem data-testid="item"/>)
      expect(screen.getByTestId('item')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<SkeletonItem ref={ref}/>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<SkeletonItem className="custom-class" data-testid="item"/>)
      expect(screen.getByTestId('item')).toHaveClass('custom-class')
    })

    it('is hidden from screen readers', () => {
      render(<SkeletonItem data-testid="item"/>)
      expect(screen.getByTestId('item')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('sizes', () => {
    it('applies xs size classes', () => {
      render(<SkeletonItem size="xs" data-testid="item"/>)

      const item = screen.getByTestId('item')

      expect(item).toHaveClass('h-xs')
      expect(item).toHaveClass('rounded-xs')
    })

    it('applies sm size classes', () => {
      render(<SkeletonItem size="sm" data-testid="item"/>)

      const item = screen.getByTestId('item')

      expect(item).toHaveClass('h-sm')
      expect(item).toHaveClass('rounded-sm')
    })

    it('applies md size classes (default)', () => {
      render(<SkeletonItem data-testid="item"/>)

      const item = screen.getByTestId('item')

      expect(item).toHaveClass('h-md')
      expect(item).toHaveClass('rounded-md')
    })

    it('applies lg size classes', () => {
      render(<SkeletonItem size="lg" data-testid="item"/>)

      const item = screen.getByTestId('item')

      expect(item).toHaveClass('h-lg')
      expect(item).toHaveClass('rounded-lg')
    })
  })

  describe('width prop', () => {
    it('applies string width to style', () => {
      render(<SkeletonItem width="50%" data-testid="item"/>)
      expect(screen.getByTestId('item')).toHaveStyle({ width: '50%' })
    })

    it('applies numeric width as pixels', () => {
      render(<SkeletonItem width={200} data-testid="item"/>)
      expect(screen.getByTestId('item')).toHaveStyle({ width: '200px' })
    })

    it('merges width with existing style', () => {
      render(
        <SkeletonItem
          width="75%"
          style={{ marginTop: '10px' }}
          data-testid="item"
        />
      )

      const item = screen.getByTestId('item')

      expect(item).toHaveStyle({ width: '75%', marginTop: '10px' })
    })

    it('does not set width style when width is undefined', () => {
      render(<SkeletonItem data-testid="item"/>)

      const item = screen.getByTestId('item')

      // When no width prop is passed, the element should not have an inline width style
      expect(item.style.width).toBe('')
    })
  })

  describe('shimmer animation', () => {
    it('has animation-related classes', () => {
      render(<SkeletonItem data-testid="item"/>)

      const item = screen.getByTestId('item')

      expect(item).toHaveClass('overflow-hidden')
      expect(item).toHaveClass('relative')
    })
  })
})

describe('Skeleton with SkeletonItem', () => {
  it('renders multiple SkeletonItems as children', () => {
    render(
      <Skeleton>
        <SkeletonItem data-testid="item-1"/>
        <SkeletonItem data-testid="item-2"/>
        <SkeletonItem data-testid="item-3"/>
      </Skeleton>
    )
    expect(screen.getByTestId('item-1')).toBeInTheDocument()
    expect(screen.getByTestId('item-2')).toBeInTheDocument()
    expect(screen.getByTestId('item-3')).toBeInTheDocument()
  })

  it('works as a card with SkeletonItems', () => {
    render(
      <Skeleton card data-testid="skeleton">
        <SkeletonItem size="lg" data-testid="item-1"/>
        <SkeletonItem size="sm" data-testid="item-2"/>
      </Skeleton>
    )
    expect(screen.getByTestId('skeleton')).toHaveClass('p-4')
    expect(screen.getByTestId('item-1')).toHaveClass('h-lg')
    expect(screen.getByTestId('item-2')).toHaveClass('h-sm')
  })
})
