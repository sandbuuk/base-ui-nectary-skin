import { Component } from '@angular/core'

import '@nectary/components/popover'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/select-button'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]

@Component({
  selector: 'color-select-component',
  templateUrl: './ColorSelect.component.html',
  styles: [':host{ display: contents; }']
})

export class ColorSelectComponent {
  value: string
  cols: number | null
  rows: number | null
  colors: string[]
  isOpen = false
  isDisabled: boolean
  isInvalid: boolean
  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.colors = colors
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
