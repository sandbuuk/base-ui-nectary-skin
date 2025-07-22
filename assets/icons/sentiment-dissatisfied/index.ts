import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentDissatisfied = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-dissatisfied', IconSentimentDissatisfied)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-dissatisfied': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-dissatisfied': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-dissatisfied': TSinchIconReact,
    }
  }
}
