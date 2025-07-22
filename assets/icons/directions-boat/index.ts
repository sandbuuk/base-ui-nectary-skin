import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsBoat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-boat', IconDirectionsBoat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-boat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-boat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-boat': TSinchIconReact,
    }
  }
}
