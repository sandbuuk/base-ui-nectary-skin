import { Component } from '@angular/core'

import '@sinch-engage/nectary/color-menu'

@Component({
  selector: 'color-menu-component',
  templateUrl: './ColorMenu.component.html',
  styleUrls: ['./ColorMenu.component.css']
})

export class ColorMenuComponent {
  value: string
  cols: number | null
  rows: number | null
  colors: string | null
  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.colors = url.searchParams.get('colors')

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
