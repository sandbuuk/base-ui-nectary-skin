import type { TSinchButtonCta } from '@saas/components/button/cta'
import type { Story, Meta } from '@storybook/html'
import '@saas/components/theme.css'
import '@saas/components/button/cta'

export default {
  title: 'Components/Button/Cta',
  argTypes: {
    text: { control: 'text' },
    disabled: { action: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as Meta

const Template: Story<TSinchButtonCta> = ({ text, disabled, onClick }) => {
  const button = document.createElement('sinch-button-cta')

  button.text = text
  button.disabled = disabled
  button.onClick = onClick

  return button
}

export const Cta = Template.bind({})

Cta.args = {
  text: 'Click me',
  disabled: false,
}

Cta.parameters = {
  docs: {
    source: {
      code: '<sinch-button-cta text="Click me" onClick={onClick}></sinch-button-cta>',
    },
  },
}
