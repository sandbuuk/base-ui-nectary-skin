import { Component } from '@angular/core'
import '@sinch-engage/nectary/inline-alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

@Component({
  selector: 'inline-alert-component',
  templateUrl: './InlineAlert.component.html',
  styleUrls: ['./InlineAlert.component.css']
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
    this.text = url.searchParams.get('text')
    this.caption = url.searchParams.get('caption') ?? ''
    this.hasClose = url.searchParams.get('close') != null
    this.hasAction = url.searchParams.get('action') != null
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
