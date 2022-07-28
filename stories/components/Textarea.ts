import { useArgs, useRef } from '@storybook/addons'
import { useStoryWrapper } from '../use-story-wrapper'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/help-tooltip'
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
    resizable: {
      description: 'Is textarea resizable',
      control: 'boolean',
    },
    rows: {
      description: 'Number of textarea rows',
      control: 'number',
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

const Template = (innerHTML: string): Story => ({ onChange }) => {
  const [{
    value,
    label,
    placeholder,
    additionalText,
    optionalText,
    invalidText,
    disabled,
    resizable,
    rows,
  }, updateArgs] = useArgs()
  const $wrapper = useStoryWrapper()
  const inputRef = useRef<HTMLElementTagNameMap['sinch-textarea'] | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-textarea')

    $input.innerHTML = innerHTML

    // Prevents Storybook hotkeys
    $input.addEventListener('keydown', (e) => {
      e.stopPropagation()
    })

    $input.addEventListener('change', (e) => {
      onChange(e.detail)
      updateArgs({ value: e.detail })
      // https://github.com/storybookjs/storybook/issues/11657
      setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
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
  $input.resizable = resizable
  $input.rows = rows

  return $wrapper
}

const textareaInnerHtml = `
  <sinch-help-tooltip slot="tooltip" text="Tooltip text long"></sinch-help-tooltip>
`

export const Textarea = Template(textareaInnerHtml)

Textarea.args = {
  value: 'hi',
  label: 'Label',
  optionalText: 'Optional',
  additionalText: 'Additional',
  invalidText: 'Invalid',
  placeholder: 'Placeholder',
  disabled: false,
  resizable: false,
  rows: 3,
}

Textarea.parameters = {
  docs: {
    source: {
      code: `<sinch-textarea value={value} onChange={setValue}>${textareaInnerHtml}</sinch-textarea>`,
    },
  },
}
