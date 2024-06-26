import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'

const lightColors = ['light-violet', 'light-blue', 'light-green', 'light-yellow', 'light-orange', 'light-red', 'light-pink', 'light-gray']
const darkColors = ['dark-violet', 'dark-blue', 'dark-green', 'dark-yellow', 'dark-orange', 'dark-red', 'dark-pink', 'dark-gray']
const vibrantColors = ['violet', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'gray']
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
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.colors = search.get('example') === 'light'
      ? lightVibrantColors
      : colors

    let numVisibleValue = search.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    numVisibleValue = search.get('cols')
    this.cols = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-color-menu-change', {detail: (e as CustomEvent).detail}))
    this.value = value
  }
}
