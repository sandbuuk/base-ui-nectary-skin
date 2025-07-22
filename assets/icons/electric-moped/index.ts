import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricMoped = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-moped', IconElectricMoped)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-moped': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-moped': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-moped': TSinchIconReact,
    }
  }
}
