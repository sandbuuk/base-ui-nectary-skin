import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPrintshop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-printshop', IconLocalPrintshop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-printshop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-printshop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-printshop': TSinchIconReact,
    }
  }
}
