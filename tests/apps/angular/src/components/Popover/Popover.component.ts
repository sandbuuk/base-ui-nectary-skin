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
  isOpen: boolean
  isModal: boolean

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.isModal = url.searchParams.get('modal') !== null
    this.isOpen = url.searchParams.get('open') !== null
  }

  onOpen() {
    window.dispatchEvent(new CustomEvent('sinch-popover-open'))
    this.isOpen = true
  }

  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    this.isOpen = false
  }
}
