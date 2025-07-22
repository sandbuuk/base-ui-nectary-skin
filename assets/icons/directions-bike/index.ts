import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsBike = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-bike', IconDirectionsBike)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-bike': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-bike': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-bike': TSinchIconReact,
    }
  }
}
