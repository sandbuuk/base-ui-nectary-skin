import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHealing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-healing', IconHealing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-healing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-healing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-healing': TSinchIconReact,
    }
  }
}
