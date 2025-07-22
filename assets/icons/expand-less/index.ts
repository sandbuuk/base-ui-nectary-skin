import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExpandLess = createIconClass(templateHTML)
defineCustomElement('sinch-icon-expand-less', IconExpandLess)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-expand-less': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-expand-less': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-expand-less': TSinchIconReact,
    }
  }
}
