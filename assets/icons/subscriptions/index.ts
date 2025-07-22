import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSubscriptions = createIconClass(templateHTML)
defineCustomElement('sinch-icon-subscriptions', IconSubscriptions)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-subscriptions': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subscriptions': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-subscriptions': TSinchIconReact,
    }
  }
}
