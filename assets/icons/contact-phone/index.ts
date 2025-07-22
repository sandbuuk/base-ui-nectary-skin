import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContactPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contact-phone', IconContactPhone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contact-phone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-phone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contact-phone': TSinchIconReact,
    }
  }
}
