import type { TSinchInput } from '@saas/components/input'
import type { Meta, Story } from '@storybook/html'
// https://github.com/storybookjs/storybook/issues/11657
// import { useArgs } from '@storybook/client-api'
import '@saas/components/input'
import '@saas/components/input-tooltip'

export default {
  title: 'Components/Input',
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
      description: 'Placeholder',
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

const Template: Story<TSinchInput> = ({
  value,
  label,
  placeholder,
  additionalText,
  optionalText,
  invalidText,
  disabled,
  onChange,
}) => {
  // const [{ value }, updateArgs] = useArgs()
  const input = document.createElement('sinch-input')

  input.innerHTML = `
  <sinch-input-tooltip text="Tooltip text long"/>`

  input.value = value
  input.label = label
  input.placeholder = placeholder
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

export const Input = Template.bind({})

Input.args = {
  value: 'hi',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  invalidText: 'Invalid',
  placeholder: 'Placeholder',
  disabled: false,
}

Input.parameters = {
  docs: {
    source: {
      code: '<sinch-input value={value} onChange={setValue}></sinch-input>',
    },
  },
}
