import { Component } from '@angular/core'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/search'

@Component({
  selector: 'field-component',
  templateUrl: './Field.component.html',
  styleUrls: ['./Field.component.css'],
})

export class FieldComponent {
  value: string
  labelText: string | null
  optionalText: string | null
  additionalText: string | null
  invalidText: string | null
  placeholderText: string | null
  tooltipText: string | null
  isDisabled: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.labelText = url.searchParams.get('label')
    this.optionalText = url.searchParams.get('optional')
    this.additionalText = url.searchParams.get('additional')
    this.invalidText = url.searchParams.get('invalid')
    this.placeholderText = url.searchParams.get('placeholder')
    this.tooltipText = url.searchParams.get('tooltip')
    this.isDisabled = url.searchParams.get('disabled') != null
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-input-change', {detail: (e as CustomEvent).detail}))
  }
}
