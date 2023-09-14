import { Component } from '@angular/core'
import { TSinchBadgeMode } from '@nectary/components/badge/types'
import '@nectary/components/badge'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/notifications'
import { TSinchSize } from '@nectary/components/utils/size'

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
