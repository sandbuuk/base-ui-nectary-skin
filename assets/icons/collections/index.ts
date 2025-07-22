import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCollections = createIconClass(templateHTML)
defineCustomElement('sinch-icon-collections', IconCollections)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-collections': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-collections': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-collections': TSinchIconReact,
    }
  }
}
