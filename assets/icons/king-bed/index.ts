import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconKingBed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-king-bed', IconKingBed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-king-bed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-king-bed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-king-bed': TSinchIconReact,
    }
  }
}
