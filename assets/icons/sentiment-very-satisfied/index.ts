import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentVerySatisfied = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-very-satisfied', IconSentimentVerySatisfied)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-very-satisfied': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-very-satisfied': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-very-satisfied': TSinchIconReact,
    }
  }
}
