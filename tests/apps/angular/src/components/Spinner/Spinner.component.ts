import { Component } from '@angular/core'
import '@nectary/components/spinner'

@Component({
  selector: 'spinner-component',
  templateUrl: './Spinner.component.html',
  styles: [':host{ display: contents; }']
})

export class SpinnerComponent {
  size: string | null

  constructor() {
    const url = new URL(location.href)
    this.size = url.searchParams.get('size')
  }
}
