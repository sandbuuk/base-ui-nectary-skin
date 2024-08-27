import { Component } from '@angular/core'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/select-button'
import '@nectary/components/popover'
import '@nectary/components/select-menu'
import '@nectary/components/select-menu-option'
import '@nectary/components/tag'
import '@nectary/assets/icons/open-in-new'
import '@nectary/assets/icons/search'
import { ActivatedRoute } from '@angular/router'

const optionsLong: Record<string, TMenuValue> = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
  5: { text: 'Option 1 value long long long', icon: '1' },
  6: { text: 'Option 2', icon: '1', isDisabled: true },
  7: { text: 'Option 3', icon: null },
  8: { text: 'Option 4', icon: null },
}

const optionsShort: Record<string, TMenuValue> = {
  1: { text: 'Option 1 value long long long', icon: '1' },
  2: { text: 'Option 2', icon: '1', isDisabled: true },
  3: { text: 'Option 3', icon: null },
  4: { text: 'Option 4', icon: null },
}

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
  options: Record<string, TMenuValue>

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.size = search.get('size')
    this.isDisabled = search.get('disabled') != null
    this.isInvalid = search.get('invalid') != null
    this.hasLeft = search.get('left') != null
    this.hasIcon = search.get('icon') != null

    const numVisibleValue = search.get('rows')
    this.rows = numVisibleValue !== null ? parseInt(numVisibleValue) : null
    this.options = search.get('example') === 'lots'
      ? optionsLong
      : optionsShort
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
