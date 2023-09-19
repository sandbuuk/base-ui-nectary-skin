import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/avatar'
import '@nectary/components/badge'

@Component({
  selector: 'avatar-component',
  templateUrl: './Avatar.component.html',
  styles: [':host{ display: contents; }']
})

export class AvatarComponent {
  alt?: string
  src?: string
  color?: string
  size?: string
  hasBadge: boolean
  status?: string

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.alt = search.get('alt') ?? undefined
    this.src = search.get('src') ?? undefined
    this.color = search.get('color') ?? undefined
    this.size = search.get('size') ?? undefined
    this.hasBadge = search.get('badge') !== null
    this.status = search.get('status') ?? undefined
  }
}
