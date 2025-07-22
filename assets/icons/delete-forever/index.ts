import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeleteForever = createIconClass(templateHTML)
defineCustomElement('sinch-icon-delete-forever', IconDeleteForever)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-delete-forever': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-delete-forever': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-delete-forever': TSinchIconReact,
    }
  }
}
