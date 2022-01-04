import { Component } from '@angular/core'
import '@nectary/components/tooltip'

@Component({
  selector: 'tooltip-component',
  templateUrl: './Tooltip.component.html',
  styleUrls: ['./Tooltip.component.css']
})

export class TooltipComponent {
  orientation: string | null
  text: string | null
  isInverted: boolean
  width: string | null

  constructor() {
    const url = new URL(location.href)
    this.orientation = url.searchParams.get('orientation')
    this.text = url.searchParams.get('text')
    this.isInverted = url.searchParams.get('inverted') !== null
    this.width = url.searchParams.get('width')
  }
}
