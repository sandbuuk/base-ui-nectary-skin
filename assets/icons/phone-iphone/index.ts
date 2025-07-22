import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhoneIphone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phone-iphone', IconPhoneIphone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phone-iphone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone-iphone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phone-iphone': TSinchIconReact,
    }
  }
}
