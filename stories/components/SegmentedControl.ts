import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/icons/help-outline'

export default {
  title: 'Components/SegmentedControl',
  argTypes: {
    value: { control: 'text' },
    'on-change': { description: '' },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{ value }, updateArgs] = useArgs()
  const segmentedRef = useRef<HTMLElementTagNameMap['sinch-segmented-control'] | null>(null)

  if (segmentedRef.current === null) {
    const $el = document.createElement('sinch-segmented-control')

    $el.innerHTML = innerHTML

    $el.addEventListener('-change', (e) => {
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    segmentedRef.current = $el
  }

  const $el = segmentedRef.current!

  $el.value = value

  return $el
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
      code: `<sinch-segmented-control value={value} on-change={setValue}>${tabsInnerHTML}</sinch-segmented-control>`,
    },
  },
}
