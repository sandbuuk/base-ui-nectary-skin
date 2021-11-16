import type { TSinchButtonPrimary } from '@saas/components/button/primary'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/primary'
import '@saas/components/icon/share'

export default {
  title: 'Components/Button/Primary',
  argTypes: {
    type: { control: 'text' },
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    small: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonPrimary> = ({ type, text, disabled, small, onClick }) => {
  const button = document.createElement('sinch-button-primary')

  button.innerHTML = `
    <sinch-icon-share slot="left-icon"></sinch-icon-share>
    <sinch-icon-share slot="right-icon"></sinch-icon-share>
  `

  button.type = type
  button.text = text
  button.disabled = disabled
  button.small = small
  button.onClick = onClick

  return button
}

export const Primary = Template.bind({})

Primary.args = {
  type: 'primary',
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
