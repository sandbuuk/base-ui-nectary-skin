import { Component } from '@angular/core'
import '@nectary/components/checkbox'

@Component({
  selector: 'checkbox-component',
  templateUrl: './Checkbox.component.html',
  styleUrls: ['./Checkbox.component.css']
})

export class CheckboxComponent {
  isChecked: boolean | null
  isControlled: boolean
  text: string | null
  isDisabled: boolean
  isIndeterminate: boolean

  constructor() {
    const url = new URL(location.href)
    this.isChecked = url.searchParams.get('checked') !== null
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.text = url.searchParams.get('text')
    this.isDisabled = url.searchParams.get('disabled') !== null
    this.isIndeterminate = url.searchParams.get('indeterminate') !== null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.isChecked = (e as CustomEvent).detail
    }
  }
}
