import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRouter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-router', IconRouter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-router': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-router': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-router': TSinchIconReact,
    }
  }
}
