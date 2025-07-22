import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHdrWeak = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hdr-weak', IconHdrWeak)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hdr-weak': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hdr-weak': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hdr-weak': TSinchIconReact,
    }
  }
}
