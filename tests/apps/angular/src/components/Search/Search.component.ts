import { Component } from '@angular/core'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/close'

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
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

    if (this.value.length >= 3) {
      this.isOpen = true
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
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
