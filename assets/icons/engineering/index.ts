import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEngineering = createIconClass(templateHTML)
defineCustomElement('sinch-icon-engineering', IconEngineering)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-engineering': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-engineering': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-engineering': TSinchIconReact,
    }
  }
}
