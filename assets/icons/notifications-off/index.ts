import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotificationsOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-notifications-off', IconNotificationsOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-notifications-off': TSinchIconReact,
    }
  }
}
