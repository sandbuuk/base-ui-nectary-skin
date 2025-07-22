import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSecurity = createIconClass(templateHTML)
defineCustomElement('sinch-icon-security', IconSecurity)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-security': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-security': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-security': TSinchIconReact,
    }
  }
}
