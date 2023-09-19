import { Component } from '@angular/core'
import '@nectary/components/popover'
import '@nectary/components/button'
import '@nectary/components/text'
import { ActivatedRoute } from '@angular/router'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.orientation = search.get('orientation')
    this.isModal = search.get('modal') !== null
    this.isOpen = search.get('open') !== null
    this.isOffsetExample = search.get('example') === 'offset'
    this.isSwitchContentExample = search.get('example') === 'switch-content'
    this.isDefaultExample = search.get('example') === null
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
