import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHandyman = createIconClass(templateHTML)
defineCustomElement('sinch-icon-handyman', IconHandyman)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-handyman': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-handyman': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-handyman': TSinchIconReact,
    }
  }
}
