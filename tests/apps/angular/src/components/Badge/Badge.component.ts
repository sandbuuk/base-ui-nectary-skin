import { Component } from '@angular/core'
import { TSinchBadgeMode } from '@sinch-engage/nectary/badge/types'
import '@sinch-engage/nectary/badge'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/notifications'
import { TSinchSize } from '@sinch-engage/nectary/utils/size'

@Component({
  selector: 'badge-component',
  templateUrl: './Badge.component.html',
  styles: [':host{ display: contents; }']
})

export class BadgeComponent {
  color?: string
  size: TSinchSize
  mode?: TSinchBadgeMode
  text: string
  isHidden: boolean

  constructor() {
    const url = new URL(location.href)
    this.color = url.searchParams.get('color') ?? undefined
    this.size = (url.searchParams.get('size') as TSinchSize | null) ?? 'l'
    this.mode = (url.searchParams.get('mode') as TSinchBadgeMode) ?? undefined
    this.text = url.searchParams.get('text') ?? ''
    this.isHidden = url.searchParams.get('hidden') !== null
  }
}
