import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElectricBolt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-electric-bolt', IconElectricBolt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-electric-bolt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-bolt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-electric-bolt': TSinchIconReact,
    }
  }
}
