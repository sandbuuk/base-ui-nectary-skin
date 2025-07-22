import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContactSupport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contact-support', IconContactSupport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contact-support': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-support': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contact-support': TSinchIconReact,
    }
  }
}
