import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/toggle'

export default {
  title: 'Components/Toggle',
  argTypes: {
    checked: { control: 'boolean' },
    small: { control: 'boolean' },
    labeled: { control: 'boolean' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template: Story<JSX.IntrinsicElements['sinch-toggle']> = ({ onChange }) => {
  const [{ checked, small, labeled, disabled, text }, updateArgs] = useArgs()
  const checkboxRef = useRef<HTMLElementTagNameMap['sinch-toggle'] | null>(null)

  if (checkboxRef.current === null) {
    const $checkbox = document.createElement('sinch-toggle')

    let timeId: any

    $checkbox.addEventListener('change', (e: any) => {
      onChange(e.detail)

      // optimistic update
      $checkbox.checked = e.detail

      // animation timeout, otherwise storybook remounts without animation
      clearTimeout(timeId)
      timeId = setTimeout(() => {
        updateArgs({ checked: e.detail })
      }, 150)

      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => el?.focus(), document.activeElement)
    })

    checkboxRef.current = $checkbox
  }

  const $checkbox = checkboxRef.current!

  $checkbox.checked = checked
  $checkbox.disabled = disabled
  $checkbox.small = small
  $checkbox.labeled = labeled
  $checkbox.text = text

  return $checkbox
}

export const Toggle = Template.bind({})

Toggle.args = {
  checked: true,
  small: false,
  labeled: false,
  disabled: false,
  text: 'Label',
}

Toggle.parameters = {
  docs: {
    source: {
      code: '<sinch-toggle checked={isChecked} onChange={setIsChecked}></sinch-toggle>',
    },
  },
}
