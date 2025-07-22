import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWork = createIconClass(templateHTML)
defineCustomElement('sinch-icon-work', IconWork)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-work': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-work': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-work': TSinchIconReact,
    }
  }
}
