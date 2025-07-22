import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-toll', IconToll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-toll': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toll': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-toll': TSinchIconReact,
    }
  }
}
