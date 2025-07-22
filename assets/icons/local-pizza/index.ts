import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPizza = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-pizza', IconLocalPizza)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-pizza': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-pizza': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-pizza': TSinchIconReact,
    }
  }
}
