import { Component } from '@angular/core'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/select'
import '@sinch-engage/nectary/select-option'

@Component({
  selector: 'select-component',
  templateUrl: './Select.component.html',
  styleUrls: ['./Select.component.css']
})

export class SelectComponent {
  value: string
  isControlled: boolean
  labelText: string | null
  optionalText: string | null
  additionalText: string | null
  invalidText: string | null
  placeholderText: string | null
  tooltipText: string | null
  isDisabled: boolean
  maxVisibleItems: number | null

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.labelText = url.searchParams.get('label')
    this.optionalText = url.searchParams.get('optional')
    this.additionalText = url.searchParams.get('additional')
    this.invalidText = url.searchParams.get('invalid')
    this.placeholderText = url.searchParams.get('placeholder')
    this.tooltipText = url.searchParams.get('tooltip')
    this.isDisabled = url.searchParams.get('disabled') != null

    const numVisibleValue = url.searchParams.get('maxvisibleitems')
    this.maxVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-select-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-select-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-select-blur'))
  }
}
