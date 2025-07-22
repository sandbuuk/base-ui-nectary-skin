import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExposurePlus1 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-exposure-plus-1', IconExposurePlus1)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-exposure-plus-1': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure-plus-1': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-exposure-plus-1': TSinchIconReact,
    }
  }
}
