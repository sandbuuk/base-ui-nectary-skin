import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconModeFanOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mode-fan-off', IconModeFanOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mode-fan-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mode-fan-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mode-fan-off': TSinchIconReact,
    }
  }
}
