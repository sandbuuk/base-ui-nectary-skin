import { Component } from '@angular/core'
import '@sinch-engage/nectary/field'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/select-menu'
import '@sinch-engage/nectary/select-menu-option'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary-assets/icons/open-in-new'
import '@sinch-engage/nectary-assets/icons/search'

type TMenuValue = {
  text: string,
  icon: string | null,
  isDisabled?: boolean,
}

@Component({
  selector: 'select-component',
  templateUrl: './Select.component.html',
  styles: [':host{ display: contents; }']
})

export class SelectComponent {
  value: string
  size: string | null
  isOpen = false
  isInvalid: boolean
  isDisabled: boolean
  hasLeft: boolean
  hasIcon: boolean
  rows: number | null
  options: Record<string, TMenuValue> = {
    1: { text: 'Option 1 value long long long', icon: '1' },
    2: { text: 'Option 2', icon: '1', isDisabled: true },
    3: { text: 'Option 3', icon: null },
    4: { text: 'Option 4', icon: null },
  }

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.size = url.searchParams.get('size')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.isInvalid = url.searchParams.get('invalid') != null
    this.hasLeft = url.searchParams.get('left') != null
    this.hasIcon = url.searchParams.get('icon') != null

    const numVisibleValue = url.searchParams.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    const value = (e as CustomEvent).detail

    window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: (e as CustomEvent).detail}))
    this.value = value
    this.isOpen = false
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-select-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-select-blur'))
  }
  onClick() {
    window.dispatchEvent(new CustomEvent('sinch-select-click'))
    this.isOpen = !this.isOpen
  }
  onClose() {
    this.isOpen = false
  }
}
