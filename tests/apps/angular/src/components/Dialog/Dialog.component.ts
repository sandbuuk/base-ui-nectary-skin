import { Component } from '@angular/core'
import '@nectary/components/dialog'
import '@nectary/components/button'
import type { TSinchDialogCloseDetail } from '@nectary/components/dialog/types'
import '@nectary/components/text'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'dialog-component',
  templateUrl: './Dialog.component.html',
  styles: [':host{ display: contents; }']
})

export class DialogComponent {
  title: string
  buttons: boolean
  content: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.title = search.get('title') ?? ''
    this.buttons = search.get('buttons') !== null
    this.content = search.get('content')
  }

  onClose(e: CustomEvent<TSinchDialogCloseDetail>) {
    window.dispatchEvent(new CustomEvent('sinch-dialog-close', { detail: e.detail }))
  }
}

export default DialogComponent
