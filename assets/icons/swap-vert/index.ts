import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwapVert = createIconClass(templateHTML)
defineCustomElement('sinch-icon-swap-vert', IconSwapVert)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-swap-vert': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-vert': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-swap-vert': TSinchIconReact,
    }
  }
}
