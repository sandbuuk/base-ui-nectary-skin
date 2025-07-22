import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQrCode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-qr-code', IconQrCode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-qr-code': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-qr-code': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-qr-code': TSinchIconReact,
    }
  }
}
