import { Component } from '@angular/core'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary-assets/icons/search'

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styles: [':host{ display: contents; }']
})

export class SearchComponent {
  isOpen = false
  value: string
  maxVisibleItems: number | null
  options = [
    'Option 1 value long long long',
    'Option 2',
    'Option 3',
    'Option 4',
  ]

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }
  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    this.isOpen = true
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-search-blur'))
  }
  onClear() {
    this.value = ''
    this.isOpen = false
  }
  onClose() {
    this.isOpen = false
  }
  onOptionClick(text: string) {
    window.dispatchEvent(new CustomEvent('sinch-search-change', { detail: text }))

    this.value = text
    this.isOpen = false
  }
  onStopEvent(e: Event) {
    e.stopPropagation()
  }
}
