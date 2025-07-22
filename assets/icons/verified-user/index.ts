import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVerifiedUser = createIconClass(templateHTML)
defineCustomElement('sinch-icon-verified-user', IconVerifiedUser)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-verified-user': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-verified-user': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-verified-user': TSinchIconReact,
    }
  }
}
