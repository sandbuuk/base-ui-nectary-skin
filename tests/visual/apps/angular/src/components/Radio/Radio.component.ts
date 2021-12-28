import { Component } from '@angular/core'
import '@nectary/components/radio'

@Component({
  selector: 'radio-component',
  templateUrl: './Radio.component.html',
  styleUrls: ['./Radio.component.css']
})

export class RadioComponent {
  value: string

  constructor() {
    this.value = ''
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
  }
}
