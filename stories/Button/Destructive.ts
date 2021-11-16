import type { TSinchButtonDestructive } from '@saas/components/button/destructive'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/destructive'

export default {
  title: 'Components/Button/Destructive',
  argTypes: {
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonDestructive> = ({ text, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button-destructive')

  button.text = text
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const Destructive = Template.bind({})

Destructive.args = {
  text: 'Click me',
  disabled: false,
  small: false,
}

Destructive.parameters = {
  docs: {
    source: {
      code: '<sinch-button-destructive text="Click me" onClick={onClick}></sinch-button-destructive>',
    },
  },
}
