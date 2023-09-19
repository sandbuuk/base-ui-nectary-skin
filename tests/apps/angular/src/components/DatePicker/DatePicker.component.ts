import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.locale = search.get('locale')
    this.min = search.get('min')
    this.max = search.get('max')
    this.isRange = search.get('range') !== null
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
