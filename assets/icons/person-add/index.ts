import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPersonAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-person-add', IconPersonAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-person-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-person-add': TSinchIconReact,
    }
  }
}
