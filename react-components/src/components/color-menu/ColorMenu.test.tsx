import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ColorMenu, ColorMenuOption } from './ColorMenu'

describe('ColorMenu', () => {
  // ===========================================================================
  // Basic Rendering
  // ===========================================================================
  describe('rendering', () => {
    it('renders with options', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getAllByRole('option')).toHaveLength(3)
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(
        <ColorMenu ref={ref} aria-label="Select color">
          <ColorMenuOption value="blue" />
        </ColorMenu>
      )

      expect(ref.current).toBeInstanceOf(HTMLElement)
      expect(ref.current).toBe(screen.getByRole('listbox'))
    })

    it('applies custom className', () => {
      render(
        <ColorMenu className="custom-class" aria-label="Select color">
          <ColorMenuOption value="blue" />
        </ColorMenu>
      )

      expect(screen.getByRole('listbox')).toHaveClass('custom-class')
    })

    it('renders with aria-label', () => {
      render(
        <ColorMenu aria-label="Choose a color">
          <ColorMenuOption value="blue" />
        </ColorMenu>
      )

      expect(screen.getByLabelText('Choose a color')).toBeInTheDocument()
    })
  })

  // ===========================================================================
  // Controlled Mode
  // ===========================================================================
  describe('controlled mode', () => {
    it('marks the correct option as selected based on value', () => {
      render(
        <ColorMenu value="red" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('aria-selected', 'false')
      expect(options[1]).toHaveAttribute('aria-selected', 'true')
      expect(options[2]).toHaveAttribute('aria-selected', 'false')
    })

    it('calls onChange when an option is clicked', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <ColorMenu value="blue" onChange={handleChange} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      await user.click(options[1]) // Click on "red"

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith('red')
    })

    it('updates selection when value prop changes', () => {
      const { rerender } = render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
        </ColorMenu>
      )

      expect(screen.getAllByRole('option')[0]).toHaveAttribute('aria-selected', 'true')
      expect(screen.getAllByRole('option')[1]).toHaveAttribute('aria-selected', 'false')

      rerender(
        <ColorMenu value="red" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
        </ColorMenu>
      )

      expect(screen.getAllByRole('option')[0]).toHaveAttribute('aria-selected', 'false')
      expect(screen.getAllByRole('option')[1]).toHaveAttribute('aria-selected', 'true')
    })
  })

  // ===========================================================================
  // Uncontrolled Mode
  // ===========================================================================
  describe('uncontrolled mode', () => {
    it('uses defaultValue for initial selection', () => {
      render(
        <ColorMenu defaultValue="green" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('aria-selected', 'false')
      expect(options[1]).toHaveAttribute('aria-selected', 'false')
      expect(options[2]).toHaveAttribute('aria-selected', 'true')
    })

    it('updates selection internally when clicking', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <ColorMenu defaultValue="blue" onChange={handleChange} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('aria-selected', 'true')

      await user.click(options[2]) // Click on "green"

      expect(handleChange).toHaveBeenCalledWith('green')
      expect(options[2]).toHaveAttribute('aria-selected', 'true')
      expect(options[0]).toHaveAttribute('aria-selected', 'false')
    })
  })

  // ===========================================================================
  // Keyboard Navigation
  // ===========================================================================
  describe('keyboard navigation', () => {
    it('navigates with ArrowRight', async () => {
      const user = userEvent.setup()

      render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      // First ArrowRight goes from -1 to 0
      await user.keyboard('{ArrowRight}')

      const options = screen.getAllByRole('option')

      // Index 0 should be selected
      expect(options[0]).toHaveAttribute('data-selected')
    })

    it('navigates with ArrowLeft', async () => {
      const user = userEvent.setup()

      render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      // Right (->0), Right (->1), Left (->0)
      await user.keyboard('{ArrowRight}{ArrowRight}{ArrowLeft}')

      const options = screen.getAllByRole('option')

      // Should be on index 0 after right, right, left
      expect(options[0]).toHaveAttribute('data-selected')
    })

    it('wraps around at the end with ArrowRight', async () => {
      const user = userEvent.setup()

      render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      // Right (->0), Right (->1), Right (->2), Right (->0 wrap)
      await user.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}')

      const options = screen.getAllByRole('option')

      // Should wrap to index 0 (went -1->0->1->2->0)
      expect(options[0]).toHaveAttribute('data-selected')
    })

    it('selects option with Enter key', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <ColorMenu value="blue" onChange={handleChange} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      // Right (->0), Right (->1), Enter (selects index 1 = "red")
      await user.keyboard('{ArrowRight}{ArrowRight}{Enter}')

      expect(handleChange).toHaveBeenCalledWith('red')
    })

    it('selects option with Space key', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <ColorMenu value="blue" onChange={handleChange} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      // Right (->0), Space (selects index 0 = "blue")
      await user.keyboard('{ArrowRight}')
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalledWith('blue')
    })

    it('clears selection on blur', async () => {
      const user = userEvent.setup()

      render(
        <div>
          <ColorMenu value="blue" aria-label="Select color">
            <ColorMenuOption value="blue" />
            <ColorMenuOption value="red" />
          </ColorMenu>
          <button>Other element</button>
        </div>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      await user.keyboard('{ArrowRight}')

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('data-selected')

      // Tab to next element
      await user.tab()

      // Selection should be cleared
      expect(options[0]).not.toHaveAttribute('data-selected')
      expect(options[1]).not.toHaveAttribute('data-selected')
    })
  })

  // ===========================================================================
  // Grid Layout (cols/rows)
  // ===========================================================================
  describe('grid layout', () => {
    it('renders with custom column count', () => {
      render(
        <ColorMenu cols={3} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
          <ColorMenuOption value="yellow" />
          <ColorMenuOption value="orange" />
          <ColorMenuOption value="violet" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')
      const innerContainer = listbox.firstChild as HTMLElement

      expect(innerContainer).toHaveStyle({ width: '132px' }) // 3 * 44px
    })

    it('renders with row limit for scrolling', () => {
      render(
        <ColorMenu rows={2} cols={3} aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
          <ColorMenuOption value="yellow" />
          <ColorMenuOption value="orange" />
          <ColorMenuOption value="violet" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')
      const innerContainer = listbox.firstChild as HTMLElement

      expect(innerContainer).toHaveStyle({ maxHeight: '112px' }) // 2 * 56px
    })
  })

  // ===========================================================================
  // ColorMenuOption
  // ===========================================================================
  describe('ColorMenuOption', () => {
    it('renders with value attribute', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="blue" />
        </ColorMenu>
      )

      const option = screen.getByRole('option')

      expect(option).toHaveAttribute('data-value', 'blue')
    })

    it('forwards ref to option element', () => {
      const ref = { current: null }

      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption ref={ref} value="blue" />
        </ColorMenu>
      )

      expect(ref.current).toBeInstanceOf(HTMLElement)
      expect(ref.current).toHaveAttribute('role', 'option')
    })

    it('applies custom className', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="blue" className="custom-option" />
        </ColorMenu>
      )

      expect(screen.getByRole('option')).toHaveClass('custom-option')
    })

    it('shows data-checked when value matches', () => {
      render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('data-checked')
      expect(options[1]).not.toHaveAttribute('data-checked')
    })

    it('passes aria-label to ColorSwatch', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="#FF5733" aria-label="Custom orange" />
        </ColorMenu>
      )

      expect(screen.getByLabelText('Custom orange')).toBeInTheDocument()
    })
  })

  // ===========================================================================
  // Accessibility
  // ===========================================================================
  describe('accessibility', () => {
    it('has correct ARIA roles', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
        </ColorMenu>
      )

      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getAllByRole('option')).toHaveLength(2)
    })

    it('is focusable', () => {
      render(
        <ColorMenu aria-label="Select color">
          <ColorMenuOption value="blue" />
        </ColorMenu>
      )

      const listbox = screen.getByRole('listbox')

      expect(listbox).toHaveAttribute('tabindex', '0')
    })

    it('sets aria-selected on the correct option', () => {
      render(
        <ColorMenu value="red" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="red" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('aria-selected', 'false')
      expect(options[1]).toHaveAttribute('aria-selected', 'true')
      expect(options[2]).toHaveAttribute('aria-selected', 'false')
    })
  })

  // ===========================================================================
  // Custom Colors
  // ===========================================================================
  describe('custom colors', () => {
    it('renders with hex color values', () => {
      render(
        <ColorMenu value="#FF5733" aria-label="Select color">
          <ColorMenuOption value="#FF5733" />
          <ColorMenuOption value="#33FF57" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options[0]).toHaveAttribute('aria-selected', 'true')
      expect(options[0]).toHaveAttribute('data-value', '#FF5733')
    })

    it('renders with mixed swatch and custom colors', () => {
      render(
        <ColorMenu value="blue" aria-label="Select color">
          <ColorMenuOption value="blue" />
          <ColorMenuOption value="#FF5733" />
          <ColorMenuOption value="green" />
        </ColorMenu>
      )

      const options = screen.getAllByRole('option')

      expect(options).toHaveLength(3)
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
    })
  })
})
