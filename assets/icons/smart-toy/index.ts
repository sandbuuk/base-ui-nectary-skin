import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSmartToy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-smart-toy', IconSmartToy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-smart-toy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smart-toy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-smart-toy': TSinchIconReact,
    }
  }
}
