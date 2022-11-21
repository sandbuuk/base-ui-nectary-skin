import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/spinner'

export default {
  title: 'Components/Spinner',
  argTypes: {
    size: {
      description: 'Spinner size',
      control: 'select',
      options: sizeValues,
    },
  },
} as Meta

const Template: Story = () => {
  const [{ size }] = useArgs()
  const spinnerRef = useRef<HTMLElementTagNameMap['sinch-spinner'] | null>(null)

  if (spinnerRef.current === null) {
    const $spinner = document.createElement('sinch-spinner')

    spinnerRef.current = $spinner
  }

  const $spinner = spinnerRef.current!

  $spinner.size = size

  return $spinner
}

export const Spinner = Template.bind({})

Spinner.args = {}

Spinner.parameters = {
  docs: {
    source: {
      code: '<sinch-spinner size="m"></sinch-spinner>',
    },
  },
}
