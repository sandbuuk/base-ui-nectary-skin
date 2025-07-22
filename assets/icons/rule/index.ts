import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRule = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rule', IconRule)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rule': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rule': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rule': TSinchIconReact,
    }
  }
}
