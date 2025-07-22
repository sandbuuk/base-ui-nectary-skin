import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContacts = createIconClass(templateHTML)
defineCustomElement('sinch-icon-contacts', IconContacts)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-contacts': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contacts': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-contacts': TSinchIconReact,
    }
  }
}
