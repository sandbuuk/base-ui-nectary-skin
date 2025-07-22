import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwapHorizontalCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-swap-horizontal-circle', IconSwapHorizontalCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-swap-horizontal-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-horizontal-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-swap-horizontal-circle': TSinchIconReact,
    }
  }
}
