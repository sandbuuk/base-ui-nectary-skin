import { Component } from '@angular/core'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'

@Component({
  selector: 'segmented-control-component',
  templateUrl: './SegmentedControl.component.html',
  styles: [':host{ display: contents; }']
})

export class SegmentedControlComponent {
  value: string
  isControlled: boolean
  isSingleOption: boolean

  constructor() {
    const url = new URL(location.href)
    const search = url.searchParams

    this.isControlled = search.get('uncontrolled') === null
    this.isSingleOption = search.get('single-option') !== null
    this.value = search.get('value') ?? ''
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-segmented-control-change', {detail: (e as CustomEvent).detail}))
    }
  }
}
