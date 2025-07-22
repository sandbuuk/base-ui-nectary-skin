import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHvac = createIconClass(templateHTML)
defineCustomElement('sinch-icon-hvac', IconHvac)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-hvac': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hvac': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-hvac': TSinchIconReact,
    }
  }
}
