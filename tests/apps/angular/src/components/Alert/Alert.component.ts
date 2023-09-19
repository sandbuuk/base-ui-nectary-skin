import { Component } from '@angular/core'
import '@nectary/components/alert'
import '@nectary/components/button'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/close'
import { ActivatedRoute } from '@angular/router'

const mdText = `
To set up the \`LINE\`, read and accept* the \`LINE\` [terms & conditions](https://google.com).

If ___you___ have *any questions*, contact your ~~parents~~ account __manager__.

Context *italic __bold__ italic* text
Context **bold _italic_ bold** text.
`

const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
const shortText = 'Lorem Ipsum is dummy text'

@Component({
  selector: 'alert-component',
  templateUrl: './Alert.component.html',
  styles: [':host{ display: contents; }']
})

export class AlertComponent {
  type?: string
  text: string
  hasClose: boolean
  hasAction: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.type = search.get('type') ?? undefined
    this.hasClose = search.get('close') != null
    this.hasAction = search.get('action') != null

    const example = search.get('example')

    this.text = shortText

    if (example === 'md') {
      this.text = mdText
    } else if (example === 'long') {
      this.text = longText
    }
  }

  onCloseClick() {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-click'))
  }
  onCloseFocus() {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-focus'))
  }
  onCloseBlur() {
    window.dispatchEvent(new CustomEvent('sinch-alert-close-blur'))
  }
  onButtonClick() {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-click'))
  }
  onButtonFocus() {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-focus'))
  }
  onButtonBlur() {
    window.dispatchEvent(new CustomEvent('sinch-alert-button-blur'))
  }
}
