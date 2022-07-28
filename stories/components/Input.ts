import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

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

const Template = (innerHTML: string): Story => ({ onChange }) => {
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

    // Prevents Storybook hotkeys
    $input.addEventListener('keydown', (e) => {
      e.stopPropagation()
    })

    $input.addEventListener('change', (e) => {
      onChange?.(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
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

const inputInnerHTML = `
  <sinch-help-tooltip slot="tooltip" text="Tooltip text long"></sinch-help-tooltip>
`

export const Input = Template(inputInnerHTML)

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
      code: `<sinch-input value={value} onChange={setValue}>${inputInnerHTML}</sinch-input>`,
    },
  },
}

const inputWithIconButtonInnerHTML = `
  <sinch-help-tooltip slot="tooltip" text="Tooltip text long"></sinch-help-tooltip>
  <sinch-icon-button small slot="right">
    <sinch-icon-calendar-today slot="icon"></sinch-icon-calendar-today>
  </sinch-icon-button>
`

export const InputWithIconButton = Template(inputWithIconButtonInnerHTML)

InputWithIconButton.args = {
  value: 'hi',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  placeholder: 'Placeholder',
  disabled: false,
}

InputWithIconButton.parameters = {
  docs: {
    source: {
      code: `<sinch-input value={value} onChange={setValue}>${inputWithIconButtonInnerHTML}</sinch-input>`,
    },
  },
}
