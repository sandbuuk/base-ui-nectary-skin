import { useArgs, useRef } from '@storybook/addons'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/dialog-close'
import '@sinch-engage/nectary/button'

export default {
  title: 'Components/Dialog',
  argTypes: {
    title: { control: 'text', defaultValue: 'New title', description: 'Dialog\'s title' },
    onClose: { action: 'onClose' },
  },
} as Meta

const Template = (innerHTML: string = ''): Story<JSX.IntrinsicElements['sinch-dialog']> => ({ onClose }) => {
  const [{ title }] = useArgs()
  const dialogRef = useRef<HTMLElementTagNameMap['sinch-dialog'] | null>(null)
  const $wrapper = useRef<HTMLElementTagNameMap['div'] | null>(null)
  const $openingButton = document.createElement('sinch-button')

  if ($wrapper.current === null) {
    $wrapper.current = document.createElement('div')

    const $dialog = document.createElement('sinch-dialog')

    $wrapper.current.appendChild($openingButton)
    $openingButton.setAttribute('text', 'Open dialog')
    $wrapper.current.appendChild($dialog)
    $dialog.setAttribute('style', 'display: none')

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

export const DialogWithClose = Template(`<div slot="content">
    <p>
      Löksås ipsum för rot sjö verkligen som, redan åker annan att ta precis miljoner,
      bra regn rännil gamla redan. Plats att kom hans icke när sitt tid bland samma,
      se vi rännil varit ser fram vemod omfångsrik, vad oss fram erfarenheter vemod år det sista.
      Miljoner kom söka enligt dunge nya äng hans varit söka sorgliga vi,
      tidigare tiden dimma enligt är hwila sällan där och trevnadens,
      faktor sig blev se hwila regn kanske har verkligen så.
    </p>
    <p>
      Vid icke kan blivit där erfarenheter dag vidsträckt hav omfångsrik,
      söka tre samma rännil räv enligt hwila ta faktor,
      stora så äng kunde fram från söka sin.
      Trevnadens där strand händer plats ska och från blivit av,
      hans trevnadens på dunge där gör stora söka ingalunda,
      upprätthållande kunde stig ännu del kan ska upprätthållande.
      Åker både björnbär lax brunsås genom upprätthållande oss häst det,
      faktor rännil dimmhöljd häst att rännil omfångsrik denna icke,
      inom och är sista ordningens träutensilierna gamla varit.
    </p>
  </div>
  <sinch-button small type="secondary" slot="buttons" text="Cancel"></sinch-button>
  <sinch-button small slot="buttons" text="Accept"></sinch-button>`)

export const Dialog = Template(`
<div slot="content">
  <p>When you clik on "Accept" you will return to the campaigns list.
    <br/>Your campaign is saved live, every update will be available when you come back.
  </p>
  <sinch-checkbox text="Do not display this message again"></sinch-checkbox>
  </div>
  <sinch-button small type="secondary" slot="buttons" text="Cancel"></sinch-button>
  <sinch-button small slot="buttons" text="Accept"></sinch-button>`)

Dialog.parameters = {
  docs: {
    source: {
      code: `<sinch-dialog title={title} onClose={closeModal}>
  <div slot="content"></div>
  <button slot="buttons"></button>
  <button slot="buttons"></button>
</sinch-dialog>`,
    },
  },
}
