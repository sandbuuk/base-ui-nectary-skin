import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwapHoriz = createIconClass(templateHTML)
defineCustomElement('sinch-icon-swap-horiz', IconSwapHoriz)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-swap-horiz': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-horiz': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-swap-horiz': TSinchIconReact,
    }
  }
}
