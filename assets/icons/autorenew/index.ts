import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAutorenew = createIconClass(templateHTML)
defineCustomElement('sinch-icon-autorenew', IconAutorenew)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-autorenew': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-autorenew': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-autorenew': TSinchIconReact,
    }
  }
}
