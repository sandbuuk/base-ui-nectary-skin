import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwapCalls = createIconClass(templateHTML)
defineCustomElement('sinch-icon-swap-calls', IconSwapCalls)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-swap-calls': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-swap-calls': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-swap-calls': TSinchIconReact,
    }
  }
}
