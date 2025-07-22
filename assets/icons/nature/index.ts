import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNature = createIconClass(templateHTML)
defineCustomElement('sinch-icon-nature', IconNature)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-nature': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nature': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-nature': TSinchIconReact,
    }
  }
}
