import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContactMail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contact-mail', IconContactMail)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contact-mail': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-mail': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contact-mail': TSinchIconReact,
    }
  }
}
