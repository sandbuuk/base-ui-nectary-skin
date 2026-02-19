import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { List } from './List'
import { ListItem } from './ListItem'

describe('List', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<List>Test content</List>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders with ListItem children', () => {
      render(
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </List>
      )
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    it('renders empty list', () => {
      render(<List data-testid="list" />)
      expect(screen.getByTestId('list')).toBeInTheDocument()
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(<List ref={ref}>Test</List>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(<List className="custom-class" data-testid="list">Test</List>)
      expect(screen.getByTestId('list')).toHaveClass('custom-class')
    })

    it('spreads additional props', () => {
      render(<List data-testid="list" aria-label="My list">Test</List>)
      expect(screen.getByTestId('list')).toHaveAttribute('aria-label', 'My list')
    })
  })

  describe('accessibility', () => {
    it('has role="list"', () => {
      render(<List>Test</List>)
      expect(screen.getByRole('list')).toBeInTheDocument()
    })
  })
})

describe('ListItem', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<ListItem>Item content</ListItem>)
      expect(screen.getByText('Item content')).toBeInTheDocument()
    })

    it('renders complex children', () => {
      render(
        <ListItem>
          <div data-testid="complex">
            <span>Title</span>
            <span>Subtitle</span>
          </div>
        </ListItem>
      )
      expect(screen.getByTestId('complex')).toBeInTheDocument()
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Subtitle')).toBeInTheDocument()
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(<ListItem ref={ref}>Test</ListItem>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(<ListItem className="custom-class" data-testid="item">Test</ListItem>)
      expect(screen.getByTestId('item')).toHaveClass('custom-class')
    })

    it('spreads additional props', () => {
      render(<ListItem data-testid="item" id="my-item">Test</ListItem>)
      expect(screen.getByTestId('item')).toHaveAttribute('id', 'my-item')
    })
  })

  describe('events', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn()
      render(<ListItem onClick={handleClick}>Clickable item</ListItem>)
      await userEvent.click(screen.getByText('Clickable item'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessibility', () => {
    it('has role="listitem"', () => {
      render(<ListItem>Test</ListItem>)
      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })
  })
})

describe('List + ListItem integration', () => {
  it('renders list with multiple items', () => {
    render(
      <List>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('renders list with single item', () => {
    render(
      <List>
        <ListItem>Only item</ListItem>
      </List>
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })

  it('handles click on individual items', async () => {
    const handleClick1 = vi.fn()
    const handleClick2 = vi.fn()
    render(
      <List>
        <ListItem onClick={handleClick1}>Item 1</ListItem>
        <ListItem onClick={handleClick2}>Item 2</ListItem>
      </List>
    )
    await userEvent.click(screen.getByText('Item 1'))
    expect(handleClick1).toHaveBeenCalledTimes(1)
    expect(handleClick2).not.toHaveBeenCalled()
  })
})
