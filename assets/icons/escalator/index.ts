import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEscalator = createIconClass(templateHTML)
defineCustomElement('sinch-icon-escalator', IconEscalator)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-escalator': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-escalator': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-escalator': TSinchIconReact,
    }
  }
}
