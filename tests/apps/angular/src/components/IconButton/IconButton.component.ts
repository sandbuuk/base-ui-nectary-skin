import { Component } from '@angular/core'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/spinner'
import '@sinch-engage/nectary/icons/help-outline'

@Component({
  selector: 'icon-button-component',
  templateUrl: './IconButton.component.html',
  styleUrls: ['./IconButton.component.css']
})

export class IconButtonComponent {
  isDisabled: boolean
  hasSpinner: boolean

  constructor() {
    const url = new URL(location.href)
    this.isDisabled = url.searchParams.get('disabled') !== null
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
