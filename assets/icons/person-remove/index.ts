import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPersonRemove = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person-remove', IconPersonRemove)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person-remove': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-remove': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person-remove': TSinchIconReact,
    }
  }
}
