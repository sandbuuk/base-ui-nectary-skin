import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBatchPrediction = createIconClass(templateHTML)
defineCustomElement('sinch-icon-batch-prediction', IconBatchPrediction)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-batch-prediction': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-batch-prediction': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-batch-prediction': TSinchIconReact,
    }
  }
}
