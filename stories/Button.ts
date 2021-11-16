import type { TSinchButtonPrimary } from '@saas/components/button/primary'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/primary'

export default {
  title: 'Button',
  argTypes: {
    value: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonPrimary> = ({ value, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button-primary')

  button.value = value
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const ButtonPrimary = Template.bind({})

ButtonPrimary.args = {
  value: 'Click me',
  disabled: false,
  small: false,
}

ButtonPrimary.parameters = {
  docs: {
    source: {
      code: '<sinch-button-primary value="Click me" onClick={setValue}></sinch-button-primary>',
    },
  },
}
