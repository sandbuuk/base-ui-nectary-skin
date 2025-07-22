import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWbAuto = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wb-auto', IconWbAuto)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wb-auto': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wb-auto': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wb-auto': TSinchIconReact,
    }
  }
}
