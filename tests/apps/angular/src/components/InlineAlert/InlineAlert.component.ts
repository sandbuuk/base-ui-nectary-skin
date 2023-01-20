import { Component } from '@angular/core'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

const longCaption = 'It has survived not only five centuries, but also the leap into electronic typesetting'
const shortCaption = 'It has survived'

@Component({
  selector: 'inline-alert-component',
  templateUrl: './InlineAlert.component.html',
  styles: [':host{ display: contents; }']
})

export class InlineAlertComponent {
  type?: string
  text: string | null
  caption: string
  hasClose: boolean
  hasAction: boolean

  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type') ?? undefined
    this.hasClose = url.searchParams.get('close') != null
    this.hasAction = url.searchParams.get('action') != null

    const example = url.searchParams.get('example')

    this.text = shortText
    this.caption = shortCaption

    if (example === 'md') {
      this.text = mdText
    } else if (example === 'long') {
      this.text = longText
      this.caption = longCaption
    }
  }

  onCloseClick() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-click'))
  }
  onCloseFocus() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-focus'))
  }
  onCloseBlur() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-close-blur'))
  }
  onButtonClick() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-click'))
  }
  onButtonFocus() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-focus'))
  }
  onButtonBlur() {
    window.dispatchEvent(new CustomEvent('sinch-inline-alert-button-blur'))
  }
}
