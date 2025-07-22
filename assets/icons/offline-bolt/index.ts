import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOfflineBolt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-offline-bolt', IconOfflineBolt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-offline-bolt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-offline-bolt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-offline-bolt': TSinchIconReact,
    }
  }
}
