import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHdrOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hdr-off', IconHdrOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hdr-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hdr-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hdr-off': TSinchIconReact,
    }
  }
}
