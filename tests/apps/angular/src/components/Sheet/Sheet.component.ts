import { Component } from '@angular/core'
import type { TSinchSheetCloseDetail } from '@nectary/components/sheet/types'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/sheet'
import '@nectary/components/button'
import '@nectary/components/text'
import '@nectary/components/icon'

@Component({
  selector: 'sheet-component',
  templateUrl: './Sheet.component.html',
  styles: [':host{ display: contents; }']
})

export class SheetComponent {
  title: string
  buttons: boolean
  icon: boolean
  content: string | null
  placement: 'left' | 'right' | 'top' | 'bottom'
  overlay: 'modal' | 'push'

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.title = search.get('title') ?? ''
    this.buttons = search.get('buttons') !== null
    this.icon = search.get('icon') !== null
    this.content = search.get('content')
    const p = search.get('placement')
    this.placement = (p === 'left' || p === 'right' || p === 'top' || p === 'bottom') ? p : 'right'
    const o = search.get('overlay')
    this.overlay = o === 'push' ? 'push' : 'modal'
  }

  onClose(e: CustomEvent<TSinchSheetCloseDetail>) {
    window.dispatchEvent(new CustomEvent('sinch-sheet-close', { detail: e.detail }))
  }
}

export default SheetComponent
