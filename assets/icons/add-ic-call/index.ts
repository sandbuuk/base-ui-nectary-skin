import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddIcCall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-ic-call', IconAddIcCall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-ic-call': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-ic-call': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-ic-call': TSinchIconReact,
    }
  }
}
