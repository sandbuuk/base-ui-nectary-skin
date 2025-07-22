import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFiberDvr = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fiber-dvr', IconFiberDvr)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-dvr': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-dvr': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fiber-dvr': TSinchIconReact,
    }
  }
}
