import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEscalatorWarning = createIconClass(templateHTML)
defineCustomElement('sinch-icon-escalator-warning', IconEscalatorWarning)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-escalator-warning': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-escalator-warning': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-escalator-warning': TSinchIconReact,
    }
  }
}
