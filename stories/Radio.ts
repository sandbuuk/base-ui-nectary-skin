import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/radio'

export default {
  title: 'Components/Radio',
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} as Meta

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-radio']> => ({ onChange }) => {
  const [{ value }, updateArgs] = useArgs()
  const radioRef = useRef<HTMLElementTagNameMap['sinch-radio'] | null>(null)

  if (radioRef.current === null) {
    const $radio = document.createElement('sinch-radio')

    $radio.innerHTML = innerHTML

    $radio.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => el?.focus(), document.activeElement)
    })

    radioRef.current = $radio
  }

  const $radio = radioRef.current!

  $radio.value = value

  return $radio
}

export const Radio = Template(
  `<sinch-radio-option value="1" text="Option 1"></sinch-radio-option>
<sinch-radio-option value="2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></sinch-radio-option>
<sinch-radio-option value="3" text="Option 3" disabled></sinch-radio-option>
<sinch-radio-option value="4" text="Option 4"></sinch-radio-option>`
)

Radio.args = {
  value: '1',
}

Radio.parameters = {
  docs: {
    source: {
      code: `
<sinch-radio value={value} onChange={setValue}>
  <sinch-radio-option value="1" text="Option 1"></sinch-radio-option>
  <sinch-radio-option value="2" text="Option 2"></sinch-radio-option>
  <sinch-radio-option value="3" text="Option 3"></sinch-radio-option>
  <sinch-radio-option value="4" text="Option 4"></sinch-radio-option>
</sinch-radio>`,
    },
  },
}
