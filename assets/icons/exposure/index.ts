import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExposure = createIconClass(templateHTML)
defineCustomElement('sinch-icon-exposure', IconExposure)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-exposure': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-exposure': TSinchIconReact,
    }
  }
}
