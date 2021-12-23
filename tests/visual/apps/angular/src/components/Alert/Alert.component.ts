import { Component, Input } from '@angular/core'
import '@nectary/components/alert'

@Component({
  selector: 'alert-component',
  templateUrl: './Alert.component.html',
})

export class AlertComponent {
  @Input() width: number | null

  constructor() {
    this.width = null
  }
}
