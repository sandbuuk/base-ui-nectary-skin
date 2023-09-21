import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/progress'

@Component({
  selector: 'progress-component',
  templateUrl: './Progress.component.html',
  styles: [':host{ display: contents; }']
})

export class ProgressComponent {
  value: number | null
  isDetailed: boolean
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap

    this.isDetailed = search.get('detailed') != null

    this.value = (() => {
      const val = search.get('value') ?? '0'
      const int = parseInt(val)

      return Number.isInteger(int) ? int : 0
    })()
  }
}
