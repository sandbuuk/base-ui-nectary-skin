import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHotTub = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hot-tub', IconHotTub)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hot-tub': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hot-tub': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hot-tub': TSinchIconReact,
    }
  }
}
