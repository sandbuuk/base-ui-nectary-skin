import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFoodBank = createIconClass(templateHTML)
defineCustomElement('sinch-icon-food-bank', IconFoodBank)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-food-bank': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-food-bank': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-food-bank': TSinchIconReact,
    }
  }
}
