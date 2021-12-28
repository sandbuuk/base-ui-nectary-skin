import { Component } from '@angular/core'
import '@nectary/components/radio'

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
  styleUrls: ['./Radio.component.css']
})

export class RadioComponent {
  value: string
  isControlled: boolean

  constructor() {
    const url = new URL(location.href)
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.value = ''
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
    }
  }
}
