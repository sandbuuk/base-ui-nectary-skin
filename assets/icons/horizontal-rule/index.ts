import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHorizontalRule = createIconClass(templateHTML)
defineCustomElement('sinch-icon-horizontal-rule', IconHorizontalRule)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-horizontal-rule': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-horizontal-rule': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-horizontal-rule': TSinchIconReact,
    }
  }
}
