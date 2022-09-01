import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'
import '@sinch-engage/nectary/icons/open-in-new'

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
    invalid: {
      description: 'Invalid state',
      control: 'boolean',
    },
    maxVisibleItems: {
      description: 'Number of visible items in the list',
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    'on-change': {
      description: 'Handler to sync input value with the state',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Select component',
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
    maxVisibleItems,
    disabled,
    invalid,
  }, updateArgs] = useArgs()

  const inputRef = useRef<HTMLElementTagNameMap['sinch-select'] | null>(null)

  if (inputRef.current === null) {
    const $input = document.createElement('sinch-select')

    $input.innerHTML = innerHTML

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
  $input.maxVisibleItems = maxVisibleItems
  $input.disabled = disabled
  $input.invalid = invalid

  return $input
}

export const Select = Template(`
<sinch-select-option value="1" text="Option 1 value" slot="option">
  <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
</sinch-select-option>
<sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
  <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
</sinch-select-option>
<sinch-select-option value="3" text="Option 3 value" slot="option"></sinch-select-option>
<sinch-select-option value="4" text="Option 4 value" slot="option"></sinch-select-option>
`)

Select.args = {
  value: '2',
  placeholder: 'Placeholder',
  disabled: false,
  invalid: false,
}

Select.parameters = {
  docs: {
    source: {
      code: `
<sinch-select value={value} on-change={setValue}>
  <sinch-select-option value="1" text="Option 1 value" slot="option">
    <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
  </sinch-select-option>
  <sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
    <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
  </sinch-select-option>
  <sinch-select-option value="3" text="Option 3 value" slot="option"></sinch-select-option>
  <sinch-select-option value="4" text="Option 4 value" slot="option"></sinch-select-option>
</sinch-select>
`,
    },
  },
}
