import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRemoveCircleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-remove-circle-outline', IconRemoveCircleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-remove-circle-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-remove-circle-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-remove-circle-outline': TSinchIconReact,
    }
  }
}
