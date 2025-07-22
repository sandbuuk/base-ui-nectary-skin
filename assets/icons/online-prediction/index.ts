import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOnlinePrediction = createIconClass(templateHTML)
defineCustomElement('sinch-icon-online-prediction', IconOnlinePrediction)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-online-prediction': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-online-prediction': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-online-prediction': TSinchIconReact,
    }
  }
}
