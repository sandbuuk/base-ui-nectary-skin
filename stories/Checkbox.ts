import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/checkbox'

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

const Template: Story<JSX.IntrinsicElements['sinch-checkbox']> = ({ onChange }) => {
  const [{ checked, indeterminate, disabled, text }, updateArgs] = useArgs()
  const checkboxRef = useRef<HTMLElementTagNameMap['sinch-checkbox'] | null>(null)

  if (checkboxRef.current === null) {
    const $checkbox = document.createElement('sinch-checkbox')

    $checkbox.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ checked: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate(() => $checkbox.focus())
    })

    checkboxRef.current = $checkbox
  }

  const $checkbox = checkboxRef.current!

  $checkbox.checked = checked
  $checkbox.indeterminate = indeterminate
  $checkbox.disabled = disabled
  $checkbox.text = text

  return $checkbox
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
