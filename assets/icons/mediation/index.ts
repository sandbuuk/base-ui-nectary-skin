import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMediation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mediation', IconMediation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mediation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mediation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mediation': TSinchIconReact,
    }
  }
}
