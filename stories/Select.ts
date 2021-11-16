import type { TSinchSelect } from '@saas/components/select'
import type { Meta, Story } from '@storybook/html'
// https://github.com/storybookjs/storybook/issues/11657
// import { useArgs } from '@storybook/client-api'
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
  value,
  label,
  additionalText,
  optionalText,
  invalidText,
  disabled,
  onChange,
}) => {
  // const [{ value }, updateArgs] = useArgs()
  const input = document.createElement('sinch-select')

  input.innerHTML = `
  <sinch-select-option value="1" text="Option 1 value" slot="select"></sinch-select-option>
  <sinch-select-option value="2" text="Option 2 value" slot="select"></sinch-select-option>
  <sinch-select-option value="3" text="Option 3 value" slot="select"></sinch-select-option>
  
`

  input.value = value
  input.label = label
  input.additionalText = additionalText
  input.optionalText = optionalText
  input.invalidText = invalidText
  input.disabled = disabled

  input.onChange = (newValue) => {
    input.value = newValue

    onChange(newValue)
    // updateArgs({ value: newValue })
  }

  return input
}

export const Select = Template.bind({})

Select.args = {
  value: '2',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  invalidText: 'Invalid',
  disabled: false,
}

Select.parameters = {
  docs: {
    source: {
      code: '<sinch-select value={value} onChange={setValue}></sinch-input>',
    },
  },
}
