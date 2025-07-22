import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStopCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stop-circle', IconStopCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stop-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stop-circle': TSinchIconReact,
    }
  }
}
