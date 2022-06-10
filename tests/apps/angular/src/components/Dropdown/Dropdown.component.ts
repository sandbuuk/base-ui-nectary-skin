import { Component } from '@angular/core'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/dropdown'

@Component({
  selector: 'dropdown-component',
  templateUrl: './Dropdown.component.html',
  styleUrls: ['./Dropdown.component.css']
})

export class DropdownComponent {
  isOpen: boolean
  value: string
  isControlled: boolean
  maxVisibleItems: number | null
  orientation: string | null

  constructor() {
    const url = new URL(location.href)
    this.isOpen = url.searchParams.get('open') !== null
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.orientation = url.searchParams.get('orientation')

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-dropdown-change', {detail: (e as CustomEvent).detail}))
      this.isOpen = false
    }
  }
  onClose() {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-close'))
    this.isOpen = false
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-dropdown-blur'))
  }
  onOpen() {
    this.isOpen = true
  }
}
