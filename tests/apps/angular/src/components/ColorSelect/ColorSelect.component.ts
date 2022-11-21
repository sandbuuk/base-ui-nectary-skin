import { Component } from '@angular/core'

import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-swatch'
import '@sinch-engage/nectary/select-button'

@Component({
  selector: 'color-select-component',
  templateUrl: './ColorSelect.component.html',
  styles: [':host{ display: contents; }']
})

export class ColorSelectComponent {
  value: string
  cols: number | null
  rows: number | null
  colors: string | null
  isOpen = false
  isDisabled: boolean
  isInvalid: boolean
  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.colors = url.searchParams.get('colors')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isInvalid = url.searchParams.get('invalid') !== null

    let numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    numVisibleValue = url.searchParams.get('cols')
    this.cols = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onClick() {
    this.isOpen = true
  }
  onClose() {
    this.isOpen = false
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
    this.isOpen = false
  }
}
