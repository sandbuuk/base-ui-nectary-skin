import { Component } from '@angular/core'
import '@nectary/components/spinner'

@Component({
  selector: 'spinner-component',
  templateUrl: './Spinner.component.html',
  styleUrls: ['./Spinner.component.css']
})

export class SpinnerComponent {
  type: string | null

  constructor() {
    const url = new URL(location.href)
    this.type = url.searchParams.get('type')
  }
}
