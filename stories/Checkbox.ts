import type { TSinchCheckbox } from '@saas/components/checkbox'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/checkbox'

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template: Story<TSinchCheckbox> = ({ checked, indeterminate, disabled, text, onChange }) => {
  const checkbox = document.createElement('sinch-checkbox')

  checkbox.checked = checked
  checkbox.indeterminate = indeterminate
  checkbox.disabled = disabled
  checkbox.text = text

  checkbox.onChange = (newIsChecked) => {
    checkbox.checked = newIsChecked

    onChange(newIsChecked)
  }

  return checkbox
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  checked: true,
  indeterminate: false,
  disabled: false,
  text: 'Label',
}

Checkbox.parameters = {
  docs: {
    source: {
      code: '<sinch-checkbox checked={isChecked} onChange={setIsChecked}></sinch-checkbox>',
    },
  },
}
