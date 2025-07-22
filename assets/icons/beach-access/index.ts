import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBeachAccess = createIconClass(templateHTML)
defineCustomElement('sinch-icon-beach-access', IconBeachAccess)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-beach-access': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-beach-access': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-beach-access': TSinchIconReact,
    }
  }
}
