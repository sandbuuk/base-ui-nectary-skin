import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoSim = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-sim', IconNoSim)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-sim': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-sim': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-sim': TSinchIconReact,
    }
  }
}
