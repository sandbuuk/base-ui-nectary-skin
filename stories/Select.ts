import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from './use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/select'
import '@nectary/components/input-tooltip'

export default {
  title: 'Components/Select',
  argTypes: {
    disabled: {
      description: 'Is disabled',
      control: 'boolean',
    },
    value: {
      description: 'Input value',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder value',
      control: 'text',
    },
    label: {
      description: 'Label',
      control: 'text',
    },
    optionalText: {
      description: 'Optional',
      control: 'text',
    },
    additionalText: {
      description: 'Additional',
      control: 'text',
    },
    invalidText: {
      description: 'Invalid',
      control: 'text',
    },
    onChange: {
      description: 'Handler to sync input value with the state',
      action: 'onChange',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Input component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template: Story<JSX.IntrinsicElements['sinch-select']> = ({
  onChange,
}) => {
  const [{
    value,
    label,
    placeholder,
    additionalText,
    optionalText,
    invalidText,
    disabled,
  }, updateArgs] = useArgs()

  const $wrapper = useStoryWrapper()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-select'] | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-select')

    $input.innerHTML = `
      <sinch-input-tooltip text="Tooltip text long long" width="200" slot="tooltip"></sinch-input-tooltip>
      <sinch-select-option value="1" text="Option 1 value" slot="select">
        <sinch-icon-share></sinch-icon-share>
      </sinch-select-option>
      <sinch-select-option value="2" text="Option 2 value" slot="select" disabled>
        <sinch-icon-share></sinch-icon-share>
      </sinch-select-option>
      <sinch-select-option value="3" text="Option 3 value" slot="select"></sinch-select-option>
      <sinch-select-option value="4" text="Option 4 value" slot="select"></sinch-select-option>
    `

    $input.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
    })

    $wrapper.appendChild($input)
    inputRef.current = $input
  }

  const $input = inputRef.current!

  $input.value = value
  $input.label = label
  $input.placeholder = placeholder
  $input.additionalText = additionalText
  $input.optionalText = optionalText
  $input.invalidText = invalidText
  $input.disabled = disabled

  return $wrapper
}

export const Select = Template.bind({})

Select.args = {
  value: '2',
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
}

Select.parameters = {
  docs: {
    source: {
      code: `
<sinch-select value={value} onChange={setValue}>
  <sinch-input-tooltip text="Tooltip text long" slot="tooltip"></sinch-input-tooltip>
  <sinch-select-option value="1" text="Option 1 value" slot="select">
    <sinch-icon-share></sinch-icon-share>
  </sinch-select-option>
  <sinch-select-option value="2" text="Option 2 value" slot="select" disabled>
    <sinch-icon-share></sinch-icon-share>
  </sinch-select-option>
  <sinch-select-option value="3" text="Option 3 value" slot="select"></sinch-select-option>
  <sinch-select-option value="4" text="Option 4 value" slot="select"></sinch-select-option>
</sinch-input>
`,
    },
  },
}
