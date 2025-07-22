import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAdUnits = createIconClass(templateHTML)
defineCustomElement('sinch-icon-ad-units', IconAdUnits)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-ad-units': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ad-units': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-ad-units': TSinchIconReact,
    }
  }
}
