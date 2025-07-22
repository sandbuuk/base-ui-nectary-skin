import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChildCare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-child-care', IconChildCare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-child-care': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-child-care': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-child-care': TSinchIconReact,
    }
  }
}
