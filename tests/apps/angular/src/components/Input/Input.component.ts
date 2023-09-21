import { Component } from '@angular/core'
import '@nectary/components/input'
import '@nectary/components/select-button'
import '@nectary/components/tag'
import '@nectary/components/chip'
import '@nectary/assets/icons/search'
import { ActivatedRoute } from '@angular/router'

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

  constructor(private route: ActivatedRoute) {
    const search = this.route.snapshot.queryParamMap
    this.value = search.get('value') ?? ''
    this.isControlled = search.get('uncontrolled') === null
    this.type = search.get('type')
    this.size = search.get('size')
    this.isInvalid = search.get('invalid') !== null
    this.placeholderText = search.get('placeholder')
    this.mask = search.get('mask')
    this.tooltipText = search.get('tooltip')
    this.isDisabled = search.get('disabled') != null
    this.hasRight = search.get('right') != null
    this.hasLeft = search.get('left') != null
    this.hasIcon = search.get('icon') != null
    this.hasCopy = search.get('copy') != null
    this.hasCut = search.get('cut') != null
    this.hasPaste = search.get('paste') != null

    console.log(this.route.snapshot)
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
