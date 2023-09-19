import { Component } from '@angular/core'

import '@nectary/components/popover'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/select-button'
import { ActivatedRoute } from '@angular/router'

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
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.colors = colors
    this.isDisabled = search.get('disabled') !== null
    this.isInvalid = search.get('invalid') !== null

    let numVisibleValue = search.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    numVisibleValue = search.get('cols')
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
