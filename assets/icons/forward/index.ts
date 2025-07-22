import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconForward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-forward', IconForward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-forward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-forward': TSinchIconReact,
    }
  }
}
