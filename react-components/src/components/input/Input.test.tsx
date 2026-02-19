import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  describe('rendering', () => {
    it('renders an input element', () => {
      render(<Input aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with default type text', () => {
      render(<Input aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      expect(input).toHaveAttribute('type', 'text')
    })

    it('forwards ref to input element', () => {
      const ref = { current: null }

      render(<Input ref={ref} aria-label="test input"/>)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter text"/>)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })
  })

  describe('controlled mode', () => {
    it('renders controlled value', () => {
      render(<Input value="controlled value" aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveValue('controlled value')
    })

    it('calls onChange with new value when typing', async () => {
      const handleChange = vi.fn()

      render(<Input value="" onChange={handleChange} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.type(input, 'a')

      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('does not update internal state in controlled mode', async () => {
      const handleChange = vi.fn()

      render(<Input value="fixed" onChange={handleChange} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.type(input, 'x')

      // Value should remain "fixed" because it's controlled
      expect(input).toHaveValue('fixed')
    })
  })

  describe('uncontrolled mode', () => {
    it('renders with defaultValue', () => {
      render(<Input defaultValue="default text" aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveValue('default text')
    })

    it('updates value when typing in uncontrolled mode', async () => {
      render(<Input aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.type(input, 'hello')

      expect(input).toHaveValue('hello')
    })

    it('calls onChange even in uncontrolled mode', async () => {
      const handleChange = vi.fn()

      render(<Input onChange={handleChange} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.type(input, 'hi')

      expect(handleChange).toHaveBeenCalledTimes(2)
      expect(handleChange).toHaveBeenLastCalledWith('hi')
    })
  })

  describe('types', () => {
    it('renders password type', () => {
      render(<Input type="password" aria-label="password input"/>)

      const input = screen.getByLabelText('password input')

      expect(input).toHaveAttribute('type', 'password')
    })

    it('renders number type', () => {
      render(<Input type="number" aria-label="number input"/>)

      const input = screen.getByLabelText('number input')

      expect(input).toHaveAttribute('type', 'number')
    })

    it('applies min/max/step for number type', () => {
      render(<Input type="number" min={0} max={100} step={5} aria-label="number input"/>)

      const input = screen.getByLabelText('number input')

      expect(input).toHaveAttribute('min', '0')
      expect(input).toHaveAttribute('max', '100')
      expect(input).toHaveAttribute('step', '5')
    })
  })

  describe('sizes', () => {
    it('applies small size classes', () => {
      const { container } = render(<Input size="s" aria-label="test input"/>)
      const wrapper = container.firstChild

      expect(wrapper).toHaveClass('h-[var(--sinch-comp-input-size-container-s)]')
    })

    it('applies medium size classes by default', () => {
      const { container } = render(<Input aria-label="test input"/>)
      const wrapper = container.firstChild

      expect(wrapper).toHaveClass('h-[var(--sinch-comp-input-size-container-m)]')
    })

    it('applies large size classes', () => {
      const { container } = render(<Input size="l" aria-label="test input"/>)
      const wrapper = container.firstChild

      expect(wrapper).toHaveClass('h-[var(--sinch-comp-input-size-container-l)]')
    })
  })

  describe('states', () => {
    it('sets disabled attribute', () => {
      render(<Input disabled aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('sets readonly attribute', () => {
      render(<Input readOnly aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
    })

    it('sets required attribute', () => {
      render(<Input required aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('sets aria-invalid when invalid', () => {
      render(<Input invalid aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not have aria-invalid when not invalid', () => {
      render(<Input aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
    })
  })

  describe('events', () => {
    it('calls onFocus when focused', async () => {
      const handleFocus = vi.fn()

      render(<Input onFocus={handleFocus} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.click(input)

      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const handleBlur = vi.fn()

      render(<Input onBlur={handleBlur} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.click(input)
      await userEvent.tab()

      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('calls onKeyDown when key is pressed', async () => {
      const handleKeyDown = vi.fn()

      render(<Input onKeyDown={handleKeyDown} aria-label="test input"/>)

      const input = screen.getByRole('textbox')

      await userEvent.click(input)
      await userEvent.keyboard('a')

      expect(handleKeyDown).toHaveBeenCalled()
    })
  })

  describe('addons', () => {
    it('renders icon when provided', () => {
      render(
        <Input
          icon={<span data-testid="icon">icon</span>}
          aria-label="test input"
        />
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders leftAddon when provided', () => {
      render(
        <Input
          leftAddon={<span data-testid="left-addon">$</span>}
          aria-label="test input"
        />
      )
      expect(screen.getByTestId('left-addon')).toBeInTheDocument()
    })

    it('renders rightAddon when provided', () => {
      render(
        <Input
          rightAddon={<button data-testid="right-addon">X</button>}
          aria-label="test input"
        />
      )
      expect(screen.getByTestId('right-addon')).toBeInTheDocument()
    })

    it('renders all addons together', () => {
      render(
        <Input
          icon={<span data-testid="icon">icon</span>}
          leftAddon={<span data-testid="left-addon">$</span>}
          rightAddon={<button data-testid="right-addon">X</button>}
          aria-label="test input"
        />
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByTestId('left-addon')).toBeInTheDocument()
      expect(screen.getByTestId('right-addon')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('supports aria-label', () => {
      render(<Input aria-label="Email address"/>)
      expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    })

    it('forwards additional ARIA attributes', () => {
      render(
        <Input
          aria-label="test input"
          aria-describedby="helper-text"
        />
      )
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'aria-describedby',
        'helper-text'
      )
    })
  })

  describe('attributes', () => {
    it('applies autoComplete attribute', () => {
      render(<Input autoComplete="email" aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'email')
    })

    it('applies maxLength attribute', () => {
      render(<Input maxLength={10} aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '10')
    })

    it('applies name attribute', () => {
      render(<Input name="email" aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email')
    })
  })

  describe('styling', () => {
    it('applies custom className to wrapper', () => {
      const { container } = render(<Input className="custom-class" aria-label="test input"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      const { container } = render(<Input className="w-64" aria-label="test input"/>)
      const wrapper = container.firstChild

      expect(wrapper).toHaveClass('w-64')
      expect(wrapper).toHaveClass('relative')
      expect(wrapper).toHaveClass('flex')
    })
  })

  describe('props forwarding', () => {
    it('forwards data attributes to input', () => {
      render(<Input data-testid="my-input" aria-label="test input"/>)
      expect(screen.getByTestId('my-input')).toBeInTheDocument()
    })

    it('forwards id attribute to input', () => {
      render(<Input id="input-1" aria-label="test input"/>)
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'input-1')
    })
  })
})
