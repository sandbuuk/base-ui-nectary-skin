import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import '@nectary/components/color-swatch'

@Component({
  selector: 'color-swatch-component',
  templateUrl: './ColorSwatch.component.html',
  styles: [':host{ display: contents; }']
})

export class ColorSwatchComponent {
  name: string

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.name = search.get('name') ?? ''
  }
}
