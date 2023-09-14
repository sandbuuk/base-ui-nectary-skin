import { Component } from '@angular/core'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

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
