import { Component } from '@angular/core'
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

  constructor() {
    const url = new URL(location.href)
    this.alt = url.searchParams.get('alt') ?? undefined
    this.src = url.searchParams.get('src') ?? undefined
    this.color = url.searchParams.get('color') ?? undefined
    this.size = url.searchParams.get('size') ?? undefined
    this.hasBadge = url.searchParams.get('badge') !== null
    this.status = url.searchParams.get('status') ?? undefined
  }
}
