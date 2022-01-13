import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@nectary/components/theme.css'
import '@nectary/components/button'
import '@nectary/components/icon/share'
import '@nectary/components/spinner'

export default {
  title: 'Components/Button',
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'cta', 'destructive'], description: 'Button visual type' },
    text: { control: 'text', description: 'Button label text' },
    disabled: { control: 'boolean', description: 'Is button disabled' },
    small: { control: 'boolean', description: 'Button Small variant' },
    onClick: { action: 'onClick', description: 'Click handler' },
    onFocus: { action: 'onFocus', description: 'Focus handler (optional)' },
    onBlur: { action: 'onBlur', description: 'Blur handler (optional)' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-button']> => ({ onClick, onFocus, onBlur }) => {
  const [{ type, text, disabled, small }] = useArgs()
  const buttonRef = useRef<HTMLElementTagNameMap['sinch-button'] | null>(null)

  if (buttonRef.current === null) {
    const $button = document.createElement('sinch-button')

    $button.innerHTML = innerHTML

    $button.addEventListener('click', () => {
      onClick()
    })
    $button.addEventListener('focus', () => {
      onFocus?.()
    })
    $button.addEventListener('blur', () => {
      onBlur?.()
    })

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
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#fff' },
      { name: 'Dark', value: '#1c233f' },
    ],
  },
}

export const ButtonWithIcon = Template('<sinch-icon-share size="18"></sinch-icon-share>')

ButtonWithIcon.args = {
  type: 'primary',
  text: 'Click me',
}

ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share size="18"></sinch-icon-share>\n</sinch-button>',
    },
  },
}

export const ButtonWithSpinner = Template('<sinch-spinner></sinch-spinner>')

ButtonWithSpinner.args = {
  type: 'primary',
  text: 'Click me',
}

ButtonWithSpinner.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-spinner></sinch-spinner>\n</sinch-button>',
    },
  },
}

export const SmallButtonWithIcon = Template('<sinch-icon-share size="12"></sinch-icon-share>')

SmallButtonWithIcon.args = {
  type: 'primary',
  text: 'Click me',
  small: true,
}

SmallButtonWithIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share size="12"></sinch-icon-share>\n</sinch-button>',
    },
  },
}

export const SmallButtonWithSpinner = Template('<sinch-spinner type="small"></sinch-spinner>')

SmallButtonWithSpinner.args = {
  type: 'primary',
  text: 'Click me',
  small: true,
}

SmallButtonWithSpinner.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-spinner type="small"></sinch-spinner>\n</sinch-button>',
    },
  },
}
