import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSoap = createIconClass(templateHTML)
defineCustomElement('sinch-icon-soap', IconSoap)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-soap': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-soap': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-soap': TSinchIconReact,
    }
  }
}
