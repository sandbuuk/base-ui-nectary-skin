import { Component } from '@angular/core'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary-assets/icons/attach-file'
import '@sinch-engage/nectary-assets/icons/send'
import '@sinch-engage/nectary-assets/icons/mood'
import '@sinch-engage/nectary-assets/icons/search'
import '@sinch-engage/nectary-assets/icons/add-comment'
import '@sinch-engage/nectary-assets/icons/more-horiz'

@Component({
  selector: 'textarea-component',
  templateUrl: './Textarea.component.html',
  styles: [':host{ display: contents; }']
})

export class TextareaComponent {
  value: string
  isControlled: boolean
  isInvalid: boolean
  placeholderText: string | null
  isDisabled: boolean
  isResizable: boolean
  rows: string | null
  hasBottom: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.isInvalid = url.searchParams.get('invalid') !== null
    this.placeholderText = url.searchParams.get('placeholder')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.isResizable = url.searchParams.get('resizable') != null
    this.rows = url.searchParams.get('rows')
    this.hasBottom = url.searchParams.get('bottom') !== null
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
