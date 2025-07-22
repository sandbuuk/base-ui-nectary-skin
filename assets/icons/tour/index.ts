import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTour = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tour', IconTour)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tour': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tour': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tour': TSinchIconReact,
    }
  }
}
