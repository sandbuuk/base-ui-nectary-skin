import { Component } from '@angular/core'
import '@nectary/components/segmented-icon-control'
import '@nectary/components/segmented-icon-control-option'
import '@nectary/assets/icons/format-align-right'
import '@nectary/assets/icons/format-align-left'
import '@nectary/assets/icons/format-align-center'
import '@nectary/assets/icons/format-align-justify'

@Component({
  selector: 'segmented-icon-control-component',
  templateUrl: './SegmentedIconControl.component.html',
  styles: [':host{ display: contents; }']
})

export class SegmentedIconControlComponent {
  value: string
  isControlled: boolean
  isMultiple: boolean
  isSingleOption: boolean

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isMultiple = search.get('multiple') !== null
    this.isSingleOption = search.get('single-option') !== null
    this.value = search.get('value') ?? ''
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-segmented-icon-control-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
