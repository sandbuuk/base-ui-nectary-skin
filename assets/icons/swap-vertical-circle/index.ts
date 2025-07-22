import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwapVerticalCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-swap-vertical-circle', IconSwapVerticalCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-swap-vertical-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-vertical-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-swap-vertical-circle': TSinchIconReact,
    }
  }
}
