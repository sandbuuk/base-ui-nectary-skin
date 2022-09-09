import { typeValues } from '@sinch-engage/nectary/file-status/utils'
import { useArgs, useRef } from '@storybook/addons'
import type { Meta, Story } from '@storybook/html'
import '@sinch-engage/nectary/file-status'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/text'
import '@sinch-engage/nectary/progress'

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

const Template = (innerHTML: string): Story => () => {
  const [args] = useArgs()
  const elRef = useRef<HTMLElementTagNameMap['sinch-file-status'] | null>(null)

  if (elRef.current == null) {
    const $el = document.createElement('sinch-file-status')

    $el.innerHTML = innerHTML

    elRef.current = $el
  }

  const $el = elRef.current!

  $el.type = args.type
  $el.filename = args.filename

  return $el
}

const fileStatusInnerHtml = `
  <sinch-icon-button slot="action" small aria-label="Close">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
`

export const FileStatus = Template(fileStatusInnerHtml)

FileStatus.args = {
  type: 'success',
  filename: 'my_photo.png',
}

FileStatus.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-status
  type="success"
  filename="my_photo.png"
>${fileStatusInnerHtml}</sinch-file-status>`,
    },
  },
}

const fileStatusWithDescriptionInnerHtml = `
  <sinch-text slot="content" type="m">File is too large</sinch-text>
  <sinch-icon-button slot="action" small aria-label="Close">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
`

export const FileStatusWithDescription = Template(fileStatusWithDescriptionInnerHtml)

FileStatusWithDescription.args = {
  type: 'error',
  filename: 'my_photo.png',
}

FileStatusWithDescription.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-status
  type="error"
  filename="my_photo.png"
>${fileStatusWithDescriptionInnerHtml}</sinch-file-status>`,
    },
  },
}

const fileStatusWithProgressBarInnerHtml = `
  <sinch-progress slot="content" value="73" detailed></sinch-progress>
  <sinch-icon-button slot="action" small aria-label="Close">
    <sinch-icon-close slot="icon"></sinch-icon-close>
  </sinch-icon-button>
`

export const FileStatusWithProgressBar = Template(fileStatusWithProgressBarInnerHtml)

FileStatusWithProgressBar.args = {
  type: 'progress',
  filename: 'my_photo.png',
}

FileStatusWithProgressBar.parameters = {
  docs: {
    source: {
      code: `
<sinch-file-status
  type="progress"
  filename="my_photo.png"
>${fileStatusWithProgressBarInnerHtml}</sinch-file-status>`,
    },
  },
}
