import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEast = createIconClass(templateHTML)
defineCustomElement('sinch-icon-east', IconEast)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-east': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-east': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-east': TSinchIconReact,
    }
  }
}
