import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotificationsActive = createIconClass(templateHTML)
defineCustomElement('sinch-icon-notifications-active', IconNotificationsActive)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-active': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-active': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-notifications-active': TSinchIconReact,
    }
  }
}
