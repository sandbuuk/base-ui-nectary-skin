import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDoNotStep = createIconClass(templateHTML)
defineCustomElement('sinch-icon-do-not-step', IconDoNotStep)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-do-not-step': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-do-not-step': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-do-not-step': TSinchIconReact,
    }
  }
}
