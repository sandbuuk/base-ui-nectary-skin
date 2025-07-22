import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkEmailUnread = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mark-email-unread', IconMarkEmailUnread)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mark-email-unread': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-email-unread': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mark-email-unread': TSinchIconReact,
    }
  }
}
