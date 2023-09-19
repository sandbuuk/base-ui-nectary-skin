import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/progress-stepper'
import '@nectary/components/progress-stepper-item'

@Component({
  selector: 'progress-stepper-component',
  templateUrl: './ProgressStepper.component.html',
  styles: [':host{ display: contents; }']
})

export class ProgressStepperComponent {
  value = ''
  progressValue = ''
  invalidValue = ''
  example: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap

    this.invalidValue = search.get('invalid') ?? ''
    this.progressValue = search.get('progress') ?? ''
    this.example = search.get('example')
  }

  onChange(e: Event) {
    this.value = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-progress-stepper-change', {detail: this.value}))
  }
}
