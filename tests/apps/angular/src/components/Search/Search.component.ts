import { Component, ElementRef, ViewChild } from '@angular/core'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/action-menu'
import '@sinch-engage/nectary/action-menu-option'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icon'
import { TSinchInputElement } from '@sinch-engage/nectary/input/types'

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styles: [':host{ display: contents; }']
})

export class SearchComponent {
  isOpen = false
  isClearActive = false
  value: string
  maxVisibleItems: number | null
  options = [
    'Option 1 value long long long',
    'Option 2',
    'Option 3',
    'Option 4',
  ]

  //@ts-expect-error
  @ViewChild('input') inputRef: ElementRef<TSinchInputElement>;

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }
  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    this.isClearActive = this.value.length > 0
  }
  onClearClick() {
    this.value = ''
    this.isClearActive = false
    this.inputRef.nativeElement.focus()
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-search-focus'))
    this.isOpen = true
    this.isClearActive = this.value.length > 0
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
    this.isClearActive = this.value.length > 0
  }
  onStopEvent(e: Event) {
    e.stopPropagation()
  }
}
