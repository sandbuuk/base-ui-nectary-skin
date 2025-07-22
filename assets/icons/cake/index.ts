import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCake = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cake', IconCake)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cake': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cake': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cake': TSinchIconReact,
    }
  }
}
