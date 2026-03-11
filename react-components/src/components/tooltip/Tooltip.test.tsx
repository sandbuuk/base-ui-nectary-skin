import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders children content', () => {
      render(
        <Tooltip text="Tooltip text">
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })

    it('does not show tooltip content initially', () => {
      render(
        <Tooltip text="Tooltip text">
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(
        <Tooltip text="Tooltip text" ref={ref}>
          <button>Trigger</button>
        </Tooltip>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('has role="tooltip" when open', async () => {
      render(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument()
      })
    })
  })

  // Props
  describe('props', () => {
    it('applies custom className to container', () => {
      render(
        <Tooltip text="Tooltip text" className="custom-class" data-testid="tooltip-wrapper">
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.getByTestId('tooltip-wrapper')).toHaveClass('custom-class')
    })

    it('passes through additional HTML attributes', () => {
      render(
        <Tooltip text="Tooltip text" data-testid="custom-tooltip" aria-describedby="desc">
          <button>Trigger</button>
        </Tooltip>
      )

      const tooltip = screen.getByTestId('custom-tooltip')

      expect(tooltip).toHaveAttribute('aria-describedby', 'desc')
    })
  })

  // Empty text behavior
  describe('empty text', () => {
    it('returns only children when text is empty', () => {
      const { container } = render(
        <Tooltip text="">
          <button>Trigger</button>
        </Tooltip>
      )

      // Should not have the tooltip wrapper
      expect(container.querySelector('[role="tooltip"]')).not.toBeInTheDocument()
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })
  })

  // Controlled mode
  describe('controlled mode', () => {
    it('shows tooltip when isOpen is true', async () => {
      render(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      // Wait for the tooltip to appear (requestAnimationFrame)
      await waitFor(() => {
        expect(screen.getByText('Tooltip text')).toBeInTheDocument()
      })
    })

    it('hides tooltip when isOpen is false', () => {
      render(
        <Tooltip text="Tooltip text" isOpen={false}>
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument()
    })

    it('responds to isOpen prop changes', async () => {
      const { rerender } = render(
        <Tooltip text="Tooltip text" isOpen={false}>
          <button>Trigger</button>
        </Tooltip>
      )

      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument()

      rerender(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        expect(screen.getByText('Tooltip text')).toBeInTheDocument()
      })
    })

    it('ignores hover in controlled mode', async () => {
      const user = userEvent.setup()

      render(
        <Tooltip text="Tooltip text" isOpen={false}>
          <button>Trigger</button>
        </Tooltip>
      )

      await user.hover(screen.getByText('Trigger'))
      
      // Wait a bit and ensure tooltip still doesn't show
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 100))
      })

      // Should still be hidden despite hover (no delay in controlled mode)
      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument()
    })
  })

  // Callbacks in controlled mode
  describe('callbacks', () => {
    it('calls onShow when controlled tooltip opens', async () => {
      const onShow = vi.fn()
      const { rerender } = render(
        <Tooltip text="Tooltip text" isOpen={false} onShow={onShow}>
          <button>Trigger</button>
        </Tooltip>
      )

      expect(onShow).not.toHaveBeenCalled()

      rerender(
        <Tooltip text="Tooltip text" isOpen onShow={onShow}>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        expect(onShow).toHaveBeenCalledTimes(1)
      })
    })

    it('calls onHide when controlled tooltip closes', async () => {
      const onHide = vi.fn()
      const { rerender } = render(
        <Tooltip text="Tooltip text" isOpen onHide={onHide}>
          <button>Trigger</button>
        </Tooltip>
      )

      rerender(
        <Tooltip text="Tooltip text" isOpen={false} onHide={onHide}>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        expect(onHide).toHaveBeenCalledTimes(1)
      })
    })
  })

  // Orientations
  describe('orientations', () => {
    const orientations = [
      'top',
      'bottom',
      'left',
      'right',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ] as const

    orientations.forEach((orientation) => {
      it(`renders with ${orientation} orientation`, async () => {
        render(
          <Tooltip text="Tooltip text" orientation={orientation} isOpen>
            <button>Trigger</button>
          </Tooltip>
        )
        await waitFor(() => {
          expect(screen.getByText('Tooltip text')).toBeInTheDocument()
        })
      })
    })

    it('applies correct classes for top orientation', async () => {
      render(
        <Tooltip text="Tooltip text" orientation="top" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      await waitFor(() => {
        const content = screen.getByText('Tooltip text')
        expect(content).toHaveClass('bottom-full')
      })
    })

    it('applies correct classes for bottom orientation', async () => {
      render(
        <Tooltip text="Tooltip text" orientation="bottom" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      await waitFor(() => {
        const content = screen.getByText('Tooltip text')
        expect(content).toHaveClass('top-full')
      })
    })

    it('applies correct classes for left orientation', async () => {
      render(
        <Tooltip text="Tooltip text" orientation="left" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      await waitFor(() => {
        const content = screen.getByText('Tooltip text')
        expect(content).toHaveClass('right-full')
      })
    })

    it('applies correct classes for right orientation', async () => {
      render(
        <Tooltip text="Tooltip text" orientation="right" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )
      await waitFor(() => {
        const content = screen.getByText('Tooltip text')
        expect(content).toHaveClass('left-full')
      })
    })
  })

  // Text alignment
  describe('text alignment', () => {
    it('applies left text alignment', async () => {
      render(
        <Tooltip text="Tooltip text" textAlign="left" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const tooltipContent = screen.getByText('Tooltip text')
        expect(tooltipContent).toHaveClass('text-left')
      })
    })

    it('applies center text alignment', async () => {
      render(
        <Tooltip text="Tooltip text" textAlign="center" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const tooltipContent = screen.getByText('Tooltip text')
        expect(tooltipContent).toHaveClass('text-center')
      })
    })

    it('applies right text alignment', async () => {
      render(
        <Tooltip text="Tooltip text" textAlign="right" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const tooltipContent = screen.getByText('Tooltip text')
        expect(tooltipContent).toHaveClass('text-right')
      })
    })
  })

  // Tooltip arrow
  describe('tooltip arrow', () => {
    it('renders arrow SVG when tooltip is visible', async () => {
      render(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const svg = document.querySelector('svg[aria-hidden="true"]')
        expect(svg).toBeInTheDocument()
      })
    })
  })

  // Child event preservation
  describe('child event handlers', () => {
    it('preserves child onMouseEnter handler', async () => {
      const childOnMouseEnter = vi.fn()
      const user = userEvent.setup()

      render(
        <Tooltip text="Tooltip text">
          <button onMouseEnter={childOnMouseEnter}>Trigger</button>
        </Tooltip>
      )

      await user.hover(screen.getByText('Trigger'))
      expect(childOnMouseEnter).toHaveBeenCalled()
    })

    it('preserves child onMouseLeave handler', async () => {
      const childOnMouseLeave = vi.fn()
      const user = userEvent.setup()

      render(
        <Tooltip text="Tooltip text">
          <button onMouseLeave={childOnMouseLeave}>Trigger</button>
        </Tooltip>
      )

      await user.hover(screen.getByText('Trigger'))
      await user.unhover(screen.getByText('Trigger'))
      expect(childOnMouseLeave).toHaveBeenCalled()
    })

    it('preserves child onMouseDown handler', async () => {
      const childOnMouseDown = vi.fn()
      const user = userEvent.setup()

      render(
        <Tooltip text="Tooltip text">
          <button onMouseDown={childOnMouseDown}>Trigger</button>
        </Tooltip>
      )

      await user.click(screen.getByText('Trigger'))
      expect(childOnMouseDown).toHaveBeenCalled()
    })
  })

  // Default values
  describe('default values', () => {
    it('uses top orientation by default', async () => {
      render(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const tooltipContent = screen.getByText('Tooltip text')
        expect(tooltipContent).toHaveClass('bottom-full')
      })
    })

    it('uses left text alignment by default', async () => {
      render(
        <Tooltip text="Tooltip text" isOpen>
          <button>Trigger</button>
        </Tooltip>
      )

      await waitFor(() => {
        const tooltipContent = screen.getByText('Tooltip text')
        expect(tooltipContent).toHaveClass('text-left')
      })
    })
  })

  // Type prop
  describe('type prop', () => {
    it('accepts slow type', () => {
      render(
        <Tooltip text="Tooltip text" type="slow">
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })

    it('accepts fast type', () => {
      render(
        <Tooltip text="Tooltip text" type="fast">
          <button>Trigger</button>
        </Tooltip>
      )
      expect(screen.getByText('Trigger')).toBeInTheDocument()
    })
  })

  // Display name
  describe('component', () => {
    it('has correct display name', () => {
      expect(Tooltip.displayName).toBe('Tooltip')
    })
  })
})
