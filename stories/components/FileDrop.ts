import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/file-drop'
import '@sinch-engage/nectary/button'

export default {
  title: 'Components/FileDrop',
  argTypes: {
    placeholder: {
      description: 'Drop area placeholder text',
      control: 'text',
    },
    accept: {
      description: 'Accept mime types (e.g. image/*)',
      control: 'text',
    },
    multiple: {
      description: 'Allow multiple files',
      control: 'boolean',
    },
    size: {
      description: 'File size limit in bytes',
      control: 'number',
    },
    invalid: {
      description: 'Indicate invalid state',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    'on-change': {
      description: 'Handler to receive array of File objects',
    },
    'on-invalid': {
      description: 'Handler to receive Invalid events',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'FilePicker component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (innerHTML: string): Story => () => {
  const [args] = useArgs()
  const pickerRef = useRef<HTMLElementTagNameMap['sinch-file-drop'] | null>(null)

  if (pickerRef.current == null) {
    const $picker = document.createElement('sinch-file-drop')

    $picker.innerHTML = innerHTML

    pickerRef.current = $picker
  }

  const $picker = pickerRef.current!

  $picker.accept = args.accept
  $picker.multiple = args.multiple
  $picker.invalid = args.invalid
  $picker.disabled = args.disabled
  $picker.placeholder = args.placeholder

  return $picker
}

export const FileDrop = Template(`
  <sinch-button type="cta-secondary" small text="Choose files" aria-label="Choose files"></sinch-button>
`)

FileDrop.args = {
  placeholder: 'Drag and drop files into the area',
  accept: 'image/png',
  multiple: false,
  invalid: false,
  disabled: false,
}

FileDrop.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-drop
  accept="image/*"
  multiple={false}
  on-change={onFilesChange}
  invalid={isInvalid}
  disabled={false}
  picker-aria-label="Choose files"
>
  <sinch-button type="cta-secondary" small text="Choose files" aria-label="Choose files"></sinch-button>
</sinch-file-drop>`,
    },
  },
}
