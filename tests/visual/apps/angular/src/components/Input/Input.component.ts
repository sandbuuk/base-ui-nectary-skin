import { Component } from '@angular/core'
import '@nectary/components/input'
import '@nectary/components/input-tooltip'

@Component({
  selector: 'input-component',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})

export class InputComponent {
  value: string
  isControlled: boolean
  labelText?: string
  optionalText?: string
  additionalText?: string
  invalidText?: string
  placeholderText?: string
  tooltipText?: string
  isDisabled: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.labelText = url.searchParams.get('label') ?? undefined
    this.optionalText = url.searchParams.get('optional') ?? undefined
    this.additionalText = url.searchParams.get('additional') ?? undefined
    this.invalidText = url.searchParams.get('invalid') ?? undefined
    this.placeholderText = url.searchParams.get('placeholder') ?? undefined
    this.tooltipText = url.searchParams.get('tooltip') ?? undefined
    this.isDisabled = url.searchParams.get('disabled') != null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
  }
}
