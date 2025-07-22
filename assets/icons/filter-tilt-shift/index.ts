import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilterTiltShift = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter-tilt-shift', IconFilterTiltShift)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter-tilt-shift': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter-tilt-shift': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter-tilt-shift': TSinchIconReact,
    }
  }
}
