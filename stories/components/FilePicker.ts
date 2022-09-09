import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/file-picker'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icons/upload'

export default {
  title: 'Components/FilePicker',
  argTypes: {
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
  const [{
    accept,
    multiple,
  }] = useArgs()
  const pickerRef = useRef<HTMLElementTagNameMap['sinch-file-picker'] | null>(null)

  if (pickerRef.current == null) {
    const $picker = document.createElement('sinch-file-picker')

    $picker.innerHTML = innerHTML

    pickerRef.current = $picker
  }

  const $picker = pickerRef.current!

  $picker.accept = accept
  $picker.multiple = multiple

  return $picker
}

export const FilePicker = Template(`
  <sinch-button type="secondary" text="Choose files">
    <sinch-icon-upload slot="left-icon"></sinch-icon-upload>
  </sinch-button>
`)

FilePicker.args = {
  accept: 'image/png',
  multiple: false,
}

FilePicker.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-picker accept="image/*" multiple={false} size="10000000" on-change={onFilesChange}>
  <sinch-button type="secondary" text="Choose files">
    <sinch-icon-upload slot="left-icon"></sinch-icon-upload>
  </sinch-button>
</sinch-file-picker>`,
    },
  },
}
