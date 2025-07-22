import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddBusiness = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-business', IconAddBusiness)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-business': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-business': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-business': TSinchIconReact,
    }
  }
}
