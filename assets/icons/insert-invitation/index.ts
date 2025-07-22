import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertInvitation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-invitation', IconInsertInvitation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-invitation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-invitation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-invitation': TSinchIconReact,
    }
  }
}
