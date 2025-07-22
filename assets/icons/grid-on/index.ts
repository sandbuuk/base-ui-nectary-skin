import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGridOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-grid-on', IconGridOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-grid-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grid-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-grid-on': TSinchIconReact,
    }
  }
}
