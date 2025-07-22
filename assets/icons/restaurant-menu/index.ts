import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRestaurantMenu = createIconClass(templateHTML)
defineCustomElement('sinch-icon-restaurant-menu', IconRestaurantMenu)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-restaurant-menu': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-restaurant-menu': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-restaurant-menu': TSinchIconReact,
    }
  }
}
