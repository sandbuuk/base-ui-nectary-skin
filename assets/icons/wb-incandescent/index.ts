import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWbIncandescent = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wb-incandescent', IconWbIncandescent)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wb-incandescent': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wb-incandescent': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wb-incandescent': TSinchIconReact,
    }
  }
}
