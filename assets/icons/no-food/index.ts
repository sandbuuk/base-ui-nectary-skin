import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoFood = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-food', IconNoFood)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-food': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-food': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-food': TSinchIconReact,
    }
  }
}
