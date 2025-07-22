import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEditAttributes = createIconClass(templateHTML)
defineCustomElement('sinch-icon-edit-attributes', IconEditAttributes)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-edit-attributes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-edit-attributes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-edit-attributes': TSinchIconReact,
    }
  }
}
