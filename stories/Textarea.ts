import { useArgs, useRef } from '@storybook/addons'
import type { TSinchTextarea } from '@saas/components/textarea'
import type { Meta, Story } from '@storybook/html'
// https://github.com/storybookjs/storybook/issues/11657
// import { useArgs } from '@storybook/client-api'
import '@saas/components/textarea'
import '@saas/components/input-tooltip'

export default {
  title: 'Components/Textarea',
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
        component: 'Textarea component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template: Story<TSinchTextarea> = ({ onChange }) => {
  const [{
    value,
    label,
    placeholder,
    additionalText,
    optionalText,
    invalidText,
    disabled,
  }, updateArgs] = useArgs()
  const inputRef = useRef<(HTMLElement & TSinchTextarea) | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-textarea')

    $input.innerHTML = '<sinch-input-tooltip text="Tooltip text long"></sinch-input-tooltip>'

    $input.onChange = (newValue) => {
      onChange(newValue)
      updateArgs({ value: newValue })
    }

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

  return $input
}

export const Textarea = Template.bind({})

Textarea.args = {
  value: 'hi',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  invalidText: 'Invalid',
  placeholder: 'Placeholder',
  disabled: false,
}

Textarea.parameters = {
  docs: {
    source: {
      code: '<sinch-textarea value={value} onChange={setValue}>\n  <sinch-input-tooltip text="Tooltip text long"></sinch-input-tooltip>\n</sinch-textarea>',
    },
  },
}
