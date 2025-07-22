import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentVeryDissatisfied = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-very-dissatisfied', IconSentimentVeryDissatisfied)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-very-dissatisfied': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-very-dissatisfied': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-very-dissatisfied': TSinchIconReact,
    }
  }
}
