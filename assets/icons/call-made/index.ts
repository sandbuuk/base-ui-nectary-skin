import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallMade = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-made', IconCallMade)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-made': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-made': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-made': TSinchIconReact,
    }
  }
}
