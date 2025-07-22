import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSearchOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-search-off', IconSearchOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-search-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-search-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-search-off': TSinchIconReact,
    }
  }
}
