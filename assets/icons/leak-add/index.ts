import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLeakAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-leak-add', IconLeakAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-leak-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-leak-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-leak-add': TSinchIconReact,
    }
  }
}
