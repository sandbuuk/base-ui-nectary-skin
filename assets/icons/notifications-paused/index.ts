import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotificationsPaused = createIconClass(templateHTML)
defineCustomElement('sinch-icon-notifications-paused', IconNotificationsPaused)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-paused': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-paused': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-notifications-paused': TSinchIconReact,
    }
  }
}
