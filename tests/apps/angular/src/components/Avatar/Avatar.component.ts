import { Component } from '@angular/core'
import '@sinch-engage/nectary/avatar'
import '@sinch-engage/nectary/avatar-badge'
import '@sinch-engage/nectary/avatar-status'

@Component({
  selector: 'avatar-component',
  templateUrl: './Avatar.component.html',
  styleUrls: ['./Avatar.component.css']
})

export class AvatarComponent {
  alt: string
  src?: string
  background?: string
  size?: string
  badgeText?: string
  statusColor: any

  constructor() {
    const url = new URL(location.href)
    this.alt = url.searchParams.get('alt') ?? ''
    this.src = url.searchParams.get('src') ?? undefined
    this.background = url.searchParams.get('bg') ?? undefined
    this.size = url.searchParams.get('size') ?? undefined
    this.badgeText = url.searchParams.get('badge') ?? undefined
    this.statusColor = url.searchParams.get('status')
  }
}
