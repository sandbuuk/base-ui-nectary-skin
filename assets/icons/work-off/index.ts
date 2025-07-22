import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWorkOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-work-off', IconWorkOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-work-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-work-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-work-off': TSinchIconReact,
    }
  }
}
