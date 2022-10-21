import { Component } from '@angular/core'

import '@sinch-engage/nectary/color-swatch'

@Component({
  selector: 'color-swatch-component',
  templateUrl: './ColorSwatch.component.html',
  styleUrls: ['./ColorSwatch.component.css']
})

export class ColorSwatchComponent {
  name: string

  constructor() {
    const url = new URL(location.href)
    this.name = url.searchParams.get('name') ?? ''
  }
}
