import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPublic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-public', IconPublic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-public': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-public': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-public': TSinchIconReact,
    }
  }
}
