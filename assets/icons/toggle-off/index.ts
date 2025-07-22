import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToggleOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-toggle-off', IconToggleOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-toggle-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toggle-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-toggle-off': TSinchIconReact,
    }
  }
}
