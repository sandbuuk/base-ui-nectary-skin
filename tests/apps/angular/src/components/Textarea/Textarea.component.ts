import { Component } from '@angular/core'
import '@sinch-engage/nectary/textarea'

@Component({
  selector: 'textarea-component',
  templateUrl: './Textarea.component.html',
  styleUrls: ['./Textarea.component.css']
})

export class TextareaComponent {
  value: string
  isControlled: boolean
  isInvalid: boolean
  placeholderText: string | null
  isDisabled: boolean
  isResizable: boolean
  rows: string | null

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.isInvalid = url.searchParams.get('invalid') !== null
    this.placeholderText = url.searchParams.get('placeholder')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.isResizable = url.searchParams.get('resizable') != null
    this.rows = url.searchParams.get('rows') ?? null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-textarea-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-textarea-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-textarea-blur'))
  }
}
