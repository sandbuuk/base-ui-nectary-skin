import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlindsClosed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blinds-closed', IconBlindsClosed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blinds-closed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blinds-closed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blinds-closed': TSinchIconReact,
    }
  }
}
