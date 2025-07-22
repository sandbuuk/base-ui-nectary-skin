import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQuestionAnswer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-question-answer', IconQuestionAnswer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-question-answer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-question-answer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-question-answer': TSinchIconReact,
    }
  }
}
