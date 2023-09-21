import { Component } from '@angular/core'
import { TSinchBadgeMode } from '@nectary/components/badge/types'
import '@nectary/components/badge'
import '@nectary/components/icon-button'
import '@nectary/assets/icons/notifications'
import { TSinchSize } from '@nectary/components/utils/size'
import { ActivatedRoute } from '@angular/router'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.color = search.get('color') ?? undefined
    this.size = (search.get('size') as TSinchSize | null) ?? 'l'
    this.mode = (search.get('mode') as TSinchBadgeMode) ?? undefined
    this.text = search.get('text') ?? ''
    this.isHidden = search.get('hidden') !== null
  }
}
