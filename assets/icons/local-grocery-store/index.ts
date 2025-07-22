import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalGroceryStore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-grocery-store', IconLocalGroceryStore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-grocery-store': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-grocery-store': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-grocery-store': TSinchIconReact,
    }
  }
}
