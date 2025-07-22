import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGrain = createIconClass(templateHTML)
defineCustomElement('sinch-icon-grain', IconGrain)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-grain': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grain': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-grain': TSinchIconReact,
    }
  }
}
