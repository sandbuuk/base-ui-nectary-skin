import { Component } from '@angular/core'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/icons/open-in-new'
import '@sinch-engage/nectary-assets/icons/expand-more'

@Component({
  selector: 'button-component',
  templateUrl: './Button.component.html',
  styles: [':host{ display: contents; }']
})

export class ButtonComponent {
  type: string | null
  text: string | null
  size: string | null
  isDisabled: boolean
  hasLeftIcon: boolean
  hasRightIcon: boolean
  hasSpinner: boolean

  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type')
    this.text = url.searchParams.get('text')
    this.size = url.searchParams.get('size')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.hasLeftIcon = url.searchParams.get('icon-left') !== null
    this.hasRightIcon = url.searchParams.get('icon-right') !== null
    this.hasSpinner = url.searchParams.get('spinner') !== null
  }

  onClick() {
    window.dispatchEvent(new CustomEvent('sinch-button-click'))
  }

  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-button-focus'))
  }

  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-button-blur'))
  }
}
