import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlusOne = createIconClass(templateHTML)
defineCustomElement('sinch-icon-plus-one', IconPlusOne)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-plus-one': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-plus-one': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-plus-one': TSinchIconReact,
    }
  }
}
