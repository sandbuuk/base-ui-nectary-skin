import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconConnectWithoutContact = createIconClass(templateHTML)
defineCustomElement('sinch-icon-connect-without-contact', IconConnectWithoutContact)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-connect-without-contact': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-connect-without-contact': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-connect-without-contact': TSinchIconReact,
    }
  }
}
