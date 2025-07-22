import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedMessageQuestions = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-message-questions', IconBrandedMessageQuestions)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-message-questions': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-message-questions': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-message-questions': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-message-questions': TSinchIconBrandedReact,
    }
  }
}
