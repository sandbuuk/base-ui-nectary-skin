import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExposurePlus2 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-exposure-plus-2', IconExposurePlus2)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-exposure-plus-2': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure-plus-2': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-exposure-plus-2': TSinchIconReact,
    }
  }
}
