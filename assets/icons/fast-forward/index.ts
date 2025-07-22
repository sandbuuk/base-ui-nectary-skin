import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFastForward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fast-forward', IconFastForward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fast-forward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fast-forward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fast-forward': TSinchIconReact,
    }
  }
}
