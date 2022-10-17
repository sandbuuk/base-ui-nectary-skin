import { Component } from '@angular/core'
import { TSinchBadgeMode, TSinchBadgeSize } from '@sinch-engage/nectary/badge/types'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/notifications'

@Component({
  selector: 'badge-component',
  templateUrl: './Badge.component.html',
  styleUrls: ['./Badge.component.css']
})

export class BadgeComponent {
  color?: string
  size: TSinchBadgeSize
  mode?: TSinchBadgeMode
  text: string
  isHidden: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = url.searchParams.get('color') ?? undefined
    this.size = (url.searchParams.get('size') as TSinchBadgeSize | null) ?? 'l'
    this.mode = (url.searchParams.get('mode') as TSinchBadgeMode) ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.isHidden = url.searchParams.get('hidden') !== null
  }
}
