import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemove = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove', IconRemove)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove': TSinchIconReact,
    }
  }
}
