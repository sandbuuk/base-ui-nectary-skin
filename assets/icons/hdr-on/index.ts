import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHdrOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hdr-on', IconHdrOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hdr-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hdr-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hdr-on': TSinchIconReact,
    }
  }
}
