import { Component } from '@angular/core'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/select-button'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary-assets/icons/search'

@Component({
  selector: 'input-component',
  templateUrl: './Input.component.html',
  styles: [':host{ display: contents; }']
})

export class InputComponent {
  value: string
  isControlled: boolean
  type: string | null
  size: string | null
  isInvalid: boolean
  placeholderText: string | null
  mask: string | null
  tooltipText: string | null
  isDisabled: boolean
  hasLeft: boolean
  hasRight: boolean
  hasIcon: boolean
  hasCopy: boolean
  hasCut: boolean
  hasPaste: boolean

  constructor() {
    const url = new URL(location.href)
    this.value = url.searchParams.get('value') ?? ''
    this.isControlled = url.searchParams.get('uncontrolled') === null
    this.type = url.searchParams.get('type')
    this.size = url.searchParams.get('size')
    this.isInvalid = url.searchParams.get('invalid') !== null
    this.placeholderText = url.searchParams.get('placeholder')
    this.mask = url.searchParams.get('mask')
    this.tooltipText = url.searchParams.get('tooltip')
    this.isDisabled = url.searchParams.get('disabled') != null
    this.hasRight = url.searchParams.get('right') != null
    this.hasLeft = url.searchParams.get('left') != null
    this.hasIcon = url.searchParams.get('icon') != null
    this.hasCopy = url.searchParams.get('copy') != null
    this.hasCut = url.searchParams.get('cut') != null
    this.hasPaste = url.searchParams.get('paste') != null
  }

  onChange(e: Event) {
    if (this.isControlled) {
      this.value = (e as CustomEvent).detail
      window.dispatchEvent(new CustomEvent('sinch-input-change', {detail: (e as CustomEvent).detail}))
    }
  }
  onFocus() {
    window.dispatchEvent(new CustomEvent('sinch-input-focus'))
  }
  onBlur() {
    window.dispatchEvent(new CustomEvent('sinch-input-blur'))
  }
  onCopy(e: Event) {
    if (!this.hasCopy)
      return

    const { value, replaceWith } = (e as CustomEvent).detail

    replaceWith('REPLACED')

    window.dispatchEvent(new CustomEvent('sinch-input-copy', { detail: value }))
  }
  onCut(e: Event) {
    if (!this.hasCut)
      return

    const { value, replaceWith } = (e as CustomEvent).detail

    replaceWith('REPLACED')

    window.dispatchEvent(new CustomEvent('sinch-input-cut', { detail: value }))
  }
  onPaste(e: Event) {
    if (!this.hasPaste)
      return

    const { value, replaceWith } = (e as CustomEvent).detail

    replaceWith('REPLACED')

    window.dispatchEvent(new CustomEvent('sinch-input-paste', { detail: value }))
  }
}
