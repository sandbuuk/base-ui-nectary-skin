import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNextPlan = createIconClass(templateHTML)
defineCustomElement('sinch-icon-next-plan', IconNextPlan)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-next-plan': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-next-plan': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-next-plan': TSinchIconReact,
    }
  }
}
