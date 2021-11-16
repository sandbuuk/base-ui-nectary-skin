import type { TSinchCheckbox } from '@saas/components/checkbox'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/checkbox'

export default {
  title: 'Checkbox',
  argTypes: {
    isChecked: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template: Story<TSinchCheckbox> = ({ isChecked, onChange }) => {
  const checkbox = document.createElement('sinch-checkbox')

  checkbox.isChecked = isChecked

  checkbox.onChange = (newIsChecked) => {
    checkbox.isChecked = newIsChecked

    onChange(newIsChecked)
  }

  return checkbox
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  isChecked: true,
}

Checkbox.parameters = {
  docs: {
    source: {
      code: '<sinch-checkbox isChecked={isChecked} onChange={setIsChecked}></sinch-checkbox>',
    },
  },
}
