import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWheelchairPickup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wheelchair-pickup', IconWheelchairPickup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wheelchair-pickup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wheelchair-pickup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wheelchair-pickup': TSinchIconReact,
    }
  }
}
