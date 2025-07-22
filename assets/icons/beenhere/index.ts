import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBeenhere = createIconClass(templateHTML)
defineCustomElement('sinch-icon-beenhere', IconBeenhere)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-beenhere': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-beenhere': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-beenhere': TSinchIconReact,
    }
  }
}
