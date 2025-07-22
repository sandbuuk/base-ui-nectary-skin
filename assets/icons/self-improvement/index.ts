import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSelfImprovement = createIconClass(templateHTML)
defineCustomElement('sinch-icon-self-improvement', IconSelfImprovement)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-self-improvement': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-self-improvement': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-self-improvement': TSinchIconReact,
    }
  }
}
