import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHowToReg = createIconClass(templateHTML)
defineCustomElement('sinch-icon-how-to-reg', IconHowToReg)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-how-to-reg': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-how-to-reg': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-how-to-reg': TSinchIconReact,
    }
  }
}
