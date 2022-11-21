import { Component } from '@angular/core'
import '@sinch-engage/nectary/checkbox'

@Component({
  selector: 'checkbox-component',
  templateUrl: './Checkbox.component.html',
  styles: [':host{ display: contents; }']
})

export class CheckboxComponent {
  isChecked: boolean | null
  isControlled: boolean
  text: string | null
  isDisabled: boolean
  isIndeterminate: boolean
  isInvalid: boolean

  constructor() {
    const url = new URL(location.href)
    this.isChecked = url.searchParams.get('checked') !== null
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.text = url.searchParams.get('text')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isIndeterminate = url.searchParams.get('indeterminate') !== null
    this.isInvalid = url.searchParams.get('invalid') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.isChecked = (e as CustomEvent).detail
    }
    window.dispatchEvent(new CustomEvent('sinch-checkbox-change', {detail: (e as CustomEvent).detail}))
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-checkbox-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-checkbox-blur'))
  }
}
