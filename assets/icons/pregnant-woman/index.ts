import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPregnantWoman = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pregnant-woman', IconPregnantWoman)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pregnant-woman': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pregnant-woman': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pregnant-woman': TSinchIconReact,
    }
  }
}
