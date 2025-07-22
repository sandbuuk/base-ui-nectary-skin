import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFingerprint = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fingerprint', IconFingerprint)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fingerprint': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fingerprint': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fingerprint': TSinchIconReact,
    }
  }
}
