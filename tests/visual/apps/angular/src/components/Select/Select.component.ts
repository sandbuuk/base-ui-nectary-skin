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

  constructor() {
    this.value = ''
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
  }
}
