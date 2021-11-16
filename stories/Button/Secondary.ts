import type { TSinchButtonSecondary } from '@saas/components/button/secondary'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/secondary'

export default {
  title: 'Components/Button/Secondary',
  argTypes: {
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonSecondary> = ({ text, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button-secondary')

  button.text = text
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const Secondary = Template.bind({})

Secondary.args = {
  text: 'Click me',
  disabled: false,
  small: false,
}

Secondary.parameters = {
  docs: {
    source: {
      code: '<sinch-button-secondary text="Click me" onClick={onClick}></sinch-button-secondary>',
    },
  },
}
