import { Component } from '@angular/core'
import '@nectary/components/textarea'
import '@nectary/components/button'
import '@nectary/components/icon-button'
import '@nectary/components/tag'
import '@nectary/assets/icons/attach-file'
import '@nectary/assets/icons/send'
import '@nectary/assets/icons/mood'
import '@nectary/assets/icons/search'
import '@nectary/assets/icons/add-comment'
import '@nectary/assets/icons/more-horiz'

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
