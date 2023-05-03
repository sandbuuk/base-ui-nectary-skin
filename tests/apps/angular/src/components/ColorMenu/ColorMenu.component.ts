import { Component } from '@angular/core'

import '@sinch-engage/nectary/color-menu'
import '@sinch-engage/nectary/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-brown', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-brown', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'gray']
const colors = [...lightColors, ...vibrantColors, ...darkColors]
const lightVibrantColors = [...lightColors, ...vibrantColors]

@Component({
  selector: 'color-menu-component',
  templateUrl: './ColorMenu.component.html',
  styles: [':host{ display: contents; }']
})

export class ColorMenuComponent {
  value: string
  cols: number | null
  rows: number | null
  colors: string[]
  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.colors = url.searchParams.get('example') === 'light'
      ? lightVibrantColors
      : colors

    let numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    numVisibleValue = url.searchParams.get('cols')
    this.cols = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
