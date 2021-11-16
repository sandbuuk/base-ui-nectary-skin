import type { TSinchButtonPrimary } from '@saas/components/button/primary'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/primary'

export default {
  title: 'Components/Button/Primary',
  argTypes: {
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonPrimary> = ({ text, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button-primary')

  button.text = text
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const Primary = Template.bind({})

Primary.args = {
  text: 'Click me',
  disabled: false,
  small: false,
}

Primary.parameters = {
  docs: {
    // inlineStories: true,
    source: {
      code: '<sinch-button-primary text="Click me" onClick={onClick}></sinch-button-primary>',
    },
  },
}
