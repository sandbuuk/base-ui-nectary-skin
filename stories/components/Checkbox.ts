import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/checkbox'

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    text: { control: 'text' },
    'on-change': { action: 'on-change' },
  },
} as Meta

const Template: Story = () => {
  const [{ checked, indeterminate, disabled, invalid, text }, updateArgs] = useArgs()
  const checkboxRef = useRef<HTMLElementTagNameMap['sinch-checkbox'] | null>(null)

  if (checkboxRef.current === null) {
    const $checkbox = document.createElement('sinch-checkbox')

    $checkbox.addEventListener('-change', (e) => {
      updateArgs({ checked: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    checkboxRef.current = $checkbox
  }

  const $checkbox = checkboxRef.current!

  $checkbox.checked = checked
  $checkbox.indeterminate = indeterminate
  $checkbox.disabled = disabled
  $checkbox.invalid = invalid
  $checkbox.text = text

  return $checkbox
}

export const Checkbox = Template.bind({})

Checkbox.args = {
  checked: true,
  indeterminate: false,
  disabled: false,
  invalid: false,
  text: 'Label',
}

Checkbox.parameters = {
  docs: {
    source: {
      code: '<sinch-checkbox checked={isChecked} on-change={setIsChecked}></sinch-checkbox>',
    },
  },
}
