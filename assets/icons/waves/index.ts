import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWaves = createIconClass(templateHTML)
defineCustomElement('sinch-icon-waves', IconWaves)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-waves': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-waves': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-waves': TSinchIconReact,
    }
  }
}
