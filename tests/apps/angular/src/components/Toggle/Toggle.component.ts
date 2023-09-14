import { Component } from '@angular/core'
import '@nectary/components/toggle'

@Component({
  selector: 'toggle-component',
  templateUrl: './Toggle.component.html',
  styles: [':host{ display: contents; }']
})

export class ToggleComponent {
  isChecked: boolean | null
  isControlled: boolean
  text: string | null
  isDisabled: boolean
  isSmall: boolean
  isLabeled: boolean

  constructor() {
    const url = new URL(location.href)
    this.isChecked = url.searchParams.get('checked') !== null
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.text = url.searchParams.get('text')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isSmall = url.searchParams.get('small') !== null
    this.isLabeled = url.searchParams.get('labeled') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.isChecked = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-toggle-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-toggle-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-toggle-blur'))
  }
}
