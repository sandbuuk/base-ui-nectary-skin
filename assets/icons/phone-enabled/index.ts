import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhoneEnabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phone-enabled', IconPhoneEnabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phone-enabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone-enabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phone-enabled': TSinchIconReact,
    }
  }
}
