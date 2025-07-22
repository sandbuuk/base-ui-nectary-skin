import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPharmacy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-pharmacy', IconLocalPharmacy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-pharmacy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-pharmacy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-pharmacy': TSinchIconReact,
    }
  }
}
