import { Component } from '@angular/core'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icons/open-in-new'

@Component({
  selector: 'action-menu-component',
  templateUrl: './ActionMenu.component.html',
  styleUrls: ['./ActionMenu.component.css']
})

export class ActionMenuComponent {
  isOpen: boolean
  isModal: boolean
  maxVisibleItems: number | null
  orientation: string | null
  value: string

  constructor() {
    const url = new URL(location.href)
    this.isOpen = url.searchParams.get('open') !== null
    this.isModal = url.searchParams.get('modal') !== null
    this.orientation = url.searchParams.get('orientation')
    this.value = ''

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onClick(text: string) {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: text}))
      this.isOpen = false
  }
  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
    this.isOpen = false
  }
  onOpen() {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-open'))
    this.isOpen = true
  }
  onValueChange(e: CustomEvent) {
    window.dispatchEvent(new CustomEvent('sinch-input-change'))
    this.value = e.detail
  }
}
