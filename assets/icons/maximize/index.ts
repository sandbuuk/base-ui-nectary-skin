import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMaximize = createIconClass(templateHTML)
defineCustomElement('sinch-icon-maximize', IconMaximize)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-maximize': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-maximize': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-maximize': TSinchIconReact,
    }
  }
}
