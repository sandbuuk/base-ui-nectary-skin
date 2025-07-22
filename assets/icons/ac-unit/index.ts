import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAcUnit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-ac-unit', IconAcUnit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-ac-unit': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ac-unit': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-ac-unit': TSinchIconReact,
    }
  }
}
