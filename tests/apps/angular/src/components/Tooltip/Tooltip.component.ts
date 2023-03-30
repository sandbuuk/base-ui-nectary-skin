import { Component } from '@angular/core'
import '@sinch-engage/nectary/tooltip'
import '@sinch-engage/nectary/text'

@Component({
  selector: 'tooltip-component',
  templateUrl: './Tooltip.component.html',
  styles: [':host{ display: contents; }']
})

export class TooltipComponent {
  orientation: string | null
  text: string | null

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.text = url.searchParams.get('text')
  }

  onTooltipShow() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-show'))
  }
  onTooltipHide() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-hide'))
  }
}
