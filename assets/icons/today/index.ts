import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToday = createIconClass(templateHTML)
defineCustomElement('sinch-icon-today', IconToday)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-today': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-today': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-today': TSinchIconReact,
    }
  }
}
