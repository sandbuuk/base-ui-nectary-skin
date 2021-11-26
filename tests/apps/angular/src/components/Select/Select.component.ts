import { Component, Input } from '@angular/core'
import '@nectary/components/icon/share'
import '@nectary/components/input-tooltip'
import '@nectary/components/select'

@Component({
  selector: 'select-component',
  templateUrl: './Select.component.html',
})

export class SelectComponent {
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
