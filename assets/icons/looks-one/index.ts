import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLooksOne = createIconClass(templateHTML)
defineCustomElement('sinch-icon-looks-one', IconLooksOne)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-looks-one': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-one': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-looks-one': TSinchIconReact,
    }
  }
}
