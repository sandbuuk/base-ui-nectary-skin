import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRowing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rowing', IconRowing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rowing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rowing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rowing': TSinchIconReact,
    }
  }
}
