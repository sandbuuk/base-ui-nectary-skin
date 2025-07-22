import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentSatisfied = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-satisfied', IconSentimentSatisfied)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-satisfied': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-satisfied': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-satisfied': TSinchIconReact,
    }
  }
}
