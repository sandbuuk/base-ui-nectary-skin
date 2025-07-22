import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCardTravel = createIconClass(templateHTML)
defineCustomElement('sinch-icon-card-travel', IconCardTravel)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-card-travel': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-card-travel': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-card-travel': TSinchIconReact,
    }
  }
}
