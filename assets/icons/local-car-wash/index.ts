import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalCarWash = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-car-wash', IconLocalCarWash)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-car-wash': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-car-wash': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-car-wash': TSinchIconReact,
    }
  }
}
