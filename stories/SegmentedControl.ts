import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/icons/help-outline'

export default {
  title: 'Components/SegmentedControl',
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-segmented-control']> => ({ onChange }) => {
  const [{ value }, updateArgs] = useArgs()
  const radioRef = useRef<HTMLElementTagNameMap['sinch-segmented-control'] | null>(null)

  if (radioRef.current === null) {
    const $tabs = document.createElement('sinch-segmented-control')

    $tabs.innerHTML = innerHTML

    $tabs.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    radioRef.current = $tabs
  }

  const $tabs = radioRef.current!

  $tabs.value = value

  return $tabs
}

const tabsInnerHTML = `
  <sinch-segmented-control-option value="1" text="Tab 1 label"></sinch-segmented-control-option>
  <sinch-segmented-control-option value="2" text="Lorem Ipsum Ipsum.">
    <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
  </sinch-segmented-control-option>
  <sinch-segmented-control-option value="3" text="Tab disabled" disabled>
    <sinch-icon-help-outline slot="icon"></sinch-icon-help-outline>
  </sinch-segmented-control-option>
  <sinch-segmented-control-option value="4" text="Tab 4 label"></sinch-segmented-control-option>
`

export const SegmentedControl = Template(tabsInnerHTML)

SegmentedControl.args = {
  value: '1',
}

SegmentedControl.parameters = {
  docs: {
    source: {
      code: `<sinch-segmented-control value={value} onChange={setValue}>${tabsInnerHTML}</sinch-segmented-control>`,
    },
  },
}
