import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFiberNew = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fiber-new', IconFiberNew)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fiber-new': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fiber-new': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fiber-new': TSinchIconReact,
    }
  }
}
