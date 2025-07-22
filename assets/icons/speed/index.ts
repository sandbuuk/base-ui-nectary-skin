import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpeed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-speed', IconSpeed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-speed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-speed': TSinchIconReact,
    }
  }
}
