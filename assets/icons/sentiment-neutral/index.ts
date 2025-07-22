import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSentimentNeutral = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sentiment-neutral', IconSentimentNeutral)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-neutral': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-neutral': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sentiment-neutral': TSinchIconReact,
    }
  }
}
