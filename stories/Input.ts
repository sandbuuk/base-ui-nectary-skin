import type { TSinchInput } from '@saas/components/input'
import type { Meta, Story } from '@storybook/html'
// https://github.com/storybookjs/storybook/issues/11657
// import { useArgs } from '@storybook/client-api'
import '@saas/components/input'

export default {
  title: 'Components/Input',
  argTypes: {
    value: {
      description: 'Input value',
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

const Template: Story<TSinchInput> = ({ value, onChange }) => {
  // const [{ value }, updateArgs] = useArgs()
  const input = document.createElement('sinch-input')

  input.value = value

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
}

Input.parameters = {
  docs: {
    source: {
      code: '<sinch-input value={value} onChange={setValue}></sinch-input>',
    },
  },
}
