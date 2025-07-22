import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stop', IconStop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stop': TSinchIconReact,
    }
  }
}
