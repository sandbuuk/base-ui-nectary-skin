import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCoronavirus = createIconClass(templateHTML)
defineCustomElement('sinch-icon-coronavirus', IconCoronavirus)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-coronavirus': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-coronavirus': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-coronavirus': TSinchIconReact,
    }
  }
}
