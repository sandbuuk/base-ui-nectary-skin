import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoDrinks = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-drinks', IconNoDrinks)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-drinks': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-drinks': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-drinks': TSinchIconReact,
    }
  }
}
