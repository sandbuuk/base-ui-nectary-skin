import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import '@nectary/components/checkbox'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.isChecked = search.get('checked') !== null
    this.isControlled = search.get('uncontrolled') === null
    this.text = search.get('text')
    this.isDisabled = search.get('disabled') !== null
    this.isIndeterminate = search.get('indeterminate') !== null
    this.isInvalid = search.get('invalid') !== null
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
