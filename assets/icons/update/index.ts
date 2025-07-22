import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUpdate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-update', IconUpdate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-update': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-update': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-update': TSinchIconReact,
    }
  }
}
