import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSource = createIconClass(templateHTML)
defineCustomElement('sinch-icon-source', IconSource)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-source': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-source': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-source': TSinchIconReact,
    }
  }
}
