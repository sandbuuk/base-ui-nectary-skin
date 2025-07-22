import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPermPhoneMsg = createIconClass(templateHTML)
defineCustomElement('sinch-icon-perm-phone-msg', IconPermPhoneMsg)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-perm-phone-msg': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-phone-msg': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-perm-phone-msg': TSinchIconReact,
    }
  }
}
