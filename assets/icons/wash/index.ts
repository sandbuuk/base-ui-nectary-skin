import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWash = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wash', IconWash)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wash': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wash': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wash': TSinchIconReact,
    }
  }
}
