import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessibleForward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-accessible-forward', IconAccessibleForward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-accessible-forward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-accessible-forward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-accessible-forward': TSinchIconReact,
    }
  }
}
