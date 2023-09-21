import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/spinner'

@Component({
  selector: 'spinner-component',
  templateUrl: './Spinner.component.html',
  styles: [':host{ display: contents; }']
})

export class SpinnerComponent {
  size: string | null

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.size = search.get('size')
  }
}
