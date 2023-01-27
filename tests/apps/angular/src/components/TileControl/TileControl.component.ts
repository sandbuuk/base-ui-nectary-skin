import { Component } from '@angular/core'
import '@sinch-engage/nectary/tile-control'
import '@sinch-engage/nectary/tile-control-option'
import '@sinch-engage/nectary-assets/icons/accessibility'
import '@sinch-engage/nectary-assets/icons/chat'
import '@sinch-engage/nectary-assets/icons/title'
import '@sinch-engage/nectary-assets/icons/format-align-left'
import '@sinch-engage/nectary-assets/icons/qr-code'
import '@sinch-engage/nectary-assets/icons/library-add-check'
import '@sinch-engage/nectary-assets/icons/smart-button'
import '@sinch-engage/nectary-assets/icons/add-to-home-screen'
import '@sinch-engage/nectary-assets/icons-branded/contact'
import '@sinch-engage/nectary-assets/icons-channel/whatsapp'

@Component({
  selector: 'tile-control-component',
  templateUrl: './TileControl.component.html',
  styles: [':host{ display: contents; }']
})

export class TileControlComponent {
  value: string
  isControlled: boolean
  isSingleOption: boolean
  isSmall: boolean
  isMultiple: boolean
  numCols: number

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isSingleOption = search.get('single') !== null
    this.isSmall = search.get('small') !== null
    this.isMultiple = search.get('multiple') !== null
    this.value = search.get('value') ?? ''

    const numCols = url.searchParams.get('cols')
    this.numCols = numCols !== null ? parseInt(numCols) : 1
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-tile-control-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-tile-control-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-tile-control-blur'))
  }
}
