import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEuro = createIconClass(templateHTML)
defineCustomElement('sinch-icon-euro', IconEuro)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-euro': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-euro': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-euro': TSinchIconReact,
    }
  }
}
