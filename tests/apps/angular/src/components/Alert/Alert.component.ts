import { Component } from '@angular/core'
import '@sinch-engage/nectary/alert'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/close'

@Component({
  selector: 'alert-component',
  templateUrl: './Alert.component.html',
  styleUrls: ['./Alert.component.css']
})

export class AlertComponent {
  type?: string
  text: string
  hasClose: boolean
  hasAction: boolean

  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type') ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.hasClose = url.searchParams.get('close') != null
    this.hasAction = url.searchParams.get('action') != null
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
