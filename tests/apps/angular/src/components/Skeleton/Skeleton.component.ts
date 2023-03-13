import { Component } from '@angular/core'
import '@sinch-engage/nectary/skeleton'
import '@sinch-engage/nectary/skeleton-item'

@Component({
  selector: 'skeleton-component',
  templateUrl: './Skeleton.component.html',
  styles: [':host{ display: contents; }']
})

export class SkeletonComponent {
  isCard: boolean
  constructor() {
    const url = new URL(location.href)

    this.isCard = url.searchParams.get('card') !== null
  }
}
