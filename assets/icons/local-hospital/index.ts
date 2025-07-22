import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalHospital = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-hospital', IconLocalHospital)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-hospital': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-hospital': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-hospital': TSinchIconReact,
    }
  }
}
