import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallMissedOutgoing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-missed-outgoing', IconCallMissedOutgoing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-missed-outgoing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-missed-outgoing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-missed-outgoing': TSinchIconReact,
    }
  }
}
