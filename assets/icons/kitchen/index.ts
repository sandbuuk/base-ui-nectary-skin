import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKitchen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-kitchen', IconKitchen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-kitchen': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-kitchen': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-kitchen': TSinchIconReact,
    }
  }
}
