import { typeValues } from '@sinch-engage/nectary/file-status/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/file-status'

export default {
  title: 'Components/FileStatus',
  argTypes: {
    type: {
      description: 'File status type',
      control: 'select',
      options: typeValues,
    },
    filename: {
      description: 'Filename text',
      control: 'text',
    },
    description: {
      description: 'Description text',
      control: 'text',
    },
    'on-click': {
      description: 'Handler to receive click events',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'FileStatus component',
      },
      source: {
        type: 'code',
      },
    },
  },
} as Meta

const Template = (): Story => () => {
  const [args] = useArgs()
  const elRef = useRef<HTMLElementTagNameMap['sinch-file-status'] | null>(null)

  if (elRef.current == null) {
    const $el = document.createElement('sinch-file-status')

    elRef.current = $el
  }

  const $el = elRef.current!

  $el.type = args.type
  $el.filename = args.filename
  $el.description = args.description

  return $el
}

export const FileStatus = Template()

FileStatus.args = {
  type: 'success',
  filename: 'my_photo.png',
  description: '',
}

FileStatus.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-status
  type="success"
  filename="my_photo.png"
  description=""
  action-aria-label="Close"
  on-click={onClick}
></sinch-file-status>`,
    },
  },
}
