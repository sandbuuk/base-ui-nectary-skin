import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWarningAmber = createIconClass(templateHTML)
defineCustomElement('sinch-icon-warning-amber', IconWarningAmber)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-warning-amber': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-warning-amber': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-warning-amber': TSinchIconReact,
    }
  }
}
