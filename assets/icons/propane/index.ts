import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPropane = createIconClass(templateHTML)
defineCustomElement('sinch-icon-propane', IconPropane)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-propane': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-propane': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-propane': TSinchIconReact,
    }
  }
}
