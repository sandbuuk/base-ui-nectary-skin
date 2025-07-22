import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTheaters = createIconClass(templateHTML)
defineCustomElement('sinch-icon-theaters', IconTheaters)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-theaters': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-theaters': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-theaters': TSinchIconReact,
    }
  }
}
