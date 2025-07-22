import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCardMembership = createIconClass(templateHTML)
defineCustomElement('sinch-icon-card-membership', IconCardMembership)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-card-membership': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-card-membership': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-card-membership': TSinchIconReact,
    }
  }
}
