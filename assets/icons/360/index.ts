import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const Icon360 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-360', Icon360)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-360': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-360': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-360': TSinchIconReact,
    }
  }
}
