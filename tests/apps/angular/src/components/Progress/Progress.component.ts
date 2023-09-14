import { Component } from '@angular/core'
import '@nectary/components/progress'

@Component({
  selector: 'progress-component',
  templateUrl: './Progress.component.html',
  styles: [':host{ display: contents; }']
})

export class ProgressComponent {
  value: number | null
  isDetailed: boolean
  constructor() {
    const url = new URL(location.href)

    this.isDetailed = url.searchParams.get('detailed') != null

    this.value = (() => {
      const val = url.searchParams.get('value') ?? '0'
      const int = parseInt(val)

      return Number.isInteger(int) ? int : 0
    })()
  }
}
