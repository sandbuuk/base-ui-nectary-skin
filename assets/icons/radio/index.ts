import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRadio = createIconClass(templateHTML)
defineCustomElement('sinch-icon-radio', IconRadio)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-radio': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-radio': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-radio': TSinchIconReact,
    }
  }
}
