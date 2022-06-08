import { Component } from '@angular/core'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'

@Component({
  selector: 'popover-component',
  templateUrl: './Popover.component.html',
  styleUrls: ['./Popover.component.css']
})

export class PopoverComponent {
  orientation: string | null

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
  }

  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
  }
}
