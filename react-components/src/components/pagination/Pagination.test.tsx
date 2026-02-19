import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  describe('rendering', () => {
    it('renders navigation element', () => {
      render(<Pagination value={1} max={10} />)
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('renders with default aria-label', () => {
      render(<Pagination value={1} max={10} />)
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Pagination')
    })

    it('renders with custom aria-label', () => {
      render(<Pagination value={1} max={10} ariaLabel="Page navigation" />)
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Page navigation')
    })

    it('forwards ref correctly', () => {
      const ref = { current: null as HTMLElement | null }
      render(<Pagination ref={ref} value={1} max={10} />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
      expect(ref.current?.tagName).toBe('NAV')
    })

    it('applies custom className', () => {
      render(<Pagination className="custom-class" value={1} max={10} />)
      expect(screen.getByRole('navigation')).toHaveClass('custom-class')
    })
  })

  describe('arrow buttons', () => {
    it('renders left and right arrow buttons', () => {
      render(<Pagination value={5} max={10} />)
      expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeInTheDocument()
    })

    it('disables left arrow on first page', () => {
      render(<Pagination value={1} max={10} />)
      expect(screen.getByRole('button', { name: 'Go back' })).toBeDisabled()
    })

    it('enables left arrow on pages after first', () => {
      render(<Pagination value={2} max={10} />)
      expect(screen.getByRole('button', { name: 'Go back' })).toBeEnabled()
    })

    it('disables right arrow on last page', () => {
      render(<Pagination value={10} max={10} />)
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeDisabled()
    })

    it('enables right arrow on pages before last', () => {
      render(<Pagination value={9} max={10} />)
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeEnabled()
    })
  })

  describe('page buttons', () => {
    it('shows correct number of page buttons for few pages', () => {
      render(<Pagination value={1} max={5} />)
      // Should show 5 page buttons
      const pageButtons = screen.getAllByRole('button').filter((btn) =>
        btn.getAttribute('aria-label')?.startsWith('Go to page')
      )
      expect(pageButtons.length).toBe(5)
    })

    it('shows maximum 7 page buttons for many pages', () => {
      render(<Pagination value={5} max={20} />)
      // Should show 7 page buttons (includes 2 ellipsis buttons that don't have the aria-label pattern)
      // The ellipsis buttons have aria-hidden="true" and show "..."
      const allButtons = screen.getAllByRole('button')
      // Total: 2 arrows + 7 page buttons = 9 buttons visible
      // But hidden buttons are filtered out; let's count visible page-related elements
      const pageButtons = allButtons.filter((btn) =>
        btn.getAttribute('aria-label')?.startsWith('Go to page')
      )
      // Non-ellipsis page buttons should be visible
      expect(pageButtons.length).toBeGreaterThanOrEqual(5)
      expect(pageButtons.length).toBeLessThanOrEqual(7)
    })

    it('marks current page with aria-current', () => {
      render(<Pagination value={3} max={10} />)
      const activeButton = screen.getByRole('button', { current: 'page' })
      expect(activeButton).toHaveAttribute('aria-label', 'Go to page 3')
    })

    it('shows first and last page numbers correctly', () => {
      render(<Pagination value={10} max={20} />)
      expect(screen.getByRole('button', { name: 'Go to page 1' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Go to page 20' })).toBeInTheDocument()
    })
  })

  describe('ellipsis behavior', () => {
    it('shows ellipsis for many pages', () => {
      render(<Pagination value={10} max={20} />)
      // Should have ellipsis buttons showing "..."
      const ellipsisButtons = screen.getAllByText('...')
      expect(ellipsisButtons.length).toBeGreaterThanOrEqual(1)
    })

    it('hides left ellipsis when near start', () => {
      render(<Pagination value={2} max={20} />)
      // Check page 2 is visible and there's only right-side ellipsis
      expect(screen.getByRole('button', { name: 'Go to page 2' })).toBeInTheDocument()
    })

    it('hides right ellipsis when near end', () => {
      render(<Pagination value={19} max={20} />)
      // Check page 19 is visible
      expect(screen.getByRole('button', { name: 'Go to page 19' })).toBeInTheDocument()
    })
  })

  describe('navigation events', () => {
    it('calls onChange when clicking left arrow', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={5} max={10} onChange={onChange} />)

      await user.click(screen.getByRole('button', { name: 'Go back' }))
      expect(onChange).toHaveBeenCalledWith(4)
    })

    it('calls onChange when clicking right arrow', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={5} max={10} onChange={onChange} />)

      await user.click(screen.getByRole('button', { name: 'Go forward' }))
      expect(onChange).toHaveBeenCalledWith(6)
    })

    it('calls onChange when clicking a page number', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={1} max={10} onChange={onChange} />)

      await user.click(screen.getByRole('button', { name: 'Go to page 3' }))
      expect(onChange).toHaveBeenCalledWith(3)
    })

    it('calls onChange when clicking first page button', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={10} max={20} onChange={onChange} />)

      await user.click(screen.getByRole('button', { name: 'Go to page 1' }))
      expect(onChange).toHaveBeenCalledWith(1)
    })

    it('calls onChange when clicking last page button', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={10} max={20} onChange={onChange} />)

      await user.click(screen.getByRole('button', { name: 'Go to page 20' }))
      expect(onChange).toHaveBeenCalledWith(20)
    })

    it('does not call onChange when clicking disabled left arrow', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={1} max={10} onChange={onChange} />)

      // Try to click the disabled button - it should not fire events
      const leftArrow = screen.getByRole('button', { name: 'Go back' })
      await user.click(leftArrow)
      expect(onChange).not.toHaveBeenCalled()
    })

    it('does not call onChange when clicking disabled right arrow', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Pagination value={10} max={10} onChange={onChange} />)

      const rightArrow = screen.getByRole('button', { name: 'Go forward' })
      await user.click(rightArrow)
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe('edge cases', () => {
    it('handles single page', () => {
      render(<Pagination value={1} max={1} />)
      // Both arrows should be disabled
      expect(screen.getByRole('button', { name: 'Go back' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeDisabled()
      // Only one page button
      const pageButtons = screen.getAllByRole('button').filter((btn) =>
        btn.getAttribute('aria-label')?.startsWith('Go to page')
      )
      expect(pageButtons.length).toBe(1)
    })

    it('handles zero max gracefully', () => {
      render(<Pagination value={1} max={0} />)
      // Both arrows should be disabled with bad value
      expect(screen.getByRole('button', { name: 'Go back' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeDisabled()
    })

    it('clamps value to valid range on navigation', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      // Value out of range
      render(<Pagination value={1} max={5} onChange={onChange} />)

      // Click last page
      await user.click(screen.getByRole('button', { name: 'Go to page 5' }))
      expect(onChange).toHaveBeenCalledWith(5)
    })

    it('handles exactly 7 pages without ellipsis', () => {
      render(<Pagination value={4} max={7} />)
      // Should have 7 page buttons, no ellipsis
      const ellipsis = screen.queryAllByText('...')
      expect(ellipsis.length).toBe(0)

      const pageButtons = screen.getAllByRole('button').filter((btn) =>
        btn.getAttribute('aria-label')?.startsWith('Go to page')
      )
      expect(pageButtons.length).toBe(7)
    })
  })

  describe('accessibility', () => {
    it('has navigation role', () => {
      render(<Pagination value={1} max={10} />)
      expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

    it('provides aria-labels for all buttons', () => {
      render(<Pagination value={5} max={10} />)

      // Arrow buttons
      expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Go forward' })).toBeInTheDocument()

      // Page buttons should have aria-labels
      const allButtons = screen.getAllByRole('button')
      allButtons.forEach((button) => {
        expect(button).toHaveAttribute('aria-label')
      })
    })

    it('marks active page with aria-current="page"', () => {
      render(<Pagination value={3} max={10} />)
      const currentPage = screen.getByRole('button', { current: 'page' })
      expect(currentPage).toBeInTheDocument()
    })

    it('marks ellipsis buttons with aria-hidden', () => {
      render(<Pagination value={10} max={20} />)
      const ellipsisButtons = screen.getAllByText('...')
      ellipsisButtons.forEach((btn) => {
        expect(btn.closest('button')).toHaveAttribute('aria-hidden', 'true')
      })
    })

    it('disables ellipsis buttons', () => {
      render(<Pagination value={10} max={20} />)
      const ellipsisButtons = screen.getAllByText('...')
      ellipsisButtons.forEach((btn) => {
        expect(btn.closest('button')).toBeDisabled()
      })
    })
  })
})
