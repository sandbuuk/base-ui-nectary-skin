import { Component } from '@angular/core'
import '@nectary/components/tooltip'
import { TSinchTooltipType } from '@nectary/components/tooltip/types'

@Component({
  selector: 'tooltip-component',
  templateUrl: './Tooltip.component.html',
  styles: [':host{ display: contents; }']
})

export class TooltipComponent {
  orientation: string | null
  text: string | null
  type: TSinchTooltipType | null

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.text = url.searchParams.get('text')
    this.type = url.searchParams.get('type') as TSinchTooltipType
  }

  onTooltipShow() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-show'))
  }
  onTooltipHide() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-hide'))
  }
}
