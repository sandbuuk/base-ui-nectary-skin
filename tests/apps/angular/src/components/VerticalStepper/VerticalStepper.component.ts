import { Component } from '@angular/core'
import '@sinch-engage/nectary/vertical-stepper'
import '@sinch-engage/nectary/vertical-stepper-item'

@Component({
  selector: 'vertical-stepper-component',
  templateUrl: './VerticalStepper.component.html',
  styles: [':host{ display: contents; }']
})

export class VerticalStepper {
  constructor() {}
}
