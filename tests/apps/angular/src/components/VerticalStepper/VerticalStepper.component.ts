import { Component } from '@angular/core'
import '@nectary/components/vertical-stepper'
import '@nectary/components/vertical-stepper-item'
import '@nectary/components/text'

@Component({
  selector: 'vertical-stepper-component',
  templateUrl: './VerticalStepper.component.html',
  styles: [':host{ display: contents; }']
})

export class VerticalStepper {
  constructor() {}
}
