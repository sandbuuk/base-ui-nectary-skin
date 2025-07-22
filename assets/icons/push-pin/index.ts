import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPushPin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-push-pin', IconPushPin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-push-pin': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-push-pin': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-push-pin': TSinchIconReact,
    }
  }
}
