import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHdrStrong = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hdr-strong', IconHdrStrong)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hdr-strong': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hdr-strong': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hdr-strong': TSinchIconReact,
    }
  }
}
