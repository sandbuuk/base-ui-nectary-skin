import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  describe('rendering', () => {
    it('renders a textarea element', () => {
      render(<Textarea aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('forwards ref to textarea element', () => {
      const ref = { current: null }

      render(<Textarea ref={ref} aria-label="test textarea"/>)
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
    })

    it('renders with placeholder', () => {
      render(<Textarea placeholder="Enter text"/>)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('renders with rows attribute', () => {
      render(<Textarea rows={5} aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5')
    })
  })

  describe('controlled mode', () => {
    it('renders controlled value', () => {
      render(<Textarea value="controlled value" aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveValue('controlled value')
    })

    it('calls onChange with new value when typing', async () => {
      const handleChange = vi.fn()

      render(<Textarea value="" onChange={handleChange} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.type(textarea, 'a')

      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('does not update internal state in controlled mode', async () => {
      const handleChange = vi.fn()

      render(<Textarea value="fixed" onChange={handleChange} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.type(textarea, 'x')

      // Value should remain "fixed" because it's controlled
      expect(textarea).toHaveValue('fixed')
    })

    it('handles multi-line content', () => {
      render(<Textarea value={'Line 1\nLine 2\nLine 3'} aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveValue('Line 1\nLine 2\nLine 3')
    })
  })

  describe('uncontrolled mode', () => {
    it('renders with defaultValue', () => {
      render(<Textarea defaultValue="default text" aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveValue('default text')
    })

    it('updates value when typing in uncontrolled mode', async () => {
      render(<Textarea aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.type(textarea, 'hello')

      expect(textarea).toHaveValue('hello')
    })

    it('calls onChange even in uncontrolled mode', async () => {
      const handleChange = vi.fn()

      render(<Textarea onChange={handleChange} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.type(textarea, 'hi')

      expect(handleChange).toHaveBeenCalledTimes(2)
      expect(handleChange).toHaveBeenLastCalledWith('hi')
    })
  })

  describe('states', () => {
    it('sets disabled attribute', () => {
      render(<Textarea disabled aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('does not allow typing when disabled', async () => {
      render(<Textarea disabled value="initial" aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.type(textarea, 'x')

      expect(textarea).toHaveValue('initial')
    })

    it('sets readonly attribute', () => {
      render(<Textarea readOnly aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
    })

    it('sets required attribute', () => {
      render(<Textarea required aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('sets aria-invalid when invalid', () => {
      render(<Textarea invalid aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not have aria-invalid when not invalid', () => {
      render(<Textarea aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
    })
  })

  describe('events', () => {
    it('calls onFocus when focused', async () => {
      const handleFocus = vi.fn()

      render(<Textarea onFocus={handleFocus} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.click(textarea)

      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const handleBlur = vi.fn()

      render(<Textarea onBlur={handleBlur} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.click(textarea)
      await userEvent.tab()

      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('calls onKeyDown when key is pressed', async () => {
      const handleKeyDown = vi.fn()

      render(<Textarea onKeyDown={handleKeyDown} aria-label="test textarea"/>)

      const textarea = screen.getByRole('textbox')

      await userEvent.click(textarea)
      await userEvent.keyboard('a')

      expect(handleKeyDown).toHaveBeenCalled()
    })
  })

  describe('resizable', () => {
    it('renders resize handle when resizable is true', () => {
      const { container } = render(<Textarea resizable aria-label="test textarea"/>)

      // Check that the resize handle exists
      const resizeHandle = container.querySelector('[aria-hidden="true"]')

      expect(resizeHandle).toBeInTheDocument()
    })

    it('does not render resize handle by default', () => {
      const { container } = render(<Textarea aria-label="test textarea"/>)

      // No resize handle SVG should be present
      const svg = container.querySelector('svg')

      expect(svg).not.toBeInTheDocument()
    })

    it('renders resize handle with cursor-ns-resize class', () => {
      const { container } = render(<Textarea resizable aria-label="test textarea"/>)

      const resizeHandle = container.querySelector('.cursor-ns-resize')

      expect(resizeHandle).toBeInTheDocument()
    })
  })

  describe('bottomContent', () => {
    it('renders bottom content when provided', () => {
      render(
        <Textarea
          bottomContent={<span data-testid="bottom">Bottom content</span>}
          aria-label="test textarea"
        />
      )
      expect(screen.getByTestId('bottom')).toBeInTheDocument()
    })

    it('does not render bottom section when no bottomContent and not resizable', () => {
      const { container } = render(<Textarea aria-label="test textarea"/>)

      // No gap-2 element (bottom section) should be present
      const bottomSection = container.querySelector('.gap-2')

      expect(bottomSection).not.toBeInTheDocument()
    })

    it('renders bottom section when resizable even without bottomContent', () => {
      const { container } = render(<Textarea resizable aria-label="test textarea"/>)

      // The bottom section should be rendered for the resize handle
      const bottomSection = container.querySelector('.gap-2')

      expect(bottomSection).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('supports aria-label', () => {
      render(<Textarea aria-label="Message content"/>)
      expect(screen.getByLabelText('Message content')).toBeInTheDocument()
    })

    it('has aria-multiline attribute', () => {
      render(<Textarea aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-multiline', 'true')
    })

    it('forwards additional ARIA attributes', () => {
      render(
        <Textarea
          aria-label="test textarea"
          aria-describedby="helper-text"
        />
      )
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'aria-describedby',
        'helper-text'
      )
    })
  })

  describe('styling', () => {
    it('applies custom className to wrapper', () => {
      const { container } = render(<Textarea className="custom-class" aria-label="test textarea"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      const { container } = render(<Textarea className="w-64" aria-label="test textarea"/>)
      const wrapper = container.firstChild

      expect(wrapper).toHaveClass('w-64')
      expect(wrapper).toHaveClass('relative')
      expect(wrapper).toHaveClass('flex')
    })
  })

  describe('props forwarding', () => {
    it('forwards data attributes to textarea', () => {
      render(<Textarea data-testid="my-textarea" aria-label="test textarea"/>)
      expect(screen.getByTestId('my-textarea')).toBeInTheDocument()
    })

    it('forwards id attribute to textarea', () => {
      render(<Textarea id="textarea-1" aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'textarea-1')
    })

    it('forwards name attribute to textarea', () => {
      render(<Textarea name="message" aria-label="test textarea"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'message')
    })
  })

  describe('rows configuration', () => {
    it('renders with minRows prop', () => {
      const { container } = render(<Textarea minRows={3} aria-label="test textarea"/>)
      // Component should render without errors
      const wrapper = container.firstChild

      expect(wrapper).toBeInTheDocument()
    })

    it('renders with maxRows prop', () => {
      const { container } = render(<Textarea maxRows={10} aria-label="test textarea"/>)
      // Component should render without errors
      const wrapper = container.firstChild

      expect(wrapper).toBeInTheDocument()
    })

    it('renders with both minRows and maxRows props', () => {
      const { container } = render(<Textarea minRows={2} maxRows={8} aria-label="test textarea"/>)
      // Component should render without errors
      const wrapper = container.firstChild

      expect(wrapper).toBeInTheDocument()
    })
  })
})
