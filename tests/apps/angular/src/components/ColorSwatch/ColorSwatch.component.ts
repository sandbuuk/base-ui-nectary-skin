import { Component } from '@angular/core'

import '@nectary/components/color-swatch'

@Component({
  selector: 'color-swatch-component',
  templateUrl: './ColorSwatch.component.html',
  styles: [':host{ display: contents; }']
})

export class ColorSwatchComponent {
  name: string

  constructor() {
    const url = new URL(location.href)
    this.name = url.searchParams.get('name') ?? ''
  }
}
