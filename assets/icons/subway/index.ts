import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSubway = createIconClass(templateHTML)
defineCustomElement('sinch-icon-subway', IconSubway)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-subway': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subway': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-subway': TSinchIconReact,
    }
  }
}
