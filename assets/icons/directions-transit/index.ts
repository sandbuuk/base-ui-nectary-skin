import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirectionsTransit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions-transit', IconDirectionsTransit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions-transit': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-transit': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions-transit': TSinchIconReact,
    }
  }
}
