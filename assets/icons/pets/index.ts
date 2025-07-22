import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPets = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pets', IconPets)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pets': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pets': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pets': TSinchIconReact,
    }
  }
}
