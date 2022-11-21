import { Component } from '@angular/core'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/spinner'
import '@sinch-engage/nectary/icons/help-outline'

@Component({
  selector: 'icon-button-component',
  templateUrl: './IconButton.component.html',
  styles: [':host{ display: contents; }']
})

export class IconButtonComponent {
  isDisabled: boolean
  size: string | null
  hasSpinner: boolean

  constructor() {
    const url = new URL(location.href)
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.size = url.searchParams.get('size')
    this.hasSpinner = url.searchParams.get('spinner') !== null
  }

  onClick() {
    window.dispatchEvent(new CustomEvent('sinch-icon-button-click'))
  }

  onFocus(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-focus'))
  }

  onBlur(){
    window.dispatchEvent(new CustomEvent('sinch-icon-button-blur'))
  }
}
