import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPermIdentity = createIconClass(templateHTML)
defineCustomElement('sinch-icon-perm-identity', IconPermIdentity)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-perm-identity': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-identity': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-perm-identity': TSinchIconReact,
    }
  }
}
