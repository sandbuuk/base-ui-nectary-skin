import { Component } from '@angular/core'
import '@nectary/components/date-picker'

@Component({
  selector: 'date-picker-component',
  templateUrl: './DatePicker.component.html',
  styles: [':host{ display: contents; }']
})

export class DatePickerComponent {
  value: string
  locale: string | null
  min: string | null
  max: string | null
  isRange: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.locale = url.searchParams.get('locale')
    this.min = url.searchParams.get('min')
    this.max = url.searchParams.get('max')
    this.isRange = url.searchParams.get('range') !== null
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: (e as CustomEvent).detail}))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-blur'))
  }
}
