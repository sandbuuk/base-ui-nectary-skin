import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsRailway = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-railway', IconDirectionsRailway)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-railway': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-railway': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-railway': TSinchIconReact,
    }
  }
}
