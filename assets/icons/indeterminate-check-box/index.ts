import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconIndeterminateCheckBox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-indeterminate-check-box', IconIndeterminateCheckBox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-indeterminate-check-box': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-indeterminate-check-box': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-indeterminate-check-box': TSinchIconReact,
    }
  }
}
