import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBusiness = createIconClass(templateHTML)
defineCustomElement('sinch-icon-business', IconBusiness)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-business': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-business': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-business': TSinchIconReact,
    }
  }
}
