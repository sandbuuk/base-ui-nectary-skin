import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextFields = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-fields', IconTextFields)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-fields': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-fields': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-fields': TSinchIconReact,
    }
  }
}
