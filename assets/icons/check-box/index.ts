import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheckBox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-check-box', IconCheckBox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-check-box': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check-box': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-check-box': TSinchIconReact,
    }
  }
}
