import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRadioButtonUnchecked = createIconClass(templateHTML)
defineCustomElement('sinch-icon-radio-button-unchecked', IconRadioButtonUnchecked)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-radio-button-unchecked': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-radio-button-unchecked': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-radio-button-unchecked': TSinchIconReact,
    }
  }
}
