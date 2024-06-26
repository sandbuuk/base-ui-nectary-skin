import { Component } from '@angular/core'
import { typeValues } from '@nectary/components/toast/utils'
import '@nectary/components/toast-manager'
import '@nectary/components/toast'
import '@nectary/components/button'
import '@nectary/assets/icons/close'
import { ActivatedRoute } from '@angular/router'

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting.'
const md = 'To set up the `LINE`, read and **accept** the `LINE` [terms & conditions](https://google.com).'

@Component({
  selector: 'toast-manager-component',
  templateUrl: './ToastManager.component.html',
  styles: [':host{ display: contents; }']
})

export class ToastManagerComponent {
  typeValues = typeValues
  origin: string | null
  state = [`${text}1`, `${text}2`, md, 'Item4']

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.origin = search.get('origin')
  }

  ngOnInit() {
    window.addEventListener('sinch-toast-push', this.onPush)
    window.addEventListener('sinch-toast-pop', this.onPop)
  }
  ngOnDestroy() {
    window.removeEventListener('sinch-toast-push', this.onPush)
    window.removeEventListener('sinch-toast-pop', this.onPop)
  }

  onPush = () => {
    this.state.push('Item5')
  }
  onPop = () => {
    this.state.splice(1, 1)
  }

  onTimeout() {
    window.dispatchEvent(new CustomEvent('sinch-toast-timeout'))
  }

  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-toast-close'))
  }

  onAction() {
    window.dispatchEvent(new CustomEvent('sinch-toast-action'))
  }
}
