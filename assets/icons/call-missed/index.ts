import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallMissed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-missed', IconCallMissed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-missed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-missed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-missed': TSinchIconReact,
    }
  }
}
