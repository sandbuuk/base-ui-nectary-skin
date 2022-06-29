import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/segmented-icon-control'
import '@sinch-engage/nectary/segmented-icon-control-option'
import '@sinch-engage/nectary/icons/format-align-left'
import '@sinch-engage/nectary/icons/format-align-right'
import '@sinch-engage/nectary/icons/format-align-center'
import '@sinch-engage/nectary/icons/format-align-justify'

export default {
  title: 'Components/SegmentedIconControl',
  argTypes: {
    value: { control: 'text' },
    multiple: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-segmented-icon-control']> => ({ onChange }) => {
  const [{ value, multiple }, updateArgs] = useArgs()
  const controlRef = useRef<HTMLElementTagNameMap['sinch-segmented-icon-control'] | null>(null)

  if (controlRef.current === null) {
    const $tabs = document.createElement('sinch-segmented-icon-control')

    $tabs.innerHTML = innerHTML

    $tabs.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    controlRef.current = $tabs
  }

  const $el = controlRef.current!

  $el.value = value
  $el.multiple = multiple

  return $el
}

const itemsInnerHTML = `
  <sinch-segmented-icon-control-option value="1">
    <sinch-icon-format-align-left slot="icon"></sinch-icon-format-align-left>
  </sinch-segmented-icon-control-option>
  <sinch-segmented-icon-control-option value="2" disabled>
    <sinch-icon-format-align-center slot="icon"></sinch-icon-format-align-center>
  </sinch-segmented-icon-control-option>
  <sinch-segmented-icon-control-option value="3">
    <sinch-icon-format-align-right slot="icon"></sinch-icon-format-align-right>
  </sinch-segmented-icon-control-option>
  <sinch-segmented-icon-control-option value="4">
    <sinch-icon-format-align-justify slot="icon"></sinch-icon-format-align-justify>
  </sinch-segmented-icon-control-option>
`

export const SegmentedIconControl = Template(itemsInnerHTML)

SegmentedIconControl.args = {
  value: '',
  multiple: false,
}

SegmentedIconControl.parameters = {
  docs: {
    source: {
      code: `<sinch-segmented-icon-control multiple value={value} onChange={setValue}>${itemsInnerHTML}</sinch-segmented-icon-control>`,
    },
  },
}
