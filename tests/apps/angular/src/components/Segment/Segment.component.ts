import { Component } from '@angular/core'
import '@sinch-engage/nectary/segment'
import '@sinch-engage/nectary/segment-collapse'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/icon-branded/chatbot'
import '@sinch-engage/nectary/icon/apps'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/button'

@Component({
  selector: 'segment-component',
  templateUrl: './Segment.component.html',
  styleUrls: ['./Segment.component.css']
})

export class SegmentComponent {
  caption: string
  hasContent: boolean
  hasIcon: boolean
  hasInfo: boolean
  hasCollapse: boolean
  isCollapsed: boolean = false
  hasAction: boolean

  constructor() {
    const url = new URL(location.href)
    this.caption = url.searchParams.get('caption') ?? ''
    this.hasContent = url.searchParams.get('content') !== null
    this.hasIcon = url.searchParams.get('icon') !== null
    this.hasInfo = url.searchParams.get('info') !== null
    this.hasCollapse = url.searchParams.get('collapse') !== null
    this.hasAction = url.searchParams.get('action') !== null
  }

  onCollapse(e: Event) {
    this.isCollapsed = (e as CustomEvent).detail
    window.dispatchEvent(new CustomEvent('sinch-segment-collapse-change', {detail: (e as CustomEvent).detail}))
  }

  onCollapseFocus() {
    window.dispatchEvent(new CustomEvent('sinch-segment-collapse-focus'))
  }

  onCollapseBlur() {
    window.dispatchEvent(new CustomEvent('sinch-segment-collapse-blur'))
  }
}

export default SegmentComponent
