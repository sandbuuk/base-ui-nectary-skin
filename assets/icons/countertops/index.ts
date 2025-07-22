import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCountertops = createIconClass(templateHTML)
defineCustomElement('sinch-icon-countertops', IconCountertops)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-countertops': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-countertops': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-countertops': TSinchIconReact,
    }
  }
}
