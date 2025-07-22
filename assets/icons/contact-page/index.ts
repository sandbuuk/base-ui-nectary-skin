import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContactPage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contact-page', IconContactPage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contact-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contact-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contact-page': TSinchIconReact,
    }
  }
}
