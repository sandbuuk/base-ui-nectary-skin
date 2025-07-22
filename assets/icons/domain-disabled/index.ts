import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDomainDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-domain-disabled', IconDomainDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-domain-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-domain-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-domain-disabled': TSinchIconReact,
    }
  }
}
