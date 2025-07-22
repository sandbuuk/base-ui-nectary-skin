import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTurnedInNot = createIconClass(templateHTML)
defineCustomElement('sinch-icon-turned-in-not', IconTurnedInNot)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-turned-in-not': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-turned-in-not': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-turned-in-not': TSinchIconReact,
    }
  }
}
