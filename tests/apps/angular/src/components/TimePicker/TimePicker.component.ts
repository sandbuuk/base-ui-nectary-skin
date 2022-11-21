import { Component } from '@angular/core'
import '@sinch-engage/nectary/time-picker'

@Component({
  selector: 'time-picker-component',
  templateUrl: './TimePicker.component.html',
  styles: [':host{ display: contents; }']
})

export class TimePickerComponent {
  value: string
  isControlled: boolean
  ampm: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.ampm = url.searchParams.get('ampm') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-time-picker-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-time-picker-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-time-picker-blur'))
  }
}
