import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSystemUpdateAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-system-update-alt', IconSystemUpdateAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-system-update-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-system-update-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-system-update-alt': TSinchIconReact,
    }
  }
}
