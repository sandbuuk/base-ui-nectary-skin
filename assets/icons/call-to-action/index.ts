import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallToAction = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-to-action', IconCallToAction)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-to-action': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-to-action': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-to-action': TSinchIconReact,
    }
  }
}
