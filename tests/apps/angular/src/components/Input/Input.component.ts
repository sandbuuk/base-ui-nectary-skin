import { Component } from '@angular/core'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/calendar-today'

@Component({
  selector: 'input-component',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})

export class InputComponent {
  value: string
  isControlled: boolean
  type: string | null
  labelText: string | null
  optionalText: string | null
  additionalText: string | null
  invalidText: string | null
  placeholderText: string | null
  tooltipText: string | null
  isDisabled: boolean
  hasRightButton: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.type = url.searchParams.get('type')
    this.labelText = url.searchParams.get('label')
    this.optionalText = url.searchParams.get('optional')
    this.additionalText = url.searchParams.get('additional')
    this.invalidText = url.searchParams.get('invalid')
    this.placeholderText = url.searchParams.get('placeholder')
    this.tooltipText = url.searchParams.get('tooltip')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.hasRightButton = url.searchParams.get('right') != null
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
