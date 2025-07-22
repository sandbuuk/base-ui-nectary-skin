import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHouse = createIconClass(templateHTML)
defineCustomElement('sinch-icon-house', IconHouse)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-house': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-house': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-house': TSinchIconReact,
    }
  }
}
