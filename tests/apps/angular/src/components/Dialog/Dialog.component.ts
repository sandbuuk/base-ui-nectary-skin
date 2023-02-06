import { Component } from '@angular/core'
import '@sinch-engage/nectary/dialog'
import '@sinch-engage/nectary/button'
import type { TSinchDialogCloseDetail } from '@sinch-engage/nectary/dialog/types'
import '@sinch-engage/nectary/text'

@Component({
  selector: 'dialog-component',
  templateUrl: './Dialog.component.html',
  styles: [':host{ display: contents; }']
})

export class DialogComponent {
  title: string
  buttons: boolean
  content: string | null

  constructor() {
    const url = new URL(location.href)
    this.title = url.searchParams.get('title') ?? ''
    this.buttons = url.searchParams.get('buttons') !== null
    this.content = url.searchParams.get('content')
  }

  onClose(e: CustomEvent<TSinchDialogCloseDetail>) {
    window.dispatchEvent(new CustomEvent('sinch-dialog-close', { detail: e.detail }))
  }
}

export default DialogComponent
