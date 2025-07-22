import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSupervisorAccount = createIconClass(templateHTML)
defineCustomElement('sinch-icon-supervisor-account', IconSupervisorAccount)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-supervisor-account': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-supervisor-account': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-supervisor-account': TSinchIconReact,
    }
  }
}
