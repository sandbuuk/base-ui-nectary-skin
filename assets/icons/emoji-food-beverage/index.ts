import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiFoodBeverage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-food-beverage', IconEmojiFoodBeverage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-food-beverage': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-food-beverage': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-food-beverage': TSinchIconReact,
    }
  }
}
