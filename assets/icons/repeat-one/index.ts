import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRepeatOne = createIconClass(templateHTML)
defineCustomElement('sinch-icon-repeat-one', IconRepeatOne)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-repeat-one': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-repeat-one': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-repeat-one': TSinchIconReact,
    }
  }
}
