import { DropdownOption } from '../dropdown-option'
import { defineCustomElement } from '../utils'
import type { TSinchDropdownOptionElement, TSinchDropdownOptionReact } from '../dropdown-option'

defineCustomElement('sinch-select-option', class extends DropdownOption {
  constructor() {
    super()
  }
})

export type TSinchSelectOptionElement = TSinchDropdownOptionElement

export type TSinchSelectOptionReact = TSinchDropdownOptionReact

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-option': TSinchSelectOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-option': TSinchSelectOptionElement,
  }
}
