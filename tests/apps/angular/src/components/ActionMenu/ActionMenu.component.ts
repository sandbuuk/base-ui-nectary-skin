import { Component } from '@angular/core'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'

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

  constructor() {
    const url = new URL(location.href)
    this.isOpen = url.searchParams.get('open') !== null
    this.isModal = url.searchParams.get('modal') !== null
    this.orientation = url.searchParams.get('orientation')

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onClick(e: Event) {
      window.dispatchEvent(new CustomEvent('sinch-action-menu-click', {detail: (e.target as Element).getAttribute('text')}))
      this.isOpen = false
  }
  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-action-menu-close'))
    this.isOpen = false
  }
  onOpen() {
    this.isOpen = true
  }
}
