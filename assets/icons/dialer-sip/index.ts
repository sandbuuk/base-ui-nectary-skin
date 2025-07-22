import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDialerSip = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dialer-sip', IconDialerSip)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dialer-sip': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dialer-sip': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dialer-sip': TSinchIconReact,
    }
  }
}
