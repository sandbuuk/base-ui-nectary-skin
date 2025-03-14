import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-contact-mail', createIconClass(templateHTML))

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
    interface IntrinsicElements {
      'sinch-icon-contact-mail': TSinchIconReact,
    }
  }
}
