import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRotate90DegreesCcw = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rotate-90-degrees-ccw', IconRotate90DegreesCcw)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rotate-90-degrees-ccw': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rotate-90-degrees-ccw': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rotate-90-degrees-ccw': TSinchIconReact,
    }
  }
}
