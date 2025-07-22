import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMultipleStop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-multiple-stop', IconMultipleStop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-multiple-stop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-multiple-stop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-multiple-stop': TSinchIconReact,
    }
  }
}
