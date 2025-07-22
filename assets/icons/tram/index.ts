import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTram = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tram', IconTram)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tram': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tram': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tram': TSinchIconReact,
    }
  }
}
