import { Component } from '@angular/core'
import '@nectary/components/icon/share'
import '@nectary/components/input-tooltip'
import '@nectary/components/select'

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
  numVisibleItems: number | null

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

    const numVisibleValue = url.searchParams.get('numvisibleitems')
    this.numVisibleItems = numVisibleValue !== null ? parseInt(numVisibleValue) : null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
  }
}
