import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheckCircleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-check-circle-outline', IconCheckCircleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-check-circle-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check-circle-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-check-circle-outline': TSinchIconReact,
    }
  }
}
