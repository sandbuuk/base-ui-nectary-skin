import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEvent = createIconClass(templateHTML)
defineCustomElement('sinch-icon-event', IconEvent)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-event': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-event': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-event': TSinchIconReact,
    }
  }
}
