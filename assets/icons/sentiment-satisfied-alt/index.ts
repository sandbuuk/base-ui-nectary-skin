import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentSatisfiedAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-satisfied-alt', IconSentimentSatisfiedAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-satisfied-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-satisfied-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-satisfied-alt': TSinchIconReact,
    }
  }
}
