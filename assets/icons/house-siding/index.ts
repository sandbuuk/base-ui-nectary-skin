import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHouseSiding = createIconClass(templateHTML)
defineCustomElement('sinch-icon-house-siding', IconHouseSiding)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-house-siding': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-house-siding': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-house-siding': TSinchIconReact,
    }
  }
}
