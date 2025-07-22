import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPersonRemoveAlt1 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person-remove-alt-1', IconPersonRemoveAlt1)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person-remove-alt-1': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-remove-alt-1': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person-remove-alt-1': TSinchIconReact,
    }
  }
}
