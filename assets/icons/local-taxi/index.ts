import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalTaxi = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-taxi', IconLocalTaxi)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-taxi': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-taxi': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-taxi': TSinchIconReact,
    }
  }
}
