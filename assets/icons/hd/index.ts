import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hd', IconHd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hd': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hd': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hd': TSinchIconReact,
    }
  }
}
