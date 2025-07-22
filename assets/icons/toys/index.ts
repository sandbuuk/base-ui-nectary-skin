import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconToys = createIconClass(templateHTML)
defineCustomElement('sinch-icon-toys', IconToys)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-toys': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toys': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-toys': TSinchIconReact,
    }
  }
}
