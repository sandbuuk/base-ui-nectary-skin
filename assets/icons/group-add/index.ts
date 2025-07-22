import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGroupAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-group-add', IconGroupAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-group-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-group-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-group-add': TSinchIconReact,
    }
  }
}
