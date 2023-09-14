import { Component } from '@angular/core'
import '@nectary/components/popover'
import '@nectary/components/button'
import '@nectary/components/text'

@Component({
  selector: 'popover-component',
  templateUrl: './Popover.component.html',
  styles: [':host{ display: contents; }']
})

export class PopoverComponent {
  orientation: string | null
  isOpen: boolean
  isModal: boolean
  isOffsetExample: boolean
  isSwitchContentExample: boolean
  isDefaultExample: boolean
  isOtherComponent:boolean

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.isModal = url.searchParams.get('modal') !== null
    this.isOpen = url.searchParams.get('open') !== null
    this.isOffsetExample = url.searchParams.get('example') === 'offset'
    this.isSwitchContentExample = url.searchParams.get('example') === 'switch-content'
    this.isDefaultExample = url.searchParams.get('example') === null
    this.isOtherComponent = false
  }

  onOpen() {
    window.dispatchEvent(new CustomEvent('sinch-popover-open'))
    this.isOpen = true
  }

  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    this.isOpen = false
  }

  onSwitch() {
    this.isOtherComponent = !this.isOtherComponent
  }
}
