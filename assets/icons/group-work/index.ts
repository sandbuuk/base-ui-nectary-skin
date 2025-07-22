import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGroupWork = createIconClass(templateHTML)
defineCustomElement('sinch-icon-group-work', IconGroupWork)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-group-work': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-group-work': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-group-work': TSinchIconReact,
    }
  }
}
