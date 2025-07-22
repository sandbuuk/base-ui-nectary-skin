import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVariables = createIconClass(templateHTML)
defineCustomElement('sinch-icon-variables', IconVariables)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-variables': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-variables': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-variables': TSinchIconReact,
    }
  }
}
