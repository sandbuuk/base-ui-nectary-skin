import { updateBooleanAttribute } from '@sinch-engage/nectary/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/open-in-new'

export default {
  title: 'Components/Field',
  argTypes: {
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
    disabled: {
      description: 'Is disabled',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Field component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [{
    label,
    additionalText,
    optionalText,
    invalidText,
    disabled,
  }] = useArgs()

  const fieldRef = useRef<HTMLElementTagNameMap['sinch-field'] | null>(null)
  const inputRef = useRef<HTMLElement | null>(null)

  if (fieldRef.current === null) {
    const $field = document.createElement('sinch-field')

    $field.style.maxWidth = '256px'

    $field.innerHTML = innerHTML

    const $input = $field.querySelector('sinch-input') ?? $field.querySelector('sinch-select') ?? $field.querySelector('sinch-textarea')

    if ($input !== null) {
      $input.setAttribute('placeholder', 'Field input')
      $input.addEventListener('-change', (e) => {
        $input.value = e.detail
      })
      inputRef.current = $input
    }

    fieldRef.current = $field
  }

  const $field = fieldRef.current!

  $field.label = label
  $field.additionalText = additionalText
  $field.optionalText = optionalText
  $field.invalidText = invalidText
  $field.disabled = disabled

  if (inputRef.current !== null) {
    updateBooleanAttribute(inputRef.current, 'disabled', disabled)
    updateBooleanAttribute(inputRef.current, 'invalid', invalidText !== '' && invalidText !== null)
  }

  return $field
}

export const FieldWithInput = Template(`
<sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
<sinch-input slot="input">
  <sinch-icon-button small slot="right">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
</sinch-input>
`)

FieldWithInput.args = {
  label: 'Input field',
  additionalText: 'additional',
  optionalText: 'optional',
  invalidText: '',
  disabled: false,
}

FieldWithInput.parameters = {
  docs: {
    source: {
      code: `
<sinch-field label="Label">
  <sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
  <sinch-input slot="input">
    <sinch-icon-button small slot="right">
      <sinch-icon-close slot="icon"></sinch-icon-close>
    </sinch-icon-button>
  </sinch-input>
</sinch-field>
`,
    },
  },
}

export const FieldWithTextarea = Template(`
<sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
<sinch-textarea slot="input"></sinch-textarea>
`)

FieldWithTextarea.args = {
  label: 'Textarea field',
  additionalText: 'additional',
  optionalText: 'optional',
  invalidText: '',
  disabled: false,
}

FieldWithTextarea.parameters = {
  docs: {
    source: {
      code: `
<sinch-field label="Label">
  <sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
  <sinch-textarea slot="input"></sinch-textarea>
</sinch-field>
`,
    },
  },
}

export const FieldWithSelect = Template(`
<sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
<sinch-select slot="input">
  <sinch-select-option value="1" text="Option 1 value" slot="option">
    <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
  </sinch-select-option>
  <sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
    <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
  </sinch-select-option>
  <sinch-select-option value="3" text="Option 3 value" slot="option"></sinch-select-option>
  <sinch-select-option value="4" text="Option 4 value" slot="option"></sinch-select-option>
</sinch-select>
`)

FieldWithSelect.args = {
  label: 'Select field',
  additionalText: 'additional',
  optionalText: 'optional',
  invalidText: '',
  disabled: false,
}

FieldWithSelect.parameters = {
  docs: {
    source: {
      code: `
<sinch-field label="Label">
  <sinch-help-tooltip text="Tooltip text" width="200" slot="tooltip"></sinch-help-tooltip>
  <sinch-select slot="input">
    <sinch-select-option value="1" text="Option 1 value" slot="option">
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-select-option>
    <sinch-select-option value="2" text="Option 2 value" slot="option" disabled>
      <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
    </sinch-select-option>
    <sinch-select-option value="3" text="Option 3 value" slot="option"></sinch-select-option>
    <sinch-select-option value="4" text="Option 4 value" slot="option"></sinch-select-option>
  </sinch-select>
</sinch-field>
`,
    },
  },
}
