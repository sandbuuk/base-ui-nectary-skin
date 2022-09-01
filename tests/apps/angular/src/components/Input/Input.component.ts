import { Component } from '@angular/core'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

@Component({
  selector: 'input-component',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})

export class InputComponent {
  value: string
  isControlled: boolean
  type: string | null
  isInvalid: boolean
  placeholderText: string | null
  tooltipText: string | null
  isDisabled: boolean
  hasRight: boolean
  hasIcon: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.type = url.searchParams.get('type')
    this.isInvalid = url.searchParams.get('invalid') !== null
    this.placeholderText = url.searchParams.get('placeholder')
    this.tooltipText = url.searchParams.get('tooltip')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.hasRight = url.searchParams.get('right') != null
    this.hasIcon = url.searchParams.get('icon') != null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-input-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-input-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-input-blur'))
  }
}
