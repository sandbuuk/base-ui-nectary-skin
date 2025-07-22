import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPestControlRodent = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pest-control-rodent', IconPestControlRodent)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pest-control-rodent': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pest-control-rodent': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pest-control-rodent': TSinchIconReact,
    }
  }
}
