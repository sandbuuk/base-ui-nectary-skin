import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlashOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flash-off', IconFlashOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flash-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flash-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flash-off': TSinchIconReact,
    }
  }
}
