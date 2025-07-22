import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDoNotTouch = createIconClass(templateHTML)
defineCustomElement('sinch-icon-do-not-touch', IconDoNotTouch)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-do-not-touch': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-do-not-touch': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-do-not-touch': TSinchIconReact,
    }
  }
}
