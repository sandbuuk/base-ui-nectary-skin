import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHeight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-height', IconHeight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-height': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-height': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-height': TSinchIconReact,
    }
  }
}
