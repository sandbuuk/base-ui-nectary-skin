import { sizeValues } from '@sinch-engage/nectary/utils/size'
import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

export default {
  title: 'Components/Input',
  argTypes: {
    value: {
      description: 'Input value',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    size: {
      description: 'Input size',
      control: 'select',
      options: sizeValues,
    },
    disabled: {
      description: 'Is disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid state',
      control: 'boolean',
    },
    'on-change': {
      description: 'Handler to sync input value with the state',
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

const Template = (innerHTML: string): Story => () => {
  const [{
    value,
    placeholder,
    invalid,
    disabled,
    size,
  }, updateArgs] = useArgs()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-input'] | null>(null)

  if (inputRef.current == null) {
    const $input = document.createElement('sinch-input')

    $input.innerHTML = innerHTML

    // Prevents Storybook hotkeys
    $input.addEventListener('keydown', (e) => {
      e.stopPropagation()
    })

    $input.addEventListener('-change', (e) => {
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
    })

    inputRef.current = $input
  }

  const $input = inputRef.current!

  $input.value = value
  $input.placeholder = placeholder
  $input.invalid = invalid
  $input.disabled = disabled
  $input.size = size

  return $input
}

export const Input = Template('')

Input.args = {
  value: '',
  placeholder: 'Placeholder',
  disabled: false,
  invalid: false,
}

Input.parameters = {
  docs: {
    source: {
      code: `<sinch-input value={value} on-change={setValue}></sinch-input>`,
    },
  },
}

const inputWithIconButtonInnerHTML = `
  <sinch-icon-search slot="icon"></sinch-icon-search>
  <sinch-tag slot="right" text="Tag"></sinch-tag>
  <sinch-icon-button small slot="right">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
`

export const InputWithItems = Template(inputWithIconButtonInnerHTML)

InputWithItems.args = {
  value: '',
  placeholder: 'Placeholder',
  disabled: false,
  invalid: false,
}

InputWithItems.parameters = {
  docs: {
    source: {
      code: `<sinch-input value={value} on-change={setValue}>${inputWithIconButtonInnerHTML}</sinch-input>`,
    },
  },
}
