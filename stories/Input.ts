import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@nectary/components/input-tooltip'
import '@nectary/components/input'

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

const Template = (innerHTML: string): Story<JSX.IntrinsicElements['sinch-input']> => ({ onChange }) => {
  const [{
    value,
    label,
    placeholder,
    additionalText,
    optionalText,
    invalidText,
    disabled,
  }, updateArgs] = useArgs()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-input'] | null>(null)

  if (inputRef.current == null) {
    const $input = document.createElement('sinch-input')

    $input.innerHTML = innerHTML

    $input.addEventListener('change', (e: any) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => el.focus(), document.activeElement)
    })

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

export const Input = Template('<sinch-input-tooltip text="Tooltip text long"></sinch-input-tooltip>')

Input.args = {
  value: 'hi',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  placeholder: 'Placeholder',
  disabled: false,
}

Input.parameters = {
  docs: {
    source: {
      code: '<sinch-input value={value} onChange={setValue}>\n  <sinch-input-tooltip text="Tooltip text long"></sinch-input-tooltip>\n</sinch-input>',
    },
  },
}
