import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/time-picker'

@Component({
  selector: 'time-picker-component',
  templateUrl: './TimePicker.component.html',
  styles: [':host{ display: contents; }']
})

export class TimePickerComponent {
  value: string
  isControlled: boolean
  ampm: boolean

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.isControlled = search.get('uncontrolled') === null
    this.ampm = search.get('ampm') !== null
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
