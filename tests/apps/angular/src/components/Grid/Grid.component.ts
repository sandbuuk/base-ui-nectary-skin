import { Component } from '@angular/core'
import '@nectary/components/grid'
import '@nectary/components/grid-item'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/link'
import '@nectary/components/button'
import '@nectary/assets/illustrations/phone-and-cat'
import '@nectary/assets/icons-branded/chatbot'
import '../../../../utils/grid-debug'

@Component({
  selector: 'grid-component',
  templateUrl: './Grid.component.html',
  styles: [':host{ display: contents; }']
})

export class GridComponent {
  text: string

  constructor() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
  }
}
