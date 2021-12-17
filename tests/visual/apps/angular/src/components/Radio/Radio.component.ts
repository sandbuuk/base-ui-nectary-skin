import { Component, Input } from '@angular/core'
import '@nectary/components/radio'

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
})

export class RadioComponent {
  @Input() width: number
  value: string

  constructor() {
    this.width = 200
    this.value = ''
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
  }
}
