import { Component } from '@angular/core'
import '@nectary/components/horizontal-stepper'
import '@nectary/components/horizontal-stepper-item'

@Component({
  selector: 'horizontal-stepper-component',
  templateUrl: './HorizontalStepper.component.html',
  styles: [':host{ display: contents; }']
})

export class HorizontalStepper {
  constructor() {}
}
