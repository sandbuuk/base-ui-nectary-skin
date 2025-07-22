import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsCar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-car', IconDirectionsCar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-car': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-car': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-car': TSinchIconReact,
    }
  }
}
