import { useArgs, useRef } from '@storybook/addons'
import type { TSinchButton } from '@nectary/components/button'
import type { Story, Meta } from '@storybook/html'
import '@nectary/components/theme.css'
import '@nectary/components/button'
import '@nectary/components/icon/share'

export default {
  title: 'Components/Button',
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'cta', 'destructive'] },
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButton> = ({ onClick }) => {
  const [{ type, text, disabled, small }] = useArgs()
  const buttonRef = useRef<(HTMLElement & TSinchButton) | null>(null)

  if (buttonRef.current === null) {
    const $button = document.createElement('sinch-button')

    $button.onClick = onClick

    buttonRef.current = $button
  }

  const $button = buttonRef.current!

  $button.type = type
  $button.text = text
  $button.disabled = disabled
  $button.small = small

  return $button
}

export const Button = Template.bind({})

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

export const ButtonWithLeftIcon = Template.bind({})
ButtonWithLeftIcon.args = Button.args
ButtonWithLeftIcon.parameters = {
  docs: {
    source: {
      code: '<sinch-button type="primary" text="Click me" onClick={onClick}>\n  <sinch-icon-share></sinch-icon-share>\n</sinch-button>',
    },
  },
}
ButtonWithLeftIcon.decorators = [
  (Story) => {
    const button = Story() as Element

    button.innerHTML = `<sinch-icon-share></sinch-icon-share>`

    return button
  },
]
