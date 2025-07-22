import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalCafe = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-cafe', IconLocalCafe)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-cafe': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-cafe': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-cafe': TSinchIconReact,
    }
  }
}
