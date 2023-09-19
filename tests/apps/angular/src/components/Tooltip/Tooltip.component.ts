import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.orientation = search.get('orientation')
    this.text = search.get('text')
    this.type = search.get('type') as TSinchTooltipType
  }

  onTooltipShow() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-show'))
  }
  onTooltipHide() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-hide'))
  }
}
