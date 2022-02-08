import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/tabs'

export default {
  title: 'Components/Tabs',
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-tabs']> => ({ onChange }) => {
  const [{ value }, updateArgs] = useArgs()
  const radioRef = useRef<HTMLElementTagNameMap['sinch-tabs'] | null>(null)

  if (radioRef.current === null) {
    const $tabs = document.createElement('sinch-tabs')

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

export const Tabs = Template(`
<sinch-tabs-option value="1" text="Tab 1 label"></sinch-tabs-option>
<sinch-tabs-option value="2" text="Lorem Ipsum Ipsum.">
  <sinch-icon-share></sinch-icon-share>
</sinch-tabs-option>
<sinch-tabs-option value="3" text="Tab disabled" disabled>
  <sinch-icon-tooltip></sinch-icon-tooltip>
</sinch-tabs-option>
<sinch-tabs-option value="4" text="Tab 4 label"></sinch-tabs-option>
`)

Tabs.args = {
  value: '1',
}

Tabs.parameters = {
  docs: {
    source: {
      code: `
<sinch-tabs value={value} onChange={setValue}>
  <sinch-tabs-option value="1" text="Tab 1 label"></sinch-tabs-option>
  <sinch-tabs-option value="2" text="Lorem Ipsum Ipsum.">
    <sinch-icon-share></sinch-icon-share>
  </sinch-tabs-option>
  <sinch-tabs-option value="3" text="Tab disabled" disabled>
    <sinch-icon-tooltip></sinch-icon-tooltip>
  </sinch-tabs-option>
  <sinch-tabs-option value="4" text="Tab 4 label"></sinch-tabs-option>
</sinch-tabs>`,
    },
  },
}
