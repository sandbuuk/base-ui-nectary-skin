import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon/open-in-new'
import '@sinch-engage/nectary/spinner'

export default {
  title: 'Components/Button',
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'cta-primary', 'cta-secondary', 'destructive'], description: 'Button visual type' },
    text: { control: 'text', description: 'Button label text' },
    disabled: { control: 'boolean', description: 'Is button disabled' },
    small: { control: 'boolean', description: 'Button Small variant' },
    onClick: { action: 'onClick', description: 'Click handler' },
    onFocus: { action: 'onFocus', description: 'Focus handler (optional)' },
    onBlur: { action: 'onBlur', description: 'Blur handler (optional)' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-button']> => () => {
  const [{ type, text, disabled, small }] = useArgs()
  const buttonRef = useRef<HTMLElementTagNameMap['sinch-button'] | null>(null)

  if (buttonRef.current === null) {
    const $button = document.createElement('sinch-button')

    $button.innerHTML = innerHTML

    buttonRef.current = $button
  }

  const $button = buttonRef.current!

  $button.type = type
  $button.text = text
  $button.disabled = disabled
  $button.small = small

  return $button
}

export const Button = Template()

Button.args = {
  type: 'primary',
  text: 'Click me',
  disabled: false,
  small: false,
}

Button.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}></sinch-button>',
    },
  },
}

export const ButtonSecondary = Template()

ButtonSecondary.args = {
  type: 'secondary',
  text: 'Click me',
}

ButtonSecondary.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="secondary" text="Click me" onClick={onClick}></sinch-button>',
    },
  },
}

export const ButtonCtaPrimary = Template()

ButtonCtaPrimary.args = {
  type: 'cta-primary',
  text: 'Click me',
}

ButtonCtaPrimary.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="cta-primary" text="Click me" onClick={onClick}></sinch-button>',
    },
  },
}

export const ButtonCtaSecondary = Template()

ButtonCtaSecondary.args = {
  type: 'cta-secondary',
  text: 'Click me',
}

ButtonCtaSecondary.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="cta-secondary" text="Click me" onClick={onClick}></sinch-button>',
    },
  },
}

export const ButtonWithIcon = Template('<sinch-icon-open-in-new size="18" slot="icon"></sinch-icon-open-in-new>')

ButtonWithIcon.args = {
  type: 'primary',
  text: 'Click me',
}

ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-open-in-new size="18" slot="icon"></sinch-icon-open-in-new>\n</sinch-button>',
    },
  },
}

export const ButtonWithSpinner = Template('<sinch-spinner slot="icon"></sinch-spinner>')

ButtonWithSpinner.args = {
  type: 'primary',
  text: 'Click me',
}

ButtonWithSpinner.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-spinner slot="icon"></sinch-spinner>\n</sinch-button>',
    },
  },
}

export const SmallButtonWithIcon = Template('<sinch-icon-open-in-new size="16" slot="icon"></sinch-icon-open-in-new>')

SmallButtonWithIcon.args = {
  type: 'primary',
  text: 'Click me',
  small: true,
}

SmallButtonWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-open-in-new size="16" slot="icon"></sinch-icon-open-in-new>\n</sinch-button>',
    },
  },
}

export const SmallButtonWithSpinner = Template('<sinch-spinner type="small" slot="icon"></sinch-spinner>')

SmallButtonWithSpinner.args = {
  type: 'primary',
  text: 'Click me',
  small: true,
}

SmallButtonWithSpinner.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-spinner type="small" slot="icon"></sinch-spinner>\n</sinch-button>',
    },
  },
}
