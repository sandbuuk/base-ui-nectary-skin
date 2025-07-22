import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInput = createIconClass(templateHTML)
defineCustomElement('sinch-icon-input', IconInput)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-input': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-input': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-input': TSinchIconReact,
    }
  }
}
