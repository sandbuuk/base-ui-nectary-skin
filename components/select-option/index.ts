import { DropdownTextOption } from '../dropdown-text-option'
import { defineCustomElement } from '../utils'
import type { TSinchSelectOptionElement, TSinchSelectOptionReact } from './types'

defineCustomElement('sinch-select-option', class extends DropdownTextOption {
  constructor() {
    super()
  }
})

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
