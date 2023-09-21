import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/skeleton'
import '@nectary/components/skeleton-item'

@Component({
  selector: 'skeleton-component',
  templateUrl: './Skeleton.component.html',
  styles: [':host{ display: contents; }']
})

export class SkeletonComponent {
  isCard: boolean
  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap

    this.isCard = search.get('card') !== null
  }
}
