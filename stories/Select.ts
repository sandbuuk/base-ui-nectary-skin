import { useArgs, useRef } from '@storybook/addons'
import type { TSinchSelect } from '@saas/components/select'
import type { Meta, Story } from '@storybook/html'
import '@saas/components/select'
import '@saas/components/input-tooltip'

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

const Template: Story<TSinchSelect> = ({
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

  const inputRef = useRef<(HTMLElement & TSinchSelect) | null>(null)
  const wrapperRef = useRef<(HTMLElement) | null>(null)

  if (inputRef.current === null) {
    const $wrapper = document.createElement('div')

    $wrapper.style.height = '300px'
    $wrapper.style.display = 'flex'
    $wrapper.style.justifyContent = 'center'
    $wrapper.style.alignItems = 'center'

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

    $input.onChange = (newValue) => {
      onChange(newValue)
      updateArgs({ value: newValue })
    }

    $wrapper.appendChild($input)

    inputRef.current = $input
    wrapperRef.current = $wrapper
  }

  const $input = inputRef.current!

  $input.value = value
  $input.label = label
  $input.placeholder = placeholder
  $input.additionalText = additionalText
  $input.optionalText = optionalText
  $input.invalidText = invalidText
  $input.disabled = disabled

  return wrapperRef.current!
}

export const Select = Template.bind({})

Select.args = {
  value: '2',
  label: 'Label',
  placeholder: 'Placeholder',
  optionalText: 'Optional',
  additionalText: 'Additional',
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
