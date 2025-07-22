import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconListAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-list-alt', IconListAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-list-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-list-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-list-alt': TSinchIconReact,
    }
  }
}
