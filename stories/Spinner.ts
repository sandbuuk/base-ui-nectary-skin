import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/spinner'

export default {
  title: 'Components/Spinner',
  argTypes: {
    type: { control: 'select', options: ['large', 'medium', 'small'], description: 'Spinner size' },
  },
} as Meta

const Template: Story = () => {
  const [{ type }] = useArgs()
  const spinnerRef = useRef<HTMLElementTagNameMap['sinch-spinner'] | null>(null)

  if (spinnerRef.current === null) {
    const $spinner = document.createElement('sinch-spinner')

    spinnerRef.current = $spinner
  }

  const $spinner = spinnerRef.current!

  $spinner.type = type

  return $spinner
}

export const Spinner = Template.bind({})

Spinner.args = {}

Spinner.parameters = {
  docs: {
    source: {
      code: '<sinch-spinner type="medium"></sinch-spinner>',
    },
  },
}
