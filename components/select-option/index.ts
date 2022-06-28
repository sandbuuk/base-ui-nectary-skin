import { DropdownTextOption } from '../dropdown-text-option'
import { defineCustomElement } from '../utils'
import type { TSinchDropdownTextOptionElement, TSinchDropdownTextOptionReact } from '../dropdown-text-option'

defineCustomElement('sinch-select-option', class extends DropdownTextOption {
  constructor() {
    super()
  }
})

export type TSinchSelectOptionElement = TSinchDropdownTextOptionElement

export type TSinchSelectOptionReact = TSinchDropdownTextOptionReact

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
