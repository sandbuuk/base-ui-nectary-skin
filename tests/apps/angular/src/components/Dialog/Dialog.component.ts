import { Component } from '@angular/core'
import '@nectary/components/dialog'
import '@nectary/components/button'
import type { TSinchDialogCloseDetail } from '@nectary/components/dialog/types'
import '@nectary/components/text'

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
