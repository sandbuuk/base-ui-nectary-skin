import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVisibilityOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-visibility-off', IconVisibilityOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-visibility-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-visibility-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-visibility-off': TSinchIconReact,
    }
  }
}
