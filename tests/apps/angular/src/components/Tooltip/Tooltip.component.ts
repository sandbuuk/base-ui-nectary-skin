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
  isInverted: boolean

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.text = url.searchParams.get('text')
    this.isInverted = url.searchParams.get('inverted') !== null
  }

  onTooltipShow() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-show'))
  }
  onTooltipHide() {
    window.dispatchEvent(new CustomEvent('sinch-tooltip-hide'))
  }
}
