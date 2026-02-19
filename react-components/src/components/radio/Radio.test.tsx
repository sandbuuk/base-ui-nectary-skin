import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Radio, RadioGroup, RadioOption } from './Radio'

describe('Radio', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders radio group with options', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toBeInTheDocument()
      expect(screen.getAllByRole('radio')).toHaveLength(2)
    })

    it('renders option labels', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="First Option" />
          <RadioOption value="option2" text="Second Option" />
        </Radio>
      )
      expect(screen.getByText('First Option')).toBeInTheDocument()
      expect(screen.getByText('Second Option')).toBeInTheDocument()
    })

    it('forwards ref to radio group', () => {
      const ref = { current: null }

      render(
        <Radio ref={ref} aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('forwards ref to radio option', () => {
      const ref = { current: null }

      render(
        <Radio aria-label="Test group">
          <RadioOption ref={ref} value="option1" text="Option 1" />
        </Radio>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className to radio group', () => {
      render(
        <Radio aria-label="Test group" className="custom-class">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveClass('custom-class')
    })

    it('applies custom className to radio option', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" className="option-class" />
        </Radio>
      )
      expect(screen.getByRole('radio')).toHaveClass('option-class')
    })
  })

  // Direction variants
  describe('direction', () => {
    it('renders with column direction by default', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveClass('flex-col')
    })

    it('renders with row direction when specified', () => {
      render(
        <Radio aria-label="Test group" direction="row">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveClass('flex-row')
    })
  })

  // Selection state
  describe('selection state', () => {
    it('has no selection by default', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('aria-checked', 'false')
      expect(radios[1]).toHaveAttribute('aria-checked', 'false')
    })

    it('respects defaultValue prop', () => {
      render(
        <Radio aria-label="Test group" defaultValue="option2">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('aria-checked', 'false')
      expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    })

    it('respects controlled value prop', () => {
      render(
        <Radio aria-label="Test group" value="option2">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('aria-checked', 'false')
      expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    })

    it('changes selection when option is clicked (uncontrolled)', async () => {
      const user = userEvent.setup()

      render(
        <Radio aria-label="Test group" defaultValue="option1">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('aria-checked', 'true')
      expect(radios[1]).toHaveAttribute('aria-checked', 'false')

      await user.click(radios[1])

      expect(radios[0]).toHaveAttribute('aria-checked', 'false')
      expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    })

    it('does not change internal state in controlled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" value="option1" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      await user.click(radios[1])

      // onChange should be called but aria-checked should remain unchanged (controlled)
      expect(onChange).toHaveBeenCalledWith('option2')
      expect(radios[0]).toHaveAttribute('aria-checked', 'true')
      expect(radios[1]).toHaveAttribute('aria-checked', 'false')
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('sets aria-disabled on disabled options', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" disabled />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('aria-disabled', 'false')
      expect(radios[1]).toHaveAttribute('aria-disabled', 'true')
    })

    it('sets tabIndex to -1 on disabled options', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" disabled />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      expect(radios[0]).toHaveAttribute('tabindex', '0')
      expect(radios[1]).toHaveAttribute('tabindex', '-1')
    })

    it('does not call onChange when disabled option is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" disabled />
        </Radio>
      )

      await user.click(screen.getByRole('radio'))
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // Invalid state
  describe('invalid state', () => {
    it('sets aria-invalid on radio group when invalid', () => {
      render(
        <Radio aria-label="Test group" invalid>
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when not invalid', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).not.toHaveAttribute('aria-invalid')
    })
  })

  // Events
  describe('events', () => {
    it('calls onChange with selected value when option is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      await user.click(screen.getAllByRole('radio')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })

    it('calls onChange when Space key is pressed', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )

      const radio = screen.getByRole('radio')

      radio.focus()
      await user.keyboard(' ')

      expect(onChange).toHaveBeenCalledWith('option1')
    })
  })

  // Keyboard navigation
  describe('keyboard navigation', () => {
    it('moves to next option with ArrowDown', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option1" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(onChange).toHaveBeenCalledWith('option2')
      expect(radios[1]).toHaveFocus()
    })

    it('moves to next option with ArrowRight', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option1" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[0].focus()
      await user.keyboard('{ArrowRight}')

      expect(onChange).toHaveBeenCalledWith('option2')
    })

    it('moves to previous option with ArrowUp', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option2" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[1].focus()
      await user.keyboard('{ArrowUp}')

      expect(onChange).toHaveBeenCalledWith('option1')
      expect(radios[0]).toHaveFocus()
    })

    it('moves to previous option with ArrowLeft', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option2" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[1].focus()
      await user.keyboard('{ArrowLeft}')

      expect(onChange).toHaveBeenCalledWith('option1')
    })

    it('wraps around from last to first option', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option3" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[2].focus()
      await user.keyboard('{ArrowDown}')

      expect(onChange).toHaveBeenCalledWith('option1')
      expect(radios[0]).toHaveFocus()
    })

    it('wraps around from first to last option', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option1" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[0].focus()
      await user.keyboard('{ArrowUp}')

      expect(onChange).toHaveBeenCalledWith('option3')
      expect(radios[2]).toHaveFocus()
    })

    it('skips disabled options during navigation', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <Radio aria-label="Test group" defaultValue="option1" onChange={onChange}>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" disabled />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      )

      const radios = screen.getAllByRole('radio')

      radios[0].focus()
      await user.keyboard('{ArrowDown}')

      expect(onChange).toHaveBeenCalledWith('option3')
      expect(radios[2]).toHaveFocus()
    })

    it('is focusable with Tab', async () => {
      const user = userEvent.setup()

      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )

      await user.tab()
      expect(screen.getByRole('radio')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has role="radiogroup" on the group', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    })

    it('has role="radio" on each option', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )
      expect(screen.getAllByRole('radio')).toHaveLength(2)
    })

    it('uses text as aria-label for options when no explicit aria-label', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Option Label" />
        </Radio>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('aria-label', 'Option Label')
    })

    it('uses explicit aria-label over text for options', () => {
      render(
        <Radio aria-label="Test group">
          <RadioOption value="option1" text="Visible text" aria-label="Screen reader text" />
        </Radio>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('aria-label', 'Screen reader text')
    })

    it('supports aria-labelledby for options', () => {
      render(
        <>
          <span id="label-id">External Label</span>
          <Radio aria-label="Test group">
            <RadioOption value="option1" aria-labelledby="label-id" />
          </Radio>
        </>
      )
      expect(screen.getByRole('radio')).toHaveAttribute('aria-labelledby', 'label-id')
    })

    it('sets aria-label on the group', () => {
      render(
        <Radio aria-label="Choose an option">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-label', 'Choose an option')
    })
  })

  // Form integration
  describe('form integration', () => {
    it('stores name as data attribute on group', () => {
      render(
        <Radio aria-label="Test group" name="myRadio">
          <RadioOption value="option1" text="Option 1" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveAttribute('data-name', 'myRadio')
    })

    it('stores current value as data attribute on group', () => {
      render(
        <Radio aria-label="Test group" defaultValue="option2">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )
      expect(screen.getByRole('radiogroup')).toHaveAttribute('data-value', 'option2')
    })

    it('updates data-value when selection changes', async () => {
      const user = userEvent.setup()

      render(
        <Radio aria-label="Test group" defaultValue="option1">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      )

      const group = screen.getByRole('radiogroup')

      expect(group).toHaveAttribute('data-value', 'option1')

      await user.click(screen.getAllByRole('radio')[1])
      expect(group).toHaveAttribute('data-value', 'option2')
    })
  })

  // RadioGroup compound component
  describe('RadioGroup compound component', () => {
    it('renders using RadioGroup.Option', () => {
      render(
        <RadioGroup aria-label="Test group">
          <RadioGroup.Option value="option1" text="Option 1" />
          <RadioGroup.Option value="option2" text="Option 2" />
        </RadioGroup>
      )
      expect(screen.getByRole('radiogroup')).toBeInTheDocument()
      expect(screen.getAllByRole('radio')).toHaveLength(2)
    })

    it('works with controlled state via RadioGroup', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <RadioGroup aria-label="Test group" defaultValue="option1" onChange={onChange}>
          <RadioGroup.Option value="option1" text="Option 1" />
          <RadioGroup.Option value="option2" text="Option 2" />
        </RadioGroup>
      )

      await user.click(screen.getAllByRole('radio')[1])
      expect(onChange).toHaveBeenCalledWith('option2')
    })
  })

  // Error handling
  describe('error handling', () => {
    it('throws error when RadioOption is used outside Radio', () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => {
        render(<RadioOption value="option1" text="Option 1" />)
      }).toThrow('RadioOption must be used within a Radio component')

      consoleError.mockRestore()
    })
  })
})
