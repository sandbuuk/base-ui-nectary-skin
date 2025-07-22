import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOfflinePin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-offline-pin', IconOfflinePin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-offline-pin': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-offline-pin': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-offline-pin': TSinchIconReact,
    }
  }
}
