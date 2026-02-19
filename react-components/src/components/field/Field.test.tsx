import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Field } from './Field'

describe('Field', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders children content', () => {
      render(
        <Field>
          <input data-testid="child-input" />
        </Field>
      )
      expect(screen.getByTestId('child-input')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(
        <Field ref={ref}>
          <input />
        </Field>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      render(
        <Field className="custom-class" data-testid="field">
          <input />
        </Field>
      )
      expect(screen.getByTestId('field')).toHaveClass('custom-class')
    })

    it('passes through additional props', () => {
      render(
        <Field data-testid="field" aria-describedby="help-text">
          <input />
        </Field>
      )
      expect(screen.getByTestId('field')).toHaveAttribute('aria-describedby', 'help-text')
    })
  })

  // Label
  describe('label', () => {
    it('renders label text when provided', () => {
      render(
        <Field label="Email">
          <input />
        </Field>
      )
      expect(screen.getByText('Email')).toBeInTheDocument()
    })

    it('does not render label element when label prop is not provided', () => {
      render(
        <Field data-testid="field">
          <input />
        </Field>
      )
      expect(screen.queryByRole('label')).not.toBeInTheDocument()
    })

    it('hides top section when no label or optional text', () => {
      const { container } = render(
        <Field>
          <input />
        </Field>
      )
      // Top section should not exist
      const topSection = container.querySelector('.h-6.mb-0\\.5')
      expect(topSection).not.toBeInTheDocument()
    })

    it('shows top section when label is provided', () => {
      render(
        <Field label="Test Label">
          <input />
        </Field>
      )
      expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    it('focuses input when label is clicked', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Username">
          <input data-testid="input" />
        </Field>
      )

      const label = screen.getByText('Username')
      await user.click(label)

      expect(screen.getByTestId('input')).toHaveFocus()
    })
  })

  // Optional text
  describe('optionalText', () => {
    it('renders optional text when provided', () => {
      render(
        <Field optionalText="Optional">
          <input />
        </Field>
      )
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })

    it('shows top section when only optional text is provided', () => {
      render(
        <Field optionalText="Optional">
          <input />
        </Field>
      )
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })

    it('renders both label and optional text', () => {
      render(
        <Field label="Phone" optionalText="Optional">
          <input />
        </Field>
      )
      expect(screen.getByText('Phone')).toBeInTheDocument()
      expect(screen.getByText('Optional')).toBeInTheDocument()
    })
  })

  // Additional text
  describe('additionalText', () => {
    it('renders additional text when provided', () => {
      render(
        <Field additionalText="Enter your email address">
          <input />
        </Field>
      )
      expect(screen.getByText('Enter your email address')).toBeInTheDocument()
    })

    it('does not render additional text section when not provided', () => {
      render(
        <Field label="Email">
          <input />
        </Field>
      )
      expect(screen.queryByText('Enter your email address')).not.toBeInTheDocument()
    })
  })

  // Invalid text
  describe('invalidText', () => {
    it('renders invalid text when provided', () => {
      render(
        <Field invalidText="This field is required">
          <input />
        </Field>
      )
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('renders both invalid and additional text', () => {
      render(
        <Field invalidText="Invalid email" additionalText="Required">
          <input />
        </Field>
      )
      expect(screen.getByText('Invalid email')).toBeInTheDocument()
      expect(screen.getByText('Required')).toBeInTheDocument()
    })

    it('does not render invalid text when not provided', () => {
      render(
        <Field label="Email">
          <input />
        </Field>
      )
      expect(screen.queryByText('This field is required')).not.toBeInTheDocument()
    })
  })

  // Tooltip
  describe('tooltip', () => {
    it('renders tooltip element when provided', () => {
      render(
        <Field label="API Key" tooltip={<span data-testid="tooltip">?</span>}>
          <input />
        </Field>
      )
      expect(screen.getByTestId('tooltip')).toBeInTheDocument()
    })

    it('does not render tooltip container when not provided', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>
      )
      // Check that there's no tooltip container with mx-2 class
      const tooltipContainers = container.querySelectorAll('.mx-2')
      expect(tooltipContainers.length).toBe(0)
    })

    it('renders tooltip between label and optional text', () => {
      const { container } = render(
        <Field
          label="Secret"
          tooltip={<span data-testid="tooltip">?</span>}
          optionalText="Optional"
        >
          <input />
        </Field>
      )

      // All three should be in the top section
      expect(screen.getByText('Secret')).toBeInTheDocument()
      expect(screen.getByTestId('tooltip')).toBeInTheDocument()
      expect(screen.getByText('Optional')).toBeInTheDocument()

      // Verify order in DOM
      const topSection = container.querySelector('.flex.items-baseline.h-6')
      expect(topSection).not.toBeNull()
      const children = topSection!.childNodes
      expect(children.length).toBe(3) // label, tooltip container, optional text
    })
  })

  // Disabled state
  describe('disabled state', () => {
    it('applies disabled styles to label', () => {
      render(
        <Field label="Username" disabled>
          <input disabled />
        </Field>
      )
      const label = screen.getByText('Username')
      expect(label).toHaveClass('text-[var(--sinch-comp-field-color-disabled-label-initial)]')
    })

    it('applies disabled styles to optional text', () => {
      render(
        <Field optionalText="Optional" disabled>
          <input disabled />
        </Field>
      )
      const optionalText = screen.getByText('Optional')
      expect(optionalText).toHaveClass('text-[var(--sinch-comp-field-color-disabled-optional-initial)]')
    })

    it('applies disabled styles to additional text', () => {
      render(
        <Field additionalText="Helper text" disabled>
          <input disabled />
        </Field>
      )
      const additionalText = screen.getByText('Helper text')
      expect(additionalText).toHaveClass('text-[var(--sinch-comp-field-color-disabled-additional-initial)]')
    })

    it('does not apply disabled styles when disabled is false', () => {
      render(
        <Field label="Username" disabled={false}>
          <input />
        </Field>
      )
      const label = screen.getByText('Username')
      expect(label).toHaveClass('text-[var(--sinch-comp-field-color-default-label-initial)]')
    })
  })

  // Styles
  describe('styles', () => {
    it('applies correct font styles to label', () => {
      render(
        <Field label="Test Label">
          <input />
        </Field>
      )
      const label = screen.getByText('Test Label')
      expect(label).toHaveClass('font-[var(--sinch-comp-field-font-label)]')
    })

    it('applies correct font styles to optional text', () => {
      render(
        <Field optionalText="Optional">
          <input />
        </Field>
      )
      const optionalText = screen.getByText('Optional')
      expect(optionalText).toHaveClass('font-[var(--sinch-comp-field-font-optional)]')
    })

    it('applies correct font styles to additional text', () => {
      render(
        <Field additionalText="Helper">
          <input />
        </Field>
      )
      const additionalText = screen.getByText('Helper')
      expect(additionalText).toHaveClass('font-[var(--sinch-comp-field-font-additional)]')
    })

    it('applies correct font styles to invalid text', () => {
      render(
        <Field invalidText="Error message">
          <input />
        </Field>
      )
      const invalidText = screen.getByText('Error message')
      expect(invalidText).toHaveClass('font-[var(--sinch-comp-field-font-invalid)]')
    })

    it('applies correct color to invalid text', () => {
      render(
        <Field invalidText="Error message">
          <input />
        </Field>
      )
      const invalidText = screen.getByText('Error message')
      expect(invalidText).toHaveClass('text-[var(--sinch-comp-field-color-invalid-text-initial)]')
    })
  })

  // Integration with form elements
  describe('integration', () => {
    it('focuses textarea when label is clicked', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Description">
          <textarea data-testid="textarea" />
        </Field>
      )

      const label = screen.getByText('Description')
      await user.click(label)

      expect(screen.getByTestId('textarea')).toHaveFocus()
    })

    it('focuses select when label is clicked', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Country">
          <select data-testid="select">
            <option value="us">USA</option>
            <option value="uk">UK</option>
          </select>
        </Field>
      )

      const label = screen.getByText('Country')
      await user.click(label)

      expect(screen.getByTestId('select')).toHaveFocus()
    })

    it('works with custom focusable elements', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Custom Input">
          <div tabIndex={0} data-testid="custom-input" />
        </Field>
      )

      const label = screen.getByText('Custom Input')
      await user.click(label)

      expect(screen.getByTestId('custom-input')).toHaveFocus()
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('uses semantic label element', () => {
      render(
        <Field label="Email">
          <input />
        </Field>
      )
      const label = screen.getByText('Email')
      expect(label.tagName).toBe('LABEL')
    })

    it('label has cursor pointer for clickability indication', () => {
      render(
        <Field label="Email">
          <input />
        </Field>
      )
      const label = screen.getByText('Email')
      expect(label).toHaveClass('cursor-pointer')
    })
  })
})
