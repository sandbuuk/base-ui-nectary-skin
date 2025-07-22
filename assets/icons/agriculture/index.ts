import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAgriculture = createIconClass(templateHTML)
defineCustomElement('sinch-icon-agriculture', IconAgriculture)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-agriculture': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-agriculture': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-agriculture': TSinchIconReact,
    }
  }
}
