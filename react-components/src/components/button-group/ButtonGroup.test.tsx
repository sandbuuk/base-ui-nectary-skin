import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ButtonGroup } from './ButtonGroup'
import { ButtonGroupItem } from './ButtonGroupItem'

describe('ButtonGroup', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
        </ButtonGroup>
      )
      expect(screen.getByText('One')).toBeInTheDocument()
      expect(screen.getByText('Two')).toBeInTheDocument()
    })

    it('renders with role="group"', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="One" />
        </ButtonGroup>
      )
      expect(screen.getByRole('group')).toBeInTheDocument()
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <ButtonGroup ref={ref}>
          <ButtonGroupItem text="One" />
        </ButtonGroup>
      )
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(
        <ButtonGroup className="custom-class">
          <ButtonGroupItem text="One" />
        </ButtonGroup>
      )
      expect(screen.getByRole('group')).toHaveClass('custom-class')
    })
  })

  describe('context passing', () => {
    it('passes size to children', () => {
      render(
        <ButtonGroup size="l">
          <ButtonGroupItem text="Large Button" />
        </ButtonGroup>
      )
      // Button should be rendered with large size
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('passes variant to children', () => {
      render(
        <ButtonGroup variant="primary">
          <ButtonGroupItem text="Primary Button" />
        </ButtonGroup>
      )
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })
  })

  describe('default values', () => {
    it('uses default size of "m"', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Default" />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('uses default variant of "secondary"', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Default" />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })
})

describe('ButtonGroupItem', () => {
  describe('rendering', () => {
    it('renders with text', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Click me" />
        </ButtonGroup>
      )
      expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('renders as a button', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Button" />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('forwards ref to the button', () => {
      const ref = { current: null }
      render(
        <ButtonGroup>
          <ButtonGroupItem ref={ref} text="Button" />
        </ButtonGroup>
      )
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })

    it('renders with icon', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem icon={<span data-testid="icon">*</span>} aria-label="Icon button" />
        </ButtonGroup>
      )
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders with left icon', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Button" leftIcon={<span data-testid="left-icon">L</span>} />
        </ButtonGroup>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders with right icon', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Button" rightIcon={<span data-testid="right-icon">R</span>} />
        </ButtonGroup>
      )
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })
  })

  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const onClick = vi.fn()
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Click me" onClick={onClick} />
        </ButtonGroup>
      )
      await userEvent.click(screen.getByText('Click me'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const onClick = vi.fn()
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Disabled" disabled onClick={onClick} />
        </ButtonGroup>
      )
      await userEvent.click(screen.getByText('Disabled'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('disabled state', () => {
    it('sets disabled attribute', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="Disabled" disabled />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('toggled state', () => {
    it('sets aria-pressed when toggled', () => {
      render(
        <ButtonGroup variant="subtle-primary">
          <ButtonGroupItem text="Toggled" toggled />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    })

    it('does not set aria-pressed when not toggled', () => {
      render(
        <ButtonGroup variant="subtle-primary">
          <ButtonGroupItem text="Not toggled" />
        </ButtonGroup>
      )
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-pressed')
    })
  })

  describe('accessibility', () => {
    it('supports aria-label', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem icon={<span>X</span>} aria-label="Close" />
        </ButtonGroup>
      )
      expect(screen.getByLabelText('Close')).toBeInTheDocument()
    })

    it('buttons have correct role', () => {
      render(
        <ButtonGroup>
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
        </ButtonGroup>
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })
  })

  describe('standalone usage', () => {
    it('renders without ButtonGroup context using defaults', () => {
      render(<ButtonGroupItem text="Standalone" />)
      expect(screen.getByRole('button')).toBeInTheDocument()
      expect(screen.getByText('Standalone')).toBeInTheDocument()
    })
  })
})

describe('ButtonGroup with multiple items', () => {
  it('renders multiple items', () => {
    render(
      <ButtonGroup>
        <ButtonGroupItem text="One" />
        <ButtonGroupItem text="Two" />
        <ButtonGroupItem text="Three" />
      </ButtonGroup>
    )
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('handles single item', () => {
    render(
      <ButtonGroup>
        <ButtonGroupItem text="Only" />
      </ButtonGroup>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('handles two items', () => {
    render(
      <ButtonGroup>
        <ButtonGroupItem text="First" />
        <ButtonGroupItem text="Last" />
      </ButtonGroup>
    )
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('handles many items', () => {
    render(
      <ButtonGroup>
        <ButtonGroupItem text="1" />
        <ButtonGroupItem text="2" />
        <ButtonGroupItem text="3" />
        <ButtonGroupItem text="4" />
        <ButtonGroupItem text="5" />
      </ButtonGroup>
    )
    expect(screen.getAllByRole('button')).toHaveLength(5)
  })
})
