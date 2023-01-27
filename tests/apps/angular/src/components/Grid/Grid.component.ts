import { Component } from '@angular/core'
import '@sinch-engage/nectary/grid'
import '@sinch-engage/nectary/grid-item'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary-assets/illustrations/phone-and-cat'
import '@sinch-engage/nectary-assets/icons-branded/chatbot'
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
