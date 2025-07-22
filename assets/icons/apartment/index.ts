import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconApartment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-apartment', IconApartment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-apartment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-apartment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-apartment': TSinchIconReact,
    }
  }
}
