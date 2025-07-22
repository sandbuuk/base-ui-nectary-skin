import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMiscellaneousServices = createIconClass(templateHTML)
defineCustomElement('sinch-icon-miscellaneous-services', IconMiscellaneousServices)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-miscellaneous-services': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-miscellaneous-services': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-miscellaneous-services': TSinchIconReact,
    }
  }
}
