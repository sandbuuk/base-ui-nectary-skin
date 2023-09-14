import { Component } from '@angular/core'
import '@nectary/components/segment'
import '@nectary/components/segment-collapse'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/checkbox'
import '@nectary/assets/icons-branded/chatbot'
import '@nectary/assets/icons/apps'
import '@nectary/components/tag'
import '@nectary/components/icon-button'
import '@nectary/components/button'
import '@nectary/components/text'

@Component({
  selector: 'segment-component',
  templateUrl: './Segment.component.html',
  styles: [`
  :host {
    display: contents;
  }
  .preview-content {
    display: flex;
    flex-direction: column;
    background-color: #F1F3F4;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  `]
})

export class SegmentComponent {
  caption: string
  hasContent: boolean
  hasIcon: boolean
  hasInfo: boolean
  hasCollapse: boolean
  isCollapsed: boolean = false
  hasAction: boolean
  hasPreview: boolean

  constructor() {
    const url = new URL(location.href)
    this.caption = url.searchParams.get('caption') ?? ''
    this.hasContent = url.searchParams.get('content') !== null
    this.hasIcon = url.searchParams.get('icon') !== null
    this.hasInfo = url.searchParams.get('info') !== null
    this.hasCollapse = url.searchParams.get('collapse') !== null
    this.hasAction = url.searchParams.get('action') !== null
    this.hasPreview = url.searchParams.get('preview') !== null
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
