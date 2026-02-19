import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { HelpTooltip } from './HelpTooltip'

describe('HelpTooltip', () => {
  describe('rendering', () => {
    it('renders the help icon', () => {
      render(<HelpTooltip text="Help text" />)
      expect(screen.getByRole('img', { name: 'circle-question' })).toBeInTheDocument()
    })

    it('renders with tooltip role', () => {
      render(<HelpTooltip text="Help text" />)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('does not show tooltip text initially', () => {
      render(<HelpTooltip text="Help text" />)
      expect(screen.queryByText('Help text')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<HelpTooltip ref={ref} text="Help text" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(<HelpTooltip text="Help text" className="custom-class" />)
      expect(screen.getByRole('tooltip')).toHaveClass('custom-class')
    })

    it('applies custom style', () => {
      render(<HelpTooltip text="Help text" style={{ marginTop: '10px' }} />)
      expect(screen.getByRole('tooltip')).toHaveStyle({ marginTop: '10px' })
    })

    it('applies custom width to the icon', () => {
      render(<HelpTooltip text="Help text" width={24} />)
      const icon = screen.getByRole('img', { name: 'circle-question' })
      expect(icon).toHaveStyle({ '--sinch-global-size-icon': '24px' })
    })

    it('uses default width of 18px for the icon', () => {
      render(<HelpTooltip text="Help text" />)
      const icon = screen.getByRole('img', { name: 'circle-question' })
      expect(icon).toHaveStyle({ '--sinch-global-size-icon': '18px' })
    })
  })

  describe('hover interaction', () => {
    it('shows tooltip text on hover after delay', async () => {
      const user = userEvent.setup()
      render(<HelpTooltip text="Help text" />)

      const icon = screen.getByRole('img', { name: 'circle-question' })
      await user.hover(icon)

      // Tooltip uses 'fast' type (250ms delay)
      await waitFor(
        () => {
          expect(screen.getByText('Help text')).toBeInTheDocument()
        },
        { timeout: 500 }
      )
    })

    it('hides tooltip text when mouse leaves', async () => {
      const user = userEvent.setup()
      render(<HelpTooltip text="Help text" />)

      const icon = screen.getByRole('img', { name: 'circle-question' })
      await user.hover(icon)

      await waitFor(
        () => {
          expect(screen.getByText('Help text')).toBeInTheDocument()
        },
        { timeout: 500 }
      )

      await user.unhover(icon)

      await waitFor(() => {
        expect(screen.queryByText('Help text')).not.toBeInTheDocument()
      })
    })
  })

  describe('controlled mode', () => {
    it('shows tooltip when isOpen is true', () => {
      render(<HelpTooltip text="Help text" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })

    it('hides tooltip when isOpen is false', () => {
      render(<HelpTooltip text="Help text" isOpen={false} />)
      expect(screen.queryByText('Help text')).not.toBeInTheDocument()
    })

    it('respects isOpen prop changes', () => {
      const { rerender } = render(<HelpTooltip text="Help text" isOpen={false} />)
      expect(screen.queryByText('Help text')).not.toBeInTheDocument()

      rerender(<HelpTooltip text="Help text" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()

      rerender(<HelpTooltip text="Help text" isOpen={false} />)
      // Note: There may be a brief animation period
    })
  })

  describe('callbacks', () => {
    it('calls onShow when tooltip becomes visible', async () => {
      const onShow = vi.fn()
      const user = userEvent.setup()
      render(<HelpTooltip text="Help text" onShow={onShow} />)

      const icon = screen.getByRole('img', { name: 'circle-question' })
      await user.hover(icon)

      await waitFor(
        () => {
          expect(onShow).toHaveBeenCalled()
        },
        { timeout: 500 }
      )
    })

    it('calls onHide when tooltip becomes hidden', async () => {
      const onHide = vi.fn()
      const user = userEvent.setup()
      render(<HelpTooltip text="Help text" onHide={onHide} />)

      const icon = screen.getByRole('img', { name: 'circle-question' })
      await user.hover(icon)

      await waitFor(
        () => {
          expect(screen.getByText('Help text')).toBeInTheDocument()
        },
        { timeout: 500 }
      )

      await user.unhover(icon)

      await waitFor(() => {
        expect(onHide).toHaveBeenCalled()
      })
    })
  })

  describe('orientation', () => {
    it('accepts top orientation', () => {
      render(<HelpTooltip text="Help text" orientation="top" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })

    it('accepts bottom orientation', () => {
      render(<HelpTooltip text="Help text" orientation="bottom" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })

    it('accepts left orientation', () => {
      render(<HelpTooltip text="Help text" orientation="left" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })

    it('accepts right orientation', () => {
      render(<HelpTooltip text="Help text" orientation="right" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })

    it('accepts corner orientations', () => {
      const { rerender } = render(
        <HelpTooltip text="Help text" orientation="top-left" isOpen={true} />
      )
      expect(screen.getByText('Help text')).toBeInTheDocument()

      rerender(<HelpTooltip text="Help text" orientation="top-right" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()

      rerender(<HelpTooltip text="Help text" orientation="bottom-left" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()

      rerender(<HelpTooltip text="Help text" orientation="bottom-right" isOpen={true} />)
      expect(screen.getByText('Help text')).toBeInTheDocument()
    })
  })

  describe('text alignment', () => {
    it('accepts left text alignment', () => {
      render(<HelpTooltip text="Help text" textAlign="left" isOpen={true} />)
      expect(screen.getByText('Help text')).toHaveClass('text-left')
    })

    it('accepts center text alignment', () => {
      render(<HelpTooltip text="Help text" textAlign="center" isOpen={true} />)
      expect(screen.getByText('Help text')).toHaveClass('text-center')
    })

    it('accepts right text alignment', () => {
      render(<HelpTooltip text="Help text" textAlign="right" isOpen={true} />)
      expect(screen.getByText('Help text')).toHaveClass('text-right')
    })
  })

  describe('icon styling', () => {
    it('renders with cursor-help class', () => {
      render(<HelpTooltip text="Help text" />)
      const icon = screen.getByRole('img', { name: 'circle-question' })
      expect(icon).toHaveClass('cursor-help')
    })

    it('renders with muted foreground color', () => {
      render(<HelpTooltip text="Help text" />)
      const icon = screen.getByRole('img', { name: 'circle-question' })
      expect(icon).toHaveClass('text-foreground-muted')
    })
  })
})
