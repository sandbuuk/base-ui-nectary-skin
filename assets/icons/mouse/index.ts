import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMouse = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mouse', IconMouse)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mouse': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mouse': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mouse': TSinchIconReact,
    }
  }
}
