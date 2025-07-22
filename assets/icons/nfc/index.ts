import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNfc = createIconClass(templateHTML)
defineCustomElement('sinch-icon-nfc', IconNfc)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-nfc': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nfc': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-nfc': TSinchIconReact,
    }
  }
}
