import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhoneAndroid = createIconClass(templateHTML)
defineCustomElement('sinch-icon-phone-android', IconPhoneAndroid)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-phone-android': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phone-android': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-phone-android': TSinchIconReact,
    }
  }
}
