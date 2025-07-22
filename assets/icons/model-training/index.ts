import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconModelTraining = createIconClass(templateHTML)
defineCustomElement('sinch-icon-model-training', IconModelTraining)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-model-training': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-model-training': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-model-training': TSinchIconReact,
    }
  }
}
