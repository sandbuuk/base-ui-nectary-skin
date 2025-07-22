import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMyLocation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-my-location', IconMyLocation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-my-location': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-my-location': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-my-location': TSinchIconReact,
    }
  }
}
