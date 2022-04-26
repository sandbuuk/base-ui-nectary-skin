import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/button'

export default {
  title: 'Components/Dialog',
  argTypes: {
    title: { control: 'text', defaultValue: 'New title', description: 'Dialog title' },
    onClose: { action: 'onClose' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-dialog']> => ({ onClose }) => {
  const [{ title }] = useArgs()
  const dialogRef = useRef<HTMLElementTagNameMap['sinch-dialog'] | null>(null)
  const $wrapper = useRef<HTMLElementTagNameMap['div'] | null>(null)

  if ($wrapper.current === null) {
    $wrapper.current = document.createElement('div')

    const $dialog = document.createElement('sinch-dialog')
    const $openingButton = document.createElement('sinch-button')

    $openingButton.setAttribute('text', 'Open dialog')
    $dialog.setAttribute('style', 'display: none')

    $wrapper.current.appendChild($openingButton)
    $wrapper.current.appendChild($dialog)

    $openingButton.addEventListener('click', () => {
      $dialog.removeAttribute('style')
    })

    $dialog.innerHTML = innerHTML

    dialogRef.current = $dialog
    $dialog.addEventListener('close', (e: any) => {
      onClose(e)
      $dialog.setAttribute('style', 'display: none')
    })
  }

  const $dialog = dialogRef.current!

  $dialog.title = title

  return $wrapper.current
}

const dialogInnerHTML = `
  <div slot="content">
    <div>When you clik on "Accept" you will return to the campaigns list.
      <br/>Your campaign is saved live, every update will be available when you come back.
    </div>
    <sinch-checkbox text="Do not display this message again"></sinch-checkbox>
  </div>
  <sinch-button small type="secondary" slot="buttons" text="Cancel"></sinch-button>
  <sinch-button small slot="buttons" text="Accept"></sinch-button>
`

export const Dialog = Template(dialogInnerHTML)

Dialog.parameters = {
  docs: {
    source: {
      code: `<sinch-dialog title={title} onClose={closeModal}>${dialogInnerHTML}</sinch-dialog>`,
    },
  },
}
