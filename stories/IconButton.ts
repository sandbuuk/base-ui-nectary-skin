import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/help-outline'
import '@sinch-engage/nectary/spinner'

export default {
  title: 'Components/IconButton',
  argTypes: {
    disabled: { control: 'boolean', description: 'Is button disabled' },
    small: { control: 'boolean', description: 'Is button small' },
    onClick: { action: 'onClick', description: 'Click handler' },
    onFocus: { action: 'onFocus', description: 'Focus handler (optional)' },
    onBlur: { action: 'onBlur', description: 'Blur handler (optional)' },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{ disabled, small }] = useArgs()
  const buttonRef = useRef<HTMLElementTagNameMap['sinch-icon-button'] | null>(null)

  if (buttonRef.current === null) {
    const $button = document.createElement('sinch-icon-button')

    $button.innerHTML = innerHTML

    buttonRef.current = $button
  }

  const $button = buttonRef.current!

  $button.disabled = disabled
  $button.small = small

  return $button
}

export const IconButton = Template('<sinch-icon-help-outline slot="icon"></sinch-icon-help-outline>')

IconButton.args = {
  disabled: false,
}

IconButton.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-button onClick={onClick}>\n  <sinch-icon-help-outline slot="icon"></sinch-icon-help-outline>\n</sinch-icon-button>',
    },
  },
}

export const IconButtonWithSpinner = Template('<sinch-spinner slot="icon"></sinch-spinner>')

IconButtonWithSpinner.args = {}

IconButtonWithSpinner.parameters = {
  docs: {
    source: {
      code: '<sinch-icon-button onClick={onClick}>\n  <sinch-spinner slot="icon"></sinch-spinner>\n</sinch-icon-button>',
    },
  },
}
