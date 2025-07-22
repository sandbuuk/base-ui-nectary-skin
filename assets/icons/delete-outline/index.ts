import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeleteOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-delete-outline', IconDeleteOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-delete-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-delete-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-delete-outline': TSinchIconReact,
    }
  }
}
