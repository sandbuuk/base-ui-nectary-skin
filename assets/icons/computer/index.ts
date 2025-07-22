import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconComputer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-computer', IconComputer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-computer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-computer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-computer': TSinchIconReact,
    }
  }
}
