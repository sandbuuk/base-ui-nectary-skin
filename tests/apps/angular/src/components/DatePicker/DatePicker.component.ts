import { Component } from '@angular/core'
import '@sinch-engage/nectary/date-picker'

@Component({
  selector: 'date-picker-component',
  templateUrl: './DatePicker.component.html',
  styleUrls: ['./DatePicker.component.css']
})

export class DatePickerComponent {
  value: string
  isControlled: boolean
  locale: string | null
  min: string | null
  max: string | null

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.locale = url.searchParams.get('locale')
    this.min = url.searchParams.get('min')
    this.max = url.searchParams.get('max')
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-date-picker-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-date-picker-blur'))
  }
}
