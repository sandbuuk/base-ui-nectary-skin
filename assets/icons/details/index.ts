import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDetails = createIconClass(templateHTML)
defineCustomElement('sinch-icon-details', IconDetails)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-details': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-details': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-details': TSinchIconReact,
    }
  }
}
