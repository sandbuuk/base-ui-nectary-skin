import { Component } from '@angular/core'
import { typeValues } from '@sinch-engage/nectary/toast/utils'
import '@sinch-engage/nectary/toast-manager'
import '@sinch-engage/nectary/toast'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/close'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'

@Component({
  selector: 'toast-manager-component',
  templateUrl: './ToastManager.component.html',
  styles: [':host{ display: contents; }']
})

export class ToastManagerComponent {
  typeValues = typeValues
  state = [`${text}1`, `${text}2`, `${text}3`, 'Item4']

  constructor() {
    // const url = new URL(location.href)
  }

  ngOnInit() {
    window.addEventListener('sinch-toast-push', this.onPush)
  }
  ngOnDestroy() {
    window.removeEventListener('sinch-toast-push', this.onPush)
  }

  onPush = () => {
    this.state.push('Item5')
  }

  onTimeout(i: number) {
    this.state.splice(i, 1)
    window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
  }

  onClose(i: number) {
    this.state.splice(i, 1)
    window.dispatchEvent(new CustomEvent('sinch-toast-close'))
  }

  onAction() {
    window.dispatchEvent(new CustomEvent('sinch-toast-action'))
  }
}
