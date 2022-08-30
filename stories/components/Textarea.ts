import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/textarea'

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
    invalid: {
      description: 'Invalid state',
      control: 'boolean',
    },
    resizable: {
      description: 'Is textarea resizable',
      control: 'boolean',
    },
    rows: {
      description: 'Number of textarea rows',
      control: 'number',
    },
    'on-change': {
      description: 'Handler to sync input value with the state',
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

const Template = (innerHTML: string): Story => () => {
  const [{
    value,
    placeholder,
    disabled,
    invalid,
    resizable,
    rows,
  }, updateArgs] = useArgs()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-textarea'] | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-textarea')

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
  $input.disabled = disabled
  $input.invalid = invalid
  $input.resizable = resizable
  $input.rows = rows

  return $input
}

export const Textarea = Template('')

Textarea.args = {
  value: 'hi',
  placeholder: 'Placeholder',
  disabled: false,
  invalid: false,
  resizable: false,
  rows: 3,
}

Textarea.parameters = {
  docs: {
    source: {
      code: `<sinch-textarea value={value} on-change={setValue}></sinch-textarea>`,
    },
  },
}
