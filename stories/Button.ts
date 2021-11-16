import type { TSinchButton } from '@saas/components/button'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/button'

export default {
  title: 'Button',
  argTypes: {
    value: { control: 'text' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButton> = ({ value, onClick }) => {
  const button = document.createElement('sinch-button')

  button.value = value
  button.onClick = onClick

  return button
}

export const Button = Template.bind({})

Button.args = {
  value: 'Click me',
}

Button.parameters = {
  docs: {
    source: {
      code: '<sinch-button value="Click me" onClick={setValue}></sinch-button>',
    },
  },
}
